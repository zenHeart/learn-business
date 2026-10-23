import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    lang: 'zh-CN',
    title: 'ZenOPC · 一人公司全流程实战手册',
    description: '从零到一门好生意的完整闭环 —— 小白可落地的个人品牌打造与一人公司商业化盈利指南',
    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
      ['meta', { name: 'theme-color', content: '#ea580c' }],
      ['meta', { name: 'keywords', content: '一人公司,OPC,超级个体,把自己变成一门生意,个人商业化,独立开发,个人品牌,副业变现,AI Agent' }],
      ['meta', { property: 'og:title', content: 'ZenOPC · 一人公司商业化全流程实战手册' }],
      ['meta', { property: 'og:description', content: '让零基础小白结合自身特点完成一人公司商业化整套流程，打造个人品牌并实现盈利。' }],
    ],
    cleanUrls: true,

    // Mermaid 主题与自适应配置
    mermaid: {
      theme: 'default',
      darkTheme: 'dark',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
      },
    },

    mermaidPlugin: {
      class: 'mermaid',
    },

  themeConfig: {
    siteTitle: 'ZenOPC · 一人公司',
    logo: '/logo.svg',

    // 顶部主导航
    nav: [
      { text: '📖 商业化全书', link: '/preface' },
      {
        text: '🛠️ 实战工具箱',
        items: [
          { text: '🗓️ 90天跑通闭环计划', link: '/toolkit/90-days-action-plan' },
          { text: '🤖 高转化 Prompt 与模板库', link: '/toolkit/templates-and-prompts' },
          { text: '⚠️ 15大避坑指南与自检表', link: '/toolkit/pitfalls-and-checklists' },
        ],
      },
      { text: '📊 基准数据速查', link: '/appendix/benchmarks' },
      { text: '⚡ 快速导航', link: '/intro' },
      { text: '📥 离线 EPUB', link: '/zenopc.epub', target: '_blank' },
    ],

    // 全书体系化侧栏：覆盖全生命周期所有环节
    sidebar: {
      '/': [
        {
          text: '🌱 序章 · 认识商业与个人位置',
          collapsed: false,
          items: [
            { text: '开篇词：为什么你要懂商业', link: '/preface' },
            { text: '阅读导引：零基础小白学习路线', link: '/intro' },
            { text: 'ch01 商业的本质与个人位置', link: '/part0/ch01-what-is-business' },
            { text: 'ch02 商业简史与 OPC 范式转移', link: '/part0/ch02-history' },
            { text: 'ch03 商业化理论与最小闭环飞轮', link: '/part0/ch03-theory-map' },
          ],
        },
        {
          text: '🧭 第一阶段 · 自我盘点与定位验证',
          collapsed: false,
          items: [
            { text: 'ch04 挖掘自身优势与商业支点', link: '/part1/ch04-demand' },
            { text: 'ch05 付费级需求与一人定位三角', link: '/part1/ch05-positioning-validation' },
          ],
        },
        {
          text: '📦 第二阶段 · 产品矩阵与价值要约 (Offer)',
          collapsed: false,
          items: [
            { text: 'ch06 结果承诺与产品化阶梯', link: '/part2/ch06-productization' },
            { text: 'ch07 高客单与价值定价全案', link: '/part2/ch07-pricing' },
          ],
        },
        {
          text: '📢 第三阶段 · 个人品牌与内容获客',
          collapsed: false,
          items: [
            { text: 'ch08 个人 IP 与信任资产逻辑', link: '/part3/ch08-audience' },
            { text: 'ch09 AI 内容生产流水线与全网分发', link: '/part3/ch09-promotion' },
            { text: 'ch10 冷启动获客与首批100种子用户', link: '/part3/ch10-conversion' },
          ],
        },
        {
          text: '🤝 第四阶段 · 无痛成交与极简交付',
          collapsed: false,
          items: [
            { text: 'ch11 无推销感成交与转化漏斗', link: '/part4/ch11-data' },
            { text: 'ch12 交付系统与一人服务四大能力', link: '/part5/ch12-delivery' },
          ],
        },
        {
          text: '⚖️ 第五阶段 · 财务风控与自我经营',
          collapsed: false,
          items: [
            { text: 'ch13 财务合规、税务与现金流安全垫', link: '/part5/ch13-finance' },
            { text: 'ch14 自我运营：精力、决策与防枯竭', link: '/part5/ch14-self-ops' },
          ],
        },
        {
          text: '🚀 第六阶段 · 增长飞轮与终局选择',
          collapsed: false,
          items: [
            { text: 'ch15 自动化增长引擎与复利杠杆', link: '/part6/ch15-growth' },
            { text: 'ch16 终局选择：小而美 vs 资产退出', link: '/part6/ch16-endgame' },
            { text: '结语：在不确定的世界拥有赚钱的底气', link: '/conclusion' },
          ],
        },
        {
          text: '🧰 小白实战工具箱 (直接抄作业)',
          collapsed: false,
          items: [
            { text: '🗓️ 90天跑通商业闭环计划', link: '/toolkit/90-days-action-plan' },
            { text: '🤖 高转化 Prompt 与模板库', link: '/toolkit/templates-and-prompts' },
            { text: '⚠️ 15大避坑指南与自检清单', link: '/toolkit/pitfalls-and-checklists' },
          ],
        },
        {
          text: '📚 附录与基准速查',
          collapsed: true,
          items: [
            { text: '基准数据速查表 (转化率/MRR/中位数)', link: '/appendix/benchmarks' },
            { text: '工程师转管理与商业决策', link: '/appendix/eng-to-manager' },
            { text: '一人 AI 产品案例（作者一手披露）', link: '/appendix/ai-product-cases-founder-disclosed' },
            { text: '商业沟通与向上汇报全案', link: '/appendix/reporting' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zenHeart/learn-business' },
    ],

    outline: {
      level: [2, 3],
      label: '本章目录',
    },

    footer: {
      message: 'ZenOPC · 一人公司全流程实战手册 | 让每个人都拥有把自己变成一门生意的能力',
      copyright: 'Copyright © 2026 zenHeart · Released under MIT License',
    },

    docFooter: {
      prev: '上一节',
      next: '下一节',
    },

    darkModeSwitchLabel: '深色模式',
    sidebarMenuLabel: '目录菜单',
    returnToTopLabel: '返回顶部',
  },
}))