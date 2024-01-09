            "use strict";
            n.r(t), n.d(t, {
                ModalSize: function() {
                    return r
                },
                ModalRoot: function() {
                    return R
                },
                ModalHeader: function() {
                    return O
                },
                ModalContent: function() {
                    return L
                },
                ModalFooter: function() {
                    return y
                },
                ModalCloseButton: function() {
                    return D
                },
                ModalListContent: function() {
                    return P
                }
            });
            var i, r, o = n("37983"),
                s = n("884691"),
                l = n("414456"),
                a = n.n(l),
                u = n("907002"),
                c = n("759843"),
                d = n("458960"),
                _ = n("413197"),
                f = n("271841"),
                E = n("130969"),
                S = n("718776"),
                g = n("860226"),
                h = n("433600"),
                m = n("446662"),
                p = n("145131"),
                I = n("945330"),
                T = n("625611"),
                v = n("843455"),
                A = n("782340"),
                N = n("760021");
            (i = r || (r = {})).SMALL = "small", i.MEDIUM = "medium", i.LARGE = "large", i.DYNAMIC = "dynamic";
            let C = Object.freeze({
                small: N.small,
                medium: N.medium,
                large: N.large,
                dynamic: null
            });

            function R(e) {
                var t;
                let {
                    transitionState: n,
                    children: i,
                    size: r = "small",
                    role: l = "dialog",
                    className: f,
                    fullscreenOnMobile: g = !0,
                    hideShadow: h = !1,
                    onAnimationEnd: m = v.NOOP,
                    returnRef: p,
                    ...I
                } = e, A = n === T.ModalTransitionState.ENTERING || n === T.ModalTransitionState.ENTERED, {
                    reducedMotion: R
                } = s.useContext(_.AccessibilityPreferencesContext), O = (0, u.useSpring)({
                    opacity: A ? 1 : 0,
                    transform: A || R.enabled ? "scale(1)" : "scale(0.7)",
                    config: {
                        duration: A ? 300 : 100,
                        easing: A ? d.default.Easing.inOut(d.default.Easing.back()) : d.default.Easing.quad,
                        clamp: !0
                    },
                    onRest: m
                }), L = s.useRef(null), y = null != I["aria-label"], D = null != I["aria-labelledby"], P = s.useId(), M = null !== (t = I["aria-labelledby"]) && void 0 !== t ? t : P, U = s.useMemo(() => ({
                    headerId: M,
                    headerIdIsManaged: D
                }), [M, D]);
                return (0, o.jsx)(T.ModalContentContext.Provider, {
                    value: U,
                    children: (0, o.jsx)(E.Dialog, {
                        className: N.focusLock,
                        role: l,
                        returnRef: p,
                        impressionType: c.ImpressionTypes.MODAL,
                        "aria-labelledby": y ? void 0 : U.headerId,
                        ...I,
                        children: (0, o.jsx)(u.animated.div, {
                            className: a(f, N.root, C[r], {
                                [N.fullscreenOnMobile]: g,
                                [N.rootWithShadow]: !h
                            }),
                            ref: L,
                            style: O,
                            children: (0, o.jsx)(S.FocusRingScope, {
                                containerRef: L,
                                children: i
                            })
                        })
                    })
                })
            }

            function O(e) {
                var t, n, i, r, l;
                let {
                    headerId: u,
                    headerIdIsManaged: c
                } = s.useContext(T.ModalContentContext);
                return (0, o.jsx)(p.default, {
                    grow: 0,
                    shrink: 0,
                    direction: null !== (t = e.direction) && void 0 !== t ? t : p.default.Direction.HORIZONTAL,
                    justify: null !== (n = e.justify) && void 0 !== n ? n : p.default.Justify.START,
                    align: null !== (i = e.align) && void 0 !== i ? i : p.default.Align.CENTER,
                    wrap: null !== (r = e.wrap) && void 0 !== r ? r : p.default.Wrap.NO_WRAP,
                    className: a(N.header, e.className, {
                        [N.separator]: null === (l = e.separator) || void 0 === l || l
                    }),
                    id: c ? void 0 : u,
                    children: e.children
                })
            }

            function L(e) {
                let {
                    className: t,
                    children: n,
                    scrollerRef: i,
                    scrollbarType: r,
                    ...s
                } = e, l = function(e) {
                    switch (null != e ? e : "thin") {
                        case "auto":
                            return m.AdvancedScrollerAuto;
                        case "none":
                            return m.AdvancedScrollerNone;
                        default:
                            return m.AdvancedScrollerThin
                    }
                }(r);
                return (0, o.jsx)(l, {
                    className: a(N.content, t),
                    ref: i,
                    ...s,
                    children: (0, o.jsx)(g.HeadingLevel, {
                        children: n
                    })
                })
            }

            function y(e) {
                var t, n, i, r, s;
                return (0, o.jsx)(p.default, {
                    grow: 0,
                    shrink: 0,
                    direction: null !== (t = e.direction) && void 0 !== t ? t : p.default.Direction.HORIZONTAL_REVERSE,
                    justify: null !== (n = e.justify) && void 0 !== n ? n : p.default.Justify.START,
                    align: null !== (i = e.align) && void 0 !== i ? i : p.default.Align.STRETCH,
                    wrap: null !== (r = e.wrap) && void 0 !== r ? r : p.default.Wrap.NO_WRAP,
                    className: a(N.footer, e.className, {
                        [N.footerSeparator]: null === (s = e.separator) || void 0 === s || s
                    }),
                    children: (0, o.jsx)(g.HeadingLevel, {
                        children: e.children
                    })
                })
            }

            function D(e) {
                return (0, o.jsx)(f.Button, {
                    focusProps: e.focusProps,
                    "aria-label": A.default.Messages.CLOSE,
                    look: f.Button.Looks.BLANK,
                    size: f.Button.Sizes.NONE,
                    onClick: e.onClick,
                    innerClassName: a({
                        [N.closeWithCircleBackground]: e.withCircleBackground
                    }),
                    className: a(e.className, {
                        [N.hideOnFullscreen]: e.hideOnFullscreen,
                        [N.close]: !e.withCircleBackground
                    }),
                    children: (0, o.jsx)(I.default, {
                        width: 24,
                        height: 24,
                        className: N.closeIcon
                    })
                })
            }

            function P(e) {
                let {
                    className: t,
                    scrollerRef: n,
                    ...i
                } = e;
                return (0, o.jsx)(h.ListThin, {
                    className: t,
                    ref: n,
                    ...i
                })
            }