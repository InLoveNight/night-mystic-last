<script setup lang="ts">
import BaseLayout from '~/layouts/BaseLayout.vue';
import Hero from '~/page-components/Home/Hero.vue';
import About from '~/page-components/Home/About.vue';
import HomeToolList from '~/page-components/Home/HomeToolList.vue';
import Faq from '~/page-components/Home/Faq.vue';

useSeoMeta({
    title: $t('seo.home.title'),
    description: $t('seo.home.description')
})

</script>

<template>
    <BaseLayout>
        <template #header>
            <HeaderGlobal>
                <template #right-action>
                    <LazySupportMe />
                </template>
            </HeaderGlobal>
        </template>

        <Hero />
        <About />
        <HomeToolList />
        <Faq />


    </BaseLayout>
</template>

<style scoped></style>