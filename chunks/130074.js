            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                r = n("272030"),
                s = n("838446"),
                a = n("158534"),
                o = n("798609"),
                u = n("846883"),
                d = n("812204"),
                c = n("243288"),
                f = n("321135"),
                h = n("873254"),
                E = n("44141"),
                p = n("531674"),
                _ = n("861370"),
                I = n("972701"),
                T = n("390008"),
                C = n("936947"),
                S = n("976127"),
                N = n("856030"),
                g = n("726750"),
                m = n("170990"),
                v = n("304582"),
                A = n("72057"),
                L = n("563816"),
                M = n("489836"),
                R = n("406703"),
                O = n("126710"),
                y = n("502533"),
                G = n("314838"),
                U = n("151200"),
                x = n("692986"),
                P = n("806179"),
                D = n("816106"),
                b = n("623879"),
                w = n("49111"),
                j = n("782340"),
                F = (0, a.default)((0, s.default)(function(e) {
                    let {
                        user: t,
                        channel: n,
                        channelSelected: s = !1,
                        showMute: a = !0,
                        showMediaItems: d = !1,
                        showChannelCallItems: w = !1,
                        showModalItems: F = !0,
                        targetIsUser: H = !1,
                        context: V,
                        onSelect: B,
                        onHeightUpdate: k
                    } = e, Z = (0, P.default)(t.id, null), Y = (0, R.default)(t, V), K = (0, A.default)({
                        user: t,
                        context: V
                    }), W = (0, v.default)(t), z = (0, b.default)(t.id), X = (0, O.default)(n.id, s), q = (0, G.default)(t), Q = (0, u.default)(null, t), J = (0, D.default)(t.id), $ = (0, U.default)(t.id, n.id), ee = (0, m.default)(t), et = (0, x.default)(t.id), en = (0, y.default)(t.id, n.id), ei = (0, M.default)(t), el = (0, p.default)(n), er = (0, _.default)({
                        id: t.id,
                        label: j.default.Messages.COPY_ID_USER
                    }), es = (0, _.default)({
                        id: n.id,
                        label: j.default.Messages.COPY_ID_CHANNEL
                    }), ea = (0, E.default)(n), eo = (0, f.default)(t.id), eu = (0, c.default)(n.id), ed = (0, g.default)(t), ec = (0, h.default)(t.id), ef = (0, L.default)({
                        commandType: o.ApplicationCommandType.USER,
                        commandTargetId: t.id,
                        channel: n,
                        guildId: void 0,
                        onHeightUpdate: k
                    }), eh = (0, I.useAddToFavoritesItem)(n), eE = (0, I.useRemoveFromFavoritesItem)(n), ep = (0, T.default)(n), e_ = (0, C.default)(n), eI = (0, S.useMessageRequestItem)(n), eT = (0, N.useSafetyWarningsItem)(n), eC = n.isManaged(), eS = t.isNonUserBot();
                    return (0, i.jsxs)(l.Menu, {
                        navId: "user-context",
                        onClose: r.closeContextMenu,
                        "aria-label": j.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: B,
                        children: [(0, i.jsx)(l.MenuGroup, {
                            children: !eS && ea
                        }), (0, i.jsx)(l.MenuGroup, {
                            children: eI
                        }), (0, i.jsx)(l.MenuGroup, {
                            children: eT
                        }), (0, i.jsxs)(l.MenuGroup, {
                            children: [eh, ep, e_]
                        }), (0, i.jsx)(l.MenuGroup, {
                            children: !eS && ed
                        }), (0, i.jsxs)(l.MenuGroup, {
                            children: [!eS && (0, i.jsxs)(i.Fragment, {
                                children: [F && Z, Y, !eC && $, F && K, F && W, z]
                            }), X]
                        }), !eS && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(l.MenuGroup, {
                                children: d && J
                            }), (0, i.jsx)(l.MenuGroup, {
                                children: F && Q
                            }), (0, i.jsxs)(l.MenuGroup, {
                                children: [d && et, d && en, ef, F && q, ee, F && ei, d && ec]
                            }), (0, i.jsx)(l.MenuGroup, {
                                children: a && el
                            }), w && (0, i.jsxs)(l.MenuGroup, {
                                children: [eu, eo]
                            })]
                        }), (0, i.jsx)(l.MenuGroup, {
                            children: eE
                        }), (0, i.jsxs)(l.MenuGroup, {
                            children: [er, !H && es]
                        })]
                    })
                }, {
                    object: w.AnalyticsObjects.CONTEXT_MENU
                }), [d.default.CONTEXT_MENU, d.default.DM_USER_MENU])