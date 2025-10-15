<script lang="ts" setup>
import type { schemaCard } from '~~/shared/zod-schema';

const data = defineModel<schemaCard.CardContent>('data', { required: true })

const form = useTemplateRef('form')

const emits = defineEmits<{
    submit: []
}>()

defineExpose({
    form
})

const handleSubmit = useThrottleFn(() => {
    emits('submit')
}, 500)

</script>

<template>
    <UForm :state="data"
           @submit="handleSubmit"
           ref="form"
           class="space-y-5">
        <UFormField label="Content"
                    required
                    name="content">
            <UTextarea v-model="data.content"
                       size="xl"
                       autoresize
                       :maxrows="3" />
        </UFormField>

        <UFormField label="Time"
                    description="如果不需要定时，则保持为 0 即可"
                    name="time">
            <UInputNumber v-model="data.time"
                          size="xl"
                          class="w-full"
                          orientation="vertical" />
        </UFormField>
    </UForm>
</template>