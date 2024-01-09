            "use strict";
            n.r(t), n.d(t, {
                fetchUserOffer: function() {
                    return u
                },
                acknowledgeUserOffer: function() {
                    return d
                }
            });
            var a = n("872717"),
                s = n("151426"),
                l = n("913144"),
                i = n("10641"),
                r = n("872173"),
                o = n("49111");
            async function u() {
                l.default.dispatch({
                    type: "BILLING_USER_OFFER_FETCH_START"
                });
                try {
                    var e, t, n;
                    let u = await a.default.post({
                            url: o.Endpoints.USER_OFFER
                        }),
                        d = null !== (e = u.body.user_trial_offer) && void 0 !== e ? e : null,
                        c = null !== (t = u.body.user_discount) && void 0 !== t ? t : null,
                        f = null !== (n = u.body.user_discount_offer) && void 0 !== n ? n : null;
                    return null == d && (0, i.isDismissibleContentDismissed)(s.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, r.removeDismissedContent)(s.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), l.default.dispatch({
                        type: "BILLING_USER_OFFER_FETCH_SUCCESS",
                        userTrialOffer: d,
                        userDiscount: c,
                        userDiscountOffer: f
                    }), {
                        userTrialOffer: d,
                        userDiscount: c,
                        userDiscountOffer: f
                    }
                } catch (e) {
                    l.default.dispatch({
                        type: "BILLING_USER_OFFER_FETCH_FAIL"
                    })
                }
            }

            function d(e, t) {
                let n = null != e && null == e.expires_at ? e.id : void 0,
                    s = null != t && null == t.expires_at ? t.id : void 0;
                if (void 0 !== n || void 0 !== s) return a.default.post({
                    url: o.Endpoints.USER_OFFER_ACKNOWLEDGED,
                    body: {
                        user_trial_offer_id: n,
                        user_discount_offer_id: s
                    },
                    oldFormErrors: !0
                }).then(e => {
                    var t, n, a;
                    l.default.dispatch({
                        type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
                        userTrialOffer: null !== (t = e.body.user_trial_offer) && void 0 !== t ? t : null,
                        userDiscount: null !== (n = e.body.user_discount) && void 0 !== n ? n : null,
                        userDiscountOffer: null !== (a = e.body.user_discount_offer) && void 0 !== a ? a : null
                    })
                }).catch(e => {
                    404 === e.status && l.default.dispatch({
                        type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
                        userTrialOffer: null,
                        userDiscount: null,
                        userDiscountOffer: null
                    })
                })
            }