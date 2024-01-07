            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return J
                }
            }), s("222007"), s("70102");
            var i = s("37983"),
                n = s("884691"),
                a = s("414456"),
                o = s.n(a),
                u = s("265586"),
                r = s("446674"),
                l = s("819855"),
                c = s("77078"),
                d = s("569272"),
                p = s("841098"),
                f = s("206230"),
                m = s("812204"),
                h = s("685665"),
                _ = s("651057"),
                g = s("299285"),
                x = s("491232"),
                b = s("426188"),
                C = s("355033"),
                v = s("264579"),
                S = s("526887"),
                I = s("393414"),
                T = s("235004"),
                E = s("55411"),
                O = s("686470"),
                y = s("697218"),
                A = s("10514"),
                M = s("552712"),
                N = s("953109"),
                R = s("476765"),
                F = s("599110"),
                j = s("402671"),
                G = s("659632"),
                L = s("380186"),
                P = s("158998"),
                D = s("895737"),
                w = s("210721"),
                k = s("845149"),
                U = s("65324"),
                H = s("646718"),
                B = s("49111"),
                z = s("782340"),
                V = s("139194"),
                Y = s("653240"),
                Z = s("140802");
            let W = e => {
                    let {
                        openedGift: t
                    } = e, {
                        createMultipleConfettiAt: s
                    } = n.useContext(S.ConfettiCannonContext);
                    return n.useEffect(() => {
                        t && s(window.innerWidth / 2, window.innerHeight / 4)
                    }, [s, t]), null
                },
                X = e => {
                    let {
                        step: t,
                        soundId: s
                    } = e;
                    return n.useEffect(() => {
                        var e;
                        if (t !== B.GiftCodeModalStates.CONFIRM) return;
                        let i = T.default.getSoundById(s);
                        (0, D.playGiftSound)(s, null !== (e = null == i ? void 0 : i.volume) && void 0 !== e ? e : 1)
                    }, [t, s]), null
                };
            class K extends n.Component {
                componentDidMount() {
                    let {
                        application: e,
                        sku: t,
                        customGiftMessage: s,
                        giftCode: i,
                        emojiName: n
                    } = this.props;
                    null == e && null != t && _.default.fetchApplication(t.applicationId);
                    let a = null != s || null != i.giftStyle,
                        o = (0, x.isCollectiblesGiftCode)(i),
                        u = null != n ? j.default.getURL(n) : void 0;
                    this.setState({
                        isCustomGift: a,
                        isCollectiblesGift: o,
                        emojiURL: u,
                        opened: o
                    }), this.trackStepAnalytics()
                }
                get step() {
                    let {
                        libraryApplication: e,
                        accepting: t,
                        giftCode: s
                    } = this.props, {
                        error: i,
                        accepted: n,
                        opened: a,
                        isCustomGift: o
                    } = this.state;
                    return (0, G.getStep)(e, s, i, n, t, a, o)
                }
                get buttonText() {
                    return (0, G.getButtonText)(this.step, this.props.giftCode, this.state.isCustomGift)
                }
                get firstHeaderText() {
                    let {
                        isCustomGift: e,
                        opened: t,
                        accepted: s
                    } = this.state, {
                        giftCode: i,
                        subscriptionPlan: n,
                        collectiblesItemType: a
                    } = this.props;
                    if (e && this.step === B.GiftCodeModalStates.ERROR) return z.default.Messages.GIFT_CONFIRMATION_HEADER_FAIL;
                    if (e && !s) {
                        if (!t) return z.default.Messages.GIFT_RECIPIENT_INFO.format({
                            recipientDisplayName: P.default.getName(y.default.getCurrentUser())
                        });
                        {
                            let e = y.default.getUser(i.userId),
                                t = P.default.getName(e);
                            return a === u.CollectiblesItemType.AVATAR_DECORATION ? z.default.Messages.COLLECTIBLES_SENDER_GIFTED_YOU_DECORATION.format({
                                sender: t
                            }) : a === u.CollectiblesItemType.PROFILE_EFFECT ? z.default.Messages.COLLECTIBLES_SENDER_GIFTED_YOU_EFFECT.format({
                                sender: t
                            }) : z.default.Messages.GIFT_SUBSCRIPTION_INFO.format({
                                sender: t,
                                timeInterval: (null == n ? void 0 : n.interval) === H.SubscriptionIntervalTypes.MONTH ? z.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH : z.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                            })
                        }
                    }
                    return null == this.props.sku ? null : (0, G.getHeaderText)(this.step, this.props.giftCode, this.props.sku)
                }
                get secondHeaderText() {
                    if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
                    let e = y.default.getUser(this.props.giftCode.userId);
                    return z.default.Messages.GIFT_SENDER_INFO.format({
                        sender: P.default.getName(e)
                    })
                }
                get bodyText() {
                    let {
                        sku: e,
                        accepting: t,
                        libraryApplication: s,
                        subscriptionPlan: i
                    } = this.props;
                    if (null == e) return null;
                    let {
                        error: n,
                        accepted: a,
                        isCustomGift: o,
                        opened: u
                    } = this.state;
                    return !u && o ? null : (0, G.getBodyText)({
                        step: this.step,
                        sku: e,
                        libraryApplication: s,
                        error: n,
                        accepted: a,
                        accepting: t,
                        onGoToLibrary: this.handleGoToLibrary,
                        subscriptionPlan: i
                    })
                }
                get errorMessage() {
                    let {
                        libraryApplication: e,
                        accepting: t
                    } = this.props, {
                        error: s,
                        accepted: i
                    } = this.state;
                    return (0, G.getErrorMessage)(e, s, i, t, this.handleGoToLibrary)
                }
                get handleClick() {
                    let {
                        giftCode: e,
                        onClose: t
                    } = this.props;
                    switch (this.step) {
                        case B.GiftCodeModalStates.ERROR:
                            return t;
                        case B.GiftCodeModalStates.SUCCESS:
                            if (__OVERLAY__ || null != e.subscriptionPlanId) return t;
                            return this.handleGoToLibrary;
                        case B.GiftCodeModalStates.OPEN:
                            return this.handleOpen;
                        case B.GiftCodeModalStates.CONFIRM:
                        default:
                            return this.handleAccept
                    }
                }
                trackStepAnalytics() {
                    let {
                        giftCode: e,
                        customGiftMessage: t,
                        emojiName: s,
                        soundId: i
                    } = this.props, {
                        isCustomGift: n
                    } = this.state;
                    F.default.track(B.AnalyticEvents.GIFT_ACCEPT_STEP, {
                        to_step: this.step,
                        has_custom_message: n,
                        is_custom_message_edited: n && t !== z.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE,
                        gift_style: e.giftStyle,
                        gift_code: e.code,
                        emoji_name: s,
                        sound_id: i
                    })
                }
                render() {
                    let {
                        application: e,
                        accepting: t,
                        onClose: s,
                        giftCode: n,
                        headerId: a,
                        transitionState: u,
                        useReducedMotion: r,
                        onComplete: l,
                        customGiftMessage: d,
                        emojiName: p,
                        soundId: f,
                        isThemeDark: m
                    } = this.props, h = y.default.getUser(n.userId), {
                        isCustomGift: _,
                        isCollectiblesGift: g,
                        accepted: x,
                        opened: b,
                        emojiURL: v
                    } = this.state, S = y.default.getCurrentUser(), I = this.step === B.GiftCodeModalStates.ERROR, T = (null == n ? void 0 : n.userId) != null && null != S && (null == S ? void 0 : S.id) != null && n.userId === S.id;
                    switch (this.step) {
                        case B.GiftCodeModalStates.ERROR:
                            null == l || l(n, !1);
                            break;
                        case B.GiftCodeModalStates.SUCCESS:
                            null == l || l(n, !0)
                    }
                    return (0, i.jsxs)("div", {
                        ref: this.modalRef,
                        children: [(0, i.jsxs)(c.ModalRoot, {
                            transitionState: u,
                            size: c.ModalSize.SMALL,
                            className: V.modal,
                            "aria-labelledby": a,
                            children: [null != n.giftStyle && !_ && !g && (0, i.jsx)(U.default, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: n.giftStyle,
                                className: V.seasonalGiftIcon
                            }), (0, i.jsx)("div", {
                                className: _ ? void 0 : V.backSplash
                            }), (0, i.jsxs)(c.ModalContent, {
                                className: o({
                                    [V.content]: !_,
                                    [V.contentCustomGift]: _
                                }),
                                children: [!g && (0, i.jsx)(c.ModalCloseButton, {
                                    onClick: s,
                                    className: V.closeButton
                                }), !g && (null == n.giftStyle || _ && x) && (0, i.jsx)(N.default, {
                                    size: N.default.Sizes.LARGE,
                                    game: e,
                                    skuId: n.skuId
                                }), I && (0, i.jsx)("img", {
                                    alt: "",
                                    src: m ? Y : Z
                                }), (0, i.jsxs)(c.Heading, {
                                    id: a,
                                    className: o({
                                        [V.customGiftHeader]: _ && !x,
                                        [V.header]: !_ || x
                                    }),
                                    variant: "heading-sm/semibold",
                                    children: [(0, i.jsx)("div", {
                                        className: o({
                                            [V.customGiftHeaderText]: _
                                        }),
                                        children: this.firstHeaderText
                                    }), (0, i.jsx)("div", {
                                        children: this.secondHeaderText
                                    })]
                                }), !(_ && !x) && (0, i.jsx)(c.Text, {
                                    className: V.body,
                                    variant: "text-sm/normal",
                                    children: this.bodyText
                                }), _ && !g && null != n.giftStyle && !x && (0, i.jsx)(U.default, {
                                    defaultAnimationState: this.getDefaultAnimationStatus(),
                                    idleAnimationState: this.getIdleAnimationStatus(),
                                    className: V.giftAnimation,
                                    giftStyle: n.giftStyle
                                }), this.state.opened && !I && (0, i.jsx)(C.default, {
                                    giftCode: n
                                }), I && (0, i.jsx)(c.Text, {
                                    className: V.body,
                                    variant: "text-md/normal",
                                    children: this.errorMessage
                                }), _ && this.state.opened && !this.state.accepted && !I && null != d && "" !== d && !T && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(c.FormTitle, {
                                        children: z.default.Messages.GIFT_SENDER_INFO.format({
                                            sender: P.default.getName(h)
                                        })
                                    }), (0, i.jsx)(c.Heading, {
                                        id: a,
                                        className: V.customMessage,
                                        variant: "heading-sm/bold",
                                        children: d
                                    })]
                                }), (0, i.jsx)(c.Button, {
                                    submitting: t,
                                    onClick: () => {
                                        this.trackStepAnalytics(), this.handleClick()
                                    },
                                    children: this.buttonText
                                })]
                            })]
                        }), null != n.giftStyle && !r && this.step !== B.GiftCodeModalStates.ERROR && (0, i.jsx)(i.Fragment, {
                            children: !x && !t && b && (null == p || null == v ? (0, i.jsx)(W, {
                                openedGift: b && !x && !t
                            }) : (0, i.jsx)(k.default, {
                                confettiTarget: this.modalRef.current,
                                emojiURL: v
                            }))
                        }), !x && !t && b && null != f && (0, i.jsx)(X, {
                            soundId: f,
                            step: this.step
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        error: null,
                        accepted: !1,
                        opened: !1,
                        isCustomGift: !1,
                        isCollectiblesGift: !1,
                        step: void 0,
                        emojiURL: void 0
                    }, this.modalRef = n.createRef(), this.handleOpen = () => {
                        this.setState({
                            opened: !0
                        })
                    }, this.handleAccept = async () => {
                        let {
                            giftCode: e,
                            channelContext: t,
                            onAccept: s
                        } = this.props;
                        if (null == e) throw Error("GiftCode is null at acceptance.");
                        try {
                            await d.default.redeemGiftCode({
                                code: e.code,
                                options: {
                                    channelId: t
                                }
                            }), this.setState({
                                accepted: !0
                            }), null == s || s()
                        } catch (e) {
                            this.setState({
                                error: e
                            })
                        }
                    }, this.handleGoToLibrary = () => {
                        let {
                            onClose: e,
                            libraryApplication: t
                        } = this.props;
                        (0, I.transitionTo)(B.Routes.APPLICATION_LIBRARY, {
                            state: {
                                applicationId: null != t ? t.id : null
                            }
                        }), e()
                    }, this.getDefaultAnimationStatus = () => {
                        if (this.step === B.GiftCodeModalStates.OPEN) return w.AnimationState.IDLE;
                        return w.AnimationState.ACTION
                    }, this.getIdleAnimationStatus = () => {
                        if (this.step !== B.GiftCodeModalStates.OPEN) return w.AnimationState.LOOP
                    }
                }
            }
            let q = r.default.connectStores([O.default, M.default, g.default, E.default, A.default, f.default], e => {
                let {
                    giftCode: t
                } = e, s = M.default.get(t.skuId), i = null != s ? g.default.getApplication(s.applicationId) : null, n = f.default.useReducedMotion;
                return {
                    sku: s,
                    libraryApplication: null != s && (null == t ? void 0 : t.entitlementBranches) != null ? (0, G.firstLibraryApplicationForGiftCode)(t.entitlementBranches, s, O.default) : null,
                    application: i,
                    subscriptionPlan: null != t.subscriptionPlanId ? (0, L.getOrFetchSubscriptionPlan)(t.subscriptionPlanId) : null,
                    accepting: E.default.getIsAccepting(t.code),
                    useReducedMotion: n
                }
            })(K);
            var J = e => {
                var t;
                let {
                    channelContext: s,
                    code: n,
                    customGiftMessage: a,
                    emojiName: o,
                    soundId: u,
                    onClose: c,
                    ...d
                } = e, f = (0, R.useUID)(), _ = (0, r.useStateFromStores)([E.default], () => E.default.get(n)), g = (0, p.default)(), {
                    analyticsLocations: x
                } = (0, h.default)(m.default.GIFT_CODE_MODAL), {
                    product: C
                } = (0, b.useFetchCollectiblesProduct)(null == _ ? void 0 : _.skuId);
                return null == _ ? null : (0, i.jsx)(q, {
                    ...d,
                    customGiftMessage: a,
                    channelContext: s,
                    giftCode: _,
                    headerId: f,
                    emojiName: o,
                    soundId: u,
                    analyticsLocations: x,
                    isThemeDark: (0, l.isThemeDark)(g),
                    onClose: c,
                    collectiblesItemType: null == C ? void 0 : null === (t = C.items[0]) || void 0 === t ? void 0 : t.type,
                    onAccept: null != C ? () => {
                        c(), (0, v.default)({
                            product: C,
                            analyticsLocations: x
                        })
                    } : void 0
                })
            }