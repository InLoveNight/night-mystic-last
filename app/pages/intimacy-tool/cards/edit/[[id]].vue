<script lang="ts" setup>
import DisableRefreshLayout from '~/layouts/DisableRefreshLayout.vue';


</script>

<template>
    <DisableRefreshLayout>
        <LazyHeaderWithBack>
            <template #right>
                <UButton class="rounded-full px-5">{{ $t('action.save') }}</UButton>
            </template>
        </LazyHeaderWithBack>


        <Layout5XL class="mt-5"
                   bottom-padding>


            <LazyUiCard class="mb-5">
                123
            </LazyUiCard>

            <LazyUiCard title="卡内容"
                        action
                        action-label="新增内容">
                123456
            </LazyUiCard>
        </Layout5XL>


    </DisableRefreshLayout>
</template>