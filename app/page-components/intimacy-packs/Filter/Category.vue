<script lang="ts" setup>

defineEmits<{
    click: [category: GameCategory]
}>()

</script>

<template>
    <div class="flex items-start"> 
        <div class=" text-nowrap mt-1 font-semibold">{{ $t('intimacy-packs.category') }}：</div>
        <div>
            <UButton v-for="category in ['Card'] as GameCategory[]"
                     variant="link"
                     :color="$route.query.category === category ? 'primary' : 'neutral'"
                     :label="$t(`category.${category}`)"
                     @click="$emit('click', category)" />
        </div>
    </div>
</template>