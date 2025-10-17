<script setup lang="ts">
import BaseLayout from '~/layouts/BaseLayout.vue';
import Hero from '~/page-components/Home/Hero.vue';
import About from '~/page-components/Home/About.vue';
import SubScription from '~/page-components/Home/SubScription.vue';
import HomeToolList from '~/page-components/Home/HomeToolList.vue';
import Reviews from '~/page-components/Home/Reviews.vue';

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
        <About />
        <HomeToolList />
        <SubScription />
        <Reviews />




    </BaseLayout>
</template>

<style scoped></style>