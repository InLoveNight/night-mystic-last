<script lang="ts" setup>

defineProps<{
    result: string
}>()

</script>

<template>
    <div class="text-xs/5 text-center text-muted px-5">
        {{ result }}
    </div>
</template>