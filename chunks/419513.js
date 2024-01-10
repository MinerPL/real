            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return _
                }
            });
            var a = l("37983"),
                s = l("884691"),
                r = l("414456"),
                n = l.n(r),
                o = l("635058"),
                i = l("65597"),
                u = l("77078"),
                c = l("685665"),
                d = l("649844"),
                f = l("697218"),
                C = l("153769"),
                E = l("270227"),
                m = l("719923"),
                p = l("491232"),
                g = l("716120"),
                h = l("342676"),
                b = l("408381"),
                T = l("57940"),
                x = l("646718"),
                L = l("782340"),
                S = l("927694");
            let I = (0, b.getLogoSize)(96),
                v = e => {
                    let {
                        category: t
                    } = e, {
                        analyticsLocations: l
                    } = (0, c.default)(), r = s.useRef(null), n = (0, i.default)([f.default], () => f.default.getCurrentUser());
                    return m.default.canUseCollectibles(n) ? (0, a.jsx)(a.Fragment, {
                        children: t.summary
                    }) : (0, a.jsx)(a.Fragment, {
                        children: L.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
                            getPremium: e => (0, a.jsx)(u.Clickable, {
                                innerRef: r,
                                className: S.getPremiumHook,
                                onClick: () => {
                                    (0, d.default)({
                                        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
                                        analyticsLocations: l,
                                        returnRef: r
                                    })
                                },
                                tag: "span",
                                children: (0, a.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    color: "always-white",
                                    tag: "span",
                                    children: e
                                })
                            })
                        })
                    })
                };

            function _(e) {
                let {
                    category: t,
                    className: l
                } = e, {
                    backgroundColors: s
                } = (0, T.default)(t.skuId);
                return (0, a.jsxs)(g.default, {
                    asset: t.banner,
                    className: n(S.shopBanner, l),
                    style: null != s ? {
                        background: "".concat((0, b.getBackgroundGradient)(s), " border-box border-box"),
                        outlineColor: s.border.toHslString()
                    } : void 0,
                    children: [(0, a.jsxs)("div", {
                        className: S.discordLogo,
                        children: [(0, a.jsx)(C.default, {
                            className: S.discordIcon
                        }), (0, a.jsx)(E.default, {
                            className: S.discordWordmark
                        })]
                    }), (0, a.jsx)("img", {
                        className: S.categoryLogo,
                        src: (0, p.getCollectiblesAssetURL)(t.logo, {
                            size: I
                        }),
                        alt: t.name
                    }), (0, a.jsx)(u.Text, {
                        className: S.summary,
                        variant: "text-md/normal",
                        color: "always-white",
                        children: t.skuId === o.CollectiblesCategorySkuId.DISXCORE ? (0, a.jsx)(v, {
                            category: t
                        }) : t.summary
                    }), (0, a.jsx)(h.default, {
                        category: t,
                        className: S.limitedTimeBadge,
                        display: "banner"
                    })]
                })
            }