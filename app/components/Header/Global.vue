<script lang="ts" setup>

import type { NavigationMenuItem } from '@nuxt/ui';

const localePath = useLocalePath()

const menu = ref<NavigationMenuItem[]>([
    { label: $t('menu.home'), icon: 'lucide:home', to: localePath('/') },
    { label: $t('menu.intimacy-tool'), icon: 'lucide:candy', to: localePath('/intimacy-tool') },
    { label: $t('menu.intimacy-packs'), icon: 'lucide:candy-cane', to: localePath('/intimacy-packs') },
    { label: $t('menu.contact'), icon: 'lucide:mail' },
])

</script>

<template>
    <UHeader :ui="{ body: 'h-full' }">
        <UNavigationMenu :items="menu"
                         :ui="{ list: 'space-x-2', link: 'px-3' }" />

        <template #title>
            <LazyUiLogo />
        </template>

        <template #right>
            <div class="flex items-center gap-5">
                <div class="hidden lg:flex">
                    <LazyActionChangeTheme />
                    <LazyActionChangeLang />
                </div>
                <slot name="right-action" />
            </div>
        </template>

        <template #body>
            <div class="flex flex-col h-full justify-between">
                <UNavigationMenu :items="menu"
                                 orientation="vertical"
                                 :ui="{ link: 'px-5 py-3', list: 'space-y-2' }" />
                <div class="flex justify-end lg:hidden">
                    <LazyActionChangeTheme />
                    <LazyActionChangeLang />
                </div>
            </div>
        </template>
    </UHeader>
</template>