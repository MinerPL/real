            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                o = n("77078"),
                u = n("206230"),
                d = n("806135"),
                c = n("170113"),
                m = n("316680"),
                f = n("830837"),
                h = n("132755"),
                p = n("659500"),
                g = n("829536"),
                E = n("534107"),
                v = n("49111"),
                C = n("782340"),
                I = n("447946");
            let x = a.lazy(() => n.el("403130").then(n.bind(n, "403130")));

            function _(e) {
                let {
                    played: t,
                    duration: n,
                    currentTime: a
                } = e, s = null == n ? "--:--" : t ? (0, c.convertSecondsToClockFormat)(Math.ceil(n - a)) : (0, c.convertSecondsToClockFormat)(Math.ceil(n));
                return (0, l.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    className: I.duration,
                    tabularNumbers: !0,
                    children: s
                })
            }
            var S = a.memo(function(e) {
                var t, n, s, c, S, N;
                let M, {
                        src: T,
                        volume: A = 1,
                        onVolumeChange: j,
                        onMute: y,
                        waveform: R,
                        durationSecs: L,
                        onVolumeShow: b,
                        onVolumeHide: O,
                        onPlay: D,
                        onPause: P,
                        onError: w
                    } = e,
                    U = a.useRef(null),
                    [k, V] = a.useState(0),
                    [F, B] = a.useState(L),
                    [H, G] = a.useState(!1),
                    [W, z] = a.useState(!1),
                    [Y, Z] = a.useState(!1),
                    [K, X] = a.useState(!1),
                    [J, q] = a.useState("none"),
                    [Q, $] = a.useState(() => "function" == typeof A ? A() : A),
                    ee = a.useRef(void 0),
                    et = a.useCallback(() => {
                        z(e => !e)
                    }, []),
                    en = a.useCallback(() => {
                        q("metadata")
                    }, []),
                    el = a.useCallback(e => {
                        let t = e.currentTarget.duration;
                        !isNaN(t) && B(t)
                    }, []),
                    ea = a.useCallback(() => {
                        z(!1), null == ee.current && (ee.current = setTimeout(() => {
                            X(!1), ee.current = void 0
                        }, 500))
                    }, []),
                    es = a.useCallback(() => {
                        !Y && ea()
                    }, [ea, Y]),
                    ei = a.useCallback(() => {
                        let e = U.current;
                        if (null == e) return;
                        let t = e.error;
                        null == w || w(t)
                    }, [w]),
                    er = a.useCallback(e => {
                        let t = (0, g.perceptualToAmplitude)(e, 1);
                        G(0 === t), $(t), null == j || j(t)
                    }, [j]),
                    eo = a.useCallback(() => {
                        G(!H), null == y || y(!H)
                    }, [H, y]),
                    eu = a.useCallback(() => {
                        Z(!0)
                    }, []),
                    ed = a.useCallback(() => {
                        Z(!1), k === F && ea()
                    }, [k, F, ea]),
                    ec = a.useCallback(e => {
                        let t = U.current;
                        if (null == F || null == t) return;
                        let n = e * F;
                        V(n), t.currentTime = n, X(!0), clearTimeout(ee.current), ee.current = void 0
                    }, [F]);
                a.useEffect(() => {
                    !K && W && X(!0)
                }, [W, K]);
                let em = a.useRef(null);
                a.useEffect(() => {
                    if (K || W) {
                        if (W) {
                            var e, t;
                            em.current = performance.now(), null == D || D(!1, k, (null !== (t = null === (e = U.current) || void 0 === e ? void 0 : e.duration) && void 0 !== t ? t : 0) * 1e3)
                        } else {
                            let e = performance.now(),
                                t = em.current;
                            null == P || P(k, null != t ? (e - t) / 1e3 : 0), em.current = null
                        }
                    }
                }, [W]), t = U, n = W, s = V, a.useEffect(() => {
                    let e;
                    return ! function l() {
                        let a = t.current;
                        if (null != a) s(a.currentTime), n && (e = requestAnimationFrame(l))
                    }(), () => {
                        null != e && cancelAnimationFrame(e)
                    }
                }, [t, n, s]), c = T, S = W, N = z, a.useEffect(() => {
                    if (S) return p.ComponentDispatch.dispatch(v.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, {
                        src: c
                    }), p.ComponentDispatch.subscribe(v.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, e), () => {
                        p.ComponentDispatch.unsubscribe(v.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, e)
                    };

                    function e(e) {
                        let {
                            src: t
                        } = e;
                        c !== t && N(!1)
                    }
                }, [c, S, N]);
                let ef = W ? f.default : h.default,
                    eh = W ? C.default.Messages.PAUSE : C.default.Messages.PLAY;
                M = "Safari" === platform.name ? (0, l.jsx)(a.Suspense, {
                    children: (0, l.jsx)(x, {
                        ref: U,
                        className: I.audioElement,
                        src: T,
                        preload: J,
                        playing: W && !Y,
                        onEnded: es,
                        onLoadedMetadata: el,
                        onError: ei,
                        muted: H,
                        volume: Q
                    })
                }) : (0, l.jsx)(d.default, {
                    ref: U,
                    className: I.audioElement,
                    controls: !1,
                    preload: J,
                    onEnded: es,
                    onLoadedMetadata: el,
                    onError: ei,
                    muted: H,
                    volume: Q,
                    playing: W && !Y,
                    children: (0, l.jsx)("source", {
                        src: T
                    })
                });
                let ep = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion),
                    {
                        enabled: eg
                    } = (0, o.useRedesignIconContext)();
                return (0, l.jsxs)("div", {
                    className: i(I.container, {
                        [I.playing]: W
                    }),
                    onMouseEnter: en,
                    children: [(0, l.jsx)("div", {
                        className: I.rippleContainer,
                        children: (0, l.jsx)("div", {
                            className: i(I.ripple, {
                                [I.reducedMotion]: ep
                            })
                        })
                    }), (0, l.jsx)(o.Clickable, {
                        className: I.playButtonContainer,
                        onClick: et,
                        "aria-label": eh,
                        children: (0, l.jsx)(ef, {
                            className: i(I.playIcon, {
                                [I.oldPlayIconSpacing]: !eg && !W
                            }),
                            width: 18,
                            height: 18
                        })
                    }), (0, l.jsx)(E.default, {
                        className: I.waveform,
                        waveform: R,
                        currentTime: k,
                        duration: null != F ? F : 1,
                        playing: W,
                        played: K,
                        onDrag: ec,
                        onDragStart: eu,
                        onDragEnd: ed
                    }), (0, l.jsx)(_, {
                        played: K,
                        currentTime: k,
                        duration: F
                    }), (0, l.jsx)(m.default, {
                        className: I.volumeButton,
                        iconClassName: I.volumeButtonIcon,
                        sliderWrapperClassName: I.volumeSlider,
                        muted: H,
                        value: (0, g.amplitudeToPerceptual)(Q, 1),
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: er,
                        onToggleMute: eo,
                        onVolumeShow: b,
                        onVolumeHide: O
                    }), M]
                })
            })