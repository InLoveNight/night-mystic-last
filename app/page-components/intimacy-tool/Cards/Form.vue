<script lang="ts" setup>
import type { FormError } from '@nuxt/ui';
import type { schemaCard } from '~~/shared/zod-schema';

const form = useTemplateRef('form')

const data = defineModel<schemaCard.Card>('data', { required: true })

const validator = (data: schemaCard.Card) => {
    const errors: FormError[] = []
    if (data.name.length < 1) errors.push({ name: 'name', message: 'too-small' })

    return errors
}

defineEmits<{
    submit: []
}>()

defineExpose({
    form
})

</script>

<template>
    <UForm class="space-y-5"
           ref="form"
           :state="data"
           :validate="validator"
           @submit="$emit('submit')">
        <UFormField label="Name"
                    required
                    name="name">
            <UInput v-model="data.name"
                    size="xl" />
        </UFormField>

        <UFormField label="Tags"
                    name="tags"
                    description="最多可以添加 3 个标签">
            <UInputTags v-model="data.tags"
                        class="w-full"
                        :max="3"
                        :max-length="15"
                        size="xl" />
        </UFormField>

        <UFormField label="Description"
                    name="description">
            <UTextarea v-model="data.description"
                       size="xl"
                       autoresize
                       :maxrows="3" />
        </UFormField>
    </UForm>
</template>