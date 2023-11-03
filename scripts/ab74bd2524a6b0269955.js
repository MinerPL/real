(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["98427"], {
        244333: function(e, t, n) {
            "use strict";
            e.exports = n.p + "dfece524b5ca38a16ead.png"
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return s
                },
                updateCardInfo: function() {
                    return a
                },
                clearCardInfo: function() {
                    return i
                },
                updateAddressInfo: function() {
                    return u
                },
                clearError: function() {
                    return r
                }
            });
            var l = n("913144");

            function s(e) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function a(e, t) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function i() {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function u(e, t) {
                l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function r() {
                l.default.wait(() => l.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return s
                }
            });
            var l = n("913144");

            function s() {
                l.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("669491"),
                a = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...r
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582Z",
                        clipRule: "evenodd",
                        className: u
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M3 20a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: u
                    })]
                })
            }
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("884691");

            function s(e) {
                let [t, n] = (0, l.useState)(!1), s = (0, l.useRef)(e.current);
                return (0, l.useEffect)(() => {
                    s.current = e.current
                }, [e]), (0, l.useEffect)(() => {
                    let e = s.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        l = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", l), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", l)
                    }
                }, [s]), t
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("748820"),
                a = n("77078"),
                i = n("112679"),
                u = n("55689"),
                r = n("855133"),
                o = n("599110"),
                c = n("659500"),
                d = n("49111"),
                T = n("646718");

            function E(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: _,
                    onComplete: f,
                    onSubscriptionConfirmation: p,
                    analyticsLocations: S,
                    analyticsObject: I,
                    analyticsLocation: m,
                    analyticsSourceLocation: P,
                    isGift: M = !1,
                    giftMessage: R,
                    subscriptionTier: L,
                    trialId: N,
                    postSuccessGuild: C,
                    openInvoiceId: A,
                    applicationId: U,
                    referralTrialOfferId: h,
                    giftRecipient: O,
                    returnRef: y
                } = null != e ? e : {}, v = !1, b = (0, s.v4)();
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: s,
                            ...a
                        } = n;
                        return (0, l.jsx)(e, {
                            ...a,
                            loadId: b,
                            subscriptionTier: L,
                            skuId: L,
                            isGift: M,
                            giftMessage: R,
                            giftRecipient: O,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                s(), null == _ || _(e), e && (null == p || p())
                            },
                            onComplete: () => {
                                v = !0, null == f || f(), !M && ((0, r.setIsPersistentHelperHidden)(!0), (0, r.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: p,
                            analyticsLocations: S,
                            analyticsObject: I,
                            analyticsLocation: m,
                            analyticsSourceLocation: P,
                            trialId: N,
                            postSuccessGuild: C,
                            planGroup: T.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: A,
                            applicationId: U,
                            referralTrialOfferId: h,
                            returnRef: y
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !v && o.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: b,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != m ? m : I,
                            source: P,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: M,
                            eligible_for_trial: null != N,
                            application_id: U,
                            location_stack: S
                        }), (0, i.clearError)(), (0, u.clearPurchaseTokenAuthState)(), null == _ || _(v), v && (!M && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == p || p())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return s
                },
                setHasCompletedStep: function() {
                    return a
                },
                resetPremiumTutorialStore: function() {
                    return i
                },
                setCanPlayWowMoment: function() {
                    return u
                },
                setIsPersistentHelperHidden: function() {
                    return r
                },
                setNavigatedFromHelper: function() {
                    return o
                }
            });
            var l = n("913144");
            let s = () => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                a = () => {
                    l.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                i = () => {
                    l.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                u = e => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                r = e => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                o = e => {
                    l.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        635956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("414456"),
                a = n.n(s),
                i = n("446674"),
                u = n("77078"),
                r = n("79112"),
                o = n("685665"),
                c = n("788506"),
                d = n("649844"),
                T = n("393414"),
                E = n("797647"),
                _ = n("697218"),
                f = n("521012"),
                p = n("471671"),
                S = n("181114"),
                I = n("978679"),
                m = n("216422"),
                P = n("719923"),
                M = n("646718"),
                R = n("49111"),
                L = n("782340"),
                N = n("683437"),
                C = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: s,
                        onClick: C,
                        size: A,
                        className: U,
                        trialId: h,
                        isTrialCTA: O,
                        buttonText: y,
                        buttonTextClassName: v,
                        postSuccessGuild: b,
                        onSubscribeModalClose: x,
                        premiumModalAnalyticsLocation: g,
                        showIcon: B = !0,
                        disableShine: D,
                        applicationId: j,
                        giftMessage: H,
                        overrideDisabledButtonText: G,
                        shinyButtonClassName: F,
                        ...k
                    } = e, w = (0, i.useStateFromStores)([_.default], () => _.default.getCurrentUser()), V = (0, i.useStateFromStores)([p.default], () => p.default.isFocused()), Y = (0, i.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()), {
                        analyticsLocations: z
                    } = (0, o.default)(), W = e => {
                        if (e.preventDefault(), null == w) {
                            (0, T.transitionTo)(R.Routes.LOGIN);
                            return
                        }
                        if (null == C || C(e), (null == Y ? void 0 : Y.status) === R.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, c.trackPremiumSettingsPaneOpened)(), r.default.open(R.UserSettingsSections.PREMIUM), null == x || x(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: s,
                                isGift: a,
                                subscriptionTier: i,
                                trialId: r,
                                postSuccessGuild: o,
                                onSubscribeModalClose: c,
                                analyticsLocations: T,
                                premiumModalAnalyticsLocation: E,
                                applicationId: _,
                                giftMessage: f
                            } = e;
                            if (!t) {
                                (0, u.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("984599").then(n.bind(n, "984599"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...s
                                        } = t;
                                        return (0, l.jsx)(e, {
                                            ...s,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            if (!s) {
                                (0, u.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("899917").then(n.bind(n, "899917"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...s
                                        } = t;
                                        return (0, l.jsx)(e, {
                                            ...s,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            let p = R.AnalyticsObjectTypes.BUY;
                            null != r ? p = R.AnalyticsObjectTypes.TRIAL : a && (p = R.AnalyticsObjectTypes.GIFT), (0, d.default)({
                                isGift: a,
                                initialPlanId: null,
                                subscriptionTier: i,
                                analyticsLocations: T,
                                analyticsObject: {
                                    object: R.AnalyticsObjects.BUTTON_CTA,
                                    objectType: p,
                                    ...E
                                },
                                trialId: r,
                                postSuccessGuild: o,
                                onClose: c,
                                applicationId: _,
                                giftMessage: f
                            })
                        }({
                            isClaimed: w.isClaimed(),
                            isVerified: w.verified,
                            isGift: t,
                            subscriptionTier: s,
                            trialId: h,
                            postSuccessGuild: b,
                            onSubscribeModalClose: x,
                            analyticsLocations: z,
                            premiumModalAnalyticsLocation: g,
                            applicationId: j,
                            giftMessage: H
                        })
                    };
                    if (O) return (0, l.jsxs)(u.Button, {
                        size: A,
                        className: U,
                        innerClassName: N.premiumSubscribeButton,
                        look: u.Button.Looks.INVERTED,
                        onClick: W,
                        ...k,
                        children: [B && (0, l.jsx)(m.default, {
                            className: N.premiumIcon
                        }), (0, l.jsx)("span", {
                            className: a(N.buttonText, v),
                            children: null != y ? y : L.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, l.jsxs)(u.Button, {
                        size: A,
                        className: U,
                        innerClassName: N.giftButton,
                        color: u.Button.Colors.PRIMARY,
                        onClick: W,
                        ...k,
                        children: [(0, l.jsx)(I.default, {
                            className: N.giftIcon
                        }), (0, l.jsx)("span", {
                            className: a(N.buttonText, v),
                            children: null != y ? y : L.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let K = L.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        Z = null != Y ? (0, P.getPremiumPlanItem)(Y) : null,
                        q = null != Z ? P.default.getPremiumType(Z.planId) : null == w ? void 0 : w.premiumType,
                        J = s === M.PremiumSubscriptionSKUs.TIER_2 && null != q && [M.PremiumTypes.TIER_0, M.PremiumTypes.TIER_1].includes(q);
                    J && (K = L.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let Q = null != Y && Y.status !== R.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, E.isNoneSubscription)(Y.planId) && !J,
                        X = Q ? null != G ? G : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: n
                            } = e, l = null, s = null;
                            if (null != t && t !== M.PremiumSubscriptionSKUs.LEGACY && t !== M.PremiumSubscriptionSKUs.TIER_0 && t !== M.PremiumSubscriptionSKUs.TIER_1 && t !== M.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: l,
                                disabledButtonTooltipText: s
                            };
                            let a = null != t ? M.PremiumSubscriptionSKUToPremiumType[t] : null,
                                i = null != a ? M.PremiumTypeOrder[a] : null,
                                u = null != n ? M.PremiumTypeOrder[n] : null;
                            return null != u && null != i && i < u ? (l = L.default.Messages.APPLICATION_STORE_GET_PREMIUM, s = L.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != a && null != n && a === n ? (l = L.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, s = L.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == a && null != n && n === M.PremiumTypes.TIER_2 && (s = L.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: l,
                                disabledButtonTooltipText: s
                            }
                        }({
                            ctaSubscriptionSkuId: s,
                            currentPremiumType: q
                        }) : null;

                    function $(e) {
                        var t, n;
                        return (0, l.jsxs)(S.default, {
                            disabled: Q,
                            onClick: W,
                            innerClassName: N.premiumSubscribeButton,
                            color: s === M.PremiumSubscriptionSKUs.TIER_1 ? u.Button.Colors.PRIMARY : u.Button.Colors.GREEN,
                            size: A,
                            className: F,
                            wrapperClassName: U,
                            pauseAnimation: !V || D,
                            ...k,
                            ...e,
                            children: [B && (0, l.jsx)(m.default, {
                                className: N.premiumIcon
                            }), (0, l.jsx)("span", {
                                className: a(N.buttonText, v),
                                children: null !== (n = null !== (t = null == X ? void 0 : X.disabledButtonText) && void 0 !== t ? t : y) && void 0 !== n ? n : K
                            })]
                        })
                    }
                    return (null == X ? void 0 : X.disabledButtonTooltipText) != null ? (0, l.jsx)(u.Tooltip, {
                        text: X.disabledButtonTooltipText,
                        children: $
                    }) : $()
                }
        },
        292890: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                s = n("884691"),
                a = n("446674"),
                i = n("77078"),
                u = n("812204"),
                r = n("685665"),
                o = n("635956"),
                c = n("697218"),
                d = n("599110"),
                T = n("719923"),
                E = n("38766"),
                _ = n("49111"),
                f = n("646718"),
                p = n("397336"),
                S = n("782340"),
                I = n("856049");

            function m(e) {
                let {
                    analyticsLocations: t,
                    transitionState: m,
                    onClose: P,
                    title: M,
                    description: R
                } = e, L = (0, a.useStateFromStores)([c.default], () => c.default.getCurrentUser()), {
                    AnalyticsLocationProvider: N,
                    analyticsLocations: C
                } = (0, r.default)(t, u.default.PROFILE_THEME_UPSELL_MODAL);
                s.useEffect(() => {
                    d.default.track(_.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: f.PremiumUpsellTypes.PROFILE_THEME_UPSELL_MODAL,
                        location_stack: t
                    })
                }, [t]);
                let A = (0, E.default)({
                    scrollPosition: p.ProfileCustomizationScrollPositions.TRY_IT_OUT,
                    analyticsLocations: C
                });
                return (0, l.jsx)(N, {
                    children: (0, l.jsxs)(i.ModalRoot, {
                        className: I.profileThemesUpsellModal,
                        "aria-label": null != M ? M : S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_TITLE,
                        transitionState: m,
                        children: [(0, l.jsxs)(i.ModalHeader, {
                            className: I.profileThemesUpsellModalHeader,
                            separator: !1,
                            children: [(0, l.jsx)(i.Heading, {
                                variant: "heading-xl/extrabold",
                                className: I.profileThemesUpsellModalTitle,
                                children: null != M ? M : S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_TITLE
                            }), (0, l.jsx)(i.ModalCloseButton, {
                                className: I.profileThemesUpsellModalCloseButton,
                                onClick: P
                            })]
                        }), (0, l.jsxs)(i.ModalContent, {
                            className: I.profileThemesUpsellModalContent,
                            children: [(0, l.jsx)(i.Text, {
                                className: I.profileThemesUpsellModalDescription,
                                variant: "text-md/normal",
                                children: null != R ? R : S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_DESCRIPTION
                            }), (0, l.jsx)("img", {
                                className: I.profileThemesUpsellModalExampleImage,
                                src: n("244333"),
                                alt: S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_MODAL_IMAGE_ALT
                            })]
                        }), (0, l.jsxs)(i.ModalFooter, {
                            className: I.profileThemesUpsellModalFooter,
                            children: [(0, l.jsx)(o.default, {
                                subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
                                size: i.Button.Sizes.SMALL,
                                buttonText: T.default.isPremium(L) ? S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : S.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                            }), (0, l.jsx)(i.Button, {
                                onClick: () => {
                                    P(), A()
                                },
                                color: i.Button.Colors.PRIMARY,
                                look: i.Button.Looks.LINK,
                                size: i.Button.Sizes.SMALL,
                                children: S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_TRY_IT_OUT
                            })]
                        })]
                    })
                })
            }
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return p
                },
                default: function() {
                    return I
                }
            });
            var l, s, a = n("37983"),
                i = n("884691"),
                u = n("414456"),
                r = n.n(u),
                o = n("458960"),
                c = n("77078"),
                d = n("252744"),
                T = n("145131"),
                E = n("396792");
            (l = s || (s = {})).DEFAULT = "default", l.SMALL = "small";
            let _ = {
                    [s.DEFAULT]: E.shineDefault,
                    [s.SMALL]: E.shineSmall
                },
                f = {
                    [s.DEFAULT]: E.shineInnerDefault,
                    [s.SMALL]: E.shineInnerSmall
                };
            class p extends i.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...l
                    } = this.props;
                    return (0, a.jsx)(o.default.div, {
                        ...l,
                        className: r(E.shineContainer, e, {
                            [E.shinePaused]: n
                        }),
                        children: (0, a.jsx)(T.default, {
                            align: T.default.Align.CENTER,
                            justify: T.default.Justify.CENTER,
                            className: _[t],
                            children: (0, a.jsx)("div", {
                                className: f[t]
                            })
                        })
                    })
                }
            }
            p.defaultProps = {
                shineSize: s.DEFAULT
            };
            let S = e => {
                let {
                    children: t,
                    className: n,
                    disabled: l,
                    submitting: u,
                    pauseAnimation: o,
                    shineSize: T = s.DEFAULT,
                    shinePaused: _,
                    buttonShineClassName: f,
                    onlyShineOnHover: S,
                    ...I
                } = e, m = i.createRef(), P = (0, d.default)(m), M = !l && !u && !0 !== o && (!S || P);
                return (0, a.jsxs)(c.Button, {
                    buttonRef: m,
                    ...I,
                    className: r(E.shinyButton, n),
                    disabled: l,
                    submitting: u,
                    children: [t, M ? (0, a.jsx)(p, {
                        shinePaused: _,
                        className: r(E.buttonShine, S ? E.onlyShineOnHover : void 0, f),
                        shineSize: T
                    }) : null]
                })
            };
            S.ShineSizes = s;
            var I = S
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("469563"),
                a = n("998460"),
                i = n("75196"),
                u = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, i.default)(u),
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: s,
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, a.GiftIcon)
        }
    }
]);