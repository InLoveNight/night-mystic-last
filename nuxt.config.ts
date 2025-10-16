// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@nuxt/ui', '@nuxtjs/i18n', '@vueuse/nuxt'],
    css: ['~/assets/css/base.css'],
    ui: {
        // fonts: false
    },
    icon: {
        class: 'align-middle'
    },
    fonts: {
        provider: 'bunny'
    },
    colorMode: {
        storageKey: 'night-mystic-color',
        preference: 'system'
    },
    i18n: {
        defaultLocale: 'en',
        restructureDir: 'app/lang',
        langDir: './',
        detectBrowserLanguage: {
            cookieKey: 'night-mystic-lang'
        },
        locales: [
            { code: 'en', name: 'English', file: 'en.json' },
            { code: 'zh-CN', name: '简体中文', file: 'zh-CN.json' }
        ]
    },
    devServer: {
        host: '0.0.0.0'
    }
})