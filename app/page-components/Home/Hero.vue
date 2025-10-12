<script lang="ts" setup>
import type { ButtonProps } from '@nuxt/ui';

const { t } = useI18n()
const localePath = useLocalePath()

const links = ref<ButtonProps[]>([
    { label: t('menu.intimacy-tool'), icon: 'lucide:candy', to: localePath('/intimacy-tool') },
    { label: t('menu.intimacy-packs'), trailingIcon: 'lucide:candy-cane', variant: 'outline', color: 'neutral', to: localePath('/intimacy-packs') },
])

</script>

<template>
    <LazyUPageHero :headline="$t('hero.headline')"
                   :description="$t('hero.description')"
                   :links="links">
        <template #title>
            <LazyUiLogo class=" text-7xl" />
        </template>
    </LazyUPageHero>
</template>