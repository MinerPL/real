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
                _ = n("873254"),
                I = n("888355"),
                T = n("861370"),
                f = n("230947"),
                S = n("726750"),
                N = n("85166"),
                p = n("170990"),
                h = n("304582"),
                A = n("72057"),
                m = n("300925"),
                C = n("563816"),
                g = n("489836"),
                G = n("406703"),
                O = n("502533"),
                M = n("314838"),
                D = n("383161"),
                v = n("421602"),
                U = n("459870"),
                R = n("692986"),
                L = n("806179"),
                P = n("97508"),
                y = n("816106"),
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
                        showStageChannelItems: w = !1,
                        context: k,
                        onSelect: Y,
                        onHeightUpdate: j
                    } = e, V = (0, L.default)(t.id, n, r.id), W = (0, D.default)(t, n, k), K = (0, v.default)(t.id, k), z = (0, F.default)(t.id), Z = (0, G.default)(t, k), X = (0, A.default)({
                        user: t,
                        guildId: n,
                        context: k
                    }), Q = (0, h.default)(t), q = (0, y.default)(t.id), J = (0, R.default)(t.id), $ = (0, f.default)({
                        guildId: n,
                        userId: t.id,
                        analyticsLocation: {
                            page: b.AnalyticsPages.GUILD_CHANNEL,
                            section: b.AnalyticsSections.CHAT_USERNAME,
                            object: b.AnalyticsObjects.CONTEXT_MENU_ITEM
                        },
                        context: k
                    }), ee = (0, M.default)(t, n), et = (0, o.default)(null, t), en = (0, p.default)(t), ei = (0, g.default)(t), ea = (0, m.default)(t, n, r.id), el = (0, P.default)(t.id, n), er = (0, U.default)(t, n), es = (0, T.default)({
                        id: t.id,
                        label: H.default.Messages.COPY_ID_USER
                    }), eu = (0, O.default)(t.id, r.id), eo = (0, E.default)(t.id), ed = (0, c.default)(r.id), ec = (0, S.default)(t), eE = (0, N.default)(t, n, r.id), e_ = (0, C.default)({
                        commandType: u.ApplicationCommandType.USER,
                        commandTargetId: t.id,
                        channel: r,
                        guildId: n,
                        onHeightUpdate: j,
                        context: k
                    }), eI = (0, _.default)(t.id), eT = t.isNonUserBot(), ef = t.isClyde(), eS = (0, I.useIsDMsToClydeEnabled)();
                    return (0, i.jsxs)(a.Menu, {
                        navId: "user-context",
                        onClose: l.closeContextMenu,
                        "aria-label": H.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: Y,
                        children: [!eT && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(a.MenuGroup, {
                                children: [ec, w && eE]
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [B && V, d && W, K, Z, B && X, B && Q, z]
                            }), s && (0, i.jsx)(a.MenuGroup, {
                                children: q
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: B && et
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [s && J, s && eu, B && $, e_, B && ee, en, B && ei, x && eI]
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: ea
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [el, er]
                            }), x && (0, i.jsxs)(a.MenuGroup, {
                                children: [ed, eo]
                            })]
                        }), ef && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(a.MenuGroup, {
                                children: [B && V, eS && K]
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