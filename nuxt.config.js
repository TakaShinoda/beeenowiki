export default {
    dir: {
        layouts: 'src/components/layouts',
        pages: 'src/components/pages',
    },
    head: {
        titleTemplate: '%s - Beeenowiki',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },

            // hidは一意の識別子として使用されます。`vmid` は動作しないので使わないでください
            { hid: 'description', name: 'description', content: 'Meta description' }
        ]
    }
}
