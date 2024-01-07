            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("414456"),
                r = l.n(s),
                n = l("65597"),
                o = l("755854"),
                i = l("77078"),
                u = l("161778"),
                c = l("697218"),
                d = l("216422"),
                f = l("719923"),
                C = l("491232"),
                m = l("791309"),
                E = l("49111"),
                p = l("782340"),
                g = l("173046");

            function h(e) {
                let {
                    product: t,
                    className: l,
                    disableTooltipPointerEvents: s,
                    alwaysWhiteText: h = !0
                } = e, T = (0, n.default)([c.default], () => c.default.getCurrentUser()), b = (0, n.default)([u.default], () => (0, o.isThemeDark)(u.default.theme)), x = (0, C.extractPriceByPurchaseTypes)(t, E.PriceSetAssignmentPurchaseTypes.DEFAULT);
                if (null == x) return null;
                if (x.amount <= 0) return (0, a.jsx)("div", {
                    className: r(g.priceTagsContainer, l),
                    children: (0, a.jsx)(m.default, {
                        alwaysWhiteText: h,
                        price: x
                    })
                });
                let L = (0, C.extractPriceByPurchaseTypes)(t, E.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
                    S = !f.default.canUseCollectibles(T);
                return (0, a.jsxs)("div", {
                    className: r(g.priceTagsContainer, l),
                    children: [(0, a.jsx)(m.default, {
                        alwaysWhiteText: h,
                        price: x,
                        className: S ? void 0 : g.strikedPrice
                    }), null != L && (0, a.jsx)(m.default, {
                        price: L,
                        alwaysWhiteText: h,
                        renderPrice: S ? e => p.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
                            price: e
                        }) : void 0,
                        className: S ? g.fullPrice : void 0,
                        variant: S ? "text-xs/semibold" : void 0,
                        icon: (0, a.jsx)(i.Tooltip, {
                            text: p.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                            "aria-label": p.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                            disableTooltipPointerEvents: s,
                            children: e => {
                                let {
                                    ...t
                                } = e;
                                return (0, a.jsx)(d.default, {
                                    ...t,
                                    className: r(g.premiumIcon, {
                                        [g.fullPrice]: S
                                    }),
                                    color: h || b ? "white" : "black"
                                })
                            }
                        })
                    })]
                })
            }