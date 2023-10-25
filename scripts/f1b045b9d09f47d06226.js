(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["17729"], {
        663481: function(e, t, n) {
            "use strict";
            e.exports = n.p + "60e64ec1e28c734051d0.svg"
        },
        37598: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e5fb2c858f851f61c32e.svg"
        },
        22368: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePaymentModalAnimationScene: function() {
                    return s
                }
            });
            var a = n("773670"),
                i = n("85336"),
                r = n("286350");

            function s(e) {
                let {
                    purchaseState: t,
                    currentStep: n,
                    initialScene: s,
                    purchaseScene: o,
                    errorScene: u,
                    successScene: l
                } = e, [c, d] = (0, a.useState)(s);
                return (0, a.useEffect)(() => {
                    t === r.PurchaseState.PURCHASING ? d(o) : t === r.PurchaseState.FAIL && d(u)
                }, [t, o, u]), (0, a.useEffect)(() => {
                    n === i.Step.CONFIRM && d(l)
                }, [n, l]), [c, d]
            }
        },
        160210: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("575482"),
                r = n.n(i),
                s = n("498225"),
                o = n("77078"),
                u = n("206230"),
                l = n("145131"),
                c = n("41250"),
                d = n("379863"),
                m = n("707269"),
                E = n("192441"),
                L = n("181108"),
                S = n("719923"),
                T = n("153160"),
                f = n("78345"),
                I = n("154889"),
                h = n("646718"),
                A = n("782340"),
                N = n("321548");
            let C = e => {
                let {
                    isTier0: t,
                    discountAmount: n
                } = e;
                return (0, a.jsx)("div", {
                    className: N.trialBadgeContainer,
                    children: (0, a.jsx)(o.Text, {
                        variant: "text-xs/bold",
                        className: r(N.trialOfferText, {
                            [N.tier0TrialOffer]: t
                        }),
                        children: void 0 !== n ? A.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
                            percent: n
                        }) : A.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT
                    })
                })
            };
            var p = function(e) {
                var t;
                let n;
                let {
                    hideCloseButton: i = !1,
                    hideCloseOnFullScreen: p,
                    shouldShowPrice: P,
                    plan: O,
                    renderAnimation: _,
                    onClose: D,
                    isGift: R,
                    upgradeToPremiumType: g,
                    headerTheme: x = f.PremiumHeaderThemes.DEFAULT,
                    className: y,
                    showTrialBadge: M = !1,
                    showDiscountBadge: B = !1
                } = e, j = g === h.PremiumTypes.TIER_2;
                n = g === h.PremiumTypes.TIER_0 ? d.default : g === h.PremiumTypes.TIER_1 ? m.default : c.default;
                let v = (0, s.useStateFromStores)([u.default], () => u.default.useReducedMotion),
                    F = (0, I.usePremiumDiscountOffer)(),
                    H = null == F ? void 0 : null === (t = F.discount) || void 0 === t ? void 0 : t.amount;
                return (0, a.jsxs)("div", {
                    "aria-hidden": !0,
                    className: r({
                        [N.headerBackground]: !j,
                        [x === f.PremiumHeaderThemes.WINTER ? N.tier2HeaderBackgroundWinterTheme : N.tier2HeaderBackground]: j
                    }, y),
                    children: [v || x !== f.PremiumHeaderThemes.WINTER ? null : (0, a.jsx)(L.default, {
                        className: N.snow,
                        wind: 5
                    }), (M || B) && (0, a.jsx)(E.default, {
                        className: N.trialBadgeSparkles
                    }), _(), (0, a.jsxs)(l.default, {
                        align: l.default.Align.START,
                        justify: l.default.Justify.BETWEEN,
                        className: N.headerTop,
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)(n, {
                                className: r(N.headerIcon, {
                                    [N.nonTier2]: !j
                                })
                            }), (M || B) && (0, a.jsx)(C, {
                                isTier0: g === h.PremiumTypes.TIER_0,
                                discountAmount: B ? H : void 0
                            })]
                        }), !i && (0, a.jsx)(o.ModalCloseButton, {
                            hideOnFullscreen: p,
                            onClick: D,
                            className: N.closeButton
                        })]
                    }), P && null != O ? (0, a.jsx)("div", {
                        className: N.price,
                        children: function(e, t) {
                            let n = S.default.getDefaultPrice(e),
                                {
                                    intervalType: a
                                } = S.default.getInterval(e),
                                i = (0, T.formatPrice)(n.amount, n.currency);
                            if (t) return i;
                            switch (a) {
                                case h.SubscriptionIntervalTypes.MONTH:
                                    return A.default.Messages.BILLING_PRICE_PER_MONTH.format({
                                        price: i
                                    });
                                case h.SubscriptionIntervalTypes.YEAR:
                                    return A.default.Messages.BILLING_PRICE_PER_YEAR.format({
                                        price: i
                                    })
                            }
                        }(O, R)
                    }) : null]
                })
            }
        },
        992977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumModalHeaderAnimationTier0: function() {
                    return s
                },
                PremiumModalHeaderAnimationTier1: function() {
                    return o
                },
                PremiumModalHeaderAnimationTier2: function() {
                    return u
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("467831"),
                r = n("22368");

            function s(e) {
                let {
                    currentStep: t,
                    purchaseState: n,
                    className: s,
                    pause: o
                } = e, [u, l] = (0, r.usePaymentModalAnimationScene)({
                    purchaseState: n,
                    currentStep: t,
                    initialScene: i.PremiumPaymentAnimationTier0.Scenes.NORMAL,
                    purchaseScene: i.PremiumPaymentAnimationTier0.Scenes.SPEED_START,
                    errorScene: i.PremiumPaymentAnimationTier0.Scenes.NORMAL,
                    successScene: i.PremiumPaymentAnimationTier0.Scenes.FINISH
                });
                return (0, a.jsx)(i.PremiumPaymentAnimationTier0, {
                    className: s,
                    nextScene: u,
                    onScenePlay: e => l(i.PremiumPaymentAnimationTier0.getNextScene(e)),
                    pauseWhileUnfocused: !1,
                    pause: o
                })
            }

            function o(e) {
                let {
                    currentStep: t,
                    purchaseState: n,
                    className: s,
                    pause: o
                } = e, [u, l] = (0, r.usePaymentModalAnimationScene)({
                    purchaseState: n,
                    currentStep: t,
                    initialScene: i.PremiumPaymentAnimationTier1.Scenes.NORMAL,
                    purchaseScene: i.PremiumPaymentAnimationTier1.Scenes.SPEED_START,
                    errorScene: i.PremiumPaymentAnimationTier1.Scenes.NORMAL,
                    successScene: i.PremiumPaymentAnimationTier1.Scenes.FINISH
                });
                return (0, a.jsx)(i.PremiumPaymentAnimationTier1, {
                    className: s,
                    nextScene: u,
                    onScenePlay: e => l(i.PremiumPaymentAnimationTier1.getNextScene(e)),
                    pauseWhileUnfocused: !1,
                    pause: o
                })
            }

            function u(e) {
                let {
                    currentStep: t,
                    purchaseState: n,
                    className: s,
                    pause: o
                } = e, [u, l] = (0, r.usePaymentModalAnimationScene)({
                    purchaseState: n,
                    currentStep: t,
                    initialScene: i.PremiumPaymentAnimationTier2.Scenes.IDLE_ENTRY,
                    purchaseScene: i.PremiumPaymentAnimationTier2.Scenes.BOOST_START,
                    errorScene: i.PremiumPaymentAnimationTier2.Scenes.ERROR,
                    successScene: i.PremiumPaymentAnimationTier2.Scenes.BOOST_END
                });
                return (0, a.jsx)(i.PremiumPaymentAnimationTier2, {
                    className: s,
                    nextScene: u,
                    onScenePlay: e => l(i.PremiumPaymentAnimationTier2.getNextScene(e)),
                    pauseWhileUnfocused: !1,
                    pause: o
                })
            }
        },
        510928: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("575482"),
                r = n.n(i),
                s = n("498225"),
                o = n("77078"),
                u = n("206230"),
                l = n("85336"),
                c = n("659632"),
                d = n("78345"),
                m = n("160210"),
                E = n("992977"),
                L = n("646718"),
                S = n("782340"),
                T = n("15070");

            function f(e) {
                let {
                    currentStep: t,
                    className: n,
                    purchaseState: i,
                    premiumType: f,
                    useWinterTheme: I = !1,
                    onClose: h,
                    hideCloseButton: A,
                    showTrialBadge: N,
                    showDiscountBadge: C,
                    giftRecipient: p
                } = e, P = (0, s.useStateFromStores)([u.default], () => u.default.useReducedMotion), O = I ? d.PremiumHeaderThemes.WINTER : d.PremiumHeaderThemes.DEFAULT;
                return (0, c.isCustomGiftEnabled)(p) && t !== l.Step.CONFIRM ? (0, a.jsxs)(o.ModalHeader, {
                    className: T.modalHeaderCustomGift,
                    separator: !1,
                    children: [(0, a.jsx)("div", {
                        className: T.giftNitroInfo,
                        children: (0, a.jsx)(o.Heading, {
                            variant: "heading-lg/semibold",
                            children: (() => {
                                switch (t) {
                                    case l.Step.PLAN_SELECT:
                                        return S.default.Messages.GIFT_NITRO_ACTION;
                                    case l.Step.ADD_PAYMENT_STEPS:
                                        return S.default.Messages.PAYMENT_METHOD_SELECTION;
                                    case l.Step.REVIEW:
                                        return S.default.Messages.GIFT_PURCHASE_REVIEW;
                                    default:
                                        return S.default.Messages.GIFT_NITRO_ACTION
                                }
                            })()
                        })
                    }), (0, a.jsx)(o.ModalCloseButton, {
                        onClick: h,
                        className: T.closeButton
                    })]
                }) : (0, a.jsx)(o.ModalHeader, {
                    className: r(T.modalHeader, n),
                    separator: !1,
                    children: (0, a.jsx)(m.default, {
                        hideCloseOnFullScreen: !0,
                        hideCloseButton: A,
                        shouldShowPrice: !0,
                        upgradeToPremiumType: f,
                        renderAnimation: () => f === L.PremiumTypes.TIER_0 ? (0, a.jsx)(E.PremiumModalHeaderAnimationTier0, {
                            className: T.headerAnimation,
                            currentStep: t,
                            purchaseState: i,
                            pause: P
                        }) : f === L.PremiumTypes.TIER_1 ? (0, a.jsx)(E.PremiumModalHeaderAnimationTier1, {
                            className: T.headerAnimation,
                            currentStep: t,
                            purchaseState: i,
                            pause: P
                        }) : (0, a.jsx)(E.PremiumModalHeaderAnimationTier2, {
                            className: T.headerAnimation,
                            currentStep: t,
                            purchaseState: i,
                            pause: P
                        }),
                        plan: null,
                        isGift: !1,
                        className: T.header,
                        onClose: h,
                        headerTheme: O,
                        showTrialBadge: N,
                        showDiscountBadge: C
                    })
                })
            }
        },
        467831: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentAnimationTier0: function() {
                    return A
                },
                PremiumPaymentAnimationTier1: function() {
                    return C
                },
                PremiumPaymentAnimationTier2: function() {
                    return _
                },
                PremiumPaymentGuildAnimation: function() {
                    return M
                }
            });
            var a, i, r, s, o, u, l, c, d = n("920040"),
                m = n("773670"),
                E = n("575482"),
                L = n.n(E),
                S = n("623829"),
                T = n("28926"),
                f = n("273108"),
                I = n("115994");
            (a = o || (o = {})).NORMAL = "normal", a.SPEED_START = "speed_start", a.SPEED_LOOP = "speed_loop", a.FINISH = "finish", a.IDLE = "idle";
            let h = {
                [o.NORMAL]: {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                },
                [o.SPEED_START]: {
                    BEG: 601,
                    END: 636
                },
                [o.SPEED_LOOP]: {
                    BEG: 637,
                    END: 668
                },
                [o.FINISH]: {
                    BEG: 669,
                    END: 870
                },
                [o.IDLE]: {
                    BEG: 871,
                    END: 878
                }
            };
            class A extends m.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case A.Scenes.SPEED_START:
                            return A.Scenes.SPEED_LOOP;
                        case A.Scenes.FINISH:
                            return A.Scenes.IDLE;
                        default:
                            return e
                    }
                }
                importDefault() {
                    return n.el("391009").then(n.t.bind(n, "391009", 19)).then(e => {
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
                        onSceneComplete: a,
                        pause: i,
                        pauseWhileUnfocused: r
                    } = this.props;
                    return (0, d.jsx)(f.default, {
                        className: L(I.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: i ? o.IDLE : t,
                        sceneSegments: h,
                        onScenePlay: n,
                        onSceneComplete: a,
                        pauseWhileUnfocused: r,
                        pause: i
                    })
                }
            }
            A.Scenes = o, (i = u || (u = {})).NORMAL = "normal", i.SPEED_START = "speed_start", i.SPEED_LOOP = "speed_loop", i.FINISH = "finish", i.IDLE = "idle";
            let N = {
                [u.NORMAL]: {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                },
                [u.SPEED_START]: {
                    BEG: 601,
                    END: 636
                },
                [u.SPEED_LOOP]: {
                    BEG: 637,
                    END: 668
                },
                [u.FINISH]: {
                    BEG: 669,
                    END: 870
                },
                [u.IDLE]: {
                    BEG: 871,
                    END: 878
                }
            };
            class C extends m.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case C.Scenes.SPEED_START:
                            return C.Scenes.SPEED_LOOP;
                        case C.Scenes.FINISH:
                            return C.Scenes.IDLE;
                        default:
                            return e
                    }
                }
                importDefault() {
                    return n.el("163485").then(n.t.bind(n, "163485", 19)).then(e => {
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
                        onSceneComplete: a,
                        pause: i,
                        pauseWhileUnfocused: r
                    } = this.props;
                    return (0, d.jsx)(f.default, {
                        className: L(I.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: i ? u.IDLE : t,
                        sceneSegments: N,
                        onScenePlay: n,
                        onSceneComplete: a,
                        pauseWhileUnfocused: r,
                        pause: i
                    })
                }
            }
            C.Scenes = u, (r = l || (l = {})).IDLE_ENTRY = "idle_entry", r.IDLE_LOOP = "idle_loop", r.BOOST_START = "boost_start", r.BOOST_LOOP = "boost_loop", r.BOOST_END = "boost_end", r.VICTORY = "victory", r.ERROR = "error";
            let p = {
                [l.IDLE_ENTRY]: {
                    BEG: 0,
                    END: 50
                },
                [l.IDLE_LOOP]: {
                    BEG: 50,
                    END: 230,
                    shouldForcePlayAfter: !0
                },
                [l.BOOST_START]: {
                    BEG: 230,
                    END: 275
                },
                [l.BOOST_LOOP]: {
                    BEG: 275,
                    END: 290
                },
                [l.BOOST_END]: {
                    BEG: 386,
                    END: 455
                },
                [l.VICTORY]: {
                    BEG: 470,
                    END: 525
                },
                [l.ERROR]: {
                    BEG: 290,
                    END: 375
                }
            };
            class P extends m.PureComponent {
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
                        children: [(0, d.jsx)(T.default.div, {
                            className: e,
                            style: this.getStyle(!1)
                        }), (0, d.jsx)(T.default.div, {
                            className: e,
                            style: this.getStyle(!0)
                        })]
                    })
                }
            }
            let O = Object.freeze({
                IDLE_ENTRY: {
                    toValue: 1,
                    duration: 1500
                },
                IDLE_LOOP: {
                    toValue: 1,
                    duration: 6e3,
                    easing: T.default.Easing.linear
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
            class _ extends m.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case _.Scenes.IDLE_ENTRY:
                            return _.Scenes.IDLE_LOOP;
                        case _.Scenes.BOOST_START:
                            return _.Scenes.BOOST_LOOP;
                        case _.Scenes.BOOST_END:
                            return _.Scenes.VICTORY;
                        case _.Scenes.VICTORY:
                            return _.Scenes.IDLE_ENTRY;
                        case _.Scenes.ERROR:
                            return _.Scenes.IDLE_LOOP;
                        default:
                            return e
                    }
                }
                componentWillUnmount() {
                    this.didUnmount = !0
                }
                importData() {
                    return n.el("606935").then(n.t.bind(n, "606935", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                animateEntry(e) {
                    T.default.parallel([T.default.timing(this.foregroundAnimation.y, {
                        toValue: e.toValue,
                        duration: e.duration,
                        delay: e.delay || 0
                    }), T.default.timing(this.backgroundAnimation.y, {
                        toValue: e.toValue,
                        duration: 1.2 * e.duration,
                        delay: e.delay || 0
                    })]).start()
                }
                animateIdleEntry() {
                    this.animateEntry(O.IDLE_ENTRY)
                }
                animateError() {
                    this.animateEntry(O.ERROR)
                }
                animateIdleLoop() {
                    this.animateIdleLoopBackground(), this.animateIdleLoopForeground()
                }
                animateBoostStart() {
                    T.default.parallel([T.default.timing(this.foregroundAnimation.y, {
                        toValue: O.BOOST_START.toValue,
                        duration: O.BOOST_START.duration,
                        delay: O.BOOST_START.delay
                    }), T.default.timing(this.backgroundAnimation.y, {
                        toValue: O.BOOST_START.toValue,
                        duration: 1.2 * O.BOOST_START.duration,
                        delay: O.BOOST_START.delay
                    })]).start()
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        pause: n,
                        onSceneComplete: a
                    } = this.props;
                    return (0, d.jsxs)("div", {
                        className: L(I.tier2Animation, e),
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
                            children: [(0, d.jsx)(P, {
                                className: I.tier2Background,
                                animation: this.backgroundAnimation
                            }), (0, d.jsx)(P, {
                                className: I.tier2Foreground,
                                animation: this.foregroundAnimation
                            })]
                        }), (0, d.jsx)(f.default, {
                            className: I.sequencedAnimation,
                            importData: this.importData,
                            nextScene: n ? l.IDLE_LOOP : t,
                            sceneSegments: p,
                            onScenePlay: this.handleScenePlay,
                            onSceneComplete: a,
                            pauseWhileUnfocused: !1,
                            pause: n
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.backgroundAnimation = new T.default.ValueXY({
                        x: 0,
                        y: 0
                    }), this.foregroundAnimation = new T.default.ValueXY({
                        x: 0,
                        y: 0
                    }), this.didUnmount = !1, this.animateIdleLoopBackground = () => {
                        !this.didUnmount && (this.backgroundAnimation.x.setValue(0), T.default.timing(this.backgroundAnimation.x, {
                            toValue: O.IDLE_LOOP.toValue,
                            duration: 1.2 * O.IDLE_LOOP.duration,
                            easing: T.default.Easing.linear
                        }).start(this.animateIdleLoopBackground))
                    }, this.animateIdleLoopForeground = () => {
                        !this.didUnmount && (this.foregroundAnimation.x.setValue(0), T.default.timing(this.foregroundAnimation.x, {
                            toValue: O.IDLE_LOOP.toValue,
                            duration: O.IDLE_LOOP.duration,
                            easing: O.IDLE_LOOP.easing
                        }).start(this.animateIdleLoopForeground))
                    }, this.handleScenePlay = e => {
                        switch (e) {
                            case l.IDLE_ENTRY:
                                this.animateIdleEntry(), this.animateIdleLoop();
                                break;
                            case l.ERROR:
                                this.animateError();
                                break;
                            case l.BOOST_START:
                                this.animateBoostStart()
                        }
                        let {
                            onScenePlay: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            _.Scenes = l, (s = c || (c = {})).ENTRY = "entry", s.IDLE = "idle", s.STARS = "stars", s.ERROR = "error", s.SUCCESS = "success";
            let D = {
                    [c.ENTRY]: {
                        BEG: 0,
                        END: 180
                    },
                    [c.IDLE]: {
                        BEG: 180,
                        END: 360,
                        shouldForcePlayAfter: !0
                    },
                    [c.STARS]: {
                        BEG: 180,
                        END: 360,
                        shouldForcePlayAfter: !0
                    },
                    [c.ERROR]: {
                        BEG: 360,
                        END: 540
                    },
                    [c.SUCCESS]: {
                        BEG: 540,
                        END: 778
                    }
                },
                R = Object.freeze({
                    WHITE: "#ebf0f7",
                    PINK: "#fa6ef6"
                }),
                g = [{
                    left: 29,
                    top: 100,
                    color: R.WHITE
                }, {
                    left: 245,
                    top: 11,
                    color: R.PINK
                }, {
                    left: 393,
                    top: 22,
                    color: R.WHITE
                }, {
                    left: 74,
                    top: 30,
                    color: R.PINK
                }, {
                    left: 188,
                    top: 9,
                    color: R.WHITE
                }, {
                    left: 379,
                    top: 97,
                    color: R.PINK
                }],
                x = Object.freeze({
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
                    EASING_MIDDLE: T.default.Easing.bezier(.3, .01, 0, .99),
                    EASING_END: T.default.Easing.bezier(0, -.01, .99, 0)
                });

            function y(e) {
                let {
                    animate: t
                } = e, [n, a] = m.useState(0), i = (0, S.useSprings)(g.length, g.map((e, i) => {
                    let r = i > 0 ? x.DELAY_STAGGER * i + Math.random() * (x.DELAY_MAX - x.DELAY_MIN) + x.DELAY_MIN : 0,
                        s = Math.random() * (x.SIZE_MAX - x.SIZE_MIN) + x.SIZE_MIN;
                    return {
                        from: {
                            scale: x.SCALE_INITIAL,
                            rotate: x.ROTATE_INITIAL,
                            top: e.top,
                            left: e.left,
                            width: s,
                            height: s
                        },
                        to: async e => {
                            t ? (await e({
                                scale: x.SCALE_MIDDLE,
                                rotate: x.ROTATE_MIDDLE,
                                delay: r,
                                config: {
                                    duration: x.DURATION_MIDDLE,
                                    easing: x.EASING_MIDDLE
                                }
                            }), await e({
                                scale: x.SCALE_END,
                                rotate: x.ROTATE_END,
                                config: {
                                    duration: x.DURATION_END,
                                    easing: x.EASING_END
                                }
                            }), await e({
                                scale: x.SCALE_INITIAL,
                                rotate: x.ROTATE_INITIAL,
                                immediate: !0
                            }), i === g.length - 1 && a(n + 1)) : await e({
                                scale: x.SCALE_INITIAL,
                                rotate: x.ROTATE_INITIAL
                            })
                        }
                    }
                }));
                return (0, d.jsx)(d.Fragment, {
                    children: i.map((e, t) => {
                        let n = g[t];
                        return (0, d.jsx)(S.animated.svg, {
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
            class M extends m.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case c.ENTRY:
                        case c.ERROR:
                        case c.SUCCESS:
                            return c.IDLE;
                        default:
                            return e
                    }
                }
                importData() {
                    return n.el("53302").then(n.t.bind(n, "53302", 19)).then(e => {
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
                        onScenePlay: a,
                        onSceneComplete: i,
                        pauseWhileUnfocused: r
                    } = this.props;
                    return (0, d.jsxs)("div", {
                        className: L(I.guildWrapper, e),
                        children: [(0, d.jsx)(f.default, {
                            className: I.guildBackground,
                            importData: this.importData,
                            nextScene: n ? c.IDLE : t,
                            sceneSegments: D,
                            onScenePlay: a,
                            onSceneComplete: i,
                            pauseWhileUnfocused: r,
                            pause: n
                        }), (0, d.jsx)(y, {
                            animate: !n && t === c.STARS
                        })]
                    })
                }
            }
            M.Scenes = c
        },
        707269: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("75196");

            function r(e) {
                let {
                    width: t = 143,
                    height: n = 41,
                    color: r = "currentColor",
                    foreground: s,
                    ...o
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, i.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 143 41",
                    children: [(0, a.jsx)("title", {
                        children: "Nitro Classic"
                    }), (0, a.jsx)("g", {
                        fill: r,
                        className: s,
                        fillRule: "evenodd",
                        "aria-hidden": !0,
                        children: (0, a.jsx)("path", {
                            d: "M98.4808161 8.67851957L97.2236004 17.1425324C96.9366613 19.1428254 94.6742302 20.0716236 92.5917164 20.0716236 90.6527882 20.0716236 88.7494953 19.1428254 89.0007991 17.3214804L90.2578987 8.67851957C90.5449539 6.7854799 92.807385 5.82123843 94.8897827 5.82123843 96.9722965 5.82123843 98.7678712 6.7854799 98.4808161 8.67851957M95.8844352.00380986213L95.8851317 0 82.3544217 0C82.0087483 0 81.715309.252259053 81.6652804.592375835L81.0074795 5.06376857C80.9459594 5.48181435 81.2717838 5.85668169 81.6965047 5.85668169L84.1674077 5.85668169C84.4160419 5.85668169 84.5858606 6.10882529 84.4882409 6.33626252 84.1799439 7.05517195 83.9553375 7.83561644 83.8305561 8.67851957L82.5733404 17.3214804C81.7473459 23.1071601 86.5954788 26 91.8735561 26 97.4035177 26 102.825761 23.1071601 103.651756 17.3214804L104.908275 8.67851957C105.717903 3.00713572 101.040981.115796719 95.8844352.00380986213M15.296869 11.3489531L15.3645208 15.4968998C15.3658783 15.5821668 15.3090871 15.6571606 15.2271809 15.6781634L15.2270678 15.6781634 13.8302517 10.6749217C13.8282154 10.6672739 13.8256134 10.6598544 13.8224457 10.6525491L9.48877489.415833402C9.38198017.163685177 9.13637494 0 8.86452355 0L3.95343718 0C3.6148391 0 3.32805455.251805788 3.28121873.590019998L.00667092325 24.2202696C-.050459726 24.632222.26664366 25 .678889375 25L5.57119616 25C5.91024677 25 6.19737071 24.7475093 6.24364088 24.4086103L7.52608254 15.0207974C7.52732697 15.0116657 7.52789262 15.0023057 7.52777949 14.9930599L7.45775202 10.1692555 7.5975807 10.1340986 9.06465052 15.1374545C9.06679999 15.1445315 9.06928885 15.1516085 9.07223023 15.1584573L13.1252256 24.587591C13.2328122 24.8379129 13.4775124 25 13.7478931 25L19.045884 25C19.3844821 25 19.6712667 24.7481942 19.7181025 24.40998L22.9933291.779730433C23.0504597.367777991 22.7333563 0 22.3211106 0L17.4621772 0C17.1236922 0 16.8369077.251577496 16.7899587.589791707L15.298566 11.3204166C15.2973215 11.3298907 15.2967559 11.3393648 15.296869 11.3489531M24.7126791 25L29.8497922 25C30.205243 25 30.5063014 24.7483072 30.5554684 24.4099773L33.9929971.779733993C34.0529712.36777967 33.7200849 0 33.2873209 0L28.1502078 0C27.7948757 0 27.4938173.251692791 27.4445316.590022692L24.0070029 24.220266C23.9470288 24.6322203 24.2799151 25 24.7126791 25M37.6698384.584862647L37.0075033 4.99943007C36.9456869 5.41217371 37.2736994 5.78240055 37.7012724 5.78240055L42.9904877 5.78240055C43.4157236 5.78240055 43.7430349 6.14863787 43.6850747 6.55955773L41.1933721 24.2228428C41.1354119 24.6337627 41.4627233 25 41.8879592 25L47.0155637 25C47.3658955 25 47.6624739 24.7477488 47.7101508 24.4093241L50.2545552 6.37307648C50.3022321 6.03453779 50.5988105 5.78240055 50.9491423 5.78240055L56.6358988 5.78240055C56.9838934 5.78240055 57.2791864 5.53345492 57.3296679 5.1975379L57.9924704.782970478C58.0544036.370226832 57.7263911 0 57.2987013 0L38.3636075 0C38.0156128 0 37.7202029.248945629 37.6698384.584862647M73.4002223 8.72158326C73.2199776 10.1691878 72.0692022 11.6169065 70.0902313 11.6169065L67.1170073 11.6169065C66.6926763 11.6169065 66.3664914 11.2480995 66.4261466 10.8356886L67.0554915 6.48511303C67.104332 6.147468 67.3988868 5.89657424 67.7463521 5.89657424L70.9177291 5.89657424C72.8244858 5.89657424 73.5797693 7.20309382 73.4002223 8.72158326M71.6373126 0L62.0638753 0C61.7158285 0 61.4210412.251692791 61.3727821.590022692L58.0068571 24.220266C57.9481322 24.6322203 58.2740844 25 58.697834 25L63.7988762 25C64.1473881 25 64.4425243 24.7475082 64.4900856 24.4086076L65.4806177 17.3505938C65.5044565 17.1812005 65.6519083 17.0549546 65.8262224 17.0549546L66.4819644 17.0549546C66.6009259 17.0549546 66.7117473 17.1144249 66.7758214 17.2128191L71.6474295 24.6843852C71.775694 24.8810595 71.9971043 25 72.2350273 25L78.5355692 25C79.0999096 25 79.4307459 24.3765324 79.1072357 23.9225722L73.9950299 16.7493848C73.8724635 16.5773661 73.935491 16.3380012 74.1277133 16.245885 77.3914221 14.6802531 79.2866664 13.0763822 79.911476 8.61554126 80.6303618 2.75412411 76.8897603 0 71.6373126 0M5.93350799 37.6155526L7.71275643 38.4952518C7.80947956 38.5430729 7.84912249 38.6602491 7.80130141 38.7569722 7.79608029 38.7675325 7.78991472 38.7775989 7.78288005 38.7870484 7.78288005 38.7870484 7.78288005 38.7870484 7.78288005 38.7870484 6.5023978 40.5070853 5.02480222 41 3.72982215 41 1.63490599 41-.294225433 39.7760989.0373440313 37.3434066L.549769566 33.6565934C.88133903 31.239011 3.1721826 30 5.31231277 30 6.56433391 30 7.99499405 30.5097346 8.63332448 32.2132515 8.63332448 32.2132515 8.63332448 32.2132515 8.63332448 32.2132515L8.63332448 32.2132515C8.68451961 32.3498763 8.61597686 32.5022247 8.4797766 32.5545387L6.63222277 33.2642011C6.50733795 33.312169 6.36596186 33.2651964 6.29461441 33.1520298 6.29461441 33.1520298 6.29461441 33.1520298 6.29461441 33.1520298 6.00467959 32.6921544 5.44749743 32.4931319 4.89031528 32.4931319 4.12167697 32.5082418 3.35303867 32.9313187 3.2475393 33.6565934L2.73511376 37.3434066C2.62961439 38.0384615 3.29275331 38.4766484 4.04632028 38.4766484 4.60310978 38.4766484 5.22108254 38.2435573 5.60253663 37.6999958 5.60253663 37.6999958 5.60253663 37.6999958 5.60253663 37.6999958L5.60253663 37.6999958C5.67690475 37.5940233 5.81746419 37.5581537 5.93351807 37.6155322zM59.2832028 37.6155526L61.0624512 38.4952518C61.1591744 38.5430729 61.1988173 38.6602491 61.1509962 38.7569722 61.1457751 38.7675325 61.1396095 38.7775989 61.1325749 38.7870484 61.1325749 38.7870484 61.1325749 38.7870484 61.1325749 38.7870484 59.8520926 40.5070853 58.374497 41 57.079517 41 54.9846008 41 53.0554694 39.7760989 53.3870388 37.3434066L53.8994644 33.6565934C54.2310338 31.239011 56.5218774 30 58.6620076 30 59.9140287 30 61.3446889 30.5097346 61.9830193 32.2132515 61.9830193 32.2132515 61.9830193 32.2132515 61.9830193 32.2132515L61.9830193 32.2132515C62.0342144 32.3498763 61.9656717 32.5022247 61.8294714 32.5545387L59.9819176 33.2642011C59.8570328 33.312169 59.7156567 33.2651964 59.6443092 33.1520298 59.6443092 33.1520298 59.6443092 33.1520298 59.6443092 33.1520298 59.3543744 32.6921544 58.7971922 32.4931319 58.2400101 32.4931319 57.4713718 32.5082418 56.7027335 32.9313187 56.5972341 33.6565934L56.0848086 37.3434066C55.9793092 38.0384615 56.6424481 38.4766484 57.3960151 38.4766484 57.9528046 38.4766484 58.5707773 38.2435573 58.9522314 37.6999958 58.9522314 37.6999958 58.9522314 37.6999958 58.9522314 37.6999958L58.9522314 37.6999958C59.0265995 37.5940233 59.167159 37.5581537 59.2832129 37.6155322zM9.55137248 40.2798328L10.9039613 30.5820306C10.9384202 30.3349668 11.1497126 30.1510989 11.3991679 30.1510989L13.1015272 30.1510989C13.3776695 30.1510989 13.6015272 30.3749565 13.6015272 30.6510989 13.6015272 30.6744353 13.5998934 30.6977431 13.5966378 30.7208514L12.6268238 37.6046981C12.5883006 37.8781402 12.7787399 38.131038 13.052182 38.1695612 13.0752902 38.1728168 13.0985981 38.1744505 13.1219345 38.1744505L16.3149254 38.1744505C16.5910678 38.1744505 16.8149254 38.3983082 16.8149254 38.6744505 16.8149254 38.6968642 16.8134183 38.7192526 16.8104143 38.7414641L16.5839494 40.4159146C16.55041 40.6639006 16.3387043 40.8489011 16.0884606 40.8489011L10.0465791 40.8489011C9.7704367 40.8489011 9.54657907 40.6250435 9.54657907 40.3489011 9.54657907 40.3257952 9.54818071 40.3027171 9.55137248 40.2798328zM25.2618169 30.5450857L27.365844 40.2428879C27.4243935 40.5127519 27.2530892 40.7789836 26.9832252 40.8375331 26.9483937 40.8450901 26.9128539 40.8489011 26.877212 40.8489011L25.017712 40.8489011C24.7774965 40.8489011 24.5712291 40.6780766 24.5264688 40.4420682L24.273859 39.1101296C24.2290987 38.8741212 24.0228313 38.7032967 23.7826158 38.7032967L21.6737234 38.7032967C21.475839 38.7032967 21.2965724 38.8200012 21.2164933 39.0009587L20.5304477 40.5512391C20.4503686 40.7321966 20.2711021 40.8489011 20.0732176 40.8489011L18.3049929 40.8489011C18.0288505 40.8489011 17.8049929 40.6250435 17.8049929 40.3489011 17.8049929 40.2729821 17.8222812 40.1980599 17.8555465 40.1298168L22.5827762 30.4320146C22.6665559 30.2601425 22.8410184 30.1510989 23.0322226 30.1510989L24.773185 30.1510989C25.0084749 30.1510989 25.2119293 30.3151453 25.2618169 30.5450857zM22.2977121 36.3008242L23.895274 36.3008242 23.5787759 33.1730769 23.4732765 33.1730769 22.2977121 36.3008242zM28.4615085 38.7933304L29.6600776 37.7982307C29.867419 37.6260869 30.1698805 37.6329436 30.3692081 37.8143064 30.3692081 37.8143064 30.3692081 37.8143064 30.3692081 37.8143064 30.8626279 38.2632556 31.5697924 38.4917582 32.2174996 38.4917582 32.9409239 38.4917582 33.5739201 38.2348901 33.6794195 37.6758242 33.7999902 37.010989 32.8655672 36.7239011 32.0065008 36.603022 30.3335822 36.331044 28.8264482 34.9862637 29.2032317 32.9615385 29.6101579 30.7706044 31.5392893 30 33.4985634 30 34.6675402 30 35.7629615 30.294974 36.6410928 31.3393989 36.6410928 31.3393989 36.6410928 31.3393989 36.6410928 31.3393989L36.6410928 31.3393989C36.7911777 31.5179057 36.7681372 31.784282 36.5896304 31.9343669 36.5796762 31.9427362 36.5693406 31.9506412 36.5586568 31.9580566L35.2852973 32.8418354C35.1082978 32.964687 34.8717504 32.9572254 34.7028454 32.8234627 34.7028454 32.8234627 34.7028454 32.8234627 34.7028454 32.8234627 34.2644214 32.476257 33.6924031 32.3091824 33.1820653 32.2967033 32.503855 32.2815934 31.9311441 32.5384615 31.8708588 33.0824176 31.7955021 33.7019231 32.3380703 33.9739011 33.1519226 34.1552198 35.0056973 34.5027473 36.8142581 35.2129121 36.3169039 37.8722527 35.925049 39.9574176 34.1164883 41 31.8105734 41 30.6586546 41 29.2630198 40.4746703 28.4016401 39.4349963 28.4016401 39.4349963 28.4016401 39.4349963 28.4016401 39.4349963L28.4016401 39.4349963C28.2411035 39.2412306 28.2678891 38.9540435 28.4614898 38.7933078zM38.3784498 38.7933304L39.5770189 37.7982307C39.7843603 37.6260869 40.0868217 37.6329436 40.2861493 37.8143064 40.2861493 37.8143064 40.2861493 37.8143064 40.2861493 37.8143064 40.7795691 38.2632556 41.4867336 38.4917582 42.1344408 38.4917582 42.8578651 38.4917582 43.4908613 38.2348901 43.5963607 37.6758242 43.7169314 37.010989 42.7825084 36.7239011 41.9234421 36.603022 40.2505234 36.331044 38.7433895 34.9862637 39.120173 32.9615385 39.5270991 30.7706044 41.4562305 30 43.4155046 30 44.5844814 30 45.6799028 30.294974 46.558034 31.3393989 46.558034 31.3393989 46.558034 31.3393989 46.558034 31.3393989L46.558034 31.3393989C46.708119 31.5179057 46.6850785 31.784282 46.5065716 31.9343669 46.4966174 31.9427362 46.4862819 31.9506412 46.4755981 31.9580566L45.2022385 32.8418354C45.025239 32.964687 44.7886916 32.9572254 44.6197866 32.8234627 44.6197866 32.8234627 44.6197866 32.8234627 44.6197866 32.8234627 44.1813626 32.476257 43.6093444 32.3091824 43.0990065 32.2967033 42.4207963 32.2815934 41.8480854 32.5384615 41.7878 33.0824176 41.7124433 33.7019231 42.2550115 33.9739011 43.0688638 34.1552198 44.9226386 34.5027473 46.7311993 35.2129121 46.2338451 37.8722527 45.8419903 39.9574176 44.0334296 41 41.7275147 41 40.5755958 41 39.179961 40.4746703 38.3185814 39.4349963 38.3185814 39.4349963 38.3185814 39.4349963 38.3185814 39.4349963L38.3185814 39.4349963C38.1580447 39.2412306 38.1848304 38.9540435 38.378431 38.7933078zM51.984237 30.7201672L50.6316481 40.4179694C50.5971892 40.6650332 50.3858968 40.8489011 50.1364415 40.8489011L48.4483514 40.8489011C48.1722091 40.8489011 47.9483514 40.6250435 47.9483514 40.3489011 47.9483514 40.3257952 47.9499531 40.3027171 47.9531448 40.2798328L49.3057337 30.5820306C49.3401926 30.3349668 49.551485 30.1510989 49.8009403 30.1510989L51.4890304 30.1510989C51.7651728 30.1510989 51.9890304 30.3749565 51.9890304 30.6510989 51.9890304 30.6742048 51.9874287 30.6972829 51.984237 30.7201672z"
                        })
                    })]
                })
            }
        },
        192441: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("920040");

            function i(e) {
                let {
                    className: t
                } = e;
                return (0, a.jsxs)("svg", {
                    width: "135",
                    height: "32",
                    viewBox: "0 0 135 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: t,
                    children: [(0, a.jsx)("path", {
                        d: "M2.17332 27.8901L6.92419 26.1319C7.02527 26.044 7.02527 25.9561 6.92419 25.9561L2.17332 24.1099L0.050529 20.0659C0.050529 19.978 -0.0505667 19.978 -0.15165 20.0659L-2.17332 24.1099H-2.27438L-6.92419 25.9561C-7.02527 25.9561 -7.02527 26.044 -6.92419 26.1319L-2.27438 27.8901H-2.17332L-0.15165 31.9341C-0.0505667 32.022 0.050529 32.022 0.050529 31.9341L2.17332 27.8901Z",
                        fill: "#F2F3F5"
                    }), (0, a.jsx)("path", {
                        d: "M6.7581 18.6026L4.04332 17.5769C3.98556 17.5256 3.98556 17.4744 4.04332 17.4744L6.7581 16.3974L7.97113 14.0385C7.97113 13.9872 8.0289 13.9872 8.08666 14.0385L9.2419 16.3974H9.29964L11.9567 17.4744C12.0144 17.4744 12.0144 17.5256 11.9567 17.5769L9.29964 18.6026H9.2419L8.08666 20.9615C8.0289 21.0128 7.97113 21.0128 7.97113 20.9615L6.7581 18.6026Z",
                        fill: "#F2F3F5"
                    }), (0, a.jsx)("path", {
                        d: "M129.758 12.6026L127.043 11.5769C126.986 11.5256 126.986 11.4744 127.043 11.4744L129.758 10.3974L130.971 8.03846C130.971 7.98718 131.029 7.98718 131.087 8.03846L132.242 10.3974H132.3L134.957 11.4744C135.014 11.4744 135.014 11.5256 134.957 11.5769L132.3 12.6026H132.242L131.087 14.9615C131.029 15.0128 130.971 15.0128 130.971 14.9615L129.758 12.6026Z",
                        fill: "#F2F3F5"
                    }), (0, a.jsx)("path", {
                        d: "M116.482 7.2326L112.07 5.62087C111.977 5.54029 111.977 5.45972 112.07 5.45972L116.482 3.7674L118.453 0.0604396C118.453 -0.0201465 118.547 -0.0201465 118.641 0.0604396L120.518 3.7674H120.612L124.93 5.45972C125.023 5.45972 125.023 5.54029 124.93 5.62087L120.612 7.2326H120.518L118.641 10.9396C118.547 11.0201 118.453 11.0201 118.453 10.9396L116.482 7.2326Z",
                        fill: "#F2F3F5"
                    })]
                })
            }
            n("773670")
        }
    }
]);