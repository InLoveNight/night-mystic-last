<script lang="ts" setup>

onMounted(() => {
    const body = document.querySelector('body')
    if (body) {
        body.style.overscrollBehaviorY = 'contain'
        body.style.overflow = 'hidden'
    }
})

onUnmounted(() => {
    const body = document.querySelector('body')
    if (body) {
        body.style.overscrollBehaviorY = 'auto'
        body.style.overflow = 'auto'
    }
})

</script>

<template>
    <UMain class="no-refresh-container">
        <slot />
    </UMain>
</template>

<style scoped>
/* 
直接写在这里或者应用全局的话，会被阻断。所以要通过 js 来控制。在组件挂载和卸载时添加或删除
body {
    阻止 安卓端 下拉刷新 
    overscroll-behavior-y: contain; 
    阻止 ios 下拉刷新 
    overflow: hidden; 
} */

/* 给内部容器最大 dvh， 然后 overflow-y auto, */
/* 注意！当设置了 100dvh 后，所有的内容都应该放在这个标签中。否则无法展示！ 因为只能展示出 100dvh 中的内容*/
.no-refresh-container {
    height: 100dvh;
    overflow-y: auto;
    /* 关闭滚动条 */
    scrollbar-width: none;
}
</style>