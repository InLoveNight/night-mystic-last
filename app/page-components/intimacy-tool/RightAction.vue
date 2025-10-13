<script lang="ts" setup>
import type { DropdownMenuItem } from '@nuxt/ui';

const props = defineProps<{
    actionButtonLabel?: string,
    importButtonLabel?: string,
    newButtonLabel?: string
}>()

const emits = defineEmits<{
    new: []
    import: []
    clear: []
}>()

const items = ref<DropdownMenuItem[]>([
    {
        label: props.importButtonLabel ?? $t('action.import'),
        icon: 'lucide:hard-drive-download',
        onSelect: () => emits('import')
    },
    {
        label: props.newButtonLabel ?? $t('action.add'),
        icon: 'lucide:plus',
        onSelect: () => emits('new')
    },
])

</script>

<template>
    <LazyUDropdownMenu :items="items"
                       arrow>
        <UButton :label="actionButtonLabel ?? $t('action.add')"
                 trailing-icon="lucide:chevron-down" />
    </LazyUDropdownMenu>
</template>