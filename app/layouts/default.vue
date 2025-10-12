<script setup lang="ts">

const { locale } = useI18n()

useHead({
    htmlAttrs: {
        lang: locale
    }
})

useSeoMeta({
    titleTemplate: (title) => {
        return title ? `${$t('title')}-${title}` : $t('title')
    }
})


</script>

<template>
    <slot />
    <LazyFooter />
</template>