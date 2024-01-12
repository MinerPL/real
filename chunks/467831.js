            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentAnimationTier0: function() {
                    return S
                },
                PremiumPaymentAnimationTier1: function() {
                    return L
                },
                PremiumPaymentAnimationTier2: function() {
                    return v
                },
                PremiumPaymentGuildAnimation: function() {
                    return O
                }
            }), n("222007");
            var l, i, r, s, a, o, u, c, d = n("37983"),
                f = n("884691"),
                p = n("414456"),
                h = n.n(p),
                E = n("907002"),
                m = n("458960"),
                _ = n("273108"),
                g = n("635233");
            (a = l || (l = {})).NORMAL = "normal", a.SPEED_START = "speed_start", a.SPEED_LOOP = "speed_loop", a.FINISH = "finish", a.IDLE = "idle";
            let I = {
                normal: {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                },
                speed_start: {
                    BEG: 601,
                    END: 636
                },
                speed_loop: {
                    BEG: 637,
                    END: 668
                },
                finish: {
                    BEG: 669,
                    END: 870
                },
                idle: {
                    BEG: 871,
                    END: 878
                }
            };
            class S extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case S.Scenes.SPEED_START:
                            return S.Scenes.SPEED_LOOP;
                        case S.Scenes.FINISH:
                            return S.Scenes.IDLE;
                        default:
                            return e
                    }
                }
                importDefault() {
                    return n.el("133541").then(n.t.bind(n, "133541", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        onScenePlay: n,
                        onSceneComplete: l,
                        pause: i,
                        pauseWhileUnfocused: r
                    } = this.props;
                    return (0, d.jsx)(_.default, {
                        className: h(g.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: i ? "idle" : t,
                        sceneSegments: I,
                        onScenePlay: n,
                        onSceneComplete: l,
                        pauseWhileUnfocused: r,
                        pause: i
                    })
                }
            }
            S.Scenes = l, (o = i || (i = {})).NORMAL = "normal", o.SPEED_START = "speed_start", o.SPEED_LOOP = "speed_loop", o.FINISH = "finish", o.IDLE = "idle";
            let C = {
                normal: {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                },
                speed_start: {
                    BEG: 601,
                    END: 636
                },
                speed_loop: {
                    BEG: 637,
                    END: 668
                },
                finish: {
                    BEG: 669,
                    END: 870
                },
                idle: {
                    BEG: 871,
                    END: 878
                }
            };
            class L extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case L.Scenes.SPEED_START:
                            return L.Scenes.SPEED_LOOP;
                        case L.Scenes.FINISH:
                            return L.Scenes.IDLE;
                        default:
                            return e
                    }
                }
                importDefault() {
                    return n.el("73902").then(n.t.bind(n, "73902", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        onScenePlay: n,
                        onSceneComplete: l,
                        pause: i,
                        pauseWhileUnfocused: r
                    } = this.props;
                    return (0, d.jsx)(_.default, {
                        className: h(g.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: i ? "idle" : t,
                        sceneSegments: C,
                        onScenePlay: n,
                        onSceneComplete: l,
                        pauseWhileUnfocused: r,
                        pause: i
                    })
                }
            }
            L.Scenes = i, (u = r || (r = {})).IDLE_ENTRY = "idle_entry", u.IDLE_LOOP = "idle_loop", u.BOOST_START = "boost_start", u.BOOST_LOOP = "boost_loop", u.BOOST_END = "boost_end", u.VICTORY = "victory", u.ERROR = "error";
            let R = {
                idle_entry: {
                    BEG: 0,
                    END: 50
                },
                idle_loop: {
                    BEG: 50,
                    END: 230,
                    shouldForcePlayAfter: !0
                },
                boost_start: {
                    BEG: 230,
                    END: 275
                },
                boost_loop: {
                    BEG: 275,
                    END: 290
                },
                boost_end: {
                    BEG: 386,
                    END: 455
                },
                victory: {
                    BEG: 470,
                    END: 525
                },
                error: {
                    BEG: 290,
                    END: 375
                }
            };
            class N extends f.PureComponent {
                getStyle(e) {
                    let {
                        animation: t
                    } = this.props;
                    return {
                        transform: [{
                            translateX: t.x.interpolate({
                                inputRange: [0, 1],
                                outputRange: e ? ["100%", "0%"] : ["0%", "-100%"]
                            })
                        }, {
                            translateY: t.y.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["100%", "0%"]
                            })
                        }]
                    }
                }
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, d.jsxs)("div", {
                        className: g.panningAnimation,
                        children: [(0, d.jsx)(m.default.div, {
                            className: e,
                            style: this.getStyle(!1)
                        }), (0, d.jsx)(m.default.div, {
                            className: e,
                            style: this.getStyle(!0)
                        })]
                    })
                }
            }
            let T = Object.freeze({
                IDLE_ENTRY: {
                    toValue: 1,
                    duration: 1500
                },
                IDLE_LOOP: {
                    toValue: 1,
                    duration: 6e3,
                    easing: m.default.Easing.linear
                },
                BOOST_START: {
                    toValue: 0,
                    duration: 2e3,
                    delay: 500
                },
                ERROR: {
                    toValue: 1,
                    duration: 1500,
                    delay: 1e3
                }
            });
            class v extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case v.Scenes.IDLE_ENTRY:
                            return v.Scenes.IDLE_LOOP;
                        case v.Scenes.BOOST_START:
                            return v.Scenes.BOOST_LOOP;
                        case v.Scenes.BOOST_END:
                            return v.Scenes.VICTORY;
                        case v.Scenes.VICTORY:
                            return v.Scenes.IDLE_ENTRY;
                        case v.Scenes.ERROR:
                            return v.Scenes.IDLE_LOOP;
                        default:
                            return e
                    }
                }
                componentWillUnmount() {
                    this.didUnmount = !0
                }
                importData() {
                    return n.el("475800").then(n.t.bind(n, "475800", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                animateEntry(e) {
                    m.default.parallel([m.default.timing(this.foregroundAnimation.y, {
                        toValue: e.toValue,
                        duration: e.duration,
                        delay: e.delay || 0
                    }), m.default.timing(this.backgroundAnimation.y, {
                        toValue: e.toValue,
                        duration: 1.2 * e.duration,
                        delay: e.delay || 0
                    })]).start()
                }
                animateIdleEntry() {
                    this.animateEntry(T.IDLE_ENTRY)
                }
                animateError() {
                    this.animateEntry(T.ERROR)
                }
                animateIdleLoop() {
                    this.animateIdleLoopBackground(), this.animateIdleLoopForeground()
                }
                animateBoostStart() {
                    m.default.parallel([m.default.timing(this.foregroundAnimation.y, {
                        toValue: T.BOOST_START.toValue,
                        duration: T.BOOST_START.duration,
                        delay: T.BOOST_START.delay
                    }), m.default.timing(this.backgroundAnimation.y, {
                        toValue: T.BOOST_START.toValue,
                        duration: 1.2 * T.BOOST_START.duration,
                        delay: T.BOOST_START.delay
                    })]).start()
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        pause: n,
                        onSceneComplete: l
                    } = this.props;
                    return (0, d.jsxs)("div", {
                        className: h(g.tier2Animation, e),
                        children: [n ? (0, d.jsx)(d.Fragment, {
                            children: (0, d.jsxs)("div", {
                                className: g.panningAnimation,
                                children: [(0, d.jsx)("div", {
                                    className: g.tier2Background
                                }), (0, d.jsx)("div", {
                                    className: g.tier2Foreground
                                })]
                            })
                        }) : (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsx)(N, {
                                className: g.tier2Background,
                                animation: this.backgroundAnimation
                            }), (0, d.jsx)(N, {
                                className: g.tier2Foreground,
                                animation: this.foregroundAnimation
                            })]
                        }), (0, d.jsx)(_.default, {
                            className: g.sequencedAnimation,
                            importData: this.importData,
                            nextScene: n ? "idle_loop" : t,
                            sceneSegments: R,
                            onScenePlay: this.handleScenePlay,
                            onSceneComplete: l,
                            pauseWhileUnfocused: !1,
                            pause: n
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.backgroundAnimation = new m.default.ValueXY({
                        x: 0,
                        y: 0
                    }), this.foregroundAnimation = new m.default.ValueXY({
                        x: 0,
                        y: 0
                    }), this.didUnmount = !1, this.animateIdleLoopBackground = () => {
                        !this.didUnmount && (this.backgroundAnimation.x.setValue(0), m.default.timing(this.backgroundAnimation.x, {
                            toValue: T.IDLE_LOOP.toValue,
                            duration: 1.2 * T.IDLE_LOOP.duration,
                            easing: m.default.Easing.linear
                        }).start(this.animateIdleLoopBackground))
                    }, this.animateIdleLoopForeground = () => {
                        !this.didUnmount && (this.foregroundAnimation.x.setValue(0), m.default.timing(this.foregroundAnimation.x, {
                            toValue: T.IDLE_LOOP.toValue,
                            duration: T.IDLE_LOOP.duration,
                            easing: T.IDLE_LOOP.easing
                        }).start(this.animateIdleLoopForeground))
                    }, this.handleScenePlay = e => {
                        switch (e) {
                            case "idle_entry":
                                this.animateIdleEntry(), this.animateIdleLoop();
                                break;
                            case "error":
                                this.animateError();
                                break;
                            case "boost_start":
                                this.animateBoostStart()
                        }
                        let {
                            onScenePlay: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            v.Scenes = r, (c = s || (s = {})).ENTRY = "entry", c.IDLE = "idle", c.STARS = "stars", c.ERROR = "error", c.SUCCESS = "success";
            let A = {
                    entry: {
                        BEG: 0,
                        END: 180
                    },
                    idle: {
                        BEG: 180,
                        END: 360,
                        shouldForcePlayAfter: !0
                    },
                    stars: {
                        BEG: 180,
                        END: 360,
                        shouldForcePlayAfter: !0
                    },
                    error: {
                        BEG: 360,
                        END: 540
                    },
                    success: {
                        BEG: 540,
                        END: 778
                    }
                },
                x = Object.freeze({
                    WHITE: "#ebf0f7",
                    PINK: "#fa6ef6"
                }),
                M = [{
                    left: 29,
                    top: 100,
                    color: x.WHITE
                }, {
                    left: 245,
                    top: 11,
                    color: x.PINK
                }, {
                    left: 393,
                    top: 22,
                    color: x.WHITE
                }, {
                    left: 74,
                    top: 30,
                    color: x.PINK
                }, {
                    left: 188,
                    top: 9,
                    color: x.WHITE
                }, {
                    left: 379,
                    top: 97,
                    color: x.PINK
                }],
                U = Object.freeze({
                    SCALE_INITIAL: 0,
                    SCALE_MIDDLE: 1,
                    SCALE_END: 0,
                    ROTATE_INITIAL: 0,
                    ROTATE_MIDDLE: 180,
                    ROTATE_END: 360,
                    DELAY_MIN: 200,
                    DELAY_MAX: 500,
                    DELAY_STAGGER: 200,
                    DURATION_MIDDLE: 400,
                    DURATION_END: 250,
                    SIZE_MIN: 7,
                    SIZE_MAX: 15,
                    EASING_MIDDLE: m.default.Easing.bezier(.3, .01, 0, .99),
                    EASING_END: m.default.Easing.bezier(0, -.01, .99, 0)
                });

            function D(e) {
                let {
                    animate: t
                } = e, [n, l] = f.useState(0), i = (0, E.useSprings)(M.length, M.map((e, i) => {
                    let r = i > 0 ? U.DELAY_STAGGER * i + Math.random() * (U.DELAY_MAX - U.DELAY_MIN) + U.DELAY_MIN : 0,
                        s = Math.random() * (U.SIZE_MAX - U.SIZE_MIN) + U.SIZE_MIN;
                    return {
                        from: {
                            scale: U.SCALE_INITIAL,
                            rotate: U.ROTATE_INITIAL,
                            top: e.top,
                            left: e.left,
                            width: s,
                            height: s
                        },
                        to: async e => {
                            t ? (await e({
                                scale: U.SCALE_MIDDLE,
                                rotate: U.ROTATE_MIDDLE,
                                delay: r,
                                config: {
                                    duration: U.DURATION_MIDDLE,
                                    easing: U.EASING_MIDDLE
                                }
                            }), await e({
                                scale: U.SCALE_END,
                                rotate: U.ROTATE_END,
                                config: {
                                    duration: U.DURATION_END,
                                    easing: U.EASING_END
                                }
                            }), await e({
                                scale: U.SCALE_INITIAL,
                                rotate: U.ROTATE_INITIAL,
                                immediate: !0
                            }), i === M.length - 1 && l(n + 1)) : await e({
                                scale: U.SCALE_INITIAL,
                                rotate: U.ROTATE_INITIAL
                            })
                        }
                    }
                }));
                return (0, d.jsx)(d.Fragment, {
                    children: i.map((e, t) => {
                        let n = M[t];
                        return (0, d.jsx)(E.animated.svg, {
                            style: e,
                            className: g.guildStar,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 12.14 12.24",
                            children: (0, d.jsx)("path", {
                                d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
                                fill: n.color
                            })
                        }, t)
                    })
                })
            }
            class O extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case "entry":
                        case "error":
                        case "success":
                            return "idle";
                        default:
                            return e
                    }
                }
                importData() {
                    return n.el("438967").then(n.t.bind(n, "438967", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        pause: n,
                        onScenePlay: l,
                        onSceneComplete: i,
                        pauseWhileUnfocused: r
                    } = this.props;
                    return (0, d.jsxs)("div", {
                        className: h(g.guildWrapper, e),
                        children: [(0, d.jsx)(_.default, {
                            className: g.guildBackground,
                            importData: this.importData,
                            nextScene: n ? "idle" : t,
                            sceneSegments: A,
                            onScenePlay: l,
                            onSceneComplete: i,
                            pauseWhileUnfocused: r,
                            pause: n
                        }), (0, d.jsx)(D, {
                            animate: !n && "stars" === t
                        })]
                    })
                }
            }
            O.Scenes = s