const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
        base: '/beeenowiki/'
    }
} : {}

export default {
    modules: [
        '@nuxtjs/pwa',
        '~/modules/typescript.js',
    ],
    manifest: {
        name: 'Beeenowiki',
        lang: 'ja',
        short_name: 'BeW',
        title: 'Beeenowiki',
        'og:title': 'Beeenowiki',
        description: 'BeeenoのWikiです。',
        'og:description': 'BeeenoのWikiです。',
        theme_color: '#ffffff',
        background_color: '#ffffff'
    },
    workbox: {
        dev: true, //開発環境でもPWA
    },
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
            { name: "google-site-verification", content: "V65tkfTzyTOAIVOF3kEq5KCkGYaNpG6fTLj8Imi6S-0" },
            { hid: 'og:title', property: 'og:title', content: 'Beeenowiki' },
            { hid: 'og:image', property: 'og:image', content: 'https://github.com/TakaShinoda/beeenowiki/raw/master/src/img/beeno1.jpg' },
            { hid: 'og:image:width', property: 'og:image:width', content: '1029' },
            { hid: 'og:image:height', property: 'og:image:height', content: '1239' },
            // hidは一意の識別子として使用されます。`vmid` は動作しないので使わないでください
            { hid: 'description', name: 'description', content: 'Beeeno information' },
        ]
    },
    ...routerBase
}
