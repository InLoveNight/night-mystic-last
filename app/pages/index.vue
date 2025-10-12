<script setup lang="ts">
import BaseLayout from '~/layouts/BaseLayout.vue';
import Hero from '~/page-components/Home/Hero.vue';

</script>

<template>
    <BaseLayout>
        <template #header>
            <HeaderGlobal>

            </HeaderGlobal>
        </template>

        <Hero />


    </BaseLayout>
</template>

<style scoped></style>