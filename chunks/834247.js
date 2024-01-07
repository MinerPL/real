            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("272030"),
                r = n("838446"),
                s = n("158534"),
                u = n("798609"),
                o = n("846883"),
                d = n("812204"),
                c = n("243288"),
                E = n("321135"),
                f = n("873254"),
                _ = n("888355"),
                I = n("861370"),
                T = n("230947"),
                S = n("726750"),
                N = n("85166"),
                p = n("170990"),
                h = n("304582"),
                A = n("72057"),
                m = n("300925"),
                C = n("563816"),
                g = n("489836"),
                O = n("406703"),
                M = n("502533"),
                G = n("314838"),
                D = n("383161"),
                v = n("421602"),
                R = n("459870"),
                L = n("692986"),
                U = n("806179"),
                y = n("97508"),
                P = n("816106"),
                F = n("623879"),
                b = n("49111"),
                H = n("782340"),
                x = (0, s.default)((0, r.default)(function(e) {
                    let {
                        user: t,
                        guildId: n,
                        channel: r,
                        showMediaItems: s = !1,
                        showChatItems: d = !0,
                        showChannelCallItems: x = !1,
                        showModalItems: B = !0,
                        showStageChannelItems: V = !1,
                        context: w,
                        onSelect: k,
                        onHeightUpdate: j
                    } = e, Y = (0, U.default)(t.id, n, r.id), W = (0, D.default)(t, n, w), K = (0, v.default)(t.id, w), z = (0, F.default)(t.id), Z = (0, O.default)(t, w), X = (0, A.default)({
                        user: t,
                        guildId: n,
                        context: w
                    }), Q = (0, h.default)(t), q = (0, P.default)(t.id), J = (0, L.default)(t.id), $ = (0, T.default)({
                        guildId: n,
                        userId: t.id,
                        analyticsLocation: {
                            page: b.AnalyticsPages.GUILD_CHANNEL,
                            section: b.AnalyticsSections.CHAT_USERNAME,
                            object: b.AnalyticsObjects.CONTEXT_MENU_ITEM
                        },
                        context: w
                    }), ee = (0, G.default)(t, n), et = (0, o.default)(null, t), en = (0, p.default)(t), ei = (0, g.default)(t), ea = (0, m.default)(t, n, r.id), el = (0, y.default)(t.id, n), er = (0, R.default)(t, n), es = (0, I.default)({
                        id: t.id,
                        label: H.default.Messages.COPY_ID_USER
                    }), eu = (0, M.default)(t.id, r.id), eo = (0, E.default)(t.id), ed = (0, c.default)(r.id), ec = (0, S.default)(t), eE = (0, N.default)(t, n, r.id), ef = (0, C.default)({
                        commandType: u.ApplicationCommandType.USER,
                        commandTargetId: t.id,
                        channel: r,
                        guildId: n,
                        onHeightUpdate: j,
                        context: w
                    }), e_ = (0, f.default)(t.id), eI = t.isNonUserBot(), eT = t.isClyde(), eS = (0, _.useIsDMsToClydeEnabled)();
                    return (0, i.jsxs)(a.Menu, {
                        navId: "user-context",
                        onClose: l.closeContextMenu,
                        "aria-label": H.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: k,
                        children: [!eI && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(a.MenuGroup, {
                                children: [ec, V && eE]
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [B && Y, d && W, K, Z, B && X, B && Q, z]
                            }), s && (0, i.jsx)(a.MenuGroup, {
                                children: q
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: B && et
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [s && J, s && eu, B && $, ef, B && ee, en, B && ei, x && e_]
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: ea
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [el, er]
                            }), x && (0, i.jsxs)(a.MenuGroup, {
                                children: [ed, eo]
                            })]
                        }), eT && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(a.MenuGroup, {
                                children: [B && Y, eS && K]
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: ea
                            })]
                        }), (0, i.jsx)(a.MenuGroup, {
                            children: es
                        })]
                    })
                }, {
                    object: b.AnalyticsObjects.CONTEXT_MENU
                }), [d.default.CONTEXT_MENU, d.default.GUILD_CHANNEL_USER_MENU])