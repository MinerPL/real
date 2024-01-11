            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                r = n("272030"),
                a = n("838446"),
                s = n("158534"),
                o = n("798609"),
                u = n("846883"),
                d = n("812204"),
                c = n("243288"),
                f = n("321135"),
                h = n("873254"),
                E = n("44141"),
                _ = n("531674"),
                p = n("861370"),
                I = n("972701"),
                C = n("390008"),
                T = n("936947"),
                S = n("976127"),
                v = n("856030"),
                N = n("726750"),
                g = n("170990"),
                m = n("304582"),
                A = n("72057"),
                L = n("563816"),
                R = n("489836"),
                M = n("406703"),
                y = n("126710"),
                O = n("502533"),
                G = n("314838"),
                U = n("151200"),
                P = n("692986"),
                x = n("806179"),
                D = n("816106"),
                b = n("623879"),
                F = n("49111"),
                w = n("782340"),
                j = (0, s.default)((0, a.default)(function(e) {
                    let {
                        user: t,
                        channel: n,
                        channelSelected: a = !1,
                        showMute: s = !0,
                        showMediaItems: d = !1,
                        showChannelCallItems: F = !1,
                        showModalItems: j = !0,
                        targetIsUser: V = !1,
                        context: H,
                        onSelect: B,
                        onHeightUpdate: k
                    } = e, Y = (0, x.default)(t.id, null), Z = (0, M.default)(t, H), K = (0, A.default)({
                        user: t,
                        context: H
                    }), W = (0, m.default)(t), z = (0, b.default)(t.id), X = (0, y.default)(n.id, a), Q = (0, G.default)(t), q = (0, u.default)(null, t), J = (0, D.default)(t.id), $ = (0, U.default)(t.id, n.id), ee = (0, g.default)(t), et = (0, P.default)(t.id), en = (0, O.default)(t.id, n.id), ei = (0, R.default)(t), el = (0, _.default)(n), er = (0, p.default)({
                        id: t.id,
                        label: w.default.Messages.COPY_ID_USER
                    }), ea = (0, p.default)({
                        id: n.id,
                        label: w.default.Messages.COPY_ID_CHANNEL
                    }), es = (0, E.default)(n), eo = (0, f.default)(t.id), eu = (0, c.default)(n.id), ed = (0, N.default)(t), ec = (0, h.default)(t.id), ef = (0, L.default)({
                        commandType: o.ApplicationCommandType.USER,
                        commandTargetId: t.id,
                        channel: n,
                        guildId: void 0,
                        onHeightUpdate: k
                    }), eh = (0, I.useAddToFavoritesItem)(n), eE = (0, I.useRemoveFromFavoritesItem)(n), e_ = (0, C.default)(n), ep = (0, T.default)(n), eI = (0, S.useMessageRequestItem)(n), eC = (0, v.useSafetyWarningsItem)(n), eT = n.isManaged(), eS = t.isNonUserBot();
                    return (0, i.jsxs)(l.Menu, {
                        navId: "user-context",
                        onClose: r.closeContextMenu,
                        "aria-label": w.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: B,
                        children: [(0, i.jsx)(l.MenuGroup, {
                            children: !eS && es
                        }), (0, i.jsx)(l.MenuGroup, {
                            children: eI
                        }), (0, i.jsx)(l.MenuGroup, {
                            children: eC
                        }), (0, i.jsxs)(l.MenuGroup, {
                            children: [eh, e_, ep]
                        }), (0, i.jsx)(l.MenuGroup, {
                            children: !eS && ed
                        }), (0, i.jsxs)(l.MenuGroup, {
                            children: [!eS && (0, i.jsxs)(i.Fragment, {
                                children: [j && Y, Z, !eT && $, j && K, j && W, z]
                            }), X]
                        }), !eS && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(l.MenuGroup, {
                                children: d && J
                            }), (0, i.jsx)(l.MenuGroup, {
                                children: j && q
                            }), (0, i.jsxs)(l.MenuGroup, {
                                children: [d && et, d && en, ef, j && Q, ee, j && ei, d && ec]
                            }), (0, i.jsx)(l.MenuGroup, {
                                children: s && el
                            }), F && (0, i.jsxs)(l.MenuGroup, {
                                children: [eu, eo]
                            })]
                        }), (0, i.jsx)(l.MenuGroup, {
                            children: eE
                        }), (0, i.jsxs)(l.MenuGroup, {
                            children: [er, !V && ea]
                        })]
                    })
                }, {
                    object: F.AnalyticsObjects.CONTEXT_MENU
                }), [d.default.CONTEXT_MENU, d.default.DM_USER_MENU])