(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["66541"], {
        280968: function(e, t, n) {
            "use strict";
            e.exports = n.p + "21776a8b4fe8087b0bdc.svg"
        },
        361396: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d159a1f367b4a1eb7f2c.png"
        },
        291059: function(e, t, n) {
            "use strict";
            e.exports = n.p + "9254c6ef3fdf4d153df8.png"
        },
        356057: function(e, t, n) {
            "use strict";
            e.exports = n.p + "163c5051f6417b3bc324.png"
        },
        892712: function(e, t, n) {
            "use strict";
            e.exports = n.p + "13fbe1295be9098d06dd.png"
        },
        335430: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CurrencyWrapper: function() {
                    return l
                },
                default: function() {
                    return i
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("575209");

            function l(e) {
                let {
                    currencies: t,
                    className: n,
                    children: r
                } = e;
                return t.length < 2 ? null : (0, s.jsx)("div", {
                    className: n,
                    children: r
                })
            }
            var i = function(e) {
                let {
                    currencies: t,
                    onChange: n,
                    selectedCurrency: l,
                    className: i,
                    disabled: u = !1
                } = e;
                if (t.length < 2) return null;
                let o = t.map((e, t) => ({
                    key: t,
                    value: e,
                    label: "".concat(e.toUpperCase(), " - ").concat((0, a.getCurrencyFullName)(e))
                }));
                return (0, s.jsx)(r.SingleSelect, {
                    value: l,
                    options: o,
                    onChange: e => {
                        null != e && n(e)
                    },
                    className: i,
                    isDisabled: u
                })
            }
        },
        405932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("135898"),
                l = function(e) {
                    let {
                        message: t
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: a.warnBlock,
                        children: [(0, s.jsx)("div", {
                            className: a.warnIcon
                        }), (0, s.jsx)(r.Text, {
                            className: a.warnText,
                            variant: "text-sm/normal",
                            children: t
                        })]
                    })
                }
        },
        50517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AwaitingPurchaseTokenAuthStepBody: function() {
                    return u
                },
                AwaitingPurchaseTokenAuthStepFooter: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("145131"),
                l = n("782340"),
                i = n("57153");
            let u = e => {
                    let {
                        className: t,
                        isEmailResent: n,
                        resendEmail: a
                    } = e;
                    return (0, s.jsx)("div", {
                        className: t,
                        children: (0, s.jsxs)("div", {
                            className: i.awaitingWrapper,
                            children: [(0, s.jsx)(r.Heading, {
                                variant: "heading-xl/bold",
                                children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_HEADER
                            }), (0, s.jsxs)("p", {
                                children: [(0, s.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL
                                }), (0, s.jsx)("br", {}), (0, s.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_INSTRUCTIONS
                                }), (0, s.jsx)("br", {}), (0, s.jsxs)(r.Text, {
                                    variant: "text-md/normal",
                                    children: [l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT, "\xa0", n ? l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT : (0, s.jsx)(r.Anchor, {
                                        onClick: a,
                                        children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_ACTION
                                    })]
                                })]
                            })]
                        })
                    })
                },
                o = () => (0, s.jsx)("div", {
                    children: (0, s.jsx)(r.ModalFooter, {
                        justify: a.default.Justify.BETWEEN,
                        align: a.default.Align.CENTER,
                        children: (0, s.jsx)(r.Button, {
                            "data-testid": "continue",
                            color: r.Button.Colors.BRAND,
                            disabled: !0,
                            children: l.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_NEXT_BUTTON
                        })
                    })
                })
        },
        594203: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ResizeOrientation: function() {
                    return a
                },
                default: function() {
                    return c
                }
            });
            var s, r, a, l, i = n("884691"),
                u = n("917351");

            function o(e) {
                return e === a.HORIZONTAL_LEFT || e === a.HORIZONTAL_RIGHT ? l.HORIZONTAL : l.VERTICAL
            }(s = a || (a = {}))[s.VERTICAL_TOP = 0] = "VERTICAL_TOP", s[s.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", s[s.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", s[s.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (r = l || (l = {}))[r.VERTICAL = 0] = "VERTICAL", r[r.HORIZONTAL = 1] = "HORIZONTAL";
            var c = e => {
                let {
                    initialElementDimension: t,
                    resizableDomNodeRef: n,
                    maxDimension: s,
                    minDimension: r,
                    onElementResize: c,
                    onElementResizeEnd: d,
                    throttleDuration: _ = 300,
                    orientation: f,
                    usePointerEvents: E = !1
                } = e, [I, m] = i.useState(!1), P = i.useRef(0), N = i.useRef(null == t ? 0 : t);
                return i.useLayoutEffect(() => {
                    if (!I || null == n.current) return;

                    function e(e) {
                        let t = o(f) === l.HORIZONTAL ? e.screenX : e.screenY,
                            n = f === a.VERTICAL_TOP || f === a.HORIZONTAL_LEFT,
                            i = (t - P.current) * (n ? -1 : 1),
                            c = N.current + i;
                        return (0, u.clamp)(c, null != r ? r : 0, null != s ? s : c)
                    }
                    let t = (0, u.throttle)(c, _),
                        i = s => {
                            if (null == n.current) return null;
                            let r = e(s),
                                a = o(f) === l.HORIZONTAL ? "width" : "height";
                            n.current.style[a] = "".concat(r, "px"), t(r)
                        },
                        S = t => {
                            m(!1);
                            let n = e(t);
                            c(n), null == d || d(n)
                        },
                        T = E ? "pointerup" : "mouseup",
                        p = E ? "pointermove" : "mousemove",
                        R = n.current.ownerDocument;
                    return R.addEventListener(T, S), R.addEventListener(p, i), () => {
                        R.removeEventListener(T, S), R.removeEventListener(p, i), t.cancel()
                    }
                }, [I, c, r, s, f, n, _, d, E]), i.useCallback(e => {
                    let t = o(f) === l.HORIZONTAL;
                    null != n.current && (N.current = t ? n.current.offsetWidth : n.current.offsetHeight), P.current = t ? e.screenX : e.screenY, m(!0)
                }, [f, n])
            }
        },
        944305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                customRoleIconUpsellPerks: function() {
                    return v
                },
                guildBannerUpsellPerks: function() {
                    return x
                },
                animatedGuildBannerUpsellPerks: function() {
                    return U
                },
                vanityUrlUpsellPerks: function() {
                    return b
                },
                guildInviteUpsellPerks: function() {
                    return G
                },
                guildBoostingPerks: function() {
                    return D
                },
                premiumProgressBarUpsellPerks: function() {
                    return j
                }
            });
            var s = n("669491"),
                r = n("245307"),
                a = n("571658"),
                l = n("118503"),
                i = n("110006"),
                u = n("682344"),
                o = n("238521"),
                c = n("394832"),
                d = n("290581"),
                _ = n("595086"),
                f = n("885541"),
                E = n("49111");
            n("646718");
            var I = n("782340");
            let m = () => ({
                    color: s.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: o.default,
                    description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_CUSTOM_INVITE
                }),
                P = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.default.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
                    return {
                        color: e,
                        icon: i.default,
                        description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_ICON
                    }
                },
                N = () => ({
                    color: s.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: o.default,
                    description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_GUILD_BANNER
                }),
                S = () => ({
                    color: s.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: i.default,
                    description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_GUILD_BANNER
                }),
                T = () => ({
                    color: s.default.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
                    icon: u.default,
                    description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ROLE_ICON
                }),
                p = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
                    return {
                        color: e,
                        icon: _.default,
                        description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS
                    }
                },
                R = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
                        n = 0,
                        r = 0;
                    switch (e) {
                        case E.BoostedGuildTiers.TIER_1:
                            n = 15, r = 100;
                            break;
                        case E.BoostedGuildTiers.TIER_2:
                            n = 30, r = 150;
                            break;
                        case E.BoostedGuildTiers.TIER_3:
                            n = 60, r = 250
                    }
                    return {
                        color: t,
                        icon: _.default,
                        description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS_AND_EMOJIS.format({
                            numStickers: n,
                            numEmojis: r
                        })
                    }
                },
                C = () => ({
                    color: s.default.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
                    icon: d.default,
                    description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_VANITY_URL
                }),
                O = () => ({
                    icon: r.default,
                    description: I.default.Messages.PREMIUM_GUILD_USER_FEATURE_PROFILE_BADGE
                }),
                A = () => ({
                    icon: l.default,
                    color: s.default.unsafe_rawColors.PREMIUM_PERK_PINK.css,
                    description: I.default.Messages.PREMIUM_GUILD_USER_FEATURE_BOOST_CRYSTAL
                }),
                M = () => ({
                    icon: u.default,
                    color: s.default.unsafe_rawColors.PREMIUM_PERK_YELLOW.css,
                    description: I.default.Messages.PREMIUM_GUILD_USER_FEATURE_SPECIAL_ROLE
                }),
                L = () => ({
                    color: s.default.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
                    icon: a.default,
                    description: I.default.Messages.PREMIUM_GUILD_USER_FEATURE_OTHERS
                }),
                g = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_OTHER;
                    return {
                        color: s.default.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
                        icon: a.default,
                        description: e
                    }
                },
                y = () => ({
                    color: s.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
                    icon: f.default,
                    description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_FILE_UPLOAD_TIER_3
                }),
                h = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
                    return {
                        color: e,
                        icon: c.default,
                        description: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_SCREEN_SHARE_1080P
                    }
                };

            function v() {
                return [T(), N(), p(), g()]
            }

            function x() {
                return [T(), R(E.BoostedGuildTiers.TIER_2), h(), g()]
            }

            function U() {
                return [R(E.BoostedGuildTiers.TIER_3, s.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css), y(), C(), g()]
            }

            function b() {
                return [C(), S(), R(E.BoostedGuildTiers.TIER_3), g()]
            }

            function G() {
                return [m(), p(), P(), g()]
            }

            function D() {
                return [p(), g()]
            }

            function j() {
                return [A(), M(), O(), L()]
            }
        },
        379532: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("292687"),
                l = n("974889"),
                i = n("599110"),
                u = n("49111");

            function o(e, t) {
                let o = null != t ? t : "".concat(u.AnalyticsSections.PREMIUM_GUILD_UPSELL_MODAL);
                null != e.targetBoostedGuildTier && (o += " - Tier ".concat(e.targetBoostedGuildTier));
                i.default.track(u.AnalyticEvents.OPEN_MODAL, {
                    type: o,
                    location: e.analyticsSourceLocation
                });
                let {
                    openInPopoutEnabled: c,
                    ...d
                } = e, _ = a.default.getWindowOpen(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT) && null != c && c;
                _ && (0, l.default)(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let f = _ ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("874642").then(n.bind(n, "874642"));
                    return t => (0, s.jsx)(e, {
                        ...d,
                        ...t
                    })
                }, {
                    onCloseCallback: () => {
                        i.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                            type: o,
                            location: e.analyticsSourceLocation
                        })
                    },
                    contextKey: f
                })
            }
        },
        605886: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                purchaseProduct: function() {
                    return S
                }
            });
            var s = n("627445"),
                r = n.n(s),
                a = n("913144"),
                l = n("850068"),
                i = n("112679"),
                u = n("596523"),
                o = n("465527"),
                c = n("388290"),
                d = n("599110"),
                _ = n("745279"),
                f = n("659632"),
                E = n("719923"),
                I = n("286350"),
                m = n("49111"),
                P = n("646718"),
                N = n("782340");
            async function S(e) {
                var t;
                let {
                    setPurchaseState: n,
                    setHasAcceptedTerms: s,
                    setIsSubmitting: S,
                    setPurchaseError: T,
                    hasRedirectURL: p,
                    setHasRedirectURL: R,
                    isGift: C,
                    giftStyle: O,
                    baseAnalyticsData: A,
                    analyticsLocation: M,
                    analyticsLocations: L,
                    flowStartTime: g,
                    subscriptionPlan: y,
                    planGroup: h,
                    trialId: v,
                    priceOptions: x,
                    paymentSource: U,
                    isPrepaidPaymentPastDue: b,
                    openInvoiceId: G,
                    premiumSubscription: D,
                    onNext: j,
                    metadata: B,
                    sku: F,
                    skuPricePreview: k,
                    purchaseType: H,
                    referralCode: w,
                    loadId: Y,
                    giftRecipient: W,
                    customMessage: K,
                    emojiConfetti: Z,
                    soundEffect: V
                } = e;
                n(I.PurchaseState.PURCHASING), s(!0), S(!0), a.default.wait(i.clearError), T(null);
                try {
                    let e, s, a;
                    if (d.default.track(m.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
                            ...A,
                            duration_ms: Date.now() - g
                        }), p) return;
                    let i = (0, f.isCustomGiftEnabled)(W);
                    if (H === m.PurchaseTypes.ONE_TIME) r(null != F, "SKU must exist and be fetched."), r(null != k, "SKUPricePreview must exist."), e = await (0, o.purchaseSKU)(F.applicationId, F.id, {
                        expectedAmount: k.amount,
                        expectedCurrency: k.currency,
                        paymentSource: U,
                        loadId: Y
                    });
                    else if (r(null != y, "Missing subscriptionPlan"), C) {
                        let n = (0, E.getPrice)(y.id, !1, !0, x);
                        if ("usd" === n.currency && (null == U ? void 0 : U.type) === m.PaymentSourceTypes.GCASH) {
                            let e = Error("Invalid USD currency for GCash");
                            (0, _.captureBillingException)(e, {
                                tags: {
                                    paymentSourceId: null !== (t = null == U ? void 0 : U.id) && void 0 !== t ? t : "",
                                    subscriptionPlanId: y.id,
                                    priceOptions: JSON.stringify(x)
                                }
                            })
                        }
                        e = await (0, o.purchaseSKU)(P.PREMIUM_SUBSCRIPTION_APPLICATION, y.skuId, {
                            expectedAmount: n.amount,
                            expectedCurrency: n.currency,
                            paymentSource: U,
                            subscriptionPlanId: y.id,
                            isGift: !0,
                            giftStyle: O,
                            loadId: Y,
                            recipientId: i ? null == W ? void 0 : W.id : void 0,
                            customMessage: i ? K : void 0,
                            emojiConfetti: i ? Z : void 0,
                            soundEffect: i ? V : void 0
                        })
                    } else e = b && null != G && null != U && null != D ? m.PREPAID_PAYMENT_SOURCES.has(U.type) ? await (0, l.payInvoiceManually)(D, G, U, x.currency) : await (0, l.updateSubscription)(D, {
                        paymentSource: U,
                        currency: x.currency
                    }, L, M) : null != D ? await (0, l.updateSubscription)(D, {
                        items: (0, E.getItemsWithUpsertedPlanIdForGroup)(D, y.id, 1, new Set(h)),
                        paymentSource: U,
                        currency: x.currency
                    }, L, M) : await (0, u.subscribe)({
                        planId: y.id,
                        currency: x.currency,
                        paymentSource: U,
                        trialId: v,
                        metadata: B,
                        referralCode: w,
                        loadId: Y
                    });
                    if (e.redirectConfirmation) {
                        R(null != e.redirectURL);
                        return
                    }
                    let S = {
                        ...A,
                        duration_ms: Date.now() - g,
                        payment_source_type: null == U ? void 0 : U.type
                    };
                    i && (S.is_custom_message_edited = K !== N.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE), d.default.track(m.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, S), n(I.PurchaseState.COMPLETED), "subscription" in e ? s = null != e.subscription ? c.default.createFromServer(e.subscription) : null : "entitlements" in e && (a = null != e.entitlements ? e.entitlements : void 0), j(s, a)
                } catch (e) {
                    n(I.PurchaseState.FAIL), T(e), d.default.track(m.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                        ...A,
                        payment_source_id: null == U ? void 0 : U.id,
                        payment_source_type: null == U ? void 0 : U.type,
                        duration_ms: Date.now() - g
                    })
                } finally {
                    !p && S(!1)
                }
            }
        },
        883558: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("862205");
            let r = (0, s.createExperiment)({
                id: "2023-07_checkout_optimization_browser_autofill",
                label: "Checkout Optimization Browser Autofill",
                kind: "user",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var a = r
        },
        102492: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                checkNoPaymentTrialEnabled: function() {
                    return i
                }
            });
            var s = n("862205"),
                r = n("719923");
            let a = (0, s.createExperiment)({
                    kind: "user",
                    id: "2022-06_no_payment_info_trial",
                    label: "No Payment Info Trial",
                    defaultConfig: {
                        bypassCheckout: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Bypass collecting payment info",
                        config: {
                            bypassCheckout: !0
                        }
                    }]
                }),
                l = (e, t, n) => {
                    let s = null == n || (0, r.isPremiumBaseSubscriptionPlan)(n);
                    return null != e && null == t && s
                },
                i = (e, t, n) => {
                    let {
                        bypassCheckout: s
                    } = a.useExperiment({
                        location: "aeb070_1"
                    }, {
                        autoTrackExposure: !1
                    }), r = l(e, t, n);
                    return s && r
                }
        },
        35188: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var s = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2022-12_localized_pricing_poland_notice",
                label: "Localized Pricing Poland Notice",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Poland Notice",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        909469: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PAYMENT_SOURCE_NAMES: function() {
                    return _
                },
                getLocalizedPricingNotice: function() {
                    return E
                },
                getLocalizedPricingBannerStrings: function() {
                    return I
                }
            });
            var s = n("592861"),
                r = n("988415"),
                a = n("701909"),
                l = n("153160"),
                i = n("49111"),
                u = n("843455"),
                o = n("782340");
            let c = new Set([u.CurrencyCodes.ARS, u.CurrencyCodes.CLP, u.CurrencyCodes.COP]),
                d = new Set([u.CurrencyCodes.USD, u.CurrencyCodes.JPY]),
                _ = {
                    [i.PaymentSourceTypes.CARD]: () => o.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
                    [i.PaymentSourceTypes.PAYPAL]: () => o.default.Messages.PAYMENT_SOURCE_PAYPAL,
                    [i.PaymentSourceTypes.SOFORT]: () => o.default.Messages.PAYMENT_SOURCE_SOFORT,
                    [i.PaymentSourceTypes.GIROPAY]: () => o.default.Messages.PAYMENT_SOURCE_GIROPAY,
                    [i.PaymentSourceTypes.PRZELEWY24]: () => o.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
                    [i.PaymentSourceTypes.PAYSAFE_CARD]: () => o.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
                    [i.PaymentSourceTypes.GCASH]: () => o.default.Messages.PAYMENT_SOURCE_GCASH,
                    [i.PaymentSourceTypes.GRABPAY_MY]: () => o.default.Messages.PAYMENT_SOURCE_GRABPAY,
                    [i.PaymentSourceTypes.MOMO_WALLET]: () => o.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
                    [i.PaymentSourceTypes.VENMO]: () => o.default.Messages.PAYMENT_SOURCE_VENMO,
                    [i.PaymentSourceTypes.KAKAOPAY]: () => o.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
                    [i.PaymentSourceTypes.GOPAY_WALLET]: () => o.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
                    [i.PaymentSourceTypes.BANCONTACT]: () => o.default.Messages.PAYMENT_SOURCE_BANCONTACT,
                    [i.PaymentSourceTypes.EPS]: () => o.default.Messages.PAYMENT_SOURCE_EPS,
                    [i.PaymentSourceTypes.IDEAL]: () => o.default.Messages.PAYMENT_SOURCE_IDEAL,
                    [i.PaymentSourceTypes.CASH_APP]: () => o.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY
                },
                f = [i.PaymentSourceTypes.EPS, i.PaymentSourceTypes.BANCONTACT, i.PaymentSourceTypes.IDEAL, i.PaymentSourceTypes.SOFORT, i.PaymentSourceTypes.GIROPAY, i.PaymentSourceTypes.SEPA_DEBIT, i.PaymentSourceTypes.PAYSAFE_CARD],
                E = (e, t, n, s) => {
                    if (null == e) return "";
                    let a = (0, r.getI18NCountryName)(e);
                    if (t === u.CurrencyCodes.EUR) return n ? o.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
                        country: a
                    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
                        currencyISOCode: t.toUpperCase()
                    });
                    return s ? o.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                        countryName: a
                    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE.format({
                        country: a
                    })
                },
                I = e => {
                    let {
                        localizedPricingPromo: t,
                        subscription: n,
                        forceSingleLine: s = !1,
                        userLocale: E
                    } = e, {
                        countryCode: I,
                        amount: P,
                        currency: N,
                        paymentSourceTypes: S
                    } = t, T = 0 !== S.length, p = m(I), R = (0, l.formatPrice)(P, N, {
                        style: "currency",
                        currency: N,
                        currencyDisplay: "symbol",
                        localeOverride: p
                    }), C = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                        helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                        currencyISOCode: N.toUpperCase(),
                        localizedPriceWithCurrencySymbol: R
                    });
                    if (d.has(N) && (C = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            localizedPriceWithCurrencySymbol: R
                        })), c.has(N) && (C = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: N.toUpperCase(),
                            localizedPriceWithCurrencySymbol: R
                        })), null != n && !n.hasPremiumNitroMonthly && (C = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: N.toUpperCase()
                        })), N === u.CurrencyCodes.EUR && (C = s ? o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                            country: (0, r.getI18NCountryName)(I),
                            currencyISOCode: N.toUpperCase(),
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
                        }) : o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                            currencyISOCode: N.toUpperCase(),
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
                        })), T) {
                        let e = f.filter(e => S.includes(e)),
                            t = S.filter(e => !f.includes(e)),
                            n = [...e, ...t],
                            s = n.slice(0, 2).map(e => {
                                var t, n;
                                return null !== (n = null === (t = _[e]) || void 0 === t ? void 0 : t.call(_)) && void 0 !== n ? n : o.default.Messages.PAYMENT_SOURCE_UNKNOWN
                            });
                        S.length >= 3 && s.push(o.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
                        let r = new Intl.ListFormat(E, {
                            style: "short",
                            type: "conjunction"
                        });
                        C = o.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            paymentMethods: r.format(s)
                        })
                    }
                    return {
                        localizedPricingBannerHeader: o.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                            country: (0, r.getI18NCountryName)(I)
                        }),
                        localizedPricingBannerBody: C,
                        localizedPricingBannerLinkOnly: o.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                            helpCenterLink: a.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
                        }),
                        localizedPricingBannerSubNotif: T ? void 0 : o.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
                    }
                },
                m = e => {
                    let t = s.default.find(t => t.alpha2 === e);
                    return null == t ? void 0 : t.localeForICU
                }
        },
        391533: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var s = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-05_localized_pricing_turkey_notice",
                label: "Localized Pricing Turkey Notice",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Turkey Notice",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        916187: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                },
                isPaymentSourceEligibleForMultiMonthPlans: function() {
                    return u
                }
            });
            var s = n("976979"),
                r = n("862205"),
                a = n("646718"),
                l = (0, r.createExperiment)({
                    kind: "user",
                    id: "2022-02_multi_month_plans",
                    label: "Multi Month Plans",
                    defaultConfig: {
                        newPlans: []
                    },
                    treatments: [{
                        id: 1,
                        label: "3 and 6 Month Plans",
                        config: {
                            newPlans: [a.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2, a.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2]
                        }
                    }, {
                        id: 2,
                        label: "3 Month Plan Only",
                        config: {
                            newPlans: [a.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2]
                        }
                    }]
                });
            let i = new Set([s.CountryCodes.US, s.CountryCodes.CA]);

            function u(e) {
                return null == e || i.has(e.country)
            }
        },
        809071: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateSubscriptionInvoicePreview: function() {
                    return _
                },
                useSubscriptionInvoicePreview: function() {
                    return I
                },
                useGetSubscriptionInvoice: function() {
                    return m
                },
                getItemUnitPriceWithDiscount: function() {
                    return P
                }
            });
            var s = n("884691"),
                r = n("446674"),
                a = n("872717"),
                l = n("448993"),
                i = n("195358"),
                u = n("521012"),
                o = n("719923"),
                c = n("49111");
            async function d(e) {
                let {
                    items: t,
                    paymentSourceId: n,
                    trialId: s,
                    code: r,
                    applyEntitlements: u = !1,
                    currency: d,
                    renewal: _,
                    metadata: f
                } = e;
                t = (0, o.coerceExistingItemsToNewItemInterval)(t);
                let E = {
                    items: t.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: n,
                    trial_id: s,
                    code: r,
                    apply_entitlements: u,
                    currency: d,
                    renewal: _,
                    metadata: f
                };
                try {
                    let e = await a.default.post({
                        url: c.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: E,
                        oldFormErrors: !0
                    });
                    return i.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new l.BillingError(e)
                }
            }
            async function _(e) {
                var t;
                let {
                    subscriptionId: n,
                    items: s,
                    paymentSourceId: r,
                    renewal: u,
                    currency: d,
                    applyEntitlements: _ = !1,
                    analyticsLocations: f,
                    analyticsLocation: E
                } = e;
                null != s && (s = (0, o.coerceExistingItemsToNewItemInterval)(s));
                let I = {
                    items: null === (t = s) || void 0 === t ? void 0 : t.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: r,
                    renewal: u,
                    apply_entitlements: _,
                    currency: d
                };
                try {
                    let e = await a.default.patch({
                        url: c.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(n),
                        query: {
                            location: E,
                            location_stack: f
                        },
                        body: I,
                        oldFormErrors: !0
                    });
                    return i.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new l.BillingError(e)
                }
            }
            async function f(e) {
                let {
                    subscriptionId: t,
                    preventFetch: n
                } = e;
                if (n) return null;
                let s = await a.default.get({
                    url: c.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return i.default.createInvoiceFromServer(s.body)
            }

            function E(e, t) {
                let {
                    preventFetch: n = !1
                } = e, [a, l] = (0, s.useState)(null), [i, o] = (0, s.useState)(null), c = (0, r.useStateFromStores)([u.default], () => u.default.getSubscriptions());
                return (0, s.useEffect)(() => {
                    let e = !1;
                    async function s() {
                        try {
                            o(null), l(null);
                            let n = await t();
                            !e && l(n)
                        } catch (t) {
                            !e && o(t)
                        }
                    }
                    return !n && s(), () => {
                        e = !0
                    }
                }, [n, t, c]), [a, i]
            }

            function I(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    let {
                        subscriptionId: t,
                        ...n
                    } = e;
                    e = n
                }
                let t = (0, s.useCallback)(() => "subscriptionId" in e ? _(e) : "items" in e ? d(e) : null, [JSON.stringify(e)]);
                return E(e, t)
            }

            function m(e) {
                let t = (0, s.useCallback)(() => f(e), [JSON.stringify(e)]);
                return E(e, t)
            }

            function P(e) {
                let t = e.subscriptionPlanPrice;
                return e.discounts.forEach(n => {
                    let s = n.amount / e.quantity;
                    t -= s
                }), t
            }
        },
        968532: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckoutV2ChildExperiments: function() {
                    return r
                },
                default: function() {
                    return i
                }
            });
            var s, r, a = n("862205");
            (s = r || (r = {}))[s.NONE = 0] = "NONE", s[s.BROWSER_AUTOFILL = 1] = "BROWSER_AUTOFILL", s[s.MERGE_PLAN_SELECT_TO_REVIEW = 2] = "MERGE_PLAN_SELECT_TO_REVIEW";
            let l = (0, a.createExperiment)({
                id: "2023-08_checkout_v2_parent",
                label: "Checkout V2 Parent",
                kind: "user",
                defaultConfig: {
                    experiment: r.NONE
                },
                treatments: [{
                    id: 1,
                    label: "Browser Autofill",
                    config: {
                        experiment: r.BROWSER_AUTOFILL
                    }
                }, {
                    id: 2,
                    label: "Merge Plan Select to Review",
                    config: {
                        experiment: r.MERGE_PLAN_SELECT_TO_REVIEW
                    }
                }]
            });
            var i = l
        },
        78710: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CustomGiftSoundboardEmojiExperiment: function() {
                    return r
                }
            });
            var s = n("862205");
            let r = (0, s.createExperiment)({
                kind: "user",
                id: "2023-10_custom_gift_soundboard_emoji",
                label: "Custom Gift - Soundboard and Emoji Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show gift purchaser custom gift flow with soundboard and emoji features",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        921149: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsPrepaidPaymentPastDue: function() {
                    return _
                }
            });
            var s = n("866227"),
                r = n.n(s),
                a = n("446674"),
                l = n("357957"),
                i = n("10514"),
                u = n("521012"),
                o = n("719923"),
                c = n("49111"),
                d = n("843455");

            function _() {
                let e = (0, a.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()),
                    t = (0, a.useStateFromStores)([i.default], () => null != e && null != e.planIdFromItems ? i.default.get(null == e ? void 0 : e.planIdFromItems) : null),
                    n = (0, a.useStateFromStores)([l.default], () => null != e && null != e.paymentSourceId ? l.default.getPaymentSource(e.paymentSourceId) : null, [e]),
                    s = null != n && d.PREPAID_PAYMENT_SOURCES.has(n.type),
                    _ = (null == e ? void 0 : e.status) === c.SubscriptionStatusTypes.PAST_DUE ? r().diff(r(e.currentPeriodStart), "days") : 0;
                return !!(null != e && null != t && (0, o.isPremiumBaseSubscriptionPlan)(t.id)) && s && _ >= 0 && _ <= (0, o.getBillingGracePeriodDays)(e) && e.status === c.SubscriptionStatusTypes.PAST_DUE && !e.isPurchasedExternally
            }
        },
        279171: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShouldShowLegacyPricingNotice: function() {
                    return m
                },
                default: function() {
                    return P
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                l = n("627445"),
                i = n.n(l),
                u = n("423487"),
                o = n("701909"),
                c = n("35188"),
                d = n("391533"),
                _ = n("296253"),
                f = n("49111"),
                E = n("782340"),
                I = n("712109");

            function m() {
                let e = (0, _.default)(),
                    {
                        enabled: t
                    } = c.default.useExperiment({
                        location: "5ebfcf_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: n
                    } = d.default.useExperiment({
                        location: "5ebfcf_2"
                    }, {
                        autoTrackExposure: !1
                    });
                return null != e && ("PL" === e ? t : "TR" === e && n)
            }
            var P = e => {
                var t, n;
                let {
                    fromBoostCancelModal: r,
                    className: l
                } = e, c = (0, _.default)(), d = m();
                if (!d) return null;
                return i(null != c, "Subscription billing country should not be null"), (0, s.jsxs)("div", {
                    className: a(I.noticeRoot, l),
                    children: [(0, s.jsx)("div", {
                        className: I.iconContainer,
                        children: (0, s.jsx)(u.default, {
                            className: I.infoIcon
                        })
                    }), (0, s.jsx)("div", {
                        className: I.text,
                        children: (t = c, n = r, "PL" === t ? n ? E.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : E.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === t ? n ? E.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : E.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : n ? E.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : E.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
                            helpCenterLink: o.default.getArticleURL(f.HelpdeskArticles.LOCALIZED_PRICING)
                        })
                    })]
                })
            }
        },
        824734: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                l = n("153160"),
                i = n("646718"),
                u = n("782340"),
                o = n("552033");

            function c(e) {
                let {
                    price: t,
                    currency: n,
                    intervalType: r,
                    className: c,
                    intervalCount: d = 1,
                    isPrepaidPaymentSource: _ = !1
                } = e, f = (0, l.formatPrice)(t, n), E = null;
                return r === i.SubscriptionIntervalTypes.YEAR ? E = u.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: f
                }) : r === i.SubscriptionIntervalTypes.MONTH && 1 === d ? E = u.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: f
                }) : r === i.SubscriptionIntervalTypes.MONTH && d > 1 && (E = u.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: f,
                    intervalCount: d
                })), (0, s.jsx)("div", {
                    className: a(o.pricePerInterval, c),
                    "data-testid": "PricePerInterval-".concat(n),
                    children: null == r || _ ? (0, s.jsx)("strong", {
                        children: f
                    }) : E
                })
            }
        },
        705820: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var s = n("37983"),
                r = n("884691"),
                a = n("77078"),
                l = n("850391"),
                i = n("149022"),
                u = n("681060"),
                o = n("570697"),
                c = n("233069"),
                d = n("49111"),
                _ = n("782340"),
                f = n("809331");
            let E = (0, c.createChannelRecord)({
                id: "1",
                type: d.ChannelTypes.DM
            });

            function I(e) {
                let {
                    sectionTitle: t,
                    errors: n,
                    onTextChange: c,
                    pendingText: d,
                    placeholder: I,
                    currentText: m,
                    disabled: P = !1
                } = e, [N, S] = r.useState(null != d ? d : m), [T, p] = r.useState((0, i.toRichValue)(N)), R = r.useRef(!1);
                return r.useEffect(() => {
                    R.current = !0
                }, []), r.useEffect(() => {
                    if (void 0 === d) {
                        let e = (0, i.toRichValue)(m);
                        S(m), p(e)
                    }
                }, [d, m]), (0, s.jsx)("div", {
                    className: f.body,
                    children: (0, s.jsxs)(o.default, {
                        title: t,
                        errors: n,
                        disabled: P,
                        children: [(0, s.jsx)(u.default, {
                            innerClassName: f.textArea,
                            maxCharacterCount: 190,
                            onChange: function(e, t, n) {
                                t !== N && (S(t), p(n), c(t))
                            },
                            placeholder: I,
                            channel: E,
                            textValue: N,
                            richValue: T,
                            type: l.ChatInputTypes.CUSTOM_GIFT,
                            onBlur: () => {
                                R.current = !1
                            },
                            onFocus: () => {
                                R.current = !0
                            },
                            focused: R.current,
                            onSubmit: function() {
                                return new Promise(e => {
                                    e({
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    })
                                })
                            }
                        }), (0, s.jsx)(a.HiddenVisually, {
                            children: _.default.Messages.MAXIMUM_LENGTH.format({
                                maxLength: 190
                            })
                        })]
                    })
                })
            }
        },
        623003: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983"),
                r = n("884691"),
                a = n("414456"),
                l = n.n(a),
                i = n("849085");
            let u = r.forwardRef(function(e, t) {
                let {
                    isActive: n,
                    children: r
                } = e;
                return (0, s.jsx)("div", {
                    className: l(i.wrapper, {
                        [i.wrapperActive]: n
                    }),
                    ref: t,
                    children: r
                })
            });
            var o = u
        },
        208559: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftAnimationOptions: function() {
                    return R
                }
            });
            var s = n("37983"),
                r = n("884691"),
                a = n("77078"),
                l = n("642906"),
                i = n("742926"),
                u = n("68238"),
                o = n("659632"),
                c = n("210721"),
                d = n("78345"),
                _ = n("53253"),
                f = n("78710"),
                E = n("65324"),
                I = n("563613"),
                m = n("64798"),
                P = n("782340"),
                N = n("734203");
            let S = [d.PremiumGiftStyles.BOX, d.PremiumGiftStyles.CUP, d.PremiumGiftStyles.SNOWGLOBE],
                T = [d.PremiumGiftStyles.STANDARD_BOX, d.PremiumGiftStyles.CAKE, d.PremiumGiftStyles.COFFEE, d.PremiumGiftStyles.CHEST],
                p = () => (0, s.jsxs)("div", {
                    className: N.giftBoxHeaderContainer,
                    children: [(0, s.jsx)(a.Heading, {
                        variant: "heading-deprecated-12/semibold",
                        className: N.giftBoxHeaderText,
                        children: P.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX
                    }), (0, s.jsx)(a.Tooltip, {
                        text: P.default.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                        position: "top",
                        children: e => (0, s.jsx)(a.Clickable, {
                            ...e,
                            className: N.infoIconContainer,
                            "aria-label": P.default.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                            children: (0, s.jsx)(u.default, {
                                className: N.infoIcon
                            })
                        })
                    })]
                }),
                R = e => {
                    let {
                        selectedGiftStyle: t,
                        setSelectedGiftStyle: n,
                        emojiConfetti: u,
                        soundEffect: d,
                        setEmojiConfetti: R,
                        setSoundEffect: C
                    } = e, {
                        giftRecipient: O
                    } = (0, l.usePaymentContext)(), [A, M] = r.useState(!1), L = r.useRef(null), g = (0, a.useRadioGroup)({
                        orientation: "horizontal"
                    }), {
                        enabled: y
                    } = _.default.getCurrentConfig({
                        location: "premiumGiftSelect_GiftAnimationOptions"
                    }), h = (0, o.isCustomGiftEnabled)(O), v = null;
                    y ? v = S : h && (v = T);
                    let x = !1;
                    return h && (x = f.CustomGiftSoundboardEmojiExperiment.getCurrentConfig({
                        location: "premiumGiftSelect_GiftAnimationOptions"
                    }).enabled), (0, s.jsxs)("div", {
                        children: [y && (0, s.jsx)(p, {}), h && (0, s.jsxs)("div", {
                            className: N.giftMainAnimation,
                            children: [null != t ? (0, s.jsx)(E.default, {
                                giftStyle: t,
                                defaultAnimationState: c.AnimationState.ACTION,
                                idleAnimationState: c.AnimationState.LOOP,
                                shouldAnimate: !0,
                                className: N.animation
                            }) : (0, s.jsx)(a.Spinner, {
                                className: N.spinner
                            }), x && (0, s.jsxs)("div", {
                                className: N.soundEmojiContainer,
                                children: [(0, s.jsx)("div", {
                                    className: N.sound,
                                    children: (0, s.jsx)(i.default, {
                                        sound: d,
                                        onSelect: e => {
                                            null != C && C(null == e ? void 0 : e)
                                        }
                                    })
                                }), (0, s.jsx)("div", {
                                    className: N.emoji,
                                    children: (0, s.jsx)(I.default, {
                                        setEmojiConfetti: R,
                                        emojiConfetti: null == u ? void 0 : u
                                    })
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            tabIndex: null != t || A ? void 0 : 0,
                            onFocus: e => {
                                var t;
                                e.target === e.currentTarget && (null === (t = L.current) || void 0 === t || t.focus())
                            },
                            className: N.giftBoxOptionContainer,
                            "aria-label": P.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
                            ...g,
                            children: null != v && v.map((e, r) => (0, s.jsx)(m.GiftStaticOption, {
                                isSelected: t === e,
                                giftStyle: e,
                                setSelectedGiftStyle: n,
                                ref: 0 === r ? L : null,
                                onFocus: () => M(!0),
                                onBlur: () => M(!1)
                            }, e))
                        }), (0, s.jsx)("div", {
                            className: N.selectPlanDivider
                        })]
                    })
                }
        },
        563613: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var s = n("37983"),
                r = n("884691"),
                a = n("77078"),
                l = n("86678"),
                i = n("46829"),
                u = n("49111"),
                o = n("958706"),
                c = n("782340"),
                d = n("347609");
            let _ = {
                    section: u.AnalyticsSections.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
                    openPopoutType: "gift_effect_emoji_picker"
                },
                f = o.EmojiIntention.COMMUNITY_CONTENT;

            function E(e) {
                let {
                    setEmojiConfetti: t,
                    emojiConfetti: n
                } = e, [u, o] = r.useState(!1), E = e => (0, s.jsxs)("div", {
                    className: d.customGiftContent,
                    children: [(0, s.jsxs)("div", {
                        className: d.customGiftHeader,
                        children: [(0, s.jsx)(a.Text, {
                            variant: "text-md/bold",
                            children: c.default.Messages.GIFT_SELECT_EMOJI
                        }), (0, s.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: c.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
                        })]
                    }), e]
                }), I = e => {
                    null != t && (t(e), o(!1))
                };
                return (0, s.jsx)(a.Popout, {
                    shouldShow: u,
                    position: "top",
                    onRequestClose: () => o(!1),
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, s.jsx)(l.default, {
                            analyticsOverride: _,
                            closePopout: t,
                            onSelectEmoji: I,
                            wrapper: "div",
                            pickerIntention: f,
                            disableEmojiTutorialFlow: !0,
                            renderHeader: E,
                            headerClassName: d.emojiHeader,
                            className: d.emojiList,
                            listHeaderClassName: d.emojiList,
                            searchProps: {
                                accessory: (0, s.jsx)(s.Fragment, {})
                            }
                        })
                    },
                    children: () => (0, s.jsx)("div", {
                        className: d.container,
                        children: (0, s.jsx)(a.Clickable, {
                            className: d.emoji,
                            onClick: () => o(!0),
                            children: (null == n ? void 0 : n.name) == null ? (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(i.default, {
                                    className: d.emojiIcon,
                                    width: 14,
                                    height: 14
                                }), (0, s.jsx)(a.Text, {
                                    className: d.text,
                                    variant: "text-sm/semibold",
                                    children: c.default.Messages.GIFT_SELECT_EMOJI
                                })]
                            }) : (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(a.Text, {
                                    className: d.textSelected,
                                    variant: "text-sm/semibold",
                                    children: n.optionallyDiverseSequence
                                }), (0, s.jsx)(a.Text, {
                                    className: d.text,
                                    variant: "text-sm/semibold",
                                    children: n.name.replace(/_/g, " ")
                                })]
                            })
                        })
                    })
                })
            }
        },
        64798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftStaticOption: function() {
                    return f
                }
            });
            var s = n("37983"),
                r = n("884691"),
                a = n("77078"),
                l = n("78345"),
                i = n("107342"),
                u = n("361396"),
                o = n("291059"),
                c = n("356057"),
                d = n("892712");
            let _ = {
                    [l.PremiumGiftStyles.STANDARD_BOX]: u,
                    [l.PremiumGiftStyles.CAKE]: o,
                    [l.PremiumGiftStyles.CHEST]: c,
                    [l.PremiumGiftStyles.COFFEE]: d,
                    [l.PremiumGiftStyles.SNOWGLOBE]: "",
                    [l.PremiumGiftStyles.BOX]: "",
                    [l.PremiumGiftStyles.CUP]: ""
                },
                f = r.forwardRef(function(e, t) {
                    let {
                        isSelected: n,
                        giftStyle: r,
                        setSelectedGiftStyle: l,
                        onFocus: u,
                        onBlur: o
                    } = e;
                    return (0, s.jsx)(a.Clickable, {
                        innerRef: t,
                        className: i.clickable,
                        onClick: () => l(r),
                        onFocus: u,
                        onBlur: o,
                        children: (0, s.jsx)("img", {
                            style: {
                                width: "100%",
                                height: "100%"
                            },
                            alt: "",
                            src: _[r],
                            className: n ? i.customGiftBoxHighlighted : i.customGiftBox
                        })
                    })
                })
        },
        177998: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("782340"),
                l = n("816318"),
                i = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, s.jsx)(r.Anchor, {
                        onClick: t,
                        className: l.link,
                        children: a.default.Messages.BACK
                    })
                }
        },
        570727: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumSwitchPlanSelectBody: function() {
                    return k
                },
                PremiumSwitchPlanSelectFooter: function() {
                    return H
                }
            });
            var s = n("37983"),
                r = n("884691"),
                a = n("627445"),
                l = n.n(a),
                i = n("446674"),
                u = n("77078"),
                o = n("405932"),
                c = n("798609"),
                d = n("642906"),
                _ = n("85336"),
                f = n("883558"),
                E = n("10514"),
                I = n("521012"),
                m = n("659632"),
                P = n("701909"),
                N = n("773336"),
                S = n("719923"),
                T = n("153160"),
                p = n("916187"),
                R = n("968532"),
                C = n("15733"),
                O = n("154889"),
                A = n("917247"),
                M = n("279171"),
                L = n("883662"),
                g = n("824734"),
                y = n("705820"),
                h = n("208559"),
                v = n("177998"),
                x = n("661128"),
                U = n("26785"),
                b = n("617223"),
                G = n("646718"),
                D = n("49111"),
                j = n("843455"),
                B = n("782340"),
                F = n("33769");

            function k(e) {
                var t, n, a, _, f, I;
                let {
                    premiumSubscription: N,
                    skuId: R,
                    selectedPlanId: v,
                    setSelectedPlanId: x,
                    isGift: k = !1,
                    isSeasonalGift: H = !1,
                    selectedGiftStyle: w,
                    setSelectedGiftStyle: Y,
                    priceOptions: W,
                    planOptions: K,
                    eligibleForMultiMonthPlans: Z,
                    referralTrialOfferId: V,
                    subscriptionPeriodEnd: z,
                    showTotal: X = !0,
                    customGiftMessage: J,
                    emojiConfetti: q,
                    soundEffect: Q,
                    setCustomGiftMessage: $,
                    setEmojiConfetti: ee,
                    setSoundEffect: et,
                    discountInvoiceItems: en
                } = e, {
                    activeSubscription: es,
                    setSelectedPlanId: er,
                    selectedSkuId: ea,
                    giftRecipient: el,
                    selectedPlan: ei,
                    priceOptions: eu
                } = (0, d.usePaymentContext)(), eo = (0, m.isCustomGiftEnabled)(el);
                R = null != R ? R : ea, l(void 0 !== (N = null != N ? N : es), "should not be undefined");
                let [ec, ed] = (0, i.useStateFromStoresArray)([E.default], () => [null != N ? E.default.get(N.planId) : null, null != v ? E.default.get(v) : null]), e_ = (0, A.usePremiumTrialOffer)(V), ef = null == e_ ? void 0 : e_.subscription_trial, eE = (0, O.usePremiumDiscountOffer)(), eI = null == eE ? void 0 : null === (t = eE.discount) || void 0 === t ? void 0 : t.plan_ids, em = null != ed ? ed : ei, eP = r.useCallback(e => {
                    null != x ? x(e) : er(e)
                }, [x, er]), eN = null != W ? W : eu;
                l(null != eN, "Price option has to be set");
                let eS = null != e_ && (0, G.SubscriptionTrials)[e_.trial_id].skus.includes(R),
                    eT = null != eE && K.some(e => null == eI ? void 0 : eI.includes(e)),
                    ep = (0, S.getPrice)(G.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, k, eN);
                r.useEffect(() => {
                    Z && p.default.trackExposure({
                        location: "5f89bb_1"
                    })
                }, [Z]);
                let eR = (null == em ? void 0 : em.id) != null && K.includes(em.id);
                r.useEffect(() => {
                    if (!eR) {
                        if (null == ec || k) eP(K[0]);
                        else if (null != ec) {
                            let e = K.find(e => e !== ec.id);
                            null != e && eP(e)
                        }
                    }
                }, [eR, k, K, ec, eP]);
                let eC = !eo && (k || !eS && !eT) && eR && X,
                    eO = (0, u.useRadioGroup)(),
                    eA = (null == em ? void 0 : em.id) != null ? (0, S.getPrice)(em.id, !1, k, eN) : void 0,
                    {
                        ipCountryCode: eM
                    } = (0, C.default)(),
                    eL = "HR" === eM && null != eA && eA.currency === j.CurrencyCodes.EUR,
                    eg = (0, S.isPrepaidPaymentSource)(eN.paymentSourceId),
                    ey = (null == ef ? void 0 : ef.interval) === G.SubscriptionIntervalTypes.DAY ? B.default.Messages.BILLING_TRIAL_2_WEEK_PERIOD : B.default.Messages.BILLING_TRIAL_30_DAY_PERIOD,
                    eh = !k && (eT || null != ef && eS && null != z),
                    ev = null == en ? void 0 : null === (_ = en.find(e => e.subscriptionPlanId === G.SubscriptionPlans.PREMIUM_MONTH_TIER_2)) || void 0 === _ ? void 0 : null === (a = _.discounts) || void 0 === a ? void 0 : null === (n = a.find(e => e.type === c.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount;
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("div", {
                        className: eo ? F.stepBodyCustomGift : F.stepBody,
                        children: [(0, s.jsxs)("div", {
                            className: eo ? F.bodyColumnMiddle : void 0,
                            children: [(0, s.jsx)(M.default, {
                                fromBoostCancelModal: !1,
                                className: F.legacyPricingNotice
                            }), (H || eo) && null != w && (0, s.jsx)(h.GiftAnimationOptions, {
                                emojiConfetti: q,
                                setEmojiConfetti: ee,
                                setSoundEffect: et,
                                soundEffect: Q,
                                selectedGiftStyle: w,
                                setSelectedGiftStyle: Y
                            })]
                        }), (0, s.jsxs)("div", {
                            className: eo ? F.bodyColumnRight : void 0,
                            children: [eo && (0, s.jsx)(b.SendGiftToUser, {
                                giftRecipient: el
                            }), (() => {
                                if (eo && null != $) return (0, s.jsx)(y.default, {
                                    sectionTitle: B.default.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: e => $(e),
                                    pendingText: J,
                                    currentText: J
                                })
                            })(), null != ec && !k && (0, s.jsx)("div", {
                                className: F.bodyText,
                                children: function(e, t) {
                                    let n = B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                                        s = B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                                        r = (() => {
                                            switch (e.interval) {
                                                case G.SubscriptionIntervalTypes.YEAR:
                                                    return n;
                                                case G.SubscriptionIntervalTypes.MONTH:
                                                default:
                                                    return s
                                            }
                                        })(),
                                        a = e.skuId;
                                    switch (t) {
                                        case G.PremiumSubscriptionSKUs.TIER_0:
                                            switch (a) {
                                                case G.PremiumSubscriptionSKUs.TIER_1:
                                                    return B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                                                case G.PremiumSubscriptionSKUs.TIER_2:
                                                    return B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                                                default:
                                                    return r
                                            }
                                        case G.PremiumSubscriptionSKUs.TIER_1:
                                            switch (a) {
                                                case G.PremiumSubscriptionSKUs.TIER_0:
                                                    return B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                                                case G.PremiumSubscriptionSKUs.TIER_2:
                                                    return B.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                                                default:
                                                    return r
                                            }
                                        case G.PremiumSubscriptionSKUs.TIER_2:
                                            switch (a) {
                                                case G.PremiumSubscriptionSKUs.TIER_0:
                                                case G.PremiumSubscriptionSKUs.TIER_1:
                                                    return B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                                                case G.PremiumSubscriptionSKUs.TIER_2:
                                                    return e.interval === G.SubscriptionIntervalTypes.MONTH ? B.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                                                        numFreeGuildSubscriptions: G.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                                                    }) : r;
                                                default:
                                                    return r
                                            }
                                        default:
                                            return r
                                    }
                                }(ec, R)
                            }), (f = eS, I = eT, eo ? (0, s.jsx)(u.FormTitle, {
                                children: B.default.Messages.GIFT_SUBSCRIPTION_SELECTION
                            }) : eh ? f ? (0, s.jsxs)("div", {
                                children: [(0, s.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: F.trialPlanSelectHeader,
                                    children: B.default.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                                        trialEnd: z,
                                        trialPeriod: ey
                                    })
                                }), (0, s.jsx)("hr", {
                                    className: F.planSelectSeparator
                                })]
                            }) : I && null != ev && null != ep ? (0, s.jsxs)("div", {
                                children: [(0, s.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: F.trialPlanSelectHeader,
                                    children: B.default.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO.format({
                                        discountedPrice: (0, T.formatPrice)(ep.amount - ev, ep.currency),
                                        regularPrice: (0, T.formatPrice)(ep.amount, ep.currency)
                                    })
                                }), (0, s.jsx)("hr", {
                                    className: F.planSelectSeparator
                                })]
                            }) : void 0 : (0, s.jsx)("div", {
                                className: F.selectPlanChooseTitle,
                                children: B.default.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
                            })), (0, s.jsx)("div", {
                                ...eO,
                                children: K.map(e => (0, s.jsx)(U.default, {
                                    planId: e,
                                    isGift: k,
                                    premiumSubscription: k ? null : null != N ? N : null,
                                    selectPlan: eP,
                                    selected: (null == em ? void 0 : em.id) === e,
                                    priceOptions: eN,
                                    shouldShowUpdatedPaymentModal: eh,
                                    isEligibleForDiscount: eT,
                                    discountAmountOff: ev
                                }, e))
                            }), (0, s.jsx)("div", {
                                children: eC && null != em && null != eA ? (0, s.jsxs)("div", {
                                    children: [(0, s.jsx)("div", {
                                        className: F.selectPlanDivider
                                    }), (0, s.jsx)(L.PremiumInvoiceTableTotalRow, {
                                        label: B.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                        value: (0, s.jsx)(g.default, {
                                            price: eA.amount,
                                            currency: eA.currency,
                                            intervalType: k ? null : em.interval,
                                            intervalCount: em.intervalCount,
                                            isPrepaidPaymentSource: eg
                                        }),
                                        className: F.selectPlanTotalRow
                                    })]
                                }) : null
                            }), eL && (0, s.jsx)(o.default, {
                                message: B.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                                    kunaPriceWithCurrency: (0, T.formatPrice)(7.5345 * eA.amount, j.CurrencyCodes.HRK)
                                })
                            }), !k && !eh && X && (0, s.jsx)(o.default, {
                                message: B.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                                    documentationLink: P.default.getArticleURL(D.HelpdeskArticles.LOCALIZED_PRICING)
                                })
                            })]
                        })]
                    })
                })
            }

            function H(e) {
                let {
                    onStepChange: t,
                    selectedPlanId: n,
                    isGift: r,
                    paymentSources: a,
                    onBackClick: l,
                    showBackButton: i,
                    planOptions: o,
                    shouldRenderUpdatedPaymentModal: c = !1,
                    isTrial: _
                } = e, {
                    paymentSources: f,
                    selectedPlan: E
                } = (0, d.usePaymentContext)();
                return a = null != a ? a : f, n = null != n ? n : null == E ? void 0 : E.id, (0, s.jsxs)(s.Fragment, {
                    children: [null != n && o.includes(n) ? (0, s.jsx)(w, {
                        paymentSources: a,
                        onStepChange: t,
                        selectedPlanId: n,
                        isGift: r,
                        shouldRenderUpdatedPaymentModal: c,
                        isTrial: _
                    }) : (0, s.jsx)(u.Button, {
                        disabled: !0,
                        children: B.default.Messages.SELECT
                    }), i ? (0, s.jsx)(v.default, {
                        onClick: l
                    }) : null]
                })
            }

            function w(e) {
                let {
                    onStepChange: t,
                    selectedPlanId: n,
                    isGift: r,
                    paymentSources: a,
                    shouldRenderUpdatedPaymentModal: l,
                    isTrial: o
                } = e, c = (0, i.useStateFromStores)([I.default], () => I.default.getPremiumTypeSubscription()), {
                    hasEntitlements: d
                } = (0, x.useSubscriptionEntitlements)(n, r), E = null != c && null != c.paymentSourceId || Object.keys(a).length > 0 || d && !o;
                var m = l ? B.default.Messages.NEXT : B.default.Messages.SELECT,
                    P = _.Step.ADD_PAYMENT_STEPS;
                return E ? P = _.Step.REVIEW : (0, N.isDesktop)() && function() {
                    let {
                        experiment: e
                    } = R.default.getCurrentConfig({
                        location: "5f89bb_2"
                    });
                    if (e === R.CheckoutV2ChildExperiments.BROWSER_AUTOFILL) {
                        let {
                            enabled: e
                        } = f.default.getCurrentConfig({
                            location: "5f89bb_3"
                        }, {
                            autoTrackExposure: !0
                        });
                        return e
                    }
                    return !1
                }() && (P = _.Step.AWAITING_BROWSER_CHECKOUT, m = B.default.Messages.CONTINUE_IN_BROWSER), (0, s.jsx)(u.Button, {
                    onClick: () => t(P),
                    children: m
                })
            }
        },
        26785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                l = n("627445"),
                i = n.n(l),
                u = n("446674"),
                o = n("669491"),
                c = n("77078"),
                d = n("642906"),
                _ = n("915639"),
                f = n("10514"),
                E = n("659632"),
                I = n("719923"),
                m = n("153160"),
                P = n("646718"),
                N = n("782340"),
                S = n("419063");

            function T(e) {
                let {
                    premiumSubscription: t,
                    planId: n,
                    selectPlan: r,
                    selected: l,
                    isGift: T,
                    priceOptions: p,
                    shouldShowUpdatedPaymentModal: R,
                    isEligibleForDiscount: C,
                    discountAmountOff: O
                } = e, A = (0, u.useStateFromStores)([_.default], () => _.default.locale), M = (0, u.useStateFromStores)([f.default], () => f.default.get(n)), {
                    giftRecipient: L
                } = (0, d.usePaymentContext)(), g = (0, E.isCustomGiftEnabled)(L);
                i(null != M, "Missing subscriptionPlan");
                let y = null != t && t.planId === n,
                    h = y || n === P.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && null != t && [P.SubscriptionPlans.PREMIUM_YEAR_TIER_0, P.SubscriptionPlans.PREMIUM_YEAR_TIER_1].includes(t.planId),
                    v = P.DISCOUNTS[n],
                    x = (0, I.getPrice)(n, !1, T, p),
                    U = (0, I.isPrepaidPaymentSource)(p.paymentSourceId),
                    b = null != v && !R,
                    G = M.interval === P.SubscriptionIntervalTypes.YEAR ? N.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : N.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
                    D = () => null != v && (0, s.jsx)(c.Text, {
                        tag: "span",
                        variant: "eyebrow",
                        color: "always-white",
                        className: S.planOptionDiscount,
                        children: N.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                            discount: (0, m.formatPercent)(A, v / 100)
                        })
                    }),
                    j = () => M.interval === P.SubscriptionIntervalTypes.YEAR && null != t || b && !y ? M.interval === P.SubscriptionIntervalTypes.YEAR && null != t ? (0, s.jsxs)("span", {
                        className: S.planOptionMonthsFree,
                        children: ["(", N.default.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
                    }) : b && !y ? D() : void 0 : null;
                return (0, s.jsxs)(c.Clickable, {
                    role: g ? "menuitem" : "radio",
                    "aria-checked": l,
                    tabIndex: l ? 0 : -1,
                    focusProps: {
                        offset: {
                            left: -4,
                            right: -4,
                            top: 0,
                            bottom: 0
                        }
                    },
                    onClick: h ? void 0 : () => r(n),
                    className: a(S.planOptionClickableContainer, {
                        [S.selectedPlan]: g && l,
                        [S.selectionBox]: g
                    }),
                    children: [(0, s.jsxs)("div", {
                        className: a(S.planOption, {
                            [S.planOptionDisabled]: h
                        }),
                        children: [(0, s.jsxs)("div", {
                            className: S.planOptionClickable,
                            children: [!g && (0, s.jsx)(c.Checkbox, {
                                readOnly: !0,
                                displayOnly: !0,
                                value: l,
                                shape: c.Checkbox.Shapes.ROUND,
                                color: o.default.unsafe_rawColors.BRAND_500.css,
                                type: c.Checkbox.Types.INVERTED,
                                className: S.planOptionCheckbox
                            }), (0, s.jsxs)("div", {
                                children: [(0, s.jsxs)("div", {
                                    className: a(S.planOptionInterval, {
                                        [S.optionSelected]: l || g,
                                        [S.updatedOptionSelected]: R && (l || g)
                                    }),
                                    children: [(0, I.getIntervalString)(M.interval, T, U, M.intervalCount, g), g && j()]
                                }), g && (0, s.jsx)("div", {
                                    className: S.planOneTimeCost,
                                    children: N.default.Messages.ONE_TIME_CHARGE.format({
                                        currencyAmount: (0, m.formatPrice)(x.amount, x.currency)
                                    })
                                })]
                            }), y && (0, s.jsxs)("span", {
                                className: S.planOptionCurrentPlan,
                                children: ["(", N.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
                            }), !g && j()]
                        }), R ? (0, s.jsx)("div", {
                            className: a({
                                [S.optionPriceSelected]: l
                            }),
                            children: N.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                price: (() => {
                                    if (C && null != O) return M.interval === P.SubscriptionIntervalTypes.MONTH ? (0, m.formatPrice)(x.amount - O, x.currency) : (0, m.formatPrice)(x.amount, x.currency);
                                    return (0, m.formatPrice)(0, x.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })()
                            })
                        }) : (0, s.jsx)("div", {
                            className: a({
                                [S.optionSelected]: l || g
                            }),
                            children: (0, m.formatPrice)(x.amount, x.currency)
                        })]
                    }), R && (0, s.jsx)("div", {
                        className: S.planOptionSubtextContainer,
                        children: (0, s.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: l ? "text-normal" : "interactive-normal",
                            className: a(S.planOptionSubtext, {
                                [S.discountPlanOptionSubtext]: C
                            }),
                            children: C && null != O ? M.interval === P.SubscriptionIntervalTypes.MONTH ? N.default.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
                                discountedPrice: (0, m.formatPrice)(x.amount - O, x.currency),
                                regularPrice: (0, m.formatPrice)(x.amount, x.currency)
                            }) : N.default.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
                                percent: v
                            }) : G.format({
                                price: (0, m.formatPrice)(x.amount, x.currency)
                            })
                        })
                    })]
                })
            }
        },
        617223: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SendGiftToUser: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("87657"),
                l = n("158998"),
                i = n("782340"),
                u = n("438269");
            let o = e => {
                let {
                    giftRecipient: t
                } = e;
                return null == t ? null : (0, s.jsxs)("div", {
                    className: u.content,
                    children: [(0, s.jsx)(r.FormTitle, {
                        children: i.default.Messages.FORM_LABEL_SEND_TO
                    }), (0, s.jsxs)("div", {
                        className: u.giftRecipientInfo,
                        children: [(0, s.jsx)(a.default, {
                            user: t,
                            className: u.giftRecipient,
                            size: r.AvatarSizes.SIZE_20
                        }), (0, s.jsx)(r.Heading, {
                            className: u.giftRecipientName,
                            variant: "text-md/normal",
                            children: l.default.getName(t)
                        }), (0, s.jsx)(r.Heading, {
                            className: u.giftRecipientTag,
                            variant: "text-md/normal",
                            children: l.default.getUserTag(t)
                        })]
                    })]
                })
            }
        },
        527866: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var s = n("37983"),
                r = n("884691"),
                a = n("627445"),
                l = n.n(a),
                i = n("976979"),
                u = n("446674"),
                o = n("669491"),
                c = n("77078"),
                d = n("335430"),
                _ = n("703332"),
                f = n("740055"),
                E = n("545876"),
                I = n("736978"),
                m = n("642906"),
                P = n("286350"),
                N = n("102492"),
                S = n("176108"),
                T = n("102985"),
                p = n("160299"),
                R = n("10514"),
                C = n("68238"),
                O = n("659632"),
                A = n("719923"),
                M = n("153160"),
                L = n("210721"),
                g = n("809071"),
                y = n("154889"),
                h = n("883662"),
                v = n("623003"),
                x = n("65324"),
                U = n("570727"),
                b = n("146163"),
                G = n("661128"),
                D = n("617223"),
                j = n("646718"),
                B = n("49111"),
                F = n("843455"),
                k = n("782340"),
                H = n("615689");

            function w(e) {
                var t, n, a;
                let w, Y, {
                        selectedPlanId: W,
                        paymentSources: K,
                        priceOptions: Z,
                        currencies: V,
                        onCurrencyChange: z,
                        isGift: X = !1,
                        onPaymentSourceChange: J,
                        handlePaymentSourceAdd: q,
                        setHasAcceptedTerms: Q,
                        legalTermsNodeRef: $,
                        hasLegalTermsFlash: ee,
                        trialId: et,
                        trialFooterMessageOverride: en,
                        reviewWarningMessage: es,
                        metadata: er,
                        purchaseState: ea,
                        hideSubscriptionDetails: el,
                        referralTrialOfferId: ei,
                        isTrial: eu = !1,
                        isDiscount: eo = !1
                    } = e,
                    {
                        isEmbeddedIAP: ec,
                        activeSubscription: ed,
                        selectedSkuId: e_,
                        defaultPlanId: ef,
                        selectedGiftStyle: eE,
                        setSelectedGiftStyle: eI,
                        isPremium: em,
                        giftRecipient: eP,
                        startedPaymentFlowWithPaymentSourcesRef: eN
                    } = (0, m.usePaymentContext)(),
                    eS = (0, y.usePremiumDiscountOffer)(),
                    eT = null == eS ? void 0 : null === (t = eS.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => j.SubscriptionPlanInfo[e].skuId === e_),
                    ep = !X && null != eS && null != e_ && eT,
                    eR = (0, u.useStateFromStores)([R.default], () => R.default.get(W));
                l(null != eR, "Missing plan");
                let eC = [{
                        planId: eR.id,
                        quantity: 1
                    }],
                    eO = ea === P.PurchaseState.PURCHASING || ea === P.PurchaseState.COMPLETED,
                    eA = X || eO,
                    [eM, eL] = (0, g.useSubscriptionInvoicePreview)({
                        items: eC,
                        renewal: !1,
                        preventFetch: eA,
                        applyEntitlements: !0,
                        paymentSourceId: Z.paymentSourceId,
                        currency: Z.currency,
                        trialId: et,
                        metadata: er
                    }),
                    [eg, ey] = (0, g.useSubscriptionInvoicePreview)({
                        items: eC,
                        renewal: !0,
                        preventFetch: eA,
                        trialId: et,
                        paymentSourceId: Z.paymentSourceId,
                        currency: Z.currency,
                        metadata: er
                    }),
                    [eh, ev] = (0, g.useSubscriptionInvoicePreview)({
                        items: [{
                            planId: j.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
                            quantity: 1
                        }],
                        renewal: !0,
                        preventFetch: !ep,
                        trialId: et,
                        paymentSourceId: Z.paymentSourceId,
                        currency: Z.currency,
                        metadata: er
                    }),
                    ex = (0, O.isCustomGiftEnabled)(eP),
                    eU = null !== (a = null != eL ? eL : ey) && void 0 !== a ? a : ev,
                    eb = (0, u.useStateFromStores)([T.default], () => T.default.enabled),
                    eG = Z.paymentSourceId,
                    {
                        hasEntitlements: eD,
                        entitlements: ej
                    } = (0, G.useSubscriptionEntitlements)(eR.id, X),
                    eB = (0, A.isPrepaidPaymentSource)(Z.paymentSourceId),
                    eF = (0, N.checkNoPaymentTrialEnabled)(et, eG, W),
                    ek = (0, S.inOneStepSubscriptionCheckout)({
                        isTrial: eu,
                        isGift: X,
                        selectedSkuId: e_,
                        startedPaymentFlowWithPaymentSources: eN.current
                    }),
                    [eH, ew] = r.useState(null == eM ? void 0 : eM.subscriptionPeriodEnd);
                r.useEffect(() => {
                    if (null == eH) ew(null == eM ? void 0 : eM.subscriptionPeriodEnd)
                }, [null == eM ? void 0 : eM.subscriptionPeriodEnd, eH]);
                let eY = r.useMemo(() => (0, A.getPremiumPlanOptions)({
                        skuId: e_,
                        isPremium: em,
                        multiMonthPlans: [],
                        currentSubscription: ed,
                        isGift: X,
                        isEligibleForTrial: eu,
                        defaultPlanId: ef,
                        defaultToMonthlyPlan: !1
                    }), [e_, ed, X, ef, em, eu]),
                    eW = (0, S.planSwitchLoadingShowSpinner)(ek, eM, eR);
                if (null != eU) {
                    let e = eU.message;
                    return eU.code === I.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = k.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), (0, s.jsx)(c.FormErrorBlock, {
                        children: e
                    })
                }
                if (X) Y = (0, s.jsx)(b.SubscriptionInvoiceGift, {
                    paymentSourceId: Z.paymentSourceId,
                    plan: eR,
                    className: H.invoice,
                    isPrepaidPaymentSource: eB,
                    isCustomGift: ex
                });
                else if (eu && null != eM) Y = (0, s.jsxs)("div", {
                    children: [(0, s.jsx)(h.PremiumInvoiceTableDivider, {
                        negativeMarginTop: !0
                    }), (0, s.jsxs)(h.PremiumInvoiceTable, {
                        className: H.invoice,
                        children: [(0, s.jsxs)("div", {
                            className: H.trialPriceLine,
                            children: [(0, s.jsx)(c.Text, {
                                variant: "text-md/bold",
                                children: k.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                            }), (0, s.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: k.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                    price: (0, M.formatPrice)(0, eM.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: H.afterTrialPriceLine,
                            children: (0, s.jsx)(b.PremiumTrialInvoiceTableRow, {
                                invoice: eM,
                                plan: eR
                            })
                        })]
                    })]
                });
                else {
                    if (null == eM || null == eg || eW) return (0, s.jsx)("div", {
                        className: H.spinnerWrapper,
                        children: (0, s.jsx)(c.Spinner, {})
                    });
                    eu && eM.subscriptionPeriodEnd !== eg.subscriptionPeriodEnd && (w = eM.subscriptionPeriodEnd), Y = (0, s.jsxs)(h.PremiumInvoiceTable, {
                        className: H.invoice,
                        children: [(0, s.jsx)(h.PremiumInvoiceTableHeader, {
                            children: k.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, s.jsx)(b.PremiumSubscriptionChangePlanInvoiceRows, {
                            invoice: eM,
                            newPlan: eR,
                            isPrepaidPaymentSource: eB,
                            referralTrialOfferId: ei
                        }), eB ? null : (0, s.jsx)(b.SubscriptionInvoiceFooter, {
                            renewalInvoice: eg,
                            isTrial: eu,
                            priceOptions: Z,
                            overrideRenewalDate: w,
                            trialFooterMessageOverride: en,
                            hideSubscriptionDetails: el
                        })]
                    })
                }
                let eK = i.CountryCodesSets.EEA_COUNTRIES.has(p.default.ipCountryCodeWithFallback),
                    {
                        checkboxLabel: eZ,
                        checkboxClassname: eV,
                        checkboxLabelClassname: ez
                    } = function(e, t, n) {
                        let s = null,
                            r = null,
                            a = null;
                        if (e && null != t) {
                            let {
                                intervalType: e,
                                intervalCount: l
                            } = A.default.getIntervalForInvoice(t), i = (0, M.formatRate)((0, M.formatPrice)(t.total, t.currency), e, l), u = null != n ? n : t.subscriptionPeriodEnd;
                            s = k.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                                termsURL: B.MarketingURLs.TERMS,
                                paidURL: B.MarketingURLs.PAID_TERMS,
                                rate: i,
                                renewalDate: u
                            }), r = H.trialCheckbox, a = H.trialCheckboxLabel
                        }
                        return {
                            checkboxLabel: s,
                            checkboxClassname: r,
                            checkboxLabelClassname: a
                        }
                    }(null != eu && eu, eg, w),
                    eX = k.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                        planName: eR.name
                    });
                return X && !ex ? eX = k.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : X && ex ? eX = "" : (0, A.isPremiumSubscriptionPlan)(eR.id) && (eX = A.default.getBillingReviewSubheader(null, eR)), eF ? null : (0, s.jsxs)("div", {
                    className: H.stepBody,
                    children: [null != es && (0, s.jsxs)("div", {
                        className: H.reviewWarningMessageContainer,
                        children: [(0, s.jsx)(C.default, {
                            color: o.default.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20
                        }), (0, s.jsx)(c.Text, {
                            className: H.reviewWarningMessage,
                            variant: "text-sm/normal",
                            children: es
                        })]
                    }), ek && (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(h.PremiumInvoiceTableDivider, {
                            negativeMarginTop: !0
                        }), (0, s.jsx)(U.PremiumSwitchPlanSelectBody, {
                            isGift: X,
                            selectedGiftStyle: eE,
                            setSelectedGiftStyle: eI,
                            planOptions: eY,
                            eligibleForMultiMonthPlans: !1,
                            isSeasonalGift: !1,
                            referralTrialOfferId: void 0,
                            selectedPlanId: W,
                            subscriptionPeriodEnd: eH,
                            showTotal: !1,
                            discountInvoiceItems: ep ? null == eh ? void 0 : eh.invoiceItems : void 0
                        }), (0, s.jsx)(h.PremiumInvoiceTableDivider, {})]
                    }), !eu && (0, s.jsx)(c.FormTitle, {
                        tag: c.FormTitleTags.H5,
                        children: eX
                    }), ex && null != eE && (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(x.default, {
                            defaultAnimationState: L.AnimationState.LOOP,
                            giftStyle: eE,
                            shouldAnimate: !0,
                            className: H.giftMainAnimation
                        }), (0, s.jsx)(D.SendGiftToUser, {
                            giftRecipient: eP
                        })]
                    }), Y, (0, s.jsxs)("div", {
                        className: H.paymentSourceWrapper,
                        children: [eu ? (0, s.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            className: H.formTitle,
                            children: k.default.Messages.BILLING_STEP_PAYMENT_METHOD
                        }) : (0, s.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            children: k.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, s.jsx)(f.default, {
                            paymentSources: Object.values(K),
                            selectedPaymentSourceId: eG,
                            prependOption: eD && !eu ? {
                                label: k.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                value: null
                            } : null,
                            onChange: J,
                            onPaymentSourceAdd: q,
                            hidePersonalInformation: eb,
                            isTrial: eu
                        }), eD && null == eG ? (0, s.jsx)("div", {
                            className: H.paymentSourceOptionalWarning,
                            children: k.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
                                months: ej.length
                            })
                        }) : null, eo ? null : (0, s.jsxs)(d.CurrencyWrapper, {
                            currencies: V,
                            className: H.currencyWrapper,
                            children: [(0, s.jsx)(c.FormTitle, {
                                tag: c.FormTitleTags.H5,
                                children: k.default.Messages.PAYMENT_CURRENCY
                            }), (0, s.jsx)(d.default, {
                                selectedCurrency: Z.currency,
                                currencies: V,
                                onChange: z
                            })]
                        })]
                    }), (0, s.jsx)(v.default, {
                        isActive: ee,
                        ref: $,
                        children: (0, s.jsx)(E.default, {
                            onChange: Q,
                            forceShow: !0,
                            checkboxLabel: eZ,
                            checkboxClassname: eV,
                            checkboxLabelClassname: ez,
                            finePrint: (0, s.jsx)(_.default, {
                                hide: eu || eo,
                                subscriptionPlan: eR,
                                renewalInvoice: eg,
                                isGift: X,
                                paymentSourceType: null === (n = K[null != eG ? eG : ""]) || void 0 === n ? void 0 : n.type,
                                isEmbeddedIAP: ec,
                                basePrice: (0, A.getPrice)(eR.id, !1, X, Z)
                            }),
                            showPricingLink: eR.currency !== F.CurrencyCodes.USD,
                            showWithdrawalWaiver: eK,
                            disabled: eO,
                            isTrial: eu,
                            isDiscount: eo,
                            subscriptionPlan: eR,
                            isGift: X
                        })
                    })]
                })
            }
        },
        451516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var s = n("37983"),
                r = n("884691"),
                a = n("627445"),
                l = n.n(a),
                i = n("446674"),
                u = n("77078"),
                o = n("850068"),
                c = n("685665"),
                d = n("642906"),
                _ = n("605886"),
                f = n("286350"),
                E = n("376641"),
                I = n("102492"),
                m = n("926223"),
                P = n("467292"),
                N = n("622839"),
                S = n("145131"),
                T = n("599110"),
                p = n("719923"),
                R = n("921149"),
                C = n("177998"),
                O = n("661128"),
                A = n("868869"),
                M = n("49111"),
                L = n("717913");

            function g(e) {
                var t;
                let {
                    premiumSubscription: n,
                    setPurchaseState: a,
                    onBack: g,
                    onNext: y,
                    legalTermsNodeRef: h,
                    flashLegalTerms: v,
                    invoiceError: x,
                    planError: U,
                    onPurchaseError: b,
                    baseAnalyticsData: G,
                    flowStartTime: D,
                    isGift: j = !1,
                    giftStyle: B,
                    customGiftMessage: F,
                    emojiConfetti: k,
                    soundEffect: H,
                    trialId: w,
                    planGroup: Y,
                    analyticsLocation: W,
                    purchaseTokenAuthState: K,
                    openInvoiceId: Z,
                    metadata: V,
                    backButtonEligible: z,
                    disablePurchase: X,
                    isTrial: J = !1
                } = e, {
                    selectedPlan: q,
                    priceOptions: Q,
                    setHasAcceptedTerms: $,
                    setPurchaseError: ee,
                    purchaseType: et,
                    paymentSourceId: en,
                    paymentSources: es,
                    selectedSkuId: er,
                    skusById: ea,
                    skuPricePreviewsById: el,
                    referralCode: ei,
                    contextMetadata: eu,
                    giftRecipient: eo
                } = (0, d.usePaymentContext)(), ec = null == q ? void 0 : q.id, ed = (0, I.checkNoPaymentTrialEnabled)(w, Q.paymentSourceId, ec), e_ = (0, i.useStateFromStores)([m.default], () => m.default.popupCallbackCalled), {
                    analyticsLocations: ef
                } = (0, c.default)(), eE = null != en ? es[en] : null, [eI, em] = r.useState(ed), [eP, eN] = r.useState(!1), {
                    hasEntitlements: eS
                } = (0, O.useSubscriptionEntitlements)(ec, j), eT = (0, p.isPrepaidPaymentSource)(Q.paymentSourceId), ep = eS || ed, eR = (0, R.useIsPrepaidPaymentPastDue)(), eC = null, eO = null;
                if (et === M.PurchaseTypes.ONE_TIME) {
                    l(null != er, "SKU must be selected for one-time purchases"), l(null != (eC = null !== (t = ea[er]) && void 0 !== t ? t : null), "SKU must exist and be fetched.");
                    let e = el[er],
                        n = null != en ? en : N.NO_PAYMENT_SOURCE;
                    eO = null != e ? e[n] : null
                }
                let eA = async () => {
                    await (0, _.purchaseProduct)({
                        setPurchaseState: a,
                        setHasAcceptedTerms: $,
                        setIsSubmitting: em,
                        setPurchaseError: ee,
                        hasRedirectURL: eP,
                        setHasRedirectURL: eN,
                        isGift: j,
                        giftStyle: B,
                        baseAnalyticsData: G,
                        analyticsLocation: W,
                        analyticsLocations: ef,
                        flowStartTime: D,
                        subscriptionPlan: q,
                        planGroup: Y,
                        trialId: w,
                        priceOptions: Q,
                        paymentSource: eE,
                        isPrepaidPaymentPastDue: eR,
                        openInvoiceId: Z,
                        premiumSubscription: n,
                        onNext: y,
                        metadata: V,
                        sku: eC,
                        skuPricePreview: eO,
                        purchaseType: et,
                        referralCode: ei,
                        loadId: eu.loadId,
                        giftRecipient: eo,
                        customMessage: F,
                        emojiConfetti: k,
                        soundEffect: H
                    })
                };
                r.useEffect(() => {
                    let e = async () => {
                        if (!0 === e_) try {
                            if (null == m.default.redirectedPaymentId) return;
                            await (0, o.redirectedPaymentSucceeded)(m.default.redirectedPaymentId), T.default.track(M.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
                                ...G,
                                duration_ms: Date.now() - D,
                                payment_source_type: null == eE ? void 0 : eE.type
                            }), a(f.PurchaseState.COMPLETED), y()
                        } catch (e) {
                            a(f.PurchaseState.FAIL), b(e), T.default.track(M.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                                ...G,
                                payment_source_id: en,
                                payment_source_type: null == eE ? void 0 : eE.type,
                                duration_ms: Date.now() - D
                            })
                        } finally {
                            em(!1), (0, o.resetPaymentIntentId)()
                        } else K === P.PurchaseTokenAuthState.SUCCESS && await eA()
                    };
                    e()
                }, [e_]), r.useEffect(() => {
                    ed && !j && null == n && eA()
                }, [ed, j, n]);
                let eM = null != Z || et === M.PurchaseTypes.ONE_TIME;
                return ed ? null : (0, s.jsxs)(u.ModalFooter, {
                    align: S.default.Align.CENTER,
                    children: [(0, s.jsx)(A.default, {
                        legalTermsNodeRef: h,
                        invoiceError: x,
                        planError: U,
                        disablePurchase: X,
                        flashLegalTerms: v,
                        isSubmitting: eI,
                        premiumSubscription: n,
                        isGift: j,
                        planGroup: Y,
                        isPrepaid: eT,
                        isTrial: J,
                        makePurchase: eA,
                        needsPaymentSource: null == eE && !ep
                    }), (0, s.jsx)(E.default, {}), z && !eM ? (0, s.jsx)("div", {
                        className: L.back,
                        children: (0, s.jsx)(C.default, {
                            onClick: g
                        })
                    }) : null]
                })
            }
        },
        891653: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                l = n("77078"),
                i = n("216422"),
                u = n("782340"),
                o = n("881609");

            function c(e) {
                let {
                    text: t = u.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    className: n
                } = e;
                return (0, s.jsx)(l.Tooltip, {
                    text: t,
                    children: e => (0, s.jsx)(l.Clickable, {
                        ...e,
                        children: (0, s.jsx)(i.default, {
                            className: a(o.nitroWheel, n)
                        })
                    })
                })
            }
        },
        570697: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                l = n("65597"),
                i = n("77078"),
                u = n("70723"),
                o = n("254490"),
                c = n("891653"),
                d = n("632892"),
                _ = n("646718"),
                f = n("326908");

            function E(e) {
                let {
                    errors: t
                } = e;
                return (0, s.jsx)(s.Fragment, {
                    children: t.map((e, t) => (0, s.jsx)(i.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        className: f.errorMessage,
                        children: e.replace(/[0-9.,]+ ?kb/g, e => {
                            let t = 1024 * parseInt(e, 10);
                            return isNaN(t) ? e : (0, o.sizeString)(t)
                        })
                    }, t))
                })
            }

            function I(e) {
                let {
                    title: t,
                    titleIcon: n,
                    titleId: r,
                    description: o,
                    children: I,
                    className: m,
                    errors: P,
                    disabled: N = !1,
                    hideDivider: S = !1,
                    showBorder: T = !1,
                    borderType: p,
                    hasBackground: R = !1,
                    forcedDivider: C = !1,
                    showPremiumIcon: O = !1
                } = e, A = (0, l.default)([u.default], () => {
                    let e = u.default.activeSubstep;
                    return null != e && _.PremiumTutorialSubstepsToStepMap[e] === _.PremiumTutorialSteps.PROFILE_CUSTOMIZATION
                });
                return (0, s.jsx)("div", {
                    className: a(f.customizationSection, m, {
                        [f.disabled]: N,
                        [f.hideDivider]: S,
                        [f.showBorder]: T,
                        [f.withDivider]: C
                    }),
                    children: (0, s.jsxs)(d.default, {
                        className: f.customizationSectionBorder,
                        backgroundClassName: f.customizationSectionBackground,
                        isShown: T && !A,
                        type: p,
                        hasBackground: R,
                        children: [(0, s.jsxs)(i.FormTitle, {
                            className: f.title,
                            id: r,
                            children: [t, O && (0, s.jsx)(c.default, {}), n]
                        }), null != o ? (0, s.jsx)(i.FormText, {
                            type: i.FormText.Types.DESCRIPTION,
                            className: f.sectionDescription,
                            children: o
                        }) : null, I, null != P && (0, s.jsx)(E, {
                            errors: P
                        })]
                    })
                })
            }
        },
        632892: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FeatureBorderTypes: function() {
                    return r
                },
                default: function() {
                    return d
                }
            });
            var s, r, a = n("37983"),
                l = n("884691"),
                i = n("414456"),
                u = n.n(i),
                o = n("623682");
            (s = r || (r = {})).PREMIUM = "premium", s.LIMITED = "limited";
            let c = {
                [r.PREMIUM]: {
                    border: o.premiumFeatureBorder,
                    background: o.premiumBackground
                },
                [r.LIMITED]: {
                    border: o.limitedFeatureBorder,
                    background: o.limitedBackground
                }
            };
            var d = l.forwardRef(function(e, t) {
                let {
                    children: n,
                    type: s = r.PREMIUM,
                    isShown: l,
                    hasBackground: i = !1,
                    className: d,
                    backgroundClassName: _
                } = e;
                if (!l) return (0, a.jsx)(a.Fragment, {
                    children: n
                });
                let {
                    border: f,
                    background: E
                } = c[s];
                return (0, a.jsx)("div", {
                    ref: t,
                    className: u(f, d),
                    children: (0, a.jsx)("div", {
                        className: u(i ? E : o.background, _),
                        children: n
                    })
                })
            })
        },
        742926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var s = n("37983"),
                r = n("884691"),
                a = n("292915"),
                l = n("77078"),
                i = n("389480"),
                u = n("191191"),
                o = n("782340"),
                c = n("895576");
            let d = [54, 8, 8, 8];

            function _(e) {
                let {
                    onSelect: t,
                    sound: n
                } = e, [_, f] = r.useState(!1);

                function E(e) {
                    f(!1), null == t || t(e)
                }
                let I = e => (0, s.jsxs)("div", {
                    className: c.customGiftHeader,
                    children: [(0, s.jsxs)("div", {
                        className: c.customGiftHeaderText,
                        children: [(0, s.jsx)(l.Text, {
                            variant: "text-md/bold",
                            children: o.default.Messages.GIFT_SELECT_SOUND
                        }), (0, s.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: o.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
                        })]
                    }), (0, s.jsx)("div", {
                        className: c.searchAndSound,
                        children: e
                    })]
                });
                return (0, s.jsx)(l.Popout, {
                    shouldShow: _,
                    position: "left",
                    onRequestClose: () => f(!1),
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, s.jsx)(l.Dialog, {
                            children: (0, s.jsx)(u.default, {
                                suppressPlaySound: !0,
                                shouldShowUpsell: !1,
                                guildId: null,
                                channel: null,
                                onClose: t,
                                onSelect: E,
                                analyticsSource: "gift soundboard",
                                soundButtonOverlay: i.SoundButtonOverlay.ADD,
                                listPadding: d,
                                renderHeader: I,
                                defaultSoundsOnly: !0
                            })
                        })
                    },
                    children: () => (0, s.jsx)(l.Clickable, {
                        className: c.sound,
                        onClick: () => f(!0),
                        children: null == n ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(a.SoundboardIcon, {
                                className: c.soundIcon,
                                width: 14,
                                height: 14
                            }), (0, s.jsx)(l.Text, {
                                className: c.text,
                                variant: "text-sm/semibold",
                                children: o.default.Messages.GIFT_SELECT_SOUND
                            })]
                        }) : (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(l.Text, {
                                className: c.textSelected,
                                variant: "text-sm/semibold",
                                children: n.emojiName
                            }), (0, s.jsx)(l.Text, {
                                className: c.text,
                                variant: "text-sm/semibold",
                                children: n.name
                            })]
                        })
                    })
                })
            }

            function f(e) {
                let {
                    sound: t,
                    onSelect: n
                } = e;
                return (0, s.jsx)("div", {
                    className: c.container,
                    children: (0, s.jsx)(_, {
                        onSelect: n,
                        sound: t
                    })
                })
            }
        },
        575209: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getCurrencyFullName: function() {
                    return r
                }
            });
            var s = n("782340");

            function r(e) {
                switch (e) {
                    case "brl":
                        return s.default.Messages.BRL_NAME;
                    case "pln":
                        return s.default.Messages.PLN_NAME;
                    case "try":
                        return s.default.Messages.TRY_NAME;
                    case "usd":
                        return s.default.Messages.USD_NAME;
                    case "aud":
                        return s.default.Messages.AUD_NAME;
                    case "pen":
                        return s.default.Messages.PEN_NAME;
                    case "php":
                        return s.default.Messages.PHP_NAME;
                    case "ars":
                        return s.default.Messages.ARS_NAME;
                    case "cop":
                        return s.default.Messages.COP_NAME;
                    case "clr":
                        return s.default.Messages.CLR_NAME;
                    case "jpy":
                        return s.default.Messages.JPY_NAME;
                    case "idr":
                        return s.default.Messages.IDR_NAME;
                    case "vnd":
                        return s.default.Messages.VND_NAME;
                    case "thb":
                        return s.default.Messages.THB_NAME;
                    case "myr":
                        return s.default.Messages.MYR_NAME;
                    case "krw":
                        return s.default.Messages.KRW_NAME;
                    case "mxn":
                        return s.default.Messages.MXN_NAME;
                    case "bgn":
                        return s.default.Messages.BGN_NAME;
                    case "czk":
                        return s.default.Messages.CZK_NAME;
                    case "dkk":
                        return s.default.Messages.DKK_NAME;
                    case "huf":
                        return s.default.Messages.HUF_NAME;
                    case "ron":
                        return s.default.Messages.RON_NAME;
                    case "sek":
                        return s.default.Messages.SEK_NAME;
                    case "eur":
                        return s.default.Messages.EUR_NAME;
                    default:
                        return ""
                }
            }
        }
    }
]);