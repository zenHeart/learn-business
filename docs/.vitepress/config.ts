import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '一人公司',
  description: '从 0 到终局的完整生命周期 —— 教材化个人商业化手册',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  cleanUrls: true,
  themeConfig: {
    siteTitle: '一人公司',

    nav: [
      { text: '开篇词', link: '/preface' },
      { text: '简介', link: '/intro' },
      { text: '第一部分 认识商业', link: '/part0/ch01-what-is-business' },
      { text: '第二部分 起点', link: '/part1/ch04-demand' },
      { text: '第三部分 产品', link: '/part2/ch06-productization' },
      { text: '第四部分 运营', link: '/part3/ch08-audience' },
      { text: '第五部分 数据', link: '/part4/ch11-data' },
      { text: '第六部分 经营', link: '/part5/ch12-delivery' },
      { text: '第七部分 终局', link: '/part6/ch16-endgame' },
      { text: '附录', link: '/appendix/benchmarks' },
    ],

    sidebar: {
      '/preface': [{ text: '开篇词', items: [{ text: '为什么一个技术人要懂商业', link: '/preface' }] }],
      '/intro': [{ text: '简介', items: [{ text: '关于本书', link: '/intro' }] }],
      '/part0/': partSidebar('认识商业', [
        { text: 'ch01 商业的本质', link: '/part0/ch01-what-is-business' },
        { text: 'ch02 商业简史与个人位置', link: '/part0/ch02-history' },
        { text: 'ch03 商业化理论最小集', link: '/part0/ch03-theory-map' },
      ]),
      '/part1/': partSidebar('起点', [
        { text: 'ch04 洞察需求', link: '/part1/ch04-demand' },
        { text: 'ch05 定位与验证', link: '/part1/ch05-positioning-validation' },
      ]),
      '/part2/': partSidebar('产品与定价', [
        { text: 'ch06 产品化', link: '/part2/ch06-productization' },
        { text: 'ch07 定价', link: '/part2/ch07-pricing' },
      ]),
      '/part3/': partSidebar('运营与推广', [
        { text: 'ch08 受众与内容运营', link: '/part3/ch08-audience' },
        { text: 'ch09 推广与获客', link: '/part3/ch09-promotion' },
        { text: 'ch10 转化与销售', link: '/part3/ch10-conversion' },
      ]),
      '/part4/': partSidebar('数据', [
        { text: 'ch11 一人公司的数据挖掘', link: '/part4/ch11-data' },
      ]),
      '/part5/': partSidebar('经营自己', [
        { text: 'ch12 交付与自动化', link: '/part5/ch12-delivery' },
        { text: 'ch13 财务与法务', link: '/part5/ch13-finance' },
        { text: 'ch14 自我运营', link: '/part5/ch14-self-ops' },
      ]),
      '/part6/': partSidebar('增长与终局', [
        { text: 'ch15 增长', link: '/part6/ch15-growth' },
        { text: 'ch16 终局', link: '/part6/ch16-endgame' },
      ]),
      '/appendix/': partSidebar('附录', [
        { text: '基准数据速查表', link: '/appendix/benchmarks' },
        { text: '工程师转管理（全本）', link: '/appendix/eng-to-manager' },
        { text: '述职与向上汇报（全本）', link: '/appendix/reporting' },
      ]),
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/zenHeart/learn-business' }],

    outline: { level: [2, 3] },

    footer: {
      message: '个人学习知识库 · 教材化结构 · 数据均标注来源与口径',
    },
  },
})

function partSidebar(title: string, items: { text: string; link: string }[]) {
  return [{ text: title, items }]
}
