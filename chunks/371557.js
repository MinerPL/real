            "use strict";
            n.r(t), n.d(t, {
                ToastContainer: function() {
                    return h
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("907002"),
                a = n("446674"),
                o = n("206230"),
                l = n("35672"),
                u = n("325236"),
                c = n("159350"),
                d = n("640880");
            let f = {
                    duration: 300,
                    friction: 24,
                    tension: 280
                },
                E = {
                    [c.ToastPosition.TOP]: {
                        styles: d.containerTop,
                        transition: {
                            trail: 400,
                            from: {
                                transform: "translate3d(0, -100%, 0)",
                                opacity: 0,
                                config: f
                            },
                            enter: {
                                transform: "translate3d(0, -0px, 0)",
                                opacity: 1,
                                config: f
                            },
                            leave: {
                                transform: "translate3d(0, -100%, 0)",
                                opacity: 0,
                                config: {
                                    ...f,
                                    friction: 40,
                                    clamp: !0
                                }
                            }
                        }
                    },
                    [c.ToastPosition.BOTTOM]: {
                        styles: d.containerBottom,
                        transition: {
                            trail: 400,
                            from: {
                                transform: "translate3d(0, 100%, 0)",
                                opacity: 0,
                                config: f
                            },
                            enter: {
                                transform: "translate3d(0, 0px, 0)",
                                opacity: 1,
                                config: f
                            },
                            leave: {
                                transform: "translate3d(0, 100%, 0)",
                                opacity: 0,
                                config: {
                                    ...f,
                                    friction: 40,
                                    clamp: !0
                                }
                            }
                        }
                    }
                };

            function h() {
                var e, t, n, d;
                let f = (0, u.useToastStore)(e => e.currentToast),
                    h = r.useRef(null !== (n = null == f ? void 0 : null === (e = f.options) || void 0 === e ? void 0 : e.position) && void 0 !== n ? n : c.TOAST_DEFAULT_OPTIONS.position),
                    p = r.useRef(null !== (d = null == f ? void 0 : null === (t = f.options) || void 0 === t ? void 0 : t.duration) && void 0 !== d ? d : c.TOAST_DEFAULT_OPTIONS.duration),
                    _ = (0, a.useStateFromStores)([o.default], () => o.default.useReducedMotion);
                r.useEffect(() => {
                    if (null != f) {
                        var e, t, n, i;
                        h.current = null !== (n = null === (e = f.options) || void 0 === e ? void 0 : e.position) && void 0 !== n ? n : c.TOAST_DEFAULT_OPTIONS.position, p.current = null !== (i = null === (t = f.options) || void 0 === t ? void 0 : t.duration) && void 0 !== i ? i : c.TOAST_DEFAULT_OPTIONS.duration
                    }
                }, [f]);
                let S = r.useMemo(() => {
                        var e, t;
                        return E[null !== (t = null == f ? void 0 : null === (e = f.options) || void 0 === e ? void 0 : e.position) && void 0 !== t ? t : h.current]
                    }, [f]),
                    m = (0, s.useTransition)(f, {
                        keys: e => {
                            var t;
                            return null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : ""
                        },
                        immediate: _,
                        ...S.transition
                    });
                return r.useEffect(() => {
                    null != f && setTimeout(() => {
                        (0, u.popToast)()
                    }, p.current)
                }, [f]), (0, i.jsx)("div", {
                    className: S.styles,
                    children: m((e, t) => null === t ? null : (0, i.jsx)(s.animated.div, {
                        style: e,
                        children: (0, i.jsx)(l.Toast, {
                            ...t
                        })
                    }, t.id))
                })
            }