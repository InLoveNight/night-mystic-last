<script lang="ts" setup>
import type { DropdownMenuItem } from '@nuxt/ui';

const emits = defineEmits<{
    selected: []
    edit: []
    delete: []
}>()

const items = ref<DropdownMenuItem[]>([
    { label: $t('action.edit'), icon: 'lucide:file-edit', onSelect: () => emits('edit') },
    { label: $t('action.delete'), icon: 'lucide:trash-2', onSelect: () => emits('delete') },
])

</script>

<template>
    <UDropdownMenu :items="items" arrow>
        <UButton icon="lucide:more-horizontal"
                 variant="subtle"
                 color="neutral"
                 class=""
                 @click="$emit('selected')" />
    </UDropdownMenu>
</template>