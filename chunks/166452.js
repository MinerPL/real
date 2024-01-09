            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("77078"),
                r = n("272030"),
                d = n("838446"),
                s = n("158534"),
                l = n("846883"),
                i = n("812204"),
                o = n("243288"),
                f = n("321135"),
                c = n("873254"),
                m = n("861370"),
                S = n("726750"),
                M = n("170990"),
                E = n("304582"),
                g = n("72057"),
                p = n("489836"),
                v = n("406703"),
                _ = n("343856"),
                h = n("502533"),
                I = n("314838"),
                A = n("383161"),
                x = n("421602"),
                T = n("432487"),
                C = n("151200"),
                O = n("692986"),
                N = n("806179"),
                R = n("816106"),
                j = n("623879"),
                D = n("49111"),
                F = n("782340"),
                b = (0, s.default)((0, d.default)(function(e) {
                    var t;
                    let {
                        user: n,
                        channel: d,
                        context: s,
                        showChatItems: i = !0,
                        showMediaItems: D = !1,
                        showChannelCallItems: b = !1,
                        showModalItems: y = !0,
                        onSelect: U
                    } = e, L = (0, N.default)(n.id, null), V = (0, A.default)(n, null, s), P = (0, C.default)(n.id, d.id), G = (0, x.default)(n.id, s), w = (0, v.default)(n, s), H = (0, g.default)({
                        user: n,
                        context: s
                    }), k = (0, E.default)(n), B = (0, R.default)(n.id), z = (0, T.default)(n.id, d.id), W = (0, O.default)(n.id), Y = (0, h.default)(n.id, d.id), K = (0, I.default)(n), X = (0, l.default)(null, n), Z = (0, M.default)(n), q = (0, p.default)(n), J = (0, m.default)({
                        id: n.id,
                        label: F.default.Messages.COPY_ID_USER
                    }), Q = (0, j.default)(n.id), $ = (0, f.default)(n.id), ee = (0, o.default)(d.id), et = (0, S.default)(n), en = (0, c.default)(n.id), ea = (0, _.default)(n, d), eu = n.isNonUserBot(), er = d.isManaged(), ed = null === (t = d.recipients) || void 0 === t ? void 0 : t.includes(n.id);
                    return (0, a.jsxs)(u.Menu, {
                        navId: "user-context",
                        onClose: r.closeContextMenu,
                        "aria-label": F.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: U,
                        children: [!eu && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(u.MenuGroup, {
                                children: et
                            }), (0, a.jsxs)(u.MenuGroup, {
                                children: [y && L, i && V, G, w, !er && P, y && H, y && k, Q]
                            }), D && (0, a.jsx)(u.MenuGroup, {
                                children: B
                            }), ed && (0, a.jsxs)(u.MenuGroup, {
                                children: [!er && z, ea]
                            }), (0, a.jsx)(u.MenuGroup, {
                                children: y && X
                            }), (0, a.jsxs)(u.MenuGroup, {
                                children: [D && W, D && Y, y && K, Z, y && q, D && en]
                            }), b && (0, a.jsxs)(u.MenuGroup, {
                                children: [ee, $]
                            })]
                        }), (0, a.jsx)(u.MenuGroup, {
                            children: J
                        })]
                    })
                }, {
                    object: D.AnalyticsObjects.CONTEXT_MENU
                }), [i.default.CONTEXT_MENU, i.default.GROUP_DM_USER_MENU])