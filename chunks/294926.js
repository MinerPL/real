            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                u = n("577776"),
                o = n("452804"),
                d = n("579408"),
                c = n("168973"),
                f = n("981913"),
                h = n("576242"),
                p = n("18494"),
                m = n("717018"),
                E = n("659500"),
                C = n("550766"),
                S = n("191225"),
                g = n("698372"),
                _ = n("401207"),
                I = n("320817"),
                T = n("803997"),
                v = n("272505"),
                x = n("49111"),
                N = n("782340"),
                A = n("355255");
            let M = {
                [v.FocusedActivityLayouts.NO_CHAT]: A.noChat,
                [v.FocusedActivityLayouts.RESIZABLE]: A.resizable
            };

            function R(e) {
                var t;
                let {
                    maxHeight: n,
                    connectedChannelId: s
                } = e, R = (0, g.default)(), j = l.useCallback(() => {
                    (0, C.updateActivityPanelMode)(v.ActivityPanelModes.PIP)
                }, []), L = l.useRef(null), O = (0, r.useStateFromStores)([S.default], () => S.default.getFocusedLayout()), y = O !== v.FocusedActivityLayouts.NO_CHAT, [b, P] = l.useState(null !== (t = c.default.activityPanelHeight) && void 0 !== t ? t : n), D = l.useCallback(e => {
                    o.default.updatedUnsyncedSettings({
                        activityPanelHeight: e
                    })
                }, []), U = l.useRef(null), [w, F] = l.useState({
                    width: 0,
                    height: 0
                });
                l.useLayoutEffect(() => {
                    if (null == U.current) return;
                    let e = new ResizeObserver(() => {
                        var e, t, n, a;
                        let l = null !== (n = null === (e = U.current) || void 0 === e ? void 0 : e.clientWidth) && void 0 !== n ? n : 0;
                        F({
                            width: l,
                            height: null !== (a = null === (t = U.current) || void 0 === t ? void 0 : t.clientHeight) && void 0 !== a ? a : 0
                        })
                    });
                    return e.observe(U.current), () => e.disconnect()
                }, []);
                let k = w.width / Math.max(w.height, 1),
                    V = k < v.LANDSCAPE_ACTIVITY_ASPECT_RATIO,
                    B = 0,
                    H = 0,
                    G = w.width,
                    W = w.height;
                V ? ((W = w.width / v.LANDSCAPE_ACTIVITY_ASPECT_RATIO) > w.height && (G = (W = w.height) * v.LANDSCAPE_ACTIVITY_ASPECT_RATIO), H = (w.height - W) / 2) : ((G = Math.min(w.height * v.LANDSCAPE_ACTIVITY_ASPECT_RATIO)) > w.width && (W = (G = w.width) / v.LANDSCAPE_ACTIVITY_ASPECT_RATIO), B = (w.width - G) / 2);
                let Y = (0, r.useStateFromStores)([p.default], () => p.default.getChannelId());
                return null == R ? null : (0, a.jsxs)("div", {
                    className: i(A.wrapper, M[O]),
                    ref: L,
                    style: y && null != b ? {
                        minHeight: 200,
                        maxHeight: n,
                        height: b
                    } : void 0,
                    children: [(0, a.jsxs)("div", {
                        className: A.header,
                        children: [(0, a.jsx)("div", {
                            className: A.arrowContainer,
                            children: (0, a.jsx)(f.default, {
                                label: N.default.Messages.EMBEDDED_ACTIVITIES_MINIMIZE_A11Y_LABEL,
                                onClick: j,
                                className: A.circularButton,
                                iconComponent: m.default,
                                iconClassName: A.minimizeIcon,
                                themeable: !0
                            })
                        }), (0, a.jsx)(u.Text, {
                            color: "header-primary",
                            variant: "text-md/semibold",
                            className: A.headerTitle,
                            children: null == R ? void 0 : R.name
                        }), (0, a.jsx)("div", {
                            className: A.leaveButtonContainer,
                            children: (0, a.jsx)(h.default, {
                                applicationId: R.id,
                                channelId: s,
                                className: A.leaveActivityButton,
                                iconClassName: A.leaveActivityIcon,
                                centerButton: !0,
                                color: "red"
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: A.activityContainer,
                        style: {
                            paddingLeft: B,
                            paddingRight: B,
                            paddingTop: H,
                            paddingBottom: H
                        },
                        ref: U,
                        children: (0, a.jsx)(_.default, {
                            className: A.iframe,
                            embedId: (0, I.default)(s, R.id)
                        })
                    }), null != Y ? (0, a.jsx)("div", {
                        className: A.footer,
                        children: (0, a.jsx)(T.default, {
                            channelId: Y
                        })
                    }) : null, y ? (0, a.jsx)(d.default, {
                        minHeight: 480,
                        maxHeight: n,
                        resizableNode: L,
                        onResize: e => {
                            E.ComponentDispatch.dispatch(x.ComponentActions.MANUAL_IFRAME_RESIZING, {
                                resizing: !0
                            }), P(e)
                        },
                        onResizeEnd: e => {
                            E.ComponentDispatch.dispatch(x.ComponentActions.MANUAL_IFRAME_RESIZING, {
                                resizing: !1
                            }), D(e)
                        }
                    }) : null]
                })
            }