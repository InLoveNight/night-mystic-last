<script setup lang="ts">

const { locale } = useI18n()

useHead({
    htmlAttrs: {
        lang: locale
    },
    meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }
    ]
})

useSeoMeta({
    titleTemplate: (title) => {
        return title ? `${$t('title')}-${title}` : $t('title')
    }
})


</script>

<template>
    <div class=" fixed bottom-0 right-0 z-20">
        <ActionChangeTheme />
        <ActionChangeLang />
    </div>
    <slot />
</template>