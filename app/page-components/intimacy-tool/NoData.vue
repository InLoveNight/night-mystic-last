<script lang="ts" setup>
/** 无数据 */

defineProps<{
    result: string
}>()

</script>

<template>
    <div class="text-xs/5 text-center text-muted px-5">
        {{ result }}
    </div>
</template>