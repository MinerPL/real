            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                r = n.n(s),
                i = n("446674"),
                l = n("77078"),
                u = n("368598"),
                o = n("49671"),
                d = n("244201"),
                c = n("191145"),
                f = n("270227"),
                E = n("940277"),
                h = n("386811"),
                p = n("964264"),
                S = n("655804"),
                _ = n("58463"),
                C = n("238500"),
                m = n("773336"),
                g = n("439932"),
                T = n("50885"),
                A = n("782340"),
                I = n("793804");
            let v = e => T.default.close(e),
                M = e => T.default.minimize(e),
                O = (e, t) => {
                    (0, m.isMac)() && !t.altKey ? T.default.fullscreen(e) : T.default.maximize(e)
                },
                N = e => {
                    let {
                        windowKey: t,
                        themeOverride: n,
                        hasOpenLayer: s
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: r(I.typeWindows, (0, g.getThemeClass)(n), {
                            [I.withBackgroundOverride]: !s
                        }),
                        children: [(0, a.jsx)("div", {
                            className: I.wordmarkWindows,
                            children: (0, a.jsx)(f.default, {})
                        }), (0, a.jsx)(l.Clickable, {
                            className: I.winButtonClose,
                            onClick: () => v(t),
                            "aria-label": A.default.Messages.TITLE_BAR_CLOSE_WINDOW,
                            tabIndex: -1,
                            children: (0, a.jsx)(E.default, {})
                        }), (0, a.jsx)(l.Clickable, {
                            className: I.winButtonMinMax,
                            onClick: e => O(t, e),
                            "aria-label": A.default.Messages.TITLE_BAR_MAXIMIZE_WINDOW,
                            tabIndex: -1,
                            children: (0, a.jsx)(p.default, {})
                        }), (0, a.jsx)(l.Clickable, {
                            className: I.winButtonMinMax,
                            onClick: () => M(t),
                            "aria-label": A.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                            tabIndex: -1,
                            children: (0, a.jsx)(_.default, {})
                        })]
                    })
                },
                D = e => {
                    let {
                        focused: t,
                        windowKey: n,
                        frame: s,
                        themeOverride: i,
                        hasOpenLayer: u
                    } = e;
                    return (0, a.jsxs)(l.Clickable, {
                        className: r(s ? I.typeMacOSWithFrame : I.typeMacOS, t ? I.focused : I.unfocused, (0, g.getThemeClass)(i), {
                            [I.withBackgroundOverride]: !u
                        }),
                        onDoubleClick: () => T.default.maximize(n),
                        tabIndex: -1,
                        children: [o.default.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS ? (0, a.jsx)("div", {
                            className: I.macDragRegion
                        }) : (0, a.jsxs)("div", {
                            className: I.macButtons,
                            children: [(0, a.jsx)(l.Clickable, {
                                className: I.macButtonClose,
                                onClick: () => v(n),
                                "aria-label": A.default.Messages.TITLE_BAR_CLOSE_WINDOW,
                                tabIndex: -1,
                                children: (0, a.jsx)(h.default, {
                                    color: "#4c0000"
                                })
                            }), (0, a.jsx)(l.Clickable, {
                                className: I.macButtonMinimize,
                                onClick: () => M(n),
                                "aria-label": A.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                                tabIndex: -1,
                                children: (0, a.jsx)(C.default, {
                                    color: "#975500"
                                })
                            }), (0, a.jsx)(l.Clickable, {
                                className: I.macButtonMaximize,
                                onClick: e => O(n, e),
                                "aria-label": A.default.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                                tabIndex: -1,
                                children: (0, a.jsx)(S.default, {
                                    color: "#006500"
                                })
                            })]
                        }), s ? (0, a.jsx)("div", {
                            className: I.wordmarkMacOS,
                            children: (0, a.jsx)(f.default, {
                                color: "#ffffff"
                            })
                        }) : null]
                    })
                };

            function L(e) {
                let {
                    focused: t,
                    type: n,
                    windowKey: s,
                    macOSFrame: r = !1,
                    themeOverride: l
                } = e, o = (0, d.useAppContext)(), f = (0, i.useStateFromStores)([c.default], () => c.default.isFullscreenInContext(o)), E = (0, u.default)();
                if (f) return null;
                switch (n) {
                    case m.PlatformTypes.WINDOWS:
                        return (0, a.jsx)(N, {
                            windowKey: s,
                            themeOverride: l,
                            hasOpenLayer: E
                        });
                    case m.PlatformTypes.OSX:
                        return (0, a.jsx)(D, {
                            focused: t,
                            windowKey: s,
                            frame: r,
                            themeOverride: l,
                            hasOpenLayer: E
                        });
                    default:
                        return null
                }
            }