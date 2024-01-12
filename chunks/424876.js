            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("446674"),
                o = s("77078"),
                d = s("521012"),
                u = s("191814"),
                c = s("49111"),
                S = s("782340"),
                E = s("973742"),
                f = s("376121"),
                T = s("137963");

            function m(e) {
                let {
                    onClickManageSubscription: t
                } = e, s = (0, r.useStateFromStores)([d.default], () => d.default.getSubscriptions()), l = n.useMemo(() => Object.values(null != s ? s : {}).filter(e => e.type === c.SubscriptionTypes.GUILD).filter(e => e.status !== c.SubscriptionStatusTypes.ENDED), [s]);
                return 0 === l.length ? null : (0, a.jsxs)("div", {
                    className: E.container,
                    children: [(0, a.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        className: E.sectionTitle,
                        children: S.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
                    }), (0, a.jsx)(u.default, {
                        size: 4
                    }), (0, a.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        className: E.sectionDescription,
                        children: S.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_USER_SUBSCRIPTIONS_DESCRIPTION
                    }), (0, a.jsx)(u.default, {
                        size: 24
                    }), (0, a.jsxs)("div", {
                        className: i(f.guildBoostingSubscriptionRow, E.card),
                        children: [(0, a.jsx)("img", {
                            src: T,
                            alt: "",
                            className: E.handImage
                        }), (0, a.jsxs)("div", {
                            className: E.textContainer,
                            children: [(0, a.jsx)(o.Heading, {
                                variant: "heading-xl/semibold",
                                className: E.header,
                                children: S.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
                            }), (0, a.jsx)(o.Text, {
                                variant: "text-md/normal",
                                className: E.description,
                                children: S.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_ACTIVE_USER_SUBSCRIPTIONS_DESCRIPTION.format({
                                    numSubscriptions: l.length
                                })
                            })]
                        }), (0, a.jsx)(o.Button, {
                            color: o.Button.Colors.CUSTOM,
                            size: o.Button.Sizes.SMALL,
                            look: o.Button.Looks.INVERTED,
                            className: E.manageSubscriptionsButton,
                            onClick: t,
                            children: S.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_SUBSCRIPTIONS_BUTTON
                        })]
                    })]
                })
            }