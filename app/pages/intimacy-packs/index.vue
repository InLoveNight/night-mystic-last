<script lang="ts" setup>
import BaseLayout from '~/layouts/BaseLayout.vue';


</script>

<template>
    <BaseLayout>
        <template #header>
            <LazyHeaderGlobal></LazyHeaderGlobal>
        </template>

        <LazyUContainer>
            <LazyUPageHeader :title="$t('intimacy-packs.header.title')"
                             :description="$t('intimacy-packs.header.description')"
                             :links="[{
                                label:$t('intimacy-packs.header.action'),
                                trailingIcon:'lucide:badge-help',
                                variant:'soft'
                             }]"
                             >

            </LazyUPageHeader>
        </LazyUContainer>


    </BaseLayout>
</template>