<script lang="ts" setup>
import usePlaySetting from '~/hooks/usePlaySetting';

const { playSetting } = usePlaySetting()

const open = defineModel('open', { default: false })

</script>

<template>
    <USlideover v-model:open="open"
                side="left"
                :ui="{ footer: 'justify-end', content: 'max-w-xs lg:max-w-md' }">

        <template #header>
            <div class=" ">{{ $t('play.setting.title') }}</div>
        </template>

        <template #body>
            <div class="space-y-5">

                <UAlert color="neutral"
                        variant="soft"
                        :title="$t('play.setting.bg.title')"
                        :description="$t('play.setting.bg.description')"
                        icon=":mingcute:apple-intelligence-fill"
                        orientation="horizontal"
                        :ui="{ description: 'text-xs' }">
                    <template #actions>
                        <USwitch v-model="playSetting.bg" />
                    </template>
                </UAlert>

                <UAlert color="neutral"
                        variant="soft"
                        :title="$t('play.setting.ringtone.title')"
                        :description="$t('play.setting.ringtone.description')"
                        icon="mingcute:bell-ringing-fill"
                        orientation="horizontal"
                        :ui="{ description: 'text-xs' }">
                    <template #actions>
                        <USwitch v-model="playSetting.ringtone" />
                    </template>
                </UAlert>

                <UAlert color="neutral"
                        variant="soft"
                        :title="$t('play.setting.count.title')"
                        :description="$t('play.setting.count.description')"
                        icon="mingcute:counter-2-fill"
                        orientation="horizontal"
                        :ui="{ description: 'text-xs' }">
                    <template #actions>
                        <USwitch v-model="playSetting.count" />
                    </template>
                </UAlert>
            </div>
        </template>

        <template #footer>
            <LazyActionChangeTheme />
        </template>
    </USlideover>
</template>