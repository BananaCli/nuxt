const webpack = require("webpack")
import path from 'path'

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'beedit',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '素材网' },
            { hid: 'keyword', name: 'keyword', content: '网站模板' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // 公共Scss
    styleResources: {
        scss: "./assets/scss/main.scss"
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // 'ant-design-vue/dist/antd.css',
        { src: "~assets/scss/main.scss", lang: "scss" }
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/antd-ui',
        '@/plugins/element-ui',
        '@/plugins/antd-icons',
        '@/plugins/cookie',
        '@/plugins/message',
        '@/plugins/router',
        '@/plugins/http',
        // 需要在客户端起作用的JS插件，如生成二维码、生成分享插件等，否则会在服端渲染时报document或window not found的错误
        { src: "@/plugins/tools", ssr: false }
        // '@/plugins/mock',
        // '@/plugins/share',
        // { src: '~plugins/mock', ssr: true }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    router: {
        middleware: "auth"
    },
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],
    loading: false,
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        '@nuxtjs/style-resources'
    ],
    axios: {
        retry: { retries: 3 },
        debug: process.env._ENV == 'production' ? false : true,
        prefix: "/api/v1",
        timeout: 5000,
        // baseURL:process.env._ENV == 'production'?"/api/v1":"/api/v1",
        credentials: true,
        proxy: true,
        headers: { 'Content-Type': 'application/json', 'crossDomain': true },
    },
    proxy: {
        '/api': {
            target: '', // 需要代理的域名
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/'
            }
        }
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        // analyze:true //生成build报告,
        // publicPath:"https://store.netfeel.cn/netfeel-store",
        vendor: ['axios', 'element-ui', 'ant-design-vue'],
        babel: {
            "plugins": [
                ["component", { "libraryName": "element-ui", "styleLibraryName": "theme-chalk" }, ],
                ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": 'css' }],
            ]
        },
        transpile: [/ant-design-vue/],
        plugins: [
            // 按需引入国际化
            new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
        ],
        extend(config, ctx) {
            config.resolve.alias['@ant-design/icons/lib/dist$'] = path.resolve(__dirname, './plugins/antd-icons.js')
        }
    }
}