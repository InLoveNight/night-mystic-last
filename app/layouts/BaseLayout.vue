<script lang="ts" setup>
import type { ButtonProps } from '@nuxt/ui';

const actions = ref<ButtonProps[]>([
    {
        label: $t('banner.action1-label'),
        size: 'md'
    }
])

</script>

<template>
    <UBanner :title="$t('banner.title')"
             :actions="actions"
             close
             :ui="{ center: 'justify-between w-full', title: 'text-ellipsis', root: 'py-2' }" />
    <slot name="header" />
    <UMain>
        <slot />
    </UMain>
    <LazyFooter />
</template>