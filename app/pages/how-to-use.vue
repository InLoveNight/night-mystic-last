<script lang="ts" setup>
import BaseLayout from '~/layouts/BaseLayout.vue';
const links = ref([
    {
        label: 'Documentation',
        icon: 'i-lucide-book-open',
        to: '/docs/getting-started'
    },
    {
        label: 'Components',
        icon: 'i-lucide-box',
        to: '/docs/components'
    },
    {
        label: 'Figma Kit',
        icon: 'i-simple-icons-figma',
        to: 'https://go.nuxt.com/figma-ui',
        target: '_blank'
    },
    {
        label: 'Releases',
        icon: 'i-simple-icons-github',
        to: 'https://github.com/nuxt/ui/releases',
        target: '_blank'
    }
])

</script>

<template>
    <BaseLayout :show-banner="false">
        <LazyHeaderGlobal />

        <LazyLayout7XL>
            <LazyUPageHeader title="使用帮助"
                             description="这里是一些使用帮助" />

            <div class="mt-10">
                123
            </div>
        </LazyLayout7XL>
    </BaseLayout>
</template>