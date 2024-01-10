            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("627445"),
                o = n.n(r),
                u = n("90915"),
                d = n("446674"),
                c = n("77078"),
                f = n("988738"),
                h = n("244201"),
                p = n("206230"),
                m = n("320679"),
                E = n("191225"),
                C = n("229661"),
                g = n("812204"),
                S = n("685665"),
                _ = n("338733"),
                I = n("779601"),
                T = n("967889"),
                v = n("160139"),
                x = n("983689"),
                N = n("628922"),
                A = n("928741"),
                M = n("915639"),
                R = n("161778"),
                j = n("168973"),
                L = n("471671"),
                O = n("983782"),
                y = n("587974"),
                b = n("773336"),
                P = n("439932"),
                D = n("50885"),
                U = n("336921"),
                w = n("292687"),
                F = n("49111"),
                k = n("782340"),
                V = n("604279");
            class B extends l.Component {
                componentDidMount() {
                    let {
                        guestWindow: e
                    } = this.props, t = e.document, n = t.querySelector("title");
                    null == n && null != t.head && t.head.appendChild(t.createElement("title")), this.updateTitle(), this.updateFontScale(), this.updateLocale(), this.updateClientTheme(), this.updateSaturationFactor(), (0, U.setupWindow)(e), e.addEventListener("blur", this.handleBlur), t.addEventListener("contextmenu", this.handleContextMenu, !0), e.addEventListener("beforeunload", this.warnPopoutClose)
                }
                componentDidUpdate(e) {
                    let {
                        title: t,
                        fontScale: n,
                        locale: a,
                        clientThemesCSS: l
                    } = this.props;
                    e.title !== t && this.updateTitle(), e.fontScale !== n && this.updateFontScale(), e.locale !== a && this.updateLocale(), e.clientThemesCSS !== l && this.updateClientTheme(), e.saturation !== this.props.saturation && this.updateSaturationFactor()
                }
                componentWillUnmount() {
                    let {
                        guestWindow: e
                    } = this.props, t = e.document;
                    e.removeEventListener("blur", this.handleBlur), t.removeEventListener("contextmenu", this.handleContextMenu, !0), c.useModalsStore.setState(e => ({
                        ...e,
                        [c.POPOUT_MODAL_CONTEXT]: []
                    })), e.removeEventListener("beforeunload", this.warnPopoutClose)
                }
                updateSaturationFactor() {
                    let {
                        saturation: e,
                        guestWindow: t
                    } = this.props, n = t.document.documentElement;
                    o(null != n, "Window document element was null"), n.style.setProperty("--saturation-factor", e.toString())
                }
                updateLocale() {
                    let {
                        locale: e,
                        guestWindow: t
                    } = this.props, n = t.document.documentElement;
                    o(null != n, "Window document element was null"), n.lang = e
                }
                updateTitle() {
                    let {
                        title: e,
                        guestWindow: t
                    } = this.props, n = t.document.querySelector("title");
                    null != n && (n.innerText = e)
                }
                updateFontScale() {
                    let {
                        fontScale: e,
                        guestWindow: t
                    } = this.props, n = t.document.documentElement;
                    o(null != n, "Window document element was null"), n.style.fontSize = "".concat(e, "%")
                }
                updateClientTheme() {
                    let {
                        clientThemesCSS: e,
                        guestWindow: t
                    } = this.props, n = t.document, a = (0, n.head);
                    o(null != a, "Window document ".concat("head", " was null"));
                    let l = a.querySelector("style[".concat(_.CLIENT_THEMES_DATA_ATTRIBUTE, "]"));
                    if (null != l) {
                        l.textContent = e;
                        return
                    }
                    let s = n.createElement("style");
                    s.setAttribute(_.CLIENT_THEMES_DATA_ATTRIBUTE, "true"), s.textContent = e, a.appendChild(s)
                }
                render() {
                    let {
                        theme: e,
                        forcedColors: t,
                        focused: n,
                        appFocused: l,
                        children: s,
                        windowKey: r,
                        mouseModeEnabled: o,
                        keyboardModeEnabled: d,
                        reducedMotionEnabled: p,
                        fontScaleClass: E,
                        saturation: C,
                        withTitleBar: g,
                        guestWindow: S,
                        clientThemesClassName: _,
                        contentClassName: x
                    } = this.props, N = (0, b.getPlatform)(), M = i(E, {
                        "mouse-mode": o,
                        "reduce-motion": p,
                        "full-motion": !p,
                        "keyboard-mode": d,
                        "app-focused": n || l,
                        "low-saturation": C <= .4
                    });
                    return (0, a.jsx)(u.BrowserRouter, {
                        children: (0, a.jsx)(A.default, {
                            children: (0, a.jsx)(c.ThemeContextProvider, {
                                theme: e,
                                children: (0, a.jsx)(c.RedesignIconContextProvider, {
                                    children: (0, a.jsx)("div", {
                                        "data-popout-root": !0,
                                        ref: this.rootRef,
                                        className: i((0, P.getThemeClass)(e), (0, I.default)(), M, _),
                                        children: (0, a.jsx)(c.FocusRingScope, {
                                            containerRef: this.rootRef,
                                            children: (0, a.jsx)(m.default, {
                                                children: (0, a.jsxs)(T.default, {
                                                    children: [(0, a.jsx)(y.MaskLibrary, {}), (0, a.jsx)(h.AppWindowContextProvider, {
                                                        appContext: F.AppContext.POPOUT,
                                                        renderWindow: S,
                                                        children: (0, a.jsxs)(O.AppLayerProvider, {
                                                            children: [(0, a.jsxs)("div", {
                                                                className: V.popout,
                                                                children: [g && null != N ? (0, a.jsx)(v.default, {
                                                                    focused: n,
                                                                    type: N,
                                                                    windowKey: r,
                                                                    macOSFrame: !0
                                                                }) : null, (0, a.jsx)("div", {
                                                                    className: i(V.content, x),
                                                                    children: s
                                                                })]
                                                            }), (0, a.jsx)(c.Modals, {}), (0, a.jsx)(f.default, {}), (0, a.jsx)(O.AppLayerContainer, {})]
                                                        })
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        }, t)
                    })
                }
                constructor(...e) {
                    super(...e), this.rootRef = l.createRef(), this._cleanupWindowActionCreators = void 0, this.warnPopoutClose = e => {
                        this.props.connectedToEmbeddedActivity && !j.default.disableEmbeddedActivityPopOutAlert && (e.returnValue = k.default.Messages.EMBEDDED_ACTIVITIES_ARE_YOU_SURE_WANT_TO_LEAVE, b.isPlatformEmbedded && (0, C.default)(() => {
                            w.default.unmountWindow(this.props.windowKey), b.isPlatformEmbedded && D.default.close(this.props.windowKey)
                        }))
                    }, this.handleBlur = () => {
                        var e, t;
                        null === (e = (t = this.props).onBlur) || void 0 === e || e.call(t)
                    }, this.handleContextMenu = e => {
                        e.preventDefault()
                    }
                }
            }
            B.defaultProps = {
                withTitleBar: !0
            };
            let H = l.forwardRef(function(e, t) {
                let {
                    guestWindow: n,
                    focused: l
                } = (0, d.useStateFromStoresObject)([w.default], () => ({
                    guestWindow: w.default.getWindow(e.windowKey),
                    focused: w.default.getWindowFocused(e.windowKey)
                }));
                o(null != n, "Missing guestWindow reference");
                let s = (0, d.useStateFromStores)([L.default], () => L.default.isFocused()),
                    {
                        locale: i,
                        theme: r
                    } = (0, d.useStateFromStoresObject)([R.default, M.default], () => ({
                        locale: M.default.locale,
                        theme: R.default.theme
                    })),
                    u = (0, d.useStateFromStores)([p.default], () => p.default.useForcedColors ? "yes" : "no"),
                    {
                        fontScale: f,
                        keyboardModeEnabled: h,
                        reducedMotionEnabled: m,
                        fontScaleClass: C,
                        saturation: I
                    } = (0, d.useStateFromStoresObject)([p.default], () => ({
                        fontScale: p.default.fontScale,
                        keyboardModeEnabled: p.default.keyboardModeEnabled,
                        reducedMotionEnabled: p.default.useReducedMotion,
                        fontScaleClass: p.default.fontScaleClass,
                        saturation: p.default.saturation
                    })),
                    T = (0, d.useStateFromStores)([E.default], () => null != e.channelId && null !== E.default.getSelfEmbeddedActivityForChannel(e.channelId));
                (0, x.default)(n, !1);
                let v = (0, N.default)(n, l),
                    {
                        AnalyticsLocationProvider: A
                    } = (0, S.default)(g.default.POPOUT_WINDOW),
                    {
                        clientThemesClassName: j,
                        clientThemesCSS: O
                    } = (0, _.default)();
                return null == n ? null : (0, a.jsx)(c.DnDProvider, {
                    children: (0, a.jsx)(A, {
                        children: (0, a.jsx)(B, {
                            ref: t,
                            ...e,
                            guestWindow: n,
                            focused: l,
                            appFocused: s,
                            locale: i,
                            theme: r,
                            forcedColors: u,
                            fontScale: f,
                            keyboardModeEnabled: h,
                            mouseModeEnabled: v,
                            reducedMotionEnabled: m,
                            connectedToEmbeddedActivity: T,
                            fontScaleClass: C,
                            saturation: I,
                            clientThemesClassName: j,
                            clientThemesCSS: O
                        })
                    })
                })
            });
            var G = H