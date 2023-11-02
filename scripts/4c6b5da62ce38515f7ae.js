(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["24265"], {
        437083: function(e, t, r) {
            var n = r("561449"),
                a = r("877297");
            e.exports = function(e) {
                return a(n(e))
            }
        },
        329252: function(e, t, r) {
            var n = r("877297"),
                a = r("164099");
            e.exports = function(e) {
                return n(a(e))
            }
        },
        957478: function(e, t, r) {
            var n = r("626785");
            e.exports = function(e, t) {
                return n(t, function(t) {
                    return e[t]
                })
            }
        },
        561449: function(e, t, r) {
            e.exports = function(e, t) {
                var r = -1,
                    n = e.length;
                for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
                return t
            }
        },
        877297: function(e, t, r) {
            var n = r("68421");
            e.exports = function(e, t) {
                var r = -1,
                    a = e.length,
                    i = a - 1;
                for (t = void 0 === t ? a : t; ++r < t;) {
                    var s = n(r, i),
                        u = e[s];
                    e[s] = e[r], e[r] = u
                }
                return e.length = t, e
            }
        },
        375128: function(e, t, r) {
            var n = r("437083"),
                a = r("329252"),
                i = r("725502");
            e.exports = function(e) {
                return (i(e) ? n : a)(e)
            }
        },
        164099: function(e, t, r) {
            var n = r("957478"),
                a = r("466731");
            e.exports = function(e) {
                return null == e ? [] : n(e, a(e))
            }
        },
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
        723251: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                thumbHashToApproximateAspectRatio: function() {
                    return n
                },
                rgbaToDataURL: function() {
                    return a
                },
                thumbHashToDataURL: function() {
                    return i
                }
            });

            function n(e) {
                let t = e[3],
                    r = 128 & e[2],
                    n = 128 & e[4];
                return (n ? r ? 5 : 7 : 7 & t) / (n ? 7 & t : r ? 5 : 7)
            }

            function a(e, t, r) {
                let n = 4 * e + 1,
                    a = 6 + t * (5 + n),
                    i = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, a >>> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 73, 68, 65, 84, 120, 1],
                    s = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    u = 1,
                    l = 0;
                for (let e = 0, a = 0, s = n - 1; e < t; e++, s += n - 1)
                    for (i.push(e + 1 < t ? 0 : 1, 255 & n, n >> 8, 255 & ~n, n >> 8 ^ 255, 0), l = (l + u) % 65521; a < s; a++) {
                        let e = 255 & r[a];
                        i.push(e), l = (l + (u = (u + e) % 65521)) % 65521
                    }
                for (let [e, t] of(i.push(l >> 8, 255 & l, u >> 8, 255 & u, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                        [12, 29],
                        [37, 41 + a]
                    ])) {
                    let r = -1;
                    for (let n = e; n < t; n++) r ^= i[n], r = (r = r >>> 4 ^ s[15 & r]) >>> 4 ^ s[15 & r];
                    r = ~r, i[t++] = r >>> 24, i[t++] = r >> 16 & 255, i[t++] = r >> 8 & 255, i[t++] = 255 & r
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...i))
            }

            function i(e) {
                let t = function(e) {
                    let {
                        PI: t,
                        min: r,
                        max: a,
                        cos: i,
                        round: s
                    } = Math, u = e[0] | e[1] << 8 | e[2] << 16, l = e[3] | e[4] << 8, o = (63 & u) / 63, c = (u >> 6 & 63) / 31.5 - 1, d = (u >> 12 & 63) / 31.5 - 1, f = u >> 23, E = (l >> 3 & 63) / 63, _ = (l >> 9 & 63) / 63, p = l >> 15, m = a(3, p ? f ? 5 : 7 : 7 & l), T = a(3, p ? 7 & l : f ? 5 : 7), S = f ? (15 & e[5]) / 15 : 1, h = (e[5] >> 4) / 15, I = f ? 6 : 5, A = 0, C = (t, r, n) => {
                        let a = [];
                        for (let i = 0; i < r; i++)
                            for (let s = i ? 0 : 1; s * r < t * (r - i); s++) a.push(((e[I + (A >> 1)] >> ((1 & A++) << 2) & 15) / 7.5 - 1) * n);
                        return a
                    }, g = C(m, T, (u >> 18 & 31) / 31), P = C(3, 3, 1.25 * E), R = C(3, 3, 1.25 * _), N = f && C(5, 5, h), v = n(e), O = s(v > 1 ? 32 : 32 * v), M = s(v > 1 ? 32 / v : 32), b = new Uint8Array(O * M * 4), L = [], U = [];
                    for (let e = 0, n = 0; e < M; e++)
                        for (let s = 0; s < O; s++, n += 4) {
                            let u = o,
                                l = c,
                                E = d,
                                _ = S;
                            for (let e = 0, r = a(m, f ? 5 : 3); e < r; e++) L[e] = i(t / O * (s + .5) * e);
                            for (let r = 0, n = a(T, f ? 5 : 3); r < n; r++) U[r] = i(t / M * (e + .5) * r);
                            for (let e = 0, t = 0; e < T; e++)
                                for (let r = e ? 0 : 1, n = 2 * U[e]; r * T < m * (T - e); r++, t++) u += g[t] * L[r] * n;
                            for (let e = 0, t = 0; e < 3; e++)
                                for (let r = e ? 0 : 1, n = 2 * U[e]; r < 3 - e; r++, t++) {
                                    let e = L[r] * n;
                                    l += P[t] * e, E += R[t] * e
                                }
                            if (f)
                                for (let e = 0, t = 0; e < 5; e++)
                                    for (let r = e ? 0 : 1, n = 2 * U[e]; r < 5 - e; r++, t++) _ += N[t] * L[r] * n;
                            let p = u - 2 / 3 * l,
                                h = (3 * u - p + E) / 2,
                                I = h - E;
                            b[n] = a(0, 255 * r(1, h)), b[n + 1] = a(0, 255 * r(1, I)), b[n + 2] = a(0, 255 * r(1, p)), b[n + 3] = a(0, 255 * r(1, _))
                        }
                    return {
                        w: O,
                        h: M,
                        rgba: b
                    }
                }(e);
                return a(t.w, t.h, t.rgba)
            }
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
                a = r("913144"),
                i = r("271560"),
                s = r("49111");

            function u(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return a.default.wait(() => {
                    a.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), n.default.get({
                    url: s.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
                    oldFormErrors: !0,
                    query: {
                        exclude_consumed: t
                    }
                }).then(t => (a.default.dispatch({
                    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                    applicationId: e,
                    entitlements: t.body
                }), t.body)).catch(() => {
                    a.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                        applicationId: e
                    })
                })
            }
            async function l(e) {
                let {
                    withSku: t = !1,
                    withApplication: r = !1,
                    entitlementType: i
                } = e;
                a.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let e = await n.default.get({
                        url: s.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: t,
                            with_application: r,
                            entitlement_type: i
                        }
                    });
                    a.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    a.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
                    })
                }
            }
            async function o() {
                a.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let e = await (0, i.httpGetWithCountryCodeQuery)({
                        url: s.Endpoints.ENTITLEMENTS_GIFTABLE
                    });
                    a.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    a.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
                    })
                }
            }
        },
        112679: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                updateStripePaymentRequest: function() {
                    return a
                },
                updateCardInfo: function() {
                    return i
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
            var n = r("913144");

            function a(e) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function i(e, t) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
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
                    return a
                }
            });
            var n = r("913144");

            function a() {
                n.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        252744: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var n = r("884691");

            function a(e) {
                let [t, r] = (0, n.useState)(!1), a = (0, n.useRef)(e.current);
                return (0, n.useEffect)(() => {
                    a.current = e.current
                }, [e]), (0, n.useEffect)(() => {
                    let e = a.current;
                    if (null == e) return;
                    let t = () => r(!0),
                        n = () => r(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", n), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", n)
                    }
                }, [a]), t
            }
        },
        689988: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            }), r("704744");
            var n = r("913144");
            class a {
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
                    return i
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
            var n = r("476765"),
                a = r("782340");
            let i = (0, n.uid)(),
                s = (0, n.uid)(),
                u = (0, n.uid)(),
                l = (0, n.uid)();

            function o() {
                [{
                    id: i,
                    text: ","
                }, {
                    id: s,
                    text: ","
                }, {
                    id: u,
                    text: a.default.Messages.REACTIONS
                }, {
                    id: l,
                    text: a.default.Messages.OPEN_ORIGIANL_IMAGE_BUTTON_A11Y_DESCRIPTION
                }].forEach(e => {
                    let {
                        id: t,
                        text: r
                    } = e, n = document.getElementById(t);
                    null == n && ((n = document.createElement("div")).setAttribute("id", t), n.innerText = r, n.style.display = "none", document.body.appendChild(n))
                })
            }
        },
        791050: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return M
                }
            });
            var n = r("37983"),
                a = r("884691"),
                i = r("265586"),
                s = r("446674"),
                u = r("77078"),
                l = r("812204"),
                o = r("685665"),
                c = r("21526"),
                d = r("805172"),
                f = r("491232"),
                E = r("984002"),
                _ = r("235898"),
                p = r("170313"),
                m = r("635956"),
                T = r("91653"),
                S = r("697218"),
                h = r("599110"),
                I = r("719923"),
                A = r("234251"),
                C = r("659117"),
                g = r("765221"),
                P = r("49111"),
                R = r("646718"),
                N = r("782340"),
                v = r("705057");

            function O(e) {
                let {
                    user: t,
                    categories: r,
                    analyticsLocations: i,
                    onClose: s,
                    initialSelectedDecoration: o,
                    isTryItOutFlow: _
                } = e, {
                    pendingAvatarDecoration: S,
                    setPendingAvatarDecoration: h
                } = (0, T.default)({
                    analyticsLocations: i,
                    isTryItOut: _
                }), [P, O] = a.useState(() => {
                    var e;
                    if (null != o) return o;
                    if (void 0 !== S) return S;
                    if ((null == t ? void 0 : t.avatarDecoration) == null || 0 === r.size) return null;
                    let n = (0, f.getAvatarDecorationsFromCategories)(r);
                    return null !== (e = n.find(e => (0, A.isEqualAvatarDecoration)(e, t.avatarDecoration))) && void 0 !== e ? e : null
                }), {
                    category: M,
                    purchase: b
                } = (0, E.default)(null == P ? void 0 : P.skuId), L = I.default.canUseCollectibles(t), U = a.useRef(null), x = (0, p.default)(i), {
                    shopForAllEnabled: y
                } = (0, d.default)({
                    location: "AvatarDecorationModal"
                }), D = (0, A.isEqualAvatarDecoration)(P, void 0 === S ? null == t ? void 0 : t.avatarDecoration : S), F = () => {
                    h(P), s()
                }, H = () => {
                    s(), (0, c.openCollectiblesShop)({
                        analyticsLocations: i,
                        analyticsSource: l.default.EDIT_AVATAR_DECORATION_MODAL
                    })
                };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(u.ModalHeader, {
                        separator: !1,
                        className: v.modalHeader,
                        children: [(0, n.jsx)("div", {
                            className: v.modalHeadings,
                            children: (0, n.jsx)(u.HeadingLevel, {
                                component: (0, n.jsx)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: N.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
                                }),
                                children: !L && !y && (0, n.jsx)(u.Heading, {
                                    variant: "text-sm/normal",
                                    children: N.default.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_HEADER_STARTER_DESC
                                })
                            })
                        }), (0, n.jsx)(u.ModalCloseButton, {
                            className: v.modalCloseButton,
                            onClick: s
                        })]
                    }), (0, n.jsxs)(u.ModalContent, {
                        className: v.modalContent,
                        scrollbarType: "none",
                        children: [(0, n.jsx)(g.default, {
                            user: t,
                            pendingAvatarDecoration: P,
                            selectedAvatarDecorationRef: U,
                            onSelect: e => {
                                O(e), null != e && x(e)
                            },
                            onOpenShop: H
                        }), (0, n.jsx)(C.default, {
                            className: v.modalPreview,
                            user: t,
                            avatarDecorationOverride: P
                        })]
                    }), (0, n.jsxs)(u.ModalFooter, {
                        className: v.modalFooter,
                        children: [(() => {
                            let e = null != b && (!(0, f.isPremiumCollectiblesPurchase)(b) || L);
                            if (e || null === P) return (0, n.jsx)(u.Button, {
                                onClick: F,
                                disabled: D,
                                children: N.default.Messages.AVATAR_DECORATION_MODAL_APPLY
                            });
                            let r = L || !(0, f.isPremiumCollectiblesCategory)(M);
                            return r ? (0, n.jsx)(u.Button, {
                                className: v.modalFooterShopButton,
                                onClick: H,
                                children: N.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                            }) : (0, n.jsx)(m.default, {
                                subscriptionTier: R.PremiumSubscriptionSKUs.TIER_2,
                                buttonText: I.default.isPremium(t) ? N.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : N.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                            })
                        })(), (0, n.jsx)(u.Button, {
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: s,
                            children: N.default.Messages.CANCEL
                        })]
                    })]
                })
            }

            function M(e) {
                let {
                    transitionState: t,
                    analyticsLocations: r,
                    onClose: d,
                    initialSelectedDecoration: f,
                    isTryItOutFlow: E
                } = e, p = (0, s.useStateFromStores)([S.default], () => S.default.getCurrentUser()), {
                    AnalyticsLocationProvider: m,
                    analyticsLocations: T
                } = (0, o.default)(r, l.default.EDIT_AVATAR_DECORATION_MODAL), {
                    categories: I,
                    purchases: A,
                    isFetchingCategories: C,
                    isFetchingPurchases: g
                } = (0, _.default)(), R = C || g && 0 === A.size;
                return a.useEffect(() => {
                    h.default.track(P.AnalyticEvents.OPEN_MODAL, {
                        type: "Edit Avatar Decoration Modal",
                        location_stack: T
                    })
                }, [T]), a.useEffect(() => () => {
                    (0, c.setCollectiblesCategoryItemsViewed)({
                        categories: [...I.values()],
                        itemTypes: [i.CollectiblesItemType.AVATAR_DECORATION]
                    })
                }, [I]), null == p ? null : (0, n.jsx)(m, {
                    children: (0, n.jsx)(u.ModalRoot, {
                        transitionState: t,
                        className: v.modal,
                        size: R ? u.ModalSize.DYNAMIC : u.ModalSize.MEDIUM,
                        children: R ? (0, n.jsx)(u.Spinner, {
                            className: v.spinner,
                            type: u.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, n.jsx)(O, {
                            user: p,
                            categories: I,
                            analyticsLocations: T,
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
            var a = r("414456"),
                i = r.n(a),
                s = r("506838"),
                u = r("446674"),
                l = r("77078"),
                o = r("805172"),
                c = r("491232"),
                d = r("984002"),
                f = r("716120"),
                E = r("915639"),
                _ = r("824563"),
                p = r("719923"),
                m = r("795158"),
                T = r("782340"),
                S = r("632000");
            let h = [{
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
                I = e => {
                    let {
                        purchase: t
                    } = e, r = (0, u.useStateFromStores)([E.default], () => E.default.locale), a = (0, c.isPremiumCollectiblesPurchase)(t);
                    return (0, n.jsxs)("div", {
                        className: S.purchaseInfo,
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
                            children: [T.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                date: t.purchasedAt.toLocaleDateString(r, {
                                    month: "long",
                                    year: "numeric"
                                })
                            }), a && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("br", {}), T.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
                            })]
                        })]
                    })
                };
            var A = e => {
                let {
                    user: t,
                    avatarDecorationOverride: r,
                    className: a
                } = e, E = (0, u.useStateFromStores)([_.default], () => _.default.getStatus(t.id)), {
                    category: A,
                    product: C,
                    purchase: g
                } = (0, d.default)(null == r ? void 0 : r.skuId), P = p.default.canUseCollectibles(t), R = (0, c.isPremiumCollectiblesPurchase)(g), N = (0, c.isPremiumCollectiblesCategory)(A), {
                    shopForAllEnabled: v
                } = (0, o.default)({
                    location: "AvatarDecorationModalPreview"
                }), O = !P && R;
                return null != C && (null == g || O) ? (0, n.jsxs)("div", {
                    className: i(S.modalPreview, S.shopPreviewContainer, a),
                    children: [(0, n.jsx)(f.default, {
                        asset: null == A ? void 0 : A.banner,
                        className: S.shopPreviewBanner,
                        children: (0, n.jsx)(m.default, {
                            user: t,
                            avatarDecorationOverride: r
                        })
                    }), (0, n.jsxs)("div", {
                        className: S.shopPreviewTextContainer,
                        children: [(0, n.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            children: C.name
                        }), (0, n.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: O ? T.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, s.match)([N, P]).with([!0, !0], () => T.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM).with([!0, !1], () => T.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER).with([!1, !0], () => T.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM).with([!1, !1], () => v ? T.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM : T.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE).exhaustive()
                        })]
                    })]
                }) : (0, n.jsxs)("div", {
                    className: i(S.modalPreview, a),
                    children: [(0, n.jsxs)("div", {
                        className: S.previewSections,
                        children: [(0, n.jsx)("div", {
                            className: S.decorationPreview,
                            children: (0, n.jsx)(m.default, {
                                user: t,
                                avatarDecorationOverride: r
                            })
                        }), (0, n.jsx)("div", {
                            className: S.smallDecorationPreviewsContainer,
                            children: h.map(e => {
                                let {
                                    avatarSize: a,
                                    showStatus: i
                                } = e;
                                return (0, n.jsx)("div", {
                                    className: S.smallDecorationPreview,
                                    children: (0, n.jsx)(m.default, {
                                        user: t,
                                        avatarSize: a,
                                        avatarDecorationOverride: r,
                                        status: i ? E : void 0,
                                        "aria-hidden": !0
                                    })
                                }, "".concat(a).concat(i))
                            })
                        })]
                    }), null != g && (0, n.jsx)(I, {
                        purchase: g
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
            var a = r("77078"),
                i = r("106435"),
                s = r("50885"),
                u = r("782340");
            let l = s.default.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;
            var o = e => {
                let {
                    user: t,
                    avatarDecorationOverride: r,
                    status: s,
                    avatarSize: o = a.AvatarSizes.SIZE_120,
                    "aria-hidden": c = !1
                } = e, {
                    avatarDecorationSrc: d,
                    avatarSrc: f,
                    eventHandlers: E
                } = (0, i.default)({
                    user: t,
                    size: o,
                    showPending: !0,
                    avatarDecorationOverride: r
                });
                return (0, n.jsx)(l, {
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
        765221: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return O
                }
            });
            var n = r("37983"),
                a = r("884691"),
                i = r("414456"),
                s = r.n(i),
                u = r("506838"),
                l = r("171210"),
                o = r("65597"),
                c = r("77078"),
                d = r("252744"),
                f = r("853987"),
                E = r("426497"),
                _ = r("491232"),
                p = r("743826"),
                m = r("216422"),
                T = r("468759"),
                S = r("600785"),
                h = r("956089"),
                I = r("719923"),
                A = r("643070"),
                C = r("688318"),
                g = r("782340"),
                P = r("654353");
            let R = () => 80,
                N = e => {
                    let {
                        children: t,
                        className: r,
                        onSelect: a,
                        isSelected: i = !1,
                        ...u
                    } = e;
                    return (0, n.jsx)(c.Clickable, {
                        className: s(P.decorationGridItem, i ? P.selected : void 0, r),
                        ...u,
                        onClick: a,
                        children: t
                    })
                },
                v = e => {
                    let {
                        user: t,
                        avatarDecoration: r,
                        innerRef: i,
                        section: s,
                        isSelected: u = !1,
                        ...c
                    } = e, p = (0, o.default)([f.default], () => {
                        let e = f.default.getCategoryForProduct(r.skuId);
                        return (0, _.isPremiumCollectiblesCategory)(e)
                    }), T = (0, o.default)([E.default], () => E.default.isItemViewed(r)), R = I.default.canUseCollectibles(t), v = s === A.Section.PREMIUM_PURCHASE && !R, [O, M] = a.useState(u);
                    a.useEffect(() => {
                        u && M(!0)
                    }, [u]);
                    let b = a.useRef(null),
                        L = (0, d.default)(null != i ? i : b),
                        {
                            avatarDecorationSrc: U
                        } = (0, C.default)({
                            user: t,
                            avatarDecorationOverride: r,
                            size: 80,
                            animateOnHover: !L
                        });
                    return (0, n.jsxs)(N, {
                        className: v ? P.decorationGridItemChurned : void 0,
                        innerRef: null != i ? i : b,
                        isSelected: u,
                        ...c,
                        children: [(0, n.jsx)("img", {
                            className: P.presetDecorationImg,
                            src: U,
                            alt: r.label
                        }), (() => {
                            let e = s === A.Section.PURCHASE || s === A.Section.PREMIUM_PURCHASE && R;
                            if (e) return null;
                            let t = !T && !u && !O;
                            return t ? (0, n.jsx)(h.PremiumBadge, {
                                className: P.newBadge,
                                text: (0, n.jsxs)("div", {
                                    className: P.newBadgeText,
                                    children: [(0, n.jsx)(S.default, {
                                        width: 12,
                                        height: 12
                                    }), g.default.Messages.NEW]
                                })
                            }) : (0, n.jsx)(h.IconBadge, {
                                icon: p ? () => (0, n.jsx)(m.default, {
                                    width: 14,
                                    height: 14
                                }) : () => (0, n.jsx)(S.default, {
                                    width: 12,
                                    height: 12
                                }),
                                color: l.default.BACKGROUND_ACCENT,
                                className: P.iconBadge
                            })
                        })()]
                    })
                };
            var O = e => {
                let {
                    user: t,
                    pendingAvatarDecoration: r,
                    selectedAvatarDecorationRef: a,
                    onSelect: i,
                    onOpenShop: s
                } = e, l = (0, A.default)();
                return (0, n.jsx)(c.MasonryList, {
                    fade: !0,
                    className: P.list,
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
                        return (0, u.match)(_[o]).with(A.NONE_ITEM, () => (0, n.jsxs)(N, {
                            style: {
                                ...d
                            },
                            isSelected: null === r,
                            onSelect: () => i(null),
                            children: [(0, n.jsx)(T.default, {
                                className: P.notAllowedIcon
                            }), (0, n.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "header-primary",
                                children: g.default.Messages.NONE
                            })]
                        }, f)).with(A.SHOP_ITEM, () => (0, n.jsxs)(N, {
                            style: d,
                            onSelect: s,
                            children: [(0, n.jsx)(p.default, {
                                className: P.shopIcon
                            }), (0, n.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "header-primary",
                                children: g.default.Messages.COLLECTIBLES_SHOP
                            })]
                        }, f)).otherwise(e => {
                            let s = (null == r ? void 0 : r.id) === e.id;
                            return (0, n.jsx)(v, {
                                style: {
                                    ...d
                                },
                                user: t,
                                avatarDecoration: e,
                                section: E,
                                innerRef: s ? a : void 0,
                                isSelected: s,
                                onSelect: () => i(e)
                            }, f)
                        })
                    },
                    renderSection: e => {
                        let {
                            header: t
                        } = l[e];
                        return (0, n.jsx)("div", {
                            className: P.headings,
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
                    getItemHeight: R
                })
            }
        },
        643070: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Section: function() {
                    return a
                },
                NONE_ITEM: function() {
                    return p
                },
                SHOP_ITEM: function() {
                    return m
                },
                default: function() {
                    return T
                }
            });
            var n, a, i = r("884691"),
                s = r("917351"),
                u = r("65597"),
                l = r("853987"),
                o = r("775416"),
                c = r("805172"),
                d = r("491232"),
                f = r("697218"),
                E = r("719923"),
                _ = r("782340");
            (n = a || (a = {})).PURCHASE = "purchase", n.PREMIUM_PURCHASE = "premium_purchase", n.PREVIEW = "preview", n.PREMIUM_PREVIEW = "premium_preview";
            let p = {
                    id: "None"
                },
                m = {
                    id: "Shop"
                };
            var T = () => {
                let e = (0, u.default)([f.default], () => f.default.getCurrentUser()),
                    t = E.default.canUseCollectibles(e),
                    {
                        shopForAllEnabled: r
                    } = (0, c.default)({
                        location: "useAvatarDecorationSections"
                    }),
                    n = (0, u.default)([o.default], () => o.default.purchases),
                    [T, S] = (0, u.useStateFromStoresArray)([l.default], () => [l.default.categories, l.default.categorySkuIdsByProductSkuId]);
                return (0, i.useMemo)(() => {
                    let e = (0, s.uniqBy)([...(0, d.getAvatarDecorationsFromPurchases)(n), ...(0, d.getAvatarDecorationsFromCategories)(T)], "id"),
                        i = e.reduce((e, r) => {
                            let a = n.get(r.skuId),
                                i = (0, d.isPremiumCollectiblesPurchase)(a);
                            if (i && 0 === e.premium_purchase.length && (e.premium_purchase = e.premium_preview, e.premium_preview = []), i) return e.premium_purchase.push(r), e;
                            if (null != a) return e.purchase.push(r), e;
                            let s = T.get(S[r.skuId]);
                            if (!t && (0, d.isPremiumCollectiblesCategory)(s)) {
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
                        u = !!t || !!r || i.purchase.length > 0;
                    return [{
                        section: a.PURCHASE,
                        items: u ? [p, m, ...i.purchase] : [],
                        height: 12,
                        header: _.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
                    }, {
                        section: i.premium_purchase.length > 0 ? a.PREMIUM_PURCHASE : a.PREMIUM_PREVIEW,
                        items: i.premium_purchase.length > 0 ? i.premium_purchase : i.premium_preview,
                        height: 12,
                        header: _.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
                    }, {
                        section: a.PREVIEW,
                        items: i.preview,
                        height: 12,
                        header: _.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
                    }].filter(e => {
                        let {
                            items: t
                        } = e;
                        return t.length > 0
                    })
                }, [T, n, S, t, r])
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
                a = r("15733");
            let i = (0, n.createExperiment)({
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
                s = (0, n.createExperiment)({
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
                } = i.useExperiment({
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
                    defaultBillingCountryCode: r
                } = (0, a.default)();
                return e || t && "RU" === r
            }
            var l = i
        },
        563775: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var n = r("862205");
            let a = (0, n.createExperiment)({
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
            var i = e => {
                let {
                    location: t,
                    autoTrackExposure: r = !0,
                    trackExposureOptions: n = {}
                } = e;
                return a.useExperiment({
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
                    return i
                }
            });
            var n = r("862205");
            let a = (0, n.createExperiment)({
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
            var i = e => {
                let {
                    location: t,
                    autoTrackExposure: r = !0,
                    trackExposureOptions: n = {}
                } = e;
                return a.useExperiment({
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
                    return s
                }
            });
            var n = r("65597"),
                a = r("853987"),
                i = r("775416"),
                s = e => {
                    let [t, r] = (0, n.useStateFromStoresArray)([a.default], () => [a.default.getCategoryForProduct(e), a.default.getProduct(e)]), s = (0, n.default)([i.default], () => i.default.getPurchase(e));
                    return {
                        category: t,
                        product: r,
                        purchase: s
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
                a = r("65597"),
                i = r("875212"),
                s = r("21526"),
                u = r("853987"),
                l = r("563775"),
                o = r("775416");

            function c() {
                var e;
                let t = "useFetchCollectiblesCategoriesAndPurchases";
                (0, i.useTriggerDebuggingAA)({
                    location: t + " auto on",
                    autoTrackExposure: !0
                }), (0, i.useTriggerDebuggingAA)({
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
                    (0, i.useTriggerDebuggingAA)({
                        location: t + " auto on",
                        autoTrackExposure: !0
                    }), (0, i.useTriggerDebuggingAA)({
                        location: t + " auto off",
                        autoTrackExposure: !1
                    }), (0, l.default)({
                        location: t
                    });
                    let [r, o, c, d] = (0, a.useStateFromStoresArray)([u.default], () => [u.default.isFetching, u.default.error, null !== (e = u.default.lastFetched) && void 0 !== e ? e : 0, u.default.categories]);
                    return (0, n.useEffect)(() => {
                        !(r || o || Date.now() - c < 6e5) && (0, s.fetchCollectiblesCategories)()
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
                    purchases: m
                } = function() {
                    let e = "useFetchPurchases";
                    (0, i.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, i.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    }), (0, l.default)({
                        location: e
                    });
                    let [t, r, u, c, d] = (0, a.useStateFromStoresArray)([o.default], () => [o.default.isFetching, o.default.isClaiming, o.default.fetchError, o.default.claimError, o.default.purchases]);
                    return (0, n.useEffect)(() => {
                        (0, s.fetchCollectiblesPurchases)()
                    }, []), {
                        isClaiming: r,
                        fetchError: u,
                        claimError: c,
                        isFetching: t,
                        purchases: d
                    }
                }(), T = null !== (e = null != d ? d : E) && void 0 !== e ? e : _;
                return {
                    isFetching: r || p,
                    isFetchingCategories: r,
                    isFetchingPurchases: p,
                    isClaiming: f,
                    categories: c,
                    purchases: m,
                    error: T
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
            var a = r("414456"),
                i = r.n(a),
                s = r("65597"),
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
                        className: a,
                        style: E,
                        children: _
                    } = e, p = (0, s.default)([l.default], () => l.default.saturation);
                    return (0, n.jsx)("div", {
                        className: i(f.banner, a),
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
                    return a
                },
                getBackgroundGradient: function() {
                    return i
                }
            });
            let n = 1060,
                a = e => 3.8 * e,
                i = function(e) {
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
            var a = r("748820"),
                i = r("77078"),
                s = r("112679"),
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
                    onSubscriptionConfirmation: m,
                    analyticsLocations: T,
                    analyticsObject: S,
                    analyticsLocation: h,
                    analyticsSourceLocation: I,
                    isGift: A = !1,
                    giftMessage: C,
                    subscriptionTier: g,
                    trialId: P,
                    postSuccessGuild: R,
                    openInvoiceId: N,
                    applicationId: v,
                    referralTrialOfferId: O,
                    giftRecipient: M,
                    returnRef: b
                } = null != e ? e : {}, L = !1, U = (0, a.v4)();
                (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await r.el("646139").then(r.bind(r, "646139"));
                    return r => {
                        let {
                            onClose: a,
                            ...i
                        } = r;
                        return (0, n.jsx)(e, {
                            ...i,
                            loadId: U,
                            subscriptionTier: g,
                            skuId: g,
                            isGift: A,
                            giftMessage: C,
                            giftRecipient: M,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                a(), null == _ || _(e), e && (null == m || m())
                            },
                            onComplete: () => {
                                L = !0, null == p || p(), !A && ((0, l.setIsPersistentHelperHidden)(!0), (0, l.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: m,
                            analyticsLocations: T,
                            analyticsObject: S,
                            analyticsLocation: h,
                            analyticsSourceLocation: I,
                            trialId: P,
                            postSuccessGuild: R,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: N,
                            applicationId: v,
                            referralTrialOfferId: O,
                            returnRef: b
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !L && o.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: U,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != h ? h : S,
                            source: I,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: A,
                            eligible_for_trial: null != P,
                            application_id: v,
                            location_stack: T
                        }), (0, s.clearError)(), (0, u.clearPurchaseTokenAuthState)(), null == _ || _(L), L && (!A && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == m || m())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        626301: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                navigateToPremiumMarketingPage: function() {
                    return i
                }
            });
            var n = r("79112"),
                a = r("49111");
            let i = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                n.default.open(a.UserSettingsSections.PREMIUM, null, {
                    openWithoutBackstack: e
                })
            }
        },
        855133: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                togglePersistentHelper: function() {
                    return a
                },
                setHasCompletedStep: function() {
                    return i
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
            var n = r("913144");
            let a = () => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                i = () => {
                    n.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                s = () => {
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
            var n, a, i, s;
            r.r(t), r.d(t, {
                PremiumHeaderThemes: function() {
                    return n
                },
                PremiumGiftStyles: function() {
                    return a
                },
                PromotionFlags: function() {
                    return u
                }
            }), (i = n || (n = {}))[i.DEFAULT = 0] = "DEFAULT", i[i.WINTER = 1] = "WINTER", (s = a || (a = {}))[s.SNOWGLOBE = 1] = "SNOWGLOBE", s[s.BOX = 2] = "BOX", s[s.CUP = 3] = "CUP", s[s.STANDARD_BOX = 4] = "STANDARD_BOX", s[s.CAKE = 5] = "CAKE", s[s.CHEST = 6] = "CHEST", s[s.COFFEE = 7] = "COFFEE";
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
                    return m
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return T
                }
            });
            var n = r("884691"),
                a = r("65597"),
                i = r("872717"),
                s = r("913144"),
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
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await i.default.get({
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

            function m(e) {
                let {
                    enabled: t,
                    useExpectedValue: r
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), n = d.default.shouldFetchPremiumLikelihood(), a = l.default.getCurrentUser();
                S(a, n, t, r)
            }

            function T(e) {
                let {
                    enabled: t,
                    useExpectedValue: r
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), i = (0, a.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), s = (0, a.default)([l.default], () => l.default.getCurrentUser());
                n.useEffect(() => {
                    S(s, i, t, r)
                }, [s, i, t, r])
            }

            function S(e, t, r, n) {
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
                a = r("913144");
            let i = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                s = i;
            class u extends n.default.Store {
                initialize() {
                    s = i
                }
                getState() {
                    return s
                }
                shouldFetchPremiumLikelihood() {
                    return !s.isFetching && !s.fetched
                }
            }
            u.displayName = "UserPremiumLikelihoodStore";
            var l = new u(a.default, {
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
        552917: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var n = r("862205");
            let a = (0, n.createExperiment)({
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
            var i = a
        },
        15733: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return c
                }
            });
            var n = r("884691"),
                a = r("446674"),
                i = r("913144"),
                s = r("850068"),
                u = r("271938"),
                l = r("160299"),
                o = r("357957");

            function c() {
                let e = (0, a.useStateFromStores)([o.default], () => o.default.getDefaultBillingCountryCode()),
                    t = (0, a.useStateFromStores)([l.default], () => l.default.ipCountryCode),
                    r = (0, a.useStateFromStores)([u.default], () => u.default.isAuthenticated());
                return n.useEffect(() => {
                    i.default.wait(() => {
                        r && !l.default.isPaymentSourceFetching && !o.default.hasFetchedPaymentSources && s.fetchPaymentSources()
                    })
                }, [r]), n.useEffect(() => {
                    r && !l.default.ipCountryCodeLoaded && s.fetchIpCountryCode()
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
                a = r("446674"),
                i = r("862337"),
                s = r("697218"),
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
                let e = (0, a.useStateFromStores)([u.default], () => u.default.getUserDiscount(o.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID)),
                    [t, r] = n.useState(c(e)),
                    d = (0, a.useStateFromStores)([s.default], () => (0, l.isPremium)(s.default.getCurrentUser()));
                return n.useEffect(() => {
                    if (null == e || null == e.expires_at) return;
                    let n = new i.Timeout,
                        a = () => {
                            let i = null != e.expires_at ? Date.parse(e.expires_at) - Date.now() : 0;
                            null == n || n.start(i, () => {
                                !t && c(e) ? r(!0) : a()
                            })
                        };
                    return a(), () => n.stop()
                }, [t, e]), t || d ? null : e
            }
        },
        635956: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return R
                }
            });
            var n = r("37983");
            r("884691");
            var a = r("414456"),
                i = r.n(a),
                s = r("446674"),
                u = r("77078"),
                l = r("79112"),
                o = r("685665"),
                c = r("788506"),
                d = r("649844"),
                f = r("393414"),
                E = r("797647"),
                _ = r("697218"),
                p = r("521012"),
                m = r("471671"),
                T = r("181114"),
                S = r("978679"),
                h = r("216422"),
                I = r("719923"),
                A = r("646718"),
                C = r("49111"),
                g = r("782340"),
                P = r("683437"),
                R = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: a,
                        onClick: R,
                        size: N,
                        className: v,
                        trialId: O,
                        isTrialCTA: M,
                        buttonText: b,
                        buttonTextClassName: L,
                        postSuccessGuild: U,
                        onSubscribeModalClose: x,
                        premiumModalAnalyticsLocation: y,
                        showIcon: D = !0,
                        disableShine: F,
                        applicationId: H,
                        giftMessage: B,
                        overrideDisabledButtonText: k,
                        shinyButtonClassName: j,
                        ...w
                    } = e, G = (0, s.useStateFromStores)([_.default], () => _.default.getCurrentUser()), K = (0, s.useStateFromStores)([m.default], () => m.default.isFocused()), z = (0, s.useStateFromStores)([p.default], () => p.default.getPremiumTypeSubscription()), {
                        analyticsLocations: W
                    } = (0, o.default)(), V = e => {
                        if (e.preventDefault(), null == G) {
                            (0, f.transitionTo)(C.Routes.LOGIN);
                            return
                        }
                        if (null == R || R(e), (null == z ? void 0 : z.status) === C.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, c.trackPremiumSettingsPaneOpened)(), l.default.open(C.UserSettingsSections.PREMIUM), null == x || x(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: a,
                                isGift: i,
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
                                    } = await r.el("984599").then(r.bind(r, "984599"));
                                    return t => {
                                        let {
                                            onClose: r,
                                            ...a
                                        } = t;
                                        return (0, n.jsx)(e, {
                                            ...a,
                                            onClose: r
                                        })
                                    }
                                });
                                return
                            }
                            if (!a) {
                                (0, u.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await r.el("899917").then(r.bind(r, "899917"));
                                    return t => {
                                        let {
                                            onClose: r,
                                            ...a
                                        } = t;
                                        return (0, n.jsx)(e, {
                                            ...a,
                                            onClose: r
                                        })
                                    }
                                });
                                return
                            }
                            let m = C.AnalyticsObjectTypes.BUY;
                            null != l ? m = C.AnalyticsObjectTypes.TRIAL : i && (m = C.AnalyticsObjectTypes.GIFT), (0, d.default)({
                                isGift: i,
                                initialPlanId: null,
                                subscriptionTier: s,
                                analyticsLocations: f,
                                analyticsObject: {
                                    object: C.AnalyticsObjects.BUTTON_CTA,
                                    objectType: m,
                                    ...E
                                },
                                trialId: l,
                                postSuccessGuild: o,
                                onClose: c,
                                applicationId: _,
                                giftMessage: p
                            })
                        }({
                            isClaimed: G.isClaimed(),
                            isVerified: G.verified,
                            isGift: t,
                            subscriptionTier: a,
                            trialId: O,
                            postSuccessGuild: U,
                            onSubscribeModalClose: x,
                            analyticsLocations: W,
                            premiumModalAnalyticsLocation: y,
                            applicationId: H,
                            giftMessage: B
                        })
                    };
                    if (M) return (0, n.jsxs)(u.Button, {
                        size: N,
                        className: v,
                        innerClassName: P.premiumSubscribeButton,
                        look: u.Button.Looks.INVERTED,
                        onClick: V,
                        ...w,
                        children: [D && (0, n.jsx)(h.default, {
                            className: P.premiumIcon
                        }), (0, n.jsx)("span", {
                            className: i(P.buttonText, L),
                            children: null != b ? b : g.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, n.jsxs)(u.Button, {
                        size: N,
                        className: v,
                        innerClassName: P.giftButton,
                        color: u.Button.Colors.PRIMARY,
                        onClick: V,
                        ...w,
                        children: [(0, n.jsx)(S.default, {
                            className: P.giftIcon
                        }), (0, n.jsx)("span", {
                            className: i(P.buttonText, L),
                            children: null != b ? b : g.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let Y = g.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        q = null != z ? (0, I.getPremiumPlanItem)(z) : null,
                        Z = null != q ? I.default.getPremiumType(q.planId) : null == G ? void 0 : G.premiumType,
                        X = a === A.PremiumSubscriptionSKUs.TIER_2 && null != Z && [A.PremiumTypes.TIER_0, A.PremiumTypes.TIER_1].includes(Z);
                    X && (Y = g.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let Q = null != z && z.status !== C.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, E.isNoneSubscription)(z.planId) && !X,
                        J = Q ? null != k ? k : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: r
                            } = e, n = null, a = null;
                            if (null != t && t !== A.PremiumSubscriptionSKUs.LEGACY && t !== A.PremiumSubscriptionSKUs.TIER_0 && t !== A.PremiumSubscriptionSKUs.TIER_1 && t !== A.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: n,
                                disabledButtonTooltipText: a
                            };
                            let i = null != t ? A.PremiumSubscriptionSKUToPremiumType[t] : null,
                                s = null != i ? A.PremiumTypeOrder[i] : null,
                                u = null != r ? A.PremiumTypeOrder[r] : null;
                            return null != u && null != s && s < u ? (n = g.default.Messages.APPLICATION_STORE_GET_PREMIUM, a = g.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != i && null != r && i === r ? (n = g.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, a = g.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == i && null != r && r === A.PremiumTypes.TIER_2 && (a = g.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: n,
                                disabledButtonTooltipText: a
                            }
                        }({
                            ctaSubscriptionSkuId: a,
                            currentPremiumType: Z
                        }) : null;

                    function $(e) {
                        var t, r;
                        return (0, n.jsxs)(T.default, {
                            disabled: Q,
                            onClick: V,
                            innerClassName: P.premiumSubscribeButton,
                            color: a === A.PremiumSubscriptionSKUs.TIER_1 ? u.Button.Colors.PRIMARY : u.Button.Colors.GREEN,
                            size: N,
                            className: j,
                            wrapperClassName: v,
                            pauseAnimation: !K || F,
                            ...w,
                            ...e,
                            children: [D && (0, n.jsx)(h.default, {
                                className: P.premiumIcon
                            }), (0, n.jsx)("span", {
                                className: i(P.buttonText, L),
                                children: null !== (r = null !== (t = null == J ? void 0 : J.disabledButtonText) && void 0 !== t ? t : b) && void 0 !== r ? r : Y
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
                    return a
                }
            });
            var n = r("723251");

            function a(e) {
                let {
                    detail: t = 1,
                    pop: r = 1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    PI: a,
                    min: i,
                    max: s,
                    cos: u,
                    round: l
                } = Math, o = e[0] | e[1] << 8 | e[2] << 16, c = e[3] | e[4] << 8, d = (63 & o) / 63, f = (o >> 6 & 63) / 31.5 - 1, E = (o >> 12 & 63) / 31.5 - 1, _ = o >> 23, p = (c >> 3 & 63) / 63, m = (c >> 9 & 63) / 63, T = c >> 15, S = s(3, T ? _ ? 5 : 7 : 7 & c), h = s(3, T ? 7 & c : _ ? 5 : 7), I = _ ? (15 & e[5]) / 15 : 1, A = (e[5] >> 4) / 15, C = _ ? 6 : 5, g = 0, P = (t, r, n) => {
                    let a = [];
                    for (let i = 0; i < r; i++)
                        for (let s = i ? 0 : 1; s * r < t * (r - i); s++) a.push(((e[C + (g >> 1)] >> ((1 & g++) << 2) & 15) / 7.5 - 1) * n);
                    return a
                }, R = P(S, h, (o >> 18 & 31) / 31 / 2), N = P(3, 3, p * r), v = P(3, 3, m * r), O = _ ? P(5, 5, A) : [], M = (0, n.thumbHashToApproximateAspectRatio)(e), b = l(M > 1 ? 32 : 32 * M), L = l(M > 1 ? 32 / M : 32), U = new Uint8Array(b * L * 4), x = [], y = [];
                for (let e = 0, r = 0; e < L; e++)
                    for (let n = 0; n < b; n++, r += 4) {
                        let l = d,
                            o = f,
                            c = E,
                            p = I;
                        for (let e = 0, t = s(S, _ ? 5 : 3); e < t; e++) x[e] = u(a / b * (n + .5) * e);
                        for (let t = 0, r = s(h, _ ? 5 : 3); t < r; t++) y[t] = u(a / L * (e + .5) * t);
                        for (let e = 0, r = 0; e < h; e++)
                            for (let n = e ? 0 : 1, a = 2 * y[e]; n * h < S * (h - e); n++, r++) !(n > t) && !(e > t) && (l += R[r] * x[n] * a);
                        for (let e = 0, t = 0; e < 3; e++)
                            for (let r = e ? 0 : 1, n = 2 * y[e]; r < 3 - e; r++, t++) {
                                let e = x[r] * n;
                                o += N[t] * e, c += v[t] * e
                            }
                        if (_)
                            for (let e = 0, t = 0; e < 5; e++)
                                for (let r = e ? 0 : 1, n = 2 * y[e]; r < 5 - e; r++, t++) p += O[t] * x[r] * n;
                        let m = l - 2 / 3 * o,
                            T = (3 * l - m + c) / 2,
                            A = T - c;
                        U[r] = s(0, 255 * i(1, T)), U[r + 1] = s(0, 255 * i(1, A)), U[r + 2] = s(0, 255 * i(1, m)), U[r + 3] = s(0, 255 * i(1, p))
                    }
                return {
                    w: b,
                    h: L,
                    rgba: U
                }
            }
        }
    }
]);