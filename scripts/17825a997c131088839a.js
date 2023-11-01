(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["41817"], {
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
                    return l
                },
                fetchUserEntitlements: function() {
                    return o
                },
                fetchGiftableEntitlements: function() {
                    return u
                }
            });
            var i = n("872717"),
                r = n("913144"),
                a = n("271560"),
                s = n("49111");

            function l(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return r.default.wait(() => {
                    r.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), i.default.get({
                    url: s.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
                    oldFormErrors: !0,
                    query: {
                        exclude_consumed: t
                    }
                }).then(t => (r.default.dispatch({
                    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                    applicationId: e,
                    entitlements: t.body
                }), t.body)).catch(() => {
                    r.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                        applicationId: e
                    })
                })
            }
            async function o(e) {
                let {
                    withSku: t = !1,
                    withApplication: n = !1,
                    entitlementType: a
                } = e;
                r.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let e = await i.default.get({
                        url: s.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: t,
                            with_application: n,
                            entitlement_type: a
                        }
                    });
                    r.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    r.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
                    })
                }
            }
            async function u() {
                r.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let e = await (0, a.httpGetWithCountryCodeQuery)({
                        url: s.Endpoints.ENTITLEMENTS_GIFTABLE
                    });
                    r.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    r.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
                    })
                }
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return r
                },
                updateCardInfo: function() {
                    return a
                },
                clearCardInfo: function() {
                    return s
                },
                updateAddressInfo: function() {
                    return l
                },
                clearError: function() {
                    return o
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function a(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function l(e, t) {
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
                    return r
                }
            });
            var i = n("913144");

            function r() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        775433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionPlansForSKU: function() {
                    return d
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return f
                },
                fetchPremiumSubscriptionPlans: function() {
                    return E
                },
                resetSubscriptionPlanData: function() {
                    return p
                }
            });
            var i = n("872717"),
                r = n("913144"),
                a = n("333805"),
                s = n("160299"),
                l = n("745279"),
                o = n("850068"),
                u = n("49111"),
                c = n("646718");
            async function d(e, t, n, c, d) {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let a = {
                            url: u.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        l = {};
                    null != t && (l.country_code = t), null != n && (l.payment_source_id = n), null != c && (l.include_unpublished = c), null != d && (l.revenue_surface = d), a.query = l, !s.default.ipCountryCodeLoaded && await (0, o.fetchIpCountryCode)();
                    let f = await i.default.get(a);
                    r.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: f.body
                    })
                } catch (t) {
                    throw r.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, l.captureBillingException)(t), new a.default(t)
                }
            }

            function f(e, t) {
                return Promise.all(e.filter(e => e !== c.PremiumSubscriptionSKUs.NONE).map(e => d(e, t)))
            }

            function E(e, t, n) {
                return Promise.all(c.ACTIVE_PREMIUM_SKUS.filter(e => e !== c.PremiumSubscriptionSKUs.NONE).map(i => d(i, e, t, void 0, n)))
            }

            function p() {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return a
                }
            });
            var i = n("884691"),
                r = n("599110");
            let a = () => i.useContext(r.AnalyticsContext)
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r(e) {
                let [t, n] = (0, i.useState)(!1), r = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    r.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = r.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [r]), t
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("704744");
            var i = n("913144");
            class r {
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
                    return r
                }
            });
            var i = n("49111");

            function r(e, t) {
                return t !== i.ActivityFlags.INSTANCE && null != e && null != e.flags && !!(e.flags & t)
            }
        },
        152311: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("871388"),
                r = n("49111");

            function a(e) {
                return (0, i.default)(e, r.ActivityFlags.EMBEDDED)
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var i, r, a, s;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return r
                }
            }), (a = i || (i = {}))[a.GAME = 1] = "GAME", a[a.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", a[a.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (s = r || (r = {}))[s.BOT = 0] = "BOT", s[s.SERVER = 1] = "SERVER", s[s.SYSTEM_DM = 2] = "SYSTEM_DM", s[s.OFFICIAL = 3] = "OFFICIAL", s[s.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", s[s.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", s[s.AI = 6] = "AI", s[s.REMIX = 7] = "REMIX"
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
                    return s
                }
            });
            var i = n("65597"),
                r = n("42203"),
                a = n("337026");

            function s(e) {
                let t = (0, i.default)([r.default], () => r.default.getChannel(e)),
                    {
                        enabled: n
                    } = a.default.useExperiment({
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
                    return l
                },
                default: function() {
                    return o
                }
            });
            var i = n("862205"),
                r = n("15733");
            let a = (0, i.createExperiment)({
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
                s = (0, i.createExperiment)({
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

            function l() {
                let {
                    paymentsBlocked: e
                } = a.useExperiment({
                    location: "c519a9_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    checkPaymentSource: t
                } = s.useExperiment({
                    location: "c519a9_2"
                }, {
                    autoTrackExposure: !1
                }), {
                    defaultBillingCountryCode: n
                } = (0, r.default)();
                return e || t && "RU" === n
            }
            var o = a
        },
        805172: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
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
            var a = e => {
                let {
                    location: t,
                    autoTrackExposure: n = !0,
                    trackExposureOptions: i = {}
                } = e;
                return r.useExperiment({
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
                r = n("446674"),
                a = n("189293"),
                s = n("845962"),
                l = n("235898");

            function o() {
                let {
                    isFetching: e,
                    error: t,
                    categories: n,
                    purchases: o
                } = (0, l.default)(), [u, c, d] = (0, r.useStateFromStoresArray)([s.default], () => [s.default.isFetching, s.default.fetchError, s.default.profileEffects]);
                return (0, i.useEffect)(() => {
                    (0, a.fetchUserProfileEffects)()
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
                r = n("65597"),
                a = n("875212"),
                s = n("21526"),
                l = n("853987"),
                o = n("563775"),
                u = n("775416");

            function c() {
                var e;
                let t = "useFetchCollectiblesCategoriesAndPurchases";
                (0, a.useTriggerDebuggingAA)({
                    location: t + " auto on",
                    autoTrackExposure: !0
                }), (0, a.useTriggerDebuggingAA)({
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
                    (0, a.useTriggerDebuggingAA)({
                        location: t + " auto on",
                        autoTrackExposure: !0
                    }), (0, a.useTriggerDebuggingAA)({
                        location: t + " auto off",
                        autoTrackExposure: !1
                    }), (0, o.default)({
                        location: t
                    });
                    let [n, u, c, d] = (0, r.useStateFromStoresArray)([l.default], () => [l.default.isFetching, l.default.error, null !== (e = l.default.lastFetched) && void 0 !== e ? e : 0, l.default.categories]);
                    return (0, i.useEffect)(() => {
                        !(n || u || Date.now() - c < 6e5) && (0, s.fetchCollectiblesCategories)()
                    }, [n, c, u]), {
                        isFetching: n,
                        categories: d,
                        error: u
                    }
                }(), {
                    isClaiming: f,
                    fetchError: E,
                    claimError: p,
                    isFetching: _,
                    purchases: h
                } = function() {
                    let e = "useFetchPurchases";
                    (0, a.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, a.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    }), (0, o.default)({
                        location: e
                    });
                    let [t, n, l, c, d] = (0, r.useStateFromStoresArray)([u.default], () => [u.default.isFetching, u.default.isClaiming, u.default.fetchError, u.default.claimError, u.default.purchases]);
                    return (0, i.useEffect)(() => {
                        (0, s.fetchCollectiblesPurchases)()
                    }, []), {
                        isClaiming: n,
                        fetchError: l,
                        claimError: c,
                        isFetching: t,
                        purchases: d
                    }
                }(), I = null !== (e = null != d ? d : E) && void 0 !== e ? e : p;
                return {
                    isFetching: n || _,
                    isFetchingCategories: n,
                    isFetchingPurchases: _,
                    isClaiming: f,
                    categories: c,
                    purchases: h,
                    error: I
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
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("872717"),
                r = n("913144"),
                a = n("479756"),
                s = n("38654"),
                l = n("9294"),
                o = n("26989"),
                u = n("337543"),
                c = n("697218"),
                d = n("49111");
            let f = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    a = c.default.getCurrentUser(),
                    s = !o.default.isMember(e, null == a ? void 0 : a.id);
                try {
                    let t = await i.default.get({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: s,
                            invite_code: null != n ? (0, l.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: a
                    } = t;
                    return r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: a.version,
                            description: a.description,
                            formFields: a.form_fields,
                            guild: a.guild
                        }
                    }), a
                } catch (t) {
                    r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, E = async (e, t) => {
                let n = await i.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, p = async (e, t) => {
                let n = await i.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, _ = async (e, t) => {
                await i.default.patch({
                    url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, h = async (e, t) => {
                if (s.default.isFullServerPreview(e)) {
                    (0, a.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await i.default.put({
                            url: d.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: a
                        } = n;
                    return r.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: a
                    }), a
                } catch (e) {
                    throw e
                }
            };
            var I = {
                fetchVerificationForm: f,
                updateVerificationForm: E,
                updateVerificationFormDescription: p,
                enableVerificationForm: _,
                submitVerificationForm: h
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return a
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return s
                },
                MAX_FORM_ELEMENTS: function() {
                    return l
                },
                MAX_NUM_RULES: function() {
                    return o
                },
                MAX_RULE_LENGTH: function() {
                    return u
                },
                MAX_QUESTION_LENGTH: function() {
                    return c
                },
                MAX_NUM_CHOICES: function() {
                    return d
                },
                MAX_CHOICE_LENGTH: function() {
                    return f
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return E
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return p
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return _
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return h
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return I
                }
            });
            var i, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let a = new Set([r.VerificationFormFieldTypes.TERMS]),
                s = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                l = 5,
                o = 16,
                u = 300,
                c = 300,
                d = 8,
                f = 150,
                E = 150,
                p = 1e3,
                _ = 300,
                h = "Membership Gating",
                I = "in-app-member-verification";
            (i || (i = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return r
                }
            }), i = n("453265").default;
            let r = i.openMemberVerificationModal;
            i.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return l
                },
                setHasUnsubmittedChanges: function() {
                    return o
                },
                setShowWarning: function() {
                    return u
                }
            });
            var i = n("308503"),
                r = n("659500"),
                a = n("49111");
            let s = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                l = (0, i.default)(e => s),
                o = e => {
                    l.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    l.setState({
                        shouldShowWarning: e
                    }), e && r.ComponentDispatch.dispatch(a.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                a = n("599110"),
                s = n("50926"),
                l = n("347977"),
                o = n("394294"),
                u = n("49111");
            let c = () => {
                    a.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: o.MEMBER_VERIFICATION_TYPE
                    })
                },
                d = e => {
                    a.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: o.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var f = {
                openMemberVerificationModal(e, t) {
                    d(e);
                    let a = async t => {
                        await s.default.submitVerificationForm(e, t)
                    };
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: a,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (l.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, l.setShowWarning)(!0);
                                        return
                                    }
                                    c()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            c(), l.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, l.setShowWarning)(!0) : (0, r.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && c(), (0, r.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        608684: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImageUploaderIcon: function() {
                    return _
                },
                default: function() {
                    return I
                }
            });
            var i = n("37983"),
                r = n("884691"),
                a = n("414456"),
                s = n.n(a),
                l = n("627445"),
                o = n.n(l),
                u = n("77078"),
                c = n("159885"),
                d = n("694187"),
                f = n("49111"),
                E = n("782340"),
                p = n("911686");

            function _(e) {
                let {
                    className: t,
                    icon: n = null
                } = e;
                return (0, i.jsx)("div", {
                    className: s(p.imageUploaderIcon, t),
                    children: n
                })
            }
            class h extends r.PureComponent {
                handleExternalFileChange(e) {
                    o(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let t, n, r, a;
                    let {
                        image: l,
                        hint: o,
                        name: h,
                        makeURL: I,
                        disabled: S,
                        onChange: T,
                        showIcon: m,
                        showIconDisabled: C,
                        className: A,
                        imageClassName: g,
                        iconClassName: N,
                        iconWrapperClassName: O,
                        icon: F,
                        hideSize: R,
                        imageStyle: P,
                        showRemoveButton: L,
                        maxFileSizeBytes: v,
                        onFileSizeError: y,
                        onOpenImageSelectModal: M,
                        "aria-label": U
                    } = this.props;
                    if (null != (t = null != l && /^data:/.test(l) ? l : I(l)) ? n = 'url("'.concat(t, '")') : null != h && (r = (0, i.jsx)("div", {
                            className: p.imageUploaderAcronym,
                            children: (0, c.getAcronym)(h)
                        })), S) return (0, i.jsx)("div", {
                        className: s(p.imageUploader, p.disabled, A),
                        children: (0, i.jsxs)("div", {
                            className: s(p.imageUploaderInner, g),
                            style: {
                                ...P,
                                backgroundImage: n
                            },
                            children: [r, C && (0, i.jsx)("div", {
                                className: s(p.imageUploaderIcon, p.imageUploaderIconDisabled, N),
                                children: F
                            })]
                        })
                    });
                    null != l ? a = (0, i.jsx)(u.Anchor, {
                        className: p.removeButton,
                        onClick: this.handleRemove,
                        children: E.default.Messages.REMOVE
                    }) : !R && (a = (0, i.jsx)("small", {
                        className: p.sizeInfo,
                        children: E.default.Messages.MINIMUM_SIZE.format({
                            size: f.AVATAR_SIZE
                        })
                    }));
                    let b = null !== (e = null != U ? U : o) && void 0 !== e ? e : E.default.Messages.CHANGE_AVATAR;
                    return (0, i.jsxs)("div", {
                        className: s(p.imageUploader, A),
                        children: [(0, i.jsx)(u.FocusRing, {
                            within: !0,
                            children: (0, i.jsxs)("div", {
                                className: m ? s(p.imageUploaderIconWrapper, O) : void 0,
                                children: [(0, i.jsxs)("div", {
                                    className: s(p.imageUploaderInner, g),
                                    style: {
                                        ...P,
                                        backgroundImage: n
                                    },
                                    children: [(0, i.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: r
                                    }), null != M ? (0, i.jsx)(u.Clickable, {
                                        className: p.imageUploaderFileInput,
                                        "aria-label": b,
                                        onClick: M
                                    }) : (0, i.jsx)(d.default, {
                                        ref: this.inputRef,
                                        onChange: T,
                                        className: p.imageUploaderFileInput,
                                        "aria-label": b,
                                        tabIndex: 0,
                                        maxFileSizeBytes: v,
                                        onFileSizeError: y
                                    })]
                                }), null != o && (0, i.jsx)("div", {
                                    className: p.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: o
                                }), m && (0, i.jsx)(_, {
                                    className: N,
                                    icon: F
                                })]
                            })
                        }), L ? a : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = r.createRef(), this.handleRemove = () => {
                        this.props.onChange(null)
                    }
                }
            }
            h.defaultProps = {
                name: "",
                makeURL: e => e,
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            var I = h
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return S
                },
                updateImpersonating: function() {
                    return T
                },
                stopImpersonating: function() {
                    return m
                },
                updateImpersonatedChannels: function() {
                    return A
                },
                updateImpersonatedRoles: function() {
                    return g
                },
                updateImpersonatedData: function() {
                    return N
                }
            });
            var i = n("913144"),
                r = n("716241"),
                a = n("393414"),
                s = n("42203"),
                l = n("923959"),
                o = n("26989"),
                u = n("305961"),
                c = n("957255"),
                d = n("18494"),
                f = n("282109"),
                E = n("599110"),
                p = n("38654"),
                _ = n("507950"),
                h = n("49111"),
                I = n("724210");

            function S(e, t) {
                E.default.track(h.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === _.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), C(e)
            }

            function T(e, t) {
                let n = p.default.getData(e);
                null != n && n.type === t.type && (E.default.track(h.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === _.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), C(e))
            }

            function m(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function C(e) {
                let t = d.default.getChannelId(e),
                    n = s.default.getChannel(t),
                    i = null != t && (0, I.isStaticChannelRoute)(t);
                if (!i && !c.default.can(h.Permissions.VIEW_CHANNEL, n)) {
                    let t = l.default.getDefaultChannel(e);
                    null != t && (0, a.transitionTo)(h.Routes.CHANNEL(e, t.id))
                }
            }

            function A(e, t, n) {
                let i = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), T(e, {
                    type: _.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function g(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...l.default.getSelectableChannelIds(e), ...l.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    l.default.addConditionalChangeListener(() => {
                        let t = o.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let r = [...l.default.getSelectableChannelIds(e), ...l.default.getVocalChannelIds(e)],
                            a = r.filter(e => !n.includes(e));
                        return a.length > 0 && A(e, a, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), T(e, {
                    type: _.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function N(e, t) {
                T(e, {
                    type: _.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
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
            var r = n("748820"),
                a = n("77078"),
                s = n("112679"),
                l = n("55689"),
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
                    onComplete: _,
                    onSubscriptionConfirmation: h,
                    analyticsLocations: I,
                    analyticsObject: S,
                    analyticsLocation: T,
                    analyticsSourceLocation: m,
                    isGift: C = !1,
                    giftMessage: A,
                    subscriptionTier: g,
                    trialId: N,
                    postSuccessGuild: O,
                    openInvoiceId: F,
                    applicationId: R,
                    referralTrialOfferId: P,
                    giftRecipient: L,
                    returnRef: v
                } = null != e ? e : {}, y = !1, M = (0, r.v4)();
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...a
                        } = n;
                        return (0, i.jsx)(e, {
                            ...a,
                            loadId: M,
                            subscriptionTier: g,
                            skuId: g,
                            isGift: C,
                            giftMessage: A,
                            giftRecipient: L,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                r(), null == p || p(e), e && (null == h || h())
                            },
                            onComplete: () => {
                                y = !0, null == _ || _(), !C && ((0, o.setIsPersistentHelperHidden)(!0), (0, o.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: h,
                            analyticsLocations: I,
                            analyticsObject: S,
                            analyticsLocation: T,
                            analyticsSourceLocation: m,
                            trialId: N,
                            postSuccessGuild: O,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: F,
                            applicationId: R,
                            referralTrialOfferId: P,
                            returnRef: v
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !y && u.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: M,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != T ? T : S,
                            source: m,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: C,
                            eligible_for_trial: null != N,
                            application_id: R,
                            location_stack: I
                        }), (0, s.clearError)(), (0, l.clearPurchaseTokenAuthState)(), null == p || p(y), y && (!C && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == h || h())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return r
                },
                setHasCompletedStep: function() {
                    return a
                },
                resetPremiumTutorialStore: function() {
                    return s
                },
                setCanPlayWowMoment: function() {
                    return l
                },
                setIsPersistentHelperHidden: function() {
                    return o
                },
                setNavigatedFromHelper: function() {
                    return u
                }
            });
            var i = n("913144");
            let r = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                a = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                s = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                l = e => {
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
            var i, r, a, s;
            n.r(t), n.d(t, {
                PremiumHeaderThemes: function() {
                    return i
                },
                PremiumGiftStyles: function() {
                    return r
                },
                PromotionFlags: function() {
                    return l
                }
            }), (a = i || (i = {}))[a.DEFAULT = 0] = "DEFAULT", a[a.WINTER = 1] = "WINTER", (s = r || (r = {}))[s.SNOWGLOBE = 1] = "SNOWGLOBE", s[s.BOX = 2] = "BOX", s[s.CUP = 3] = "CUP", s[s.STANDARD_BOX = 4] = "STANDARD_BOX", s[s.CAKE = 5] = "CAKE", s[s.CHEST = 6] = "CHEST", s[s.COFFEE = 7] = "COFFEE";
            let l = Object.freeze({
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
                    return h
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return I
                }
            });
            var i = n("884691"),
                r = n("65597"),
                a = n("872717"),
                s = n("913144"),
                l = n("775433"),
                o = n("697218"),
                u = n("10514"),
                c = n("764364"),
                d = n("676572"),
                f = n("646718"),
                E = n("49111");
            let p = "nonSubscriber";
            async function _() {
                try {
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await a.default.get({
                        url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    s.default.dispatch({
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
                    404 === e.status ? s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function h(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = d.default.shouldFetchPremiumLikelihood(), r = o.default.getCurrentUser();
                S(r, i, t, n)
            }

            function I(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), a = (0, r.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), s = (0, r.default)([o.default], () => o.default.getCurrentUser());
                i.useEffect(() => {
                    S(s, a, t, n)
                }, [s, a, t, n])
            }

            function S(e, t, n, i) {
                null != e && !(0, c.isPremium)(e) && n && (t && _(), i && (!u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, l.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, l.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
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
                r = n("913144");
            let a = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                s = a;
            class l extends i.default.Store {
                initialize() {
                    s = a
                }
                getState() {
                    return s
                }
                shouldFetchPremiumLikelihood() {
                    return !s.isFetching && !s.fetched
                }
            }
            l.displayName = "UserPremiumLikelihoodStore";
            var o = new l(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    s.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    s.premiumLikelihood = t, s.fetched = !0, s.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    s.isFetching = !1
                },
                LOGOUT: function() {
                    s.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
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
            var a = r
        },
        15733: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("884691"),
                r = n("446674"),
                a = n("913144"),
                s = n("850068"),
                l = n("271938"),
                o = n("160299"),
                u = n("357957");

            function c() {
                let e = (0, r.useStateFromStores)([u.default], () => u.default.getDefaultBillingCountryCode()),
                    t = (0, r.useStateFromStores)([o.default], () => o.default.ipCountryCode),
                    n = (0, r.useStateFromStores)([l.default], () => l.default.isAuthenticated());
                return i.useEffect(() => {
                    a.default.wait(() => {
                        n && !o.default.isPaymentSourceFetching && !u.default.hasFetchedPaymentSources && s.fetchPaymentSources()
                    })
                }, [n]), i.useEffect(() => {
                    n && !o.default.ipCountryCodeLoaded && s.fetchIpCountryCode()
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
                r = n("872717"),
                a = n("913144");
            n("253981");
            var s = n("140596"),
                l = n("49111");
            n("843455"), n("782340");

            function o() {
                s.default.getApplicationsShelfFetchState() === s.FetchState.NOT_FETCHED && (a.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_START"
                }), r.default.get(l.Endpoints.APPLICATIONS_SHELF).then(e => a.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
                    applications: e.body.applications
                })).catch(e => a.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_FAIL"
                })))
            }

            function u(e) {
                let t = new i.default(1e3, 5e3);
                a.default.dispatch({
                    type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
                    channelId: e
                }), r.default.get({
                    url: l.Endpoints.CHANNEL_INTEGRATIONS(e),
                    backoff: t,
                    retries: 10
                }).then(t => {
                    a.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                        channelId: e,
                        integrations: t.body
                    })
                }).catch(() => {
                    a.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
                        channelId: e
                    })
                })
            }

            function c(e, t) {
                return r.default.delete(l.Endpoints.CHANNEL_INTEGRATION(e, t)).then(e => {
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
                r = n("446674"),
                a = n("201155"),
                s = n("21121"),
                l = n("970755"),
                o = n("140596");

            function u(e) {
                let {
                    channelId: t
                } = e;
                (0, s.useInMainTabsExperiment)();
                let n = (0, a.useShowApplicationInGDM)(t),
                    {
                        installedIntegrations: u,
                        applicationsShelf: c,
                        integrationsFetchState: d,
                        applicationsShelfFetchState: f
                    } = (0, r.useStateFromStoresObject)([o.default], () => ({
                        installedIntegrations: o.default.getIntegrations(t),
                        applicationsShelf: o.default.getApplicationsShelf(),
                        integrationsFetchState: o.default.getIntegrationsFetchState(t),
                        applicationsShelfFetchState: o.default.getApplicationsShelfFetchState()
                    }));
                i.useEffect(() => {
                    n && ((d === o.FetchState.NOT_FETCHED || d === o.FetchState.FETCH_FAILED) && (0, l.fetchPrivateChannelIntegrations)(t), (f === o.FetchState.NOT_FETCHED || f === o.FetchState.FETCH_FAILED) && (0, l.fetchApplicationsShelf)())
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
        140596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return r
                },
                default: function() {
                    return I
                }
            });
            var i, r, a = n("446674"),
                s = n("913144"),
                l = n("653047"),
                o = n("946028");
            (i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.FETCH_FAILED = 3] = "FETCH_FAILED";
            let u = new Map,
                c = new Map,
                d = [],
                f = r.NOT_FETCHED,
                E = [];
            class p extends a.default.Store {
                getIntegrations(e) {
                    var t;
                    return null !== (t = u.get(e)) && void 0 !== t ? t : E
                }
                getIntegration(e, t) {
                    var n;
                    return null === (n = u.get(e)) || void 0 === n ? void 0 : n.find(e => e.application.id === t)
                }
                getAllIntegrations() {
                    return u
                }
                getIntegrationsFetchState(e) {
                    var t;
                    return null !== (t = c.get(e)) && void 0 !== t ? t : r.NOT_FETCHED
                }
                getApplicationsShelfFetchState() {
                    return f
                }
                getApplicationsShelf() {
                    return d
                }
            }

            function _(e) {
                return e.sort((e, t) => e.application.name.localeCompare(t.application.name))
            }
            p.displayName = "PrivateChannelIntegrationStore";
            let h = new p(s.default, {
                LOGOUT() {
                    u.clear()
                },
                CONNECTION_OPEN() {
                    u.clear(), c.clear()
                },
                CHANNEL_SELECT(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || c.get(t) !== r.FETCH_FAILED) return !1;
                    c.set(t, r.NOT_FETCHED)
                },
                APPLICATIONS_SHELF_FETCH_START() {
                    f = r.FETCHING
                },
                APPLICATIONS_SHELF_FETCH_SUCCESS(e) {
                    let {
                        applications: t
                    } = e;
                    d = t.map(l.default.createFromServer).sort((e, t) => e.name.localeCompare(t.name)), f = r.FETCHED
                },
                APPLICATIONS_SHELF_FETCH_FAIL() {
                    f = r.FETCH_FAILED
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START(e) {
                    let {
                        channelId: t
                    } = e;
                    u.set(t, null), c.set(t, r.FETCHING)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
                    let {
                        channelId: t,
                        integrations: n
                    } = e;
                    u.set(t, _(n.map(o.createPrivateChannelIntegration))), c.set(t, r.FETCHED)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL(e) {
                    let {
                        channelId: t
                    } = e;
                    c.set(t, r.FETCH_FAILED)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
                    let {
                        integration: t
                    } = e, n = u.get(t.channel_id);
                    if (null == n) return !1;
                    u.set(t.channel_id, _([...n, (0, o.createPrivateChannelIntegration)(t)]))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
                    let {
                        integration: t
                    } = e, n = u.get(t.channel_id);
                    if (null == n) return !1;
                    let i = (0, o.createPrivateChannelIntegration)(t),
                        r = n.findIndex(e => e.application.id === i.application.id),
                        a = [...n]; - 1 === r ? a.push(i) : a[r] = i, u.set(i.channel_id, _(a))
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
                    let {
                        channelId: t,
                        applicationId: n
                    } = e, i = u.get(t);
                    if (null == i) return !1;
                    u.set(t, i.filter(e => e.application.id !== n))
                },
                CHANNEL_DELETE(e) {
                    let {
                        channel: t
                    } = e;
                    return u.delete(t.id)
                }
            });
            var I = h
        },
        189293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserProfileEffects: function() {
                    return o
                }
            });
            var i = n("872717"),
                r = n("913144"),
                a = n("448993");
            n("845962");
            var s = n("49111");
            let l = e => ({
                    id: e.id,
                    config: e
                }),
                o = async () => {
                    r.default.dispatch({
                        type: "USER_PROFILE_EFFECTS_FETCH"
                    });
                    try {
                        let {
                            body: e
                        } = await i.default.get(s.Endpoints.USER_PROFILE_EFFECTS), t = null == e ? void 0 : e.profile_effect_configs, n = t.map(l);
                        r.default.dispatch({
                            type: "USER_PROFILE_EFFECTS_FETCH_SUCCESS",
                            profileEffects: n
                        })
                    } catch (e) {
                        throw r.default.dispatch({
                            type: "USER_PROFILE_EFFECTS_FETCH_FAILURE",
                            error: e
                        }), new a.APIError(e)
                    }
                }
        },
        889793: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            });
            var i = n("37983"),
                r = n("884691"),
                a = n("265586"),
                s = n("446674"),
                l = n("77078"),
                o = n("54239"),
                u = n("812204"),
                c = n("685665"),
                d = n("21526"),
                f = n("491232"),
                E = n("161009"),
                p = n("906932"),
                _ = n("217513"),
                h = n("790618"),
                I = n("697218"),
                S = n("599110"),
                T = n("717262"),
                m = n("598854"),
                C = n("49111"),
                A = n("782340"),
                g = n("811855");

            function N(e) {
                let {
                    onApply: t,
                    onClose: n,
                    canApplySelectedChange: r,
                    disableApplyButton: a
                } = e, s = r ? (0, i.jsx)(l.Button, {
                    onClick: t,
                    disabled: a,
                    children: A.default.Messages.PROFILE_EFFECT_MODAL_APPLY
                }) : (0, i.jsx)(l.Button, {
                    className: g.goToShopButton,
                    onClick: () => {
                        n(), (0, o.pushLayer)(C.Layers.COLLECTIBLES_SHOP)
                    },
                    children: A.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                });
                return (0, i.jsx)(l.ModalFooter, {
                    className: g.modalFooter,
                    children: (0, i.jsxs)("div", {
                        className: g.buttonsRight,
                        children: [(0, i.jsx)(l.Button, {
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.PRIMARY,
                            onClick: n,
                            children: A.default.Messages.CANCEL
                        }), s]
                    })
                })
            }

            function O(e) {
                let {
                    user: t,
                    purchasedProfileEffects: n,
                    previewEffects: a,
                    onClose: o,
                    initialSelectedProfileEffectID: u,
                    currentSavedEffectID: c
                } = e, d = (0, s.useStateFromStores)([h.default], () => h.default.getPendingProfileEffectID()), [f, E] = r.useState(() => null != u ? u : void 0 !== d ? d : null == c ? null : null != c ? c : null), [_, I] = r.useMemo(() => {
                    var e;
                    let t = n.find(e => (null == e ? void 0 : e.id) === f),
                        i = null != t || null === f,
                        r = null !== (e = null != t ? t : a.find(e => (null == e ? void 0 : e.id) === f)) && void 0 !== e ? e : null;
                    return [r, i]
                }, [f, n, a]), S = r.useRef(null), C = f === (void 0 === d ? null != c ? c : null : d), O = r.useCallback(e => {
                    E(e)
                }, [E]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(l.ModalHeader, {
                        separator: !1,
                        className: g.modalHeader,
                        children: [(0, i.jsx)("div", {
                            className: g.modalHeadings,
                            children: (0, i.jsx)(l.HeadingLevel, {
                                component: (0, i.jsxs)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: [A.default.Messages.PROFILE_EFFECT_MODAL_HEADER, " "]
                                }),
                                children: !1
                            })
                        }), (0, i.jsx)(l.ModalCloseButton, {
                            className: g.modalCloseButton,
                            onClick: o
                        })]
                    }), (0, i.jsxs)(l.ModalContent, {
                        className: g.modalContent,
                        children: [(0, i.jsx)(m.default, {
                            user: t,
                            pendingProfileEffect: f,
                            selectedProfileEffectRef: S,
                            purchasedProfileEffects: n,
                            previewEffects: a,
                            onSelect: O,
                            onClose: o
                        }), (0, i.jsx)(T.default, {
                            user: t,
                            canApplySelectedChange: I,
                            pendingProfileEffectRecord: _
                        })]
                    }), (0, i.jsx)(N, {
                        onApply: () => {
                            (0, p.setNewPendingProfileEffectID)(f, c), o()
                        },
                        onClose: o,
                        canApplySelectedChange: I,
                        disableApplyButton: C
                    })]
                })
            }

            function F(e) {
                var t;
                let {
                    transitionState: n,
                    analyticsLocations: o,
                    initialSelectedEffectID: p,
                    onClose: h
                } = e, {
                    isFetching: T,
                    categories: m,
                    purchases: A
                } = (0, E.default)(), N = (0, s.useStateFromStores)([I.default], () => I.default.getCurrentUser()), {
                    AnalyticsLocationProvider: F,
                    analyticsLocations: R
                } = (0, c.default)(o, u.default.EDIT_PROFILE_EFFECT_MODAL), [P, L] = r.useMemo(() => {
                    let e = (0, f.groupProfileEffects)(m, A);
                    return [e.purchased, e.shopPreviews]
                }, [m, A]), v = (0, _.default)(null !== (t = null == N ? void 0 : N.id) && void 0 !== t ? t : ""), y = null == v ? void 0 : v.profileEffectID;
                return r.useEffect(() => {
                    S.default.track(C.AnalyticEvents.OPEN_MODAL, {
                        type: C.AnalyticsSections.PROFILE_EFFECT_CUSTOMIZATION,
                        location_stack: R
                    })
                }, [R]), r.useEffect(() => () => {
                    (0, d.setCollectiblesCategoryItemsViewed)({
                        categories: [...m.values()],
                        itemTypes: [a.CollectiblesItemType.PROFILE_EFFECT]
                    })
                }, [m]), null == N ? null : (0, i.jsx)(F, {
                    children: (0, i.jsx)(l.ModalRoot, {
                        transitionState: n,
                        size: l.ModalSize.DYNAMIC,
                        className: g.modal,
                        children: T ? (0, i.jsx)(l.Spinner, {
                            className: g.spinner,
                            type: l.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, i.jsx)(O, {
                            user: N,
                            purchasedProfileEffects: P,
                            previewEffects: L,
                            initialSelectedProfileEffectID: p,
                            currentSavedEffectID: y,
                            onClose: h
                        })
                    })
                })
            }
        },
        717262: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                a = n("77078"),
                s = n("152584"),
                l = n("853987"),
                o = n("775416"),
                u = n("805172"),
                c = n("884351"),
                d = n("184900"),
                f = n("783142"),
                E = n("217513"),
                p = n("915639"),
                _ = n("845579"),
                h = n("415167"),
                I = n("790618");
            n("550515");
            var S = n("719923"),
                T = n("782340"),
                m = n("146252");
            let C = e => {
                var t;
                let {
                    effectIsOwned: n,
                    pendingProfileEffectRecord: s,
                    userIsPremium: c
                } = e, d = (0, r.useStateFromStores)([o.default], () => o.default.getPurchase(null == s ? void 0 : s.skuId)), f = (0, r.useStateFromStores)([l.default], () => l.default.getProduct(null == s ? void 0 : s.skuId)), E = (0, r.useStateFromStores)([p.default], () => p.default.locale), {
                    shopForAllEnabled: _
                } = (0, u.default)({
                    location: "ProfileEffectPreview"
                }), h = c || _ ? T.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM : T.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE;
                return null != s ? (0, i.jsx)("div", {
                    className: n ? m.effectDescriptionNoGradient : m.effectDescriptionBorderWithGradient,
                    children: (0, i.jsxs)("div", {
                        className: m.effectDescriptionContainer,
                        children: [(0, i.jsx)(a.Text, {
                            color: "header-primary",
                            variant: "text-sm/semibold",
                            className: m.effectName,
                            children: null !== (t = null == d ? void 0 : d.name) && void 0 !== t ? t : null == f ? void 0 : f.name
                        }), (0, i.jsx)(a.Text, {
                            color: "text-normal",
                            variant: "text-sm/normal",
                            className: m.effectDescription,
                            children: null != d ? d.summary : h
                        }), null != d && (0, i.jsx)(a.Text, {
                            variant: "text-xxs/normal",
                            color: "text-muted",
                            className: m.effectPurchasedAt,
                            children: T.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                date: d.purchasedAt.toLocaleDateString(E, {
                                    month: "long",
                                    year: "numeric"
                                })
                            })
                        })]
                    })
                }) : null
            };
            var A = e => {
                var t;
                let {
                    user: n,
                    pendingProfileEffectRecord: a,
                    canApplySelectedChange: l
                } = e, {
                    pendingAvatar: o,
                    pendingBanner: u,
                    pendingBio: p,
                    pendingPronouns: T,
                    pendingGlobalName: A,
                    pendingAccentColor: g,
                    pendingAvatarDecoration: N,
                    pendingThemeColors: O
                } = (0, r.useStateFromStoresObject)([I.default], () => {
                    let e = I.default.getAllPending(),
                        t = I.default.getErrors();
                    return {
                        ...e,
                        errors: t
                    }
                }), F = S.default.isPremium(n), R = (0, E.default)(n.id), P = !!(null == R ? void 0 : R.getPreviewBio(p).value), L = _.UseLegacyChatInput.useSetting(), v = L && null != p ? c.default.parse(void 0, p).content : p, y = S.default.canUsePremiumProfileCustomization(n), M = (null == R ? void 0 : R.canUsePremiumProfileCustomization) || y, U = {
                    user: n,
                    canUsePremiumCustomization: y,
                    onUpsellClick: h.default,
                    onAvatarChange: s.setPendingAvatar,
                    onBannerChange: f.setPendingBanner,
                    pendingBanner: u,
                    pendingBio: v,
                    pendingPronouns: T,
                    pendingAvatar: o,
                    pendingGlobalName: A,
                    pendingAvatarDecoration: N,
                    pendingThemeColors: O,
                    pendingAccentColor: g,
                    pendingProfileEffectID: null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : null,
                    hideFakeActivity: P
                };
                return (0, i.jsxs)("div", {
                    className: M ? m.previewContainerWithTheme : m.previewContainerWithoutTheme,
                    children: [(0, i.jsx)(d.default, {
                        ...U,
                        disabledInputs: !0,
                        forProfileEffectModal: !0
                    }), !1, (0, i.jsx)(C, {
                        effectIsOwned: l,
                        pendingProfileEffectRecord: a,
                        userIsPremium: F
                    })]
                })
            }
        },
        598854: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var i, r, a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                o = n.n(l),
                u = n("506838"),
                c = n("171210"),
                d = n("65597"),
                f = n("77078"),
                E = n("54239"),
                p = n("426497"),
                _ = n("805172"),
                h = n("743826"),
                I = n("468759"),
                S = n("600785"),
                T = n("956089"),
                m = n("719923"),
                C = n("845962"),
                A = n("49111"),
                g = n("782340"),
                N = n("361451"),
                O = n("513002");
            (i = r || (r = {}))[i.PURCHASED = 0] = "PURCHASED", i[i.PREVIEW = 1] = "PREVIEW";
            let F = () => 80,
                R = e => {
                    let {
                        children: t,
                        isSelected: n = !1,
                        ...i
                    } = e;
                    return (0, a.jsx)(f.Clickable, {
                        className: o(N.effectGridItem, {
                            [N.selected]: n
                        }),
                        ...i,
                        onClick: i.onSelect,
                        children: t
                    })
                },
                P = e => {
                    var t;
                    let {
                        profileEffect: n,
                        innerRef: i,
                        section: l,
                        isSelected: o,
                        ...u
                    } = e, f = (0, d.default)([C.default], () => C.default.getProfileEffectById(n.id)), E = (0, d.default)([p.default], () => p.default.isItemViewed(n)), _ = s.useRef(null), {
                        accessibilityLabel: h,
                        thumbnailPreviewSrc: I,
                        title: m
                    } = null !== (t = null == f ? void 0 : f.config) && void 0 !== t ? t : {}, [A, F] = s.useState(o);
                    return s.useEffect(() => {
                        o && F(!0)
                    }, [o]), (0, a.jsxs)(R, {
                        innerRef: null != i ? i : _,
                        isSelected: o,
                        ...u,
                        children: [(0, a.jsx)("img", {
                            src: O,
                            alt: h,
                            className: N.presetEffectBackground
                        }), (0, a.jsx)("img", {
                            className: N.presetEffectImg,
                            src: I,
                            alt: m
                        }), (() => {
                            let e = l === r.PURCHASED;
                            if (e) return null;
                            let t = !E && !o && !A;
                            return t ? (0, a.jsx)(T.PremiumBadge, {
                                className: N.newBadge,
                                text: (0, a.jsxs)("div", {
                                    className: N.newBadgeText,
                                    children: [(0, a.jsx)(S.default, {
                                        width: 12,
                                        height: 12
                                    }), g.default.Messages.NEW]
                                })
                            }) : (0, a.jsx)(T.IconBadge, {
                                icon: () => (0, a.jsx)(S.default, {
                                    width: 12,
                                    height: 12
                                }),
                                color: c.default.BACKGROUND_ACCENT,
                                className: N.lockBadge
                            })
                        })()]
                    })
                },
                L = {
                    id: -2
                },
                v = {
                    id: -1
                };
            var y = e => {
                var t;
                let {
                    user: n,
                    pendingProfileEffect: i,
                    selectedProfileEffectRef: l,
                    purchasedProfileEffects: o,
                    previewEffects: c,
                    onSelect: d,
                    onClose: p
                } = e, S = () => {
                    p(), (0, E.pushLayer)(A.Layers.COLLECTIBLES_SHOP)
                }, T = m.default.canUsePremiumProfileCustomization(n), C = o.length > 0, {
                    shopForAllEnabled: O
                } = (0, _.default)({
                    location: "ProfileEffectSelection"
                }), y = 0 === c.length, M = s.useMemo(() => {
                    let e = {
                            section: r.PURCHASED,
                            items: [L, v, ...o],
                            header: g.default.Messages.PROFILE_EFFECT_MODAL_PURCHASES_HEADER
                        },
                        t = {
                            section: r.PREVIEW,
                            items: c,
                            header: g.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
                        },
                        n = !!C || T || O;
                    return y ? [e] : n ? [e, t] : [t]
                }, [o, c, T, C, y, O]), U = null != i;
                return (0, a.jsx)("section", {
                    children: (0, a.jsx)(f.MasonryList, {
                        fade: !0,
                        itemGutter: 12,
                        sectionGutter: 16,
                        paddingVertical: 0,
                        paddingHorizontal: 12,
                        className: N.list,
                        columns: 3,
                        sections: M.map(e => {
                            let {
                                items: t
                            } = e;
                            return t.length
                        }),
                        renderItem: (e, t, n, r) => {
                            let {
                                section: s,
                                items: o
                            } = M[e];
                            return (0, u.match)(o[t]).with(L, () => (0, a.jsxs)(R, {
                                style: {
                                    ...n
                                },
                                isSelected: !U,
                                onSelect: () => d(null),
                                children: [(0, a.jsx)(I.default, {
                                    className: N.notAllowedIcon
                                }), (0, a.jsx)(f.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: g.default.Messages.NONE
                                })]
                            }, r)).with(v, () => (0, a.jsxs)(R, {
                                style: n,
                                onSelect: S,
                                children: [(0, a.jsx)(h.default, {
                                    className: N.shopIcon
                                }), (0, a.jsx)(f.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: g.default.Messages.COLLECTIBLES_SHOP
                                })]
                            }, r)).otherwise(e => {
                                let t = i === e.id;
                                return (0, a.jsx)(P, {
                                    style: {
                                        ...n
                                    },
                                    section: s,
                                    profileEffect: e,
                                    innerRef: t ? l : void 0,
                                    isSelected: t,
                                    onSelect: () => d(e.id)
                                }, r)
                            })
                        },
                        renderSection: e => {
                            let {
                                header: t
                            } = M[e];
                            return (0, a.jsx)("div", {
                                style: {
                                    height: "".concat(16, "px")
                                },
                                children: (0, a.jsx)(f.FormTitle, {
                                    children: t
                                })
                            })
                        },
                        getSectionHeight: () => 16,
                        getItemKey: (e, n) => {
                            var i;
                            return null !== (t = null === (i = M[e].items[n]) || void 0 === i ? void 0 : i.id) && void 0 !== t ? t : null
                        },
                        getItemHeight: F,
                        removeEdgeItemGutters: !0
                    })
                })
            }
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("49111");

            function r(e) {
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
                    return a
                },
                UserProfileTypes: function() {
                    return s
                },
                getBadgeAsset: function() {
                    return o
                }
            });
            var i, r, a, s, l = n("49111");

            function o(e) {
                let {
                    API_ENDPOINT: t,
                    CDN_HOST: n
                } = window.GLOBAL_ENV;
                return null != n ? "".concat(location.protocol, "//").concat(n, "/badge-icons/").concat(e, ".png") : "".concat(location.protocol).concat(t).concat(l.Endpoints.BADGE_ICON(e))
            }(i = a || (a = {})).USER_INFO = "USER_INFO", i.USER_INFO_CONNECTIONS = "USER_INFO_CONNECTIONS", i.ACTIVITY = "ACTIVITY", i.MUTUAL_GUILDS = "MUTUAL_GUILDS", i.MUTUAL_FRIENDS = "MUTUAL_FRIENDS", i.BOT_DATA_ACCESS = "BOT_DATA_ACCESS", (r = s || (s = {})).POPOUT = "POPOUT", r.MODAL = "MODAL", r.SETTINGS = "SETTINGS", r.PANEL = "PANEL", r.CARD = "CARD", r.POMELO_POPOUT = "POMELO_POPOUT", r.CANCEL_MODAL = "CANCEL_MODAL"
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
                r = n("327037"),
                a = n("697218"),
                s = n("506885"),
                l = n("49111");

            function o(e) {
                let {
                    userId: t,
                    section: n,
                    guildId: o = l.ME,
                    channelId: u,
                    friendToken: c,
                    autoFocusNote: d,
                    analyticsLocation: f
                } = e, E = a.default.getUser(t), p = o !== l.ME ? o : void 0;
                if (null == E) return (0, r.fetchProfile)(t, {
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
                (0, s.default)(t, E.getAvatarURL(void 0, 80), {
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
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("49111");

            function s() {
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("920067").then(n.bind(n, "920067"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        source: {
                            page: a.AnalyticsPages.USER_SETTINGS,
                            section: a.AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE,
                            object: a.AnalyticsObjects.BUTTON_CTA,
                            type: a.AnalyticsObjectTypes.BUY
                        }
                    })
                })
            }
        },
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("666038");
            class r extends i.default {
                toString() {
                    return this.name
                }
                constructor(e) {
                    super(), this.id = e.id, this.type = e.type, this.name = e.name, this.revoked = e.revoked || !1, this.integrations = e.integrations || [], this.visibility = e.visibility || 0, this.friendSync = e.friend_sync || !1, this.showActivity = e.show_activity || !1, this.verified = e.verified || !1, this.accessToken = e.access_token || null, this.twoWayLink = e.two_way_link || !1, this.metadata = e.metadata || null, this.metadataVisibility = e.metadata_visibility || 0
                }
            }
        },
        522308: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("666038");
            class r extends i.default {
                static createFromServer(e, t) {
                    return new r({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: t
                    })
                }
                isOnCooldown() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                }
                isAvailable() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                }
                constructor(e) {
                    super(), this.id = e.id, this.subscriptionId = e.subscriptionId, this.premiumGuildSubscription = e.premiumGuildSubscription, this.canceled = e.canceled, this.cooldownEndsAt = e.cooldownEndsAt, this.subscription = e.subscription
                }
            }
            var a = r
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("866227"),
                r = n.n(i),
                a = n("666038");
            class s extends a.default {
                static createFromServer(e) {
                    var t;
                    return new s({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: r(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = r(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = r(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("446674"),
                r = n("913144"),
                a = n("619340"),
                s = n("376556"),
                l = n("450205"),
                o = n("813006"),
                u = n("49111");
            let c = new Set([u.PlatformTypes.CONTACTS]),
                d = !0,
                f = [],
                E = [],
                p = {},
                _ = {},
                h = e => {
                    f = e.filter(e => !c.has(e.type) && s.default.isSupported(e.type)), E = e.filter(e => c.has(e.type)), d = !1
                };
            class I extends i.default.Store {
                isJoining(e) {
                    return p[e] || !1
                }
                isFetching() {
                    return d
                }
                getAccounts() {
                    return f
                }
                getLocalAccounts() {
                    return E
                }
                getAccount(e, t) {
                    return f.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return E.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return _[e] || !1
                }
            }
            I.displayName = "ConnectedAccountsStore";
            var S = new I(r.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new l.default(e));
                    h(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new l.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new o.default(e.guild)
                            }))
                        }));
                        h(t)
                    } else a.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    p[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: i,
                        accessToken: r
                    } = e, a = f.find(e => e.id === n && e.type === t);
                    if (null == a) return !1;
                    null != i && (a.revoked = i), null != r && (a.accessToken = r)
                }
            })
        },
        778588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                r = n("913144");
            let a = [];

            function s() {
                a = []
            }
            class l extends i.default.Store {
                hasLayers() {
                    return a.length > 0
                }
                getLayers() {
                    return a
                }
            }
            l.displayName = "LayerStore";
            var o = new l(r.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (a.indexOf(t) >= 0) return !1;
                    a = [...a, t]
                },
                LAYER_POP: function() {
                    if (0 === a.length) return !1;
                    a = a.slice(0, -1)
                },
                LAYER_POP_ALL: s,
                LOGOUT: s,
                NOTIFICATION_CLICK: s
            })
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return l
                }
            });
            var i = n("884691"),
                r = n("446674"),
                a = n("244201"),
                s = n("471671");

            function l() {
                let {
                    windowId: e
                } = i.useContext(a.default);
                return (0, r.useStateFromStores)([s.default], () => s.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("817736"),
                r = n("118810");
            let a = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class s {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let n = (0, i.findDOMNode)(e);
                    (0, r.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = a) {
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
                r = n("748820"),
                a = n("157590");
            let s = (0, r.v4)(),
                l = new Map,
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
                    t ? l.has(t) ? this.elementId = l.get(t) || "" : l.set(t, (0, r.v4)()) : this.elementId = s;
                    let u = this.getVisibilityObserverId();
                    !o.has(u) && o.set(u, new a.default({
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
                    return r.default
                }
            }), n("6268");
            var i = n("157590"),
                r = n("235855")
        }
    }
]);