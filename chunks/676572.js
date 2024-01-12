            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("446674"),
                i = n("913144");
            let l = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                o = l;
            class s extends r.default.Store {
                initialize() {
                    o = l
                }
                getState() {
                    return o
                }
                shouldFetchPremiumLikelihood() {
                    return !o.isFetching && !o.fetched
                }
            }
            s.displayName = "UserPremiumLikelihoodStore";
            var a = new s(i.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    o.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    o.premiumLikelihood = t, o.fetched = !0, o.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    o.isFetching = !1
                },
                LOGOUT: function() {
                    o.premiumLikelihood = void 0
                }
            })