<script lang="ts" setup>
import useCheckIdRepeat from '~/hooks/useCheckIdRepeat';

const { check } = useCheckIdRepeat()

defineProps<{
    game: BackEndData
}>()

</script>

<template>
    <NuxtLinkLocale :to="`/intimacy-packs/${game.id}`"
                    class=" bg-accented p-5 rounded-lg shadow-lg/5 flex flex-col justify-around space-y-2 cursor-pointer relative"
                    :class="game.aldult ? 'ring ring-error-500/50' : ''">

        <ClientOnly>
            <div v-if="check(game.id)"
                 class=" absolute top-0 right-0 rounded-tr-lg rounded-bl-lg bg-warning-500 px-5 py-2 text-xs text-inverted">
                {{ $t('intimacy-packs.imported') }}
            </div>
        </ClientOnly>

        <h3 class=" text-lg font-black line-clamp-2">
            <span class=" text-xs bg-red-500 text-white px-2 py-1 rounded-lg  align-middle"
                  v-if="game.aldult">18 +</span> {{ game.name }}
        </h3>

        <p class=" text-xs/4 text-muted line-clamp-2">
            {{ game.description }}
        </p>

        <p class=" text-xs">
            <span class=" font-bold mr-1">{{ $t('intimacy-packs.category') }}:</span>
            <UBadge size="md"
                    variant="subtle">
                {{ $t(`category.${game.category}`) }}
            </UBadge>
        </p>

        <div v-if="game.tags"
             class="flex text-xs gap-1 items-center">
            <span class=" font-bold">{{ $t('intimacy-packs.tag') }}:</span>
            <div class="flex gap-2">
                <UBadge v-for="tag in game.tags"
                        size="md"
                        variant="outline"
                        color="neutral">
                    {{ tag }}
                </UBadge>
            </div>
        </div>

        <div class="grid grid-cols-3 text-xs">
            <div v-if="game.cardTotal"
                 class=" inline-flex items-center gap-2">
                <LazyUIcon name="lucide:wallet-cards" /> <span>{{ game.cardTotal }}</span>
            </div>

            <!-- <div v-if="item.data.truthTotal">
                    <span class="font-bold">{{ $t('truth-or-dare.truth') }}：</span>{{ item.data.truthTotal }}
                </div>

                <div v-if="item.data.dareTotal">
                    <span class="font-bold">{{ $t('truth-or-dare.dare') }}：</span>{{ item.data.dareTotal }}
                </div> -->
        </div>

    </NuxtLinkLocale>
</template>