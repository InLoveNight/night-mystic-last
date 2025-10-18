<script lang="ts" setup>
import BaseLayout from '~/layouts/BaseLayout.vue';

</script>

<template>
    <BaseLayout>
        <template #header>
            <LazyHeaderGlobal>
                <template #right-action>
                    <LazySupportMe />
                </template>
            </LazyHeaderGlobal>
        </template>

        <LazyUContainer>
            <LazyUPageHeader title="联系"
                             description="通过以下方式联系我们">
            </LazyUPageHeader>


            <div class="flex flex-col gap-y-5 mt-10">
                <div class="flex gap-2 items-center">
                    <span>社交链接：</span>
                    <SubScriptionSocial />
                </div>
                <div class="flex gap-2 items-center">
                    <span>邮箱支持：</span>
                    <ULink class=" cursor-pointer underline decoration-2 underline-offset-4">support@nightmystic.com
                    </ULink>
                </div>
            </div>


        </LazyUContainer>
    </BaseLayout>
</template>