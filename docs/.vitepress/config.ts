import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '一人公司',
  description: '从 0 到终局的完整生命周期 —— 教材化个人商业化手册',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#e85d3a' }],
  ],
  cleanUrls: true,

  // 自定义样式：教材化排版 + 品牌色 + 打印优化
  // 加载 custom.css 作为站点级样式覆盖
  //（VitePress 默认会扫描 docs/.vitepress/theme/ 与 docs/.vitepress/custom.css）
  // 这里是显式声明 vite options 让 custom.css 被全局引入
  themeConfig: {
    siteTitle: '一人公司',

    // 顶部仅保留品牌标题与主索引入口；侧栏做完整目录（替代每章一个 menu）
    nav: [
      { text: '书籍', link: '/preface' },
      { text: '附录', link: '/appendix/benchmarks' },
    ],

    // 左侧按"所在部分"自动渲染侧栏索引
    sidebar: {
      '/preface': [{ text: '序', items: [
        { text: '开篇词', link: '/preface' },
        { text: '简介', link: '/intro' },
        { text: '结束语', link: '/conclusion' },
      ] }],
      '/part0/': [{ text: '第一部分　认识商业', items: [
        { text: 'ch01 商业的本质', link: '/part0/ch01-what-is-business' },
        { text: 'ch02 商业简史与个人位置', link: '/part0/ch02-history' },
        { text: 'ch03 商业化理论最小集', link: '/part0/ch03-theory-map' },
      ] }],
      '/part1/': [{ text: '第二部分　起点', items: [
        { text: 'ch04 洞察需求', link: '/part1/ch04-demand' },
        { text: 'ch05 定位与验证', link: '/part1/ch05-positioning-validation' },
      ] }],
      '/part2/': [{ text: '第三部分　产品与定价', items: [
        { text: 'ch06 产品化', link: '/part2/ch06-productization' },
        { text: 'ch07 定价', link: '/part2/ch07-pricing' },
      ] }],
      '/part3/': [{ text: '第四部分　运营与推广', items: [
        { text: 'ch08 受众与内容运营', link: '/part3/ch08-audience' },
        { text: 'ch09 推广与获客', link: '/part3/ch09-promotion' },
        { text: 'ch10 转化与销售', link: '/part3/ch10-conversion' },
      ] }],
      '/part4/': [{ text: '第五部分　数据', items: [
        { text: 'ch11 一人公司的数据挖掘', link: '/part4/ch11-data' },
      ] }],
      '/part5/': [{ text: '第六部分　经营自己', items: [
        { text: 'ch12 交付与自动化', link: '/part5/ch12-delivery' },
        { text: 'ch13 财务与法务', link: '/part5/ch13-finance' },
        { text: 'ch14 自我运营', link: '/part5/ch14-self-ops' },
      ] }],
      '/part6/': [{ text: '第七部分　增长与终局', items: [
        { text: 'ch15 增长', link: '/part6/ch15-growth' },
        { text: 'ch16 终局', link: '/part6/ch16-endgame' },
      ] }],
      '/appendix/': [{ text: '附录', items: [
        { text: '基准数据速查表', link: '/appendix/benchmarks' },
        { text: '工程师转管理（全本）', link: '/appendix/eng-to-manager' },
        { text: '述职与向上汇报（全本）', link: '/appendix/reporting' },
      ] }],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/zenHeart/learn-business' }],

    outline: { level: [2, 3] },

    footer: {
      message: '个人学习知识库 · 教材化结构 · 数据均标注来源与口径',
      copyright: '2026 · zenHeart',
    },

    // 顶部目录侧栏按钮（移动端兜底）
    sidebarMenuLabel: '目录',
  },
})