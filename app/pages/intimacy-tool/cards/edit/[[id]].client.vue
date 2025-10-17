<script lang="ts" setup>
import DisableRefreshLayout from '~/layouts/DisableRefreshLayout.vue';
import CardForm from "~/page-components/intimacy-tool/Cards/Form.vue"
import CardContentForm from "~/page-components/intimacy-tool/Cards/ContentForm.vue"
import NoData from '~/page-components/intimacy-tool/NoData.vue';
import ToolContentModal from '~/page-components/intimacy-tool/ToolContentModal.vue';
import DataAction from '~/page-components/intimacy-tool/DataAction.vue';
import { useLocaleCards } from '~/hooks/locale-data/cards';

const { card, cardContent, actionCards, actionContent } = useLocaleCards({ immediate: false })


const id = ref<string | undefined>(undefined)

// ID
watchEffect(() => {
    const paramId = useRoute().params.id as string | undefined
    if (paramId) {
        actionCards.queryById(paramId)
        id.value = paramId
    } else {
        card.value.id = generateUuid()
    }
})


// Card
const cardForm = useTemplateRef('cardForm')

const submitCard = async () => {
    if (!card.value.contents.length) {
        console.log('卡片内容为空！');
        return
    }
    
    if (id.value) {
        const res = await actionCards.updateById(id.value)
        if (res) useRouter().push(useLocalePath()('/intimacy-tool/cards'))
        else console.log('保存失败！');
    } else {
        const res = await actionCards.insert()
        if (res) useRouter().push(useLocalePath()('/intimacy-tool/cards'))
        else console.log('保存失败！');
    }
}

const handleCardSave = () => {
    cardForm.value?.form?.submit()
}

// Content
const openModal = ref<boolean>(false)
const confirmModal = ref<boolean>(false)
const contentFormRef = useTemplateRef('contentForm')
const selectedContentKey = ref<number>(0)
const model = ref<'edit' | 'insert'>('insert')

const handleEditContent = () => {
    model.value = 'edit'
    if (actionContent.queryByIndex(selectedContentKey.value)) {
        openModal.value = true
    }
}

const handleDeleteContent = () => {
    confirmModal.value = true
}

const handleNewContent = () => {
    model.value = 'insert'
    actionContent.reset()
    openModal.value = true
}

const submitContent = () => {
    if (model.value === 'insert') {
        actionContent.insert()
        openModal.value = false
        return
    }
    if (model.value === 'edit') {
        actionContent.updateByIndex(selectedContentKey.value)
        openModal.value = false
        return
    }
}

const handleSubmitContent = () => {
    contentFormRef.value?.form?.submit()
}

</script>

<template>

    <ToolContentModal v-model:open="openModal"
                      title="卡片内容"
                      @submit="handleSubmitContent">
        <CardContentForm v-model:data="cardContent"
                         @submit="submitContent"
                         ref="contentForm" />
    </ToolContentModal>

    <LazyUiConfirmModal v-model:open="confirmModal"
                        title="确认删除？"
                        @confirm="actionContent.deleteByIndex(selectedContentKey); confirmModal = false"
                        :confirm-props="{ color: 'error' }">

    </LazyUiConfirmModal>

    <DisableRefreshLayout>

        <LazyHeaderWithBack :default-back-action="false"
                            @back="$router.push($localePath('/intimacy-tool/cards'))">
            <template #right>
                <UButton class="rounded-full px-5"
                         @click="handleCardSave">
                    {{ $t('action.save') }}
                </UButton>
            </template>
        </LazyHeaderWithBack>

        <Layout5XL class="mt-5"
                   bottom-padding>


            <LazyUiCard class="mb-5">
                <CardForm ref="cardForm"
                          @submit="submitCard"
                          v-model:data="card" />
            </LazyUiCard>

            <LazyUiCard title="卡内容"
                        action
                        :action-label="$t('action.new')"
                        :disabled="card.contents.length >= 54"
                        @action="handleNewContent">
                <NoData v-if="!card.contents.length"
                        :result="$t('result.content-no-data')"
                        show-new
                        @new="handleNewContent" />

                <div v-else
                     class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div v-for="(item, key) in card.contents"
                         :key="key"
                         class="p-5 bg-accented rounded-lg shadow-lg flex gap-5 justify-between items-start">

                        <p class=" line-clamp-2 text-[14px] mt-2">{{ item.content }}</p>
                        <DataAction @selected="selectedContentKey = key"
                                    @edit="handleEditContent"
                                    @delete="handleDeleteContent" />
                    </div>
                </div>


            </LazyUiCard>

        </Layout5XL>

    </DisableRefreshLayout>
</template>