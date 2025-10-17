<script lang="ts" setup>
import BaseLayout from '~/layouts/BaseLayout.vue';
import ToolList from '~/page-components/intimacy-tool/ToolList.vue';
import SubScription from '~/page-components/Home/SubScription.vue';

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
])


</script>

<template>
    <BaseLayout>
        <template #header>
            <LazyHeaderGlobal>
                <template #right-action>
                    <SupportMe />
                </template>
            </LazyHeaderGlobal>
        </template>

        <UContainer>
            <LazyUPageHeader :title="$t('intimacy-tool.header.title')"
                             :description="$t('intimacy-tool.header.description')">
            </LazyUPageHeader>

            <ToolList :list="list"
                      class="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 mt-10" />
        </UContainer>
    </BaseLayout>

</template>