<script lang="ts" setup>
import type { ButtonProps } from '@nuxt/ui';

const { t } = useI18n()

const actions = ref<ButtonProps[]>([
    {
        label: t('banner.action1-label'),
    }
])

</script>

<template>
    <UBanner :title="t('banner.title')"
             :actions="actions"
             :ui="{ center: 'justify-between w-full' }" />
    <slot name="header" />
    <UMain>
        <slot />
    </UMain>
</template>