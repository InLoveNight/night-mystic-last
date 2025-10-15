<script lang="ts" setup>
import BaseLayout from '~/layouts/BaseLayout.vue';
import Card from "~/page-components/intimacy-packs/Contents/Card.vue"
import useCheckIdRepeat from '~/hooks/useCheckIdRepeat';
import ImportModal from '~/page-components/intimacy-packs/ImportModal.vue';
import { schemaCard } from '~~/shared/zod-schema';
import { sleep } from 'radash';
import dexieDb, { execute } from '~/libs/dexie';
import type { ImportStep } from '~/types/some';

const { check, refresh } = useCheckIdRepeat()
const route = useRoute()

const { data: game, error } = await useFetch<BackEndCard | BackEndTruthOrDare>(`/api/games/${route.params.id}`)
const checkedId = computed(() => check(game.value?.id))
if (error.value) throw error.value


// import
const importConfirmOpen = ref<boolean>(false)
const importModalOpen = ref<boolean>(false)

const step = ref<ImportStep>({
    state: 'loading',
    message: 'step-fetch'
})

const handleConfirm = async () => {
    importModalOpen.value = true
    importConfirmOpen.value = false
    await importing()
}

const importing = async () => {
    const clonedData = { ...game.value?.data, id: checkedId.value ? generateUuid() : game.value?.id } as schemaCard.Card
    await sleep(1000)
    switch (game.value?.category) {
        case 'Card':
            step.value.message = 'step-parse'
            const { success, data } = schemaCard.game.safeParse(clonedData)
            await sleep(1000)
            if (success) {
                const { success } = await execute(() => dexieDb.cards.add(data))
                await sleep(1000)
                if (success) {
                    step.value = { state: 'success', message: 'step-import-success' }
                } else {
                    step.value = { state: 'error', message: 'step-import-error' }
                }
            } else {
                step.value = { state: 'error', message: 'step-parse-error' }
            }
            refresh()   // 刷新一下本地 ids 数据... 因为异步，这是折中办法。
            break;

        default:
            break;
    }



}

const handleImportModalClose = async () => {
    if (step.value.state !== 'loading') {
        importModalOpen.value = false
        await sleep(1000)
        step.value = { state: 'loading', message: 'step-fetch' }
    }
}


</script>

<template>

    <ImportModal v-model:open="importModalOpen"
                 :step="step"
                 @import-modal-close="handleImportModalClose" />

    <LazyUiConfirmModal title="确认导入？"
                        v-model:open="importConfirmOpen"
                        @confirm="handleConfirm">
        <template #body>
            {{ checkedId ? '你已经导入过了，还要重新导入吗？' : '确认要导入吗？' }}
        </template>
    </LazyUiConfirmModal>

    <BaseLayout v-if="game">
        <HeaderGlobal>
            <template #right-action>
                <UButton size="xl"
                         class="rounded-full px-5"
                         @click="importConfirmOpen = true">
                    {{ $t('action.import') }}
                </UButton>
            </template>
        </HeaderGlobal>



        <LazyUContainer>
            <LazyUPageHeader :description="game.data.description"
                             :links="[{
                                label: '分享'
                            }]">

                <template #title>
                    {{ game.data.name }}
                    <UBadge color="error"
                            size="xl"
                            class="rounded-full">18+</UBadge>
                </template>

                <div class="mt-5">
                    <NuxtLinkLocale :to="`/intimacy-packs?category=${game.category}`">
                        <UButton variant="link"
                                 class=" text-lg px-0">
                            {{ $t(`category.${game.category}`) }}
                        </UButton>
                    </NuxtLinkLocale>

                    <div class="flex items-center gap-2">
                        <NuxtLinkLocale v-for="(tag, key) in game.data.tags"
                                        :key="key"
                                        :to="`/intimacy-packs?category=${game.category}&tag=${tag}`">
                            <UBadge size="md"> {{ tag }} </UBadge>
                        </NuxtLinkLocale>
                    </div>
                </div>
            </LazyUPageHeader>

            <div class="mt-5">
                <Card :data="game as BackEndCard" />
            </div>
        </LazyUContainer>


    </BaseLayout>
</template>