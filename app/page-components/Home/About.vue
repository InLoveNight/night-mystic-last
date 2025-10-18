<script lang="ts" setup>
type About = {
    title: string,
    lang: Language,
    description: string,
    data: {
        title: string,
        description: string,
        content: string,
        icon: string,
        iconColor: string,
    }[]
}

const { locale } = useI18n()

const { data } = await useFetch<About>('/api/home/faq', { watch: [locale] })

</script>

<template>
    <UPageSection v-if="data"
                  :title="data?.title"
                  :description="data.description"
                  :ui="{ root: 'bg-muted', title: 'text-xl sm:text-2xl lg:text-3xl' }">
        <template #body>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div v-for="item in data.data"
                     class="space-y-2">
                    <UIcon :name="item.icon"
                           class="size-8 "
                           :style="{ color: `var(--${item.iconColor})` }" />
                    <h3 class=" font-black text-lg">{{ item.title }}</h3>
                    <p class=" font-semibold text-md">{{ item.description }}</p>
                    <p class=" text-[14px] text-toned">{{ item.content }}</p>
                </div>
            </div>
        </template>
    </UPageSection>
</template>