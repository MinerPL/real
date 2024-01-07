            "use strict";
            n.r(t), n.d(t, {
                ModalSize: function() {
                    return r
                },
                ModalRoot: function() {
                    return O
                },
                ModalHeader: function() {
                    return L
                },
                ModalContent: function() {
                    return D
                },
                ModalFooter: function() {
                    return y
                },
                ModalCloseButton: function() {
                    return P
                },
                ModalListContent: function() {
                    return M
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
                S = n("311720"),
                g = n("718776"),
                h = n("860226"),
                m = n("433600"),
                p = n("446662"),
                T = n("145131"),
                I = n("945330"),
                A = n("625611"),
                v = n("843455"),
                N = n("782340"),
                C = n("760021");
            (i = r || (r = {})).SMALL = "small", i.MEDIUM = "medium", i.LARGE = "large", i.DYNAMIC = "dynamic";
            let R = Object.freeze({
                small: C.small,
                medium: C.medium,
                large: C.large,
                dynamic: null
            });

            function O(e) {
                var t;
                let {
                    transitionState: n,
                    children: i,
                    size: r = "small",
                    role: l = "dialog",
                    className: f,
                    fullscreenOnMobile: h = !0,
                    hideShadow: m = !1,
                    onAnimationEnd: p = v.NOOP,
                    returnRef: T,
                    ...I
                } = e, N = n === A.ModalTransitionState.ENTERING || n === A.ModalTransitionState.ENTERED, {
                    reducedMotion: O
                } = s.useContext(_.AccessibilityPreferencesContext), L = (0, u.useSpring)({
                    opacity: N ? 1 : 0,
                    transform: N || O.enabled ? "scale(1)" : "scale(0.7)",
                    config: {
                        duration: N ? 300 : 100,
                        easing: N ? d.default.Easing.inOut(d.default.Easing.back()) : d.default.Easing.quad,
                        clamp: !0
                    },
                    onRest: p
                }), D = s.createRef();
                (0, S.useFocusLock)(D, {
                    returnRef: T
                });
                let y = s.useRef(null),
                    P = null != I["aria-label"],
                    M = null != I["aria-labelledby"],
                    U = s.useId(),
                    w = null !== (t = I["aria-labelledby"]) && void 0 !== t ? t : U,
                    b = s.useMemo(() => ({
                        headerId: w,
                        headerIdIsManaged: M
                    }), [w, M]);
                return (0, o.jsx)(A.ModalContentContext.Provider, {
                    value: b,
                    children: (0, o.jsx)(E.Dialog, {
                        className: C.focusLock,
                        role: l,
                        returnRef: T,
                        impressionType: c.ImpressionTypes.MODAL,
                        "aria-labelledby": P ? void 0 : b.headerId,
                        ...I,
                        children: (0, o.jsx)(u.animated.div, {
                            className: a(f, C.root, R[r], {
                                [C.fullscreenOnMobile]: h,
                                [C.rootWithShadow]: !m
                            }),
                            ref: y,
                            style: L,
                            children: (0, o.jsx)(g.FocusRingScope, {
                                containerRef: y,
                                children: i
                            })
                        })
                    })
                })
            }

            function L(e) {
                var t, n, i, r, l;
                let {
                    headerId: u,
                    headerIdIsManaged: c
                } = s.useContext(A.ModalContentContext);
                return (0, o.jsx)(T.default, {
                    grow: 0,
                    shrink: 0,
                    direction: null !== (t = e.direction) && void 0 !== t ? t : T.default.Direction.HORIZONTAL,
                    justify: null !== (n = e.justify) && void 0 !== n ? n : T.default.Justify.START,
                    align: null !== (i = e.align) && void 0 !== i ? i : T.default.Align.CENTER,
                    wrap: null !== (r = e.wrap) && void 0 !== r ? r : T.default.Wrap.NO_WRAP,
                    className: a(C.header, e.className, {
                        [C.separator]: null === (l = e.separator) || void 0 === l || l
                    }),
                    id: c ? void 0 : u,
                    children: e.children
                })
            }

            function D(e) {
                let {
                    className: t,
                    children: n,
                    scrollerRef: i,
                    scrollbarType: r,
                    ...s
                } = e, l = function(e) {
                    switch (null != e ? e : "thin") {
                        case "auto":
                            return p.AdvancedScrollerAuto;
                        case "none":
                            return p.AdvancedScrollerNone;
                        default:
                            return p.AdvancedScrollerThin
                    }
                }(r);
                return (0, o.jsx)(l, {
                    className: a(C.content, t),
                    ref: i,
                    ...s,
                    children: (0, o.jsx)(h.HeadingLevel, {
                        children: n
                    })
                })
            }

            function y(e) {
                var t, n, i, r, s;
                return (0, o.jsx)(T.default, {
                    grow: 0,
                    shrink: 0,
                    direction: null !== (t = e.direction) && void 0 !== t ? t : T.default.Direction.HORIZONTAL_REVERSE,
                    justify: null !== (n = e.justify) && void 0 !== n ? n : T.default.Justify.START,
                    align: null !== (i = e.align) && void 0 !== i ? i : T.default.Align.STRETCH,
                    wrap: null !== (r = e.wrap) && void 0 !== r ? r : T.default.Wrap.NO_WRAP,
                    className: a(C.footer, e.className, {
                        [C.footerSeparator]: null === (s = e.separator) || void 0 === s || s
                    }),
                    children: (0, o.jsx)(h.HeadingLevel, {
                        children: e.children
                    })
                })
            }

            function P(e) {
                return (0, o.jsx)(f.Button, {
                    focusProps: e.focusProps,
                    "aria-label": N.default.Messages.CLOSE,
                    look: f.Button.Looks.BLANK,
                    size: f.Button.Sizes.NONE,
                    onClick: e.onClick,
                    innerClassName: a({
                        [C.closeWithCircleBackground]: e.withCircleBackground
                    }),
                    className: a(e.className, {
                        [C.hideOnFullscreen]: e.hideOnFullscreen,
                        [C.close]: !e.withCircleBackground
                    }),
                    children: (0, o.jsx)(I.default, {
                        width: 24,
                        height: 24,
                        className: C.closeIcon
                    })
                })
            }

            function M(e) {
                let {
                    className: t,
                    scrollerRef: n,
                    ...i
                } = e;
                return (0, o.jsx)(m.ListThin, {
                    className: t,
                    ref: n,
                    ...i
                })
            }