<script lang="ts" setup>
/** 工具列表 */

defineProps<{
    list: {
        title: string,
        description: string,
        color: string,
        to?: string,
        image: string
        comingSoon?: boolean
    }[]
}>()


</script>

<template>
    <div>
        <template v-for="item in list">
            <div class="rounded-lg p-5 relative -z-2"
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

                <img class="absolute right-0 -top-8 size-35 -z-1"
                     :src="item.image"
                     :alt="item.title">
            </div>
        </template>

    </div>
</template>