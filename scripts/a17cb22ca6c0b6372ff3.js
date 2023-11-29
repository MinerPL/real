(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40092"], {
        749432: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return x
                }
            }), t("222007");
            var a = t("37983"),
                l = t("884691"),
                n = t("917351"),
                i = t.n(n),
                u = t("446674"),
                _ = t("862337"),
                r = t("77078"),
                I = t("54239"),
                d = t("736964"),
                o = t("777273"),
                N = t("79112"),
                T = t("87657"),
                E = t("210721"),
                R = t("671484"),
                c = t("27618"),
                S = t("102985"),
                f = t("843823"),
                M = t("697218"),
                A = t("188525"),
                C = t("145131"),
                P = t("953109"),
                O = t("306160"),
                L = t("659632"),
                p = t("719923"),
                h = t("158998"),
                m = t("49111"),
                g = t("646718"),
                U = t("782340"),
                G = t("146948");
            class F extends l.Component {
                componentWillUnmount() {
                    this._copyModeTimeout.stop()
                }
                get iconSKUId() {
                    let {
                        subscriptionPlan: e,
                        sku: s
                    } = this.props;
                    return null != e ? e.skuId : null != s ? s.id : null
                }
                get headerBlurb() {
                    let e;
                    let {
                        subscriptionPlan: s,
                        hasSentMessage: t,
                        giftMessageError: a,
                        giftRecipient: l,
                        selectedGiftStyle: n
                    } = this.props, i = null != n && g.SeasonalGiftStyles2023.includes(n);
                    if (null != a) return U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB;
                    if (null == s) return U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_BLURB;
                    let u = t || null != l;
                    return (e = s.interval === g.SubscriptionIntervalTypes.MONTH ? u ? i ? U.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : u ? i ? U.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
                        skuName: (0, p.getTierDisplayName)(s.id),
                        intervalCount: s.intervalCount
                    })
                }
                render() {
                    let e, s;
                    let {
                        application: t,
                        selectedGiftStyle: l,
                        hasSentMessage: n,
                        giftRecipient: i,
                        giftMessageError: u,
                        isSendingMessage: _
                    } = this.props, I = (0, L.isCustomGiftEnabled)(i);
                    return e = I || n && null == u ? U.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != u ? U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : U.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE, s = _ ? (0, a.jsx)(r.Spinner, {
                        type: r.SpinnerTypes.PULSING_ELLIPSIS
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(r.Heading, {
                            variant: "heading-lg/semibold",
                            className: null != l ? G.headerCustomGifting : G.header,
                            children: e
                        }), n && null != i && null == u || (0, L.isCustomGiftEnabled)(i) ? this.renderConfirmSentGift() : this.renderRequestSendGift()]
                    }), (0, a.jsxs)(C.default, {
                        direction: C.default.Direction.VERTICAL,
                        align: C.default.Align.CENTER,
                        children: [null != t ? (0, a.jsx)(P.default, {
                            game: t,
                            className: G.icon,
                            size: P.default.Sizes.LARGE,
                            skuId: this.iconSKUId
                        }) : null, s]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        copyMode: A.default.Modes.DEFAULT
                    }, this._copyModeTimeout = new _.Timeout, this.handleGiftCodeCopy = (e, s) => {
                        let {
                            sku: t
                        } = this.props;
                        null != t && (0, L.trackGiftCodeCopy)(new R.default({
                            code: s,
                            maxUses: 1
                        }), t);
                        try {
                            (0, O.copy)(e), this.setState({
                                copyMode: A.default.Modes.SUCCESS
                            })
                        } catch (e) {
                            this.setState({
                                copyMode: A.default.Modes.ERROR
                            })
                        }
                        this._copyModeTimeout.start(1500, () => {
                            this.setState({
                                copyMode: A.default.Modes.DEFAULT
                            })
                        })
                    }, this.handleInventoryClick = () => {
                        N.default.open(m.UserSettingsSections.INVENTORY), this.props.onClose()
                    }, this.renderGiftCodeSection = () => {
                        let e;
                        let {
                            obscureGiftCode: s,
                            giftCode: t
                        } = this.props;
                        if (null == t) return null;
                        let {
                            copyMode: l
                        } = this.state;
                        switch (l) {
                            case A.default.Modes.SUCCESS:
                                e = U.default.Messages.BILLING_GIFT_COPIED;
                                break;
                            case A.default.Modes.ERROR:
                                e = U.default.Messages.FAILED;
                                break;
                            default:
                                e = U.default.Messages.COPY
                        }
                        return (0, a.jsx)(C.default, {
                            direction: C.default.Direction.VERTICAL,
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(r.FormTitle, {
                                    children: U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
                                }), null != t && (0, a.jsx)(A.default, {
                                    hideMessage: s ? U.default.Messages.GIFT_INVENTORY_HIDDEN : null,
                                    value: (0, L.getGiftCodeURL)(t),
                                    mode: l,
                                    text: e,
                                    onCopy: e => this.handleGiftCodeCopy(e, t),
                                    supportsCopy: O.SUPPORTS_COPY,
                                    className: G.copyInput,
                                    buttonColor: A.default.ButtonColors.LINK,
                                    buttonLook: A.default.ButtonLooks.LINK
                                }), (0, a.jsx)("div", {
                                    className: G.subtext,
                                    children: U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
                                })]
                            })
                        })
                    }, this.renderRequestSendGift = () => {
                        let {
                            giftCode: e,
                            onClose: s,
                            giftMessageError: t
                        } = this.props;
                        return (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: G.blurb,
                                children: this.headerBlurb
                            }), null == t && (0, a.jsx)(D, {
                                giftCode: e,
                                onClose: s
                            }), (0, a.jsx)("div", {
                                className: G.divider
                            }), this.renderGiftCodeSection()]
                        })
                    }, this.renderConfirmSentGift = () => {
                        let {
                            giftRecipient: e
                        } = this.props;
                        return (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(T.default, {
                                user: e,
                                className: G.giftRecipient,
                                size: r.AvatarSizes.SIZE_80
                            }), (0, a.jsx)(r.Heading, {
                                className: G.giftRecipientName,
                                variant: "heading-md/semibold",
                                children: h.default.getName(e)
                            }), (0, a.jsxs)("div", {
                                className: G.giftRecipientTag,
                                children: [" ", h.default.getUserTag(e)]
                            }), (0, a.jsx)("div", {
                                className: G.giftSentMessage,
                                children: this.headerBlurb
                            })]
                        })
                    }
                }
            }
            let D = e => {
                let {
                    giftCode: s,
                    onClose: t
                } = e;
                l.useEffect(() => {
                    d.default.fetchRelationships(), (0, o.fetchUserAffinities)()
                }, []);
                let [n, _] = l.useState(), [N, R] = l.useState(!1), [S, A] = l.useState(!1), {
                    userAffinities: C,
                    isLoading: P
                } = (0, u.useStateFromStoresObject)([f.default], () => ({
                    userAffinities: f.default.getUserAffinitiesUserIds(),
                    isLoading: f.default.getFetching()
                })), O = Array.from(C.values()), L = (0, u.useStateFromStores)([c.default], () => c.default.getFriendIDs()), p = i.difference(L, O), m = [...O, ...p], g = (0, u.useStateFromStores)([M.default], () => M.default.filter(e => m.includes(e.id) && !e.bot), [m]), F = null == g || 0 === g.length;
                if (F) return null;
                let D = i.sortBy(g, e => m.indexOf(e.id));
                return (0, a.jsxs)("div", {
                    className: G.giftRecipientSection,
                    children: [(0, a.jsx)(r.FormTitle, {
                        children: U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
                    }), (0, a.jsxs)("div", {
                        className: G.giftRecipient,
                        children: [(0, a.jsx)(r.SearchableSelect, {
                            placeholder: U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                            wrapperClassName: G.giftRecipientInputWrapper,
                            className: N ? G.giftRecipientInputError : void 0,
                            renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, a.jsx)(T.default, {
                                user: e.value,
                                size: r.AvatarSizes.SIZE_20
                            }),
                            renderLeading: () => P ? (0, a.jsx)(r.Spinner, {
                                type: r.SpinnerTypes.PULSING_ELLIPSIS
                            }) : null,
                            value: n,
                            onChange: e => {
                                _(e), R(!1)
                            },
                            options: D.map(e => ({
                                value: e,
                                label: "".concat(h.default.getUserTag(e))
                            }))
                        }), (0, a.jsx)(r.Button, {
                            disabled: null == n,
                            submitting: S,
                            className: G.sendToRecipientButton,
                            onClick: () => {
                                A(!0), (0, E.sendGiftMessage)(n, s).then(() => {
                                    t(), (0, I.popAllLayers)()
                                }).catch(() => {
                                    R(!0), A(!1)
                                })
                            },
                            children: U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                        })]
                    }), (0, a.jsx)("div", {
                        className: N ? G.subtextError : G.subtext,
                        children: N ? U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
                    })]
                })
            };
            var x = u.default.connectStores([S.default], () => ({
                obscureGiftCode: S.default.enabled
            }))(F)
        },
        775155: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return C
                },
                PremiumSubscriptionGiftPurchaseConfirmation: function() {
                    return P
                }
            }), t("222007"), t("70102");
            var a = t("37983"),
                l = t("884691"),
                n = t("627445"),
                i = t.n(n),
                u = t("446674"),
                _ = t("77078"),
                r = t("465527"),
                I = t("749432"),
                d = t("635357"),
                o = t("353365"),
                N = t("10514"),
                T = t("552712"),
                E = t("719923"),
                R = t("977934"),
                c = t("646718"),
                S = t("49111"),
                f = t("782340"),
                M = t("535539");

            function A(e) {
                var s, t;
                let l, {
                        planId: n,
                        startingPremiumSubscriptionPlanId: _,
                        paymentSourceType: r
                    } = e,
                    [I, d] = (0, u.useStateFromStoresArray)([N.default], () => [N.default.get(_), N.default.get(n)]);
                if (i(null != I && null != d, "Missing startingPlan or newPlan"), s = _, t = n, c.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(s) < c.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(t)) switch (n) {
                        case c.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                            l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1, S.DELAYED_PAYMENTS.has(null != r ? r : S.PaymentSourceTypes.UNKNOWN) && (l = f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
                            break;
                        case c.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                            l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH, S.DELAYED_PAYMENTS.has(null != r ? r : S.PaymentSourceTypes.UNKNOWN) && (l = f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
                            break;
                        case c.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                            l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR, S.DELAYED_PAYMENTS.has(null != r ? r : S.PaymentSourceTypes.UNKNOWN) && (l = f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
                            break;
                        case c.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                            l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({
                                numFreeGuildSubscriptions: c.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                            }), S.DELAYED_PAYMENTS.has(null != r ? r : S.PaymentSourceTypes.UNKNOWN) && (l = f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({
                                numFreeGuildSubscriptions: c.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                            }));
                            break;
                        case c.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
                        case c.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                            l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
                            break;
                        case c.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                        case c.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                            l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
                            break;
                        default:
                            throw Error("Unexpected planId: ".concat(n))
                    } else if (I.skuId === c.PremiumSubscriptionSKUs.TIER_2 && d.skuId === c.PremiumSubscriptionSKUs.TIER_1) l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
                    else switch (d.skuId) {
                        case c.PremiumSubscriptionSKUs.TIER_0:
                            l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
                            break;
                        case c.PremiumSubscriptionSKUs.TIER_1:
                            l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
                            break;
                        case c.PremiumSubscriptionSKUs.TIER_2:
                            l = 1 !== I.intervalCount ? f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
                            break;
                        default:
                            throw Error("Unexpected skuId: ".concat(d.skuId))
                    }
                return (0, a.jsx)("div", {
                    className: M.text,
                    children: l
                })
            }

            function C(e) {
                let s, t, {
                        planId: n,
                        enableNoPaymentTrial: I,
                        startingPremiumSubscriptionPlanId: d,
                        onClose: o,
                        followupSKUInfo: C,
                        isDowngrade: P,
                        hideClose: O,
                        postSuccessGuild: L,
                        paymentSourceType: p
                    } = e,
                    {
                        theme: h
                    } = (0, _.useThemeContext)(),
                    m = (0, u.useStateFromStores)([T.default], () => null != C ? T.default.get(C.id) : null);
                l.useEffect(() => {
                    if (null == C || null != m) return;
                    let {
                        applicationId: e,
                        id: s
                    } = C;
                    (0, r.fetchSKU)(e, s).catch(S.NOOP_NULL)
                }, [C, m]);
                let g = e => {
                    if (e.skuId === c.PremiumSubscriptionSKUs.TIER_0) return S.DELAYED_PAYMENTS.has(null != p ? p : S.PaymentSourceTypes.UNKNOWN) ? f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
                    if (e.skuId === c.PremiumSubscriptionSKUs.TIER_1) return S.DELAYED_PAYMENTS.has(null != p ? p : S.PaymentSourceTypes.UNKNOWN) ? f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
                    return S.DELAYED_PAYMENTS.has(null != p ? p : S.PaymentSourceTypes.UNKNOWN) ? f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : I ? f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2
                };
                if (null != m) s = (0, a.jsx)("div", {
                    className: M.text,
                    children: f.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
                        skuName: m.name
                    })
                });
                else if (null != d) s = (0, a.jsx)(A, {
                    planId: n,
                    startingPremiumSubscriptionPlanId: d
                });
                else if (null != L) {
                    let e = N.default.get(n);
                    i(null != e, "Missing plan"), s = (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: M.text,
                            children: g(e)
                        }), (0, a.jsx)("div", {
                            className: M.text,
                            children: f.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({
                                guildName: L.name
                            })
                        })]
                    })
                } else {
                    let e = N.default.get(n);
                    i(null != e, "Missing plan"), s = (0, a.jsx)("div", {
                        className: M.text,
                        children: g(e)
                    })
                }
                let U = E.default.getPremiumType(n);
                return i(null != U, "premium type should not be null in purchase confirmation"), t = null != m ? f.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
                    skuName: m.name
                }) : P ? f.default.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != L ? f.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : f.default.Messages.PREMIUM_UPGRADE_DONE_BUTTON, (0, a.jsxs)("div", {
                    className: M.confirmation,
                    children: [(0, a.jsx)(R.default, {
                        className: M.banner,
                        theme: h,
                        premiumType: U,
                        type: S.DELAYED_PAYMENTS.has(null != p ? p : S.PaymentSourceTypes.UNKNOWN) ? R.default.Types.PREMIUM_PAYMENT_STARTED : null != d ? R.default.Types.PREMIUM_UPDATED : R.default.Types.PREMIUM_ACTIVATED
                    }), s, O ? null : (0, a.jsx)(_.Button, {
                        onClick: o,
                        children: t
                    })]
                })
            }

            function P(e) {
                let {
                    planId: s,
                    onClose: t
                } = e, {
                    giftRecipient: l,
                    selectedGiftStyle: n,
                    hasSentMessage: _,
                    giftMessageError: r,
                    isSendingMessage: T
                } = (0, d.useGiftContext)(), E = (0, u.useStateFromStores)([N.default], () => N.default.get(s));
                i(null != E, "Missing plan");
                let R = (0, u.useStateFromStores)([o.default], () => o.default.getGiftCode(E.skuId));
                return (0, a.jsx)(I.default, {
                    giftCode: R,
                    subscriptionPlan: E,
                    onClose: t,
                    selectedGiftStyle: n,
                    hasSentMessage: _,
                    giftRecipient: l,
                    giftMessageError: r,
                    isSendingMessage: T
                })
            }
        },
        188525: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                CopyInputModes: function() {
                    return o
                },
                default: function() {
                    return T
                }
            }), t("222007");
            var a = t("37983"),
                l = t("884691"),
                n = t("414456"),
                i = t.n(n),
                u = t("77078"),
                _ = t("474293"),
                r = t("145131"),
                I = t("782340"),
                d = t("863448");
            let o = {
                DEFAULT: "default",
                SUCCESS: "success",
                ERROR: "error"
            };
            class N extends l.PureComponent {
                select() {
                    var e;
                    null === (e = this.inputRef.current) || void 0 === e || e.select()
                }
                renderInput(e) {
                    var s;
                    let {
                        value: t,
                        mode: l
                    } = this.props, n = null === (s = this.context) || void 0 === s ? void 0 : s.titleId;
                    return (0, a.jsx)("input", {
                        className: i((0, _.getClass)(d, "input", l), {
                            [d.inputHidden]: e
                        }),
                        ref: this.inputRef,
                        type: "text",
                        value: t,
                        onClick: this.handleInputClick,
                        readOnly: !0,
                        "aria-labelledby": n
                    })
                }
                render() {
                    let e;
                    let {
                        text: s = I.default.Messages.COPY,
                        mode: t,
                        hideMessage: l,
                        className: n,
                        buttonLook: N
                    } = this.props, T = null != l;
                    switch (t) {
                        case o.SUCCESS:
                            e = u.ButtonColors.GREEN;
                            break;
                        case o.ERROR:
                            e = u.ButtonColors.RED;
                            break;
                        default:
                            e = this.props.buttonColor
                    }
                    return (0, a.jsx)(u.FocusRing, {
                        focusTarget: this.inputRef,
                        ringTarget: this.containerRef,
                        children: (0, a.jsx)("div", {
                            className: i((0, _.getClass)(d, "copyInput", t), n),
                            ref: this.containerRef,
                            children: (0, a.jsxs)(r.default, {
                                className: d.layout,
                                children: [(0, a.jsxs)(r.default, {
                                    className: d.inputWrapper,
                                    children: [this.renderInput(T), T ? (0, a.jsx)("div", {
                                        className: d.hiddenMessage,
                                        children: l
                                    }) : null]
                                }), (0, a.jsx)(r.default, {
                                    shrink: 1,
                                    grow: 0,
                                    style: {
                                        margin: 0
                                    },
                                    children: (0, a.jsx)(u.Button, {
                                        className: d.button,
                                        onClick: this.handleButtonClick,
                                        size: u.ButtonSizes.MIN,
                                        color: e,
                                        look: N,
                                        children: s
                                    })
                                })]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = l.createRef(), this.containerRef = l.createRef(), this.handleButtonClick = () => {
                        this.select();
                        let {
                            onCopy: e,
                            value: s
                        } = this.props;
                        e(s)
                    }, this.handleInputClick = () => {
                        this.select()
                    }
                }
            }
            N.contextType = u.FormContext, N.defaultProps = {
                supportsCopy: !0,
                buttonColor: u.ButtonColors.PRIMARY,
                buttonLook: u.ButtonLooks.FILLED,
                mode: o.DEFAULT
            }, N.Modes = o, N.ButtonColors = u.ButtonColors, N.ButtonLooks = u.ButtonLooks;
            var T = N
        }
    }
]);