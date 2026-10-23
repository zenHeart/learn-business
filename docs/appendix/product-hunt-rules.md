# 附录：Product Hunt 发布规则速查

> 结论先行：Product Hunt 只收"当前可用的数字产品"，要求个人账号、英文提交、PST 12:01 AM 上线，严禁求票与操纵排名。规则读自官方帮助中心的网页快照，**发布前务必对照当前发布表单**。快照日期 2025-09 至 2026-10，抓取日期 2026-10-21。

写给谁：计划把一人公司产品首发到 Product Hunt 的创作者。前置知识：已读 ch10 冷启动获客。

## 1. 发布前提与字段

| 项目 | 规则 | 出处 |
|---|---|---|
| 账号 | 须用个人账号发布，公司账号不能发布也不能 hunt；资料须像真人、代表个人 | S3、S1 |
| 产品名 | 只写产品名，不加描述或 emoji（名称本身含 emoji 除外） | S1 |
| Tagline | 上限 60 字符，简短、不夸张 | S2 |
| 描述 | **官方两页冲突**：How to post 写 260 字符，Preparing for launch 写 500 字符；以当前表单为准 | S1、S2 |
| 主链接 | 产品页直链；短链和带 UTM 的跟踪链接不被接受 | S2 |
| Launch tags | 最多 3 个，须与发布内容强相关 | S2 |
| 图片 / 视频 | 图片（含 GIF）小于 3MB；图库至少 2 张才可见；视频仅支持 YouTube 链接 | S1、S2 |
| 语言 | 所有提交内容使用英文 | S3 |

## 2. 时间与调度

- 站点按 PST 的 24 小时周期运行，帖子在 PST 12:01 AM 上线（S1）。
- 发布最多可提前 1 个月排期（S2）。

## 3. 能否被 Featured

- 主要收录数字产品与服务，且必须是当前已可使用的产品（S4）。
- 明确不收录：等候名单产品（除非立即开放）、目录 / 清单、模板、Boilerplate、播客、课程、报告、活动、书籍、服务、电商站、Deal 站、非技术话题、众筹项目（除非发布时已完全可用）、硬件（除非有突出数字成分）（S4）。
- 用户互动不是 Featured 的唯一决定因素（S4）。

## 4. 禁止行为与下架原因

- 禁止：群发消息、求票、使用 bot、以利益换票等人为放大互动的做法；自我推广式评论会被移除（S3）。
- 下架原因：非产品（服务、代理）；资料不完整或使用公司品牌账号；直接复制已有产品，或无重大更新地多次发布；与技术、设计、创新焦点不符的离题内容（S5）。
- 下架由自动系统与人工复核共同决定（S5）。
- 重发：产品可在 6 个月后重新提交；无实质改动地重复发布可能导致进一步处理，包括封号（S3、S7）。

## 5. 发布前自检清单

- [ ] 用个人账号，个人资料完整且像真人
- [ ] Tagline ≤ 60 字符；描述字数以当前表单为准
- [ ] 主链接为直链，无短链、无 UTM
- [ ] Launch tags ≤ 3；图片 < 3MB 且 ≥ 2 张；视频用 YouTube
- [ ] 产品当前可用，不属于等候名单、课程、模板、服务等不收录类型
- [ ] 全部内容为英文，按 PST 12:01 AM 规划，排期不超过 1 个月
- [ ] 没有求票、互换票、bot 或群发互动
- [ ] 若 6 个月内二次提交，先查官方说明（原文只写"see here"，未写具体门槛）

## 缺口

- 官方两页对描述字数（260 / 500）冲突，未说明以哪页为准。
- 提交后审核时长、Featured 评审周期、票数权重与算法、下架申诉流程：官方页面未写。
- 官方站点直连返回 HTTP 403，全部内容来自 web.archive.org 快照；Launch Guide 无可用快照，未使用。线上现状可能已变化。

## 来源

| 编号 | 页面（Wayback 快照日期） |
|---|---|
| S1 | How to post a product（2026-02-09）：https://web.archive.org/web/20260209011632/https://help.producthunt.com/en/articles/479557-how-to-post-a-product |
| S2 | Preparing for launch（2026-10-12）：https://web.archive.org/web/20261012093527/https://www.producthunt.com/launch/preparing-for-launch |
| S3 | Community Guidelines（2025-12-28）：https://web.archive.org/web/20251228171825/https://help.producthunt.com/en/articles/3615694-community-guidelines |
| S4 | Featuring Guidelines（2025-12-28）：https://web.archive.org/web/20251228171826/https://help.producthunt.com/en/articles/9883485-product-hunt-featuring-guidelines |
| S5 | Why are posts removed?（2025-09-07）：https://web.archive.org/web/20250907025713/https://help.producthunt.com/en/articles/484940-why-are-posts-removed |
| S6 | Why was my comment or post removed?（2025-12-28）：https://web.archive.org/web/20251228171825/https://help.producthunt.com/en/articles/3539992-why-was-my-comment-or-post-removed |
| S7 | How do things end up on the homepage?（2025-12-28）：https://web.archive.org/web/20251228171825/https://help.producthunt.com/en/articles/484923-how-do-things-end-up-on-the-homepage |

飞轮来源：zenHeart/workflow#551（外部核验 found 29 / 29）。
