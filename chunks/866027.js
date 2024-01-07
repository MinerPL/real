            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("77078"),
                i = n("812204"),
                r = n("685665"),
                o = n("574073"),
                u = n("232259"),
                d = n("393414"),
                c = n("304198"),
                f = n("843257"),
                m = n("721629"),
                E = n("988521"),
                _ = n("49111"),
                h = n("724210"),
                p = n("782340"),
                I = n("158404");

            function T(e) {
                let {
                    username: t
                } = e;
                return (0, a.jsx)("div", {
                    className: I.welcomeCardText,
                    children: (0, a.jsx)(l.Text, {
                        tag: "p",
                        className: I.welcomeCardText,
                        color: "status-positive-text",
                        variant: "heading-xl/medium",
                        children: p.default.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_TEXT.format({
                            username: t,
                            usernameHook: (e, t) => (0, a.jsx)(l.Text, {
                                tag: "span",
                                color: "status-positive-text",
                                variant: "heading-xxl/extrabold",
                                lineClamp: 3,
                                children: e
                            }, t)
                        })
                    })
                })
            }

            function g(e) {
                let {
                    guildId: t,
                    user: n,
                    username: s
                } = e;
                return (0, a.jsxs)("div", {
                    className: I.welcomeCard,
                    role: "img",
                    "aria-label": p.default.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_ARIA_LABEL.format({
                        username: s
                    }),
                    children: [(0, a.jsx)(E.default, {
                        guildId: t,
                        user: n,
                        className: I.welcomeCardBadge
                    }), (0, a.jsx)(T, {
                        username: s
                    })]
                })
            }

            function C(e) {
                var t, l;
                let {
                    channel: E,
                    message: p,
                    compact: I
                } = e, T = (0, o.default)(p), C = function(e) {
                    let {
                        author: t,
                        channel: n,
                        message: a
                    } = e, l = n.guild_id, o = (0, u.useUsernameHook)(a.author, n.id, l)(t), {
                        analyticsLocations: c
                    } = (0, r.default)(i.default.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE), m = a.roleSubscriptionData, E = s.useCallback(() => {
                        (0, d.transitionTo)(_.Routes.CHANNEL(l, h.StaticChannelRoute.ROLE_SUBSCRIPTIONS), null, null, c), (null == m ? void 0 : m.role_subscription_listing_id) != null && (0, f.trackRoleSubscriptionPurchaseMessageTierClick)(l, n.id, a.id, m.role_subscription_listing_id)
                    }, [l, n, a, m, c]);
                    return null == m ? null : (0, f.getRoleSubscriptionPurchaseSystemMessageFormattedContent)({
                        username: t.nick,
                        usernameOnClickHandler: o,
                        roleSubscriptionOnClickHandler: E,
                        guildId: l,
                        roleSubscriptionData: a.roleSubscriptionData
                    })
                }({
                    channel: E,
                    message: p,
                    author: T
                }), S = (null === (t = p.roleSubscriptionData) || void 0 === t ? void 0 : t.total_months_subscribed) != null && (null === (l = p.roleSubscriptionData) || void 0 === l ? void 0 : l.total_months_subscribed) <= 1;
                return null == C ? null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(c.default, {
                        icon: n("127067"),
                        timestamp: p.timestamp,
                        compact: I,
                        children: C
                    }), S && (0, a.jsx)(g, {
                        guildId: E.guild_id,
                        user: p.author,
                        username: T.nick
                    }), (0, a.jsx)(m.default, {
                        channel: E,
                        message: p
                    })]
                })
            }