<script lang="ts" setup>


</script>

<template>
    <UPageSection title="关于"
                  description="Night Mystic 是一个亲密工具网站，同时拥有亲密包提供导入到本地。所有数据都可以自定义编辑，并且保存在您的设备本地。确保为您提供最大的隐私空间。"
                  :ui="{ root: 'bg-muted', title: 'text-xl sm:text-2xl lg:text-3xl' }">
        <template #body>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div class="space-y-2">
                    <UIcon name="lucide:fingerprint"
                           class="size-8 text-red-500"></UIcon>
                    <h3 class=" font-black text-lg">隐私优先</h3>
                    <p class=" font-semibold text-md">你的秘密，设备独享</p>
                    <p class=" text-[14px] text-toned">所有数据只存储在你手机或电脑本地，不上传云端，绝对私密。无需注册与登录，你的亲密时刻没人能偷看。</p>
                </div>

                <div class="space-y-2">
                    <UIcon name="lucide:candy"
                           class="size-8 text-info-500 "></UIcon>
                    <h3 class=" font-black text-lg">亲密包</h3>
                    <p class=" font-semibold text-md">随心定制你的专属卡集</p>
                    <p class=" text-[14px] text-toned">导入亲密包到设备，随时编辑内容，添加你们的私密梗或激情任务，打造只属于你们的亲密体验。</p>
                </div>

                <div class="space-y-2">
                    <UIcon name="lucide:smartphone"
                           class="size-8 text-primary-500"></UIcon>
                    <h3 class=" font-black text-lg">手机优先</h3>
                    <p class=" font-semibold text-md">随时随地，点燃一夜</p>
                    <p class=" text-[14px] text-toned">专为手机优化，界面简洁，随时在卧室、约会或旅行中玩。手机屏幕就是你们的浪漫舞台。</p>
                </div>
            </div>
        </template>
    </UPageSection>
</template>