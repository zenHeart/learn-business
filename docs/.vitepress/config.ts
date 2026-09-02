import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'learn-business',
  description: '产品 · 管理 · 运营 —— 非工程判断力的系统化知识库',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'learn-business',

    nav: [
      { text: '产品', link: '/product/', activeMatch: '/product' },
      { text: '运营', link: '/operations/', activeMatch: '/operations' },
      { text: '管理', link: '/management/', activeMatch: '/management' },
      { text: '行业', link: '/industry/', activeMatch: '/industry' },
    ],

    sidebar: {
      '/product/': [
        {
          text: '产品',
          items: [
            { text: '概览', link: '/product/' },
            { text: '优先级与取舍框架', link: '/product/prioritization' },
            { text: '数据 vs 判断力', link: '/product/data-vs-judgment' },
          ],
        },
      ],
      '/operations/': [
        {
          text: '运营',
          items: [
            { text: '概览', link: '/operations/' },
            { text: 'NPS 净推荐值', link: '/operations/nps' },
            { text: '增长框架与局限', link: '/operations/growth' },
          ],
        },
      ],
      '/management/': [
        {
          text: '管理',
          items: [
            { text: '概览', link: '/management/' },
            { text: 'OKR', link: '/management/okr' },
            { text: '工程师转管理', link: '/management/eng-to-manager' },
            { text: '述职与向上汇报', link: '/management/reporting' },
          ],
        },
      ],
      '/industry/': [
        {
          text: '行业',
          items: [
            { text: '概览', link: '/industry/' },
            { text: '资产负债与财商', link: '/industry/financial-thinking' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/zenHeart/learn-business' }],

    outline: { level: [2, 3] },

    footer: {
      message: '个人学习知识库 · 内容仅供自用',
    },
  },
})
