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
        }
    }
})