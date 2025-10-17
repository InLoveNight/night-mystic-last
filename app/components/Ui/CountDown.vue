<script lang="ts" setup>
import usePlaySetting from '~/hooks/usePlaySetting';
const { playSetting } = usePlaySetting()

const { time, bottomSeparator = true } = defineProps<{
    time: number
    bottomSeparator?: boolean
}>()

const { remaining, start, stop, pause, resume, isActive } = useCountdown(time, {
    onComplete: () => {
        playVoice()
    }
})

const action = ref<() => void>(start)
const actionLable = ref<'start' | 'pause' | 'resume'>()

watchEffect(() => {
    if (remaining.value === time) {
        action.value = start
        actionLable.value = 'start'
    } else if (isActive.value) {
        action.value = pause
        actionLable.value = 'pause'
    } else {
        action.value = resume
        actionLable.value = 'resume'
    }
})

const ms = computed(() => {
    const seconds = Math.max(0, Math.floor(remaining.value))
    const mm = Math.floor(seconds / 60)
    const ss = seconds % 60
    const mmStr = String(mm).padStart(2, '0')
    const ssStr = String(ss).padStart(2, '0')
    return {
        m: mmStr,
        s: ssStr
    }
})


// 提示音
const audio = ref<HTMLAudioElement | null>(null)


// 创建 audio
onMounted(() => {
    audio.value = new Audio('/notify/notify.mp3')
    audio.value.preload = 'auto'
})

// 播放提示音
const playVoice = async () => {
    if (!audio.value) {
        return
    }
    // 如果关闭播放音频，直接 return， 不播放
    if (!playSetting.value.ringtone) {
        return
    }

    try {
        // 如果希望每次都从头开始
        audio.value.pause()
        audio.value.currentTime = 0
        // 某些浏览器需要在用户交互时先播放一次才能解锁音频，通常这段在点击事件里是允许的
        await audio.value.play()
    } catch (err) { }
}

// 卸载
onBeforeUnmount(() => {
    if (audio.value) {
        audio.value.pause()
        audio.value.src = ''
        audio.value.load()
        audio.value = null
    }
})

</script>

<template>
    <USeparator class=" mt-8">
        <div class="flex items-center gap-2">
            <UIcon name="lucide:timer"
                   class="size-5" />
            <span>{{ $t('play.timer.timer') }}</span>
        </div>
    </USeparator>

    <div class="flex items-center justify-between px-5">
        <h2 class="text-2xl font-black">{{ `${ms.m} : ${ms.s}` }}</h2>
        <div class="flex gap-3">

            <div class="flex flex-col items-center"
                 @click="action()">
                <UButton variant="ghost"
                         size="xl"
                         :color="remaining === 0 ? 'neutral' : 'primary'"
                         :disabled="remaining === 0"
                         class="rounded-full text-center"
                         :icon="isActive ? 'lucide:circle-pause' : 'lucide:circle-play'"
                         :ui="{ leadingIcon: 'size-8' }">
                </UButton>
                <p class=" text-xs">{{ $t(`play.timer.${actionLable}`) }}</p>
            </div>

            <div class="flex flex-col items-center"
                 @click="stop()">
                <UButton variant="ghost"
                         size="xl"
                         class="rounded-full text-center"
                         icon="lucide:circle-stop"
                         :ui="{ leadingIcon: 'size-8' }">
                </UButton>
                <p class=" text-xs">{{ $t('play.timer.reset') }}</p>
            </div>

        </div>
    </div>

    <USeparator v-if="bottomSeparator" />
</template>