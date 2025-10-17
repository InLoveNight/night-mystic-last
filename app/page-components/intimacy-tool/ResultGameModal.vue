<script lang="ts" setup>
import type { schemaCard } from '~~/shared/zod-schema';

const open = defineModel('open', { default: false })

defineProps<{
    result?: schemaCard.CardContent
}>()

defineEmits<{
    ok: []
}>()

</script>

<template>
    <LazyUModal :open="open"
                :close="false"
                :title="result?.title"
                :ui="{ content: 'divide-y-0' }">
        <template #content>
            <div class="p-5 space-y-5">

                <h2 v-if="result?.title"
                    class=" text-muted font-semibold text-center text-md line-clamp-1">
                    {{ result.title }}
                </h2>

                <div class="font-result p-5 rounded-lg bg-elevated/50 text-lg select-none">
                    {{ result?.content }}
                </div>

                <LazyUiCountDown v-if="result?.time"
                                 :time="result.time" />

                <div class="flex justify-end">
                    <UButton size="xl"
                             @click="$emit('ok'), open = false">
                        OK
                    </UButton>
                </div>
            </div>
        </template>
    </LazyUModal>
</template>