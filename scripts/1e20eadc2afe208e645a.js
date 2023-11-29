(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["48150"], {
        315147: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3808a69f670fa9a67284.svg"
        },
        452113: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("850068"),
                s = n("524503"),
                l = n("393414"),
                o = n("162771"),
                u = n("642906"),
                r = n("385179"),
                c = n("49111");

            function d(e) {
                let {
                    onClose: t,
                    initialPlanId: n,
                    analyticsObject: d,
                    analyticsLocation: p,
                    analyticsLocations: h,
                    analyticsSubscriptionType: m,
                    renderHeader: f,
                    planGroup: y,
                    reviewWarningMessage: S,
                    applicationId: v,
                    guildId: x,
                    onComplete: C,
                    forcesTransitionToGuild: F,
                    skuId: g,
                    ...E
                } = e, {
                    subscriptionMetadataRequest: w
                } = (0, u.usePaymentContext)();
                return (0, i.jsx)(r.PaymentModal, {
                    ...E,
                    initialPlanId: n,
                    skuId: g,
                    onClose: e => {
                        t();
                        let n = null == w ? void 0 : w.guild_id;
                        e && null != n && (a.fetchSubscriptions(), (0, s.fetchEntitlementsForGuild)(n), null == C || C(), null != n && (F || o.default.getGuildId() !== n) && (0, l.transitionTo)(c.Routes.CHANNEL(n)))
                    },
                    analyticsLocations: h,
                    analyticsObject: d,
                    analyticsLocation: p,
                    analyticsSubscriptionType: m,
                    renderHeader: f,
                    planGroup: y,
                    reviewWarningMessage: S,
                    applicationId: v,
                    guildId: x,
                    forceNewPaymentModal: !0
                })
            }
        },
        65324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007"), n("70102");
            var i = n("37983"),
                a = n("884691"),
                s = n("446674"),
                l = n("206230"),
                o = n("491605"),
                u = n("210721"),
                r = n("78345");

            function c(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: c = !0,
                    defaultAnimationState: d,
                    idleAnimationState: p
                } = e, h = (0, s.useStateFromStores)([l.default], () => l.default.useReducedMotion), [m, f] = a.useState(d), y = a.useRef((0, u.getGiftAnimationData)(t, m)), [S, v] = a.useState(null == p), [x, C] = a.useState(!1), [F, g] = a.useState(-1), E = () => {
                    y.current = (0, u.getGiftAnimationData)(t, m), g(e => e + 1)
                }, w = () => {
                    v(!1), C(!0), g(-1), f(d)
                };
                a.useEffect(() => {
                    null == p && f(d)
                }, [p, d]), a.useEffect(() => {
                    if (null != p && F >= 0) {
                        w();
                        return
                    }
                    E()
                }, [t, p]), a.useEffect(() => {
                    (!x || null == p) && E()
                }, [m]), a.useEffect(() => {
                    x && (v(null == p), C(!1), E())
                }, [x]);
                if (!r.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, i.jsx)(o.default, {
                    importData: y.current,
                    shouldAnimate: !h && c,
                    className: n,
                    versionKey: F,
                    onComplete: null != p ? () => {
                        null != p && (f(p), v(!0))
                    } : void 0,
                    loop: S
                })
            }
        },
        273108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                s = n("414456"),
                l = n.n(s),
                o = n("446674"),
                u = n("206230"),
                r = n("471671"),
                c = n("629758");
            class d extends a.PureComponent {
                async componentDidMount() {
                    let {
                        importData: e,
                        nextScene: t,
                        pauseWhileUnfocused: i,
                        pause: a,
                        isWindowFocused: s,
                        useReducedMotion: l
                    } = this.props, [o, {
                        default: u
                    }] = await Promise.all([e(), n.el("230265").then(n.t.bind(n, "230265", 23))]);
                    null != this.animationRef && (this.animation = u.loadAnimation({
                        container: this.animationRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !0,
                        animationData: o
                    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (i && !s || a || l) && this.animation.pause())
                }
                componentWillUnmount() {
                    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
                }
                componentDidUpdate(e) {
                    var t, n, i;
                    let {
                        nextScene: a,
                        pauseWhileUnfocused: s,
                        pause: l,
                        isWindowFocused: o,
                        useReducedMotion: u
                    } = this.props;
                    a !== this.currentScene && this.shouldForcePlayAfter() && !l && this.playScene(a), null != this.animation && (s && !e.isWindowFocused && o && !u && !0 !== l ? this.animation.play() : (u || s && e.isWindowFocused && !o) && this.animation.pause()), !e.pause && l ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !l && !u && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== a && l && (this.playScene(a), null === (i = this.animation) || void 0 === i || i.pause())
                }
                shouldForcePlayAfter() {
                    let {
                        sceneSegments: e
                    } = this.props, t = e[this.currentScene];
                    return !0 === t.shouldForcePlayAfter
                }
                playScene(e) {
                    if (this.isUnmounted) return;
                    let {
                        onScenePlay: t,
                        sceneSegments: n,
                        useReducedMotion: i
                    } = this.props, a = n[e], s = n[this.currentScene];
                    if (null != this.animation && (e === this.currentScene || a.BEG !== s.BEG || a.END !== s.END) && this.animation.playSegments([a.BEG, a.END], !0), this.currentScene = e, null != t && t(this.currentScene), i) {
                        var l;
                        null === (l = this.animation) || void 0 === l || l.pause()
                    }
                }
                render() {
                    return (0, i.jsx)("div", {
                        ref: this.handleSetRef,
                        className: l(this.props.className, c.wrapper)
                    })
                }
                constructor(...e) {
                    super(...e), this.animationRef = null, this.currentScene = this.props.nextScene, this.isUnmounted = !1, this.handleLoopComplete = () => {
                        let {
                            onSceneComplete: e,
                            nextScene: t
                        } = this.props;
                        null != e && e(this.currentScene), this.playScene(t)
                    }, this.handleComplete = () => {
                        let {
                            onSceneComplete: e
                        } = this.props;
                        null != e && e(this.currentScene)
                    }, this.handleSetRef = e => {
                        this.animationRef = e;
                        let {
                            animationRef: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            d.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            var p = e => {
                let {
                    componentRef: t,
                    ...n
                } = e, a = (0, o.useStateFromStores)([r.default], () => r.default.isFocused()), s = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion);
                return (0, i.jsx)(d, {
                    ...n,
                    isWindowFocused: a,
                    useReducedMotion: s,
                    ref: t
                })
            }
        },
        181108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                s = n("516555");
            let l = [n("315147")],
                o = ["#FFFFFF"],
                u = 1e3 / 60,
                r = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 0,
                            y: 1
                        },
                        maxValue: {
                            x: 3,
                            y: 3
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        maxValue: {
                            x: 0,
                            y: 0,
                            z: 360
                        },
                        minAddValue: {
                            x: 0,
                            y: 0,
                            z: -5
                        },
                        maxAddValue: {
                            x: 0,
                            y: 0,
                            z: 5
                        }
                    },
                    size: {
                        type: "static-random",
                        minValue: 2,
                        maxValue: 6
                    },
                    dragCoefficient: {
                        type: "static",
                        value: {
                            x: .05,
                            y: .05
                        }
                    },
                    opacity: {
                        type: "static",
                        value: .3
                    }
                };

            function c(e) {
                let {
                    className: t,
                    firing: n = !0,
                    wind: c = 2
                } = e, [d, p] = a.useState(null), [h, m] = a.useState(null), f = (0, s.useConfettiCannon)(h, d), y = a.useMemo(() => new s.Environment({
                    wind: c
                }), [c]), S = a.useCallback(() => {
                    let e = null == h ? void 0 : h.getCanvas();
                    if (null == e) return;
                    let t = e.getBoundingClientRect();
                    f.createConfetti({
                        ...r,
                        position: {
                            type: "static-random",
                            minValue: {
                                x: -t.width / 2,
                                y: -6
                            },
                            maxValue: {
                                x: t.width,
                                y: -6
                            }
                        }
                    })
                }, [f, h]);
                return a.useEffect(() => {
                    let e = n ? setInterval(S, u) : null;
                    return () => clearInterval(e)
                }, [n, S]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(s.ConfettiCanvas, {
                        ref: m,
                        className: t,
                        environment: y
                    }), (0, i.jsx)(s.SpriteCanvas, {
                        ref: p,
                        colors: o,
                        sprites: l,
                        spriteWidth: 6,
                        spriteHeight: 6
                    })]
                })
            }
        }
    }
]);