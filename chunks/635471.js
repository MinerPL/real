            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                u = n("414456"),
                l = n.n(u),
                o = n("446674"),
                a = n("206230"),
                f = n("471671"),
                s = n("662286"),
                c = n("76047"),
                d = n("859498"),
                E = n("687682"),
                _ = n("525808"),
                p = n("465523"),
                T = n("417675"),
                y = n("188645"),
                S = n("260742");
            let I = e => {
                    let {
                        bannerAdjustment: t = 0,
                        maxLoops: n,
                        resetOnHover: u = !1,
                        isHovering: o = !1,
                        useOpacityOnHover: a = !0,
                        autoPlay: f = !0,
                        restartMethod: s,
                        urlQueryString: p,
                        profileEffectConfig: y,
                        noBorderRadius: I = !1,
                        introDelay: C = c.ENTRY_DELAY
                    } = e, A = i.useRef(null), [m, L] = i.useState([]);
                    (0, T.default)(y);
                    let [g, D] = i.useState(0), [R, h] = i.useState(0), {
                        accessibilityLabel: P
                    } = y, [v, F] = i.useState(-C), {
                        stop: N,
                        reset: b,
                        ticking: U
                    } = (0, E.default)(e => {
                        F(t => t + e)
                    });
                    i.useEffect(() => {
                        F(-C), L((0, _.sortEffectLayers)(y.effects))
                    }, [y]), i.useEffect(() => {
                        let e = 0,
                            t = 1 / 0;
                        m.forEach(n => {
                            let r = n.start + n.duration;
                            r > e && (e = r), n.loop && n.start < t && (t = n.start)
                        }), D(t), h(e)
                    }, [h, m]);
                    let [Y, G] = i.useState(!1);
                    return i.useEffect(() => {
                        !0 !== f && !o && (N(), F(0)), !o && Y && U.current && (N(), F(0)), u && o && !U.current && (b(), y.animationType === d.AnimationTypes.PERSISTENT ? F(s === d.RestartMethod.FromStart ? 0 : g) : F(0))
                    }, [o, Y, g, u, N, b, U, y.animationType, f, s]), (0, r.jsx)("div", {
                        ref: A,
                        className: l(S.profileEffects, {
                            [S.hovered]: o && a
                        }),
                        children: (0, r.jsx)("div", {
                            className: I ? S.innerNoRadius : S.inner,
                            children: m.map((e, i) => {
                                var u, l, o, a, s, E, _, T;
                                if (!U.current) {
                                    if (y.animationType === d.AnimationTypes.PERSISTENT && null != y.staticFrameSrc && 0 === i && !0 === f) {
                                        let {
                                            staticFrameSrc: n
                                        } = y;
                                        return (0, r.jsx)("img", {
                                            className: S.effect,
                                            style: {
                                                top: null !== (s = null === (o = e.position) || void 0 === o ? void 0 : o.y) && void 0 !== s ? s : 0 - t,
                                                left: null !== (E = null === (a = e.position) || void 0 === a ? void 0 : a.x) && void 0 !== E ? E : 0
                                            },
                                            src: n,
                                            alt: P
                                        }, e.src + i)
                                    }
                                    return (0, r.jsx)("img", {
                                        src: c.RESET,
                                        alt: P
                                    }, e.src + i)
                                }
                                if (v < e.start || !e.loop && v > e.duration + e.start) return (0, r.jsx)("img", {
                                    src: c.RESET,
                                    alt: P
                                }, e.src + i);
                                if (y.animationType === d.AnimationTypes.PERSISTENT && !Y && null != n && v >= R && G(!0), e.loop && void 0 !== e.loopDelay && e.loopDelay > 0) {
                                    let t = e.duration + e.loopDelay,
                                        u = Math.floor((v - e.start) / t);
                                    if (v - e.start - u * t > e.duration) return y.animationType === d.AnimationTypes.INTERMITTENT && !Y && null != n && u >= n && G(!0), (0, r.jsx)("img", {
                                        src: c.RESET,
                                        alt: P
                                    }, e.src + i)
                                }
                                return (0, r.jsx)("img", {
                                    src: null != p ? "".concat(e.src, "?query=").concat(p) : e.src,
                                    className: S.effect,
                                    style: {
                                        top: (null !== (_ = null === (u = e.position) || void 0 === u ? void 0 : u.y) && void 0 !== _ ? _ : 0) - t,
                                        left: null !== (T = null === (l = e.position) || void 0 === l ? void 0 : l.x) && void 0 !== T ? T : 0
                                    },
                                    alt: P
                                }, e.src + i)
                            })
                        })
                    })
                },
                C = e => {
                    let {
                        config: t,
                        useThumbnail: n,
                        bannerAdjustment: i = 0,
                        noBorderRadius: u,
                        isHovering: o = !1,
                        useOpacityOnHover: a = !0
                    } = e, {
                        reducedMotionSrc: f,
                        thumbnailPreviewSrc: s,
                        accessibilityLabel: c
                    } = t;
                    return (0, r.jsx)("div", {
                        className: l(S.profileEffects, {
                            [S.hovered]: o && a
                        }),
                        children: (0, r.jsx)("div", {
                            className: u ? S.innerNoRadius : S.inner,
                            children: (0, r.jsx)("img", {
                                src: n && !o ? s : f,
                                className: S.effect,
                                style: {
                                    top: 0 - i
                                },
                                alt: c
                            })
                        })
                    })
                };
            var A = e => {
                let t = (0, s.useCanUseProfileEffects)({
                        location: "WebWrappedProfileEffect"
                    }),
                    n = (0, o.useStateFromStores)([f.default], () => f.default.isFocused()),
                    u = (0, o.useStateFromStores)([a.default], () => a.default.useReducedMotion),
                    [l, c] = i.useState(!1),
                    {
                        preset: E
                    } = (0, y.default)(e.profileEffectId, () => c(!1));
                return t && null != E && (n || E.config.animationType === d.AnimationTypes.PERSISTENT) ? !n && E.config.animationType === d.AnimationTypes.PERSISTENT || u || !1 === e.autoPlay && !1 === e.isHovering ? (0, r.jsx)(C, {
                    useThumbnail: e.useThumbnail,
                    config: E.config,
                    bannerAdjustment: e.bannerAdjustment,
                    noBorderRadius: e.noBorderRadius,
                    isHovering: e.isHovering,
                    useOpacityOnHover: e.useOpacityOnHover
                }) : l ? (0, r.jsx)(I, {
                    profileEffectConfig: E.config,
                    ...e
                }) : (0, r.jsx)(p.default, {
                    profileEffectConfig: E.config,
                    onReady: () => {
                        c(!0)
                    }
                }) : null
            }