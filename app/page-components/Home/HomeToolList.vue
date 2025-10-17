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
        title: '查看所有亲密工具',
        description: '在这里您可以查看并免费使用我们的所有亲密工具',
        color: 'bg-purple-500/40',
        icon: 'streamline-stickies-color:easter-egg'
    },
])

</script>

<template>
    <UPageSection title="亲密工具"
                  description="亲密工具的首要因素是保证使用者隐私，并且提供最大限度的自由度。由用户自己去创建更适合自己的玩法！ 欢迎 订阅我们。 如果您有更好的想法，欢迎联系我们，一起来创造属于我们自己的亲密工具。"
                  orientation="horizontal"
                  reverse
                  variant="naked"
                  :ui="{ title: 'text-xl sm:text-2xl lg:text-3xl', container: 'lg:grid-cols-3' }"
                  :links="[
                    {
                        label: '联系我们'
                    },
                    {
                        label: '立即订阅'
                    }
                ]">
        <ToolList :list="list"
                  class="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-5 col-span-2" />
    </UPageSection>
</template>