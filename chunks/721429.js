            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return b
                }
            });
            var u = l("37983");
            l("884691");
            var a = l("77078"),
                n = l("272030"),
                r = l("838446"),
                d = l("158534"),
                i = l("798609"),
                s = l("846883"),
                o = l("812204"),
                f = l("861370"),
                c = l("230947"),
                E = l("726750"),
                _ = l("170990"),
                M = l("304582"),
                S = l("72057"),
                m = l("563816"),
                A = l("489836"),
                g = l("406703"),
                R = l("314838"),
                C = l("383161"),
                T = l("421602"),
                N = l("459870"),
                I = l("393394"),
                O = l("806179"),
                U = l("97508"),
                v = l("623879"),
                h = l("49111"),
                p = l("782340"),
                b = (0, d.default)((0, r.default)(function(e) {
                    let {
                        user: t,
                        guildId: l,
                        channel: r,
                        context: d,
                        onSelect: o,
                        onHeightUpdate: b
                    } = e, F = (0, O.default)(t.id, l), L = (0, C.default)(t, l, d), x = (0, T.default)(t.id, d), G = (0, v.default)(t.id), j = (0, g.default)(t, d), y = (0, S.default)({
                        user: t,
                        guildId: l,
                        context: d
                    }), D = (0, M.default)(t), P = (0, c.default)({
                        guildId: l,
                        userId: t.id,
                        analyticsLocation: {
                            page: h.AnalyticsPages.GUILD_CHANNEL,
                            section: h.AnalyticsSections.CHAT_USERNAME,
                            object: h.AnalyticsObjects.CONTEXT_MENU_ITEM
                        },
                        context: d
                    }), k = (0, R.default)(t, l), V = (0, s.default)(null, t), H = (0, _.default)(t), B = (0, A.default)(t), K = (0, I.default)(t, l, r.id), Y = (0, U.default)(t.id, l), w = (0, N.default)(t, l), q = (0, f.default)({
                        id: t.id,
                        label: p.default.Messages.COPY_ID_USER
                    }), z = (0, E.default)(t), W = (0, m.default)({
                        commandType: i.ApplicationCommandType.USER,
                        commandTargetId: t.id,
                        channel: r,
                        guildId: l,
                        onHeightUpdate: b
                    }), X = t.isNonUserBot();
                    return (0, u.jsxs)(a.Menu, {
                        navId: "user-context",
                        onClose: n.closeContextMenu,
                        "aria-label": p.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: o,
                        children: [!X && (0, u.jsxs)(u.Fragment, {
                            children: [(0, u.jsx)(a.MenuGroup, {
                                children: z
                            }), (0, u.jsxs)(a.MenuGroup, {
                                children: [F, L, x, j, y, D, G]
                            }), (0, u.jsx)(a.MenuGroup, {
                                children: V
                            }), (0, u.jsxs)(a.MenuGroup, {
                                children: [P, W, k, H, B]
                            }), (0, u.jsx)(a.MenuGroup, {
                                children: K
                            }), (0, u.jsxs)(a.MenuGroup, {
                                children: [Y, w]
                            })]
                        }), (0, u.jsx)(a.MenuGroup, {
                            children: q
                        })]
                    })
                }, {
                    object: h.AnalyticsObjects.CONTEXT_MENU
                }), [o.default.CONTEXT_MENU, o.default.THREAD_USER_MENU])