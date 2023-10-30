(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94595"], {
        437412: function(t, e, s) {
            "use strict";
            t.exports = s.p + "5fca68e67f05bed32eb4.png"
        },
        669146: function(t, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                default: function() {
                    return L
                }
            });
            var i = s("37983"),
                a = s("884691"),
                l = s("414456"),
                n = s.n(l),
                r = s("446674"),
                o = s("77078"),
                u = s("823411"),
                d = s("569272"),
                c = s("206230"),
                f = s("526887"),
                p = s("393414"),
                h = s("546463"),
                g = s("55411"),
                m = s("686470"),
                S = s("697218"),
                C = s("10514"),
                I = s("552712"),
                T = s("953109"),
                M = s("476765"),
                N = s("599110"),
                _ = s("402671"),
                x = s("659632"),
                y = s("380186"),
                E = s("158998"),
                O = s("210721"),
                A = s("845149"),
                G = s("65324"),
                R = s("646718"),
                b = s("49111"),
                F = s("782340"),
                v = s("139194");
            let P = t => {
                let {
                    openedGift: e
                } = t, {
                    createMultipleConfettiAt: s
                } = a.useContext(f.ConfettiCannonContext);
                return a.useEffect(() => {
                    e && s(window.innerWidth / 2, window.innerHeight / 4)
                }, [s, e]), null
            };
            class j extends a.Component {
                componentDidMount() {
                    let {
                        application: t,
                        sku: e,
                        customGiftMessage: s,
                        giftCode: i
                    } = this.props;
                    null == t && null != e && u.default.fetchApplication(e.applicationId);
                    let a = null != s || null != i.giftStyle;
                    this.setState({
                        isCustomGift: a
                    }), this.trackStepAnalytics()
                }
                get step() {
                    let {
                        libraryApplication: t,
                        accepting: e,
                        giftCode: s
                    } = this.props, {
                        error: i,
                        accepted: a,
                        opened: l,
                        isCustomGift: n
                    } = this.state;
                    return (0, x.getStep)(t, s, i, a, e, l, n)
                }
                get buttonText() {
                    return (0, x.getButtonText)(this.step, this.props.giftCode, this.state.isCustomGift)
                }
                get firstHeaderText() {
                    let {
                        isCustomGift: t,
                        opened: e,
                        accepted: s
                    } = this.state, {
                        giftCode: i,
                        subscriptionPlan: a
                    } = this.props;
                    if (t && !s) {
                        if (!e) return F.default.Messages.GIFT_RECIPIENT_INFO.format({
                            recipientDisplayName: E.default.getName(S.default.getCurrentUser())
                        });
                        {
                            let t = S.default.getUser(i.userId);
                            return F.default.Messages.GIFT_SUBSCRIPTION_INFO.format({
                                senderDisplayName: E.default.getName(t),
                                timeInterval: (null == a ? void 0 : a.interval) === R.SubscriptionIntervalTypes.MONTH ? F.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH : F.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                            })
                        }
                    }
                    return null == this.props.sku ? null : (0, x.getHeaderText)(this.step, this.props.giftCode, this.props.sku)
                }
                get secondHeaderText() {
                    if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
                    let t = S.default.getUser(this.props.giftCode.userId);
                    return F.default.Messages.GIFT_SENDER_INFO.format({
                        senderDisplayName: E.default.getName(t)
                    })
                }
                get bodyText() {
                    let {
                        sku: t,
                        accepting: e,
                        libraryApplication: s,
                        subscriptionPlan: i
                    } = this.props;
                    if (null == t) return null;
                    let {
                        error: a,
                        accepted: l,
                        isCustomGift: n,
                        opened: r
                    } = this.state;
                    return !r && n ? null : (0, x.getBodyText)({
                        step: this.step,
                        sku: t,
                        libraryApplication: s,
                        error: a,
                        accepted: l,
                        accepting: e,
                        onGoToLibrary: this.handleGoToLibrary,
                        subscriptionPlan: i
                    })
                }
                get errorMessage() {
                    let {
                        libraryApplication: t,
                        accepting: e
                    } = this.props, {
                        error: s,
                        accepted: i
                    } = this.state;
                    return (0, x.getErrorMessage)(t, s, i, e, this.handleGoToLibrary)
                }
                get handleClick() {
                    let {
                        giftCode: t,
                        onClose: e
                    } = this.props;
                    switch (this.step) {
                        case b.GiftCodeModalStates.ERROR:
                            return e;
                        case b.GiftCodeModalStates.SUCCESS:
                            if (__OVERLAY__ || null != t.subscriptionPlanId) return e;
                            return this.handleGoToLibrary;
                        case b.GiftCodeModalStates.OPEN:
                            return this.handleOpen;
                        case b.GiftCodeModalStates.CONFIRM:
                        default:
                            return this.handleAccept
                    }
                }
                trackStepAnalytics() {
                    let {
                        giftCode: t,
                        customGiftMessage: e
                    } = this.props, {
                        isCustomGift: s
                    } = this.state;
                    N.default.track(b.AnalyticEvents.GIFT_ACCEPT_STEP, {
                        to_step: this.step,
                        has_custom_message: s,
                        is_custom_message_edited: s && e !== F.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE,
                        gift_style: t.giftStyle,
                        gift_code: t.code
                    })
                }
                render() {
                    let {
                        application: t,
                        accepting: e,
                        onClose: s,
                        giftCode: a,
                        headerId: l,
                        transitionState: r,
                        useReducedMotion: u,
                        onComplete: d,
                        customGiftMessage: c
                    } = this.props, f = S.default.getUser(a.userId), {
                        isCustomGift: p,
                        accepted: h,
                        opened: g,
                        emojiURL: m
                    } = this.state, C = S.default.getCurrentUser(), I = (null == a ? void 0 : a.userId) != null && null != C && (null == C ? void 0 : C.id) != null && a.userId === C.id;
                    switch (this.step) {
                        case b.GiftCodeModalStates.ERROR:
                            null == d || d(a, !1);
                            break;
                        case b.GiftCodeModalStates.SUCCESS:
                            null == d || d(a, !0)
                    }
                    return (0, i.jsxs)("div", {
                        ref: this.modalRef,
                        children: [(0, i.jsxs)(o.ModalRoot, {
                            transitionState: r,
                            size: o.ModalSize.SMALL,
                            className: v.modal,
                            "aria-labelledby": l,
                            children: [null != a.giftStyle && !p && (0, i.jsx)(G.default, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: a.giftStyle,
                                className: v.seasonalGiftIcon
                            }), (0, i.jsx)("div", {
                                className: p ? void 0 : v.backSplash
                            }), (0, i.jsxs)(o.ModalContent, {
                                className: n({
                                    [v.content]: !p,
                                    [v.contentCustomGift]: p
                                }),
                                children: [(0, i.jsx)(o.ModalCloseButton, {
                                    onClick: s,
                                    className: v.closeButton
                                }), (null == a.giftStyle || p && h) && (0, i.jsx)(T.default, {
                                    size: T.default.Sizes.LARGE,
                                    game: t,
                                    skuId: a.skuId
                                }), (0, i.jsxs)(o.Heading, {
                                    id: l,
                                    className: n({
                                        [v.customGiftHeader]: p && !h,
                                        [v.header]: !p || h
                                    }),
                                    variant: "heading-sm/semibold",
                                    children: [(0, i.jsx)("div", {
                                        className: n({
                                            [v.customGiftHeaderText]: p
                                        }),
                                        children: this.firstHeaderText
                                    }), (0, i.jsx)("div", {
                                        children: this.secondHeaderText
                                    })]
                                }), !(p && !h) && (0, i.jsx)(o.Text, {
                                    className: v.body,
                                    variant: "text-sm/normal",
                                    children: this.bodyText
                                }), p && null != a.giftStyle && !h && (0, i.jsx)(G.default, {
                                    defaultAnimationState: this.getDefaultAnimationStatus(),
                                    idleAnimationState: this.getIdleAnimationStatus(),
                                    className: v.giftAnimation,
                                    giftStyle: a.giftStyle
                                }), p && this.state.opened && !this.state.accepted && null != c && "" !== c && !I && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(o.FormTitle, {
                                        children: F.default.Messages.GIFT_SENDER_INFO.format({
                                            senderDisplayName: E.default.getName(f)
                                        })
                                    }), (0, i.jsx)(o.Heading, {
                                        id: l,
                                        className: v.customMessage,
                                        variant: "heading-sm/bold",
                                        children: this.props.customGiftMessage
                                    })]
                                }), (0, i.jsx)(o.Button, {
                                    submitting: e,
                                    onClick: () => {
                                        this.trackStepAnalytics(), this.handleClick()
                                    },
                                    children: this.buttonText
                                })]
                            })]
                        }), null != a.giftStyle && !u && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(P, {
                                openedGift: g && !h && !e
                            }), !h && !e && g && !1]
                        })]
                    })
                }
                constructor(...t) {
                    super(...t), this.state = {
                        error: null,
                        accepted: !1,
                        opened: !1,
                        isCustomGift: !1,
                        step: void 0,
                        emojiURL: _.default.getURL("\uD83D\uDE00")
                    }, this.modalRef = a.createRef(), this.handleOpen = () => {
                        this.setState({
                            opened: !0
                        })
                    }, this.handleAccept = async () => {
                        let {
                            giftCode: t,
                            channelContext: e
                        } = this.props;
                        if (null == t) throw Error("GiftCode is null at acceptance.");
                        try {
                            await d.default.redeemGiftCode(t.code, {
                                channelId: e
                            }), this.setState({
                                accepted: !0
                            })
                        } catch (t) {
                            this.setState({
                                error: t
                            })
                        }
                    }, this.handleGoToLibrary = () => {
                        let {
                            onClose: t,
                            libraryApplication: e
                        } = this.props;
                        (0, p.transitionTo)(b.Routes.APPLICATION_LIBRARY, {
                            state: {
                                applicationId: null != e ? e.id : null
                            }
                        }), t()
                    }, this.getDefaultAnimationStatus = () => {
                        if (this.step === b.GiftCodeModalStates.OPEN) return O.AnimationState.IDLE;
                        return O.AnimationState.ACTION
                    }, this.getIdleAnimationStatus = () => {
                        if (this.step !== b.GiftCodeModalStates.OPEN) return O.AnimationState.LOOP
                    }
                }
            }
            let k = r.default.connectStores([m.default, I.default, h.default, g.default, C.default, c.default], t => {
                let {
                    giftCode: e
                } = t, s = I.default.get(e.skuId), i = null != s ? h.default.getGame(s.applicationId) : null, a = c.default.useReducedMotion;
                return {
                    sku: s,
                    libraryApplication: null != s ? (0, x.firstLibraryApplicationForGiftCode)(e, s, m.default) : null,
                    application: i,
                    subscriptionPlan: null != e.subscriptionPlanId ? (0, y.getOrFetchSubscriptionPlan)(e.subscriptionPlanId) : null,
                    accepting: g.default.getIsAccepting(e.code),
                    useReducedMotion: a
                }
            })(j);
            var L = t => {
                let {
                    channelContext: e,
                    code: s,
                    customGiftMessage: a,
                    ...l
                } = t, n = (0, M.useUID)(), o = (0, r.useStateFromStores)([g.default], () => g.default.get(s));
                return null == o ? null : (0, i.jsx)(k, {
                    ...l,
                    customGiftMessage: a,
                    channelContext: e,
                    giftCode: o,
                    headerId: n
                })
            }
        },
        845149: function(t, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                default: function() {
                    return o
                }
            });
            var i = s("37983"),
                a = s("884691"),
                l = s("516555"),
                n = s("526887"),
                r = s("172858"),
                o = function(t) {
                    let {
                        confettiTarget: e,
                        colors: o,
                        emojiURL: u
                    } = t, [d, c] = a.useState(null), {
                        confettiCanvas: f
                    } = a.useContext(n.ConfettiCannonContext), p = (0, l.useConfettiCannon)(f, d), h = a.useMemo(() => [{
                        src: u,
                        colorize: !1
                    }, s("540346")], [u]);
                    return a.useEffect(() => {
                        let t = [, , , , , ].fill(0);
                        return null != e && (t = t.map((t, s) => setTimeout(() => {
                            var t;
                            p.createMultipleConfetti((t = e.getBoundingClientRect(), {
                                ...r.COMMON_CONFETTI_BASE_CONFIG,
                                position: {
                                    type: "static-random",
                                    minValue: {
                                        x: t.left + 10,
                                        y: t.top + 50
                                    },
                                    maxValue: {
                                        x: t.right - 10,
                                        y: t.top + 100
                                    }
                                },
                                velocity: {
                                    type: "static-random",
                                    minValue: {
                                        x: -25,
                                        y: -25
                                    },
                                    maxValue: {
                                        x: 25,
                                        y: -75
                                    }
                                },
                                dragCoefficient: {
                                    type: "static",
                                    value: .001
                                }
                            }), 50)
                        }, 40 * s))), () => {
                            for (let e of t) clearTimeout(e)
                        }
                    }, [p, e]), (0, i.jsx)(l.SpriteCanvas, {
                        ref: c,
                        sprites: null != h ? h : r.COMMON_CONFETTI_SPRITES,
                        colors: null != o ? o : r.COMMON_CONFETTI_COLORS,
                        spriteWidth: r.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                        spriteHeight: r.COMMON_CONFETTI_MAX_SPRITE_SIZE
                    })
                }
        }
    }
]);