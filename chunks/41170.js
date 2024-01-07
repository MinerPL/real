            "use strict";
            n.r(t), n.d(t, {
                getStickerAltText: function() {
                    return M
                },
                default: function() {
                    return G
                }
            }), n("222007");
            var r = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                l = n("627445"),
                u = n.n(l),
                c = n("907002"),
                o = n("446674"),
                d = n("290381"),
                f = n("77078"),
                E = n("206230"),
                v = n("407063"),
                h = n("54560"),
                m = n("983782"),
                S = n("866190"),
                N = n("256860"),
                g = n("161585"),
                C = n("24373"),
                I = n("782340"),
                p = n("787309");
            let x = e => e.preventDefault(),
                A = {
                    tension: 1100,
                    friction: 40
                },
                R = {
                    tension: 1600,
                    friction: 60
                };

            function _(e, t) {
                return a.cloneElement(e, {
                    "data-type": "sticker",
                    "data-id": t
                })
            }

            function M(e) {
                let t = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
                return I.default.Messages.STICKER_A11Y_LABEL.format({
                    stickerName: t
                })
            }
            let T = e => {
                    let {
                        children: t,
                        hasError: n,
                        isLoading: a,
                        maskAsset: s,
                        size: l,
                        withLoadingIndicator: u = !0
                    } = e, c = l >= 33;
                    return (0, r.jsxs)("div", {
                        className: i(p.assetWrapper, {
                            [p.assetWrapperMasked]: n || s
                        }),
                        style: {
                            height: l,
                            width: l
                        },
                        children: [n ? (0, r.jsxs)("div", {
                            className: p.error,
                            children: [(0, r.jsx)(h.default, {
                                className: p.errorIcon
                            }), c && (0, r.jsx)(f.Text, {
                                className: p.errorText,
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: I.default.Messages.STICKER_ASSET_LOAD_ERROR
                            })]
                        }) : t, u && a && (0, r.jsx)("div", {
                            className: p.loadingIndicator
                        })]
                    })
                },
                L = e => {
                    let {
                        shouldAnimate: t,
                        size: s,
                        sticker: i,
                        fileUri: l,
                        assetData: c,
                        isFocused: o,
                        className: d,
                        maskAsset: f,
                        positionRef: E,
                        withLoadingIndicator: h,
                        onError: m
                    } = e, S = a.useRef(null), N = a.useRef(null), [g, x] = a.useState(!0), [A, R] = a.useState(!1), L = a.useRef(!1);
                    L.current = t && o;
                    let V = null == l ? (0, C.getStickerAssetUrl)(i) : l;
                    return (u(null != V, "Unable to determine sticker asset URL. Sticker ID: ".concat(i.id)), a.useEffect(() => {
                        if (null == S.current || null == V) return;
                        let e = Math.min(2, (0, v.getDevicePixelRatio)());
                        S.current.width = s * e, S.current.height = s * e;
                        let t = !1,
                            r = async () => {
                                let {
                                    default: e
                                } = await n.el("619596").then(n.bind(n, "619596"));
                                null != S.current && (N.current = new e({
                                    canvas: S.current,
                                    animationId: i.id,
                                    assetUrl: V,
                                    assetData: c,
                                    onInitialDraw: () => {
                                        !t && x(!1)
                                    },
                                    onError: () => {
                                        !t && (x(!1), R(!0), null == m || m())
                                    }
                                }), L.current && N.current.setState(!0))
                            };
                        return r(), () => {
                            var e;
                            null === (e = N.current) || void 0 === e || e.drop(), N.current = null, t = !0
                        }
                    }, [V, s, i.id, c, m]), a.useEffect(() => {
                        var e;
                        let n;
                        !t && (n = 0), null === (e = N.current) || void 0 === e || e.setState(t && o, n)
                    }, [i, t, o]), null == V) ? null : (0, r.jsx)("div", {
                        role: "img",
                        className: d,
                        "aria-label": A ? I.default.Messages.ERROR_LOADING_STICKER : M(i),
                        ref: E,
                        children: (0, r.jsx)(T, {
                            hasError: A,
                            isLoading: g,
                            maskAsset: f,
                            size: s,
                            withLoadingIndicator: h,
                            children: _((0, r.jsx)("canvas", {
                                className: p.lottieCanvas,
                                ref: S
                            }), i.id)
                        })
                    })
                },
                V = e => {
                    let {
                        shouldAnimate: t,
                        sticker: n,
                        isFocused: s,
                        size: l,
                        className: u,
                        maskAsset: c,
                        positionRef: o,
                        withLoadingIndicator: f,
                        fileUri: E
                    } = e, [v, h] = a.useState(!1), [m, S] = a.useState(!0), [N, g] = a.useState(!1), I = a.useRef(null), A = a.useRef(null), R = null != E ? E : (0, C.getStickerAssetUrl)(n, {
                        isPreview: !t || !v || !s,
                        size: l
                    }), L = a.useCallback(() => {
                        S(!1)
                    }, []), V = a.useCallback(() => {
                        g(!0)
                    }, []);
                    return (a.useEffect(() => {
                        if (null != I.current) {
                            let {
                                isVisible: e
                            } = I.current;
                            h(e)
                        }
                    }, []), a.useLayoutEffect(() => {
                        var e;
                        (null === (e = A.current) || void 0 === e ? void 0 : e.complete) === !0 && S(!1)
                    }, []), null == R) ? null : (0, r.jsx)(d.VisibilitySensor, {
                        ref: I,
                        onChange: h,
                        threshold: .7,
                        children: (0, r.jsx)("div", {
                            className: i(u, p.pngImageWrapper),
                            ref: o,
                            children: (0, r.jsx)(T, {
                                hasError: N,
                                isLoading: m,
                                maskAsset: c,
                                size: l,
                                withLoadingIndicator: f,
                                children: _((0, r.jsx)("img", {
                                    className: p.pngImage,
                                    alt: M(n),
                                    src: R,
                                    draggable: !1,
                                    onError: V,
                                    onLoad: L,
                                    onContextMenu: x,
                                    ref: A
                                }), n.id)
                            })
                        })
                    })
                },
                j = e => {
                    let {
                        disableAnimation: t,
                        enlargeScaleFactor: n,
                        enlargeWithName: s,
                        isInteracting: i,
                        positionRef: l,
                        size: u,
                        sticker: d
                    } = e, v = (0, o.useStateFromStores)([E.default], () => E.default.useReducedMotion), h = a.useRef(null), S = {
                        transform: "scale(".concat(v ? 1 : 1 / n, ")"),
                        opacity: 0
                    }, N = (0, c.useTransition)(i, {
                        ref: h,
                        from: S,
                        enter: {
                            transform: "scale(1)",
                            opacity: 1
                        },
                        leave: S,
                        config: A
                    }), g = a.useRef(null), C = (0, c.useSpring)({
                        ref: g,
                        transform: i || v ? "translateY(0)" : "translateY(-25px)",
                        opacity: i ? 1 : 0,
                        config: R
                    });
                    return (0, c.useChain)(i ? [h, g] : [g, h], i ? [0, .0625] : [0, 0]), N((e, a) => a && (0, r.jsx)(m.AppReferencePositionLayer, {
                        className: p.positionedLayer,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        reference: l,
                        children: () => (0, r.jsxs)("div", {
                            className: p.overlayWrapper,
                            children: [(0, r.jsx)(c.animated.div, {
                                className: p.overlayStickerWrapper,
                                style: e,
                                children: (0, r.jsx)(w, {
                                    className: p.overlaySticker,
                                    disableAnimation: t,
                                    enlargeOnInteraction: !1,
                                    isInteracting: i,
                                    maskAsset: !1,
                                    sticker: d,
                                    size: Math.round(u * n),
                                    withLoadingIndicator: !1
                                })
                            }), s && (0, r.jsx)(c.animated.div, {
                                className: p.overlayLabelWrapper,
                                style: C,
                                children: (0, r.jsx)(f.Text, {
                                    variant: "text-sm/medium",
                                    className: p.overlayLabel,
                                    children: d.name
                                })
                            })]
                        })
                    }))
                },
                w = e => {
                    let {
                        isInteracting: t = !1,
                        disableAnimation: n = !1,
                        enlargeOnInteraction: s = !1,
                        enlargeWithName: i = !0,
                        enlargeScaleFactor: l = 1.55,
                        maskAsset: u = !1,
                        size: c,
                        sticker: o,
                        className: d,
                        withLoadingIndicator: f,
                        assetData: E,
                        fileUri: v,
                        onError: h
                    } = e, m = (0, S.useIsWindowFocused)(), C = (0, N.useShouldAnimateSticker)(t) && !n, I = a.useRef(null);
                    if (null == o) return null;
                    let p = o.format_type === g.StickerFormat.LOTTIE ? L : V;
                    return (0, r.jsxs)(a.Fragment, {
                        children: [(0, r.jsx)(p, {
                            shouldAnimate: C,
                            isFocused: m,
                            size: c,
                            sticker: o,
                            className: d,
                            maskAsset: u,
                            positionRef: I,
                            withLoadingIndicator: f,
                            assetData: E,
                            fileUri: v,
                            onError: h
                        }), s && (0, r.jsx)(j, {
                            disableAnimation: n,
                            enlargeScaleFactor: l,
                            enlargeWithName: i,
                            isInteracting: t,
                            positionRef: I,
                            size: c,
                            sticker: o
                        })]
                    }, "".concat(o.id, ",").concat(c))
                };
            var G = w