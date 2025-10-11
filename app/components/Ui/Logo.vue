<script lang="ts" setup>

</script>

<template>
    <ClientOnly>
        <ULink :to="$localePath('/')"
               class=" font-[LogoFont] font-black text-3xl text-black dark:text-white"
               active-class=" text-black dark:text-white">
            night mystic
        </ULink>
    </ClientOnly>
</template>