(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40092"], {
        749432: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return H
                }
            });
            var a = t("37983"),
                l = t("884691"),
                _ = t("917351"),
                n = t.n(_),
                i = t("446674"),
                I = t("862337"),
                u = t("77078"),
                r = t("54239"),
                d = t("736964"),
                T = t("777273"),
                N = t("79112"),
                E = t("87657"),
                o = t("210721"),
                R = t("671484"),
                S = t("27618"),
                f = t("102985"),
                c = t("843823"),
                M = t("697218"),
                P = t("188525"),
                A = t("145131"),
                C = t("953109"),
                O = t("306160"),
                L = t("659632"),
                p = t("719923"),
                m = t("158998"),
                g = t("49111"),
                U = t("646718"),
                h = t("782340"),
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
                        giftRecipient: l
                    } = this.props;
                    if (null != a) return h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB;
                    if (null == s) return h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_BLURB;
                    let _ = t || null != l;
                    return (e = s.interval === U.SubscriptionIntervalTypes.MONTH ? _ ? h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : _ ? h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
                        skuName: (0, p.getTierDisplayName)(s.id),
                        intervalCount: s.intervalCount
                    })
                }
                render() {
                    let e, s;
                    let {
                        application: t,
                        selectedGiftStyle: l,
                        hasSentMessage: _,
                        giftRecipient: n,
                        giftMessageError: i,
                        isSendingMessage: I
                    } = this.props, r = (0, L.isCustomGiftEnabled)(n);
                    return e = r || _ && null == i ? h.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != i ? h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : h.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE, s = I ? (0, a.jsx)(u.Spinner, {
                        type: u.SpinnerTypes.PULSING_ELLIPSIS
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(u.Heading, {
                            variant: "heading-lg/semibold",
                            className: null != l ? G.headerCustomGifting : G.header,
                            children: e
                        }), _ && null != n && null == i || (0, L.isCustomGiftEnabled)(n) ? this.renderConfirmSentGift() : this.renderRequestSendGift()]
                    }), (0, a.jsxs)(A.default, {
                        direction: A.default.Direction.VERTICAL,
                        align: A.default.Align.CENTER,
                        children: [null != t ? (0, a.jsx)(C.default, {
                            game: t,
                            className: G.icon,
                            size: C.default.Sizes.LARGE,
                            skuId: this.iconSKUId
                        }) : null, s]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        copyMode: P.default.Modes.DEFAULT
                    }, this._copyModeTimeout = new I.Timeout, this.handleGiftCodeCopy = (e, s) => {
                        let {
                            sku: t
                        } = this.props;
                        null != t && (0, L.trackGiftCodeCopy)(new R.default({
                            code: s,
                            maxUses: 1
                        }), t);
                        try {
                            (0, O.copy)(e), this.setState({
                                copyMode: P.default.Modes.SUCCESS
                            })
                        } catch (e) {
                            this.setState({
                                copyMode: P.default.Modes.ERROR
                            })
                        }
                        this._copyModeTimeout.start(1500, () => {
                            this.setState({
                                copyMode: P.default.Modes.DEFAULT
                            })
                        })
                    }, this.handleInventoryClick = () => {
                        N.default.open(g.UserSettingsSections.INVENTORY), this.props.onClose()
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
                            case P.default.Modes.SUCCESS:
                                e = h.default.Messages.BILLING_GIFT_COPIED;
                                break;
                            case P.default.Modes.ERROR:
                                e = h.default.Messages.FAILED;
                                break;
                            default:
                                e = h.default.Messages.COPY
                        }
                        return (0, a.jsx)(A.default, {
                            direction: A.default.Direction.VERTICAL,
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(u.FormTitle, {
                                    children: h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
                                }), null != t && (0, a.jsx)(P.default, {
                                    hideMessage: s ? h.default.Messages.GIFT_INVENTORY_HIDDEN : null,
                                    value: (0, L.getGiftCodeURL)(t),
                                    mode: l,
                                    text: e,
                                    onCopy: e => this.handleGiftCodeCopy(e, t),
                                    supportsCopy: O.SUPPORTS_COPY,
                                    className: G.copyInput,
                                    buttonColor: P.default.ButtonColors.LINK,
                                    buttonLook: P.default.ButtonLooks.LINK
                                }), (0, a.jsx)("div", {
                                    className: G.subtext,
                                    children: h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
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
                            children: [(0, a.jsx)(E.default, {
                                user: e,
                                className: G.giftRecipient,
                                size: u.AvatarSizes.SIZE_80
                            }), (0, a.jsx)(u.Heading, {
                                className: G.giftRecipientName,
                                variant: "heading-md/semibold",
                                children: m.default.getName(e)
                            }), (0, a.jsxs)("div", {
                                className: G.giftRecipientTag,
                                children: [" ", m.default.getUserTag(e)]
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
                    d.default.fetchRelationships(), (0, T.fetchUserAffinities)()
                }, []);
                let [_, I] = l.useState(), [N, R] = l.useState(!1), [f, P] = l.useState(!1), {
                    userAffinities: A,
                    isLoading: C
                } = (0, i.useStateFromStoresObject)([c.default], () => ({
                    userAffinities: c.default.getUserAffinitiesUserIds(),
                    isLoading: c.default.getFetching()
                })), O = Array.from(A.values()), L = (0, i.useStateFromStores)([S.default], () => S.default.getFriendIDs()), p = n.difference(L, O), g = [...O, ...p], U = (0, i.useStateFromStores)([M.default], () => M.default.filter(e => g.includes(e.id) && !e.bot), [g]), F = null == U || 0 === U.length;
                if (F) return null;
                let D = n.sortBy(U, e => g.indexOf(e.id));
                return (0, a.jsxs)("div", {
                    className: G.giftRecipientSection,
                    children: [(0, a.jsx)(u.FormTitle, {
                        children: h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
                    }), (0, a.jsxs)("div", {
                        className: G.giftRecipient,
                        children: [(0, a.jsx)(u.SearchableSelect, {
                            placeholder: h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                            wrapperClassName: G.giftRecipientInputWrapper,
                            className: N ? G.giftRecipientInputError : void 0,
                            renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, a.jsx)(E.default, {
                                user: e.value,
                                size: u.AvatarSizes.SIZE_20
                            }),
                            renderLeading: () => C ? (0, a.jsx)(u.Spinner, {
                                type: u.SpinnerTypes.PULSING_ELLIPSIS
                            }) : null,
                            value: _,
                            onChange: e => {
                                I(e), R(!1)
                            },
                            options: D.map(e => ({
                                value: e,
                                label: "".concat(m.default.getUserTag(e))
                            }))
                        }), (0, a.jsx)(u.Button, {
                            disabled: null == _,
                            submitting: f,
                            className: G.sendToRecipientButton,
                            onClick: () => {
                                P(!0), (0, o.sendGiftMessage)(_, s).then(() => {
                                    t(), (0, r.popAllLayers)()
                                }).catch(() => {
                                    R(!0), P(!1)
                                })
                            },
                            children: h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                        })]
                    }), (0, a.jsx)("div", {
                        className: N ? G.subtextError : G.subtext,
                        children: N ? h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
                    })]
                })
            };
            var H = i.default.connectStores([f.default], () => ({
                obscureGiftCode: f.default.enabled
            }))(F)
        },
        775155: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return A
                },
                PremiumSubscriptionGiftPurchaseConfirmation: function() {
                    return C
                }
            });
            var a = t("37983"),
                l = t("884691"),
                _ = t("627445"),
                n = t.n(_),
                i = t("446674"),
                I = t("77078"),
                u = t("465527"),
                r = t("749432"),
                d = t("642906"),
                T = t("353365"),
                N = t("10514"),
                E = t("552712"),
                o = t("719923"),
                R = t("977934"),
                S = t("646718"),
                f = t("49111"),
                c = t("782340"),
                M = t("535539");

            function P(e) {
                var s, t;
                let l, {
                        planId: _,
                        startingPremiumSubscriptionPlanId: I,
                        paymentSourceType: u
                    } = e,
                    [r, d] = (0, i.useStateFromStoresArray)([N.default], () => [N.default.get(I), N.default.get(_)]);
                if (n(null != r && null != d, "Missing startingPlan or newPlan"), s = I, t = _, S.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(s) < S.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(t)) switch (_) {
                        case S.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                            l = c.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1, f.DELAYED_PAYMENTS.has(null != u ? u : f.PaymentSourceTypes.UNKNOWN) && (l = c.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
                            break;
                        case S.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                            l = c.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH, f.DELAYED_PAYMENTS.has(null != u ? u : f.PaymentSourceTypes.UNKNOWN) && (l = c.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
                            break;
                        case S.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                            l = c.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR, f.DELAYED_PAYMENTS.has(null != u ? u : f.PaymentSourceTypes.UNKNOWN) && (l = c.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
                            break;
                        case S.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                            l = c.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({
                                numFreeGuildSubscriptions: S.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                            }), f.DELAYED_PAYMENTS.has(null != u ? u : f.PaymentSourceTypes.UNKNOWN) && (l = c.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({
                                numFreeGuildSubscriptions: S.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                            }));
                            break;
                        case S.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
                        case S.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                            l = c.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
                            break;
                        case S.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                        case S.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                            l = c.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
                            break;
                        default:
                            throw Error("Unexpected planId: ".concat(_))
                    } else if (r.skuId === S.PremiumSubscriptionSKUs.TIER_2 && d.skuId === S.PremiumSubscriptionSKUs.TIER_1) l = c.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
                    else switch (d.skuId) {
                        case S.PremiumSubscriptionSKUs.TIER_0:
                            l = c.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
                            break;
                        case S.PremiumSubscriptionSKUs.TIER_1:
                            l = c.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
                            break;
                        case S.PremiumSubscriptionSKUs.TIER_2:
                            l = 1 !== r.intervalCount ? c.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : c.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
                            break;
                        default:
                            throw Error("Unexpected skuId: ".concat(d.skuId))
                    }
                return (0, a.jsx)("div", {
                    className: M.text,
                    children: l
                })
            }

            function A(e) {
                let s, t, {
                        planId: _,
                        enableNoPaymentTrial: r,
                        startingPremiumSubscriptionPlanId: d,
                        onClose: T,
                        followupSKUInfo: A,
                        isDowngrade: C,
                        hideClose: O,
                        postSuccessGuild: L,
                        paymentSourceType: p
                    } = e,
                    {
                        theme: m
                    } = (0, I.useThemeContext)(),
                    g = (0, i.useStateFromStores)([E.default], () => null != A ? E.default.get(A.id) : null);
                l.useEffect(() => {
                    if (null == A || null != g) return;
                    let {
                        applicationId: e,
                        id: s
                    } = A;
                    (0, u.fetchSKU)(e, s).catch(f.NOOP_NULL)
                }, [A, g]);
                let U = e => {
                    if (e.skuId === S.PremiumSubscriptionSKUs.TIER_0) return f.DELAYED_PAYMENTS.has(null != p ? p : f.PaymentSourceTypes.UNKNOWN) ? c.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : c.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
                    if (e.skuId === S.PremiumSubscriptionSKUs.TIER_1) return f.DELAYED_PAYMENTS.has(null != p ? p : f.PaymentSourceTypes.UNKNOWN) ? c.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : c.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
                    return f.DELAYED_PAYMENTS.has(null != p ? p : f.PaymentSourceTypes.UNKNOWN) ? c.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : r ? c.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : c.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2
                };
                if (null != g) s = (0, a.jsx)("div", {
                    className: M.text,
                    children: c.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
                        skuName: g.name
                    })
                });
                else if (null != d) s = (0, a.jsx)(P, {
                    planId: _,
                    startingPremiumSubscriptionPlanId: d
                });
                else if (null != L) {
                    let e = N.default.get(_);
                    n(null != e, "Missing plan"), s = (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: M.text,
                            children: U(e)
                        }), (0, a.jsx)("div", {
                            className: M.text,
                            children: c.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({
                                guildName: L.name
                            })
                        })]
                    })
                } else {
                    let e = N.default.get(_);
                    n(null != e, "Missing plan"), s = (0, a.jsx)("div", {
                        className: M.text,
                        children: U(e)
                    })
                }
                let h = o.default.getPremiumType(_);
                return n(null != h, "premium type should not be null in purchase confirmation"), t = null != g ? c.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
                    skuName: g.name
                }) : C ? c.default.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != L ? c.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : c.default.Messages.PREMIUM_UPGRADE_DONE_BUTTON, (0, a.jsxs)("div", {
                    className: M.confirmation,
                    children: [(0, a.jsx)(R.default, {
                        className: M.banner,
                        theme: m,
                        premiumType: h,
                        type: f.DELAYED_PAYMENTS.has(null != p ? p : f.PaymentSourceTypes.UNKNOWN) ? R.default.Types.PREMIUM_PAYMENT_STARTED : null != d ? R.default.Types.PREMIUM_UPDATED : R.default.Types.PREMIUM_ACTIVATED
                    }), s, O ? null : (0, a.jsx)(I.Button, {
                        onClick: T,
                        children: t
                    })]
                })
            }

            function C(e) {
                let {
                    planId: s,
                    selectedGiftStyle: t,
                    onClose: l,
                    hasSentMessage: _,
                    giftMessageError: I,
                    isSendingMessage: u
                } = e, {
                    giftRecipient: E
                } = (0, d.usePaymentContext)(), o = (0, i.useStateFromStores)([N.default], () => N.default.get(s));
                n(null != o, "Missing plan");
                let R = (0, i.useStateFromStores)([T.default], () => T.default.getGiftCode(o.skuId));
                return (0, a.jsx)(r.default, {
                    giftCode: R,
                    subscriptionPlan: o,
                    onClose: l,
                    selectedGiftStyle: t,
                    hasSentMessage: _,
                    giftRecipient: E,
                    giftMessageError: I,
                    isSendingMessage: u
                })
            }
        }
    }
]);