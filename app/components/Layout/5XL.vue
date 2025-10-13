<script lang="ts" setup>

const { bottomPadding = false } = defineProps<{
    bottomPadding?: boolean
}>()

</script>

<template>
    <UContainer class="max-w-5xl px-2 sm:px-2 lg:px-2">
        <slot />
        <div v-show="bottomPadding"
             class="h-10"></div>
    </UContainer>
</template>