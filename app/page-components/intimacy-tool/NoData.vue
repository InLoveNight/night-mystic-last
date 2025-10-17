<script lang="ts" setup>

/** 无数据 */

defineProps<{
    result: string
    showImport?: boolean
    showNew?: boolean
    newTo?: string
    importTo?: string
}>()

defineEmits<{
    import: [],
    new: []
}>()

</script>

<template>
    <div class="text-xs/5 text-center text-muted px-5">
        {{ result }}
        <slot name="action">
            <div class="flex justify-center gap-5 mt-5">
                <UButton v-if="showNew"
                         color="secondary"
                         icon="lucide:plus"
                         :to="newTo"
                         @click="$emit('new')">
                    {{ $t('action.new') }}
                </UButton>
                <UButton v-if="showImport"
                         color="secondary"
                         icon="lucide:hard-drive-download"
                         :to="importTo"
                         @click="$emit('import')">
                    {{ $t('action.import') }}
                </UButton>
            </div>
        </slot>
    </div>
</template>