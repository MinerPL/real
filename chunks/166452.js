            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return b
                }
            });
            var n = a("37983");
            a("884691");
            var u = a("77078"),
                r = a("272030"),
                d = a("838446"),
                l = a("158534"),
                s = a("846883"),
                i = a("812204"),
                o = a("243288"),
                f = a("321135"),
                c = a("873254"),
                m = a("861370"),
                M = a("726750"),
                S = a("170990"),
                E = a("304582"),
                g = a("72057"),
                p = a("489836"),
                h = a("406703"),
                v = a("343856"),
                _ = a("502533"),
                A = a("314838"),
                I = a("383161"),
                x = a("421602"),
                T = a("432487"),
                C = a("151200"),
                O = a("692986"),
                N = a("806179"),
                R = a("816106"),
                j = a("623879"),
                D = a("49111"),
                F = a("782340"),
                b = (0, l.default)((0, d.default)(function(e) {
                    var t;
                    let {
                        user: a,
                        channel: d,
                        context: l,
                        showChatItems: i = !0,
                        showMediaItems: D = !1,
                        showChannelCallItems: b = !1,
                        showModalItems: U = !0,
                        onSelect: y
                    } = e, L = (0, N.default)(a.id, null), V = (0, I.default)(a, null, l), P = (0, C.default)(a.id, d.id), G = (0, x.default)(a.id, l), w = (0, h.default)(a, l), H = (0, g.default)({
                        user: a,
                        context: l
                    }), k = (0, E.default)(a), B = (0, R.default)(a.id), z = (0, T.default)(a.id, d.id), W = (0, O.default)(a.id), Y = (0, _.default)(a.id, d.id), K = (0, A.default)(a), X = (0, s.default)(null, a), Z = (0, S.default)(a), q = (0, p.default)(a), J = (0, m.default)({
                        id: a.id,
                        label: F.default.Messages.COPY_ID_USER
                    }), Q = (0, j.default)(a.id), $ = (0, f.default)(a.id), ee = (0, o.default)(d.id), et = (0, M.default)(a), ea = (0, c.default)(a.id), en = (0, v.default)(a, d), eu = a.isNonUserBot(), er = d.isManaged(), ed = null === (t = d.recipients) || void 0 === t ? void 0 : t.includes(a.id);
                    return (0, n.jsxs)(u.Menu, {
                        navId: "user-context",
                        onClose: r.closeContextMenu,
                        "aria-label": F.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: y,
                        children: [!eu && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(u.MenuGroup, {
                                children: et
                            }), (0, n.jsxs)(u.MenuGroup, {
                                children: [U && L, i && V, G, w, !er && P, U && H, U && k, Q]
                            }), D && (0, n.jsx)(u.MenuGroup, {
                                children: B
                            }), ed && (0, n.jsxs)(u.MenuGroup, {
                                children: [!er && z, en]
                            }), (0, n.jsx)(u.MenuGroup, {
                                children: U && X
                            }), (0, n.jsxs)(u.MenuGroup, {
                                children: [D && W, D && Y, U && K, Z, U && q, D && ea]
                            }), b && (0, n.jsxs)(u.MenuGroup, {
                                children: [ee, $]
                            })]
                        }), (0, n.jsx)(u.MenuGroup, {
                            children: J
                        })]
                    })
                }, {
                    object: D.AnalyticsObjects.CONTEXT_MENU
                }), [i.default.CONTEXT_MENU, i.default.GROUP_DM_USER_MENU])