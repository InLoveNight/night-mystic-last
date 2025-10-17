<script lang="ts" setup>
/** 离开页面确认弹窗 */

const leaveConfirm = ref<boolean>()

let waitConfirm: ((value: boolean) => void) | null

const waiting = async () => {
    return new Promise<boolean>((resolve) => {
        waitConfirm = resolve
    })
}

const emits = defineEmits<{
    beforeLeaveAction: []
}>()

onBeforeRouteLeave(async () => {
    leaveConfirm.value = true
    const res = await waiting()
    if (res) {
        emits('beforeLeaveAction')
    }
    return res
})



</script>

<template>
    <LazyUiConfirmModal v-model:open="leaveConfirm"
                        :title="$t('play.leave.title')"
                        header-class=" justify-center"
                        @confirm="waitConfirm?.(true)"
                        @cancel="waitConfirm?.(false)">
        <template #body>
            {{ $t('play.leave.description') }}
        </template>
    </LazyUiConfirmModal>
</template>