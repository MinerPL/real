            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return s
                }
            }), r("794252");
            var n = r("884691"),
                i = r("506838"),
                o = r("265586"),
                u = r("65597"),
                l = r("599110"),
                a = r("853987"),
                T = r("491232"),
                c = r("49111"),
                E = r("646718"),
                s = t => {
                    let e = (0, u.default)([a.default], () => a.default.products);
                    return (0, n.useCallback)(r => {
                        let {
                            type: n,
                            skuId: u
                        } = r, a = e.get(u);
                        l.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                            feature_name: (0, i.match)(n).with(o.CollectiblesItemType.AVATAR_DECORATION, () => E.AnalyticsPremiumFeatureNames.AVATAR_DECORATION).with(o.CollectiblesItemType.PROFILE_EFFECT, () => E.AnalyticsPremiumFeatureNames.PROFILE_EFFECT).otherwise(() => void 0),
                            feature_tier: (0, T.isPremiumCollectiblesProduct)(a) ? E.AnalyticsPremiumFeatureTiers.FREE : E.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD,
                            feature_selection: null == a ? void 0 : a.name,
                            location_stack: t
                        })
                    }, [e, t])
                }