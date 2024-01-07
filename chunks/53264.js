            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            });
            var a, n, l = s("37983");
            s("884691");
            var i = s("414456"),
                r = s.n(i),
                o = s("158352"),
                d = s("271560"),
                u = s("165169"),
                c = s("130437"),
                E = s("782340"),
                _ = s("660198"),
                T = s("301352");
            (a = n || (n = {})).TIER_NAME = "tier_name", a.SUBSCRIBERS = "subscribers", a.AMOUNT = "amount", a.PRICE = "price";
            let I = [{
                key: "tier_name",
                cellClassName: _.tierNameColumn,
                renderHeader: () => E.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_TIERS,
                render(e) {
                    let t, {
                        subscriptionListing: s
                    } = e;
                    if (null != s) {
                        let e = (null == s ? void 0 : s.image_asset) == null ? void 0 : (0, d.getAssetURL)(s.application_id, s.image_asset, 128);
                        t = (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("img", {
                                src: e,
                                alt: "",
                                className: _.tierImage
                            }), s.name]
                        })
                    }
                    return (0, l.jsx)(c.Cell, {
                        className: _.tierNameCell,
                        children: t
                    })
                }
            }, {
                key: "subscribers",
                cellClassName: r(_.subscribersColumn, T.cellAlignRight),
                renderHeader: () => E.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_MEMBERS,
                render: e => (0, l.jsx)(c.SubscribersCell, {
                    children: e.roleMemberCount
                })
            }, {
                key: "price",
                cellClassName: r(_.priceColumn, T.cellAlignRight),
                renderHeader: () => E.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_PRICE,
                render(e) {
                    let {
                        subscriptionListing: t
                    } = e, s = null == t ? void 0 : t.subscription_plans[0], a = null == s ? void 0 : s.price;
                    return (0, l.jsx)(c.CurrencyAmountCell, {
                        children: a
                    })
                }
            }];
            var S = e => {
                let {
                    totalPayoutsForPeriod: t,
                    guildId: s,
                    className: a
                } = e, n = (0, u.default)(s, t);
                return (0, l.jsx)("div", {
                    className: r(T.tableContainer, a),
                    children: (0, l.jsx)(o.default, {
                        columns: I,
                        data: n,
                        className: r(T.table, _.table),
                        rowClassName: _.row,
                        headerClassName: r(T.header, _.header)
                    })
                })
            }