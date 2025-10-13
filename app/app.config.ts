export default defineAppConfig({
    ui: {
        button: {
            slots: {
                base: 'cursor-pointer rounded-lg'
            }
        },
        navigationMenu:{
            slots:{
                link:'cursor-pointer rounded-lg'
            }
        },
        pageCard:{
            slots:{
                root:'cursor-pointer'
            }
        },
        dropdownMenu:{
            slots:{
                group:'space-y-1.5',
                item:'space-x-1 cursor-pointer !px-3 !py-2',
                content:'min-w-auto'
            }
        }
    }
})