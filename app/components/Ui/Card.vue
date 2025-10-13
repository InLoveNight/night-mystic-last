<script lang="ts" setup>

defineProps<{
    title?: string
    action?: boolean
    actionLabel?: string
}>()

defineEmits<{
    action: []
}>()

</script>

<template>
    <div class="bg-elevated/50 rounded-lg p-5">
        <div :class="title && action ? 'flex justify-between items-center mb-5' : ''">
            <slot name="tite">
                <h2 v-if="title"
                    class=" text-xl font-black">
                    {{ title }}
                </h2>
            </slot>

            <slot name="action">
                <UButton v-if="action"
                         :label="actionLabel"
                         @click="$emit('action')" />
            </slot>
        </div>

        <slot />
    </div>
</template>