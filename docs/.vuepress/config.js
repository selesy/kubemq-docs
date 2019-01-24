module.exports = {
    base: '/',
    title: 'KubeMQ Documentation',
    description: 'Message broker  for containers and Kubernetes',
    head:
        ['link' , {rel :  'icon' , href :  '/icon.png' }],
    plugins: ['@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor',
        headerTopOffset: 120
    }],
    markdown: {
        anchor: { permalink: false },
        lineNumbers: true,
    },
    themeConfig: {
        editLinks: false,
        displayAllHeaders: true,
        logo: `/kubemq-logo.png`,
        docsDir: 'docs',
        nav: [
            { text: 'KubeMQ.io', link: 'https://kubemq.io' },
        ],
        sidebar: [
            {
                title: 'Home',
                collapsable: true,
                children: [
                    '/home',
                ]
            },
            {
                title: 'Installation',
                collapsable: true,
                children: [
                    '/installation-get',
                    `/installation-helm`,
                    `/installation-single`,
                    `/installation-cluster`
                ]
            },
            {
                title: 'Concepts',
                collapsable: true,
                children: [
                    '/concepts-terminology',
                    `/concepts-messaging-patterns`,
                    `/concepts-endpoints`,
                ]
            },
            {
                title: 'Configuration',
                collapsable: true,
                children: [
                    '/configuration-general',
                    `/configuration-cluster`,
                    `/configuration-persistence`,
                    `/configuration-interfaces`,
                    `/configuration-logging`,
                    `/configuration-metrics`,

                ]
            },
            {
                title: 'Playground',
                collapsable: true,
                children: [
                    '/playground',
                ]
            },
            {
                title: 'Reference',
                collapsable: true,
                children: [
                    '/rest',
                ]
            },
            {
                title: 'SDK',
                collapsable: true,
                children: [
                    '/sdk',
                ]
            },


        ]
    }
};