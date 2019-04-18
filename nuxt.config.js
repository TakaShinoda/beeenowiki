const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
      base: '/beeenowiki/'
    }
  } : {}

export default {
    dir: {
        layouts: 'src/components/layouts',
        pages: 'src/components/pages',
    },
    head: {
        title: 'Beeenowiki',
        titleTemplate: '%s - Beeenowiki',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { property: 'og:title', content: 'Beeenowiki' },
            // hidは一意の識別子として使用されます。`vmid` は動作しないので使わないでください
            { hid: 'description', name: 'description', content: 'Beeeno information' }
        ]
    },
    ...routerBase
}
