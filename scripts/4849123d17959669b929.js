(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["99277"], {
        497660: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                u = n("77078"),
                r = n("713841"),
                i = n("592407"),
                d = n("305961"),
                o = n("957255"),
                c = n("49111"),
                f = n("782340"),
                M = n("460856");

            function N(e, t, n) {
                let N = d.default.getGuild(t),
                    E = (0, s.useStateFromStores)([o.default], () => null != N ? o.default.can(c.Permissions.MANAGE_GUILD, N) : null),
                    S = a.useCallback(() => {
                        i.default.open(t, c.GuildSettingsSections.INTEGRATIONS), r.default.setSection(c.IntegrationSettingsSections.APPLICATION, e.id)
                    }, [e.id, t]),
                    p = n === c.AppContext.POPOUT;
                return e.bot && E && !p ? (0, l.jsx)(u.MenuItem, {
                    id: "manage-integration",
                    label: (0, l.jsx)("div", {
                        className: M.labelWrapper,
                        children: (0, l.jsx)("span", {
                            className: M.label,
                            children: f.default.Messages.MANAGE_INTEGRATION
                        })
                    }),
                    action: S
                }) : null
            }
        },
        839107: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("272030"),
                u = n("901582"),
                r = n("158534"),
                i = n("812204"),
                d = n("861370"),
                o = n("230947"),
                c = n("497660"),
                f = n("300925"),
                M = n("625187"),
                N = n("692986"),
                E = n("97508"),
                S = n("49111"),
                p = n("782340"),
                I = (0, r.default)(function(e) {
                    let {
                        user: t,
                        guildId: n,
                        channelId: r,
                        analyticsContext: i,
                        onSelect: I
                    } = e, h = (0, N.default)(t.id), A = (0, o.default)({
                        guildId: n,
                        userId: t.id,
                        analyticsLocation: {
                            page: S.AnalyticsPages.GUILD_CHANNEL,
                            section: S.AnalyticsSections.CHAT_USERNAME,
                            object: S.AnalyticsObjects.CONTEXT_MENU_ITEM
                        }
                    }), _ = (0, c.default)(t, n), j = (0, f.default)(t, n, r), x = (0, E.default)(t.id, n), T = (0, M.default)(t, n), g = (0, d.default)({
                        id: t.id,
                        label: p.default.Messages.COPY_ID_USER
                    }), G = t.isNonUserBot();
                    return (0, l.jsx)(u.default, {
                        context: i,
                        object: S.AnalyticsObjects.CONTEXT_MENU,
                        children: (0, l.jsxs)(a.Menu, {
                            navId: "user-context",
                            onClose: s.closeContextMenu,
                            "aria-label": p.default.Messages.USER_ACTIONS_MENU_LABEL,
                            onSelect: I,
                            children: [!G && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsxs)(a.MenuGroup, {
                                    children: [h, A, _]
                                }), (0, l.jsx)(a.MenuGroup, {
                                    children: j
                                }), (0, l.jsx)(a.MenuGroup, {
                                    children: x
                                }), (0, l.jsx)(a.MenuGroup, {
                                    children: T
                                })]
                            }), t.isClyde() && (0, l.jsx)(a.MenuGroup, {
                                children: j
                            }), (0, l.jsx)(a.MenuGroup, {
                                children: g
                            })]
                        })
                    })
                }, [i.default.CONTEXT_MENU, i.default.GUILD_SETTINGS_USER_MENU])
        },
        625187: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                u = n("305961"),
                r = n("697218"),
                i = n("782340");

            function d(e, t) {
                let d = (0, a.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
                    o = (0, a.useStateFromStores)([u.default], () => u.default.getGuild(t));
                return null == o || null == d || e.id === o.ownerId || e.bot || !o.isOwnerWithRequiredMfaLevel(d) ? null : (0, l.jsx)(s.MenuItem, {
                    id: "transfer-ownership",
                    color: "danger",
                    label: i.default.Messages.TRANSFER_OWNERSHIP,
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("878551").then(n.bind(n, "878551"));
                        return n => (0, l.jsx)(t, {
                            ...n,
                            guild: o,
                            fromUser: d,
                            toUser: e
                        })
                    })
                })
            }
        }
    }
]);