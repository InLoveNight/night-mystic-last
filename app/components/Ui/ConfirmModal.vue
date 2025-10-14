<script lang="ts" setup>
import type { ButtonProps } from '@nuxt/ui';


const open = defineModel('open', { default: false })

defineProps<{
    title?: string
    confirmProps?: ButtonProps
}>()

defineEmits<{
    cancel: []
    confirm: []
}>()

</script>

<template>
    <LazyUModal :open="open"
                :title="title"
                :close="false"
                :ui="{ content: 'divide-y-0' }">
        <template #body>
            <slot name="body">
                <div>确认要删除吗？</div>
            </slot>
        </template>

        <template #footer>
            <slot name="footer">
                <div class="w-full flex gap-3 justify-end">
                    <UButton @click="$emit('cancel'); open = false"
                             variant="outline"
                             color="neutral">
                        {{ $t('action.cancel') }}
                    </UButton>
                    <UButton v-bind="confirmProps"
                             @click="$emit('confirm')">
                        {{ $t('action.confirm') }}
                    </UButton>
                </div>
            </slot>
        </template>
    </LazyUModal>
</template>