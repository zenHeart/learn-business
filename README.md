# learn-business

> 产品 · 管理 · 运营 —— 非工程判断力的系统化知识库。

## 定位

与 `coding` 侧的 learn-vue / learn-network 等工程仓库相对，本仓库沉淀**商业判断侧**的知识：产品取舍、团队管理、运营增长。范围对齐 [workflow/ai-assets](https://github.com/zenHeart/workflow) 中 `business` preset 的定义（商业决策、产品管理、市场营销、法务、HR、数据分析等非工程角色）。

沉淀动机（2026-09 历史对话分析结论）：历史项目里反复出现"不是拍脑袋""不是凭感觉"的防御性措辞——用打分板、Rubric、检索证据等工程手段代偿判断力。本仓库的目标是把这类判断**从代偿系统变回自己的能力**。

## 目录结构

```
learn-business/
├── docs/              # VitePress 站点（business.zenheart.site）
│   ├── product/       # 产品：优先级与取舍、数据 vs 判断力
│   ├── operations/    # 运营：NPS、增长框架
│   ├── management/    # 管理：OKR、工程师转管理、述职汇报
│   └── industry/      # 行业：资产负债与财商
└── _cases/            # 案例素材索引（脱敏描述，不放原文）
```

学习路径：01 产品 → 03 管理 → 02 运营 → 04 行业（先练判断框架，再练对人与增长的手感）。

## 来源仓库

| 仓库 | 处置 | 并入内容 |
| --- | --- | --- |
| learn-product | 已并入（本仓库前身） | README 目录规划 → 01/02/04 模块骨架 |
| learn-manage | 已并入 | `_draft/okr.md` → `03-management/okr.md` |
| learn-operation | 已并入 | `nps.md` → `02-operations/nps.md` |

以上仓库经核查均无 issue / PR 存量，无额外数据需要迁移。

已有学习资料分布（保持原地，只索引不搬运）：

- `zen-docs/gitbook/` — 40+ 本商业/管理/运营向课程书（书单见各模块「已有资料」）
- `readlist` — 读书笔记，含《卓有成效的管理者》等管理经典

## 隐私边界（硬约束）

1. **本仓库为公开仓库**（GitHub Pages 发布需要），因此入库内容执行发布级脱敏标准。
2. 公司内部信息**一律不落正文**：项目代号、内网系统与域名、周报/述职/绩效细节、同事与内部数据。工作场景只能以中性描述进入正文（如"客户端发版分工"），原始材料留在个人工作档案，不放本仓库。
3. 不提交任何 token、凭据、账号、密钥；引用他人付费课程内容只做书名级索引，不复制正文（版权边界）。
4. `_cases/` 只放脱敏后的定位描述，不指向具体私有仓库。

## 记录规则

继承 learn-product 原有三条，并补充一条：

1. 每篇文档需有实际案例支撑
2. 重要概念用一句话总结
3. 定期复盘，沉淀方法论
4. **判断类结论必须附当时的数据或证据**——写"为什么这么取舍"，而不只是结论本身

## 相关仓库

- [learn-design](https://github.com/zenHeart/learn-design) — 设计认知知识库（独立维护，不并入本仓库）
- [zenHeart.github.io](https://github.com/zenHeart/zenHeart.github.io) — 站点发布
