module.exports = {
    plugins: ['@vuepress/nprogress'],   //  进度条插件
    base: "/MyVueproess/",
    title: "TuoYingtao的博客",
    description: "专注于个人学习技术栈分享，从前端到后端",

    markdown: {
        lineNumbers: true // 代码显示行号
    },

    plugins: [
        ['@vuepress/active-header-links'],
        ['@vuepress/back-to-top'],

        // 配置支持PWA
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
      }],

      // VuePress集成Live2D看板娘 Live2D plugin for VuePress.
      ['vuepress-plugin-helper-live2d', {
          live2d: {
            // 是否启用(关闭请设置为false)(default: true)
            enable: true,
            // 模型名称(default: hibiki)>>>取值请参考：
            // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
            model: 'hijiki',
            display: {
              position: "right", // 显示位置：left/right(default: 'right')
              width: 135, // 模型的长度(default: 135)
              height: 300, // 模型的高度(default: 300)
              hOffset: 50, //  水平偏移(default: 65)
              vOffset: 270, //  垂直偏移(default: 0)
            },
            mobile: {
              show: true // 是否在移动设备上显示(default: false)
            },
            react: {
              opacity: 0.8 // 模型透明度(default: 0.8)
            }
          }
        }],

      // VuePress集成Gitalk
      ['vuepress-plugin-mygitalk', {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 是否开启首页评论(default: true)
          home: true,
          // Gitalk配置
          gitalk: {
            // GitHub Application Client ID.
            clientID: '',
            // GitHub Application Client Secret.
            clientSecret: '',
            // GitHub repository. 存储评论的 repo
            repo: '',
            // GitHub repository 所有者，可以是个人或者组织。
            owner: '',
            // 设置语言(default: zh-CN)
            language: 'zh-CN',
          }
        }],

        /* 两个插件只能选一个 */
        ['@vuepress/plugin-back-to-top', false],
        ['vuepress-plugin-gotop-plus', {
            // 是否在移动设备上显示(default: true)
            mobileShow: false,
            // 回到页首元素显示触发的高度阈值(default: 50)
            threshold: 50
        }],

      
    ],
    head: [
        ['link', { rel: 'icon', href: '/image/logo/logo.png' }],
        //增加manifest.json
        ['link', { rel: 'manifest', href: '../../manifest.json' }],
    ],

    themeConfig:{
        // GitHub 地址
        repo: 'https://github.com/BeautifulGirl230',
        repoLabel: 'GitHub',

        // 文档更新时间：
        lastUpdated: 'Last Updated',

        
        sidebar: {
            "/web/CSS3/": [
                {
                    title: "CSS3",
                    name: "CSS3",
                    collabsable: false,
                    children: [
                        ['/web/CSS3/',"CSS3"],
                        ["/web/CSS3/displayFlexGrid.md", "display的Flex、Grid属性"]
                    ]
                }
            ],
            "/web/JavaScript/": [ 
                {
                    title: "JavaScript",
                    name: "JavaScript",
                    collabsable: false,
                    children: [
                        ['/web/JavaScript/',"ESMAScript6.0"],
                    ]
                }
            ],
            "/web/WeChatApplets/": [ 
                {
                    title: "WeChatApplets",
                    name: "WeChatApplets",
                    collabsable: false,
                    children: [
                        ['/web/WeChatApplets/',"WeChatApplets"],
                    ]
                }
            ],

            "/vue/": [
                {
                    title: "Vue",
                    name: "Vue",
                    collabsable: false,
                    children: ['/vue/']
                }
                
            ],
            "/Java/JavaBase/": [
                {
                    title: "Java基础笔记",
                    name: "Java基础笔记",
                    collabsable: true,
                    children: [
                        ['/Java/JavaBase/',"Java基础笔记"]
                    ]
                },  
            ],
            "/Java/function/": [
                {
                    title: "函数",
                    name: "函数",
                    collabsable: false,
                    children: [
                        ['/Java/function/Math/',"JavaMath函数"],
                        ['/Java/function/String/',"String函数"]
                    ]
                },
            ],
        },
        nav:[
            { 
                text: "主页", link: "/" 
            }, { 
                text: "前端", 
                items:[
                    { text: "HTML", link: "/web/HTML/" },
                    { text: "CSS3", link: "/web/CSS3/" },
                    { text: "JavaScript", link: "/web/JavaScript/" },
                    { text: "WeChatApplets", link: "/web/WeChatApplets/" },
                ]
            }, { 
                text: "vue", link: "/vue/" 
            }, { 
                text: "Java",
                items:[
                    { text: "Java基础笔记", link: "/Java/JavaBase/" },
                    { text: "函数", link: "/Java/function/" },
                ]
            }, { 
                text: "技术栈", link: "/do/" 
            },
            
        ]
    }
}