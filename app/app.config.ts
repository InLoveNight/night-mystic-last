export default defineAppConfig({
    ui: {
        button: {
            slots: {
                base: 'cursor-pointer rounded-lg'
            }
        },
        navigationMenu: {
            slots: {
                link: 'cursor-pointer rounded-lg'
            }
        },
        pageCard: {
            slots: {
                root: 'cursor-pointer'
            }
        },
        dropdownMenu: {
            slots: {
                group: 'space-y-1.5',
                item: 'space-x-1 cursor-pointer !px-3 !py-2',
                content: 'min-w-auto'
            }
        },
        input: {
            slots: {
                root: 'w-full'
            }
        },
        textarea: {
            slots: {
                root: 'w-full'
            }
        },
        icons: {
            light: 'mingcute:sun-fill',
            dark: 'mingcute:moon-stars-fill',
            loading: 'mingcute:loading-fill'
        }
    }
})