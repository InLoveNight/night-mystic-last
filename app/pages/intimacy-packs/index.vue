<script lang="ts" setup>
import BaseLayout from '~/layouts/BaseLayout.vue';


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
                                to: $localePath('/how-to-use'),
                                trailingIcon: 'lucide:message-circle-question-mark',
                                variant: 'soft'
                            }]">

            </LazyUPageHeader>
        </LazyUContainer>

    </BaseLayout>
</template>