<script lang="ts" setup>
import type { ButtonProps } from '@nuxt/ui';

const path = useLocalePath()

const actions = ref<ButtonProps[]>([
    {
        label: $t('banner.action1-label'),
        size: 'md',
        to: path('/how-to-use')
    }
])

const { showBanner = true } = defineProps<{
    showBanner?: boolean
}>()

</script>

<template>
    <UBanner v-if="showBanner"
             :title="$t('banner.title')"
             :actions="actions"
             :ui="{ center: 'justify-between w-full', title: 'text-ellipsis', root: 'py-2' }" />
    <slot name="header" />
    <UMain>
        <slot />
    </UMain>
    <LazyFooter />
</template>