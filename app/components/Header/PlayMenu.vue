<script lang="ts" setup>

const open = defineModel('open', { default: false })

</script>

<template>
    <USlideover v-model:open="open"
                side="left">

        <template #header>
            <div>Game Setting</div>
        </template>

        <template #content>

            <div>
                123456
            </div>


        </template>
    </USlideover>
</template>