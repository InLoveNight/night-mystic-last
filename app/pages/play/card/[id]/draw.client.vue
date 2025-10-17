<script lang="ts" setup>
import DisableRefreshLayout from '~/layouts/DisableRefreshLayout.vue';
import LeaveConfirm from '~/page-components/intimacy-tool/LeaveConfirm.vue';
import ResultGameModal from '~/page-components/intimacy-tool/ResultGameModal.vue';
import { useLocaleCards } from '~/hooks/locale-data/cards';
import usePlaySetting from '~/hooks/usePlaySetting';
import type { schemaCard } from '~~/shared/zod-schema';
import { shuffle } from 'radash';

const selected = useLocalStorage<number[]>('play-card-draw', [])
const shuffledData = useLocalStorage<schemaCard.CardContent[]>('play-card-shuffled', [])

const { card, actionCards } = useLocaleCards({ immediate: false })

// 动画
const dh = useTemplateRef('dh')

// 请求数据
onMounted(async () => {
    await actionCards.queryById(useRoute().params.id as string)
    if (!shuffledData.value.length) {   // 如果 localeStorage 有数据，则不洗牌。
        shuffleCard()
    }
})

// 洗牌
const shuffleCard = () => {
    shuffledData.value = shuffle(card.value.contents)
    selected.value = []
}

// 检查是否已被选
const checkSelected = (key: number) => {
    return selected.value.includes(key)
}

// 选卡逻辑
let waitConfirm: ((value: boolean) => void) | null

const again = async () => {
    return new Promise<boolean>((resove) => {
        waitConfirm = resove;
    });
}

const selectedCard = ref<schemaCard.CardContent>()
const confirmModalOpen = ref<boolean>(false)
const drawCardModalOpen = ref<boolean>(false)

const handleCard = async (key: number) => {
    selectedCard.value = shuffledData.value[key]!
    dh.value?.pause()
    if (checkSelected(key)) {
        confirmModalOpen.value = true
        const res = await again()
        if (res) {
            confirmModalOpen.value = false
            drawCardModalOpen.value = true
        }
        return
    }
    drawCardModalOpen.value = true
    selected.value.push(key)
}

// 洗牌逻辑
const shuffleConfirmOpen = ref<boolean>(false)

const confirmShuffle = () => {
    shuffleCard()
    shuffleConfirmOpen.value = false
}

// setting
const settingOpen = ref<boolean>()

// play setting
const { playSetting } = usePlaySetting()

</script>

<template>
    <LazyHeaderPlayMenu v-model:open="settingOpen" />

    <LeaveConfirm @before-leave-action="() => { shuffledData = [], selected = [] }" />

    <LazyUiConfirmModal v-model:open="shuffleConfirmOpen"
                        header-class=" justify-center"
                        :title="$t('play.shuffle.title')"
                        @confirm="confirmShuffle">
        <template #body>
            {{ $t('play.shuffle.description') }}
        </template>
    </LazyUiConfirmModal>

    <LazyUiConfirmModal v-model:open="confirmModalOpen"
                        header-class=" justify-center"
                        :title="$t('play.selected.title')"
                        @confirm="waitConfirm?.(true)"
                        @cancel="waitConfirm?.(false)">
        <template #body>
            {{ $t('play.selected.description') }}
        </template>
    </LazyUiConfirmModal>

    <ResultGameModal v-model:open="drawCardModalOpen"
                     :result="selectedCard"
                     @ok="dh?.play()" />

    <DisableRefreshLayout>
        <Layout7XL bottom-padding>
            <LazyHeaderWithBack :default-back-action="false"
                                @back="() => $router.push($localePath('/intimacy-tool/cards'))">
                <template #right>
                    <div class="flex gap-5">
                        <UIcon name="lucide:dices"
                               class="size-5 cursor-pointer"
                               @click="shuffleConfirmOpen = true" />
                        <UIcon name="lucide:settings"
                               class="size-5 cursor-pointer"
                               @click="settingOpen = true" />
                    </div>
                </template>
            </LazyHeaderWithBack>

            <div class=" px-2 mt-5 grid gap-5 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                <template v-for="(_, key) in card.contents"
                          :key="key">
                    <div :class="checkSelected(key) ? ' bg-accented/80 ring ring-warning-500' : 'bg-elevated/80'"
                         class="flex items-center justify-center relative h-40 md:h-56 lg:h-64 xl:h-72 shadow-lg rounded-lg text-center p-5 backdrop-blur-xs"
                         @click="handleCard(key)">

                        <div>
                            <div v-show="playSetting.count"
                                 class="font-logo text-2xl font-bold text-default">{{ key + 1 }}</div>

                            <div class="font-logo font-bold md:text-xl lg:text-2xl mt-2 select-none"
                                 :class="checkSelected(key) ? ' text-warning-500' : ''">
                                Night Mystic
                            </div>
                        </div>

                        <p v-if="checkSelected(key)"
                           class=" absolute top-0 right-0 text-xs font-black p-2 rounded-tr-lg rounded-bl-lg bg-warning-500 text-inverted">
                            {{ $t('play.selected.tag') }}
                        </p>
                    </div>
                </template>
            </div>
        </Layout7XL>

    </DisableRefreshLayout>

    <LazyParticlesConfetti ref="dh" />
</template>