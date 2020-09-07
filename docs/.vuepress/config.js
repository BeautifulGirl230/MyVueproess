module.exports = {
    base: "/MyVueproess/",
    title: "TuoYingtao的博客",
    description: "专注于个人学习技术栈分享，从前端到后端",

    // 配置支持PWA
    plugins: ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
      }],
    head: [
        //增加manifest.json
        ['link', { rel: 'manifest', href: '../manifest.json' }],
    ],
    themeConfig:{
        sidebar: {
            "/vue/": [
                {
                    title: "Vue",
                    name: "Vue",
                    collabsable: false,
                    children: ['/vue/']
                }
                
            ],
            "/web/": [
                {
                    title: "WeChatApplets",
                    name: "WeChatApplets",
                    collabsable: false,
                    children: [
                        ['/web/WeChatApplets/',"获取用户信息"],
                        ["/web/WeChatApplets/userAccredit.md", "用户授权"]
                    ]
                },
                {
                    title: "CSS3",
                    name: "CSS3",
                    collabsable: false,
                    children: [
                        ['/web/CSS3/',"CSS3"],
                        ["/web/CSS3/displayFlexGrid.md", "display的Flex、Grid属性"]
                    ]
                }
                
            ]
        },
        nav:[
            { 
                text: "主页", link: "/" 
            }, { 
                text: "前端", 
                items:[
                    { text: "HTML", link: "/web/HTML/" },
                    { text: "CSS3", link: "/web/CSS3/" },
                    { text: "WeChatApplets", link: "/web/WeChatApplets/" },
                ]
            }, { 
                text: "vue", link: "/vue/" 
            }, { 
                text: "Java", link: "/Java/" 
            }, { 
                text: "技术栈", link: "/do/" 
            },
            
        ]
    }
}