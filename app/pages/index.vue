<script setup lang="ts">
import BaseLayout from '~/layouts/BaseLayout.vue';
import Hero from '~/page-components/Home/Hero.vue';

useSeoMeta({
    title: $t('seo.home.title'),
    description: $t('seo.home.description')
})

</script>

<template>
    <BaseLayout>
        <template #header>
            <HeaderGlobal></HeaderGlobal>
        </template>

        <Hero />


    </BaseLayout>
</template>

<style scoped></style>