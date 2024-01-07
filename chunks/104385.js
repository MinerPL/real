            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return A
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("65597"),
                o = s("77078"),
                d = s("812204"),
                u = s("685665"),
                c = s("662286"),
                S = s("697218"),
                E = s("599110"),
                f = s("719923"),
                m = s("21526"),
                T = s("805172"),
                _ = s("49111"),
                g = s("646718"),
                h = s("782340"),
                I = s("439985");
            let N = () => (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: I.artContainer,
                        "aria-hidden": !0,
                        role: "presentation",
                        children: (0, a.jsx)("img", {
                            src: s("280414"),
                            className: I.art,
                            alt: " "
                        })
                    }), (0, a.jsxs)("div", {
                        className: I.mainColumn,
                        children: [(0, a.jsx)(o.Heading, {
                            variant: "heading-lg/bold",
                            color: "always-white",
                            className: I.title,
                            children: h.default.Messages.PROFILE_EFFECTS_HERO_BANNER_TITLE
                        }), (0, a.jsx)(o.Text, {
                            className: I.textBody,
                            variant: "text-sm/normal",
                            color: "always-white",
                            children: h.default.Messages.PROFILE_EFFECTS_HERO_BANNER_SUBTITLE
                        })]
                    })]
                }),
                p = () => (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: I.artContainer,
                        "aria-hidden": !0,
                        role: "presentation",
                        children: (0, a.jsx)("img", {
                            src: s("217775"),
                            className: I.art,
                            alt: " "
                        })
                    }), (0, a.jsxs)("div", {
                        className: I.mainColumn,
                        children: [(0, a.jsx)(o.Heading, {
                            variant: "heading-lg/bold",
                            color: "always-white",
                            className: I.title,
                            children: h.default.Messages.COLLECTIBLES_SFA_TITLE
                        }), (0, a.jsx)(o.Text, {
                            className: I.textBody,
                            variant: "text-sm/normal",
                            color: "always-white",
                            children: h.default.Messages.COLLECTIBLES_SFA_BANNER_DESCRIPTION
                        })]
                    })]
                }),
                C = () => (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: I.artContainer,
                        "aria-hidden": !0,
                        role: "presentation",
                        children: (0, a.jsx)("img", {
                            src: s("525109"),
                            className: I.art,
                            alt: " "
                        })
                    }), (0, a.jsxs)("div", {
                        className: I.mainColumn,
                        children: [(0, a.jsx)(o.Heading, {
                            variant: "heading-lg/extrabold",
                            color: "always-white",
                            className: I.title,
                            children: h.default.Messages.USER_PROFILE_SETTINGS_SHOP_FOR_ALL_BANNER_HEADER
                        }), (0, a.jsx)(o.Text, {
                            className: I.textBody,
                            variant: "text-sm/normal",
                            color: "always-white",
                            children: h.default.Messages.USER_PROFILE_SETTINGS_SHOP_FOR_ALL_BANNER_SUBHEADER
                        })]
                    })]
                });
            var A = () => {
                let {
                    analyticsLocations: e
                } = (0, u.default)(d.default.COLLECTIBLES_PROFILE_SETTINGS_UPSELL), t = "CollectiblesUpsellBanner";
                (0, c.useCanUseProfileEffects)({
                    location: t
                });
                let {
                    marketingEnabled: s
                } = (0, T.default)({
                    location: t
                }), l = n.useRef(null), A = (0, r.default)([S.default], () => S.default.getCurrentUser()), O = !f.default.canUseCollectibles(A);
                return n.useEffect(() => {
                    E.default.track(_.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: g.PremiumUpsellTypes.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                        location_stack: e
                    })
                }, [e]), (0, a.jsxs)("div", {
                    ref: l,
                    className: i(I.container, {
                        [I.shopForAllWinterBackground]: s,
                        [I.shopForAllUpsell]: !s && O
                    }),
                    children: [s && (0, a.jsx)(C, {}), !s && O && (0, a.jsx)(p, {}), !s && !O && (0, a.jsx)(N, {}), (0, a.jsx)(o.Button, {
                        onClick: () => {
                            (0, m.openCollectiblesShop)({
                                analyticsLocations: e,
                                analyticsSource: d.default.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
                            })
                        },
                        className: I.ctaButton,
                        look: o.Button.Looks.INVERTED,
                        children: s ? h.default.Messages.CHECK_IT_OUT : h.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                    })]
                })
            }