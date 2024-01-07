            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("174622"),
                r = n("478895"),
                o = n("569808"),
                u = n("579033"),
                d = n("782340"),
                c = n("349934"),
                f = n("18978");

            function m(e) {
                var t;
                let {
                    code: m
                } = e, E = (0, s.useStateFromStores)([o.default], () => o.default.getGuildTemplate(m));
                if (null == E || E.state === u.GuildTemplateStates.RESOLVING) return (0, a.jsxs)(i.default, {
                    children: [(0, a.jsx)(i.default.Header, {
                        text: d.default.Messages.GUILD_TEMPLATE_RESOLVING_TITLE
                    }), (0, a.jsx)(i.default.Body, {
                        resolving: !0
                    })]
                });
                if (E.state === u.GuildTemplateStates.EXPIRED) return (0, a.jsxs)(i.default, {
                    children: [(0, a.jsx)(i.default.Header, {
                        text: d.default.Messages.GUILD_TEMPLATE_INVALID_TITLE
                    }), (0, a.jsxs)(i.default.Body, {
                        children: [(0, a.jsx)(i.default.Icon, {
                            expired: !0
                        }), (0, a.jsx)(i.default.Info, {
                            expired: !0,
                            title: d.default.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE
                        })]
                    })]
                });
                let _ = __OVERLAY__ ? (0, a.jsx)(i.default.Button, {
                    isDisabled: !0,
                    color: i.default.Button.Colors.PRIMARY,
                    children: d.default.Messages.GUILD_TEMPLATE_EMBED_VIEW_IN_APP
                }) : (0, a.jsx)(i.default.Button, {
                    onClick: () => {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("843456").then(n.bind(n, "843456"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                guildTemplate: E
                            })
                        })
                    },
                    submitting: E.state === u.GuildTemplateStates.ACCEPTING,
                    color: i.default.Button.Colors.GREEN,
                    children: d.default.Messages.GUILD_TEMPLATE_OPEN
                });
                return (0, a.jsxs)(i.default, {
                    children: [(0, a.jsx)(i.default.Header, {
                        text: d.default.Messages.GUILD_TEMPLATE_RESOLVED_EMBED_TITLE
                    }), (0, a.jsxs)(i.default.Body, {
                        children: [(0, a.jsxs)("div", {
                            className: f.headerLine,
                            children: [(0, a.jsx)(r.default, {
                                className: c.icon
                            }), (0, a.jsx)(i.default.Info, {
                                title: E.name,
                                children: d.default.Messages.GUILD_TEMPLATE_USAGES.format({
                                    usageCount: String(null !== (t = E.usageCount) && void 0 !== t ? t : 0)
                                })
                            })]
                        }), _]
                    })]
                })
            }