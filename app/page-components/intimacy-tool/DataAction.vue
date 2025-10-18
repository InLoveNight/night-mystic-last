<script lang="ts" setup>
/** 数据下拉操作选择 */

import type { DropdownMenuItem } from '@nuxt/ui';

const emits = defineEmits<{
    selected: []
    edit: []
    delete: []
}>()

const items = ref<DropdownMenuItem[]>([
    { label: $t('action.edit'), icon: 'mingcute:edit-4-fill', onSelect: () => emits('edit') },
    { label: $t('action.delete'), icon: 'mingcute:delete-2-fill', onSelect: () => emits('delete') },
])

</script>

<template>
    <UDropdownMenu :items="items"
                   arrow>
        <UButton icon="mingcute:more-1-fill"
                 variant="subtle"
                 color="neutral"
                 class=""
                 @click="$emit('selected')" />
    </UDropdownMenu>
</template>