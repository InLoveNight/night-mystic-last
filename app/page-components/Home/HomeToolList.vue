<script lang="ts" setup>
import ToolList from '../intimacy-tool/ToolList.vue';

const list = ref([
    {
        title: $t('intimacy-tool.items.card.name'),
        description: $t('intimacy-tool.items.card.description'),
        color: 'bg-emerald-500/40',
        icon: 'streamline-stickies-color:validation-1-duo',
        to: '/intimacy-tool/cards'
    },
    {
        title: $t('intimacy-tool.items.truth-or-dare.name'),
        description: $t('intimacy-tool.items.truth-or-dare.description'),
        color: 'bg-pink-500/40',
        icon: 'streamline-stickies-color:candy-cane',
        comingSoon: true
    },
    {
        title: $t('intimacy-tool.items.roulette.name'),
        description: $t('intimacy-tool.items.roulette.description'),
        color: 'bg-yellow-500/40',
        icon: 'streamline-stickies-color:wand',
        comingSoon: true
    },
    {
        title: $t('intimacy-tool.home.more.title'),
        description: $t('intimacy-tool.home.more.description'),
        color: 'bg-purple-500/40',
        icon: 'streamline-stickies-color:easter-egg'
    },
])

</script>

<template>
    <UPageSection :title="$t('intimacy-tool.header.title')"
                  :description="$t('intimacy-tool.home.description')"
                  orientation="horizontal"
                  reverse
                  variant="naked"
                  :ui="{ title: 'text-xl sm:text-2xl lg:text-3xl', container: 'lg:grid-cols-3' }"
                  :links="[
                    {
                        label: $t('menu.contact'),
                        to: $localePath('/contact')
                    }
                ]">
        <ToolList :list="list"
                  class="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-5 col-span-2" />
    </UPageSection>
</template>