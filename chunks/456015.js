            "use strict";
            n.r(t), n.d(t, {
                fetchUserOffer: function() {
                    return i
                },
                acknowledgeUserOffer: function() {
                    return r
                }
            });
            var a = n("872717"),
                s = n("913144"),
                l = n("49111");
            async function i() {
                s.default.dispatch({
                    type: "BILLING_USER_OFFER_FETCH_START"
                });
                try {
                    var e, t, n;
                    let i = await a.default.post({
                            url: l.Endpoints.USER_OFFER
                        }),
                        r = null !== (e = i.body.user_trial_offer) && void 0 !== e ? e : null,
                        o = null !== (t = i.body.user_discount) && void 0 !== t ? t : null,
                        u = null !== (n = i.body.user_discount_offer) && void 0 !== n ? n : null;
                    return s.default.dispatch({
                        type: "BILLING_USER_OFFER_FETCH_SUCCESS",
                        userTrialOffer: r,
                        userDiscount: o,
                        userDiscountOffer: u
                    }), {
                        userTrialOffer: r,
                        userDiscount: o,
                        userDiscountOffer: u
                    }
                } catch (e) {
                    s.default.dispatch({
                        type: "BILLING_USER_OFFER_FETCH_FAIL"
                    })
                }
            }

            function r(e, t) {
                let n = null != e && null == e.expires_at ? e.id : void 0,
                    i = null != t && null == t.expires_at ? t.id : void 0;
                if (void 0 !== n || void 0 !== i) return a.default.post({
                    url: l.Endpoints.USER_OFFER_ACKNOWLEDGED,
                    body: {
                        user_trial_offer_id: n,
                        user_discount_offer_id: i
                    },
                    oldFormErrors: !0
                }).then(e => {
                    var t, n, a;
                    s.default.dispatch({
                        type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
                        userTrialOffer: null !== (t = e.body.user_trial_offer) && void 0 !== t ? t : null,
                        userDiscount: null !== (n = e.body.user_discount) && void 0 !== n ? n : null,
                        userDiscountOffer: null !== (a = e.body.user_discount_offer) && void 0 !== a ? a : null
                    })
                }).catch(e => {
                    404 === e.status && s.default.dispatch({
                        type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
                        userTrialOffer: null,
                        userDiscount: null,
                        userDiscountOffer: null
                    })
                })
            }