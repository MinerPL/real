            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("77078"),
                r = n("272030"),
                s = n("838446"),
                l = n("158534"),
                d = n("846883"),
                i = n("812204"),
                o = n("243288"),
                f = n("321135"),
                c = n("873254"),
                m = n("861370"),
                h = n("726750"),
                p = n("170990"),
                g = n("304582"),
                M = n("72057"),
                v = n("489836"),
                x = n("406703"),
                S = n("343856"),
                j = n("502533"),
                _ = n("314838"),
                C = n("383161"),
                N = n("421602"),
                E = n("432487"),
                T = n("151200"),
                O = n("692986"),
                I = n("806179"),
                R = n("816106"),
                A = n("623879"),
                P = n("49111"),
                U = n("782340"),
                G = (0, l.default)((0, s.default)(function(e) {
                    var t;
                    let {
                        user: n,
                        channel: s,
                        context: l,
                        showChatItems: i = !0,
                        showMediaItems: P = !1,
                        showChannelCallItems: G = !1,
                        showModalItems: b = !0,
                        onSelect: w
                    } = e, y = (0, I.default)(n.id, null), L = (0, C.default)(n, null, l), F = (0, T.default)(n.id, s.id), k = (0, N.default)(n.id, l), D = (0, x.default)(n, l), z = (0, M.default)({
                        user: n,
                        context: l
                    }), W = (0, g.default)(n), B = (0, R.default)(n.id), H = (0, E.default)(n.id, s.id), Y = (0, O.default)(n.id), X = (0, j.default)(n.id, s.id), Z = (0, _.default)(n), V = (0, d.default)(null, n), q = (0, p.default)(n), J = (0, v.default)(n), K = (0, m.default)({
                        id: n.id,
                        label: U.default.Messages.COPY_ID_USER
                    }), Q = (0, A.default)(n.id), $ = (0, f.default)(n.id), ee = (0, o.default)(s.id), et = (0, h.default)(n), en = (0, c.default)(n.id), ea = (0, S.default)(n, s), eu = n.isNonUserBot(), er = s.isManaged(), es = null === (t = s.recipients) || void 0 === t ? void 0 : t.includes(n.id);
                    return (0, a.jsxs)(u.Menu, {
                        navId: "user-context",
                        onClose: r.closeContextMenu,
                        "aria-label": U.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: w,
                        children: [!eu && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(u.MenuGroup, {
                                children: et
                            }), (0, a.jsxs)(u.MenuGroup, {
                                children: [b && y, i && L, k, D, !er && F, b && z, b && W, Q]
                            }), P && (0, a.jsx)(u.MenuGroup, {
                                children: B
                            }), es && (0, a.jsxs)(u.MenuGroup, {
                                children: [!er && H, ea]
                            }), (0, a.jsx)(u.MenuGroup, {
                                children: b && V
                            }), (0, a.jsxs)(u.MenuGroup, {
                                children: [P && Y, P && X, b && Z, q, b && J, P && en]
                            }), G && (0, a.jsxs)(u.MenuGroup, {
                                children: [ee, $]
                            })]
                        }), (0, a.jsx)(u.MenuGroup, {
                            children: K
                        })]
                    })
                }, {
                    object: P.AnalyticsObjects.CONTEXT_MENU
                }), [i.default.CONTEXT_MENU, i.default.GROUP_DM_USER_MENU])