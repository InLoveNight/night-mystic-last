<script lang="ts" setup>

const { link = true } = defineProps<{
    link?: boolean
}>()

</script>

<template>
    <ClientOnly>
        <ULink :to="link ? $localePath('/') : undefined"
               class="font-logo font-black text-black dark:text-white"
               active-class=" text-black dark:text-white">
            night mystic
        </ULink>
        <template #fallback>
            {{ $t('title') }}
        </template>
    </ClientOnly>
</template>