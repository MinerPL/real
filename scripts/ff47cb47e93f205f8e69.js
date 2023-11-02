(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["14015"], {
        32974: function(e, t, n) {
            "use strict";
            e.exports = n.p + "72b9b5356f57edb2ba51.svg"
        },
        101017: function(e, t, n) {
            "use strict";
            e.exports = n.p + "76db37e93ca50f3fa98b.svg"
        },
        65757: function(e, t, n) {
            "use strict";
            e.exports = n.p + "829f8ef7dcf355fbe141.svg"
        },
        513002: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f328a6f8209d4f1f5022.png"
        },
        251472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserEntitlementsForApplication: function() {
                    return a
                },
                fetchUserEntitlements: function() {
                    return o
                },
                fetchGiftableEntitlements: function() {
                    return u
                }
            });
            var i = n("872717"),
                s = n("913144"),
                r = n("271560"),
                l = n("49111");

            function a(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return s.default.wait(() => {
                    s.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), i.default.get({
                    url: l.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
                    oldFormErrors: !0,
                    query: {
                        exclude_consumed: t
                    }
                }).then(t => (s.default.dispatch({
                    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                    applicationId: e,
                    entitlements: t.body
                }), t.body)).catch(() => {
                    s.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                        applicationId: e
                    })
                })
            }
            async function o(e) {
                let {
                    withSku: t = !1,
                    withApplication: n = !1,
                    entitlementType: r
                } = e;
                s.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let e = await i.default.get({
                        url: l.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: t,
                            with_application: n,
                            entitlement_type: r
                        }
                    });
                    s.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    s.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
                    })
                }
            }
            async function u() {
                s.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let e = await (0, r.httpGetWithCountryCodeQuery)({
                        url: l.Endpoints.ENTITLEMENTS_GIFTABLE
                    });
                    s.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    s.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
                    })
                }
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return s
                },
                updateCardInfo: function() {
                    return r
                },
                clearCardInfo: function() {
                    return l
                },
                updateAddressInfo: function() {
                    return a
                },
                clearError: function() {
                    return o
                }
            });
            var i = n("913144");

            function s(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function r(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function l() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function a(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
                i.default.wait(() => i.default.dispatch({
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
            var i = n("913144");

            function s() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return r
                }
            });
            var i = n("884691"),
                s = n("599110");
            let r = () => i.useContext(s.AnalyticsContext)
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691");

            function s(e) {
                let [t, n] = (0, i.useState)(!1), s = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    s.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = s.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [s]), t
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("704744");
            var i = n("913144");
            class s {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        871388: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("49111");

            function s(e, t) {
                return t !== i.ActivityFlags.INSTANCE && null != e && null != e.flags && !!(e.flags & t)
            }
        },
        152311: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("871388"),
                s = n("49111");

            function r(e) {
                return (0, i.default)(e, s.ActivityFlags.EMBEDDED)
            }
        },
        337026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-03_apps_in_gdms",
                label: "Apps in GDMs",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show apps in gdm",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        201155: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShowApplicationInGDM: function() {
                    return l
                }
            });
            var i = n("65597"),
                s = n("42203"),
                r = n("337026");

            function l(e) {
                let t = (0, i.default)([s.default], () => s.default.getChannel(e)),
                    {
                        enabled: n
                    } = r.default.useExperiment({
                        location: "baec9c_1"
                    });
                return n && function(e) {
                    return null != e && (!!e.isMultiUserDM() || !!e.isDM() && !e.isSystemDM() && null == e.rawRecipients.find(e => e.bot))
                }(t)
            }
        },
        619935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useBlockedPaymentsConfig: function() {
                    return a
                },
                default: function() {
                    return o
                }
            });
            var i = n("862205"),
                s = n("15733");
            let r = (0, i.createExperiment)({
                    kind: "user",
                    id: "2022-03_block_russian_purchases",
                    label: "Block purchases based on country",
                    defaultConfig: {
                        paymentsBlocked: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Payments Blocked",
                        config: {
                            paymentsBlocked: !0
                        }
                    }]
                }),
                l = (0, i.createExperiment)({
                    kind: "user",
                    id: "2022-03_block_russian_purchases_desktop",
                    label: "Block purchases based on country (desktop specific flags)",
                    defaultConfig: {
                        checkPaymentSource: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Check Payment Source",
                        config: {
                            checkPaymentSource: !0
                        }
                    }]
                });

            function a() {
                let {
                    paymentsBlocked: e
                } = r.useExperiment({
                    location: "c519a9_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    checkPaymentSource: t
                } = l.useExperiment({
                    location: "c519a9_2"
                }, {
                    autoTrackExposure: !1
                }), {
                    defaultBillingCountryCode: n
                } = (0, s.default)();
                return e || t && "RU" === n
            }
            var o = r
        },
        805172: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("862205");
            let s = (0, i.createExperiment)({
                kind: "user",
                id: "2023-10_collectibles_shop_for_all",
                label: "Collectibles Shop For All",
                defaultConfig: {
                    shopForAllEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enables Collectibles Shop For All",
                    config: {
                        shopForAllEnabled: !0
                    }
                }]
            });
            var r = e => {
                let {
                    location: t,
                    autoTrackExposure: n = !0,
                    trackExposureOptions: i = {}
                } = e;
                return s.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: n,
                    trackExposureOptions: i
                })
            }
        },
        161009: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691"),
                s = n("446674"),
                r = n("189293"),
                l = n("845962"),
                a = n("235898");

            function o() {
                let {
                    isFetching: e,
                    error: t,
                    categories: n,
                    purchases: o
                } = (0, a.default)(), [u, c, d] = (0, s.useStateFromStoresArray)([l.default], () => [l.default.isFetching, l.default.fetchError, l.default.profileEffects]);
                return (0, i.useEffect)(() => {
                    (0, r.fetchUserProfileEffects)()
                }, []), {
                    isFetching: e || u,
                    error: null != t ? t : c,
                    profileEffects: d,
                    categories: n,
                    purchases: o
                }
            }
        },
        235898: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("884691"),
                s = n("65597"),
                r = n("875212"),
                l = n("21526"),
                a = n("853987"),
                o = n("563775"),
                u = n("775416");

            function c() {
                var e;
                let t = "useFetchCollectiblesCategoriesAndPurchases";
                (0, r.useTriggerDebuggingAA)({
                    location: t + " auto on",
                    autoTrackExposure: !0
                }), (0, r.useTriggerDebuggingAA)({
                    location: t + " auto off",
                    autoTrackExposure: !1
                }), (0, o.default)({
                    location: t
                });
                let {
                    isFetching: n,
                    categories: c,
                    error: d
                } = function() {
                    var e;
                    let t = "useMaybeFetchCollectiblesCategories";
                    (0, r.useTriggerDebuggingAA)({
                        location: t + " auto on",
                        autoTrackExposure: !0
                    }), (0, r.useTriggerDebuggingAA)({
                        location: t + " auto off",
                        autoTrackExposure: !1
                    }), (0, o.default)({
                        location: t
                    });
                    let [n, u, c, d] = (0, s.useStateFromStoresArray)([a.default], () => [a.default.isFetching, a.default.error, null !== (e = a.default.lastFetched) && void 0 !== e ? e : 0, a.default.categories]);
                    return (0, i.useEffect)(() => {
                        !(n || u || Date.now() - c < 6e5) && (0, l.fetchCollectiblesCategories)()
                    }, [n, c, u]), {
                        isFetching: n,
                        categories: d,
                        error: u
                    }
                }(), {
                    isClaiming: f,
                    fetchError: E,
                    claimError: p,
                    isFetching: h,
                    purchases: _
                } = function() {
                    let e = "useFetchPurchases";
                    (0, r.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, r.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    }), (0, o.default)({
                        location: e
                    });
                    let [t, n, a, c, d] = (0, s.useStateFromStoresArray)([u.default], () => [u.default.isFetching, u.default.isClaiming, u.default.fetchError, u.default.claimError, u.default.purchases]);
                    return (0, i.useEffect)(() => {
                        (0, l.fetchCollectiblesPurchases)()
                    }, []), {
                        isClaiming: n,
                        fetchError: a,
                        claimError: c,
                        isFetching: t,
                        purchases: d
                    }
                }(), S = null !== (e = null != d ? d : E) && void 0 !== e ? e : p;
                return {
                    isFetching: n || h,
                    isFetchingCategories: n,
                    isFetchingPurchases: h,
                    isClaiming: f,
                    categories: c,
                    purchases: _,
                    error: S
                }
            }
        },
        20606: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = n("171210").default
        },
        608684: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImageUploaderIcon: function() {
                    return h
                },
                default: function() {
                    return S
                }
            });
            var i = n("37983"),
                s = n("884691"),
                r = n("414456"),
                l = n.n(r),
                a = n("627445"),
                o = n.n(a),
                u = n("77078"),
                c = n("159885"),
                d = n("694187"),
                f = n("49111"),
                E = n("782340"),
                p = n("911686");

            function h(e) {
                let {
                    className: t,
                    icon: n = null
                } = e;
                return (0, i.jsx)("div", {
                    className: l(p.imageUploaderIcon, t),
                    children: n
                })
            }
            class _ extends s.PureComponent {
                handleExternalFileChange(e) {
                    o(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let t, n, s, r;
                    let {
                        image: a,
                        hint: o,
                        name: _,
                        makeURL: S,
                        disabled: m,
                        onChange: I,
                        showIcon: T,
                        showIconDisabled: C,
                        className: g,
                        imageClassName: A,
                        iconClassName: P,
                        iconWrapperClassName: N,
                        icon: L,
                        hideSize: v,
                        imageStyle: F,
                        showRemoveButton: O,
                        maxFileSizeBytes: R,
                        onFileSizeError: U,
                        onOpenImageSelectModal: b,
                        "aria-label": y
                    } = this.props;
                    if (null != (t = null != a && /^data:/.test(a) ? a : S(a)) ? n = 'url("'.concat(t, '")') : null != _ && (s = (0, i.jsx)("div", {
                            className: p.imageUploaderAcronym,
                            children: (0, c.getAcronym)(_)
                        })), m) return (0, i.jsx)("div", {
                        className: l(p.imageUploader, p.disabled, g),
                        children: (0, i.jsxs)("div", {
                            className: l(p.imageUploaderInner, A),
                            style: {
                                ...F,
                                backgroundImage: n
                            },
                            children: [s, C && (0, i.jsx)("div", {
                                className: l(p.imageUploaderIcon, p.imageUploaderIconDisabled, P),
                                children: L
                            })]
                        })
                    });
                    null != a ? r = (0, i.jsx)(u.Anchor, {
                        className: p.removeButton,
                        onClick: this.handleRemove,
                        children: E.default.Messages.REMOVE
                    }) : !v && (r = (0, i.jsx)("small", {
                        className: p.sizeInfo,
                        children: E.default.Messages.MINIMUM_SIZE.format({
                            size: f.AVATAR_SIZE
                        })
                    }));
                    let M = null !== (e = null != y ? y : o) && void 0 !== e ? e : E.default.Messages.CHANGE_AVATAR;
                    return (0, i.jsxs)("div", {
                        className: l(p.imageUploader, g),
                        children: [(0, i.jsx)(u.FocusRing, {
                            within: !0,
                            children: (0, i.jsxs)("div", {
                                className: T ? l(p.imageUploaderIconWrapper, N) : void 0,
                                children: [(0, i.jsxs)("div", {
                                    className: l(p.imageUploaderInner, A),
                                    style: {
                                        ...F,
                                        backgroundImage: n
                                    },
                                    children: [(0, i.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: s
                                    }), null != b ? (0, i.jsx)(u.Clickable, {
                                        className: p.imageUploaderFileInput,
                                        "aria-label": M,
                                        onClick: b
                                    }) : (0, i.jsx)(d.default, {
                                        ref: this.inputRef,
                                        onChange: I,
                                        className: p.imageUploaderFileInput,
                                        "aria-label": M,
                                        tabIndex: 0,
                                        maxFileSizeBytes: R,
                                        onFileSizeError: U
                                    })]
                                }), null != o && (0, i.jsx)("div", {
                                    className: p.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: o
                                }), T && (0, i.jsx)(h, {
                                    className: P,
                                    icon: L
                                })]
                            })
                        }), O ? r : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = s.createRef(), this.handleRemove = () => {
                        this.props.onChange(null)
                    }
                }
            }
            _.defaultProps = {
                name: "",
                makeURL: e => e,
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            var S = _
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("748820"),
                r = n("77078"),
                l = n("112679"),
                a = n("55689"),
                o = n("855133"),
                u = n("599110"),
                c = n("659500"),
                d = n("49111"),
                f = n("646718");

            function E(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: p,
                    onComplete: h,
                    onSubscriptionConfirmation: _,
                    analyticsLocations: S,
                    analyticsObject: m,
                    analyticsLocation: I,
                    analyticsSourceLocation: T,
                    isGift: C = !1,
                    giftMessage: g,
                    subscriptionTier: A,
                    trialId: P,
                    postSuccessGuild: N,
                    openInvoiceId: L,
                    applicationId: v,
                    referralTrialOfferId: F,
                    giftRecipient: O,
                    returnRef: R
                } = null != e ? e : {}, U = !1, b = (0, s.v4)();
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: s,
                            ...r
                        } = n;
                        return (0, i.jsx)(e, {
                            ...r,
                            loadId: b,
                            subscriptionTier: A,
                            skuId: A,
                            isGift: C,
                            giftMessage: g,
                            giftRecipient: O,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                s(), null == p || p(e), e && (null == _ || _())
                            },
                            onComplete: () => {
                                U = !0, null == h || h(), !C && ((0, o.setIsPersistentHelperHidden)(!0), (0, o.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: _,
                            analyticsLocations: S,
                            analyticsObject: m,
                            analyticsLocation: I,
                            analyticsSourceLocation: T,
                            trialId: P,
                            postSuccessGuild: N,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: L,
                            applicationId: v,
                            referralTrialOfferId: F,
                            returnRef: R
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !U && u.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: b,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != I ? I : m,
                            source: T,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: C,
                            eligible_for_trial: null != P,
                            application_id: v,
                            location_stack: S
                        }), (0, l.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == p || p(U), U && (!C && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == _ || _())
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
                    return r
                },
                resetPremiumTutorialStore: function() {
                    return l
                },
                setCanPlayWowMoment: function() {
                    return a
                },
                setIsPersistentHelperHidden: function() {
                    return o
                },
                setNavigatedFromHelper: function() {
                    return u
                }
            });
            var i = n("913144");
            let s = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                r = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                l = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                a = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                o = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                u = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        78345: function(e, t, n) {
            "use strict";
            var i, s, r, l;
            n.r(t), n.d(t, {
                PremiumHeaderThemes: function() {
                    return i
                },
                PremiumGiftStyles: function() {
                    return s
                },
                PromotionFlags: function() {
                    return a
                }
            }), (r = i || (i = {}))[r.DEFAULT = 0] = "DEFAULT", r[r.WINTER = 1] = "WINTER", (l = s || (s = {}))[l.SNOWGLOBE = 1] = "SNOWGLOBE", l[l.BOX = 2] = "BOX", l[l.CUP = 3] = "CUP", l[l.STANDARD_BOX = 4] = "STANDARD_BOX", l[l.CAKE = 5] = "CAKE", l[l.CHEST = 6] = "CHEST", l[l.COFFEE = 7] = "COFFEE";
            let a = Object.freeze({
                IS_BLOCKED_IOS: 32,
                IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64,
                SUPPRESS_NOTIFICATION: 128
            })
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return p
                },
                maybeFetchPremiumLikelihood: function() {
                    return _
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return S
                }
            });
            var i = n("884691"),
                s = n("65597"),
                r = n("872717"),
                l = n("913144"),
                a = n("775433"),
                o = n("697218"),
                u = n("10514"),
                c = n("764364"),
                d = n("676572"),
                f = n("646718"),
                E = n("49111");
            let p = "nonSubscriber";
            async function h() {
                try {
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await r.default.get({
                        url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [p]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function _(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = d.default.shouldFetchPremiumLikelihood(), s = o.default.getCurrentUser();
                m(s, i, t, n)
            }

            function S(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), r = (0, s.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), l = (0, s.default)([o.default], () => o.default.getCurrentUser());
                i.useEffect(() => {
                    m(l, r, t, n)
                }, [l, r, t, n])
            }

            function m(e, t, n, i) {
                null != e && !(0, c.isPremium)(e) && n && (t && h(), i && (!u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                s = n("913144");
            let r = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                l = r;
            class a extends i.default.Store {
                initialize() {
                    l = r
                }
                getState() {
                    return l
                }
                shouldFetchPremiumLikelihood() {
                    return !l.isFetching && !l.fetched
                }
            }
            a.displayName = "UserPremiumLikelihoodStore";
            var o = new a(s.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    l.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    l.premiumLikelihood = t, l.fetched = !0, l.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    l.isFetching = !1
                },
                LOGOUT: function() {
                    l.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("862205");
            let s = (0, i.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var r = s
        },
        15733: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("884691"),
                s = n("446674"),
                r = n("913144"),
                l = n("850068"),
                a = n("271938"),
                o = n("160299"),
                u = n("357957");

            function c() {
                let e = (0, s.useStateFromStores)([u.default], () => u.default.getDefaultBillingCountryCode()),
                    t = (0, s.useStateFromStores)([o.default], () => o.default.ipCountryCode),
                    n = (0, s.useStateFromStores)([a.default], () => a.default.isAuthenticated());
                return i.useEffect(() => {
                    r.default.wait(() => {
                        n && !o.default.isPaymentSourceFetching && !u.default.hasFetchedPaymentSources && l.fetchPaymentSources()
                    })
                }, [n]), i.useEffect(() => {
                    n && !o.default.ipCountryCodeLoaded && l.fetchIpCountryCode()
                }, [t, n]), {
                    defaultBillingCountryCode: e,
                    ipCountryCode: t
                }
            }
        },
        970755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchApplicationsShelf: function() {
                    return o
                },
                fetchPrivateChannelIntegrations: function() {
                    return u
                },
                deletePrivateChannelIntegration: function() {
                    return c
                }
            }), n("746379");
            var i = n("981980"),
                s = n("872717"),
                r = n("913144");
            n("253981");
            var l = n("140596"),
                a = n("49111");
            n("843455"), n("782340");

            function o() {
                l.default.getApplicationsShelfFetchState() === l.FetchState.NOT_FETCHED && (r.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_START"
                }), s.default.get(a.Endpoints.APPLICATIONS_SHELF).then(e => r.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
                    applications: e.body.applications
                })).catch(e => r.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_FAIL"
                })))
            }

            function u(e) {
                let t = new i.default(1e3, 5e3);
                r.default.dispatch({
                    type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
                    channelId: e
                }), s.default.get({
                    url: a.Endpoints.CHANNEL_INTEGRATIONS(e),
                    backoff: t,
                    retries: 10
                }).then(t => {
                    r.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                        channelId: e,
                        integrations: t.body
                    })
                }).catch(() => {
                    r.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
                        channelId: e
                    })
                })
            }

            function c(e, t) {
                return s.default.delete(a.Endpoints.CHANNEL_INTEGRATION(e, t)).then(e => {
                    var t;
                    if (null === (t = e.body) || void 0 === t ? void 0 : t.message) throw Error(e.body.message)
                })
            }
        },
        252063: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePrivateChannelIntegrationState: function() {
                    return u
                }
            });
            var i = n("884691"),
                s = n("446674"),
                r = n("201155"),
                l = n("21121"),
                a = n("970755"),
                o = n("140596");

            function u(e) {
                let {
                    channelId: t
                } = e;
                (0, l.useInMainTabsExperiment)();
                let n = (0, r.useShowApplicationInGDM)(t),
                    {
                        installedIntegrations: u,
                        applicationsShelf: c,
                        integrationsFetchState: d,
                        applicationsShelfFetchState: f
                    } = (0, s.useStateFromStoresObject)([o.default], () => ({
                        installedIntegrations: o.default.getIntegrations(t),
                        applicationsShelf: o.default.getApplicationsShelf(),
                        integrationsFetchState: o.default.getIntegrationsFetchState(t),
                        applicationsShelfFetchState: o.default.getApplicationsShelfFetchState()
                    }));
                i.useEffect(() => {
                    n && ((d === o.FetchState.NOT_FETCHED || d === o.FetchState.FETCH_FAILED) && (0, a.fetchPrivateChannelIntegrations)(t), (f === o.FetchState.NOT_FETCHED || f === o.FetchState.FETCH_FAILED) && (0, a.fetchApplicationsShelf)())
                }, [n, t, d, f]);
                let E = new Set(u.map(e => e.application.id)),
                    p = c.filter(e => !E.has(e.id));
                return {
                    installedIntegrations: u,
                    availableApplications: p,
                    applicationsShelf: c,
                    fetched: d !== o.FetchState.NOT_FETCHED && d !== o.FetchState.FETCHING && f !== o.FetchState.NOT_FETCHED && f !== o.FetchState.FETCHING,
                    appsInGDMEnabled: n
                }
            }
        },
        189293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserProfileEffects: function() {
                    return o
                }
            });
            var i = n("872717"),
                s = n("913144"),
                r = n("448993");
            n("845962");
            var l = n("49111");
            let a = e => ({
                    id: e.id,
                    config: e
                }),
                o = async () => {
                    s.default.dispatch({
                        type: "USER_PROFILE_EFFECTS_FETCH"
                    });
                    try {
                        let {
                            body: e
                        } = await i.default.get(l.Endpoints.USER_PROFILE_EFFECTS), t = null == e ? void 0 : e.profile_effect_configs, n = t.map(a);
                        s.default.dispatch({
                            type: "USER_PROFILE_EFFECTS_FETCH_SUCCESS",
                            profileEffects: n
                        })
                    } catch (e) {
                        throw s.default.dispatch({
                            type: "USER_PROFILE_EFFECTS_FETCH_FAILURE",
                            error: e
                        }), new r.APIError(e)
                    }
                }
        },
        889793: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var i = n("37983"),
                s = n("884691"),
                r = n("265586"),
                l = n("446674"),
                a = n("77078"),
                o = n("54239"),
                u = n("812204"),
                c = n("685665"),
                d = n("21526"),
                f = n("491232"),
                E = n("161009"),
                p = n("906932"),
                h = n("217513"),
                _ = n("790618"),
                S = n("697218"),
                m = n("599110"),
                I = n("717262"),
                T = n("598854"),
                C = n("49111"),
                g = n("782340"),
                A = n("811855");

            function P(e) {
                let {
                    onApply: t,
                    onClose: n,
                    canApplySelectedChange: s,
                    disableApplyButton: r
                } = e, l = s ? (0, i.jsx)(a.Button, {
                    onClick: t,
                    disabled: r,
                    children: g.default.Messages.PROFILE_EFFECT_MODAL_APPLY
                }) : (0, i.jsx)(a.Button, {
                    className: A.goToShopButton,
                    onClick: () => {
                        n(), (0, o.pushLayer)(C.Layers.COLLECTIBLES_SHOP)
                    },
                    children: g.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                });
                return (0, i.jsx)(a.ModalFooter, {
                    className: A.modalFooter,
                    children: (0, i.jsxs)("div", {
                        className: A.buttonsRight,
                        children: [(0, i.jsx)(a.Button, {
                            look: a.Button.Looks.LINK,
                            color: a.Button.Colors.PRIMARY,
                            onClick: n,
                            children: g.default.Messages.CANCEL
                        }), l]
                    })
                })
            }

            function N(e) {
                let {
                    user: t,
                    purchasedProfileEffects: n,
                    previewEffects: r,
                    onClose: o,
                    initialSelectedProfileEffectID: u,
                    currentSavedEffectID: c
                } = e, d = (0, l.useStateFromStores)([_.default], () => _.default.getPendingProfileEffectID()), [f, E] = s.useState(() => null != u ? u : void 0 !== d ? d : null == c ? null : null != c ? c : null), [h, S] = s.useMemo(() => {
                    var e;
                    let t = n.find(e => (null == e ? void 0 : e.id) === f),
                        i = null != t || null === f,
                        s = null !== (e = null != t ? t : r.find(e => (null == e ? void 0 : e.id) === f)) && void 0 !== e ? e : null;
                    return [s, i]
                }, [f, n, r]), m = s.useRef(null), C = f === (void 0 === d ? null != c ? c : null : d), N = s.useCallback(e => {
                    E(e)
                }, [E]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(a.ModalHeader, {
                        separator: !1,
                        className: A.modalHeader,
                        children: [(0, i.jsx)("div", {
                            className: A.modalHeadings,
                            children: (0, i.jsx)(a.HeadingLevel, {
                                component: (0, i.jsxs)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: [g.default.Messages.PROFILE_EFFECT_MODAL_HEADER, " "]
                                }),
                                children: !1
                            })
                        }), (0, i.jsx)(a.ModalCloseButton, {
                            className: A.modalCloseButton,
                            onClick: o
                        })]
                    }), (0, i.jsxs)(a.ModalContent, {
                        className: A.modalContent,
                        children: [(0, i.jsx)(T.default, {
                            user: t,
                            pendingProfileEffect: f,
                            selectedProfileEffectRef: m,
                            purchasedProfileEffects: n,
                            previewEffects: r,
                            onSelect: N,
                            onClose: o
                        }), (0, i.jsx)(I.default, {
                            user: t,
                            canApplySelectedChange: S,
                            pendingProfileEffectRecord: h
                        })]
                    }), (0, i.jsx)(P, {
                        onApply: () => {
                            (0, p.setNewPendingProfileEffectID)(f, c), o()
                        },
                        onClose: o,
                        canApplySelectedChange: S,
                        disableApplyButton: C
                    })]
                })
            }

            function L(e) {
                var t;
                let {
                    transitionState: n,
                    analyticsLocations: o,
                    initialSelectedEffectID: p,
                    onClose: _
                } = e, {
                    isFetching: I,
                    categories: T,
                    purchases: g
                } = (0, E.default)(), P = (0, l.useStateFromStores)([S.default], () => S.default.getCurrentUser()), {
                    AnalyticsLocationProvider: L,
                    analyticsLocations: v
                } = (0, c.default)(o, u.default.EDIT_PROFILE_EFFECT_MODAL), [F, O] = s.useMemo(() => {
                    let e = (0, f.groupProfileEffects)(T, g);
                    return [e.purchased, e.shopPreviews]
                }, [T, g]), R = (0, h.default)(null !== (t = null == P ? void 0 : P.id) && void 0 !== t ? t : ""), U = null == R ? void 0 : R.profileEffectID;
                return s.useEffect(() => {
                    m.default.track(C.AnalyticEvents.OPEN_MODAL, {
                        type: C.AnalyticsSections.PROFILE_EFFECT_CUSTOMIZATION,
                        location_stack: v
                    })
                }, [v]), s.useEffect(() => () => {
                    (0, d.setCollectiblesCategoryItemsViewed)({
                        categories: [...T.values()],
                        itemTypes: [r.CollectiblesItemType.PROFILE_EFFECT]
                    })
                }, [T]), null == P ? null : (0, i.jsx)(L, {
                    children: (0, i.jsx)(a.ModalRoot, {
                        transitionState: n,
                        size: a.ModalSize.DYNAMIC,
                        className: A.modal,
                        children: I ? (0, i.jsx)(a.Spinner, {
                            className: A.spinner,
                            type: a.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, i.jsx)(N, {
                            user: P,
                            purchasedProfileEffects: F,
                            previewEffects: O,
                            initialSelectedProfileEffectID: p,
                            currentSavedEffectID: U,
                            onClose: _
                        })
                    })
                })
            }
        },
        717262: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("446674"),
                r = n("77078"),
                l = n("152584"),
                a = n("853987"),
                o = n("775416"),
                u = n("805172"),
                c = n("884351"),
                d = n("184900"),
                f = n("783142"),
                E = n("217513"),
                p = n("915639"),
                h = n("845579"),
                _ = n("415167"),
                S = n("790618");
            n("550515");
            var m = n("719923"),
                I = n("782340"),
                T = n("146252");
            let C = e => {
                var t;
                let {
                    effectIsOwned: n,
                    pendingProfileEffectRecord: l,
                    userIsPremium: c
                } = e, d = (0, s.useStateFromStores)([o.default], () => o.default.getPurchase(null == l ? void 0 : l.skuId)), f = (0, s.useStateFromStores)([a.default], () => a.default.getProduct(null == l ? void 0 : l.skuId)), E = (0, s.useStateFromStores)([p.default], () => p.default.locale), {
                    shopForAllEnabled: h
                } = (0, u.default)({
                    location: "ProfileEffectPreview"
                }), _ = c || h ? I.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM : I.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE;
                return null != l ? (0, i.jsx)("div", {
                    className: n ? T.effectDescriptionNoGradient : T.effectDescriptionBorderWithGradient,
                    children: (0, i.jsxs)("div", {
                        className: T.effectDescriptionContainer,
                        children: [(0, i.jsx)(r.Text, {
                            color: "header-primary",
                            variant: "text-sm/semibold",
                            className: T.effectName,
                            children: null !== (t = null == d ? void 0 : d.name) && void 0 !== t ? t : null == f ? void 0 : f.name
                        }), (0, i.jsx)(r.Text, {
                            color: "text-normal",
                            variant: "text-sm/normal",
                            className: T.effectDescription,
                            children: null != d ? d.summary : _
                        }), null != d && (0, i.jsx)(r.Text, {
                            variant: "text-xxs/normal",
                            color: "text-muted",
                            className: T.effectPurchasedAt,
                            children: I.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                date: d.purchasedAt.toLocaleDateString(E, {
                                    month: "long",
                                    year: "numeric"
                                })
                            })
                        })]
                    })
                }) : null
            };
            var g = e => {
                var t;
                let {
                    user: n,
                    pendingProfileEffectRecord: r,
                    canApplySelectedChange: a
                } = e, {
                    pendingAvatar: o,
                    pendingBanner: u,
                    pendingBio: p,
                    pendingPronouns: I,
                    pendingGlobalName: g,
                    pendingAccentColor: A,
                    pendingAvatarDecoration: P,
                    pendingThemeColors: N
                } = (0, s.useStateFromStoresObject)([S.default], () => {
                    let e = S.default.getAllPending(),
                        t = S.default.getErrors();
                    return {
                        ...e,
                        errors: t
                    }
                }), L = m.default.isPremium(n), v = (0, E.default)(n.id), F = !!(null == v ? void 0 : v.getPreviewBio(p).value), O = h.UseLegacyChatInput.useSetting(), R = O && null != p ? c.default.parse(void 0, p).content : p, U = m.default.canUsePremiumProfileCustomization(n), b = (null == v ? void 0 : v.canUsePremiumProfileCustomization) || U, y = {
                    user: n,
                    canUsePremiumCustomization: U,
                    onUpsellClick: _.default,
                    onAvatarChange: l.setPendingAvatar,
                    onBannerChange: f.setPendingBanner,
                    pendingBanner: u,
                    pendingBio: R,
                    pendingPronouns: I,
                    pendingAvatar: o,
                    pendingGlobalName: g,
                    pendingAvatarDecoration: P,
                    pendingThemeColors: N,
                    pendingAccentColor: A,
                    pendingProfileEffectID: null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : null,
                    hideFakeActivity: F
                };
                return (0, i.jsxs)("div", {
                    className: b ? T.previewContainerWithTheme : T.previewContainerWithoutTheme,
                    children: [(0, i.jsx)(d.default, {
                        ...y,
                        disabledInputs: !0,
                        forProfileEffectModal: !0
                    }), !1, (0, i.jsx)(C, {
                        effectIsOwned: a,
                        pendingProfileEffectRecord: r,
                        userIsPremium: L
                    })]
                })
            }
        },
        598854: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var i, s, r = n("37983"),
                l = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("506838"),
                c = n("171210"),
                d = n("65597"),
                f = n("77078"),
                E = n("54239"),
                p = n("426497"),
                h = n("805172"),
                _ = n("743826"),
                S = n("468759"),
                m = n("600785"),
                I = n("956089"),
                T = n("719923"),
                C = n("845962"),
                g = n("49111"),
                A = n("782340"),
                P = n("361451"),
                N = n("513002");
            (i = s || (s = {}))[i.PURCHASED = 0] = "PURCHASED", i[i.PREVIEW = 1] = "PREVIEW";
            let L = () => 80,
                v = e => {
                    let {
                        children: t,
                        isSelected: n = !1,
                        ...i
                    } = e;
                    return (0, r.jsx)(f.Clickable, {
                        className: o(P.effectGridItem, {
                            [P.selected]: n
                        }),
                        ...i,
                        onClick: i.onSelect,
                        children: t
                    })
                },
                F = e => {
                    var t;
                    let {
                        profileEffect: n,
                        innerRef: i,
                        section: a,
                        isSelected: o,
                        ...u
                    } = e, f = (0, d.default)([C.default], () => C.default.getProfileEffectById(n.id)), E = (0, d.default)([p.default], () => p.default.isItemViewed(n)), h = l.useRef(null), {
                        accessibilityLabel: _,
                        thumbnailPreviewSrc: S,
                        title: T
                    } = null !== (t = null == f ? void 0 : f.config) && void 0 !== t ? t : {}, [g, L] = l.useState(o);
                    return l.useEffect(() => {
                        o && L(!0)
                    }, [o]), (0, r.jsxs)(v, {
                        innerRef: null != i ? i : h,
                        isSelected: o,
                        ...u,
                        children: [(0, r.jsx)("img", {
                            src: N,
                            alt: _,
                            className: P.presetEffectBackground
                        }), (0, r.jsx)("img", {
                            className: P.presetEffectImg,
                            src: S,
                            alt: T
                        }), (() => {
                            let e = a === s.PURCHASED;
                            if (e) return null;
                            let t = !E && !o && !g;
                            return t ? (0, r.jsx)(I.PremiumBadge, {
                                className: P.newBadge,
                                text: (0, r.jsxs)("div", {
                                    className: P.newBadgeText,
                                    children: [(0, r.jsx)(m.default, {
                                        width: 12,
                                        height: 12
                                    }), A.default.Messages.NEW]
                                })
                            }) : (0, r.jsx)(I.IconBadge, {
                                icon: () => (0, r.jsx)(m.default, {
                                    width: 12,
                                    height: 12
                                }),
                                color: c.default.BACKGROUND_ACCENT,
                                className: P.lockBadge
                            })
                        })()]
                    })
                },
                O = {
                    id: -2
                },
                R = {
                    id: -1
                };
            var U = e => {
                var t;
                let {
                    user: n,
                    pendingProfileEffect: i,
                    selectedProfileEffectRef: a,
                    purchasedProfileEffects: o,
                    previewEffects: c,
                    onSelect: d,
                    onClose: p
                } = e, m = () => {
                    p(), (0, E.pushLayer)(g.Layers.COLLECTIBLES_SHOP)
                }, I = T.default.canUsePremiumProfileCustomization(n), C = o.length > 0, {
                    shopForAllEnabled: N
                } = (0, h.default)({
                    location: "ProfileEffectSelection"
                }), U = 0 === c.length, b = l.useMemo(() => {
                    let e = {
                            section: s.PURCHASED,
                            items: [O, R, ...o],
                            header: A.default.Messages.PROFILE_EFFECT_MODAL_PURCHASES_HEADER
                        },
                        t = {
                            section: s.PREVIEW,
                            items: c,
                            header: A.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
                        },
                        n = !!C || I || N;
                    return U ? [e] : n ? [e, t] : [t]
                }, [o, c, I, C, U, N]), y = null != i;
                return (0, r.jsx)("section", {
                    children: (0, r.jsx)(f.MasonryList, {
                        fade: !0,
                        itemGutter: 12,
                        sectionGutter: 16,
                        paddingVertical: 0,
                        paddingHorizontal: 12,
                        className: P.list,
                        columns: 3,
                        sections: b.map(e => {
                            let {
                                items: t
                            } = e;
                            return t.length
                        }),
                        renderItem: (e, t, n, s) => {
                            let {
                                section: l,
                                items: o
                            } = b[e];
                            return (0, u.match)(o[t]).with(O, () => (0, r.jsxs)(v, {
                                style: {
                                    ...n
                                },
                                isSelected: !y,
                                onSelect: () => d(null),
                                children: [(0, r.jsx)(S.default, {
                                    className: P.notAllowedIcon
                                }), (0, r.jsx)(f.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: A.default.Messages.NONE
                                })]
                            }, s)).with(R, () => (0, r.jsxs)(v, {
                                style: n,
                                onSelect: m,
                                children: [(0, r.jsx)(_.default, {
                                    className: P.shopIcon
                                }), (0, r.jsx)(f.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: A.default.Messages.COLLECTIBLES_SHOP
                                })]
                            }, s)).otherwise(e => {
                                let t = i === e.id;
                                return (0, r.jsx)(F, {
                                    style: {
                                        ...n
                                    },
                                    section: l,
                                    profileEffect: e,
                                    innerRef: t ? a : void 0,
                                    isSelected: t,
                                    onSelect: () => d(e.id)
                                }, s)
                            })
                        },
                        renderSection: e => {
                            let {
                                header: t
                            } = b[e];
                            return (0, r.jsx)("div", {
                                style: {
                                    height: "".concat(16, "px")
                                },
                                children: (0, r.jsx)(f.FormTitle, {
                                    children: t
                                })
                            })
                        },
                        getSectionHeight: () => 16,
                        getItemKey: (e, n) => {
                            var i;
                            return null !== (t = null === (i = b[e].items[n]) || void 0 === i ? void 0 : i.id) && void 0 !== t ? t : null
                        },
                        getItemHeight: L,
                        removeEdgeItemGutters: !0
                    })
                })
            }
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("49111");

            function s(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(i.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(i.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        590456: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserProfileSections: function() {
                    return r
                },
                UserProfileTypes: function() {
                    return l
                },
                getBadgeAsset: function() {
                    return o
                }
            });
            var i, s, r, l, a = n("49111");

            function o(e) {
                let {
                    API_ENDPOINT: t,
                    CDN_HOST: n
                } = window.GLOBAL_ENV;
                return null != n ? "".concat(location.protocol, "//").concat(n, "/badge-icons/").concat(e, ".png") : "".concat(location.protocol).concat(t).concat(a.Endpoints.BADGE_ICON(e))
            }(i = r || (r = {})).USER_INFO = "USER_INFO", i.USER_INFO_CONNECTIONS = "USER_INFO_CONNECTIONS", i.ACTIVITY = "ACTIVITY", i.MUTUAL_GUILDS = "MUTUAL_GUILDS", i.MUTUAL_FRIENDS = "MUTUAL_FRIENDS", i.BOT_DATA_ACCESS = "BOT_DATA_ACCESS", (s = l || (l = {})).POPOUT = "POPOUT", s.MODAL = "MODAL", s.SETTINGS = "SETTINGS", s.PANEL = "PANEL", s.CARD = "CARD", s.POMELO_POPOUT = "POMELO_POPOUT", s.CANCEL_MODAL = "CANCEL_MODAL"
        },
        401642: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openUserProfileModal: function() {
                    return o
                },
                closeUserProfileModal: function() {
                    return u
                }
            });
            var i = n("913144"),
                s = n("327037"),
                r = n("697218"),
                l = n("506885"),
                a = n("49111");

            function o(e) {
                let {
                    userId: t,
                    section: n,
                    guildId: o = a.ME,
                    channelId: u,
                    friendToken: c,
                    autoFocusNote: d,
                    analyticsLocation: f
                } = e, E = r.default.getUser(t), p = o !== a.ME ? o : void 0;
                if (null == E) return (0, s.fetchProfile)(t, {
                    friendToken: c,
                    guildId: p
                }).then(() => {
                    i.default.dispatch({
                        type: "USER_PROFILE_MODAL_OPEN",
                        userId: t,
                        section: n,
                        guildId: o,
                        channelId: u,
                        friendToken: c,
                        autoFocusNote: d,
                        analyticsLocation: f
                    })
                });
                (0, l.default)(t, E.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: c,
                    guildId: p
                }), i.default.dispatch({
                    type: "USER_PROFILE_MODAL_OPEN",
                    userId: t,
                    section: n,
                    guildId: o,
                    channelId: u,
                    friendToken: c,
                    autoFocusNote: d,
                    analyticsLocation: f
                })
            }

            function u() {
                i.default.dispatch({
                    type: "USER_PROFILE_MODAL_CLOSE"
                })
            }
        },
        415167: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("77078"),
                r = n("49111");

            function l() {
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("920067").then(n.bind(n, "920067"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        source: {
                            page: r.AnalyticsPages.USER_SETTINGS,
                            section: r.AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE,
                            object: r.AnalyticsObjects.BUTTON_CTA,
                            type: r.AnalyticsObjectTypes.BUY
                        }
                    })
                })
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return a
                }
            });
            var i = n("884691"),
                s = n("446674"),
                r = n("244201"),
                l = n("471671");

            function a() {
                let {
                    windowId: e
                } = i.useContext(r.default);
                return (0, s.useStateFromStores)([l.default], () => l.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("817736"),
                s = n("118810");
            let r = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class l {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let n = (0, i.findDOMNode)(e);
                    (0, s.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = r) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: n
                                } = this._options;
                                t = null == n ? e.intersectionRatio > 0 : Array.isArray(n) ? n.some(t => e.intersectionRatio > t) : e.intersectionRatio > n
                            }
                            let n = this._nodes.get(e.target);
                            if (null != n) {
                                let e = !1;
                                t ? !this._visibleComponents.has(n) && (this._visibleComponents.add(n), e = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), e = !0), e && n.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("884691"),
                s = n("748820"),
                r = n("157590");
            let l = (0, s.v4)(),
                a = new Map,
                o = new Map;
            class u extends i.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(e) {
                    let t = this.getVisibilityObserver(),
                        n = t.isVisible(this);
                    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
                }
                componentWillUnmount() {
                    this.getVisibilityObserver().unobserve(this)
                }
                getVisibilityObserverId() {
                    let {
                        rootMargin: e,
                        threshold: t
                    } = this.props;
                    return "".concat(this.elementId, " ").concat(e, " ").concat(t)
                }
                getVisibilityObserver() {
                    let e = this.getVisibilityObserverId(),
                        t = o.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return i.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: i
                    } = e;
                    t ? a.has(t) ? this.elementId = a.get(t) || "" : a.set(t, (0, s.v4)()) : this.elementId = l;
                    let u = this.getVisibilityObserverId();
                    !o.has(u) && o.set(u, new r.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            u.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var c = u
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return i.default
                },
                VisibilitySensor: function() {
                    return s.default
                }
            }), n("6268");
            var i = n("157590"),
                s = n("235855")
        }
    }
]);