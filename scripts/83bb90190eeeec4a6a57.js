(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["14526"], {
        896630: function(e, u, n) {
            "use strict";
            n.r(u), n.d(u, {
                Q4DropExperiment: function() {
                    return i
                },
                useQ4DropExperiment: function() {
                    return l
                },
                default: function() {
                    return t
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                    kind: "user",
                    id: "2023-10_q4_drop",
                    label: "Q4 Drop",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = function() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        u = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return i.useExperiment({
                        location: "experiment_hook"
                    }, {
                        autoTrackExposure: e,
                        disable: u
                    })
                };
            var t = l
        },
        837797: function(e, u, n) {
            "use strict";
            n.r(u), n.d(u, {
                useResponseOnUserState: function() {
                    return m
                }
            });
            var r = n("446674"),
                i = n("521012"),
                l = n("719923"),
                t = n("154889"),
                s = n("917247"),
                o = n("646718");

            function m(e) {
                let {
                    defaultResponse: u,
                    onDiscountOffer: n,
                    onNonSubscriber: m,
                    onTier0TrialOffer: p,
                    onTier2TrialOffer: a,
                    onTier0TrialPeriod: c,
                    onTier2TrialPeriod: d,
                    onNonTier2Subscriber: f,
                    onTier2Subscriber: T,
                    onCustomCriteria: _
                } = e, b = (0, s.usePremiumTrialOffer)(), E = (0, t.usePremiumDiscountOffer)(), P = (0, r.useStateFromStores)([i.default], () => i.default.getPremiumTypeSubscription()), S = l.default.getPremiumTypeFromSubscription(P);
                if (null != _) {
                    let e = _();
                    if (null != e) return e
                }
                return null != b && (0, o.SubscriptionTrials)[b.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_0) ? null != p ? p : u : null != b && (0, o.SubscriptionTrials)[b.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_2) ? null != a ? a : u : null != P && null != P.trialId && S === o.PremiumTypes.TIER_0 ? null != c ? c : u : null != P && null != P.trialId && S === o.PremiumTypes.TIER_2 ? null != d ? d : u : null != E ? null != n ? n : u : null == S ? null != m ? m : u : S === o.PremiumTypes.TIER_0 || S === o.PremiumTypes.TIER_1 ? null != f ? f : u : S === o.PremiumTypes.TIER_2 ? null != T ? T : u : u
            }
        }
    }
]);