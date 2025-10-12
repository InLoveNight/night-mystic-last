<script lang="ts" setup>
import BaseLayout from '~/layouts/BaseLayout.vue';
</script>

<template>
    <BaseLayout>
        <template #header>
            <LazyHeaderGlobal />
        </template>

        <UContainer>
            <LazyUPageHeader title="亲密工具"
                             description="我们在不断添加亲密工具，以能给您带来更丰富的体验">

            </LazyUPageHeader>

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5 ">
                <LazyUPageCard title="Tailwind CSS"
                               description="Nuxt UI integrates with latest Tailwind CSS v4, bringing significant improvements."
                               icon="i-simple-icons-tailwindcss"
                               orientation="vertical"
                               variant="soft"
                               reverse>
                </LazyUPageCard>

                <LazyUPageCard title="Tailwind CSS"
                               description="Nuxt UI integrates with latest Tailwind CSS v4, bringing significant improvements."
                               icon="i-simple-icons-tailwindcss"
                               reverse>
                </LazyUPageCard>
            </div>
        </UContainer>
    </BaseLayout>
</template>