import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    meta: {
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '~/assets/images/dbc.png' }
        ]
    },


    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    css: [
        "~/assets/css/main.css",
        '~/assets/fonts/SolaimanLipi/SolaimanLipi.css',
    ],
    // buildModules: [
    //     '@nuxtjs/device',
    // ],
})
