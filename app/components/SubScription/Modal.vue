<script lang="ts" setup>
import useSubScription from '~/hooks/useSubScription';

const { openModal, close } = useSubScription()


</script>

<template>
    <UModal :open="openModal">
        <template #body>
            123456
        </template>

        <template #footer>
            不要订阅了
            <UButton @click="close">订阅</UButton>
        </template>
    </UModal>
</template>