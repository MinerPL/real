(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["50997"], {
        244333: function(e, t, l) {
            "use strict";
            e.exports = l.p + "dfece524b5ca38a16ead.png"
        },
        112679: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                updateStripePaymentRequest: function() {
                    return s
                },
                updateCardInfo: function() {
                    return a
                },
                clearCardInfo: function() {
                    return u
                },
                updateAddressInfo: function() {
                    return i
                },
                clearError: function() {
                    return r
                }
            });
            var n = l("913144");

            function s(e) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function a(e, t) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function u() {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function i(e, t) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function r() {
                n.default.wait(() => n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return s
                }
            });
            var n = l("913144");

            function s() {
                n.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        252744: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("884691");

            function s(e) {
                let [t, l] = (0, n.useState)(!1), s = (0, n.useRef)(e.current);
                return (0, n.useEffect)(() => {
                    s.current = e.current
                }, [e]), (0, n.useEffect)(() => {
                    let e = s.current;
                    if (null == e) return;
                    let t = () => l(!0),
                        n = () => l(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", n), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", n)
                    }
                }, [s]), t
            }
        },
        649844: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return _
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("748820"),
                a = l("77078"),
                u = l("112679"),
                i = l("55689"),
                r = l("855133"),
                o = l("599110"),
                c = l("659500"),
                d = l("49111"),
                T = l("646718");

            function _(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: _,
                    onClose: E,
                    onComplete: p,
                    onSubscriptionConfirmation: f,
                    analyticsLocations: S,
                    analyticsObject: I,
                    analyticsLocation: P,
                    analyticsSourceLocation: m,
                    isGift: R = !1,
                    giftMessage: M,
                    subscriptionTier: N,
                    trialId: L,
                    postSuccessGuild: A,
                    openInvoiceId: U,
                    applicationId: O,
                    referralTrialOfferId: C,
                    giftRecipient: y,
                    returnRef: h
                } = null != e ? e : {}, b = !1, B = (0, s.v4)();
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await l.el("646139").then(l.bind(l, "646139"));
                    return l => {
                        let {
                            onClose: s,
                            ...a
                        } = l;
                        return (0, n.jsx)(e, {
                            ...a,
                            loadId: B,
                            subscriptionTier: N,
                            skuId: N,
                            isGift: R,
                            giftMessage: M,
                            giftRecipient: y,
                            initialPlanId: t,
                            followupSKUInfo: _,
                            onClose: e => {
                                s(), null == E || E(e), e && (null == f || f())
                            },
                            onComplete: () => {
                                b = !0, null == p || p(), !R && ((0, r.setIsPersistentHelperHidden)(!0), (0, r.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: f,
                            analyticsLocations: S,
                            analyticsObject: I,
                            analyticsLocation: P,
                            analyticsSourceLocation: m,
                            trialId: L,
                            postSuccessGuild: A,
                            planGroup: T.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: U,
                            applicationId: O,
                            referralTrialOfferId: C,
                            returnRef: h
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !b && o.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: B,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != P ? P : I,
                            source: m,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: R,
                            eligible_for_trial: null != L,
                            application_id: O,
                            location_stack: S
                        }), (0, u.clearError)(), (0, i.clearPurchaseTokenAuthState)(), null == E || E(b), b && (!R && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == f || f())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        855133: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                togglePersistentHelper: function() {
                    return s
                },
                setHasCompletedStep: function() {
                    return a
                },
                resetPremiumTutorialStore: function() {
                    return u
                },
                setCanPlayWowMoment: function() {
                    return i
                },
                setIsPersistentHelperHidden: function() {
                    return r
                },
                setNavigatedFromHelper: function() {
                    return o
                }
            });
            var n = l("913144");
            let s = () => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                a = () => {
                    n.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                u = () => {
                    n.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                i = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                r = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                o = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        635956: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return A
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                u = l("446674"),
                i = l("77078"),
                r = l("79112"),
                o = l("685665"),
                c = l("788506"),
                d = l("649844"),
                T = l("393414"),
                _ = l("797647"),
                E = l("697218"),
                p = l("521012"),
                f = l("471671"),
                S = l("181114"),
                I = l("978679"),
                P = l("216422"),
                m = l("719923"),
                R = l("646718"),
                M = l("49111"),
                N = l("782340"),
                L = l("683437"),
                A = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: s,
                        onClick: A,
                        size: U,
                        className: O,
                        trialId: C,
                        isTrialCTA: y,
                        buttonText: h,
                        buttonTextClassName: b,
                        postSuccessGuild: B,
                        onSubscribeModalClose: D,
                        premiumModalAnalyticsLocation: g,
                        showIcon: x = !0,
                        disableShine: v,
                        applicationId: G,
                        giftMessage: j,
                        overrideDisabledButtonText: H,
                        shinyButtonClassName: F,
                        ...k
                    } = e, Y = (0, u.useStateFromStores)([E.default], () => E.default.getCurrentUser()), W = (0, u.useStateFromStores)([f.default], () => f.default.isFocused()), K = (0, u.useStateFromStores)([p.default], () => p.default.getPremiumTypeSubscription()), {
                        analyticsLocations: z
                    } = (0, o.default)(), w = e => {
                        if (e.preventDefault(), null == Y) {
                            (0, T.transitionTo)(M.Routes.LOGIN);
                            return
                        }
                        if (null == A || A(e), (null == K ? void 0 : K.status) === M.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, c.trackPremiumSettingsPaneOpened)(), r.default.open(M.UserSettingsSections.PREMIUM), null == D || D(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: s,
                                isGift: a,
                                subscriptionTier: u,
                                trialId: r,
                                postSuccessGuild: o,
                                onSubscribeModalClose: c,
                                analyticsLocations: T,
                                premiumModalAnalyticsLocation: _,
                                applicationId: E,
                                giftMessage: p
                            } = e;
                            if (!t) {
                                (0, i.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await l.el("984599").then(l.bind(l, "984599"));
                                    return t => {
                                        let {
                                            onClose: l,
                                            ...s
                                        } = t;
                                        return (0, n.jsx)(e, {
                                            ...s,
                                            onClose: l
                                        })
                                    }
                                });
                                return
                            }
                            if (!s) {
                                (0, i.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await l.el("899917").then(l.bind(l, "899917"));
                                    return t => {
                                        let {
                                            onClose: l,
                                            ...s
                                        } = t;
                                        return (0, n.jsx)(e, {
                                            ...s,
                                            onClose: l
                                        })
                                    }
                                });
                                return
                            }
                            let f = M.AnalyticsObjectTypes.BUY;
                            null != r ? f = M.AnalyticsObjectTypes.TRIAL : a && (f = M.AnalyticsObjectTypes.GIFT), (0, d.default)({
                                isGift: a,
                                initialPlanId: null,
                                subscriptionTier: u,
                                analyticsLocations: T,
                                analyticsObject: {
                                    object: M.AnalyticsObjects.BUTTON_CTA,
                                    objectType: f,
                                    ..._
                                },
                                trialId: r,
                                postSuccessGuild: o,
                                onClose: c,
                                applicationId: E,
                                giftMessage: p
                            })
                        }({
                            isClaimed: Y.isClaimed(),
                            isVerified: Y.verified,
                            isGift: t,
                            subscriptionTier: s,
                            trialId: C,
                            postSuccessGuild: B,
                            onSubscribeModalClose: D,
                            analyticsLocations: z,
                            premiumModalAnalyticsLocation: g,
                            applicationId: G,
                            giftMessage: j
                        })
                    };
                    if (y) return (0, n.jsxs)(i.Button, {
                        size: U,
                        className: O,
                        innerClassName: L.premiumSubscribeButton,
                        look: i.Button.Looks.INVERTED,
                        onClick: w,
                        ...k,
                        children: [x && (0, n.jsx)(P.default, {
                            className: L.premiumIcon
                        }), (0, n.jsx)("span", {
                            className: a(L.buttonText, b),
                            children: null != h ? h : N.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, n.jsxs)(i.Button, {
                        size: U,
                        className: O,
                        innerClassName: L.giftButton,
                        color: i.Button.Colors.PRIMARY,
                        onClick: w,
                        ...k,
                        children: [(0, n.jsx)(I.default, {
                            className: L.giftIcon
                        }), (0, n.jsx)("span", {
                            className: a(L.buttonText, b),
                            children: null != h ? h : N.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let V = N.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        q = null != K ? (0, m.getPremiumPlanItem)(K) : null,
                        Q = null != q ? m.default.getPremiumType(q.planId) : null == Y ? void 0 : Y.premiumType,
                        Z = s === R.PremiumSubscriptionSKUs.TIER_2 && null != Q && [R.PremiumTypes.TIER_0, R.PremiumTypes.TIER_1].includes(Q);
                    Z && (V = N.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let J = null != K && K.status !== M.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, _.isNoneSubscription)(K.planId) && !Z,
                        X = J ? null != H ? H : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: l
                            } = e, n = null, s = null;
                            if (null != t && t !== R.PremiumSubscriptionSKUs.LEGACY && t !== R.PremiumSubscriptionSKUs.TIER_0 && t !== R.PremiumSubscriptionSKUs.TIER_1 && t !== R.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: n,
                                disabledButtonTooltipText: s
                            };
                            let a = null != t ? R.PremiumSubscriptionSKUToPremiumType[t] : null,
                                u = null != a ? R.PremiumTypeOrder[a] : null,
                                i = null != l ? R.PremiumTypeOrder[l] : null;
                            return null != i && null != u && u < i ? (n = N.default.Messages.APPLICATION_STORE_GET_PREMIUM, s = N.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != a && null != l && a === l ? (n = N.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, s = N.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == a && null != l && l === R.PremiumTypes.TIER_2 && (s = N.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: n,
                                disabledButtonTooltipText: s
                            }
                        }({
                            ctaSubscriptionSkuId: s,
                            currentPremiumType: Q
                        }) : null;

                    function $(e) {
                        var t, l;
                        return (0, n.jsxs)(S.default, {
                            disabled: J,
                            onClick: w,
                            innerClassName: L.premiumSubscribeButton,
                            color: s === R.PremiumSubscriptionSKUs.TIER_1 ? i.Button.Colors.PRIMARY : i.Button.Colors.GREEN,
                            size: U,
                            className: F,
                            wrapperClassName: O,
                            pauseAnimation: !W || v,
                            ...k,
                            ...e,
                            children: [x && (0, n.jsx)(P.default, {
                                className: L.premiumIcon
                            }), (0, n.jsx)("span", {
                                className: a(L.buttonText, b),
                                children: null !== (l = null !== (t = null == X ? void 0 : X.disabledButtonText) && void 0 !== t ? t : h) && void 0 !== l ? l : V
                            })]
                        })
                    }
                    return (null == X ? void 0 : X.disabledButtonTooltipText) != null ? (0, n.jsx)(i.Tooltip, {
                        text: X.disabledButtonTooltipText,
                        children: $
                    }) : $()
                }
        },
        292890: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return P
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("446674"),
                u = l("77078"),
                i = l("812204"),
                r = l("685665"),
                o = l("635956"),
                c = l("697218"),
                d = l("599110"),
                T = l("719923"),
                _ = l("38766"),
                E = l("49111"),
                p = l("646718"),
                f = l("397336"),
                S = l("782340"),
                I = l("856049");

            function P(e) {
                let {
                    analyticsLocations: t,
                    transitionState: P,
                    onClose: m,
                    title: R,
                    description: M
                } = e, N = (0, a.useStateFromStores)([c.default], () => c.default.getCurrentUser()), {
                    AnalyticsLocationProvider: L,
                    analyticsLocations: A
                } = (0, r.default)(t, i.default.PROFILE_THEME_UPSELL_MODAL);
                s.useEffect(() => {
                    d.default.track(E.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: p.PremiumUpsellTypes.PROFILE_THEME_UPSELL_MODAL,
                        location_stack: t
                    })
                }, [t]);
                let U = (0, _.default)({
                    scrollPosition: f.ProfileCustomizationScrollPositions.TRY_IT_OUT,
                    analyticsLocations: A
                });
                return (0, n.jsx)(L, {
                    children: (0, n.jsxs)(u.ModalRoot, {
                        className: I.profileThemesUpsellModal,
                        "aria-label": null != R ? R : S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_TITLE,
                        transitionState: P,
                        children: [(0, n.jsxs)(u.ModalHeader, {
                            className: I.profileThemesUpsellModalHeader,
                            separator: !1,
                            children: [(0, n.jsx)(u.Heading, {
                                variant: "heading-xl/extrabold",
                                className: I.profileThemesUpsellModalTitle,
                                children: null != R ? R : S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_TITLE
                            }), (0, n.jsx)(u.ModalCloseButton, {
                                className: I.profileThemesUpsellModalCloseButton,
                                onClick: m
                            })]
                        }), (0, n.jsxs)(u.ModalContent, {
                            className: I.profileThemesUpsellModalContent,
                            children: [(0, n.jsx)(u.Text, {
                                className: I.profileThemesUpsellModalDescription,
                                variant: "text-md/normal",
                                children: null != M ? M : S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_DESCRIPTION
                            }), (0, n.jsx)("img", {
                                className: I.profileThemesUpsellModalExampleImage,
                                src: l("244333"),
                                alt: S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_MODAL_IMAGE_ALT
                            })]
                        }), (0, n.jsxs)(u.ModalFooter, {
                            className: I.profileThemesUpsellModalFooter,
                            children: [(0, n.jsx)(o.default, {
                                subscriptionTier: p.PremiumSubscriptionSKUs.TIER_2,
                                size: u.Button.Sizes.SMALL,
                                buttonText: T.default.isPremium(N) ? S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : S.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                            }), (0, n.jsx)(u.Button, {
                                onClick: () => {
                                    m(), U()
                                },
                                color: u.Button.Colors.PRIMARY,
                                look: u.Button.Looks.LINK,
                                size: u.Button.Sizes.SMALL,
                                children: S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_TRY_IT_OUT
                            })]
                        })]
                    })
                })
            }
        }
    }
]);