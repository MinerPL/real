            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                u = n("272030"),
                o = n("838446"),
                a = n("158534"),
                r = n("846883"),
                d = n("812204"),
                s = n("861370"),
                c = n("726750"),
                f = n("170990"),
                E = n("304582"),
                _ = n("72057"),
                S = n("489836"),
                T = n("406703"),
                p = n("314838"),
                A = n("421602"),
                g = n("692986"),
                C = n("806179"),
                I = n("816106"),
                N = n("623879"),
                U = n("49111"),
                O = n("782340"),
                h = (0, a.default)((0, o.default)(function(e) {
                    let {
                        user: t,
                        showMediaItems: n = !1,
                        mediaEngineContext: o,
                        onSelect: a
                    } = e, d = (0, C.default)(t.id), U = (0, A.default)(t.id), h = (0, T.default)(t), R = (0, _.default)({
                        user: t
                    }), v = (0, E.default)(t), m = (0, N.default)(t.id), P = (0, I.default)(t.id), y = (0, g.default)(t.id, o), b = (0, p.default)(t), w = (0, r.default)(null, t), D = (0, f.default)(t), L = (0, S.default)(t), M = (0, s.default)({
                        id: t.id,
                        label: O.default.Messages.COPY_ID_USER
                    }), G = (0, c.default)(t), k = t.isNonUserBot();
                    return (0, i.jsxs)(l.Menu, {
                        navId: "user-context",
                        onClose: u.closeContextMenu,
                        "aria-label": O.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: a,
                        children: [!k && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(l.MenuGroup, {
                                children: G
                            }), (0, i.jsxs)(l.MenuGroup, {
                                children: [d, U, h, R, v, m]
                            }), n && (0, i.jsx)(l.MenuGroup, {
                                children: P
                            }), (0, i.jsx)(l.MenuGroup, {
                                children: w
                            }), (0, i.jsxs)(l.MenuGroup, {
                                children: [n && y, b, D, L]
                            })]
                        }), (0, i.jsx)(l.MenuGroup, {
                            children: M
                        })]
                    })
                }, {
                    object: U.AnalyticsObjects.CONTEXT_MENU
                }), [d.default.CONTEXT_MENU, d.default.USER_GENERIC_MENU])