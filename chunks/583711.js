            "use strict";
            n.r(t), n.d(t, {
                openGiftCodeAcceptModal: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("697218"),
                i = n("521012"),
                r = n("659500"),
                o = n("719923"),
                u = n("676379"),
                d = n("646718"),
                c = n("49111");

            function f(e) {
                let {
                    processedCode: t,
                    channelContext: f,
                    customGiftMessage: m,
                    giftInfo: E
                } = e, _ = !1, h = null, p = l.default.getCurrentUser(), I = (0, o.isPremiumAtLeast)(null == p ? void 0 : p.premiumType, d.PremiumTypes.TIER_0);
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("669146").then(n.bind(n, "669146"));
                    return n => {
                        var s, l;
                        return (0, a.jsx)(e, {
                            code: t,
                            channelContext: f,
                            customGiftMessage: m,
                            emojiName: null == E ? void 0 : null === (s = E.emoji) || void 0 === s ? void 0 : s.name,
                            soundId: null == E ? void 0 : null === (l = E.sound) || void 0 === l ? void 0 : l.id,
                            onComplete: (e, t) => {
                                h = e, t && (_ = t, e.isSubscription && null == i.default.getPremiumSubscription(!1) && (0, u.setCanPlayWowMoment)(!0))
                            },
                            ...n
                        })
                    }
                }, {
                    onCloseCallback: () => {
                        var e;
                        _ && null != h && !I && h.isSubscription && (null == h ? void 0 : null === (e = h.subscriptionPlan) || void 0 === e ? void 0 : e.premiumSubscriptionType) === d.PremiumTypes.TIER_2 && r.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED)
                    }
                })
            }