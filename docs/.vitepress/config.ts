import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '一人公司',
  description: '从 0 到终局的完整生命周期 —— 一人商业化全流程手册',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  cleanUrls: true,
  themeConfig: {
    siteTitle: '一人公司',

    nav: [
      { text: '起点', link: '/prologue', activeMatch: '/(prologue|part1)' },
      { text: '产品与定价', link: '/part2/ch3-productization', activeMatch: '/part2' },
      { text: '受众与转化', link: '/part3/ch5-audience', activeMatch: '/part3' },
      { text: '运营', link: '/part4/ch7-delivery', activeMatch: '/part4' },
      { text: '增长与终局', link: '/part5/ch10-growth', activeMatch: '/part5' },
      { text: '基准数据', link: '/appendix/benchmarks' },
    ],

    sidebar: {
      '/prologue': bookSidebar(),
      '/part1': bookSidebar(),
      '/part2': bookSidebar(),
      '/part3': bookSidebar(),
      '/part4': bookSidebar(),
      '/part5': bookSidebar(),
      '/appendix': bookSidebar(),
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/zenHeart/learn-business' }],

    outline: { level: [2, 3] },

    footer: {
      message: '个人学习知识库 · 数据均标注来源与口径',
    },
  },
})

function bookSidebar() {
  return [
    {
      text: '前言',
      items: [{ text: '为什么是现在', link: '/prologue' }],
    },
    {
      text: '第一部分 · 起点',
      items: [
        { text: 'ch1 定位', link: '/part1/ch1-positioning' },
        { text: 'ch2 验证', link: '/part1/ch2-validation' },
      ],
    },
    {
      text: '第二部分 · 产品与定价',
      items: [
        { text: 'ch3 产品化', link: '/part2/ch3-productization' },
        { text: 'ch4 定价', link: '/part2/ch4-pricing' },
      ],
    },
    {
      text: '第三部分 · 受众与转化',
      items: [
        { text: 'ch5 受众', link: '/part3/ch5-audience' },
        { text: 'ch6 转化', link: '/part3/ch6-conversion' },
      ],
    },
    {
      text: '第四部分 · 运营',
      items: [
        { text: 'ch7 交付与自动化', link: '/part4/ch7-delivery' },
        { text: 'ch8 财务与法务', link: '/part4/ch8-finance' },
        { text: 'ch9 自我运营', link: '/part4/ch9-self-ops' },
      ],
    },
    {
      text: '第五部分 · 增长与终局',
      items: [
        { text: 'ch10 增长', link: '/part5/ch10-growth' },
        { text: 'ch11 终局', link: '/part5/ch11-endgame' },
      ],
    },
    {
      text: '附录',
      items: [
        { text: '基准数据速查表', link: '/appendix/benchmarks' },
        { text: '工程师转管理（全本）', link: '/appendix/eng-to-manager' },
        { text: '述职与向上汇报（全本）', link: '/appendix/reporting' },
      ],
    },
  ]
}
