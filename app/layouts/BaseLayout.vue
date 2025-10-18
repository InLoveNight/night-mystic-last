<script lang="ts" setup>
import type { ButtonProps } from '@nuxt/ui';
import useSubScription from '~/hooks/useSubScription';

const { open } = useSubScription()

const config = useRuntimeConfig()

const actions = ref<ButtonProps[]>([
    {
        label: $t('banner.action1-label'),
        size: 'md',
        to: config.public.feedBackUrl,
        target: "_blank"
    },
    {
        label: '订阅',
        size: 'md',
        icon: 'mingcute:celebrate-fill',
        onClick: open
    }
])

const { showBanner = true, showFooter = true } = defineProps<{
    showBanner?: boolean
    showFooter?: boolean
}>()

</script>

<template>
    <UBanner v-if="showBanner"
             :title="$t('banner.title')"
             :actions="actions"
             :ui="{ center: 'justify-between w-full', title: 'text-ellipsis', root: 'py-2' }" />
    <slot name="header" />
    <UMain class="min-h-[calc(100dvh-360px)]">
        <slot />
    </UMain>
    <LazyFooter v-if="showFooter" />
</template>