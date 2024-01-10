            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                o = n("577776"),
                u = n("452804"),
                d = n("579408"),
                c = n("168973"),
                f = n("981913"),
                h = n("576242"),
                p = n("18494"),
                m = n("717018"),
                E = n("659500"),
                C = n("439932"),
                g = n("550766"),
                S = n("191225"),
                _ = n("698372"),
                I = n("401207"),
                T = n("320817"),
                v = n("803997"),
                x = n("272505"),
                N = n("49111"),
                A = n("782340"),
                M = n("355255");
            let R = {
                [x.FocusedActivityLayouts.NO_CHAT]: M.noChat,
                [x.FocusedActivityLayouts.RESIZABLE]: M.resizable
            };

            function j(e) {
                var t;
                let {
                    maxHeight: n,
                    connectedChannelId: s
                } = e, j = (0, _.default)(), L = l.useCallback(() => {
                    (0, g.updateActivityPanelMode)(x.ActivityPanelModes.PIP)
                }, []), O = l.useRef(null), y = (0, r.useStateFromStores)([S.default], () => S.default.getFocusedLayout()), b = y !== x.FocusedActivityLayouts.NO_CHAT, [P, D] = l.useState(null !== (t = c.default.activityPanelHeight) && void 0 !== t ? t : n), U = l.useCallback(e => {
                    u.default.updatedUnsyncedSettings({
                        activityPanelHeight: e
                    })
                }, []), w = l.useRef(null), [F, k] = l.useState({
                    width: 0,
                    height: 0
                });
                l.useLayoutEffect(() => {
                    if (null == w.current) return;
                    let e = new ResizeObserver(() => {
                        var e, t, n, a;
                        let l = null !== (n = null === (e = w.current) || void 0 === e ? void 0 : e.clientWidth) && void 0 !== n ? n : 0;
                        k({
                            width: l,
                            height: null !== (a = null === (t = w.current) || void 0 === t ? void 0 : t.clientHeight) && void 0 !== a ? a : 0
                        })
                    });
                    return e.observe(w.current), () => e.disconnect()
                }, []);
                let V = F.width / Math.max(F.height, 1),
                    B = V < x.LANDSCAPE_ACTIVITY_ASPECT_RATIO,
                    H = 0,
                    G = 0,
                    W = F.width,
                    Y = F.height;
                B ? ((Y = F.width / x.LANDSCAPE_ACTIVITY_ASPECT_RATIO) > F.height && (W = (Y = F.height) * x.LANDSCAPE_ACTIVITY_ASPECT_RATIO), G = (F.height - Y) / 2) : ((W = Math.min(F.height * x.LANDSCAPE_ACTIVITY_ASPECT_RATIO)) > F.width && (Y = (W = F.width) / x.LANDSCAPE_ACTIVITY_ASPECT_RATIO), H = (F.width - W) / 2);
                let z = (0, r.useStateFromStores)([p.default], () => p.default.getChannelId());
                return null == j ? null : (0, a.jsxs)("div", {
                    className: i(M.wrapper, R[y], (0, C.getThemeClass)(N.ThemeTypes.DARK)),
                    ref: O,
                    style: b && null != P ? {
                        minHeight: 200,
                        maxHeight: n,
                        height: P
                    } : void 0,
                    children: [(0, a.jsxs)("div", {
                        className: M.header,
                        children: [(0, a.jsx)("div", {
                            className: M.arrowContainer,
                            children: (0, a.jsx)(f.default, {
                                label: A.default.Messages.EMBEDDED_ACTIVITIES_MINIMIZE_A11Y_LABEL,
                                onClick: L,
                                className: M.circularButton,
                                iconComponent: m.default,
                                iconClassName: M.minimizeIcon,
                                themeable: !0
                            })
                        }), (0, a.jsx)(o.Text, {
                            color: "header-primary",
                            variant: "text-md/semibold",
                            className: M.headerTitle,
                            children: null == j ? void 0 : j.name
                        }), (0, a.jsx)("div", {
                            className: M.leaveButtonContainer,
                            children: (0, a.jsx)(h.default, {
                                applicationId: j.id,
                                channelId: s,
                                className: M.leaveActivityButton,
                                iconClassName: M.leaveActivityIcon,
                                centerButton: !0,
                                color: "red"
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: M.activityContainer,
                        style: {
                            paddingLeft: H,
                            paddingRight: H,
                            paddingTop: G,
                            paddingBottom: G
                        },
                        ref: w,
                        children: (0, a.jsx)(I.default, {
                            className: M.iframe,
                            embedId: (0, T.default)(s, j.id)
                        })
                    }), null != z ? (0, a.jsx)("div", {
                        className: M.footer,
                        children: (0, a.jsx)(v.default, {
                            channelId: z
                        })
                    }) : null, b ? (0, a.jsx)(d.default, {
                        minHeight: 480,
                        maxHeight: n,
                        resizableNode: O,
                        onResize: e => {
                            E.ComponentDispatch.dispatch(N.ComponentActions.MANUAL_IFRAME_RESIZING, {
                                resizing: !0
                            }), D(e)
                        },
                        onResizeEnd: e => {
                            E.ComponentDispatch.dispatch(N.ComponentActions.MANUAL_IFRAME_RESIZING, {
                                resizing: !1
                            }), U(e)
                        }
                    }) : null]
                })
            }