<script lang="ts" setup>
import BaseLayout from '~/layouts/BaseLayout.vue';
import Tag from '~/page-components/intimacy-packs/Filter/Tag.vue';
import Category from '~/page-components/intimacy-packs/Filter/Category.vue';
import NoData from '~/page-components/intimacy-tool/NoData.vue';
import GameItem from '~/page-components/intimacy-packs/GameItem.vue';

const { locale } = useI18n(), $path = useLocalePath()
const route = useRoute(), router = useRouter()

const queries = ref<{ tag?: string, category?: string }>({
    tag: route.query.tag as undefined,
    category: route.query.category as undefined
})


const { data: tags } = await useFetch<string[]>('/api/games/tags', { default: () => [], query: { ...queries.value }, watch: [locale] })

const { data: games } = await useFetch<BackEndData[]>('/api/games', { default: () => [], query: { ...queries.value }, watch: [locale] })

watch(() => queries.value, async (q) => {
    games.value = await $fetch<BackEndData[]>('/api/games', { query: { ...q } })
    tags.value = await $fetch<string[]>('/api/games/tags', { query: { category: q.category } })
}, { deep: true, immediate: true })


const handleCategory = (category: GameCategory) => {
    queries.value = { category, tag: undefined }
    router.replace($path({ path: '/intimacy-packs', query: { category } }))
}

const handleTag = (tag: string) => {
    queries.value.tag = tag
    router.replace($path({ path: '/intimacy-packs', query: { ...queries.value, tag } }))
}

const cleanFilter = async (have: boolean = false) => {
    if (have) {
        const target = $path('/intimacy-packs')
        window.location.replace(target)
        return
    }
    queries.value = {}
    router.replace($path({ path: '/intimacy-packs', query: {} }))

}
watch(() => locale, () => {
    cleanFilter(true)
}, { deep: true })


</script>

<template>
    <BaseLayout :show-banner="false">
        <template #header>
            <LazyHeaderGlobal></LazyHeaderGlobal>
        </template>

        <LazyUContainer>
            <LazyUPageHeader :title="$t('intimacy-packs.header.title')"
                             :description="$t('intimacy-packs.header.description')"
                             :links="[{
                                label: $t('banner.action1-label'),
                                trailingIcon: 'lucide:message-circle-question-mark',
                                variant: 'soft'
                            }]">

            </LazyUPageHeader>

            <LazyUiCard class="mt-5  sticky top-20 z-10">
                <Category @click="handleCategory" />
                <Tag :tags="tags"
                     @click="handleTag"
                     class="mt-3" />

                <div v-if="queries.category || queries.tag"
                     class="w-full flex justify-end mt-5">
                    <UButton @click="cleanFilter()"
                             class="rounded-full"
                             size="xs"
                             variant="outline"
                             color="error">
                        {{ $t('intimacy-packs.clear-filter') }}
                    </UButton>
                </div>
            </LazyUiCard>

            <div class="mt-5">

                <NoData v-if="!games.length"
                        :result="$t('result.search-no-data')" />

                <div v-else
                     class="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    <GameItem v-for="game in games"
                              :game="game" />
                </div>

            </div>

        </LazyUContainer>
    </BaseLayout>
</template>