# 附录：Stripe Billing 订阅机制速查

> 结论先行：订阅由 Stripe 管理状态、自动开票扣款并重试失败付款；定价模型、试用与按比例计费都可配置，但各有硬性限制。本页只收录 `docs.stripe.com` 官方文档中的机制，**不含任何费率数字**（所抓页面未给出）。抓取日期：2026-10-21。

写给谁：准备用订阅制收款的一人公司，需要在选型前知道"平台替你做什么、哪些要自己决定"。前置知识：已读 ch07 定价。

## 1. 订阅对象：平台管什么

- 订阅是客户为访问产品或服务进行的周期性付款；创建后 Stripe 自动生成发票、尝试收款并管理整个生命周期的状态（S1）。
- 订阅需要保存客户与支付方式，供后续账期自动扣款（S1）。
- 需要立即付款的订阅初始状态为 `incomplete`，客户须在 **23 小时**内付款才能激活；超时返回应新建订阅（S1）。
- 客户不付订阅发票时，Stripe 暂停后续收款尝试；作废发票不影响订阅状态（S1）。

## 2. 定价模型

| 模型 | 官方定义 | 适合 |
|---|---|---|
| Flat rate 固定费率 | 客户选一个服务档，付固定价格 | 档位清晰的工具类产品 |
| Per-seat 按席位 | 每个计价单位代表一个用户 | 面向团队、按人授权的软件 |
| Tiered 阶梯 | 单价随数量（volume）或用量（graduated）变化 | 量大有折扣的场景 |
| Usage-based 按用量 | 依据客户使用量收费 | 按调用量计费的 AI 工具 |

来源：S2。官方对新的按用量集成建议使用 Metronome，仅维护既有 Meters 集成时沿用原方式（S11）。

## 3. 试用

官方给出两种试用方式（S3、S4），**不能叠加**：

| 维度 | Trial offer | Free trial period |
|---|---|---|
| 作用范围 | 单个订阅项的免费或付费引入价 | 整个订阅，试用结束前免费 |
| 创建后能否改时长 | 不能，也不能安排延长或缩短 | 不能修改，也不能安排延长或缩短 |
| 适用 | 仅周期性订阅项 | 订阅上的所有项 |

共同点与注意事项：

- 两种试用期内的订阅项收入都**不计入分析口径的 MRR**（S3）。
- 免费试用期内记录的用量不计费（S3）。
- 没有原生方式在单个订阅项试用结束时安排删除该项（S3）。

## 4. 计费周期与按比例计费

**Billing cycle anchor** 是对齐未来计费周期日期的参考点，默认取订阅创建日，使用试用时取试用结束日，按 UTC 计（S5）。月订阅 anchor 为 9 月 2 日则每月 2 日计费；anchor 为 1 月 31 日则在离 anchor 最近的月末计费（S5）。

**Proration 按比例计费**用于周期中途改价或改数量（S6）：

- 示例：从 10 USD 月计划升级到 20 USD，周期过半，额外计 5 USD（文档示例，非费率）。
- 默认按秒计算。
- 负的按比例金额**不自动退款**，正的按比例金额**不立即扣款**，两者都可手动处理。
- 实际付款金额可能与预期不同；一次订阅操作可同时产生按比例项和非按比例项。

## 5. 失败扣款与重试

- 付款失败多数可恢复；Stripe Billing 可自动重试失败的订阅与发票付款（S7）。
- 官方推荐 Smart Retries：用 AI 选择重试时机，推荐默认设置为**两周内重试 8 次**，官方称其比定时重试更有效（S7）。
- 自定义重试计划最多三次，每次指定距上次尝试的天数（S7）。
- 重试用尽后可选择：取消订阅、标记为 unpaid、保持 past-due；也可暂停订阅以停止服务和开票而保留客户关系（S7、S9）。
- 不会自动恢复的情形：没有可用支付方式；发卡行返回硬拒绝码（须取得新支付方式才会执行）；本地支付方式默认不自动重试（S7）。
- 订阅最多在八次扣款失败后自动取消；若设为周期末取消，客户可用完已付时长（S10）。

## 6. 对一人公司的检查清单

以下均由上文官方限制推出，不是官方建议：

1. 想清楚试用形态：免费期与 trial offer 二选一，且创建后不能改时长。
2. 统计 MRR 时剔除试用期用户。
3. 首张发票的 23 小时窗口要在前端提示，超时流程要提前设计。
4. 上线前预览按比例金额；负按比例不会自动退款，需自己处理。
5. 面向海外或本地支付方式时，不要假设失败会自动重试。
6. 按 AI 调用量收费，需单独准备用量计量，不能只靠订阅对象。

## 缺口

- 具体费率与百分比：所抓页面均未给出，需查 Stripe 定价页。
- 独立的 dunning 流程定义页：未找到。
- Smart Retries 的完整信号清单：官方只给出示例。
- 国家/支付方式维度的失败率与恢复率：未找到。

## 来源

| 编号 | URL |
|---|---|
| S1 | https://docs.stripe.com/billing/subscriptions/overview |
| S2 | https://docs.stripe.com/products-prices/pricing-models |
| S3 | https://docs.stripe.com/billing/subscriptions/trials |
| S4 | https://docs.stripe.com/billing/subscriptions/trials/compare |
| S5 | https://docs.stripe.com/billing/subscriptions/billing-cycle |
| S6 | https://docs.stripe.com/billing/subscriptions/prorations |
| S7 | https://docs.stripe.com/billing/revenue-recovery/smart-retries |
| S9 | https://docs.stripe.com/billing/revenue-recovery/smart-retries/pause-on-payment-failure |
| S10 | https://docs.stripe.com/billing/subscriptions/cancel |
| S11 | https://docs.stripe.com/billing/subscriptions/usage-based |

飞轮来源：zenHeart/workflow#572（核验 found 66 / 66）。
