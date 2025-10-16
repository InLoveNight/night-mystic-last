<script lang="ts" setup>
import DisableRefreshLayout from '~/layouts/DisableRefreshLayout.vue';
import { useLocaleCards } from '~/hooks/locale-data/cards';
import type { schemaCard } from '~~/shared/zod-schema';
import { shuffle } from 'radash';

const selected = useLocalStorage<number[]>('play-card-draw', [])
const shuffledData = useLocalStorage<schemaCard.CardContent[]>('play-card-shuffled', [])

const { card, actionCards } = useLocaleCards({ immediate: false })

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

const selectedCard = ref<schemaCard.CardContent | null>(null)
const confirmModalOpen = ref<boolean>(false)
const drawCardModalOpen = ref<boolean>(false)

const handleCard = async (key: number) => {
    selectedCard.value = shuffledData.value[key]!
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


// 退出逻辑
const leaveConfirm = ref<boolean>(false)

onBeforeRouteLeave(async () => {
    leaveConfirm.value = true

    return again().then(r => {
        if (r) {
            shuffledData.value = []
            selected.value = []
        }
        return r
    })
})


</script>

<template>

    <LazyUiConfirmModal v-model:open="leaveConfirm"
                        title="Leave"
                        header-class=" justify-center"
                        @confirm="waitConfirm?.(true)"
                        @cancel="waitConfirm?.(false)">
        <template #body>
            确认退出吗？退出后会丢失本次游戏记录。
        </template>
    </LazyUiConfirmModal>

    <LazyUiConfirmModal v-model:open="shuffleConfirmOpen"
                        header-class=" justify-center"
                        title="洗牌"
                        @confirm="confirmShuffle">
        <template #body>
            确认洗牌吗？洗牌会重置游戏。丢失当前游戏记录。
        </template>
    </LazyUiConfirmModal>

    <LazyUiConfirmModal v-model:open="confirmModalOpen"
                        header-class=" justify-center"
                        title="已经选择过了"
                        @confirm="waitConfirm?.(true)"
                        @cancel="waitConfirm?.(false)">
        <template #body>
            已经选择过了，还要重新选择吗？
        </template>
    </LazyUiConfirmModal>

    <LazyUModal :open="drawCardModalOpen"
                :close="false"
                :title="selectedCard?.title"
                :ui="{ content: 'divide-y-0' }">
        <template #content>
            <div class="p-5 space-y-5">

                <h2 v-if="selectedCard?.title"
                    class=" text-muted font-semibold text-center text-md line-clamp-1">
                    {{ selectedCard.title }}
                </h2>

                <div class="font-result p-5 rounded-lg bg-elevated/50 font-black text-lg">
                    {{ selectedCard?.content }}
                </div>

                <div class="flex justify-end">
                    <UButton size="xl"
                             @click="drawCardModalOpen = false">
                        OK
                    </UButton>
                </div>
            </div>
        </template>
    </LazyUModal>



    <DisableRefreshLayout>
        <Layout7XL bottom-padding>
            <LazyHeaderWithBack>
                <template #right>
                    <div class="flex gap-5">
                        <UIcon name="lucide:dices"
                               class="size-5"
                               @click="shuffleConfirmOpen = true" />
                        <UIcon name="lucide:settings"
                               class="size-5" />
                    </div>
                </template>
            </LazyHeaderWithBack>

            <div class=" px-2 mt-5 grid gap-5 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                <template v-for="(_, key) in card.contents"
                          :key="key">
                    <div :class="checkSelected(key) ? ' bg-accented ring ring-warning-500' : 'bg-elevated'"
                         class="flex items-center justify-center relative h-40 md:h-56 lg:h-64 xl:h-72 shadow-lg rounded-lg text-center p-5"
                         @click="handleCard(key)">

                        <div>
                            <div class="font-logo text-lg font-bold text-toned/50">{{ key + 1 }}</div>
                            <div class="font-logo font-bold md:text-xl lg:text-2xl mt-2"
                                 :class="checkSelected(key) ? ' text-warning-500' : ''">
                                Night Mystic
                            </div>
                        </div>

                        <p v-if="checkSelected(key)"
                           class=" absolute top-0 right-0 text-xs font-black p-2 rounded-tr-lg rounded-bl-lg bg-warning-500 text-inverted">
                            Selected
                        </p>
                    </div>
                </template>
            </div>
        </Layout7XL>

    </DisableRefreshLayout>
</template>