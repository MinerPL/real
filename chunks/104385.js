            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return x
                }
            }), s("794252");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("506838"),
                o = s("65597"),
                d = s("77078"),
                u = s("812204"),
                c = s("685665"),
                S = s("662286"),
                E = s("697218"),
                f = s("599110"),
                m = s("719923"),
                T = s("21526"),
                _ = s("411691"),
                g = s("49111"),
                h = s("646718"),
                I = s("782340"),
                N = s("439985");
            let p = () => (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: N.artContainer,
                        "aria-hidden": !0,
                        role: "presentation",
                        children: (0, a.jsx)("img", {
                            src: s("280414"),
                            className: N.art,
                            alt: " "
                        })
                    }), (0, a.jsxs)("div", {
                        className: N.mainColumn,
                        children: [(0, a.jsx)(d.Heading, {
                            variant: "heading-lg/bold",
                            color: "always-white",
                            className: N.title,
                            children: I.default.Messages.PROFILE_EFFECTS_HERO_BANNER_TITLE
                        }), (0, a.jsx)(d.Text, {
                            className: N.textBody,
                            variant: "text-sm/normal",
                            color: "always-white",
                            children: I.default.Messages.PROFILE_EFFECTS_HERO_BANNER_SUBTITLE
                        })]
                    })]
                }),
                C = () => (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: N.artContainer,
                        "aria-hidden": !0,
                        role: "presentation",
                        children: (0, a.jsx)("img", {
                            src: s("872702"),
                            className: i([N.art, N.artJan2024]),
                            alt: " ",
                            width: "143"
                        })
                    }), (0, a.jsxs)("div", {
                        className: N.mainColumn,
                        children: [(0, a.jsx)(d.Heading, {
                            variant: "heading-lg/bold",
                            color: "always-white",
                            className: N.title,
                            children: I.default.Messages.COLLECTIBLES_SFA_TITLE
                        }), (0, a.jsx)(d.Text, {
                            className: N.textBody,
                            variant: "text-sm/normal",
                            color: "always-white",
                            children: I.default.Messages.COLLECTIBLES_SFA_BANNER_DESCRIPTION
                        })]
                    })]
                }),
                A = () => (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: N.artContainer,
                        "aria-hidden": !0,
                        role: "presentation",
                        children: (0, a.jsx)("img", {
                            src: s("525109"),
                            className: N.art,
                            alt: " "
                        })
                    }), (0, a.jsxs)("div", {
                        className: N.mainColumn,
                        children: [(0, a.jsx)(d.Heading, {
                            variant: "heading-lg/extrabold",
                            color: "always-white",
                            className: N.title,
                            children: I.default.Messages.USER_PROFILE_SETTINGS_SHOP_FOR_ALL_BANNER_HEADER
                        }), (0, a.jsx)(d.Text, {
                            className: N.textBody,
                            variant: "text-sm/normal",
                            color: "always-white",
                            children: I.default.Messages.USER_PROFILE_SETTINGS_SHOP_FOR_ALL_BANNER_SUBHEADER
                        })]
                    })]
                }),
                O = e => {
                    let {
                        variation: t
                    } = e;
                    return (0, r.match)(t).with(_.CollectiblesShopMarketingVariants.WINTER_2023_DROP, () => (0, a.jsx)(A, {})).with(_.CollectiblesShopMarketingVariants.MONSTER_DROP, () => (0, a.jsx)(C, {})).otherwise(() => (0, a.jsx)(p, {}))
                };
            var x = () => {
                let {
                    analyticsLocations: e
                } = (0, c.default)(u.default.COLLECTIBLES_PROFILE_SETTINGS_UPSELL), t = "CollectiblesUpsellBanner";
                (0, S.useCanUseProfileEffects)({
                    location: t
                });
                let s = n.useRef(null),
                    l = (0, _.default)(t),
                    p = (0, o.default)([E.default], () => E.default.getCurrentUser()),
                    C = !m.default.canUseCollectibles(p);
                return n.useEffect(() => {
                    f.default.track(g.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: h.PremiumUpsellTypes.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                        location_stack: e
                    })
                }, [e]), (0, a.jsxs)("div", {
                    ref: s,
                    className: i(N.container, (0, r.match)(l).with(_.CollectiblesShopMarketingVariants.WINTER_2023_DROP, () => N.shopForAllWinterBackground).with(_.CollectiblesShopMarketingVariants.MONSTER_DROP, () => N.shopForAllBackgroundImage).otherwise(() => C ? N.shopForAllBackgroundImage : void 0)),
                    children: [(0, a.jsx)(O, {
                        variation: l
                    }), (0, a.jsx)(d.Button, {
                        onClick: () => {
                            (0, T.openCollectiblesShop)({
                                analyticsLocations: e,
                                analyticsSource: u.default.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
                            })
                        },
                        className: N.ctaButton,
                        look: d.Button.Looks.INVERTED,
                        children: (0, r.match)(l).with(_.CollectiblesShopMarketingVariants.WINTER_2023_DROP, () => I.default.Messages.CHECK_IT_OUT).otherwise(() => I.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP)
                    })]
                })
            }