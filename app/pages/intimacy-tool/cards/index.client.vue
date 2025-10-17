<script lang="ts" setup>
import BaseLayout from '~/layouts/BaseLayout.vue';
import NoData from '~/page-components/intimacy-tool/NoData.vue';
import Action from '~/page-components/intimacy-tool/Action.vue';
import GameItems from '~/page-components/intimacy-tool/GameItems.vue';
import { useLocaleCards } from '~/hooks/locale-data/cards';

const { cards, actionCards } = useLocaleCards({ immediate: true })

const deleteCard = (id: string) => {
    actionCards.deleteById(id)
}

// play
const playId = ref<string>('')
const playModal = ref<boolean>(false)

const handlePlay = (id: string) => {
    playId.value = id
    playModal.value = true
}

</script>

<template>

    <LazyUModal :open="playModal"
                :ui="{ content: 'divide-y-0' }"
                :title="$t('play.select-game-mode')"
                :close="{ onClick: () => { playModal = false } }">
        <template #body>
            <div class="flex flex-col gap-5">
                <UButton block
                         color="info"
                         size="xl"
                         :to="$localePath(`/play/card/${playId}/draw`)">
                    {{ $t('play.draw-card') }}
                </UButton>
                <UButton block
                         size="xl"
                         :to="$localePath(`/play/card/${playId}/random`)">
                    {{ $t('play.random-draw') }}
                </UButton>
            </div>
        </template>
    </LazyUModal>

    <BaseLayout :show-banner="false">
        <LazyHeaderWithBack :default-back-action="false"
                            @back="$router.push($localePath('/intimacy-tool'))">
            <template #right>
                <div class="flex gap-5 items-center">
                    <Action @new="$router.push($localePath('/intimacy-tool/cards/edit'))"
                            @import="$router.push($localePath('/intimacy-packs?category=Card'))" />
                </div>
            </template>
        </LazyHeaderWithBack>

        <Layout7XL class="mt-5">
            <NoData v-if="!cards.length"
                    :result="$t('result.no-data')"
                    show-import
                    show-new
                    :new-to="$localePath('/intimacy-tool/cards/edit')"
                    :import-to="$localePath('/intimacy-packs?category=Card')" />
            <GameItems v-else
                       type="cards"
                       :items="cards"
                       @edit="(id) => $router.push($localePath(`/intimacy-tool/cards/edit/${id}`))"
                       @delete="deleteCard"
                       @play="handlePlay" />
        </Layout7XL>
    </BaseLayout>
</template>