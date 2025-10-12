<script lang="ts" setup>

</script>

<template>
    <ClientOnly>
        <ULink :to="$localePath('/')"
               class="font-logo font-black text-3xl text-black dark:text-white"
               active-class=" text-black dark:text-white">
            night mystic
        </ULink>
        <template #fallback>
            {{ $t('title') }}
        </template>
    </ClientOnly>
</template>