            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return E
                }
            }), a("222007");
            var s = a("37983"),
                l = a("884691"),
                n = a("414456"),
                i = a.n(n),
                r = a("77078"),
                c = a("449918"),
                d = a("578706"),
                o = a("153160"),
                u = a("49111"),
                T = a("782340"),
                m = a("402686");

            function _(e) {
                let {
                    price: t,
                    selected: a,
                    onClick: l
                } = e;
                return (0, s.jsxs)(r.Clickable, {
                    className: i(m.priceRow, {
                        [m.selected]: a
                    }),
                    onClick: l,
                    children: [a ? (0, s.jsx)(d.default, {
                        width: 20,
                        height: 20,
                        backgroundColor: (0, c.getColor)(u.Color.WHITE_500),
                        color: (0, c.getColor)(u.Color.BRAND_500)
                    }) : (0, s.jsx)("svg", {
                        width: "20",
                        height: "20",
                        children: (0, s.jsx)("circle", {
                            cx: 10,
                            cy: 10,
                            r: 10,
                            className: m.circle
                        })
                    }), (0, s.jsxs)("div", {
                        className: m.priceRowText,
                        children: [(0, s.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            tag: "span",
                            children: (0, o.formatPrice)(t, u.CurrencyCodes.USD)
                        }), (0, s.jsx)(r.Text, {
                            variant: "text-xxs/medium",
                            tag: "span",
                            children: "/mo."
                        })]
                    })]
                })
            }

            function E(e) {
                let {
                    selectedTemplate: t,
                    handleSelectTemplate: a,
                    newPricesToPick: n
                } = e, [i, c] = l.useState(0);
                return (0, s.jsxs)("div", {
                    className: m.container,
                    children: [(0, s.jsxs)("div", {
                        className: m.content,
                        children: [(0, s.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_PRICE_RESELECTION_HEADER.format({
                                tierName: t.listings[0].name
                            })
                        }), (0, s.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            className: m.bodyText,
                            children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_PRICE_RESELECTION_BODY.format({
                                price: (0, o.formatPrice)(t.listings[0].price_tier, u.CurrencyCodes.USD)
                            })
                        }), n.map((e, t) => (0, s.jsx)(_, {
                            price: e,
                            selected: t === i,
                            onClick: () => c(t)
                        }, e))]
                    }), (0, s.jsx)(r.Button, {
                        size: r.Button.Sizes.MEDIUM,
                        onClick: () => {
                            a({
                                ...t,
                                listings: [{
                                    ...t.listings[0],
                                    price_tier: n[i]
                                }]
                            })
                        },
                        children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_SELECT_TEMPLATE_BUTTON
                    })]
                })
            }