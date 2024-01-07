            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("49111"),
                a = {
                    async fetchUserTrialOffer() {
                        try {
                            let {
                                body: e
                            } = await i.default.get({
                                url: l.Endpoints.USER_TRIAL_OFFER,
                                oldFormErrors: !0
                            });
                            r.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS",
                                userTrialOffer: e
                            })
                        } catch (e) {
                            r.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS"
                            })
                        }
                    },
                    async acknowledgeUserTrialOffer(e) {
                        if (null == e.expires_at) try {
                            let {
                                body: t
                            } = await i.default.post({
                                url: l.Endpoints.USER_TRIAL_OFFER_ACKNOWLEDGED(e.id)
                            });
                            r.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS",
                                userTrialOffer: t
                            })
                        } catch (e) {
                            404 === e.status && r.default.dispatch({
                                type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS",
                                userTrialOffer: null
                            })
                        }
                    }
                }