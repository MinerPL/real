            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("757715"),
                i = s("191814"),
                r = s("420857"),
                o = s("49111"),
                d = s("782340");

            function u(e) {
                let {
                    team: t,
                    ...s
                } = e, u = (0, l.useRoleSubscriptionSettingsDisabled)(), c = u || null == t ? null : d.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EDIT_PAYMENT_METHOD_LINK.format({
                    url: o.MarketingURLs.DEVELOPER_PORTAL_PAYOUT_SETTINGS(t.id)
                });
                return 0 === s.payoutsByPeriod.length ? (0, a.jsxs)(n.FormText, {
                    type: n.FormText.Types.DESCRIPTION,
                    children: [d.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_EMPTY, " ", c]
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(n.FormText, {
                        type: n.FormText.Types.DESCRIPTION,
                        children: [d.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_DESCRIPTION, " ", c]
                    }), (0, a.jsx)(i.default, {
                        size: 16
                    }), (0, a.jsx)(r.default, {
                        ...s
                    })]
                })
            }