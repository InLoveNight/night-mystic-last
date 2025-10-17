<script lang="ts" setup>
import DisableRefreshLayout from '~/layouts/DisableRefreshLayout.vue';
import LeaveConfirm from '~/page-components/intimacy-tool/LeaveConfirm.vue';
import { useLocaleCards } from '~/hooks/locale-data/cards';
import usePlaySetting from '~/hooks/usePlaySetting';
import ResultGameModal from '~/page-components/intimacy-tool/ResultGameModal.vue';
import type { schemaCard } from '~~/shared/zod-schema';
import { draw } from 'radash';

const { card, actionCards } = useLocaleCards()

// 背景动画
const dh = useTemplateRef('dh')

// 加载数据
onMounted(() => {
    actionCards.queryById(useRoute().params.id as string)
})

const selected = useLocalStorage<schemaCard.CardContent[]>('play-card-random', [])

const randomCardModalOpen = ref<boolean>(false)
const selectedCard = ref<schemaCard.CardContent>()

const randomCard = () => {
    const drawed = draw(card.value.contents)!
    if (selected.value.includes(drawed)) {
        if (selected.value.length === card.value.contents.length) {
            selected.value = []
        }
        return randomCard()
    }
    selected.value.push(drawed)
    return drawed
}

const handleRandom = () => {
    const res = randomCard()
    randomCardModalOpen.value = true
    selectedCard.value = res
    dh.value?.pause()
}

const settingOpen = ref<boolean>(false)

// play setting
const { playSetting } = usePlaySetting()



</script>

<template>
    <LeaveConfirm @before-leave-action="() => selected = []" />

    <LazyHeaderPlayMenu v-model:open="settingOpen" />

    <ResultGameModal v-model:open="randomCardModalOpen"
                     :result="selectedCard"
                     @ok="dh?.play()" />

    <DisableRefreshLayout>
        <HeaderWithBack :default-back-action="false"
                        @back="() => $router.push($localePath('/intimacy-tool/cards'))">
            <template #right>
                <div class="flex gap-5">
                    <UIcon name="lucide:settings"
                           @click="settingOpen = true"
                           class="size-5 cursor-pointer" />
                </div>
            </template>
        </HeaderWithBack>

        <Layout7XL class="px-2 mt-5 ">

            <div
                 class=" ring-2 rounded-lg w-xs h-[500px]  md:w-md md:h-[600px] lg:w-lg lg:h-[800px] text-center fixed left-1/2 -translate-x-1/2 top-7/12 -translate-y-7/12 bg-default/5 backdrop-blur-xs">
                <div class="font-logo font-bold text-5xl mt-15 lg:text-7xl select-none">
                    Night Mystic
                </div>

                <p v-if="playSetting.count"
                   class="mt-20 font-logo text-3xl font-bold lg:text-6xl">
                    {{ selected.length }} / {{ card.contents.length }}
                </p>

                <div @click="handleRandom"
                     class=" w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full bg-primary shadow-lg flex items-center justify-center absolute left-1/2 -translate-x-1/2 bottom-10 cursor-pointer">
                    <!-- <p class=" text-inverted font-black text-xl tracking-widest">抽取</p> -->
                    <UButton size="xl"
                             class=" font-black tracking-widest text-xl lg:text-2xl">
                        {{ $t('play.random-button') }}
                    </UButton>
                </div>
            </div>

        </Layout7XL>

    </DisableRefreshLayout>

    <LazyParticlesConfetti ref="dh" />
</template>