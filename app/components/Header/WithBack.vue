<script lang="ts" setup>

const router = useRouter()

const { defaultBackAction = true } = defineProps<{
    defaultBackAction?: boolean
    title?: string
}>()

const emits = defineEmits<{
    back: []
}>()

const handleBack = () => {
    if (defaultBackAction) {
        router.back()
        return
    }
    emits('back')
}

</script>

<template>
    <LazyLayout7XL class="sticky top-2 z-50">
        <div class="flex justify-between items-center relative rounded-lg p-5 mt-2 bg-elevated/75 backdrop-blur">
            <div>
                <slot name="left">
                    <UIcon @click="handleBack"
                           name="lucide:chevron-left"
                           class=" block size-5 cursor-pointer">
                    </UIcon>
                </slot>
            </div>

            <div class=" absolute left-1/2 -translate-x-1/2">
                <slot name="title">
                    <h1 class=" font-black"
                        v-if="title">{{ title }}</h1>
                </slot>
            </div>

            <div>
                <slot name="right"></slot>
            </div>
        </div>
    </LazyLayout7XL>
</template>