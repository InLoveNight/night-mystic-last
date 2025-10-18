<script lang="ts" setup>
import type { ImportStep } from '~/types/some';

const open = defineModel('open', { default: false })

const { editLocaleBtnText = '编辑游戏', toLocaleListBtnText = '跳转至本地游戏列表' } = defineProps<{
    step: ImportStep
    thisGameId?: string
    editLocaleBtnText?: string
    toLocaleListBtnText?: string
}>()

defineEmits<{
    importModalClose: []
}>()

</script>

<template>
    <LazyUModal :close="{ onClick: () => $emit('importModalClose'), loading: step.state === 'loading' }"
                :open="open"
                :ui="{ content: 'divide-y-0', body: 'pt-0 sm:pt-0' }">
        <template #body>
            <div class=" mt-5">
                <div class="flex flex-col items-center mb-10">
                    <UIcon v-if="step.state === 'loading'"
                           name="mingcute:loading-3-fill"
                           class=" size-20 mb-5 animate-spin" />
                    <UIcon v-if="step.state === 'success'"
                           name="line-md:circle-filled-to-confirm-circle-filled-transition"
                           class=" size-20 mb-5 text-success-500" />
                    <UIcon v-if="step.state === 'error'"
                           name="line-md:close-circle-filled"
                           class=" size-20 mb-5 text-error-500" />

                    {{ $t(`step.step.${step.message}`) }}
                </div>
                <div v-if="step.state === 'success'"
                     class="flex justify-between gap-5 flex-col md:flex-row">
                    <UButton block
                             size="xl"
                             :to="$localePath(`/intimacy-tool/cards/edit/${thisGameId}`)"
                             color="secondary">
                        {{ editLocaleBtnText }}
                    </UButton>
                    <UButton block
                             size="xl"
                             class=" text-nowrap"
                             :to="$localePath('/intimacy-tool/cards')">
                        {{ toLocaleListBtnText }}
                    </UButton>
                </div>
                <div v-else-if="step.state === 'error'"
                     class="flex justify-between gap-5">
                    <UButton block
                             size="xl"
                             color="secondary">
                        {{ $t('action.feedback') }}
                    </UButton>
                </div>
            </div>
        </template>
    </LazyUModal>
</template>