# 附录：Stripe Webhooks 速查

> 结论先行：Stripe 通过 HTTPS 把事件以 JSON 负载推送到你注册的端点；处理前先用 `Stripe-Signature` 头验签，确认事件确实由 Stripe 发出；端点处理完要返回 2xx；投递失败时，live 模式下 Stripe 最长连续三天、按指数退避重试。用 Checkout 收款时，收款完成的信号是 `checkout.session.completed`。本页只收录 `docs.stripe.com` 官方文档中的要点。抓取日期：2026-11-02。

写给谁：准备用 Stripe 收款的一人公司，需要在“付款成功后自动发货/开通权限”之前，弄清楚事件如何到达、如何确认可信、失败后会怎样。前置知识：已读 Stripe Billing 附录与退款/拒付附录。

## 1. 接收事件

- Stripe 通过 HTTPS 把 Webhook 事件以包含事件信息的 JSON 负载发送到你的应用（S1）。
- 处理逻辑应围绕“事件负载”编写：取出事件，按事件类型分支处理，而不是依赖客户页面的跳转或刷新（S1，后半句为由此推出的做法）。

## 2. 签名校验

- Stripe 为每个 Webhook 事件在 `Stripe-Signature` 头中附带签名（S1）。
- 依据事件采取行动之前，必须先确认事件确实由 Stripe 发出（S1）。
- 落地顺序：先验签，通过后再执行业务动作；未通过则不要改动业务数据（由上两条推出）。

## 3. 返回码与重试

- 端点处理完事件后，要返回成功的 2xx 响应（S1）。
- live（生产）模式下，投递失败时 Stripe 最长连续三天、以指数退避方式重试（S1）。
- 由此推出：非 2xx 就可能被重投，端点宜尽快回 2xx，耗时的业务放到后面异步处理，并让业务处理对重复事件幂等（后者为推断，非官方原文）。

## 4. 收款成功事件

- 官方集成测试清单要求确认 Webhook 端点已成功处理 `checkout.session.completed` 事件（S2）。
- 因此用 Stripe Checkout 收款时，收到该事件再履约（发货、开通权限）。

## 5. 对一人公司的检查清单

以下由官方要点推出，不是官方建议：

1. 端点只在验签通过后才改业务数据。
2. 履约逻辑挂在 `checkout.session.completed` 上，而不是挂在前端“支付完成”页面。
3. 端点快速返回 2xx，重活异步做。
4. 对同一事件重复到达保持幂等（例如按事件 ID 去重），因为失败重试意味着可能收到多次。
5. 上线前在测试模式走通一遍，确认端点能成功处理该事件。

## 缺口

- `payment_intent.succeeded`（PaymentIntent 场景的成功事件）：所抓页面中没有可逐字引用的完整句子，本页未收录。
- 验签的具体库调用步骤与代码示例：未采信，使用前回到官方页面核对。
- 重试的具体间隔、test 模式下的重试规则：未找到。

## 来源

| 编号 | URL |
|---|---|
| S1 | https://docs.stripe.com/webhooks |
| S2 | https://docs.stripe.com/payments/accept-a-payment |

飞轮来源：zenHeart/workflow#679（核验 found 6，found_rate 1.0，PASS）。
