            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("77078"),
                i = s("685665"),
                r = s("954296"),
                o = s("118503"),
                d = s("427459"),
                u = s("49111"),
                c = s("782340"),
                S = s("763516"),
                E = function() {
                    let e = n.useRef(null),
                        {
                            analyticsLocations: t
                        } = (0, i.default)();

                    function E(s) {
                        null != e.current && (0, l.closeModal)(e.current), (0, r.addAppliedGuildBoosts)({
                            analyticsLocation: {
                                page: u.AnalyticsPages.GUILD_BOOSTING_USER_SETTINGS,
                                section: u.AnalyticsSections.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                                object: u.AnalyticsObjects.BUTTON_CTA,
                                objectType: u.AnalyticsObjectTypes.BUY
                            },
                            analyticsLocations: t,
                            guild: s
                        })
                    }
                    async function f() {
                        e.current = await (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await s.el("936992").then(s.bind(s, "936992"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                onSelectGuild: E
                            })
                        }, {
                            onCloseRequest: () => {
                                null != e.current && (0, l.closeModal)(e.current)
                            }
                        })
                    }
                    let T = (0, d.generateBlockGuildSubscriptionPurchasesNode)();
                    return (0, a.jsxs)("div", {
                        className: S.wrapper,
                        children: [(0, a.jsx)(o.default, {
                            className: S.boostIcon,
                            width: 16,
                            height: 16
                        }), (0, a.jsx)(l.Text, {
                            className: S.copy,
                            color: "header-secondary",
                            variant: "text-sm/medium",
                            children: c.default.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_ANY_GUILD_CTA.format({
                                boostAnyGuildHook: (e, t) => {
                                    let s = null != T,
                                        n = (0, a.jsx)(l.Button, {
                                            className: S.cta,
                                            disabled: s,
                                            color: l.Button.Colors.LINK,
                                            look: l.Button.Looks.LINK,
                                            onClick: s ? void 0 : f,
                                            children: e
                                        }, t);
                                    return s ? (0, a.jsx)(l.Tooltip, {
                                        text: T,
                                        children: e => (0, a.jsx)("span", {
                                            ...e,
                                            children: n
                                        })
                                    }, t) : n
                                }
                            })
                        })]
                    })
                }