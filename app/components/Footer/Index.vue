<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import SubScription from '~/page-components/Home/SubScription.vue';

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
    <UFooter :ui="{ top: 'py-0 lg:py-0 mt-10' }">

        <template #top>
            <SubScription />
        </template>

        <template #left>
            <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}
                <LazyULink :to="$localePath('/')">
                    {{ $t('title') }}
                </LazyULink>
            </p>
        </template>



        <template #right>
            <UNavigationMenu :items="items"
                             variant="link" />
        </template>
    </UFooter>
</template>
