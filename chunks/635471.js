            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return A
                }
            }), r("222007");
            var n = r("37983"),
                i = r("884691"),
                u = r("414456"),
                l = r.n(u),
                o = r("446674"),
                a = r("206230"),
                s = r("471671"),
                d = r("76047"),
                c = r("859498"),
                f = r("687682"),
                E = r("525808"),
                _ = r("465523"),
                p = r("417675"),
                T = r("188645"),
                y = r("260742");
            let S = e => {
                    let {
                        bannerAdjustment: t = 0,
                        maxLoops: r,
                        resetOnHover: u = !1,
                        isHovering: o = !1,
                        useOpacityOnHover: a = !0,
                        autoPlay: s = !0,
                        restartMethod: _,
                        urlQueryString: T,
                        profileEffectConfig: S,
                        noBorderRadius: I = !1,
                        introDelay: A = d.ENTRY_DELAY
                    } = e, C = i.useRef(null), [m, L] = i.useState([]);
                    (0, p.default)(S);
                    let [D, R] = i.useState(0), [h, g] = i.useState(0), {
                        accessibilityLabel: v
                    } = S, [P, F] = i.useState(-A), {
                        stop: N,
                        reset: Y,
                        ticking: b
                    } = (0, f.default)(e => {
                        F(t => t + e)
                    });
                    i.useEffect(() => {
                        F(-A), L((0, E.sortEffectLayers)(S.effects))
                    }, [S]), i.useEffect(() => {
                        let e = 0,
                            t = 1 / 0;
                        m.forEach(r => {
                            let n = r.start + r.duration;
                            n > e && (e = n), r.loop && r.start < t && (t = r.start)
                        }), R(t), g(e)
                    }, [g, m]);
                    let [G, U] = i.useState(!1);
                    return i.useEffect(() => {
                        !0 !== s && !o && (N(), F(0)), !o && G && b.current && (N(), F(0)), u && o && !b.current && (Y(), S.animationType === c.AnimationTypes.PERSISTENT ? F(_ === c.RestartMethod.FromStart ? 0 : D) : F(0))
                    }, [o, G, D, u, N, Y, b, S.animationType, s, _]), (0, n.jsx)("div", {
                        ref: C,
                        className: l(y.profileEffects, {
                            [y.hovered]: o && a
                        }),
                        children: (0, n.jsx)("div", {
                            className: I ? y.innerNoRadius : y.inner,
                            children: m.map((e, i) => {
                                var u, l, o, a, f, E, _, p;
                                if (!b.current) {
                                    if (S.animationType === c.AnimationTypes.PERSISTENT && null != S.staticFrameSrc && 0 === i && !0 === s) {
                                        let {
                                            staticFrameSrc: r
                                        } = S;
                                        return (0, n.jsx)("img", {
                                            className: y.effect,
                                            style: {
                                                top: null !== (f = null === (o = e.position) || void 0 === o ? void 0 : o.y) && void 0 !== f ? f : 0 - t,
                                                left: null !== (E = null === (a = e.position) || void 0 === a ? void 0 : a.x) && void 0 !== E ? E : 0
                                            },
                                            src: r,
                                            alt: v
                                        }, e.src + i)
                                    }
                                    return (0, n.jsx)("img", {
                                        src: d.RESET,
                                        alt: v
                                    }, e.src + i)
                                }
                                if (P < e.start || !e.loop && P > e.duration + e.start) return (0, n.jsx)("img", {
                                    src: d.RESET,
                                    alt: v
                                }, e.src + i);
                                if (S.animationType === c.AnimationTypes.PERSISTENT && !G && null != r && P >= h && U(!0), e.loop && void 0 !== e.loopDelay && e.loopDelay > 0) {
                                    let t = e.duration + e.loopDelay,
                                        u = Math.floor((P - e.start) / t);
                                    if (P - e.start - u * t > e.duration) return S.animationType === c.AnimationTypes.INTERMITTENT && !G && null != r && u >= r && U(!0), (0, n.jsx)("img", {
                                        src: d.RESET,
                                        alt: v
                                    }, e.src + i)
                                }
                                return (0, n.jsx)("img", {
                                    src: null != T ? "".concat(e.src, "?query=").concat(T) : e.src,
                                    className: y.effect,
                                    style: {
                                        top: (null !== (_ = null === (u = e.position) || void 0 === u ? void 0 : u.y) && void 0 !== _ ? _ : 0) - t,
                                        left: null !== (p = null === (l = e.position) || void 0 === l ? void 0 : l.x) && void 0 !== p ? p : 0
                                    },
                                    alt: v
                                }, e.src + i)
                            })
                        })
                    })
                },
                I = e => {
                    let {
                        config: t,
                        useThumbnail: r,
                        bannerAdjustment: i = 0,
                        noBorderRadius: u,
                        isHovering: o = !1,
                        useOpacityOnHover: a = !0
                    } = e, {
                        reducedMotionSrc: s,
                        thumbnailPreviewSrc: d,
                        accessibilityLabel: c
                    } = t;
                    return (0, n.jsx)("div", {
                        className: l(y.profileEffects, {
                            [y.hovered]: o && a
                        }),
                        children: (0, n.jsx)("div", {
                            className: u ? y.innerNoRadius : y.inner,
                            children: (0, n.jsx)("img", {
                                src: r && !o ? d : s,
                                className: y.effect,
                                style: {
                                    top: 0 - i
                                },
                                alt: c
                            })
                        })
                    })
                };
            var A = e => {
                let t = (0, o.useStateFromStores)([s.default], () => s.default.isFocused()),
                    r = (0, o.useStateFromStores)([a.default], () => a.default.useReducedMotion),
                    [u, l] = i.useState(!1),
                    {
                        preset: d
                    } = (0, T.default)(e.profileEffectId, () => l(!1));
                return null != d && (t || d.config.animationType === c.AnimationTypes.PERSISTENT) ? !t && d.config.animationType === c.AnimationTypes.PERSISTENT || r || !1 === e.autoPlay && !1 === e.isHovering ? (0, n.jsx)(I, {
                    useThumbnail: e.useThumbnail,
                    config: d.config,
                    bannerAdjustment: e.bannerAdjustment,
                    noBorderRadius: e.noBorderRadius,
                    isHovering: e.isHovering,
                    useOpacityOnHover: e.useOpacityOnHover
                }) : u ? (0, n.jsx)(S, {
                    profileEffectConfig: d.config,
                    ...e
                }) : (0, n.jsx)(_.default, {
                    profileEffectConfig: d.config,
                    onReady: () => {
                        l(!0)
                    }
                }) : null
            }