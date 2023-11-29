(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["8181"], {
        497660: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return N
                }
            });
            var a = l("37983"),
                u = l("884691"),
                n = l("446674"),
                d = l("77078"),
                s = l("713841"),
                i = l("592407"),
                r = l("305961"),
                c = l("957255"),
                o = l("49111"),
                f = l("782340"),
                M = l("460856");

            function N(e, t, l) {
                let N = r.default.getGuild(t),
                    p = (0, n.useStateFromStores)([c.default], () => null != N ? c.default.can(o.Permissions.MANAGE_GUILD, N) : null),
                    E = u.useCallback(() => {
                        i.default.open(t, o.GuildSettingsSections.INTEGRATIONS), s.default.setSection(o.IntegrationSettingsSections.APPLICATION, e.id)
                    }, [e.id, t]),
                    A = l === o.AppContext.POPOUT;
                return e.bot && p && !A ? (0, a.jsx)(d.MenuItem, {
                    id: "manage-integration",
                    label: (0, a.jsx)("div", {
                        className: M.labelWrapper,
                        children: (0, a.jsx)("span", {
                            className: M.label,
                            children: f.default.Messages.MANAGE_INTEGRATION
                        })
                    }),
                    action: E
                }) : null
            }
        },
        539593: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return O
                }
            });
            var a = l("37983");
            l("884691");
            var u = l("77078"),
                n = l("272030"),
                d = l("838446"),
                s = l("158534"),
                i = l("846883"),
                r = l("812204"),
                c = l("861370"),
                o = l("230947"),
                f = l("497660"),
                M = l("170990"),
                N = l("304582"),
                p = l("72057"),
                E = l("300925"),
                A = l("489836"),
                _ = l("406703"),
                h = l("314838"),
                j = l("383161"),
                G = l("421602"),
                I = l("459870"),
                x = l("692986"),
                S = l("806179"),
                T = l("97508"),
                C = l("816106"),
                U = l("623879"),
                b = l("49111"),
                g = l("782340"),
                O = (0, s.default)((0, d.default)(function(e) {
                    let {
                        user: t,
                        guildId: l,
                        showModalItems: d = !0,
                        showMediaItems: s = !1,
                        showChatItems: r = !0,
                        context: O,
                        onSelect: L
                    } = e, m = (0, S.default)(t.id, l), P = (0, j.default)(t, l, O), R = (0, G.default)(t.id, O), k = (0, U.default)(t.id), v = (0, _.default)(t, O), y = (0, p.default)({
                        user: t,
                        guildId: l,
                        context: O
                    }), D = (0, N.default)(t), X = (0, C.default)(t.id), w = (0, x.default)(t.id), B = (0, o.default)({
                        guildId: l,
                        userId: t.id,
                        analyticsLocation: {
                            page: b.AnalyticsPages.GUILD_CHANNEL,
                            section: b.AnalyticsSections.CHAT_USERNAME,
                            object: b.AnalyticsObjects.CONTEXT_MENU_ITEM
                        },
                        context: O
                    }), F = (0, f.default)(t, l), H = (0, h.default)(t, l), W = (0, i.default)(null, t), Y = (0, M.default)(t), q = (0, A.default)(t), z = (0, E.default)(t, l), J = (0, T.default)(t.id, l), K = (0, I.default)(t, l), Q = (0, c.default)({
                        id: t.id,
                        label: g.default.Messages.COPY_ID_USER
                    }), V = t.isNonUserBot();
                    return (0, a.jsxs)(u.Menu, {
                        navId: "user-context",
                        onClose: n.closeContextMenu,
                        "aria-label": g.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: L,
                        children: [!V && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)(u.MenuGroup, {
                                children: [d && m, r && P, R, v, d && y, d && D, k]
                            }), s && (0, a.jsx)(u.MenuGroup, {
                                children: X
                            }), (0, a.jsx)(u.MenuGroup, {
                                children: d && W
                            }), (0, a.jsxs)(u.MenuGroup, {
                                children: [s && w, d && B, d && H, Y, F, d && q]
                            }), (0, a.jsx)(u.MenuGroup, {
                                children: z
                            }), (0, a.jsxs)(u.MenuGroup, {
                                children: [J, K]
                            })]
                        }), (0, a.jsx)(u.MenuGroup, {
                            children: Q
                        })]
                    })
                }, {
                    object: b.AnalyticsObjects.CONTEXT_MENU
                }), [r.default.CONTEXT_MENU, r.default.GUILD_USER_MENU])
        }
    }
]);