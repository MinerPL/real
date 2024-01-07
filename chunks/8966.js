            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            }), s("702976");
            var a, n, i, r = s("199108"),
                l = s("666038"),
                u = s("568734"),
                o = s("865146"),
                d = s("137406"),
                c = s("388290"),
                f = s("49111"),
                E = s("646718");
            (i = a || (a = {}))[i.GIFT = 1] = "GIFT", i[i.PREORDER = 8] = "PREORDER", n = class e extends l.default {
                static createFromServer(t) {
                    let s = null != t.payment_source ? o.default.createFromServer(t.payment_source) : null,
                        a = null != t.sku ? d.default.createFromServer(t.sku) : null,
                        n = null != t.subscription ? c.default.createFromServer(t.subscription) : null;
                    return new e({
                        id: t.id,
                        createdAt: new Date(t.created_at),
                        currency: t.currency,
                        tax: t.tax,
                        taxInclusive: t.tax_inclusive,
                        amount: t.amount,
                        amountRefunded: t.amount_refunded,
                        status: t.status,
                        metadata: t.metadata,
                        description: t.description,
                        paymentSource: s,
                        paymentGateway: t.payment_gateway,
                        paymentGatewayPaymentId: t.payment_gateway_payment_id,
                        flags: t.flags,
                        subscription: n,
                        skuId: t.sku_id,
                        skuPrice: t.sku_price,
                        sku: a,
                        downloadableInvoice: t.downloadable_invoice,
                        downloadableRefundInvoices: t.downloadable_refund_invoices,
                        premiumRefundDisqualificationReasons: t.premium_refund_disqualification_reasons
                    })
                }
                get isPurchasedViaApple() {
                    return this.paymentGateway === f.PaymentGateways.APPLE
                }
                get isPurchasedViaGoogle() {
                    return this.paymentGateway === f.PaymentGateways.GOOGLE
                }
                get isPurchasedExternally() {
                    return this.isPurchasedViaApple || this.isPurchasedViaGoogle
                }
                get isSubscription() {
                    return null != this.subscription
                }
                get isPremiumSubscription() {
                    return null != this.subscription && E.PREMIUM_PLANS.has(this.subscription.planId)
                }
                get isPremiumGuildSubscription() {
                    return null != this.subscription && null != this.subscription.additionalPlans.find(e => {
                        let {
                            planId: t
                        } = e;
                        return E.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
                    })
                }
                get isGift() {
                    return u.hasFlag(this.flags, 1)
                }
                get isPremiumGift() {
                    return this.isGift && Object.values(E.PremiumSubscriptionSKUs).includes(this.skuId)
                }
                get isPreorder() {
                    return u.hasFlag(this.flags, 8)
                }
                get isGuildProductPurchase() {
                    return null != this.sku && (this.sku.productLine === f.SKUProductLines.GUILD_PRODUCT || u.hasFlag(this.sku.flags, r.SKUFlags.GUILD_PRODUCT))
                }
                get isSoftDeletedProduct() {
                    var e;
                    return (null === (e = this.sku) || void 0 === e ? void 0 : e.deleted) === !0
                }
                constructor(e) {
                    super(), this.id = e.id, this.amount = e.amount, this.amountRefunded = e.amountRefunded, this.createdAt = e.createdAt, this.currency = e.currency, this.description = e.description, this.paymentSource = e.paymentSource, this.status = e.status, this.tax = e.tax, this.taxInclusive = e.taxInclusive, this.subscription = e.subscription, this.skuId = e.skuId, this.skuPrice = e.skuPrice, this.sku = e.sku, this.flags = e.flags, this.downloadableInvoice = e.downloadableInvoice, this.downloadableRefundInvoices = e.downloadableRefundInvoices, this.premiumRefundDisqualificationReasons = e.premiumRefundDisqualificationReasons
                }
            }