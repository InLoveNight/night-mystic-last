<script lang="ts" setup>
import type { Container } from '@tsparticles/engine';

const container = ref<Container | null>()

defineProps<{
    option: Record<any, any>
}>()

defineExpose({ container })

</script>

<template>
    <vue-particles id="tsparticles"
                   :options="option"
                   @particles-loaded="(c: Container) => container = c" />
</template>