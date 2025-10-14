<script lang="ts" setup>

const open = defineModel('open', { default: false })

defineProps<{
    title?: string
}>()

defineEmits<{
    cancel: []
    submit: []
}>()

</script>

<template>
    <LazyUModal :open="open"
                :close="false"
                :ui="{ content: 'divide-y-0', footer: 'justify-end' }"
                :title="title">
        <template #body>
            <slot />
        </template>

        <template #footer>
            <div class="space-x-2">
                <UButton color="neutral"
                         variant="outline"
                         @click="$emit('cancel'); open = false">
                    {{ $t('action.cancel') }}
                </UButton>
                <UButton type="submit"
                         @click="$emit('submit')">
                    {{ $t('action.submit') }}
                </UButton>
            </div>
        </template>
    </LazyUModal>
</template>