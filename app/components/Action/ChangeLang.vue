<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui';

const { setLocale } = useI18n()

const items = computed<DropdownMenuItem[]>(() => ([
    { label: 'English', onSelect: () => setLocale('en'), icon:'circle-flags:us' },
    { label: '简体中文', onSelect: () => setLocale('zh-CN'), icon:'circle-flags:cn' },
]))

</script>

<template>
    <UDropdownMenu :items="items">
        <UButton icon="lucide:languages"
                 aria-label="Change Language"
                 color="neutral"
                 variant="ghost" />
    </UDropdownMenu>
</template>