<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import useSubScription from '~/hooks/useSubScription';

const { open, openModal } = useSubScription()

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
    <UFooter :ui="{ top: 'py-0 lg:py-0 mt-10', root: 'bg-muted' }">

        <template #top>
            <SubScriptionSection>
                <div class="space-y-3">
                    <SubScriptionForm @click="open" />
                    <SubScriptionSocial />
                </div>
            </SubScriptionSection>
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
