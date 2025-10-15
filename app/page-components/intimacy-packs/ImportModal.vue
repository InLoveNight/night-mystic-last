<script lang="ts" setup>
import type { ImportStep } from '~/types/some';

const open = defineModel('open', { default: false })

defineProps<{
    step: ImportStep
}>()

defineEmits<{
    importModalClose: []
}>()

</script>

<template>
    <LazyUModal :close="{ onClick: () => $emit('importModalClose') }"
                :open="open"
                :ui="{ content: 'divide-y-0', body: 'pt-0 sm:pt-0' }">
        <template #body>
            <div class=" mt-5">
                <div class="flex flex-col items-center mb-10">
                    <UIcon v-if="step.state === 'loading'"
                           name="lucide:loader"
                           class=" size-20 mb-5 animate-spin" />
                    <UIcon v-if="step.state === 'success'"
                           name="line-md:circle-filled-to-confirm-circle-filled-transition"
                           class=" size-20 mb-5 text-success-500" />
                    <UIcon v-if="step.state === 'error'"
                           name="line-md:close-circle-filled"
                           class=" size-20 mb-5 text-error-500" />

                    {{ step.message }}
                </div>
                <div v-if="step.state === 'success'"
                     class="flex justify-between gap-5">
                    <UButton block
                             size="xl"
                             color="secondary">编辑游戏</UButton>
                    <UButton block
                             size="xl">立即开始</UButton>
                </div>
            </div>
        </template>
    </LazyUModal>
</template>