(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["65097"], {
        668973: function(e, t, n) {
            "use strict";
            e.exports = n.p + "18517b33da6ed36b855b.svg"
        },
        124036: function(e, t, n) {
            "use strict";
            e.exports = n.p + "2304725db3c96705e901.svg"
        },
        721569: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b21a7b48a6e973958489.svg"
        },
        644286: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5ff8ffaa3831478d2a28.svg"
        },
        597346: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4ba6811c2bcb626963c6.svg"
        },
        380499: function(e, t, n) {
            "use strict";
            e.exports = n.p + "20c942338703af7dccd1.svg"
        },
        50617: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d18655651bd838408129.svg"
        },
        972094: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5f5e1a58ecf11d0d8d15.svg"
        },
        92729: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f5710b460ce933c9abe8.svg"
        },
        335e3: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f5c7b6adf73fe335fa05.svg"
        },
        302872: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4fd94b2e62b94b0454d3.svg"
        },
        425914: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5b74fc90eac76055a5ad.svg"
        },
        272477: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d994d2093d7d1924be78.svg"
        },
        164059: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e9b67e80d0033605e8f4.svg"
        },
        653240: function(e, t, n) {
            "use strict";
            e.exports = n.p + "baa5b6db50bb89d55668.svg"
        },
        540758: function(e, t, n) {
            "use strict";
            e.exports = n.p + "abb37025036befe38e64.svg"
        },
        251472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserEntitlementsForApplication: function() {
                    return u
                },
                fetchUserEntitlements: function() {
                    return l
                },
                fetchGiftableEntitlements: function() {
                    return o
                }
            });
            var i = n("872717"),
                r = n("913144"),
                a = n("271560"),
                s = n("49111");

            function u(e) {
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
            async function l(e) {
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
            async function o() {
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
                    return u
                },
                clearError: function() {
                    return l
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

            function u(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function l() {
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
                    return _
                }
            });
            var i = n("872717"),
                r = n("913144"),
                a = n("333805"),
                s = n("160299"),
                u = n("745279"),
                l = n("850068"),
                o = n("49111"),
                c = n("646718");
            async function d(e, t, n, c, d) {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let a = {
                            url: o.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        u = {};
                    null != t && (u.country_code = t), null != n && (u.payment_source_id = n), null != c && (u.include_unpublished = c), null != d && (u.revenue_surface = d), a.query = u, !s.default.ipCountryCodeLoaded && await (0, l.fetchIpCountryCode)();
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
                    }), (0, u.captureBillingException)(t), new a.default(t)
                }
            }

            function f(e, t) {
                return Promise.all(e.filter(e => e !== c.PremiumSubscriptionSKUs.NONE).map(e => d(e, t)))
            }

            function E(e, t, n) {
                return Promise.all(c.ACTIVE_PREMIUM_SKUS.filter(e => e !== c.PremiumSubscriptionSKUs.NONE).map(i => d(i, e, t, void 0, n)))
            }

            function _() {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
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
        862013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID: function() {
                    return a
                },
                MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID: function() {
                    return s
                },
                MESSAGE_REACTIONS_LABEL_SEGMENT_ID: function() {
                    return u
                },
                IMAGE_OPEN_DIALOG_DESCRIPTION: function() {
                    return l
                },
                insertAccessibilityLabelElements: function() {
                    return o
                }
            });
            var i = n("476765"),
                r = n("782340");
            let a = (0, i.uid)(),
                s = (0, i.uid)(),
                u = (0, i.uid)(),
                l = (0, i.uid)();

            function o() {
                [{
                    id: a,
                    text: ","
                }, {
                    id: s,
                    text: ","
                }, {
                    id: u,
                    text: r.default.Messages.REACTIONS
                }, {
                    id: l,
                    text: r.default.Messages.OPEN_ORIGIANL_IMAGE_BUTTON_A11Y_DESCRIPTION
                }].forEach(e => {
                    let {
                        id: t,
                        text: n
                    } = e, i = document.getElementById(t);
                    null == i && ((i = document.createElement("div")).setAttribute("id", t), i.innerText = n, i.style.display = "none", document.body.appendChild(i))
                })
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
        791050: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var i = n("37983"),
                r = n("884691"),
                a = n("265586"),
                s = n("446674"),
                u = n("77078"),
                l = n("812204"),
                o = n("685665"),
                c = n("21526"),
                d = n("805172"),
                f = n("491232"),
                E = n("984002"),
                _ = n("235898"),
                p = n("170313"),
                S = n("635956"),
                m = n("91653"),
                T = n("697218"),
                I = n("599110"),
                h = n("719923"),
                A = n("234251"),
                C = n("659117"),
                P = n("765221"),
                g = n("49111"),
                N = n("646718"),
                R = n("782340"),
                O = n("705057");

            function v(e) {
                let {
                    user: t,
                    categories: n,
                    analyticsLocations: a,
                    onClose: s,
                    initialSelectedDecoration: o,
                    isTryItOutFlow: _
                } = e, {
                    pendingAvatarDecoration: T,
                    setPendingAvatarDecoration: I
                } = (0, m.default)({
                    analyticsLocations: a,
                    isTryItOut: _
                }), [g, v] = r.useState(() => {
                    var e;
                    if (null != o) return o;
                    if (void 0 !== T) return T;
                    if ((null == t ? void 0 : t.avatarDecoration) == null || 0 === n.size) return null;
                    let i = (0, f.getAvatarDecorationsFromCategories)(n);
                    return null !== (e = i.find(e => (0, A.isEqualAvatarDecoration)(e, t.avatarDecoration))) && void 0 !== e ? e : null
                }), {
                    category: L,
                    purchase: b
                } = (0, E.default)(null == g ? void 0 : g.skuId), M = h.default.canUseCollectibles(t), U = r.useRef(null), y = (0, p.default)(a), {
                    shopForAllEnabled: x
                } = (0, d.default)({
                    location: "AvatarDecorationModal"
                }), D = (0, A.isEqualAvatarDecoration)(g, void 0 === T ? null == t ? void 0 : t.avatarDecoration : T), F = () => {
                    I(g), s()
                }, w = () => {
                    s(), (0, c.openCollectiblesShop)({
                        analyticsLocations: a,
                        analyticsSource: l.default.EDIT_AVATAR_DECORATION_MODAL
                    })
                };
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(u.ModalHeader, {
                        separator: !1,
                        className: O.modalHeader,
                        children: [(0, i.jsx)("div", {
                            className: O.modalHeadings,
                            children: (0, i.jsx)(u.HeadingLevel, {
                                component: (0, i.jsx)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: R.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
                                }),
                                children: !M && !x && (0, i.jsx)(u.Heading, {
                                    variant: "text-sm/normal",
                                    children: R.default.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_HEADER_STARTER_DESC
                                })
                            })
                        }), (0, i.jsx)(u.ModalCloseButton, {
                            className: O.modalCloseButton,
                            onClick: s
                        })]
                    }), (0, i.jsxs)(u.ModalContent, {
                        className: O.modalContent,
                        scrollbarType: "none",
                        children: [(0, i.jsx)(P.default, {
                            user: t,
                            pendingAvatarDecoration: g,
                            selectedAvatarDecorationRef: U,
                            onSelect: e => {
                                v(e), null != e && y(e)
                            },
                            onOpenShop: w
                        }), (0, i.jsx)(C.default, {
                            className: O.modalPreview,
                            user: t,
                            avatarDecorationOverride: g
                        })]
                    }), (0, i.jsxs)(u.ModalFooter, {
                        className: O.modalFooter,
                        children: [(() => {
                            let e = null != b && (!(0, f.isPremiumCollectiblesPurchase)(b) || M);
                            if (e || null === g) return (0, i.jsx)(u.Button, {
                                onClick: F,
                                disabled: D,
                                children: R.default.Messages.AVATAR_DECORATION_MODAL_APPLY
                            });
                            let n = M || !(0, f.isPremiumCollectiblesCategory)(L);
                            return n ? (0, i.jsx)(u.Button, {
                                className: O.modalFooterShopButton,
                                onClick: w,
                                children: R.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                            }) : (0, i.jsx)(S.default, {
                                subscriptionTier: N.PremiumSubscriptionSKUs.TIER_2,
                                buttonText: h.default.isPremium(t) ? R.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : R.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                            })
                        })(), (0, i.jsx)(u.Button, {
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: s,
                            children: R.default.Messages.CANCEL
                        })]
                    })]
                })
            }

            function L(e) {
                let {
                    transitionState: t,
                    analyticsLocations: n,
                    onClose: d,
                    initialSelectedDecoration: f,
                    isTryItOutFlow: E
                } = e, p = (0, s.useStateFromStores)([T.default], () => T.default.getCurrentUser()), {
                    AnalyticsLocationProvider: S,
                    analyticsLocations: m
                } = (0, o.default)(n, l.default.EDIT_AVATAR_DECORATION_MODAL), {
                    categories: h,
                    purchases: A,
                    isFetchingCategories: C,
                    isFetchingPurchases: P
                } = (0, _.default)(), N = C || P && 0 === A.size;
                return r.useEffect(() => {
                    I.default.track(g.AnalyticEvents.OPEN_MODAL, {
                        type: "Edit Avatar Decoration Modal",
                        location_stack: m
                    })
                }, [m]), r.useEffect(() => () => {
                    (0, c.setCollectiblesCategoryItemsViewed)({
                        categories: [...h.values()],
                        itemTypes: [a.CollectiblesItemType.AVATAR_DECORATION]
                    })
                }, [h]), null == p ? null : (0, i.jsx)(S, {
                    children: (0, i.jsx)(u.ModalRoot, {
                        transitionState: t,
                        className: O.modal,
                        size: N ? u.ModalSize.DYNAMIC : u.ModalSize.MEDIUM,
                        children: N ? (0, i.jsx)(u.Spinner, {
                            className: O.spinner,
                            type: u.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, i.jsx)(v, {
                            user: p,
                            categories: h,
                            analyticsLocations: m,
                            initialSelectedDecoration: f,
                            onClose: d,
                            isTryItOutFlow: E
                        })
                    })
                })
            }
        },
        659117: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                s = n("506838"),
                u = n("446674"),
                l = n("77078"),
                o = n("805172"),
                c = n("491232"),
                d = n("984002"),
                f = n("716120"),
                E = n("915639"),
                _ = n("824563"),
                p = n("719923"),
                S = n("795158"),
                m = n("782340"),
                T = n("632000");
            let I = [{
                    avatarSize: l.AvatarSizes.SIZE_40,
                    showStatus: !1
                }, {
                    avatarSize: l.AvatarSizes.SIZE_32,
                    showStatus: !1
                }, {
                    avatarSize: l.AvatarSizes.SIZE_40,
                    showStatus: !0
                }, {
                    avatarSize: l.AvatarSizes.SIZE_32,
                    showStatus: !0
                }],
                h = e => {
                    let {
                        purchase: t
                    } = e, n = (0, u.useStateFromStores)([E.default], () => E.default.locale), r = (0, c.isPremiumCollectiblesPurchase)(t);
                    return (0, i.jsxs)("div", {
                        className: T.purchaseInfo,
                        children: [(0, i.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            color: "header-primary",
                            children: t.name
                        }), (0, i.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: t.summary
                        }), (0, i.jsxs)(l.Text, {
                            variant: "text-xxs/normal",
                            color: "text-muted",
                            children: [m.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                date: t.purchasedAt.toLocaleDateString(n, {
                                    month: "long",
                                    year: "numeric"
                                })
                            }), r && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("br", {}), m.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
                            })]
                        })]
                    })
                };
            var A = e => {
                let {
                    user: t,
                    avatarDecorationOverride: n,
                    className: r
                } = e, E = (0, u.useStateFromStores)([_.default], () => _.default.getStatus(t.id)), {
                    category: A,
                    product: C,
                    purchase: P
                } = (0, d.default)(null == n ? void 0 : n.skuId), g = p.default.canUseCollectibles(t), N = (0, c.isPremiumCollectiblesPurchase)(P), R = (0, c.isPremiumCollectiblesCategory)(A), {
                    shopForAllEnabled: O
                } = (0, o.default)({
                    location: "AvatarDecorationModalPreview"
                }), v = !g && N;
                return null != C && (null == P || v) ? (0, i.jsxs)("div", {
                    className: a(T.modalPreview, T.shopPreviewContainer, r),
                    children: [(0, i.jsx)(f.default, {
                        asset: null == A ? void 0 : A.banner,
                        className: T.shopPreviewBanner,
                        children: (0, i.jsx)(S.default, {
                            user: t,
                            avatarDecorationOverride: n
                        })
                    }), (0, i.jsxs)("div", {
                        className: T.shopPreviewTextContainer,
                        children: [(0, i.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            children: C.name
                        }), (0, i.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: v ? m.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, s.match)([R, g]).with([!0, !0], () => m.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM).with([!0, !1], () => m.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER).with([!1, !0], () => m.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM).with([!1, !1], () => O ? m.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM : m.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE).exhaustive()
                        })]
                    })]
                }) : (0, i.jsxs)("div", {
                    className: a(T.modalPreview, r),
                    children: [(0, i.jsxs)("div", {
                        className: T.previewSections,
                        children: [(0, i.jsx)("div", {
                            className: T.decorationPreview,
                            children: (0, i.jsx)(S.default, {
                                user: t,
                                avatarDecorationOverride: n
                            })
                        }), (0, i.jsx)("div", {
                            className: T.smallDecorationPreviewsContainer,
                            children: I.map(e => {
                                let {
                                    avatarSize: r,
                                    showStatus: a
                                } = e;
                                return (0, i.jsx)("div", {
                                    className: T.smallDecorationPreview,
                                    children: (0, i.jsx)(S.default, {
                                        user: t,
                                        avatarSize: r,
                                        avatarDecorationOverride: n,
                                        status: a ? E : void 0,
                                        "aria-hidden": !0
                                    })
                                }, "".concat(r).concat(a))
                            })
                        })]
                    }), null != P && (0, i.jsx)(h, {
                        purchase: P
                    })]
                })
            }
        },
        795158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("106435"),
                s = n("50885"),
                u = n("782340");
            let l = s.default.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;
            var o = e => {
                let {
                    user: t,
                    avatarDecorationOverride: n,
                    status: s,
                    avatarSize: o = r.AvatarSizes.SIZE_120,
                    "aria-hidden": c = !1
                } = e, {
                    avatarDecorationSrc: d,
                    avatarSrc: f,
                    eventHandlers: E
                } = (0, a.default)({
                    user: t,
                    size: o,
                    showPending: !0,
                    avatarDecorationOverride: n
                });
                return (0, i.jsx)(l, {
                    avatarDecoration: d,
                    src: f,
                    size: o,
                    status: s,
                    "aria-label": c ? void 0 : u.default.Messages.USER_SETTINGS_AVATAR,
                    "aria-hidden": c,
                    ...E
                })
            }
        },
        765221: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var i = n("37983"),
                r = n("884691"),
                a = n("414456"),
                s = n.n(a),
                u = n("506838"),
                l = n("171210"),
                o = n("65597"),
                c = n("77078"),
                d = n("252744"),
                f = n("853987"),
                E = n("426497"),
                _ = n("491232"),
                p = n("743826"),
                S = n("216422"),
                m = n("468759"),
                T = n("600785"),
                I = n("956089"),
                h = n("719923"),
                A = n("643070"),
                C = n("688318"),
                P = n("782340"),
                g = n("654353");
            let N = () => 80,
                R = e => {
                    let {
                        children: t,
                        className: n,
                        onSelect: r,
                        isSelected: a = !1,
                        ...u
                    } = e;
                    return (0, i.jsx)(c.Clickable, {
                        className: s(g.decorationGridItem, a ? g.selected : void 0, n),
                        ...u,
                        onClick: r,
                        children: t
                    })
                },
                O = e => {
                    let {
                        user: t,
                        avatarDecoration: n,
                        innerRef: a,
                        section: s,
                        isSelected: u = !1,
                        ...c
                    } = e, p = (0, o.default)([f.default], () => {
                        let e = f.default.getCategoryForProduct(n.skuId);
                        return (0, _.isPremiumCollectiblesCategory)(e)
                    }), m = (0, o.default)([E.default], () => E.default.isItemViewed(n)), N = h.default.canUseCollectibles(t), O = s === A.Section.PREMIUM_PURCHASE && !N, [v, L] = r.useState(u);
                    r.useEffect(() => {
                        u && L(!0)
                    }, [u]);
                    let b = r.useRef(null),
                        M = (0, d.default)(null != a ? a : b),
                        {
                            avatarDecorationSrc: U
                        } = (0, C.default)({
                            user: t,
                            avatarDecorationOverride: n,
                            size: 80,
                            animateOnHover: !M
                        });
                    return (0, i.jsxs)(R, {
                        className: O ? g.decorationGridItemChurned : void 0,
                        innerRef: null != a ? a : b,
                        isSelected: u,
                        ...c,
                        children: [(0, i.jsx)("img", {
                            className: g.presetDecorationImg,
                            src: U,
                            alt: n.label
                        }), (() => {
                            let e = s === A.Section.PURCHASE || s === A.Section.PREMIUM_PURCHASE && N;
                            if (e) return null;
                            let t = !m && !u && !v;
                            return t ? (0, i.jsx)(I.PremiumBadge, {
                                className: g.newBadge,
                                text: (0, i.jsxs)("div", {
                                    className: g.newBadgeText,
                                    children: [(0, i.jsx)(T.default, {
                                        width: 12,
                                        height: 12
                                    }), P.default.Messages.NEW]
                                })
                            }) : (0, i.jsx)(I.IconBadge, {
                                icon: p ? () => (0, i.jsx)(S.default, {
                                    width: 14,
                                    height: 14
                                }) : () => (0, i.jsx)(T.default, {
                                    width: 12,
                                    height: 12
                                }),
                                color: l.default.BACKGROUND_ACCENT,
                                className: g.iconBadge
                            })
                        })()]
                    })
                };
            var v = e => {
                let {
                    user: t,
                    pendingAvatarDecoration: n,
                    selectedAvatarDecorationRef: r,
                    onSelect: a,
                    onOpenShop: s
                } = e, l = (0, A.default)();
                return (0, i.jsx)(c.MasonryList, {
                    fade: !0,
                    className: g.list,
                    columns: 3,
                    sections: l.map(e => {
                        let {
                            items: t
                        } = e;
                        return t.length
                    }),
                    sectionGutter: 16,
                    itemGutter: 12,
                    paddingHorizontal: 12,
                    paddingVertical: 0,
                    removeEdgeItemGutters: !0,
                    renderItem: (e, o, d, f) => {
                        let {
                            section: E,
                            items: _
                        } = l[e];
                        return (0, u.match)(_[o]).with(A.NONE_ITEM, () => (0, i.jsxs)(R, {
                            style: {
                                ...d
                            },
                            isSelected: null === n,
                            onSelect: () => a(null),
                            children: [(0, i.jsx)(m.default, {
                                className: g.notAllowedIcon
                            }), (0, i.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "header-primary",
                                children: P.default.Messages.NONE
                            })]
                        }, f)).with(A.SHOP_ITEM, () => (0, i.jsxs)(R, {
                            style: d,
                            onSelect: s,
                            children: [(0, i.jsx)(p.default, {
                                className: g.shopIcon
                            }), (0, i.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "header-primary",
                                children: P.default.Messages.COLLECTIBLES_SHOP
                            })]
                        }, f)).otherwise(e => {
                            let s = (null == n ? void 0 : n.id) === e.id;
                            return (0, i.jsx)(O, {
                                style: {
                                    ...d
                                },
                                user: t,
                                avatarDecoration: e,
                                section: E,
                                innerRef: s ? r : void 0,
                                isSelected: s,
                                onSelect: () => a(e)
                            }, f)
                        })
                    },
                    renderSection: e => {
                        let {
                            header: t
                        } = l[e];
                        return (0, i.jsx)("div", {
                            className: g.headings,
                            children: (0, i.jsx)(c.HeadingLevel, {
                                forceLevel: 5,
                                children: (0, i.jsx)(c.Heading, {
                                    variant: "eyebrow",
                                    color: "header-secondary",
                                    children: t
                                })
                            })
                        })
                    },
                    getSectionHeight: e => l[e].height,
                    getItemKey: (e, t) => l[e].items[t].id,
                    getItemHeight: N
                })
            }
        },
        643070: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Section: function() {
                    return r
                },
                NONE_ITEM: function() {
                    return p
                },
                SHOP_ITEM: function() {
                    return S
                },
                default: function() {
                    return m
                }
            });
            var i, r, a = n("884691"),
                s = n("917351"),
                u = n("65597"),
                l = n("853987"),
                o = n("775416"),
                c = n("805172"),
                d = n("491232"),
                f = n("697218"),
                E = n("719923"),
                _ = n("782340");
            (i = r || (r = {})).PURCHASE = "purchase", i.PREMIUM_PURCHASE = "premium_purchase", i.PREVIEW = "preview", i.PREMIUM_PREVIEW = "premium_preview";
            let p = {
                    id: "None"
                },
                S = {
                    id: "Shop"
                };
            var m = () => {
                let e = (0, u.default)([f.default], () => f.default.getCurrentUser()),
                    t = E.default.canUseCollectibles(e),
                    {
                        shopForAllEnabled: n
                    } = (0, c.default)({
                        location: "useAvatarDecorationSections"
                    }),
                    i = (0, u.default)([o.default], () => o.default.purchases),
                    [m, T] = (0, u.useStateFromStoresArray)([l.default], () => [l.default.categories, l.default.categorySkuIdsByProductSkuId]);
                return (0, a.useMemo)(() => {
                    let e = (0, s.uniqBy)([...(0, d.getAvatarDecorationsFromPurchases)(i), ...(0, d.getAvatarDecorationsFromCategories)(m)], "id"),
                        a = e.reduce((e, n) => {
                            let r = i.get(n.skuId),
                                a = (0, d.isPremiumCollectiblesPurchase)(r);
                            if (a && 0 === e.premium_purchase.length && (e.premium_purchase = e.premium_preview, e.premium_preview = []), a) return e.premium_purchase.push(n), e;
                            if (null != r) return e.purchase.push(n), e;
                            let s = m.get(T[n.skuId]);
                            if (!t && (0, d.isPremiumCollectiblesCategory)(s)) {
                                let t = e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview;
                                return t.push(n), e
                            }
                            return e.preview.push(n), e
                        }, {
                            purchase: [],
                            premium_purchase: [],
                            preview: [],
                            premium_preview: []
                        }),
                        u = !!t || !!n || a.purchase.length > 0;
                    return [{
                        section: r.PURCHASE,
                        items: u ? [p, S, ...a.purchase] : [],
                        height: 12,
                        header: _.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
                    }, {
                        section: a.premium_purchase.length > 0 ? r.PREMIUM_PURCHASE : r.PREMIUM_PREVIEW,
                        items: a.premium_purchase.length > 0 ? a.premium_purchase : a.premium_preview,
                        height: 12,
                        header: _.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
                    }, {
                        section: r.PREVIEW,
                        items: a.preview,
                        height: 12,
                        header: _.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
                    }].filter(e => {
                        let {
                            items: t
                        } = e;
                        return t.length > 0
                    })
                }, [m, i, T, t, n])
            }
        },
        619935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useBlockedPaymentsConfig: function() {
                    return u
                },
                default: function() {
                    return l
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

            function u() {
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
            var l = a
        },
        563775: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-10_collectibles_falloween",
                label: "Collectibles Shop Falloween Content Drop",
                defaultConfig: {
                    canUseFalloweenAvatarDecorations: !1,
                    canUseFalloweenProfileEffects: !1
                },
                treatments: [{
                    id: 1,
                    label: "Collectibles Falloween Avatar Decorations",
                    config: {
                        canUseFalloweenAvatarDecorations: !0,
                        canUseFalloweenProfileEffects: !1
                    }
                }, {
                    id: 2,
                    label: "Collectibles Falloween Avatar Decorations & Profile Effects",
                    config: {
                        canUseFalloweenAvatarDecorations: !0,
                        canUseFalloweenProfileEffects: !0
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
        984002: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("65597"),
                r = n("853987"),
                a = n("775416"),
                s = e => {
                    let [t, n] = (0, i.useStateFromStoresArray)([r.default], () => [r.default.getCategoryForProduct(e), r.default.getProduct(e)]), s = (0, i.default)([a.default], () => a.default.getPurchase(e));
                    return {
                        category: t,
                        product: n,
                        purchase: s
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
                u = n("853987"),
                l = n("563775"),
                o = n("775416");

            function c() {
                var e;
                let t = "useFetchCollectiblesCategoriesAndPurchases";
                (0, a.useTriggerDebuggingAA)({
                    location: t + " auto on",
                    autoTrackExposure: !0
                }), (0, a.useTriggerDebuggingAA)({
                    location: t + " auto off",
                    autoTrackExposure: !1
                }), (0, l.default)({
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
                    }), (0, l.default)({
                        location: t
                    });
                    let [n, o, c, d] = (0, r.useStateFromStoresArray)([u.default], () => [u.default.isFetching, u.default.error, null !== (e = u.default.lastFetched) && void 0 !== e ? e : 0, u.default.categories]);
                    return (0, i.useEffect)(() => {
                        !(n || o || Date.now() - c < 6e5) && (0, s.fetchCollectiblesCategories)()
                    }, [n, c, o]), {
                        isFetching: n,
                        categories: d,
                        error: o
                    }
                }(), {
                    isClaiming: f,
                    fetchError: E,
                    claimError: _,
                    isFetching: p,
                    purchases: S
                } = function() {
                    let e = "useFetchPurchases";
                    (0, a.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, a.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    }), (0, l.default)({
                        location: e
                    });
                    let [t, n, u, c, d] = (0, r.useStateFromStoresArray)([o.default], () => [o.default.isFetching, o.default.isClaiming, o.default.fetchError, o.default.claimError, o.default.purchases]);
                    return (0, i.useEffect)(() => {
                        (0, s.fetchCollectiblesPurchases)()
                    }, []), {
                        isClaiming: n,
                        fetchError: u,
                        claimError: c,
                        isFetching: t,
                        purchases: d
                    }
                }(), m = null !== (e = null != d ? d : E) && void 0 !== e ? e : _;
                return {
                    isFetching: n || p,
                    isFetchingCategories: n,
                    isFetchingPurchases: p,
                    isClaiming: f,
                    categories: c,
                    purchases: S,
                    error: m
                }
            }
        },
        716120: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                s = n("65597"),
                u = n("854588"),
                l = n("206230"),
                o = n("284679"),
                c = n("491232"),
                d = n("408381"),
                f = n("268779"),
                E = e => {
                    let {
                        asset: t,
                        size: n = d.MAX_CONTENT_WIDTH,
                        className: r,
                        style: E,
                        children: _
                    } = e, p = (0, s.default)([l.default], () => l.default.saturation);
                    return (0, i.jsx)("div", {
                        className: a(f.banner, r),
                        style: (() => {
                            if (null == t) return E;
                            let e = (0, c.getCollectiblesAssetURL)(t, {
                                size: n,
                                format: "jpg"
                            });
                            if (1 === p) return {
                                ...E,
                                backgroundImage: "url(".concat(e, ")"),
                                backgroundSize: "cover"
                            };
                            let i = (0, o.hexOpacityToRgba)(u.default.unsafe_rawColors.BLACK_500, 1 - p);
                            return {
                                ...E,
                                backgroundImage: "linear-gradient(".concat(i, ", ").concat(i, "), url(").concat(e, ")"),
                                backgroundBlendMode: "saturation",
                                backgroundSize: "cover"
                            }
                        })(),
                        children: _
                    })
                }
        },
        408381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_CONTENT_WIDTH: function() {
                    return i
                },
                getLogoSize: function() {
                    return r
                },
                getBackgroundGradient: function() {
                    return a
                }
            });
            let i = 1060,
                r = e => 3.8 * e,
                a = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        {
                            primary: n,
                            secondary: i
                        } = e;
                    return "linear-gradient(".concat(t, "deg, ").concat(n.toHslString(), ", ").concat(i.toHslString(), ")")
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
                u = n("55689"),
                l = n("855133"),
                o = n("599110"),
                c = n("659500"),
                d = n("49111"),
                f = n("646718");

            function E(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: _,
                    onComplete: p,
                    onSubscriptionConfirmation: S,
                    analyticsLocations: m,
                    analyticsObject: T,
                    analyticsLocation: I,
                    analyticsSourceLocation: h,
                    isGift: A = !1,
                    giftMessage: C,
                    subscriptionTier: P,
                    trialId: g,
                    postSuccessGuild: N,
                    openInvoiceId: R,
                    applicationId: O,
                    referralTrialOfferId: v,
                    giftRecipient: L,
                    returnRef: b
                } = null != e ? e : {}, M = !1, U = (0, r.v4)();
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
                            loadId: U,
                            subscriptionTier: P,
                            skuId: P,
                            isGift: A,
                            giftMessage: C,
                            giftRecipient: L,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                r(), null == _ || _(e), e && (null == S || S())
                            },
                            onComplete: () => {
                                M = !0, null == p || p(), !A && ((0, l.setIsPersistentHelperHidden)(!0), (0, l.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: S,
                            analyticsLocations: m,
                            analyticsObject: T,
                            analyticsLocation: I,
                            analyticsSourceLocation: h,
                            trialId: g,
                            postSuccessGuild: N,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: R,
                            applicationId: O,
                            referralTrialOfferId: v,
                            returnRef: b
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !M && o.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: U,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != I ? I : T,
                            source: h,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: A,
                            eligible_for_trial: null != g,
                            application_id: O,
                            location_stack: m
                        }), (0, s.clearError)(), (0, u.clearPurchaseTokenAuthState)(), null == _ || _(M), M && (!A && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == S || S())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        626301: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                navigateToPremiumMarketingPage: function() {
                    return a
                }
            });
            var i = n("79112"),
                r = n("49111");
            let a = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                i.default.open(r.UserSettingsSections.PREMIUM, null, {
                    openWithoutBackstack: e
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
                    return u
                },
                setIsPersistentHelperHidden: function() {
                    return l
                },
                setNavigatedFromHelper: function() {
                    return o
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
                u = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                l = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                o = e => {
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
                    return u
                }
            }), (a = i || (i = {}))[a.DEFAULT = 0] = "DEFAULT", a[a.WINTER = 1] = "WINTER", (s = r || (r = {}))[s.SNOWGLOBE = 1] = "SNOWGLOBE", s[s.BOX = 2] = "BOX", s[s.CUP = 3] = "CUP", s[s.STANDARD_BOX = 4] = "STANDARD_BOX", s[s.CAKE = 5] = "CAKE", s[s.CHEST = 6] = "CHEST", s[s.COFFEE = 7] = "COFFEE";
            let u = Object.freeze({
                IS_BLOCKED_IOS: 32,
                IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64,
                SUPPRESS_NOTIFICATION: 128
            })
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return _
                },
                maybeFetchPremiumLikelihood: function() {
                    return S
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return m
                }
            });
            var i = n("884691"),
                r = n("65597"),
                a = n("872717"),
                s = n("913144"),
                u = n("775433"),
                l = n("697218"),
                o = n("10514"),
                c = n("764364"),
                d = n("676572"),
                f = n("646718"),
                E = n("49111");
            let _ = "nonSubscriber";
            async function p() {
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
                                [_]: e.non_subscriber,
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

            function S(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = d.default.shouldFetchPremiumLikelihood(), r = l.default.getCurrentUser();
                T(r, i, t, n)
            }

            function m(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), a = (0, r.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), s = (0, r.default)([l.default], () => l.default.getCurrentUser());
                i.useEffect(() => {
                    T(s, a, t, n)
                }, [s, a, t, n])
            }

            function T(e, t, n, i) {
                null != e && !(0, c.isPremium)(e) && n && (t && p(), i && (!o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, u.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, u.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
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
            class u extends i.default.Store {
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
            u.displayName = "UserPremiumLikelihoodStore";
            var l = new u(r.default, {
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
                u = n("271938"),
                l = n("160299"),
                o = n("357957");

            function c() {
                let e = (0, r.useStateFromStores)([o.default], () => o.default.getDefaultBillingCountryCode()),
                    t = (0, r.useStateFromStores)([l.default], () => l.default.ipCountryCode),
                    n = (0, r.useStateFromStores)([u.default], () => u.default.isAuthenticated());
                return i.useEffect(() => {
                    a.default.wait(() => {
                        n && !l.default.isPaymentSourceFetching && !o.default.hasFetchedPaymentSources && s.fetchPaymentSources()
                    })
                }, [n]), i.useEffect(() => {
                    n && !l.default.ipCountryCodeLoaded && s.fetchIpCountryCode()
                }, [t, n]), {
                    defaultBillingCountryCode: e,
                    ipCountryCode: t
                }
            }
        },
        154889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                discountOfferHasTier: function() {
                    return d
                },
                usePremiumDiscountOffer: function() {
                    return f
                }
            });
            var i = n("884691"),
                r = n("446674"),
                a = n("862337"),
                s = n("697218"),
                u = n("340412"),
                l = n("719923"),
                o = n("646718");

            function c(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function d(e, t) {
                var n;
                if (null == e) return !1;
                let i = new Set(null === (n = e.discount) || void 0 === n ? void 0 : n.plan_ids.map(e => o.SubscriptionPlanInfo[e].skuId));
                return i.has(t)
            }

            function f() {
                let e = (0, r.useStateFromStores)([u.default], () => u.default.getUserDiscount(o.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID)),
                    [t, n] = i.useState(c(e)),
                    d = (0, r.useStateFromStores)([s.default], () => (0, l.isPremium)(s.default.getCurrentUser()));
                return i.useEffect(() => {
                    if (null == e || null == e.expires_at) return;
                    let i = new a.Timeout,
                        r = () => {
                            let a = null != e.expires_at ? Date.parse(e.expires_at) - Date.now() : 0;
                            null == i || i.start(a, () => {
                                !t && c(e) ? n(!0) : r()
                            })
                        };
                    return r(), () => i.stop()
                }, [t, e]), t || d ? null : e
            }
        },
        635956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                s = n("446674"),
                u = n("77078"),
                l = n("79112"),
                o = n("685665"),
                c = n("788506"),
                d = n("649844"),
                f = n("393414"),
                E = n("797647"),
                _ = n("697218"),
                p = n("521012"),
                S = n("471671"),
                m = n("181114"),
                T = n("978679"),
                I = n("216422"),
                h = n("719923"),
                A = n("646718"),
                C = n("49111"),
                P = n("782340"),
                g = n("683437"),
                N = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: r,
                        onClick: N,
                        size: R,
                        className: O,
                        trialId: v,
                        isTrialCTA: L,
                        buttonText: b,
                        buttonTextClassName: M,
                        postSuccessGuild: U,
                        onSubscribeModalClose: y,
                        premiumModalAnalyticsLocation: x,
                        showIcon: D = !0,
                        disableShine: F,
                        applicationId: w,
                        giftMessage: B,
                        overrideDisabledButtonText: H,
                        shinyButtonClassName: k,
                        ...G
                    } = e, j = (0, s.useStateFromStores)([_.default], () => _.default.getCurrentUser()), K = (0, s.useStateFromStores)([S.default], () => S.default.isFocused()), z = (0, s.useStateFromStores)([p.default], () => p.default.getPremiumTypeSubscription()), {
                        analyticsLocations: V
                    } = (0, o.default)(), W = e => {
                        if (e.preventDefault(), null == j) {
                            (0, f.transitionTo)(C.Routes.LOGIN);
                            return
                        }
                        if (null == N || N(e), (null == z ? void 0 : z.status) === C.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, c.trackPremiumSettingsPaneOpened)(), l.default.open(C.UserSettingsSections.PREMIUM), null == y || y(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: r,
                                isGift: a,
                                subscriptionTier: s,
                                trialId: l,
                                postSuccessGuild: o,
                                onSubscribeModalClose: c,
                                analyticsLocations: f,
                                premiumModalAnalyticsLocation: E,
                                applicationId: _,
                                giftMessage: p
                            } = e;
                            if (!t) {
                                (0, u.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("984599").then(n.bind(n, "984599"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...r
                                        } = t;
                                        return (0, i.jsx)(e, {
                                            ...r,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            if (!r) {
                                (0, u.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("899917").then(n.bind(n, "899917"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...r
                                        } = t;
                                        return (0, i.jsx)(e, {
                                            ...r,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            let S = C.AnalyticsObjectTypes.BUY;
                            null != l ? S = C.AnalyticsObjectTypes.TRIAL : a && (S = C.AnalyticsObjectTypes.GIFT), (0, d.default)({
                                isGift: a,
                                initialPlanId: null,
                                subscriptionTier: s,
                                analyticsLocations: f,
                                analyticsObject: {
                                    object: C.AnalyticsObjects.BUTTON_CTA,
                                    objectType: S,
                                    ...E
                                },
                                trialId: l,
                                postSuccessGuild: o,
                                onClose: c,
                                applicationId: _,
                                giftMessage: p
                            })
                        }({
                            isClaimed: j.isClaimed(),
                            isVerified: j.verified,
                            isGift: t,
                            subscriptionTier: r,
                            trialId: v,
                            postSuccessGuild: U,
                            onSubscribeModalClose: y,
                            analyticsLocations: V,
                            premiumModalAnalyticsLocation: x,
                            applicationId: w,
                            giftMessage: B
                        })
                    };
                    if (L) return (0, i.jsxs)(u.Button, {
                        size: R,
                        className: O,
                        innerClassName: g.premiumSubscribeButton,
                        look: u.Button.Looks.INVERTED,
                        onClick: W,
                        ...G,
                        children: [D && (0, i.jsx)(I.default, {
                            className: g.premiumIcon
                        }), (0, i.jsx)("span", {
                            className: a(g.buttonText, M),
                            children: null != b ? b : P.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, i.jsxs)(u.Button, {
                        size: R,
                        className: O,
                        innerClassName: g.giftButton,
                        color: u.Button.Colors.PRIMARY,
                        onClick: W,
                        ...G,
                        children: [(0, i.jsx)(T.default, {
                            className: g.giftIcon
                        }), (0, i.jsx)("span", {
                            className: a(g.buttonText, M),
                            children: null != b ? b : P.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let Y = P.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        q = null != z ? (0, h.getPremiumPlanItem)(z) : null,
                        X = null != q ? h.default.getPremiumType(q.planId) : null == j ? void 0 : j.premiumType,
                        Z = r === A.PremiumSubscriptionSKUs.TIER_2 && null != X && [A.PremiumTypes.TIER_0, A.PremiumTypes.TIER_1].includes(X);
                    Z && (Y = P.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let Q = null != z && z.status !== C.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, E.isNoneSubscription)(z.planId) && !Z,
                        J = Q ? null != H ? H : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: n
                            } = e, i = null, r = null;
                            if (null != t && t !== A.PremiumSubscriptionSKUs.LEGACY && t !== A.PremiumSubscriptionSKUs.TIER_0 && t !== A.PremiumSubscriptionSKUs.TIER_1 && t !== A.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: i,
                                disabledButtonTooltipText: r
                            };
                            let a = null != t ? A.PremiumSubscriptionSKUToPremiumType[t] : null,
                                s = null != a ? A.PremiumTypeOrder[a] : null,
                                u = null != n ? A.PremiumTypeOrder[n] : null;
                            return null != u && null != s && s < u ? (i = P.default.Messages.APPLICATION_STORE_GET_PREMIUM, r = P.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != a && null != n && a === n ? (i = P.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, r = P.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == a && null != n && n === A.PremiumTypes.TIER_2 && (r = P.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: i,
                                disabledButtonTooltipText: r
                            }
                        }({
                            ctaSubscriptionSkuId: r,
                            currentPremiumType: X
                        }) : null;

                    function $(e) {
                        var t, n;
                        return (0, i.jsxs)(m.default, {
                            disabled: Q,
                            onClick: W,
                            innerClassName: g.premiumSubscribeButton,
                            color: r === A.PremiumSubscriptionSKUs.TIER_1 ? u.Button.Colors.PRIMARY : u.Button.Colors.GREEN,
                            size: R,
                            className: k,
                            wrapperClassName: O,
                            pauseAnimation: !K || F,
                            ...G,
                            ...e,
                            children: [D && (0, i.jsx)(I.default, {
                                className: g.premiumIcon
                            }), (0, i.jsx)("span", {
                                className: a(g.buttonText, M),
                                children: null !== (n = null !== (t = null == J ? void 0 : J.disabledButtonText) && void 0 !== t ? t : b) && void 0 !== n ? n : Y
                            })]
                        })
                    }
                    return (null == J ? void 0 : J.disabledButtonTooltipText) != null ? (0, i.jsx)(u.Tooltip, {
                        text: J.disabledButtonTooltipText,
                        children: $
                    }) : $()
                }
        },
        504439: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                thumbHashToRGBA: function() {
                    return r
                }
            });
            var i = n("723251");

            function r(e) {
                let {
                    detail: t = 1,
                    pop: n = 1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    PI: r,
                    min: a,
                    max: s,
                    cos: u,
                    round: l
                } = Math, o = e[0] | e[1] << 8 | e[2] << 16, c = e[3] | e[4] << 8, d = (63 & o) / 63, f = (o >> 6 & 63) / 31.5 - 1, E = (o >> 12 & 63) / 31.5 - 1, _ = o >> 23, p = (c >> 3 & 63) / 63, S = (c >> 9 & 63) / 63, m = c >> 15, T = s(3, m ? _ ? 5 : 7 : 7 & c), I = s(3, m ? 7 & c : _ ? 5 : 7), h = _ ? (15 & e[5]) / 15 : 1, A = (e[5] >> 4) / 15, C = _ ? 6 : 5, P = 0, g = (t, n, i) => {
                    let r = [];
                    for (let a = 0; a < n; a++)
                        for (let s = a ? 0 : 1; s * n < t * (n - a); s++) r.push(((e[C + (P >> 1)] >> ((1 & P++) << 2) & 15) / 7.5 - 1) * i);
                    return r
                }, N = g(T, I, (o >> 18 & 31) / 31 / 2), R = g(3, 3, p * n), O = g(3, 3, S * n), v = _ ? g(5, 5, A) : [], L = (0, i.thumbHashToApproximateAspectRatio)(e), b = l(L > 1 ? 32 : 32 * L), M = l(L > 1 ? 32 / L : 32), U = new Uint8Array(b * M * 4), y = [], x = [];
                for (let e = 0, n = 0; e < M; e++)
                    for (let i = 0; i < b; i++, n += 4) {
                        let l = d,
                            o = f,
                            c = E,
                            p = h;
                        for (let e = 0, t = s(T, _ ? 5 : 3); e < t; e++) y[e] = u(r / b * (i + .5) * e);
                        for (let t = 0, n = s(I, _ ? 5 : 3); t < n; t++) x[t] = u(r / M * (e + .5) * t);
                        for (let e = 0, n = 0; e < I; e++)
                            for (let i = e ? 0 : 1, r = 2 * x[e]; i * I < T * (I - e); i++, n++) !(i > t) && !(e > t) && (l += N[n] * y[i] * r);
                        for (let e = 0, t = 0; e < 3; e++)
                            for (let n = e ? 0 : 1, i = 2 * x[e]; n < 3 - e; n++, t++) {
                                let e = y[n] * i;
                                o += R[t] * e, c += O[t] * e
                            }
                        if (_)
                            for (let e = 0, t = 0; e < 5; e++)
                                for (let n = e ? 0 : 1, i = 2 * x[e]; n < 5 - e; n++, t++) p += v[t] * y[n] * i;
                        let S = l - 2 / 3 * o,
                            m = (3 * l - S + c) / 2,
                            A = m - c;
                        U[n] = s(0, 255 * a(1, m)), U[n + 1] = s(0, 255 * a(1, A)), U[n + 2] = s(0, 255 * a(1, S)), U[n + 3] = s(0, 255 * a(1, p))
                    }
                return {
                    w: b,
                    h: M,
                    rgba: U
                }
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
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("446674"),
                r = n("913144"),
                a = n("619340"),
                s = n("376556"),
                u = n("450205"),
                l = n("813006"),
                o = n("49111");
            let c = new Set([o.PlatformTypes.CONTACTS]),
                d = !0,
                f = [],
                E = [],
                _ = {},
                p = {},
                S = e => {
                    f = e.filter(e => !c.has(e.type) && s.default.isSupported(e.type)), E = e.filter(e => c.has(e.type)), d = !1
                };
            class m extends i.default.Store {
                isJoining(e) {
                    return _[e] || !1
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
                    return p[e] || !1
                }
            }
            m.displayName = "ConnectedAccountsStore";
            var T = new m(r.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new u.default(e));
                    S(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new u.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new l.default(e.guild)
                            }))
                        }));
                        S(t)
                    } else a.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    _[e.integrationId] = e.joining
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
                    return l
                }
            });
            var i = n("446674"),
                r = n("913144");
            let a = [];

            function s() {
                a = []
            }
            class u extends i.default.Store {
                hasLayers() {
                    return a.length > 0
                }
                getLayers() {
                    return a
                }
            }
            u.displayName = "LayerStore";
            var l = new u(r.default, {
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
        }
    }
]);