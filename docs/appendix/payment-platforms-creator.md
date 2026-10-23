# 附录：Gumroad / Ko-fi / Buy Me a Coffee 收款条款对照

> 结论先行：三家的关键差异在"谁是记录商户（Merchant of Record）"和"钱先到谁手里"。Gumroad 自 2025-01-01 起承担全部税务义务、但提现门槛最高；Ko-fi 不经手资金、税务由创作者自己负责；Buy Me a Coffee 费率与提现门槛最清晰，税务同样在创作者侧。三家均未在已抓取页面中给出中国大陆创作者的可用性结论。抓取日期：2026-10-21。

写给谁：要在海外搭一条"可分享收款入口"的一人公司创作者。前置知识：已读 ch07 定价与 ch13 财务合规。本页只做条款整理，不含注册或购买建议。

## 1. 对照表

| 维度 | Gumroad | Ko-fi | Buy Me a Coffee |
|---|---|---|---|
| 平台费 | 直链 / 自有页面 10% + $0.50；Discover 市场固定 30%（含全部处理费）；当月付费成交满 $20,000 后，当月新直链单降为 5% + $0.50（S1） | 官方页面口径不一致（见第 2 节） | 每笔 5%，无月费（S11、S15） |
| 支付处理费 | 信用卡 2.9% + $0.30，另计；PayPal 费用另计（S1） | 由 PayPal / Stripe 各自收取，页面只写"标准处理费"，无数字（S6） | Stripe 2.9% + $0.30；提现 0.5%；国际交易 +1%；订阅 +0.5%（S11） |
| 钱怎么到手 | 多数国家本币银行直汇；不支持的国家仅 PayPal（USD，扣 2%）（S3） | 直达创作者自己的 PayPal / Stripe 账户，无提现排期（S6、S9） | 净额打到创作者银行账户，先经 Stripe（S11、S13） |
| 提现门槛 | 余额满 $100；成交净额需在余额中停留至少 7 天（S3、S5） | 页面未给出（因不经手资金） | 未结余额满 $10；首次提现需人工审核（S13） |
| 是否 MoR | 是：S2 称自 2025-01-01 起 Gumroad 处理全部税务义务；S4 条款称其为转售的记录商户 | 否，创作者本人是记录商户；销售税由创作者征收与申报（S8） | 页面无该字样；自述为直接收款平台，不代收代缴销售税与 VAT（S14、S15） |
| 中国大陆 | 银行直汇名单列有香港、澳门、台湾，无大陆条目；PayPal 兜底路径未核验（S3） | 官方未公布国家名单（S9、S10） | 提现国家跟随 Stripe，名单含香港，无大陆、无台湾（S12） |

## 2. 各平台要点

### Gumroad

- 费率取决于成交来源：直链 10% + $0.50，Discover 市场固定 30%。做成本比较时要把 2.9% + $0.30 的处理费加回 10% 档（S1）。
- MoR 身份意味着间接税由平台处理，但页面没有说明创作者自己的所得税义务，属未核验（S2、S4）。
- 提现有 $100 硬门槛和 7 天停留期，对低客单价、低流水的早期阶段回款偏慢（S3、S5）。

### Ko-fi

- 同一定价页内有两套口径：表格写 Standard $0/月 + 5%、Gold $12/月 0%；同页 FAQ 写免费打赏 0%、会员 / 商店 / 约稿 5%；Gold 专页另写"不再需要 Gold"（S6、S7）。官方未收敛前，不应引用任何单一"综合费率"。
- 官方 FAQ 明确"你是记录商户"，并写明适用税费由创作者自行征收与缴纳（S8）。
- 收款前提是创作者已有可用的 PayPal 或 Stripe 账户，且只接受标准 Stripe 账户（S9）。

### Buy Me a Coffee

- 帮助中心与条款口径一致：5% 平台费，创作者保留 95%（S11、S15）。
- 处理费逐项列明，是三者中透明度最高的一家（S11）。
- 税务由创作者负责；美国 1099-K 可从 Stripe 下载（S14）。条款含制裁名单与全面制裁地区限制（S15）。

## 3. 对"最短可分享收款入口"的观察

以下由上表事实推出，不是官方建议：

1. 链路最短的是 Ko-fi：款项直达创作者自己的账户，但前提是已有可收款的 PayPal / Stripe 账户。
2. 起收门槛最低的是 Buy Me a Coffee（$10）；最高的是 Gumroad（$100）。
3. 不想自己处理销售税的场景，只有 Gumroad 在已抓取页面中明确承担；另两家都由创作者自理。
4. 三家都无法据已抓取页面断言中国大陆个人是否可注册或结汇，选型前需向平台或其处理方（Stripe / PayPal）另行核实。

## 缺口

- Ko-fi Gold 帮助页（HTTP 403）、Buy Me a Coffee 定价页（HTTP 404）、Ko-fi Beginner FAQs 抓取失败，未纳入引用。
- Ko-fi 提现门槛与处理费数字、三家的中国大陆可用性、退款导致的费率处理差异：均未核验。
- 外部核验结果：found 42 / not-found 10 / source-unreachable 3；not-found 项已在正文中按"未核验"处理，未写入结论。

## 来源

| 编号 | URL |
|---|---|
| S1 | https://gumroad.com/help/article/66-gumroads-fees |
| S2 | https://gumroad.com/pricing |
| S3 | https://gumroad.com/help/article/13-getting-paid.html |
| S4 | https://gumroad.com/terms |
| S5 | https://gumroad.com/help/article/269-balance-page |
| S6 | https://ko-fi.com/pricing |
| S7 | https://ko-fi.com/gold |
| S8 | https://ko-fi.com/home/about |
| S9 | https://help.ko-fi.com/hc/en-us/articles/115003980153-I-don-t-have-a-PayPal-account |
| S10 | https://ko-fi.com/Home/Terms |
| S11 | https://help.buymeacoffee.com/en/articles/8105744-how-to-calculate-charges-on-your-payment |
| S12 | https://help.buymeacoffee.com/en/articles/6258038-supported-countries-for-payouts-on-buy-me-a-coffee |
| S13 | https://help.buymeacoffee.com/en/articles/6364717-when-are-payouts-processed |
| S14 | https://help.buymeacoffee.com/en/articles/8039657-understanding-the-tax-process-on-buy-me-a-coffee |
| S15 | https://buymeacoffee.com/terms |

飞轮来源：zenHeart/workflow#549。
