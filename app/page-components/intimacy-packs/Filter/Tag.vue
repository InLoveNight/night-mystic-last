<script lang="ts" setup>

defineProps<{
    tags: string[]
}>()

defineEmits<{
    click: [tag: string]
}>()

</script>

<template>
    <div class="flex items-start">
        <div class="text-nowrap mt-1 font-semibold">{{ $t('intimacy-packs.tag') }}：</div>
        <div>
            <UButton v-for="tag in tags"
                     variant="link"
                     :color="$route.query.tag === tag ? 'primary' : 'neutral'"
                     :label="tag"
                     @click="$emit('click', tag)" />
        </div>
    </div>
</template>