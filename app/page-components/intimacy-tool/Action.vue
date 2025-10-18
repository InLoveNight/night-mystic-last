<script lang="ts" setup>
/** 右上角按钮 action 下拉 */

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
        icon: 'mingcute:download-3-fill',
        onSelect: () => emits('import')
    },
    {
        label: props.newButtonLabel ?? $t('action.new'),
        icon: 'mingcute:plus-fill',
        onSelect: () => emits('new')
    },
])

</script>

<template>
    <LazyUDropdownMenu :items="items"
                       arrow>
        <UButton :label="actionButtonLabel ?? $t('action.add')"
                 trailing-icon="mingcute:down-fill" />
    </LazyUDropdownMenu>
</template>