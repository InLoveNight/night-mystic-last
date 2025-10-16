<script lang="ts" setup>
import DisableRefreshLayout from '~/layouts/DisableRefreshLayout.vue';
import { useLocaleCards } from '~/hooks/locale-data/cards';
import type { schemaCard } from '~~/shared/zod-schema';
import { draw } from 'radash';

const { card, actionCards } = useLocaleCards()

onMounted(() => {
    actionCards.queryById(useRoute().params.id as string)
})

const selected = useLocalStorage<schemaCard.CardContent[]>('play-card-random', [])

const randomCardModalOpen = ref<boolean>(false)
const selectedCard = ref<schemaCard.CardContent>()

const randomCard = () => {
    const drawed = draw(card.value.contents)!
    if (selected.value.includes(drawed)) {
        if (selected.value.length === card.value.contents.length) {
            selected.value = []
        }
        return randomCard()
    }
    selected.value.push(drawed)
    return drawed
}

const handleRandom = () => {
    const res = randomCard()
    randomCardModalOpen.value = true
    selectedCard.value = res
}

const settingOpen = ref<boolean>(false)

</script>

<template>

    <LazyHeaderPlayMenu v-model:open="settingOpen">

    </LazyHeaderPlayMenu>

    <LazyUModal :open="randomCardModalOpen"
                :close="false"
                :title="selectedCard?.title"
                :ui="{ content: 'divide-y-0' }">
        <template #content>
            <div class="p-5 space-y-5">

                <h2 v-if="selectedCard?.title"
                    class=" text-muted font-semibold text-center text-md line-clamp-1">
                    {{ selectedCard.title }}
                </h2>

                <div class="font-result p-5 rounded-lg bg-elevated/50 font-black text-lg">
                    {{ selectedCard?.content }}
                </div>

                <div class="flex justify-end">
                    <UButton size="xl"
                             @click="randomCardModalOpen = false">
                        OK
                    </UButton>
                </div>
            </div>
        </template>
    </LazyUModal>



    <DisableRefreshLayout>
        <HeaderWithBack>
            <template #right>
                <div class="flex gap-5">
                    <UIcon name="lucide:settings"
                           @click="settingOpen = true"
                           class="size-5" />
                </div>
            </template>
        </HeaderWithBack>

        <Layout7XL class="px-2 mt-5 ">

            <div
                 class=" ring-2 rounded-lg w-xs h-[500px] text-center fixed left-1/2 -translate-x-1/2 top-7/12 -translate-y-7/12">
                <div class="font-logo font-bold text-5xl mt-10">
                    Night Mystic
                </div>

                <p class="mt-20 font-logo text-3xl font-bold">{{ selected.length }} / {{ card.contents.length }}</p>

                <div @click="handleRandom"
                     class=" w-[100px] h-[100px] rounded-full bg-primary shadow-lg flex items-center justify-center absolute left-1/2 -translate-x-1/2 bottom-10 cursor-pointer">
                    <!-- <p class=" text-inverted font-black text-xl tracking-widest">抽取</p> -->
                    <UButton size="xl"
                             class=" font-black tracking-widest">
                        抽取
                    </UButton>
                </div>
            </div>

        </Layout7XL>

    </DisableRefreshLayout>
</template>