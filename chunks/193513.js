            "use strict";
            i.r(t), i.d(t, {
                ImageLoadingOverlay: function() {
                    return m
                }
            }), i("222007"), i("311790"), i("477657"), i("811875"), i("90301"), i("652153"), i("28797"), i("817884"), i("597349"), i("667536"), i("690341"), i("492311"), i("101997");
            var n = i("37983"),
                s = i("884691"),
                a = i("907002"),
                l = i("723251"),
                r = i("77078"),
                u = i("504439"),
                o = i("49111"),
                c = i("151739");
            let d = {
                    from: {
                        opacity: 1
                    },
                    enter: {
                        opacity: 1
                    },
                    leave: {
                        opacity: 0
                    },
                    config: {
                        duration: 200
                    }
                },
                f = {
                    ...d,
                    config: {
                        duration: 50
                    }
                },
                p = {
                    ...d,
                    config: (e, t) => t ? {
                        duration: 800
                    } : {
                        duration: 200
                    }
                };

            function m(e) {
                let {
                    readyState: t,
                    aspectRatio: i,
                    placeholder: m,
                    placeholderVersion: I,
                    placeholderStyle: T,
                    children: g
                } = e, h = t === o.ImageReadyStates.LOADING, [S] = s.useState(() => Date.now()), [E] = s.useState(h), [N, _] = s.useState(!1), y = s.useMemo(() => {
                    if (E && 1 === I && null != m) {
                        let e = Uint8Array.from(atob(m), e => e.charCodeAt(0)),
                            t = (0, u.thumbHashToRGBA)(e, {
                                detail: 1,
                                pop: 1.1
                            }),
                            i = (0, l.rgbaToDataURL)(t.w, t.h, t.rgba);
                        return i
                    }
                }, [E, m, I]);
                s.useEffect(() => {
                    let e = setTimeout(() => {
                        _(!0)
                    }, 2e3);
                    return () => {
                        clearTimeout(e)
                    }
                }, [E]);
                let b = t === o.ImageReadyStates.READY && Date.now() - S < 200,
                    A = (0, a.useTransition)(h && null != y, b ? f : d),
                    R = (0, a.useTransition)(h && N, p);
                return (0, n.jsxs)("div", {
                    className: c.loadingOverlay,
                    style: {
                        aspectRatio: i
                    },
                    children: [g, A((e, t) => t && (0, n.jsx)(a.animated.img, {
                        style: {
                            ...T,
                            ...e
                        },
                        className: c.imagePlaceholder,
                        src: y,
                        alt: ""
                    })), R((e, t) => t && (0, n.jsx)(a.animated.div, {
                        style: e,
                        className: c.imageLoadingOverlay,
                        children: (0, n.jsx)(r.Spinner, {
                            type: r.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                            className: c.cornerLoadingSpinner
                        })
                    }))]
                })
            }