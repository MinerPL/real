            "use strict";
            l.r(t), l.d(t, {
                redeemGiftCode: function() {
                    return d
                },
                default: function() {
                    return o
                }
            });
            var i = l("872717"),
                s = l("913144"),
                n = l("448993"),
                a = l("745279"),
                r = l("49111");
            let u = Object.freeze({});
            async function d(e) {
                let {
                    code: t,
                    options: l = u,
                    onRedeemed: d,
                    onError: o
                } = e, {
                    channelId: c = null,
                    paymentSource: E = null
                } = l;
                s.default.dispatch({
                    type: "GIFT_CODE_REDEEM",
                    code: t
                });
                try {
                    let e = await i.default.post({
                        url: r.Endpoints.GIFT_CODE_REDEEM(t),
                        body: {
                            channel_id: c,
                            payment_source_id: null == E ? void 0 : E.id,
                            gateway_checkout_context: await (0, a.createGatewayCheckoutContext)(E)
                        },
                        oldFormErrors: !0
                    });
                    return s.default.dispatch({
                        type: "GIFT_CODE_REDEEM_SUCCESS",
                        code: t,
                        entitlement: e.body
                    }), null == d || d(), {
                        code: t,
                        entitlement: e
                    }
                } catch (l) {
                    let e = new n.BillingError(l);
                    throw s.default.dispatch({
                        type: "GIFT_CODE_REDEEM_FAILURE",
                        code: t,
                        error: e
                    }), null == o || o(e), e
                }
            }
            var o = {
                redeemGiftCode: d
            }