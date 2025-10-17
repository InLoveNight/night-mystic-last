<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
    {
        label: '隐私协议',
        to: 'https://go.nuxt.com/figma-ui',
    },
    {
        label: '免责声明',
        to: 'https://stackblitz.com/edit/nuxt-ui',
    },
    {
        label: '使用条款',
        to: 'https://github.com/nuxt/ui/releases',
    }
]
</script>

<template>
    <UFooter :ui="{ top: 'py-0 lg:py-0' }">

        <template #top>
            <LazyUSeparator>
                <UiLogo class="text-lg" />
            </LazyUSeparator>
        </template>

        <template #left>
            <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}
                <LazyULink :to="$localePath('/')">
                    {{ $t('title') }}
                </LazyULink>
            </p>
        </template>

        <UNavigationMenu :items="items"
                         variant="link" />

        <template #right>
            <UButton icon="lucide:youtube"
                     color="neutral"
                     variant="ghost"
                     to="https://go.nuxt.com/discord"
                     target="_blank"
                     size="xl"
                     aria-label="Discord" />
            <UButton icon="i-simple-icons-x"
                     color="neutral"
                     size="xs"
                     variant="ghost"
                     to="https://go.nuxt.com/x"
                     target="_blank"
                     aria-label="X" />
        </template>
    </UFooter>
</template>
