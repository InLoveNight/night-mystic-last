<script lang="ts" setup>
/** 工具列表 */

defineProps<{
    list: {
        title: string,
        description: string,
        color: string,
        icon: string,
        to?: string,
        comingSoon?: boolean
    }[]
}>()

// const list = ref([
//     {
//         title: $t('intimacy-tool.items.card.name'),
//         description: $t('intimacy-tool.items.card.description'),
//         color: 'bg-emerald-500/40',
//         icon: 'streamline-stickies-color:validation-1-duo',
//         to: '/intimacy-tool/cards'
//     },
//     {
//         title: $t('intimacy-tool.items.truth-or-dare.name'),
//         description: $t('intimacy-tool.items.truth-or-dare.description'),
//         color: 'bg-pink-500/40',
//         icon: 'streamline-stickies-color:candy-cane',
//         comingSoon: true
//     },
//     {
//         title: $t('intimacy-tool.items.roulette.name'),
//         description: $t('intimacy-tool.items.roulette.description'),
//         color: 'bg-yellow-500/40',
//         icon: 'streamline-stickies-color:wand',
//         comingSoon: true
//     },
// ])

</script>

<template>
    <div>
        <template v-for="item in list">
            <div class="rounded-lg p-5 relative"
                 :class="item.comingSoon ? `${item.color} grayscale cursor-not-allowed` : `${item.color} cursor-pointer`"
                 @click="item.to ? $router.push($localePath(item.to)) : ''">

                <div class="flex gap-2 items-center">
                    <h3 class="text-xl font-black my-2">{{ item.title }}</h3>
                    <UBadge v-if="item.comingSoon"
                            size="sm"
                            color="neutral"
                            class="h-full">
                        {{ $t('coming-soon') }}
                    </UBadge>
                </div>

                <p class="text-[14px]/5 max-w-3/5 xl:max-w-4/5">{{ item.description }}</p>

                <UIcon :name="item.icon"
                       class="absolute right-5 -top-5 size-20"></UIcon>
            </div>
        </template>

    </div>
</template>