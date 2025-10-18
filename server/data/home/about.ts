import { Language } from "~~/shared/types/languages"

const zh = {
    title: "关于",
    lang: "zh-CN",
    description: "Night Mystic 是一个亲密工具网站，同时拥有亲密包提供导入到本地。所有数据都可以自定义编辑，并且保存在您的设备本地。确保为您提供最大的隐私空间。",
    data: [
        {
            title: "隐私优先",
            description: "你的秘密，设备独享",
            content: "所有数据只存储在你手机或电脑本地，不上传云端，绝对私密。无需注册与登录，你的亲密时刻没人能偷看。",
            icon: "lucide:fingerprint",
            iconColor: "color-red-500",
        },
        {
            title: "亲密包",
            description: "随心定制你的专属数据",
            content: "导入亲密包到设备，随时编辑内容，添加你们的私密梗或激情任务，打造只属于你们的亲密体验。",
            icon: "lucide:candy",
            iconColor: "color-yellow-500",
        },
        {
            title: "手机优先",
            description: "随时随地，点燃一夜",
            content: "专为手机优化，界面简洁，随时在卧室、约会或旅行中玩。手机屏幕就是你们的浪漫舞台。",
            icon: "lucide:smartphone",
            iconColor: "color-blue-500",
        }
    ]
}

const en = {
    title: "About",
    lang: "en",
    description: "Night Mystic is an intimate toolkit website with importable intimate packs stored locally. All data is fully customizable and saved on your device, ensuring maximum privacy.",
    data: [
        {
            title: "Privacy First",
            description: "Your secrets, exclusive to your device",
            content: "All data is stored locally on your phone or computer, never uploaded to the cloud, ensuring absolute privacy. No registration or login required—your intimate moments stay private.",
            icon: "lucide:fingerprint",
            iconColor: "color-red-500"
        },
        {
            title: "Intimate Packs",
            description: "Customize your exclusive data",
            content: "Import intimate packs to your device and edit content anytime. Add your private jokes or passionate tasks to create a truly personal intimate experience.",
            icon: "lucide:candy",
            iconColor: "color-yellow-500"
        },
        {
            title: "Mobile First",
            description: "Ignite the night, anytime, anywhere",
            content: "Optimized for mobile with a clean interface, perfect for use in the bedroom, on dates, or while traveling. Your phone screen becomes your romantic stage.",
            icon: "lucide:smartphone",
            iconColor: "color-blue-500"
        }
    ]
}


const filterAbout = (lang: Language) => {
    const res = [zh, en].filter(item => item.lang === lang)
    if (res) {
        return res[0]
    }
    return en
}

export default filterAbout