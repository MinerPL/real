            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return C
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("245187"),
                r = s("677591"),
                o = s("904519"),
                d = s("695561"),
                u = s("555826"),
                c = s("677099"),
                S = s("697218"),
                E = s("625634"),
                f = s("719923"),
                m = s("619383"),
                T = s("358189"),
                _ = s("313577"),
                g = s("236972"),
                h = s("995956"),
                I = s("664671"),
                N = s("646718"),
                p = s("116430");

            function C(e) {
                let {
                    premiumSubscription: t
                } = e, s = (0, l.useStateFromStores)([E.default], () => E.default.boostSlots), C = n.useMemo(() => Object.values(s), [s]), A = (0, l.useStateFromStores)([S.default], () => S.default.getCurrentUser()), O = f.default.isPremium(A, N.PremiumTypes.TIER_2), x = (0, l.useStateFromStores)([u.default], () => u.default.affinities), M = (0, l.useStateFromStores)([c.default], () => c.default.getFlattenedGuildIds()), R = x.length > 0 || M.length > 0, v = C.length > 0, L = n.useMemo(() => C.some(e => null != e.premiumGuildSubscription), [C]);
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(i.BlockedPaymentsWarning, {
                        className: p.blockedPaymentsWarning
                    }), (0, a.jsx)(T.default, {
                        hasGuildBoostSlots: v,
                        hasAppliedGuildBoosts: L,
                        isUserPremiumTier2: O
                    }), (0, a.jsx)(h.default, {
                        hasAppliedGuildBoosts: L,
                        isUserPremiumTier2: O,
                        hasGuildAffinitiesOrInGuild: R
                    }), !R && (0, a.jsx)(_.default, {}), (0, a.jsx)(m.default, {
                        guildBoostSlots: s,
                        premiumSubscription: t
                    }), (0, a.jsx)(I.default, {
                        guildBoostSlots: C
                    }), (0, a.jsx)(g.default, {
                        hasAppliedGuildBoosts: L
                    }), (0, a.jsx)(d.default, {
                        className: p.tierComparisonTable,
                        hideHeading: !0,
                        hideTier0: !0
                    }), (0, a.jsx)(r.default, {
                        cardClassName: p.boosterRecognitionCard
                    }), (0, a.jsx)(o.default, {
                        className: p.faq
                    })]
                })
            }