<script lang="ts" setup>
import BaseLayout from '~/layouts/BaseLayout.vue';
import NoData from '~/page-components/intimacy-tool/NoData.vue';
import RightAction from '~/page-components/intimacy-tool/RightAction.vue';


</script>

<template>
    <BaseLayout>
        <LazyHeaderWithBack :default-back-action="false"
                            @back="$router.push($localePath('/intimacy-tool'))">
            <template #right>
                <div class="flex gap-5 items-center">
                    <UIcon name="lucide:badge-help"
                           class="size-5" />
                    <RightAction @new="$router.push($localePath('/intimacy-tool/cards/edit'))" />
                </div>
            </template>
        </LazyHeaderWithBack>

        <Layout7XL class="mt-5">
            <NoData />
        </Layout7XL>
    </BaseLayout>
</template>