<script lang="ts" setup>
import type { schemaCard } from '~~/shared/zod-schema';
import DataAction from './DataAction.vue';


defineProps<{
    type?: 'cards' | 'truth-or-dare' | 'roulette' | undefined
    items: schemaCard.Card[]
}>()

const selectedId = ref<string>('')

const emits = defineEmits<{
    edit: [id: string]
    delete: [id: string]
    play: [id: string]
}>()

const deleteConfirmModal = ref<boolean>(false)

</script>

<template>
    <LazyUiConfirmModal v-model:open="deleteConfirmModal"
                        @confirm="$emit('delete', selectedId); deleteConfirmModal = false"
                        :title="$t('delete-confirm.title')"
                        :confirm-props="{ color: 'error' }">
        <template #body>
            {{ $t('delete-confirm.message') }}
        </template>
    </LazyUiConfirmModal>


    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div v-for="item in items"
             class="p-5 rounded-lg bg-accented flex flex-col gap-2 justify-around">

            <div class="flex gap-5 items-center justify-between">
                <h2 class="line-clamp-1 font-bold text-xl">
                    {{ item.name }}
                </h2>
                <DataAction @selected="selectedId = item.id!"
                            @edit="$emit('edit', selectedId)"
                            @delete="deleteConfirmModal = true" />
            </div>

            <div class="space-x-2">
                <UBadge v-for="tag in item.tags"
                        class="rounded-full"
                        color="info"
                        :label="tag" />
            </div>

            <p class="text-[14px]/5 line-clamp-2">
                {{ item.description }}
            </p>


            <div class="flex">
                <div v-if="type"
                     class="flex justify-end flex-1/2 mr-5">
                    <div v-if="type === 'cards'"
                         class=" inline-flex items-center gap-2">
                        <LazyUIcon name="lucide:wallet-cards" /> <span>{{ item.contents.length }}</span>
                    </div>
                </div>

                <UButton size="xl"
                         class=" rounded-full shadow-lg text-center justify-center  flex-1/2"
                         @click="$emit('play', item.id!)">
                    {{ 'Play' }}
                </UButton>
            </div>
        </div>
    </div>
</template>