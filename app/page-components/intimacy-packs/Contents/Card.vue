<script lang="ts" setup>

import { group } from 'radash';

const props = defineProps<{
    data: BackEndCard
}>()

const computedData = computed(() => {
    return group(props.data.data.contents, item => item.title ? item.title : 'Other')
})


</script>

<template>
    <Layout7XL>
        <div v-for="(content, title) in computedData"
             class="mt-5">
            <h2 class=" text-xl font-bold mb-2">{{ title }}</h2>
            <ul class=" list-disc ml-5 space-y-2">
                <li v-for="item in content">
                    <UBadge v-if="item.time"
                            class="mr-1"
                            color="warning"
                            icon="lucide:timer">
                        {{ item.time }}
                    </UBadge>
                    {{ item.content }}
                </li>
            </ul>
        </div>
    </Layout7XL>
</template>