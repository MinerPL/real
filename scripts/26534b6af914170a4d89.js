(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["65097"], {
        668973: function(e, t, r) {
            "use strict";
            e.exports = r.p + "18517b33da6ed36b855b.svg"
        },
        124036: function(e, t, r) {
            "use strict";
            e.exports = r.p + "2304725db3c96705e901.svg"
        },
        721569: function(e, t, r) {
            "use strict";
            e.exports = r.p + "b21a7b48a6e973958489.svg"
        },
        644286: function(e, t, r) {
            "use strict";
            e.exports = r.p + "5ff8ffaa3831478d2a28.svg"
        },
        597346: function(e, t, r) {
            "use strict";
            e.exports = r.p + "4ba6811c2bcb626963c6.svg"
        },
        380499: function(e, t, r) {
            "use strict";
            e.exports = r.p + "20c942338703af7dccd1.svg"
        },
        50617: function(e, t, r) {
            "use strict";
            e.exports = r.p + "d18655651bd838408129.svg"
        },
        972094: function(e, t, r) {
            "use strict";
            e.exports = r.p + "5f5e1a58ecf11d0d8d15.svg"
        },
        92729: function(e, t, r) {
            "use strict";
            e.exports = r.p + "f5710b460ce933c9abe8.svg"
        },
        335e3: function(e, t, r) {
            "use strict";
            e.exports = r.p + "f5c7b6adf73fe335fa05.svg"
        },
        302872: function(e, t, r) {
            "use strict";
            e.exports = r.p + "4fd94b2e62b94b0454d3.svg"
        },
        425914: function(e, t, r) {
            "use strict";
            e.exports = r.p + "5b74fc90eac76055a5ad.svg"
        },
        272477: function(e, t, r) {
            "use strict";
            e.exports = r.p + "d994d2093d7d1924be78.svg"
        },
        164059: function(e, t, r) {
            "use strict";
            e.exports = r.p + "e9b67e80d0033605e8f4.svg"
        },
        653240: function(e, t, r) {
            "use strict";
            e.exports = r.p + "baa5b6db50bb89d55668.svg"
        },
        540758: function(e, t, r) {
            "use strict";
            e.exports = r.p + "abb37025036befe38e64.svg"
        },
        251472: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
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
            var n = r("872717"),
                i = r("913144"),
                s = r("271560"),
                a = r("49111");

            function u(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return i.default.wait(() => {
                    i.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), n.default.get({
                    url: a.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
                    oldFormErrors: !0,
                    query: {
                        exclude_consumed: t
                    }
                }).then(t => (i.default.dispatch({
                    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                    applicationId: e,
                    entitlements: t.body
                }), t.body)).catch(() => {
                    i.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                        applicationId: e
                    })
                })
            }
            async function l(e) {
                let {
                    withSku: t = !1,
                    withApplication: r = !1,
                    entitlementType: s
                } = e;
                i.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let e = await n.default.get({
                        url: a.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: t,
                            with_application: r,
                            entitlement_type: s
                        }
                    });
                    i.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    i.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
                    })
                }
            }
            async function o() {
                i.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let e = await (0, s.httpGetWithCountryCodeQuery)({
                        url: a.Endpoints.ENTITLEMENTS_GIFTABLE
                    });
                    i.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    i.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
                    })
                }
            }
        },
        112679: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                updateStripePaymentRequest: function() {
                    return i
                },
                updateCardInfo: function() {
                    return s
                },
                clearCardInfo: function() {
                    return a
                },
                updateAddressInfo: function() {
                    return u
                },
                clearError: function() {
                    return l
                }
            });
            var n = r("913144");

            function i(e) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function s(e, t) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function a() {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function u(e, t) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function l() {
                n.default.wait(() => n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return i
                }
            });
            var n = r("913144");

            function i() {
                n.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        775433: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
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
            var n = r("872717"),
                i = r("913144"),
                s = r("333805"),
                a = r("160299"),
                u = r("745279"),
                l = r("850068"),
                o = r("49111"),
                c = r("646718");
            async function d(e, t, r, c, d) {
                i.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let s = {
                            url: o.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        u = {};
                    null != t && (u.country_code = t), null != r && (u.payment_source_id = r), null != c && (u.include_unpublished = c), null != d && (u.revenue_surface = d), s.query = u, !a.default.ipCountryCodeLoaded && await (0, l.fetchIpCountryCode)();
                    let f = await n.default.get(s);
                    i.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: f.body
                    })
                } catch (t) {
                    throw i.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, u.captureBillingException)(t), new s.default(t)
                }
            }

            function f(e, t) {
                return Promise.all(e.filter(e => e !== c.PremiumSubscriptionSKUs.NONE).map(e => d(e, t)))
            }

            function E(e, t, r) {
                return Promise.all(c.ACTIVE_PREMIUM_SKUS.filter(e => e !== c.PremiumSubscriptionSKUs.NONE).map(n => d(n, e, t, void 0, r)))
            }

            function _() {
                i.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        252744: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var n = r("884691");

            function i(e) {
                let [t, r] = (0, n.useState)(!1), i = (0, n.useRef)(e.current);
                return (0, n.useEffect)(() => {
                    i.current = e.current
                }, [e]), (0, n.useEffect)(() => {
                    let e = i.current;
                    if (null == e) return;
                    let t = () => r(!0),
                        n = () => r(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", n), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", n)
                    }
                }, [i]), t
            }
        },
        689988: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            }), r("704744");
            var n = r("913144");
            class i {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, r] = e;
                        n.default.subscribe(t, "function" == typeof r ? r : r.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, r] = e;
                        n.default.unsubscribe(t, "function" == typeof r ? r : r.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        862013: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID: function() {
                    return s
                },
                MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID: function() {
                    return a
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
            var n = r("476765"),
                i = r("782340");
            let s = (0, n.uid)(),
                a = (0, n.uid)(),
                u = (0, n.uid)(),
                l = (0, n.uid)();

            function o() {
                [{
                    id: s,
                    text: ","
                }, {
                    id: a,
                    text: ","
                }, {
                    id: u,
                    text: i.default.Messages.REACTIONS
                }, {
                    id: l,
                    text: i.default.Messages.OPEN_ORIGIANL_IMAGE_BUTTON_A11Y_DESCRIPTION
                }].forEach(e => {
                    let {
                        id: t,
                        text: r
                    } = e, n = document.getElementById(t);
                    null == n && ((n = document.createElement("div")).setAttribute("id", t), n.innerText = r, n.style.display = "none", document.body.appendChild(n))
                })
            }
        },
        988268: function(e, t, r) {
            "use strict";
            var n, i, s, a;
            r.r(t), r.d(t, {
                ApplicationTypes: function() {
                    return n
                },
                BotTagTypes: function() {
                    return i
                }
            }), (s = n || (n = {}))[s.GAME = 1] = "GAME", s[s.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", s[s.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (a = i || (i = {}))[a.BOT = 0] = "BOT", a[a.SERVER = 1] = "SERVER", a[a.SYSTEM_DM = 2] = "SYSTEM_DM", a[a.OFFICIAL = 3] = "OFFICIAL", a[a.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", a[a.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", a[a.AI = 6] = "AI", a[a.REMIX = 7] = "REMIX"
        },
        791050: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return L
                }
            });
            var n = r("37983"),
                i = r("884691"),
                s = r("265586"),
                a = r("446674"),
                u = r("77078"),
                l = r("812204"),
                o = r("685665"),
                c = r("21526"),
                d = r("805172"),
                f = r("491232"),
                E = r("984002"),
                _ = r("235898"),
                p = r("170313"),
                S = r("635956"),
                m = r("91653"),
                T = r("697218"),
                I = r("599110"),
                h = r("719923"),
                A = r("234251"),
                C = r("659117"),
                O = r("765221"),
                g = r("49111"),
                P = r("646718"),
                R = r("782340"),
                N = r("705057");

            function v(e) {
                let {
                    user: t,
                    categories: r,
                    analyticsLocations: s,
                    onClose: a,
                    initialSelectedDecoration: o,
                    isTryItOutFlow: _
                } = e, {
                    pendingAvatarDecoration: T,
                    setPendingAvatarDecoration: I
                } = (0, m.default)({
                    analyticsLocations: s,
                    isTryItOut: _
                }), [g, v] = i.useState(() => {
                    var e;
                    if (null != o) return o;
                    if (void 0 !== T) return T;
                    if ((null == t ? void 0 : t.avatarDecoration) == null || 0 === r.size) return null;
                    let n = (0, f.getAvatarDecorationsFromCategories)(r);
                    return null !== (e = n.find(e => (0, A.isEqualAvatarDecoration)(e, t.avatarDecoration))) && void 0 !== e ? e : null
                }), {
                    category: L,
                    purchase: U
                } = (0, E.default)(null == g ? void 0 : g.skuId), b = h.default.canUseCollectibles(t), M = i.useRef(null), y = (0, p.default)(s), {
                    shopForAllEnabled: D
                } = (0, d.default)({
                    location: "AvatarDecorationModal"
                }), x = (0, A.isEqualAvatarDecoration)(g, void 0 === T ? null == t ? void 0 : t.avatarDecoration : T), F = () => {
                    I(g), a()
                }, w = () => {
                    a(), (0, c.openCollectiblesShop)({
                        analyticsLocations: s,
                        analyticsSource: l.default.EDIT_AVATAR_DECORATION_MODAL
                    })
                };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(u.ModalHeader, {
                        separator: !1,
                        className: N.modalHeader,
                        children: [(0, n.jsx)("div", {
                            className: N.modalHeadings,
                            children: (0, n.jsx)(u.HeadingLevel, {
                                component: (0, n.jsx)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: R.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
                                }),
                                children: !b && !D && (0, n.jsx)(u.Heading, {
                                    variant: "text-sm/normal",
                                    children: R.default.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_HEADER_STARTER_DESC
                                })
                            })
                        }), (0, n.jsx)(u.ModalCloseButton, {
                            className: N.modalCloseButton,
                            onClick: a
                        })]
                    }), (0, n.jsxs)(u.ModalContent, {
                        className: N.modalContent,
                        scrollbarType: "none",
                        children: [(0, n.jsx)(O.default, {
                            user: t,
                            pendingAvatarDecoration: g,
                            selectedAvatarDecorationRef: M,
                            onSelect: e => {
                                v(e), null != e && y(e)
                            },
                            onOpenShop: w
                        }), (0, n.jsx)(C.default, {
                            className: N.modalPreview,
                            user: t,
                            avatarDecorationOverride: g
                        })]
                    }), (0, n.jsxs)(u.ModalFooter, {
                        className: N.modalFooter,
                        children: [(() => {
                            let e = null != U && (!(0, f.isPremiumCollectiblesPurchase)(U) || b);
                            if (e || null === g) return (0, n.jsx)(u.Button, {
                                onClick: F,
                                disabled: x,
                                children: R.default.Messages.AVATAR_DECORATION_MODAL_APPLY
                            });
                            let r = b || !(0, f.isPremiumCollectiblesCategory)(L);
                            return r ? (0, n.jsx)(u.Button, {
                                className: N.modalFooterShopButton,
                                onClick: w,
                                children: R.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                            }) : (0, n.jsx)(S.default, {
                                subscriptionTier: P.PremiumSubscriptionSKUs.TIER_2,
                                buttonText: h.default.isPremium(t) ? R.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : R.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                            })
                        })(), (0, n.jsx)(u.Button, {
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: a,
                            children: R.default.Messages.CANCEL
                        })]
                    })]
                })
            }

            function L(e) {
                let {
                    transitionState: t,
                    analyticsLocations: r,
                    onClose: d,
                    initialSelectedDecoration: f,
                    isTryItOutFlow: E
                } = e, p = (0, a.useStateFromStores)([T.default], () => T.default.getCurrentUser()), {
                    AnalyticsLocationProvider: S,
                    analyticsLocations: m
                } = (0, o.default)(r, l.default.EDIT_AVATAR_DECORATION_MODAL), {
                    categories: h,
                    purchases: A,
                    isFetchingCategories: C,
                    isFetchingPurchases: O
                } = (0, _.default)(), P = C || O && 0 === A.size;
                return i.useEffect(() => {
                    I.default.track(g.AnalyticEvents.OPEN_MODAL, {
                        type: "Edit Avatar Decoration Modal",
                        location_stack: m
                    })
                }, [m]), i.useEffect(() => () => {
                    (0, c.setCollectiblesCategoryItemsViewed)({
                        categories: [...h.values()],
                        itemTypes: [s.CollectiblesItemType.AVATAR_DECORATION]
                    })
                }, [h]), null == p ? null : (0, n.jsx)(S, {
                    children: (0, n.jsx)(u.ModalRoot, {
                        transitionState: t,
                        className: N.modal,
                        size: P ? u.ModalSize.DYNAMIC : u.ModalSize.MEDIUM,
                        children: P ? (0, n.jsx)(u.Spinner, {
                            className: N.spinner,
                            type: u.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, n.jsx)(v, {
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
        659117: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return A
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("414456"),
                s = r.n(i),
                a = r("506838"),
                u = r("446674"),
                l = r("77078"),
                o = r("805172"),
                c = r("491232"),
                d = r("984002"),
                f = r("716120"),
                E = r("915639"),
                _ = r("824563"),
                p = r("719923"),
                S = r("795158"),
                m = r("782340"),
                T = r("632000");
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
                    } = e, r = (0, u.useStateFromStores)([E.default], () => E.default.locale), i = (0, c.isPremiumCollectiblesPurchase)(t);
                    return (0, n.jsxs)("div", {
                        className: T.purchaseInfo,
                        children: [(0, n.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            color: "header-primary",
                            children: t.name
                        }), (0, n.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: t.summary
                        }), (0, n.jsxs)(l.Text, {
                            variant: "text-xxs/normal",
                            color: "text-muted",
                            children: [m.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                date: t.purchasedAt.toLocaleDateString(r, {
                                    month: "long",
                                    year: "numeric"
                                })
                            }), i && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("br", {}), m.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
                            })]
                        })]
                    })
                };
            var A = e => {
                let {
                    user: t,
                    avatarDecorationOverride: r,
                    className: i
                } = e, E = (0, u.useStateFromStores)([_.default], () => _.default.getStatus(t.id)), {
                    category: A,
                    product: C,
                    purchase: O
                } = (0, d.default)(null == r ? void 0 : r.skuId), g = p.default.canUseCollectibles(t), P = (0, c.isPremiumCollectiblesPurchase)(O), R = (0, c.isPremiumCollectiblesCategory)(A), {
                    shopForAllEnabled: N
                } = (0, o.default)({
                    location: "AvatarDecorationModalPreview"
                }), v = !g && P;
                return null != C && (null == O || v) ? (0, n.jsxs)("div", {
                    className: s(T.modalPreview, T.shopPreviewContainer, i),
                    children: [(0, n.jsx)(f.default, {
                        asset: null == A ? void 0 : A.banner,
                        className: T.shopPreviewBanner,
                        children: (0, n.jsx)(S.default, {
                            user: t,
                            avatarDecorationOverride: r
                        })
                    }), (0, n.jsxs)("div", {
                        className: T.shopPreviewTextContainer,
                        children: [(0, n.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            children: C.name
                        }), (0, n.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: v ? m.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, a.match)([R, g]).with([!0, !0], () => m.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM).with([!0, !1], () => m.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER).with([!1, !0], () => m.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM).with([!1, !1], () => N ? m.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM : m.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE).exhaustive()
                        })]
                    })]
                }) : (0, n.jsxs)("div", {
                    className: s(T.modalPreview, i),
                    children: [(0, n.jsxs)("div", {
                        className: T.previewSections,
                        children: [(0, n.jsx)("div", {
                            className: T.decorationPreview,
                            children: (0, n.jsx)(S.default, {
                                user: t,
                                avatarDecorationOverride: r
                            })
                        }), (0, n.jsx)("div", {
                            className: T.smallDecorationPreviewsContainer,
                            children: I.map(e => {
                                let {
                                    avatarSize: i,
                                    showStatus: s
                                } = e;
                                return (0, n.jsx)("div", {
                                    className: T.smallDecorationPreview,
                                    children: (0, n.jsx)(S.default, {
                                        user: t,
                                        avatarSize: i,
                                        avatarDecorationOverride: r,
                                        status: s ? E : void 0,
                                        "aria-hidden": !0
                                    })
                                }, "".concat(i).concat(s))
                            })
                        })]
                    }), null != O && (0, n.jsx)(h, {
                        purchase: O
                    })]
                })
            }
        },
        795158: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("77078"),
                s = r("106435"),
                a = r("50885"),
                u = r("782340");
            let l = a.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;
            var o = e => {
                let {
                    user: t,
                    avatarDecorationOverride: r,
                    status: a,
                    avatarSize: o = i.AvatarSizes.SIZE_120,
                    "aria-hidden": c = !1
                } = e, {
                    avatarDecorationSrc: d,
                    avatarSrc: f,
                    eventHandlers: E
                } = (0, s.default)({
                    user: t,
                    size: o,
                    showPending: !0,
                    avatarDecorationOverride: r
                });
                return (0, n.jsx)(l, {
                    avatarDecoration: d,
                    src: f,
                    size: o,
                    status: a,
                    "aria-label": c ? void 0 : u.default.Messages.USER_SETTINGS_AVATAR,
                    "aria-hidden": c,
                    ...E
                })
            }
        },
        765221: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return v
                }
            });
            var n = r("37983"),
                i = r("884691"),
                s = r("414456"),
                a = r.n(s),
                u = r("506838"),
                l = r("171210"),
                o = r("65597"),
                c = r("77078"),
                d = r("252744"),
                f = r("853987"),
                E = r("426497"),
                _ = r("491232"),
                p = r("743826"),
                S = r("216422"),
                m = r("468759"),
                T = r("600785"),
                I = r("956089"),
                h = r("719923"),
                A = r("643070"),
                C = r("688318"),
                O = r("782340"),
                g = r("654353");
            let P = () => 80,
                R = e => {
                    let {
                        children: t,
                        className: r,
                        onSelect: i,
                        isSelected: s = !1,
                        ...u
                    } = e;
                    return (0, n.jsx)(c.Clickable, {
                        className: a(g.decorationGridItem, s ? g.selected : void 0, r),
                        ...u,
                        onClick: i,
                        children: t
                    })
                },
                N = e => {
                    let {
                        user: t,
                        avatarDecoration: r,
                        innerRef: s,
                        section: a,
                        isSelected: u = !1,
                        ...c
                    } = e, p = (0, o.default)([f.default], () => {
                        let e = f.default.getCategoryForProduct(r.skuId);
                        return (0, _.isPremiumCollectiblesCategory)(e)
                    }), m = (0, o.default)([E.default], () => E.default.isItemViewed(r)), P = h.default.canUseCollectibles(t), N = a === A.Section.PREMIUM_PURCHASE && !P, [v, L] = i.useState(u);
                    i.useEffect(() => {
                        u && L(!0)
                    }, [u]);
                    let U = i.useRef(null),
                        b = (0, d.default)(null != s ? s : U),
                        {
                            avatarDecorationSrc: M
                        } = (0, C.default)({
                            user: t,
                            avatarDecorationOverride: r,
                            size: 80,
                            animateOnHover: !b
                        });
                    return (0, n.jsxs)(R, {
                        className: N ? g.decorationGridItemChurned : void 0,
                        innerRef: null != s ? s : U,
                        isSelected: u,
                        ...c,
                        children: [(0, n.jsx)("img", {
                            className: g.presetDecorationImg,
                            src: M,
                            alt: r.label
                        }), (() => {
                            let e = a === A.Section.PURCHASE || a === A.Section.PREMIUM_PURCHASE && P;
                            if (e) return null;
                            let t = !m && !u && !v;
                            return t ? (0, n.jsx)(I.PremiumBadge, {
                                className: g.newBadge,
                                text: (0, n.jsxs)("div", {
                                    className: g.newBadgeText,
                                    children: [(0, n.jsx)(T.default, {
                                        width: 12,
                                        height: 12
                                    }), O.default.Messages.NEW]
                                })
                            }) : (0, n.jsx)(I.IconBadge, {
                                icon: p ? () => (0, n.jsx)(S.default, {
                                    width: 14,
                                    height: 14
                                }) : () => (0, n.jsx)(T.default, {
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
                    pendingAvatarDecoration: r,
                    selectedAvatarDecorationRef: i,
                    onSelect: s,
                    onOpenShop: a
                } = e, l = (0, A.default)();
                return (0, n.jsx)(c.MasonryList, {
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
                        return (0, u.match)(_[o]).with(A.NONE_ITEM, () => (0, n.jsxs)(R, {
                            style: {
                                ...d
                            },
                            isSelected: null === r,
                            onSelect: () => s(null),
                            children: [(0, n.jsx)(m.default, {
                                className: g.notAllowedIcon
                            }), (0, n.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "header-primary",
                                children: O.default.Messages.NONE
                            })]
                        }, f)).with(A.SHOP_ITEM, () => (0, n.jsxs)(R, {
                            style: d,
                            onSelect: a,
                            children: [(0, n.jsx)(p.default, {
                                className: g.shopIcon
                            }), (0, n.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "header-primary",
                                children: O.default.Messages.COLLECTIBLES_SHOP
                            })]
                        }, f)).otherwise(e => {
                            let a = (null == r ? void 0 : r.id) === e.id;
                            return (0, n.jsx)(N, {
                                style: {
                                    ...d
                                },
                                user: t,
                                avatarDecoration: e,
                                section: E,
                                innerRef: a ? i : void 0,
                                isSelected: a,
                                onSelect: () => s(e)
                            }, f)
                        })
                    },
                    renderSection: e => {
                        let {
                            header: t
                        } = l[e];
                        return (0, n.jsx)("div", {
                            className: g.headings,
                            children: (0, n.jsx)(c.HeadingLevel, {
                                forceLevel: 5,
                                children: (0, n.jsx)(c.Heading, {
                                    variant: "eyebrow",
                                    color: "header-secondary",
                                    children: t
                                })
                            })
                        })
                    },
                    getSectionHeight: e => l[e].height,
                    getItemKey: (e, t) => l[e].items[t].id,
                    getItemHeight: P
                })
            }
        },
        643070: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Section: function() {
                    return i
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
            var n, i, s = r("884691"),
                a = r("917351"),
                u = r("65597"),
                l = r("853987"),
                o = r("775416"),
                c = r("805172"),
                d = r("491232"),
                f = r("697218"),
                E = r("719923"),
                _ = r("782340");
            (n = i || (i = {})).PURCHASE = "purchase", n.PREMIUM_PURCHASE = "premium_purchase", n.PREVIEW = "preview", n.PREMIUM_PREVIEW = "premium_preview";
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
                        shopForAllEnabled: r
                    } = (0, c.default)({
                        location: "useAvatarDecorationSections"
                    }),
                    n = (0, u.default)([o.default], () => o.default.purchases),
                    [m, T] = (0, u.useStateFromStoresArray)([l.default], () => [l.default.categories, l.default.categorySkuIdsByProductSkuId]);
                return (0, s.useMemo)(() => {
                    let e = (0, a.uniqBy)([...(0, d.getAvatarDecorationsFromPurchases)(n), ...(0, d.getAvatarDecorationsFromCategories)(m)], "id"),
                        s = e.reduce((e, r) => {
                            let i = n.get(r.skuId),
                                s = (0, d.isPremiumCollectiblesPurchase)(i);
                            if (s && 0 === e.premium_purchase.length && (e.premium_purchase = e.premium_preview, e.premium_preview = []), s) return e.premium_purchase.push(r), e;
                            if (null != i) return e.purchase.push(r), e;
                            let a = m.get(T[r.skuId]);
                            if (!t && (0, d.isPremiumCollectiblesCategory)(a)) {
                                let t = e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview;
                                return t.push(r), e
                            }
                            return e.preview.push(r), e
                        }, {
                            purchase: [],
                            premium_purchase: [],
                            preview: [],
                            premium_preview: []
                        }),
                        u = !!t || !!r || s.purchase.length > 0;
                    return [{
                        section: i.PURCHASE,
                        items: u ? [p, S, ...s.purchase] : [],
                        height: 12,
                        header: _.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
                    }, {
                        section: s.premium_purchase.length > 0 ? i.PREMIUM_PURCHASE : i.PREMIUM_PREVIEW,
                        items: s.premium_purchase.length > 0 ? s.premium_purchase : s.premium_preview,
                        height: 12,
                        header: _.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
                    }, {
                        section: i.PREVIEW,
                        items: s.preview,
                        height: 12,
                        header: _.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
                    }].filter(e => {
                        let {
                            items: t
                        } = e;
                        return t.length > 0
                    })
                }, [m, n, T, t, r])
            }
        },
        619935: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useBlockedPaymentsConfig: function() {
                    return u
                },
                default: function() {
                    return l
                }
            });
            var n = r("862205"),
                i = r("15733");
            let s = (0, n.createExperiment)({
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
                a = (0, n.createExperiment)({
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
                } = s.useExperiment({
                    location: "c519a9_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    checkPaymentSource: t
                } = a.useExperiment({
                    location: "c519a9_2"
                }, {
                    autoTrackExposure: !1
                }), {
                    defaultBillingCountryCode: r
                } = (0, i.default)();
                return e || t && "RU" === r
            }
            var l = s
        },
        563775: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            });
            var n = r("862205");
            let i = (0, n.createExperiment)({
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
            var s = e => {
                let {
                    location: t,
                    autoTrackExposure: r = !0,
                    trackExposureOptions: n = {}
                } = e;
                return i.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: r,
                    trackExposureOptions: n
                })
            }
        },
        805172: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            });
            var n = r("862205");
            let i = (0, n.createExperiment)({
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
            var s = e => {
                let {
                    location: t,
                    autoTrackExposure: r = !0,
                    trackExposureOptions: n = {}
                } = e;
                return i.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: r,
                    trackExposureOptions: n
                })
            }
        },
        984002: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var n = r("65597"),
                i = r("853987"),
                s = r("775416"),
                a = e => {
                    let [t, r] = (0, n.useStateFromStoresArray)([i.default], () => [i.default.getCategoryForProduct(e), i.default.getProduct(e)]), a = (0, n.default)([s.default], () => s.default.getPurchase(e));
                    return {
                        category: t,
                        product: r,
                        purchase: a
                    }
                }
        },
        235898: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return c
                }
            });
            var n = r("884691"),
                i = r("65597"),
                s = r("875212"),
                a = r("21526"),
                u = r("853987"),
                l = r("563775"),
                o = r("775416");

            function c() {
                var e;
                let t = "useFetchCollectiblesCategoriesAndPurchases";
                (0, s.useTriggerDebuggingAA)({
                    location: t + " auto on",
                    autoTrackExposure: !0
                }), (0, s.useTriggerDebuggingAA)({
                    location: t + " auto off",
                    autoTrackExposure: !1
                }), (0, l.default)({
                    location: t
                });
                let {
                    isFetching: r,
                    categories: c,
                    error: d
                } = function() {
                    var e;
                    let t = "useMaybeFetchCollectiblesCategories";
                    (0, s.useTriggerDebuggingAA)({
                        location: t + " auto on",
                        autoTrackExposure: !0
                    }), (0, s.useTriggerDebuggingAA)({
                        location: t + " auto off",
                        autoTrackExposure: !1
                    }), (0, l.default)({
                        location: t
                    });
                    let [r, o, c, d] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.isFetching, u.default.error, null !== (e = u.default.lastFetched) && void 0 !== e ? e : 0, u.default.categories]);
                    return (0, n.useEffect)(() => {
                        !(r || o || Date.now() - c < 6e5) && (0, a.fetchCollectiblesCategories)()
                    }, [r, c, o]), {
                        isFetching: r,
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
                    (0, s.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, s.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    }), (0, l.default)({
                        location: e
                    });
                    let [t, r, u, c, d] = (0, i.useStateFromStoresArray)([o.default], () => [o.default.isFetching, o.default.isClaiming, o.default.fetchError, o.default.claimError, o.default.purchases]);
                    return (0, n.useEffect)(() => {
                        (0, a.fetchCollectiblesPurchases)()
                    }, []), {
                        isClaiming: r,
                        fetchError: u,
                        claimError: c,
                        isFetching: t,
                        purchases: d
                    }
                }(), m = null !== (e = null != d ? d : E) && void 0 !== e ? e : _;
                return {
                    isFetching: r || p,
                    isFetchingCategories: r,
                    isFetchingPurchases: p,
                    isClaiming: f,
                    categories: c,
                    purchases: S,
                    error: m
                }
            }
        },
        716120: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return E
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("414456"),
                s = r.n(i),
                a = r("65597"),
                u = r("854588"),
                l = r("206230"),
                o = r("284679"),
                c = r("491232"),
                d = r("408381"),
                f = r("268779"),
                E = e => {
                    let {
                        asset: t,
                        size: r = d.MAX_CONTENT_WIDTH,
                        className: i,
                        style: E,
                        children: _
                    } = e, p = (0, a.default)([l.default], () => l.default.saturation);
                    return (0, n.jsx)("div", {
                        className: s(f.banner, i),
                        style: (() => {
                            if (null == t) return E;
                            let e = (0, c.getCollectiblesAssetURL)(t, {
                                size: r,
                                format: "jpg"
                            });
                            if (1 === p) return {
                                ...E,
                                backgroundImage: "url(".concat(e, ")"),
                                backgroundSize: "cover"
                            };
                            let n = (0, o.hexOpacityToRgba)(u.default.unsafe_rawColors.BLACK_500, 1 - p);
                            return {
                                ...E,
                                backgroundImage: "linear-gradient(".concat(n, ", ").concat(n, "), url(").concat(e, ")"),
                                backgroundBlendMode: "saturation",
                                backgroundSize: "cover"
                            }
                        })(),
                        children: _
                    })
                }
        },
        408381: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                MAX_CONTENT_WIDTH: function() {
                    return n
                },
                getLogoSize: function() {
                    return i
                },
                getBackgroundGradient: function() {
                    return s
                }
            });
            let n = 1060,
                i = e => 3.8 * e,
                s = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        {
                            primary: r,
                            secondary: n
                        } = e;
                    return "linear-gradient(".concat(t, "deg, ").concat(r.toHslString(), ", ").concat(n.toHslString(), ")")
                }
        },
        20606: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            });
            var n = r("171210").default
        },
        649844: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return E
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("748820"),
                s = r("77078"),
                a = r("112679"),
                u = r("55689"),
                l = r("855133"),
                o = r("599110"),
                c = r("659500"),
                d = r("49111"),
                f = r("646718");

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
                    subscriptionTier: O,
                    trialId: g,
                    postSuccessGuild: P,
                    openInvoiceId: R,
                    applicationId: N,
                    referralTrialOfferId: v,
                    giftRecipient: L,
                    returnRef: U
                } = null != e ? e : {}, b = !1, M = (0, i.v4)();
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await r.el("646139").then(r.bind(r, "646139"));
                    return r => {
                        let {
                            onClose: i,
                            ...s
                        } = r;
                        return (0, n.jsx)(e, {
                            ...s,
                            loadId: M,
                            subscriptionTier: O,
                            skuId: O,
                            isGift: A,
                            giftMessage: C,
                            giftRecipient: L,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                i(), null == _ || _(e), e && (null == S || S())
                            },
                            onComplete: () => {
                                b = !0, null == p || p(), !A && ((0, l.setIsPersistentHelperHidden)(!0), (0, l.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: S,
                            analyticsLocations: m,
                            analyticsObject: T,
                            analyticsLocation: I,
                            analyticsSourceLocation: h,
                            trialId: g,
                            postSuccessGuild: P,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: R,
                            applicationId: N,
                            referralTrialOfferId: v,
                            returnRef: U
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !b && o.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: M,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != I ? I : T,
                            source: h,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: A,
                            eligible_for_trial: null != g,
                            application_id: N,
                            location_stack: m
                        }), (0, a.clearError)(), (0, u.clearPurchaseTokenAuthState)(), null == _ || _(b), b && (!A && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == S || S())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        626301: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                navigateToPremiumMarketingPage: function() {
                    return s
                }
            });
            var n = r("79112"),
                i = r("49111");
            let s = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                n.default.open(i.UserSettingsSections.PREMIUM, null, {
                    openWithoutBackstack: e
                })
            }
        },
        855133: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                togglePersistentHelper: function() {
                    return i
                },
                setHasCompletedStep: function() {
                    return s
                },
                resetPremiumTutorialStore: function() {
                    return a
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
            var n = r("913144");
            let i = () => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                s = () => {
                    n.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                a = () => {
                    n.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                u = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                l = e => {
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
        78345: function(e, t, r) {
            "use strict";
            var n, i, s, a;
            r.r(t), r.d(t, {
                PremiumHeaderThemes: function() {
                    return n
                },
                PremiumGiftStyles: function() {
                    return i
                },
                PromotionFlags: function() {
                    return u
                }
            }), (s = n || (n = {}))[s.DEFAULT = 0] = "DEFAULT", s[s.WINTER = 1] = "WINTER", (a = i || (i = {}))[a.SNOWGLOBE = 1] = "SNOWGLOBE", a[a.BOX = 2] = "BOX", a[a.CUP = 3] = "CUP", a[a.STANDARD_BOX = 4] = "STANDARD_BOX", a[a.CAKE = 5] = "CAKE", a[a.CHEST = 6] = "CHEST", a[a.COFFEE = 7] = "COFFEE";
            let u = Object.freeze({
                IS_BLOCKED_IOS: 32,
                IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64,
                SUPPRESS_NOTIFICATION: 128
            })
        },
        716849: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
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
            var n = r("884691"),
                i = r("65597"),
                s = r("872717"),
                a = r("913144"),
                u = r("775433"),
                l = r("697218"),
                o = r("10514"),
                c = r("764364"),
                d = r("676572"),
                f = r("646718"),
                E = r("49111");
            let _ = "nonSubscriber";
            async function p() {
                try {
                    a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await s.default.get({
                        url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    a.default.dispatch({
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
                    404 === e.status ? a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function S(e) {
                let {
                    enabled: t,
                    useExpectedValue: r
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), n = d.default.shouldFetchPremiumLikelihood(), i = l.default.getCurrentUser();
                T(i, n, t, r)
            }

            function m(e) {
                let {
                    enabled: t,
                    useExpectedValue: r
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), s = (0, i.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), a = (0, i.default)([l.default], () => l.default.getCurrentUser());
                n.useEffect(() => {
                    T(a, s, t, r)
                }, [a, s, t, r])
            }

            function T(e, t, r, n) {
                null != e && !(0, c.isPremium)(e) && r && (t && p(), n && (!o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, u.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, u.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("446674"),
                i = r("913144");
            let s = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                a = s;
            class u extends n.default.Store {
                initialize() {
                    a = s
                }
                getState() {
                    return a
                }
                shouldFetchPremiumLikelihood() {
                    return !a.isFetching && !a.fetched
                }
            }
            u.displayName = "UserPremiumLikelihoodStore";
            var l = new u(i.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    a.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    a.premiumLikelihood = t, a.fetched = !0, a.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    a.isFetching = !1
                },
                LOGOUT: function() {
                    a.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            });
            var n = r("862205");
            let i = (0, n.createExperiment)({
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
            var s = i
        },
        15733: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return c
                }
            });
            var n = r("884691"),
                i = r("446674"),
                s = r("913144"),
                a = r("850068"),
                u = r("271938"),
                l = r("160299"),
                o = r("357957");

            function c() {
                let e = (0, i.useStateFromStores)([o.default], () => o.default.getDefaultBillingCountryCode()),
                    t = (0, i.useStateFromStores)([l.default], () => l.default.ipCountryCode),
                    r = (0, i.useStateFromStores)([u.default], () => u.default.isAuthenticated());
                return n.useEffect(() => {
                    s.default.wait(() => {
                        r && !l.default.isPaymentSourceFetching && !o.default.hasFetchedPaymentSources && a.fetchPaymentSources()
                    })
                }, [r]), n.useEffect(() => {
                    r && !l.default.ipCountryCodeLoaded && a.fetchIpCountryCode()
                }, [t, r]), {
                    defaultBillingCountryCode: e,
                    ipCountryCode: t
                }
            }
        },
        154889: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                discountOfferHasTier: function() {
                    return d
                },
                usePremiumDiscountOffer: function() {
                    return f
                }
            });
            var n = r("884691"),
                i = r("446674"),
                s = r("862337"),
                a = r("697218"),
                u = r("340412"),
                l = r("719923"),
                o = r("646718");

            function c(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function d(e, t) {
                var r;
                if (null == e) return !1;
                let n = new Set(null === (r = e.discount) || void 0 === r ? void 0 : r.plan_ids.map(e => o.SubscriptionPlanInfo[e].skuId));
                return n.has(t)
            }

            function f() {
                let e = (0, i.useStateFromStores)([u.default], () => u.default.getUserDiscount(o.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID)),
                    [t, r] = n.useState(c(e)),
                    d = (0, i.useStateFromStores)([a.default], () => (0, l.isPremium)(a.default.getCurrentUser()));
                return n.useEffect(() => {
                    if (null == e || null == e.expires_at) return;
                    let n = new s.Timeout,
                        i = () => {
                            let s = null != e.expires_at ? Date.parse(e.expires_at) - Date.now() : 0;
                            null == n || n.start(s, () => {
                                !t && c(e) ? r(!0) : i()
                            })
                        };
                    return i(), () => n.stop()
                }, [t, e]), t || d ? null : e
            }
        },
        635956: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return P
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("414456"),
                s = r.n(i),
                a = r("446674"),
                u = r("77078"),
                l = r("79112"),
                o = r("685665"),
                c = r("788506"),
                d = r("649844"),
                f = r("393414"),
                E = r("797647"),
                _ = r("697218"),
                p = r("521012"),
                S = r("471671"),
                m = r("181114"),
                T = r("978679"),
                I = r("216422"),
                h = r("719923"),
                A = r("646718"),
                C = r("49111"),
                O = r("782340"),
                g = r("683437"),
                P = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: i,
                        onClick: P,
                        size: R,
                        className: N,
                        trialId: v,
                        isTrialCTA: L,
                        buttonText: U,
                        buttonTextClassName: b,
                        postSuccessGuild: M,
                        onSubscribeModalClose: y,
                        premiumModalAnalyticsLocation: D,
                        showIcon: x = !0,
                        disableShine: F,
                        applicationId: w,
                        giftMessage: B,
                        overrideDisabledButtonText: H,
                        shinyButtonClassName: k,
                        ...G
                    } = e, j = (0, a.useStateFromStores)([_.default], () => _.default.getCurrentUser()), K = (0, a.useStateFromStores)([S.default], () => S.default.isFocused()), z = (0, a.useStateFromStores)([p.default], () => p.default.getPremiumTypeSubscription()), {
                        analyticsLocations: W
                    } = (0, o.default)(), V = e => {
                        if (e.preventDefault(), null == j) {
                            (0, f.transitionTo)(C.Routes.LOGIN);
                            return
                        }
                        if (null == P || P(e), (null == z ? void 0 : z.status) === C.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, c.trackPremiumSettingsPaneOpened)(), l.default.open(C.UserSettingsSections.PREMIUM), null == y || y(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: i,
                                isGift: s,
                                subscriptionTier: a,
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
                                    } = await r.el("984599").then(r.bind(r, "984599"));
                                    return t => {
                                        let {
                                            onClose: r,
                                            ...i
                                        } = t;
                                        return (0, n.jsx)(e, {
                                            ...i,
                                            onClose: r
                                        })
                                    }
                                });
                                return
                            }
                            if (!i) {
                                (0, u.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await r.el("899917").then(r.bind(r, "899917"));
                                    return t => {
                                        let {
                                            onClose: r,
                                            ...i
                                        } = t;
                                        return (0, n.jsx)(e, {
                                            ...i,
                                            onClose: r
                                        })
                                    }
                                });
                                return
                            }
                            let S = C.AnalyticsObjectTypes.BUY;
                            null != l ? S = C.AnalyticsObjectTypes.TRIAL : s && (S = C.AnalyticsObjectTypes.GIFT), (0, d.default)({
                                isGift: s,
                                initialPlanId: null,
                                subscriptionTier: a,
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
                            subscriptionTier: i,
                            trialId: v,
                            postSuccessGuild: M,
                            onSubscribeModalClose: y,
                            analyticsLocations: W,
                            premiumModalAnalyticsLocation: D,
                            applicationId: w,
                            giftMessage: B
                        })
                    };
                    if (L) return (0, n.jsxs)(u.Button, {
                        size: R,
                        className: N,
                        innerClassName: g.premiumSubscribeButton,
                        look: u.Button.Looks.INVERTED,
                        onClick: V,
                        ...G,
                        children: [x && (0, n.jsx)(I.default, {
                            className: g.premiumIcon
                        }), (0, n.jsx)("span", {
                            className: s(g.buttonText, b),
                            children: null != U ? U : O.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, n.jsxs)(u.Button, {
                        size: R,
                        className: N,
                        innerClassName: g.giftButton,
                        color: u.Button.Colors.PRIMARY,
                        onClick: V,
                        ...G,
                        children: [(0, n.jsx)(T.default, {
                            className: g.giftIcon
                        }), (0, n.jsx)("span", {
                            className: s(g.buttonText, b),
                            children: null != U ? U : O.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let Y = O.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        q = null != z ? (0, h.getPremiumPlanItem)(z) : null,
                        X = null != q ? h.default.getPremiumType(q.planId) : null == j ? void 0 : j.premiumType,
                        Z = i === A.PremiumSubscriptionSKUs.TIER_2 && null != X && [A.PremiumTypes.TIER_0, A.PremiumTypes.TIER_1].includes(X);
                    Z && (Y = O.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let Q = null != z && z.status !== C.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, E.isNoneSubscription)(z.planId) && !Z,
                        J = Q ? null != H ? H : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: r
                            } = e, n = null, i = null;
                            if (null != t && t !== A.PremiumSubscriptionSKUs.LEGACY && t !== A.PremiumSubscriptionSKUs.TIER_0 && t !== A.PremiumSubscriptionSKUs.TIER_1 && t !== A.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: n,
                                disabledButtonTooltipText: i
                            };
                            let s = null != t ? A.PremiumSubscriptionSKUToPremiumType[t] : null,
                                a = null != s ? A.PremiumTypeOrder[s] : null,
                                u = null != r ? A.PremiumTypeOrder[r] : null;
                            return null != u && null != a && a < u ? (n = O.default.Messages.APPLICATION_STORE_GET_PREMIUM, i = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != s && null != r && s === r ? (n = O.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, i = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == s && null != r && r === A.PremiumTypes.TIER_2 && (i = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: n,
                                disabledButtonTooltipText: i
                            }
                        }({
                            ctaSubscriptionSkuId: i,
                            currentPremiumType: X
                        }) : null;

                    function $(e) {
                        var t, r;
                        return (0, n.jsxs)(m.default, {
                            disabled: Q,
                            onClick: V,
                            innerClassName: g.premiumSubscribeButton,
                            color: i === A.PremiumSubscriptionSKUs.TIER_1 ? u.Button.Colors.PRIMARY : u.Button.Colors.GREEN,
                            size: R,
                            className: k,
                            wrapperClassName: N,
                            pauseAnimation: !K || F,
                            ...G,
                            ...e,
                            children: [x && (0, n.jsx)(I.default, {
                                className: g.premiumIcon
                            }), (0, n.jsx)("span", {
                                className: s(g.buttonText, b),
                                children: null !== (r = null !== (t = null == J ? void 0 : J.disabledButtonText) && void 0 !== t ? t : U) && void 0 !== r ? r : Y
                            })]
                        })
                    }
                    return (null == J ? void 0 : J.disabledButtonTooltipText) != null ? (0, n.jsx)(u.Tooltip, {
                        text: J.disabledButtonTooltipText,
                        children: $
                    }) : $()
                }
        },
        504439: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                thumbHashToRGBA: function() {
                    return i
                }
            });
            var n = r("723251");

            function i(e) {
                let {
                    detail: t = 1,
                    pop: r = 1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    PI: i,
                    min: s,
                    max: a,
                    cos: u,
                    round: l
                } = Math, o = e[0] | e[1] << 8 | e[2] << 16, c = e[3] | e[4] << 8, d = (63 & o) / 63, f = (o >> 6 & 63) / 31.5 - 1, E = (o >> 12 & 63) / 31.5 - 1, _ = o >> 23, p = (c >> 3 & 63) / 63, S = (c >> 9 & 63) / 63, m = c >> 15, T = a(3, m ? _ ? 5 : 7 : 7 & c), I = a(3, m ? 7 & c : _ ? 5 : 7), h = _ ? (15 & e[5]) / 15 : 1, A = (e[5] >> 4) / 15, C = _ ? 6 : 5, O = 0, g = (t, r, n) => {
                    let i = [];
                    for (let s = 0; s < r; s++)
                        for (let a = s ? 0 : 1; a * r < t * (r - s); a++) i.push(((e[C + (O >> 1)] >> ((1 & O++) << 2) & 15) / 7.5 - 1) * n);
                    return i
                }, P = g(T, I, (o >> 18 & 31) / 31 / 2), R = g(3, 3, p * r), N = g(3, 3, S * r), v = _ ? g(5, 5, A) : [], L = (0, n.thumbHashToApproximateAspectRatio)(e), U = l(L > 1 ? 32 : 32 * L), b = l(L > 1 ? 32 / L : 32), M = new Uint8Array(U * b * 4), y = [], D = [];
                for (let e = 0, r = 0; e < b; e++)
                    for (let n = 0; n < U; n++, r += 4) {
                        let l = d,
                            o = f,
                            c = E,
                            p = h;
                        for (let e = 0, t = a(T, _ ? 5 : 3); e < t; e++) y[e] = u(i / U * (n + .5) * e);
                        for (let t = 0, r = a(I, _ ? 5 : 3); t < r; t++) D[t] = u(i / b * (e + .5) * t);
                        for (let e = 0, r = 0; e < I; e++)
                            for (let n = e ? 0 : 1, i = 2 * D[e]; n * I < T * (I - e); n++, r++) !(n > t) && !(e > t) && (l += P[r] * y[n] * i);
                        for (let e = 0, t = 0; e < 3; e++)
                            for (let r = e ? 0 : 1, n = 2 * D[e]; r < 3 - e; r++, t++) {
                                let e = y[r] * n;
                                o += R[t] * e, c += N[t] * e
                            }
                        if (_)
                            for (let e = 0, t = 0; e < 5; e++)
                                for (let r = e ? 0 : 1, n = 2 * D[e]; r < 5 - e; r++, t++) p += v[t] * y[r] * n;
                        let S = l - 2 / 3 * o,
                            m = (3 * l - S + c) / 2,
                            A = m - c;
                        M[r] = a(0, 255 * s(1, m)), M[r + 1] = a(0, 255 * s(1, A)), M[r + 2] = a(0, 255 * s(1, S)), M[r + 3] = a(0, 255 * s(1, p))
                    }
                return {
                    w: U,
                    h: b,
                    rgba: M
                }
            }
        },
        450205: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var n = r("666038");
            class i extends n.default {
                toString() {
                    return this.name
                }
                constructor(e) {
                    super(), this.id = e.id, this.type = e.type, this.name = e.name, this.revoked = e.revoked || !1, this.integrations = e.integrations || [], this.visibility = e.visibility || 0, this.friendSync = e.friend_sync || !1, this.showActivity = e.show_activity || !1, this.verified = e.verified || !1, this.accessToken = e.access_token || null, this.twoWayLink = e.two_way_link || !1, this.metadata = e.metadata || null, this.metadataVisibility = e.metadata_visibility || 0
                }
            }
        },
        522308: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            });
            var n = r("666038");
            class i extends n.default {
                static createFromServer(e, t) {
                    return new i({
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
            var s = i
        },
        47319: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return T
                }
            });
            var n = r("446674"),
                i = r("913144"),
                s = r("619340"),
                a = r("376556"),
                u = r("450205"),
                l = r("813006"),
                o = r("49111");
            let c = new Set([o.PlatformTypes.CONTACTS]),
                d = !0,
                f = [],
                E = [],
                _ = {},
                p = {},
                S = e => {
                    f = e.filter(e => !c.has(e.type) && a.default.isSupported(e.type)), E = e.filter(e => c.has(e.type)), d = !1
                };
            class m extends n.default.Store {
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
                    return f.find(r => (null == e || r.id === e) && r.type === t)
                }
                getLocalAccount(e) {
                    return E.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return p[e] || !1
                }
            }
            m.displayName = "ConnectedAccountsStore";
            var T = new m(i.default, {
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
                    } else s.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    _[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: r,
                        revoked: n,
                        accessToken: i
                    } = e, s = f.find(e => e.id === r && e.type === t);
                    if (null == s) return !1;
                    null != n && (s.revoked = n), null != i && (s.accessToken = i)
                }
            })
        },
        778588: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("446674"),
                i = r("913144");
            let s = [];

            function a() {
                s = []
            }
            class u extends n.default.Store {
                hasLayers() {
                    return s.length > 0
                }
                getLayers() {
                    return s
                }
            }
            u.displayName = "LayerStore";
            var l = new u(i.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (s.indexOf(t) >= 0) return !1;
                    s = [...s, t]
                },
                LAYER_POP: function() {
                    if (0 === s.length) return !1;
                    s = s.slice(0, -1)
                },
                LAYER_POP_ALL: a,
                LOGOUT: a,
                NOTIFICATION_CLICK: a
            })
        },
        340412: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return _
                }
            });
            var n = r("446674"),
                i = r("913144"),
                s = r("697218"),
                a = r("719923"),
                u = r("521012");
            let l = {
                    userOffersLastFetchedAtDate: void 0,
                    userTrialOffers: {},
                    userDiscounts: {}
                },
                o = l;

            function c() {
                o.userTrialOffers = {}, o.userDiscounts = {}, o.userOffersLastFetchedAtDate = void 0
            }
            let d = () => !0;

            function f() {
                let e = u.default.getPremiumTypeSubscription();
                return null != e && (o.userTrialOffers = {}, o.userDiscounts = {}, !0)
            }
            class E extends n.default.PersistedStore {
                initialize(e) {
                    o = null != e ? e : l, this.waitFor(s.default), this.syncWith([s.default], d), this.syncWith([u.default], f)
                }
                getUserTrialOffer(e) {
                    if (null !== e) return o.userTrialOffers[e]
                }
                getUserDiscount(e) {
                    if (null !== e) return o.userDiscounts[e]
                }
                getAnyOfUserTrialOfferId(e) {
                    for (let t of e)
                        if (null != o.userTrialOffers[t]) return t;
                    return null
                }
                hasFetchedOffer() {
                    return null != o.userOffersLastFetchedAtDate
                }
                shouldFetchOffer() {
                    let e = o.userOffersLastFetchedAtDate;
                    return null == e || Date.now() - 1728e5 > e
                }
                getAcknowledgedOffers(e) {
                    let t = s.default.getCurrentUser();
                    return (0, a.isPremium)(t) ? [] : Object.values(o.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
                }
                getUnacknowledgedDiscountOffers() {
                    let e = s.default.getCurrentUser();
                    return (0, a.isPremium)(e) ? [] : Object.values(o.userDiscounts).filter(e => null == e.expires_at)
                }
                getUnacknowledgedOffers(e) {
                    let t = s.default.getCurrentUser();
                    return (0, a.isPremium)(t) ? [] : Object.values(o.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
                }
                hasAnyUnexpiredOffer() {
                    return Object.values(o.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
                }
                getState() {
                    return o
                }
                forceReset() {
                    c()
                }
            }
            E.displayName = "UserOfferStore", E.persistKey = "UserOfferStore";
            var _ = new E(i.default, {
                BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t ? o.userTrialOffers[t.trial_id] = t : c(), o.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    o.userTrialOffers[t.trial_id] = t, o.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: r
                    } = e;
                    null == t && null == r && c(), null != t ? (o.userTrialOffers[t.trial_id] = t, o.userDiscounts = {}) : null != r && (o.userDiscounts[r.discount_id] = r, o.userTrialOffers = {}), o.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: r
                    } = e;
                    (null != t || null != r) && (null != t && (o.userTrialOffers[t.trial_id] = t), null != r && (o.userDiscounts[r.discount_id] = r), o.userOffersLastFetchedAtDate = Date.now())
                },
                LOGOUT: c
            })
        }
    }
]);