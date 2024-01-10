            "use strict";
            s.r(t), s.d(t, {
                PerksDiscoverabilityVariants: function() {
                    return n
                },
                default: function() {
                    return N
                }
            });
            var a, n, r = s("37983"),
                l = s("884691"),
                i = s("414456"),
                u = s.n(i),
                o = s("65597"),
                d = s("77078"),
                c = s("411691"),
                _ = s("521012"),
                E = s("719923"),
                I = s("367226"),
                f = s("628550"),
                T = s("558566"),
                S = s("646718"),
                R = s("782340"),
                p = s("650734");
            (a = n || (n = {})).PERKS_DISCOVERABILITY = "perks_discoverability", a.WHATS_NEW = "whats_new";
            let A = e => {
                let t = (0, o.default)([_.default], () => _.default.getPremiumTypeSubscription()),
                    s = null != t ? E.default.getPremiumPlanItem(t) : null,
                    a = null != s ? E.default.getSkuIdForPlan(s.planId) : null,
                    n = a === S.PremiumSubscriptionSKUs.TIER_2;
                if (e) return n ? {
                    title: R.default.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_SUB,
                    subtitle: R.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_SUB
                } : {
                    title: R.default.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_NON_SUB,
                    subtitle: R.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_NON_SUB
                };
                return {
                    title: R.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_TITLE,
                    subtitle: R.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_SUBTITLE
                }
            };
            var N = e => {
                let {
                    className: t,
                    variant: s = "perks_discoverability",
                    noBackground: a = !1,
                    leftAlignHeaders: n = !1
                } = e, i = l.useRef(null), o = (0, I.useShouldScrollToWhatsNew)(), _ = (0, c.default)("perks-discoverability");
                (0, I.useClearNewBadge)();
                let E = "whats_new" === s;
                l.useEffect(() => {
                    let e = i.current;
                    if (null == e || !o || !E) return;
                    let t = requestAnimationFrame(() => {
                        e.scrollIntoView({
                            behavior: "smooth"
                        })
                    });
                    return () => cancelAnimationFrame(t)
                }, [i, o, E]);
                let S = (0, f.default)(),
                    R = A(E),
                    N = [];
                switch (s) {
                    case "perks_discoverability":
                        N = [S.profiles, S.clientThemes, S.serverBoosts];
                        break;
                    case "whats_new":
                        N = [S.earlyAccess, _ !== c.CollectiblesShopMarketingVariants.DEFAULT ? S.specialShopPerks : S.specialMemberPricing, S.unlimitedSuperReactions]
                }
                let m = N.some(e => null != e.pillText);
                return (0, r.jsxs)("div", {
                    ref: i,
                    className: u(p.section, {
                        [p.centerAlignSection]: !n,
                        [p.leftAlignSection]: n
                    }, t),
                    children: [(0, r.jsx)(d.Heading, {
                        variant: "heading-xxl/extrabold",
                        color: "header-primary",
                        className: p.heading,
                        children: R.title
                    }), (0, r.jsx)(d.Text, {
                        variant: "text-lg/normal",
                        color: "header-primary",
                        className: u(p.subtitle, {
                            [p.fullWidth]: E || n,
                            [p.moreSubtitleMargin]: m,
                            [p.leftAlignSubtitle]: n,
                            [p.centerAlignSubtitle]: !n
                        }),
                        children: R.subtitle
                    }), (0, r.jsx)("div", {
                        className: p.cardContainer,
                        children: N.map((e, t) => (0, r.jsx)(T.default, {
                            ...e,
                            forceShadow: a
                        }, "".concat(e.name, "_").concat(t)))
                    })]
                })
            }