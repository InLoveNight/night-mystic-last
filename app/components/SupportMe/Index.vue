<script lang="ts" setup>

</script>

<template>
    <LazyUPopover arrow>
        <UButton color="neutral"
                 class="px-5 font-black"
                 size="lg"
                 icon="lucide:coffee">
            {{ $t('support-me.name') }}
        </UButton>

        <template #content>

            <div class="p-5">
                <p class="text-center font-bold">{{ $t('support-me.content') }}</p>

                <div class="grid grid-cols-2 gap-2 mt-5">

                    <NuxtLink to="https://www.paypal.com/ncp/payment/PQ4MNZG4QYSRW"
                              target="_blank"
                              class=" bg-accented dark:bg-white/90 px-5 py-4 rounded-lg flex items-center justify-center cursor-pointer">
                        <img src="/support/paypal.svg"
                             class="h-8"
                             alt="support me on paypal"
                             srcset="">
                    </NuxtLink>

                    <NuxtLink to="https://ko-fi.com/nightmystic"
                              target="_blank"
                              class=" bg-accented dark:bg-white/90 px-5 py-4 rounded-lg flex items-center justify-center cursor-pointer">
                        <img src="/support/kofi.png"
                             class="h-8"
                             alt="support me on ko-fi"
                             srcset="">
                    </NuxtLink>

                    <NuxtLink to="https://plisio.net/donate/P3CY8G-o"
                              target="_blank"
                              class=" bg-accented dark:bg-white/90 px-5 py-4 rounded-lg flex items-center justify-center cursor-pointer">
                        <UAvatarGroup>
                            <UAvatar size="md"
                                     icon="cryptocurrency-color:usdt"
                                     alt="Support Me On USDT"
                                     :ui="{ icon: 'size-8' }" />
                            <UAvatar size="md"
                                     icon="cryptocurrency-color:usdc"
                                     alt="Support Me On USTC"
                                     :ui="{ icon: 'size-8' }" />
                            <UAvatar size="md"
                                     icon="cryptocurrency-color:btc"
                                     alt="Support Me On Btc"
                                     :ui="{ icon: 'size-8' }" />
                            <UAvatar size="md"
                                     icon="lucide:more-horizontal"
                                     alt="Support Me On Crypto"
                                     :ui="{ icon: 'size-5' }" />
                        </UAvatarGroup>
                    </NuxtLink>

                    <!-- <div
                         class=" bg-accented dark:bg-white/90 px-5 py-4 rounded-lg flex items-center justify-center cursor-pointer">
                        <UAvatarGroup>
                            <UAvatar size="md"
                                     icon="ri:wechat-pay-fill"
                                     alt="Benjamin Canac"
                                     :ui="{ icon: 'size-8 bg-success' }" />
                            <UAvatar size="md"
                                     icon="ri:alipay-fill"
                                     alt="Romain Hamel"
                                     :ui="{ icon: 'size-9 bg-blue-500' }" />
                        </UAvatarGroup>
                    </div> -->

                </div>
            </div>
        </template>
    </LazyUPopover>


</template>