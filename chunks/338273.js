            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("917351"),
                i = n.n(s),
                r = n("446674"),
                u = n("77078"),
                o = n("30874"),
                d = n("458574"),
                c = n("308798"),
                f = n("64016"),
                h = n("13777"),
                p = n("37774"),
                m = n("117399"),
                E = n("400501"),
                C = n("542640"),
                g = n("604656"),
                S = n("861370"),
                _ = n("845579"),
                I = n("800762"),
                T = n("433487"),
                v = n("664336"),
                x = n("967241"),
                N = n("782340");

            function A(e) {
                let {
                    channel: t
                } = e, [n, s] = l.useState(!1);

                function i() {
                    s(e => !e)
                }
                let r = N.default.Messages.MORE;
                return (0, a.jsx)(u.Popout, {
                    shouldShow: n,
                    animation: u.Popout.Animation.NONE,
                    position: "bottom",
                    align: "right",
                    autoInvert: !1,
                    onRequestClose: () => s(!1),
                    renderPopout: function(e) {
                        return (0, a.jsx)(M, {
                            ...e,
                            channel: t
                        })
                    },
                    children: (e, t) => {
                        let {
                            isShown: n
                        } = t;
                        return (0, a.jsx)(v.default.Icon, {
                            ...e,
                            onClick: i,
                            tooltip: n ? null : r,
                            icon: T.default,
                            "aria-label": r,
                            selected: n
                        })
                    }
                })
            }

            function M(e) {
                let {
                    channel: t,
                    closePopout: n,
                    onSelect: l
                } = e, s = (0, o.default)(t), T = (0, p.default)(t), v = (0, C.default)(t.id), A = (0, E.default)(t), M = (0, S.default)({
                    id: t.id,
                    label: N.default.Messages.COPY_ID_THREAD
                }), R = (0, d.default)(t), j = (0, c.default)(t), L = (0, f.default)(t, "Toolbar Overflow"), O = (0, m.default)(t), y = (0, h.default)(t), b = (0, g.default)(t), P = _.UseThreadSidebar.useSetting(), D = (0, r.useStateFromStores)([I.default], () => !i.isEmpty(I.default.getVoiceStatesForChannel(t.id)));
                return (0, a.jsxs)(u.Menu, {
                    navId: "thread-context",
                    onClose: n,
                    "aria-label": N.default.Messages.THREAD_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsxs)(u.MenuGroup, {
                        children: [L, y]
                    }), (0, a.jsxs)(u.MenuGroup, {
                        children: [A, O, v, P && !D ? (0, a.jsx)(u.MenuItem, {
                            id: "open",
                            label: N.default.Messages.OPEN_IN_SPLIT_VIEW,
                            action: function() {
                                (0, x.openThreadSidebarForViewing)(t)
                            }
                        }) : null]
                    }), (0, a.jsxs)(u.MenuGroup, {
                        children: [b, s, T, j]
                    }), (0, a.jsxs)(u.MenuGroup, {
                        children: [R, M]
                    })]
                })
            }