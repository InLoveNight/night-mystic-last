<script lang="ts" setup>
import useSubScription, { type Subscription } from '~/hooks/useSubScription';
import Social from './Social.vue';
import type { FormSubmitEvent, FormError } from '@nuxt/ui';
import { z } from "zod"

const { openModal, close, subscription } = useSubScription()


const form = useTemplateRef('form')  // 这个到底是个什么类型？ 不是 FormSubmitEvent<Subscription>

const validator = (state: Subscription): FormError[] => {
    const errors: FormError[] = []
    const { success } = z.safeParse(z.email(), subscription.value.email)
    if (!success) {
        errors.push({ name: 'email', message: '邮箱格式错误！' })
    }
    if (typeof subscription.value.aldult === 'undefined') {
        errors.push({ name: 'aldult', message: '该项为必选项！' })
    }

    return errors
}

const submit = () => {
    console.log(form.value);
}

const handleSubscriptionBtn = () => {
    form.value?.submit()
}

</script>

<template>
    <UModal :open="openModal"
            :ui="{ content: 'overflow-visible divide-y-0', wrapper: '', body: '' }"
            :close="false">

        <template #body>
            <div class="left-[calc(50%-10px)] -translate-x-1/2 absolute -top-15 flex items-center justify-center  ">
                <img src="/image/subscription/mail.png"
                     class="size-30 " />
                <div class="bg-inverted text-inverted rounded-lg w-full text-center text-2xl font-black px-3 py-2">
                    SubScription
                </div>
            </div>

            <div class="mt-15 w-full px-5 sm:px-10">
                <p>订阅探索激发连接与创意的新方式，立即订阅，100%隐私。</p>

                <UForm ref="form"
                       class="mt-5 space-y-5"
                       :state="subscription"
                       :validate="validator"
                       @submit="submit">
                    <UFormField label="Email"
                                required
                                help="我们非常重视用户隐私！"
                                name="email">
                        <UInput v-model="subscription.email"
                                size="xl"
                                type="email"
                                placeholder="xxx@xx.xx" />
                    </UFormField>

                    <UFormField label="18+"
                                help="请诚实填写"
                                name="aldult">
                        <URadioGroup v-model:model-value="subscription.aldult"
                                     :items="[{ label: 'Yes', value: true }, { label: 'No', value: false }]"
                                     size="xs"
                                     orientation="horizontal"
                                     variant="table" />
                    </UFormField>
                </UForm>

                <div class="w-full mt-5 flex justify-end items-center gap-5">
                    <p @click="close"
                       class=" text-xs cursor-pointer">
                        不想订阅
                    </p>
                    <UButton @click="handleSubscriptionBtn"
                             size="xl"
                             class="px-5 py-2 font-black">
                        订阅
                    </UButton>
                </div>
            </div>

            <div class="mt-10">
                <USeparator>
                    <p class="text-xs">不想订阅？那关注我吧</p>
                </USeparator>
                <Social class="mt-5 flex justify-center" />
            </div>
        </template>
    </UModal>
</template>