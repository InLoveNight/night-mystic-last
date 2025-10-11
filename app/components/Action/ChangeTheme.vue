<script setup lang="ts">

</script>

<template>
    <div>
        <UButton @click="$colorMode.preference = 'dark'">dark</UButton>
        <UButton @click="$colorMode.preference = 'light'">light</UButton>
        <UButton @click="$colorMode.preference = 'system'">system</UButton>
    </div>
</template>