<script lang="ts" setup>
import DisableRefreshLayout from '~/layouts/DisableRefreshLayout.vue';
import CardForm from "~/page-components/intimacy-tool/Cards/Form.vue"
import CardContentForm from "~/page-components/intimacy-tool/Cards/ContentForm.vue"
import { useLocaleCards } from '~/hooks/locale-data/cards';

const { card, cardContent } = useLocaleCards({ immediate: false })

const handleCardSave = () => {
    console.log(card.value);
}

</script>

<template>
    <DisableRefreshLayout>

        <LazyHeaderWithBack>
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
                <CardForm v-model:data="card" />
            </LazyUiCard>

            <LazyUiCard title="卡内容"
                        action
                        action-label="新增内容"
                        @action="() => console.log(cardContent)">
                <CardContentForm v-model:data="cardContent" />
            </LazyUiCard>
        </Layout5XL>


    </DisableRefreshLayout>
</template>