            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            });
            var l = a("37983"),
                s = a("884691"),
                r = a("414456"),
                n = a.n(r),
                o = a("635058"),
                i = a("65597"),
                u = a("77078"),
                c = a("685665"),
                d = a("649844"),
                f = a("697218"),
                C = a("153769"),
                E = a("270227"),
                m = a("719923"),
                p = a("491232"),
                g = a("716120"),
                h = a("342676"),
                T = a("408381"),
                b = a("57940"),
                x = a("646718"),
                L = a("782340"),
                S = a("927694");
            let I = (0, T.getLogoSize)(96),
                v = e => {
                    let {
                        category: t
                    } = e, {
                        analyticsLocations: a
                    } = (0, c.default)(), r = s.useRef(null), n = (0, i.default)([f.default], () => f.default.getCurrentUser());
                    return m.default.canUseCollectibles(n) ? (0, l.jsx)(l.Fragment, {
                        children: t.summary
                    }) : (0, l.jsx)(l.Fragment, {
                        children: L.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
                            getPremium: e => (0, l.jsx)(u.Clickable, {
                                innerRef: r,
                                className: S.getPremiumHook,
                                onClick: () => {
                                    (0, d.default)({
                                        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
                                        analyticsLocations: a,
                                        returnRef: r
                                    })
                                },
                                tag: "span",
                                children: (0, l.jsx)(u.Text, {
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
                    className: a
                } = e, {
                    backgroundColors: s
                } = (0, b.default)(t.skuId);
                return (0, l.jsxs)(g.default, {
                    asset: t.banner,
                    className: n(S.shopBanner, a),
                    style: null != s ? {
                        background: "".concat((0, T.getBackgroundGradient)(s), " border-box border-box"),
                        outlineColor: s.border.toHslString()
                    } : void 0,
                    children: [(0, l.jsxs)("div", {
                        className: S.discordLogo,
                        children: [(0, l.jsx)(C.default, {
                            className: S.discordIcon
                        }), (0, l.jsx)(E.default, {
                            className: S.discordWordmark
                        })]
                    }), (0, l.jsx)("img", {
                        className: S.categoryLogo,
                        src: (0, p.getCollectiblesAssetURL)(t.logo, {
                            size: I
                        }),
                        alt: t.name
                    }), (0, l.jsx)(u.Text, {
                        className: S.summary,
                        variant: "text-md/normal",
                        color: "always-white",
                        children: t.skuId === o.CollectiblesCategorySkuId.DISXCORE ? (0, l.jsx)(v, {
                            category: t
                        }) : t.summary
                    }), (0, l.jsx)(h.default, {
                        category: t,
                        className: S.limitedTimeBadge,
                        display: "banner"
                    })]
                })
            }