            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentAnimationTier0: function() {
                    return S
                },
                PremiumPaymentAnimationTier1: function() {
                    return v
                },
                PremiumPaymentAnimationTier2: function() {
                    return N
                },
                PremiumPaymentGuildAnimation: function() {
                    return U
                }
            }), n("222007");
            var r, i, l, s, a, o, u, c, d = n("37983"),
                f = n("884691"),
                p = n("414456"),
                E = n.n(p),
                _ = n("907002"),
                h = n("458960"),
                m = n("273108"),
                I = n("635233");
            (a = r || (r = {})).NORMAL = "normal", a.SPEED_START = "speed_start", a.SPEED_LOOP = "speed_loop", a.FINISH = "finish", a.IDLE = "idle";
            let g = {
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
                        onSceneComplete: r,
                        pause: i,
                        pauseWhileUnfocused: l
                    } = this.props;
                    return (0, d.jsx)(m.default, {
                        className: E(I.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: i ? "idle" : t,
                        sceneSegments: g,
                        onScenePlay: n,
                        onSceneComplete: r,
                        pauseWhileUnfocused: l,
                        pause: i
                    })
                }
            }
            S.Scenes = r, (o = i || (i = {})).NORMAL = "normal", o.SPEED_START = "speed_start", o.SPEED_LOOP = "speed_loop", o.FINISH = "finish", o.IDLE = "idle";
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
            class v extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case v.Scenes.SPEED_START:
                            return v.Scenes.SPEED_LOOP;
                        case v.Scenes.FINISH:
                            return v.Scenes.IDLE;
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
                        onSceneComplete: r,
                        pause: i,
                        pauseWhileUnfocused: l
                    } = this.props;
                    return (0, d.jsx)(m.default, {
                        className: E(I.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: i ? "idle" : t,
                        sceneSegments: C,
                        onScenePlay: n,
                        onSceneComplete: r,
                        pauseWhileUnfocused: l,
                        pause: i
                    })
                }
            }
            v.Scenes = i, (u = l || (l = {})).IDLE_ENTRY = "idle_entry", u.IDLE_LOOP = "idle_loop", u.BOOST_START = "boost_start", u.BOOST_LOOP = "boost_loop", u.BOOST_END = "boost_end", u.VICTORY = "victory", u.ERROR = "error";
            let T = {
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
            class A extends f.PureComponent {
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
                        className: I.panningAnimation,
                        children: [(0, d.jsx)(h.default.div, {
                            className: e,
                            style: this.getStyle(!1)
                        }), (0, d.jsx)(h.default.div, {
                            className: e,
                            style: this.getStyle(!0)
                        })]
                    })
                }
            }
            let R = Object.freeze({
                IDLE_ENTRY: {
                    toValue: 1,
                    duration: 1500
                },
                IDLE_LOOP: {
                    toValue: 1,
                    duration: 6e3,
                    easing: h.default.Easing.linear
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
            class N extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case N.Scenes.IDLE_ENTRY:
                            return N.Scenes.IDLE_LOOP;
                        case N.Scenes.BOOST_START:
                            return N.Scenes.BOOST_LOOP;
                        case N.Scenes.BOOST_END:
                            return N.Scenes.VICTORY;
                        case N.Scenes.VICTORY:
                            return N.Scenes.IDLE_ENTRY;
                        case N.Scenes.ERROR:
                            return N.Scenes.IDLE_LOOP;
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
                    h.default.parallel([h.default.timing(this.foregroundAnimation.y, {
                        toValue: e.toValue,
                        duration: e.duration,
                        delay: e.delay || 0
                    }), h.default.timing(this.backgroundAnimation.y, {
                        toValue: e.toValue,
                        duration: 1.2 * e.duration,
                        delay: e.delay || 0
                    })]).start()
                }
                animateIdleEntry() {
                    this.animateEntry(R.IDLE_ENTRY)
                }
                animateError() {
                    this.animateEntry(R.ERROR)
                }
                animateIdleLoop() {
                    this.animateIdleLoopBackground(), this.animateIdleLoopForeground()
                }
                animateBoostStart() {
                    h.default.parallel([h.default.timing(this.foregroundAnimation.y, {
                        toValue: R.BOOST_START.toValue,
                        duration: R.BOOST_START.duration,
                        delay: R.BOOST_START.delay
                    }), h.default.timing(this.backgroundAnimation.y, {
                        toValue: R.BOOST_START.toValue,
                        duration: 1.2 * R.BOOST_START.duration,
                        delay: R.BOOST_START.delay
                    })]).start()
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        pause: n,
                        onSceneComplete: r
                    } = this.props;
                    return (0, d.jsxs)("div", {
                        className: E(I.tier2Animation, e),
                        children: [n ? (0, d.jsx)(d.Fragment, {
                            children: (0, d.jsxs)("div", {
                                className: I.panningAnimation,
                                children: [(0, d.jsx)("div", {
                                    className: I.tier2Background
                                }), (0, d.jsx)("div", {
                                    className: I.tier2Foreground
                                })]
                            })
                        }) : (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsx)(A, {
                                className: I.tier2Background,
                                animation: this.backgroundAnimation
                            }), (0, d.jsx)(A, {
                                className: I.tier2Foreground,
                                animation: this.foregroundAnimation
                            })]
                        }), (0, d.jsx)(m.default, {
                            className: I.sequencedAnimation,
                            importData: this.importData,
                            nextScene: n ? "idle_loop" : t,
                            sceneSegments: T,
                            onScenePlay: this.handleScenePlay,
                            onSceneComplete: r,
                            pauseWhileUnfocused: !1,
                            pause: n
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.backgroundAnimation = new h.default.ValueXY({
                        x: 0,
                        y: 0
                    }), this.foregroundAnimation = new h.default.ValueXY({
                        x: 0,
                        y: 0
                    }), this.didUnmount = !1, this.animateIdleLoopBackground = () => {
                        !this.didUnmount && (this.backgroundAnimation.x.setValue(0), h.default.timing(this.backgroundAnimation.x, {
                            toValue: R.IDLE_LOOP.toValue,
                            duration: 1.2 * R.IDLE_LOOP.duration,
                            easing: h.default.Easing.linear
                        }).start(this.animateIdleLoopBackground))
                    }, this.animateIdleLoopForeground = () => {
                        !this.didUnmount && (this.foregroundAnimation.x.setValue(0), h.default.timing(this.foregroundAnimation.x, {
                            toValue: R.IDLE_LOOP.toValue,
                            duration: R.IDLE_LOOP.duration,
                            easing: R.IDLE_LOOP.easing
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
            N.Scenes = l, (c = s || (s = {})).ENTRY = "entry", c.IDLE = "idle", c.STARS = "stars", c.ERROR = "error", c.SUCCESS = "success";
            let L = {
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
                M = Object.freeze({
                    WHITE: "#ebf0f7",
                    PINK: "#fa6ef6"
                }),
                x = [{
                    left: 29,
                    top: 100,
                    color: M.WHITE
                }, {
                    left: 245,
                    top: 11,
                    color: M.PINK
                }, {
                    left: 393,
                    top: 22,
                    color: M.WHITE
                }, {
                    left: 74,
                    top: 30,
                    color: M.PINK
                }, {
                    left: 188,
                    top: 9,
                    color: M.WHITE
                }, {
                    left: 379,
                    top: 97,
                    color: M.PINK
                }],
                y = Object.freeze({
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
                    EASING_MIDDLE: h.default.Easing.bezier(.3, .01, 0, .99),
                    EASING_END: h.default.Easing.bezier(0, -.01, .99, 0)
                });

            function O(e) {
                let {
                    animate: t
                } = e, [n, r] = f.useState(0), i = (0, _.useSprings)(x.length, x.map((e, i) => {
                    let l = i > 0 ? y.DELAY_STAGGER * i + Math.random() * (y.DELAY_MAX - y.DELAY_MIN) + y.DELAY_MIN : 0,
                        s = Math.random() * (y.SIZE_MAX - y.SIZE_MIN) + y.SIZE_MIN;
                    return {
                        from: {
                            scale: y.SCALE_INITIAL,
                            rotate: y.ROTATE_INITIAL,
                            top: e.top,
                            left: e.left,
                            width: s,
                            height: s
                        },
                        to: async e => {
                            t ? (await e({
                                scale: y.SCALE_MIDDLE,
                                rotate: y.ROTATE_MIDDLE,
                                delay: l,
                                config: {
                                    duration: y.DURATION_MIDDLE,
                                    easing: y.EASING_MIDDLE
                                }
                            }), await e({
                                scale: y.SCALE_END,
                                rotate: y.ROTATE_END,
                                config: {
                                    duration: y.DURATION_END,
                                    easing: y.EASING_END
                                }
                            }), await e({
                                scale: y.SCALE_INITIAL,
                                rotate: y.ROTATE_INITIAL,
                                immediate: !0
                            }), i === x.length - 1 && r(n + 1)) : await e({
                                scale: y.SCALE_INITIAL,
                                rotate: y.ROTATE_INITIAL
                            })
                        }
                    }
                }));
                return (0, d.jsx)(d.Fragment, {
                    children: i.map((e, t) => {
                        let n = x[t];
                        return (0, d.jsx)(_.animated.svg, {
                            style: e,
                            className: I.guildStar,
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
            class U extends f.PureComponent {
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
                        onScenePlay: r,
                        onSceneComplete: i,
                        pauseWhileUnfocused: l
                    } = this.props;
                    return (0, d.jsxs)("div", {
                        className: E(I.guildWrapper, e),
                        children: [(0, d.jsx)(m.default, {
                            className: I.guildBackground,
                            importData: this.importData,
                            nextScene: n ? "idle" : t,
                            sceneSegments: L,
                            onScenePlay: r,
                            onSceneComplete: i,
                            pauseWhileUnfocused: l,
                            pause: n
                        }), (0, d.jsx)(O, {
                            animate: !n && "stars" === t
                        })]
                    })
                }
            }
            U.Scenes = s