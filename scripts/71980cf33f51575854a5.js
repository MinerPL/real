(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["84008"], {
        247329: function(e, t, a) {
            "use strict";
            e.exports = a.p + "d7f558364208761f7a1f.png"
        },
        333838: function(e, t, a) {
            "use strict";
            e.exports = a.p + "f42f024b20ca1139f6e8.png"
        },
        399637: function(e, t, a) {
            "use strict";
            e.exports = a.p + "a4d34e0beb715b3ae5ca.png"
        },
        725015: function(e, t, a) {
            "use strict";
            e.exports = a.p + "815b57292b07014e96a2.png"
        },
        976076: function(e, t, a) {
            "use strict";
            e.exports = a.p + "7fe8141f020d02e97188.png"
        },
        200406: function(e, t, a) {
            "use strict";
            e.exports = a.p + "da2e3e6f963314b6a1e7.png"
        },
        283045: function(e, t, a) {
            "use strict";
            e.exports = a.p + "26da69d314fb3ced9795.png"
        },
        718297: function(e, t, a) {
            "use strict";
            e.exports = a.p + "5d06cba0502c778b92e5.png"
        },
        929880: function(e, t, a) {
            "use strict";
            e.exports = a.p + "bdc1b9ae0098085fe138.png"
        },
        204173: function(e, t, a) {
            "use strict";
            e.exports = a.p + "e67f00e8b56d263737a6.jpg"
        },
        489847: function(e, t, a) {
            "use strict";
            e.exports = a.p + "ab3468632852f3725893.png"
        },
        165057: function(e, t, a) {
            "use strict";
            e.exports = a.p + "50eb2aa99e75c1b8630a.png"
        },
        94646: function(e, t, a) {
            "use strict";
            e.exports = a.p + "c5c556a5e9be016ffb2d.png"
        },
        286642: function(e, t, a) {
            "use strict";
            e.exports = a.p + "a3edb1330403965aa3f6.png"
        },
        655029: function(e, t, a) {
            "use strict";
            e.exports = a.p + "6fac2c0e5ed90d06b3b9.png"
        },
        740683: function(e, t, a) {
            "use strict";
            e.exports = a.p + "7b9383fd24920a3a95b7.png"
        },
        714293: function(e, t, a) {
            "use strict";
            e.exports = a.p + "295744c4b4e7cb95b539.png"
        },
        861485: function(e, t, a) {
            "use strict";
            e.exports = a.p + "16abeb1745235d8aea66.png"
        },
        638538: function(e, t, a) {
            "use strict";
            e.exports = a.p + "ac20c9a7b69e25e9d680.png"
        },
        770704: function(e, t, a) {
            "use strict";
            e.exports = a.p + "81aef01431a5e1293160.png"
        },
        597704: function(e, t, a) {
            "use strict";
            e.exports = a.p + "7bb17dc88ff31be285a8.png"
        },
        290216: function(e, t, a) {
            "use strict";
            e.exports = a.p + "1616ba0a324e68a4fff7.png"
        },
        321220: function(e, t, a) {
            "use strict";
            e.exports = a.p + "0e8e3e9463a4afbcd15a.svg"
        },
        684386: function(e, t, a) {
            "use strict";
            e.exports = a.p + "44b2c2b3210b29c00990.svg"
        },
        93902: function(e, t, a) {
            "use strict";
            e.exports = a.p + "de1981a6479d060d8ebd.png"
        },
        296304: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                usePurchasedCategoriesSort: function() {
                    return n
                }
            }), a("222007"), a("424973");
            var s = a("884691"),
                l = a("65597"),
                r = a("775416");
            let n = e => {
                let t = (0, l.default)([r.default], () => r.default.purchases),
                    a = (0, s.useMemo)(() => {
                        let a = [],
                            s = [];
                        for (let l of e.values()) {
                            let e = l.products.every(e => !!t.get(e.skuId));
                            e ? a.push(l) : s.push(l)
                        }
                        return s.concat(a)
                    }, [e, t]);
                return a
            }
        },
        334820: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                usePurchasedProductsSort: function() {
                    return n
                }
            }), a("222007"), a("424973");
            var s = a("884691"),
                l = a("65597"),
                r = a("775416");
            let n = e => {
                let t = (0, l.default)([r.default], () => r.default.purchases),
                    a = (0, s.useMemo)(() => {
                        let a = [],
                            s = [];
                        for (let l of e.values()) void 0 !== t.get(l.skuId) ? a.push(l) : s.push(l);
                        return s.concat(a)
                    }, [e, t]);
                return a
            }
        },
        716120: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return m
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("414456"),
                r = a.n(l),
                n = a("65597"),
                o = a("854588"),
                i = a("206230"),
                c = a("284679"),
                u = a("491232"),
                d = a("408381"),
                f = a("268779"),
                m = e => {
                    let {
                        asset: t,
                        size: a = d.MAX_CONTENT_WIDTH,
                        className: l,
                        style: m,
                        children: C
                    } = e, E = (0, n.default)([i.default], () => i.default.saturation);
                    return (0, s.jsx)("div", {
                        className: r(f.banner, l),
                        style: (() => {
                            if (null == t) return m;
                            let e = (0, u.getCollectiblesAssetURL)(t, {
                                size: a,
                                format: "jpg"
                            });
                            if (1 === E) return {
                                ...m,
                                backgroundImage: "url(".concat(e, ")"),
                                backgroundSize: "cover"
                            };
                            let s = (0, c.hexOpacityToRgba)(o.default.unsafe_rawColors.BLACK_500, 1 - E);
                            return {
                                ...m,
                                backgroundImage: "linear-gradient(".concat(s, ", ").concat(s, "), url(").concat(e, ")"),
                                backgroundBlendMode: "saturation",
                                backgroundSize: "cover"
                            }
                        })(),
                        children: C
                    })
                }
        },
        89569: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useProductDetailsLinkableRoute: function() {
                    return E
                },
                useProductDetailsDeepLinking: function() {
                    return p
                }
            }), a("781738"), a("222007"), a("424973");
            var s = a("884691"),
                l = a("803182"),
                r = a("446674"),
                n = a("812204"),
                o = a("685665"),
                i = a("805172"),
                c = a("216719"),
                u = a("54809"),
                d = a("49111");
            let f = "".concat("#").concat("itemSkuId", "="),
                m = new RegExp("^".concat(f, "(\\d+)$")),
                C = [d.Routes.COLLECTIBLES_SHOP, d.Routes.COLLECTIBLES_SHOP_FULLSCREEN],
                E = e => {
                    let {
                        marketingEnabled: t
                    } = (0, i.default)({
                        location: "useProductDetailsDeepLinking"
                    }), a = (0, l.useLocation)();
                    s.useEffect(() => {
                        if (t && null != e && C.includes(a.pathname)) return window.location.replace("".concat(f).concat(e.skuId)), () => {
                            window.location.hash.startsWith(f) && window.location.replace("#")
                        }
                    }, [])
                },
                g = e => {
                    let {
                        categories: t,
                        productSkuId: a,
                        analyticsLocations: s,
                        analyticsSource: l,
                        initialItemCardRef: r
                    } = e;
                    for (let e of t.values()) {
                        let t = e.products.find(e => e.skuId === a);
                        if (null != t) {
                            var n;
                            null === (n = r.current) || void 0 === n || n.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                                inline: "center"
                            });
                            let a = setTimeout(() => {
                                let a = document.getElementById("shop-item-".concat(t.skuId));
                                a !== document.activeElement && (null == a || a.focus()), (0, u.openCollectiblesShopProductDetailsModal)({
                                    product: t,
                                    category: e,
                                    analyticsSource: l,
                                    analyticsLocations: s,
                                    returnRef: r
                                })
                            }, 750);
                            return () => clearTimeout(a)
                        }
                    }
                    return () => {}
                },
                p = e => {
                    let {
                        categories: t,
                        isFetchingCategories: a,
                        isLayer: u,
                        initialItemCardRef: f
                    } = e, {
                        marketingEnabled: C
                    } = (0, i.default)({
                        location: "useProductDetailsDeepLinking"
                    }), E = s.useRef(null), p = (0, l.useLocation)(), S = p.pathname === d.Routes.COLLECTIBLES_SHOP ? n.default.HOME_PAGE_SHOP_TAB : p.pathname === d.Routes.COLLECTIBLES_SHOP_FULLSCREEN ? n.default.COLLECTIBLES_SHOP_FULLSCREEN : n.default.COLLECTIBLES_SHOP, {
                        analyticsLocations: h
                    } = (0, o.default)(S);
                    s.useEffect(() => {
                        if (u) return;
                        let e = m.exec(p.hash);
                        if (null != e) {
                            let t = e[1];
                            E.current = t
                        }
                    }, []);
                    let L = (0, r.useStateFromStores)([c.default], () => c.default.initialProductSkuId);
                    s.useEffect(() => {
                        if (!C || a) return;
                        let e = null;
                        if (u && null != L && (e = L), !u && null != E.current && (e = E.current), null != e) {
                            let a = [],
                                s = setTimeout(() => {
                                    let s = g({
                                        categories: t,
                                        productSkuId: e,
                                        analyticsLocations: h,
                                        analyticsSource: S,
                                        initialItemCardRef: f
                                    });
                                    a.push(s)
                                }, 250);
                            return a.push(() => clearTimeout(s)), () => {
                                a.forEach(e => e())
                            }
                        }
                    }, [u, h, S, t, a, L, f, C])
                }
        },
        342676: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return g
                }
            }), a("794252");
            var s, l, r = a("37983");
            a("884691");
            var n = a("414456"),
                o = a.n(n),
                i = a("506838"),
                c = a("65597"),
                u = a("697218"),
                d = a("956089"),
                f = a("719923"),
                m = a("805172"),
                C = a("782340"),
                E = a("224609");
            (l = s || (s = {})).BANNER = "banner", l.MODAL = "modal", l.CARD = "card";
            var g = e => {
                let {
                    category: t,
                    display: a,
                    className: s
                } = e, l = (0, c.default)([u.default], () => u.default.getCurrentUser()), n = f.default.canUseCollectibles(l), {
                    shopForAllEnabled: g
                } = (0, m.default)({
                    location: "CollectiblesLimitedTimeBadge"
                });
                if (!n && !g || null == t.unpublishedAt) return null;
                let p = function(e) {
                    let t = new Date,
                        a = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()),
                        s = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
                    return Math.floor((s - a) / 864e5)
                }(t.unpublishedAt);

                function S(e) {
                    return (0, r.jsx)(d.TextBadge, {
                        disableColor: !0,
                        text: e,
                        className: o(E.badge, s)
                    })
                }
                return (0, i.match)([a, p > 1]).with(["card", !0], () => null).with(["banner", !0], () => {
                    let e = C.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
                        days: p
                    });
                    return S(e)
                }).with(["modal", !0], () => {
                    let e = C.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
                        days: p
                    });
                    return S(e)
                }).otherwise(() => {
                    let e = C.default.Messages.COLLECTIBLES_LAST_DAY;
                    return S(e)
                })
            }
        },
        258556: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return ee
                }
            }), a("222007");
            var s = a("37983"),
                l = a("884691"),
                r = a("414456"),
                n = a.n(r),
                o = a("635058"),
                i = a("265586"),
                c = a("65597"),
                u = a("151426"),
                d = a("77078"),
                f = a("939488"),
                m = a("54239"),
                C = a("304580"),
                E = a("841098"),
                g = a("812204"),
                p = a("685665"),
                S = a("10641"),
                h = a("509802"),
                L = a("539938"),
                x = a("393414"),
                T = a("778588"),
                b = a("697218"),
                _ = a("764490"),
                I = a("29557"),
                v = a("956089"),
                N = a("599110"),
                O = a("719923"),
                A = a("439932"),
                j = a("21526"),
                R = a("853987"),
                P = a("805172"),
                y = a("216719"),
                k = a("491232"),
                B = a("235898"),
                D = a("296304"),
                F = a("334820"),
                M = a("89569"),
                H = a("419513"),
                w = a("434393"),
                U = a("571464"),
                W = a("43525"),
                G = a("798235"),
                z = a("931262"),
                V = a("695824"),
                K = a("594849"),
                Y = a("49111"),
                X = a("994428"),
                Z = a("646718"),
                q = a("782340"),
                $ = a("451594");
            let J = [u.DismissibleContent.COLLECTIBLES_SHOP_FOR_ALL_INTERACTIVE_MODAL_UPSELL, u.DismissibleContent.COLLECTIBLES_SHOP_FOR_ALL_ACCOUNT_POPOUT_UPSELL, u.DismissibleContent.COLLECTIBLES_SHOP_FOR_ALL_NITRO_ONLY_COACHMARK, u.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK];

            function Q(e) {
                let {
                    category: t,
                    className: a,
                    isPremiumUser: r,
                    initialItemCardRef: o
                } = e, f = R.default.getProductsByItemType(t.skuId), m = (0, F.usePurchasedProductsSort)(null != f && i.CollectiblesItemType.AVATAR_DECORATION in f ? f[i.CollectiblesItemType.AVATAR_DECORATION] : []), C = (0, F.usePurchasedProductsSort)(null != f && i.CollectiblesItemType.PROFILE_EFFECT in f ? f[i.CollectiblesItemType.PROFILE_EFFECT] : []), E = C.length > 0, g = (0, k.isPremiumCollectiblesCategory)(t), p = [...E ? [u.DismissibleContent.PROFILE_EFFECT_SHOP_NEW_BADGE] : [], ...E && g ? [u.DismissibleContent.DISXCORE_PROFILE_EFFECTS_NEW_BADGE] : []], [S, L] = (0, h.useDismissibleContentGroup)(p);
                l.useEffect(() => () => {
                    null != S && L(X.ContentDismissActionType.USER_DISMISS)
                }, [S, L]);
                let x = (0, c.default)([y.default], () => y.default.initialProductSkuId),
                    T = l.useCallback(e => t => {
                        e.skuId === x && (o.current = t.current)
                    }, [x, o]);
                return null == f || 0 === m.length ? null : (0, s.jsxs)("div", {
                    children: [(0, s.jsx)(H.default, {
                        category: t
                    }), m.length > 0 && (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(d.Text, {
                            className: $.itemTypeTitle,
                            color: "header-secondary",
                            variant: "text-sm/bold",
                            children: q.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER
                        }), (0, s.jsx)("div", {
                            className: n($.cardsContainer, a),
                            children: m.map(e => (0, s.jsx)(w.default, {
                                onMount: T(e),
                                isPremiumUser: r,
                                category: t,
                                product: e
                            }, e.storeListingId))
                        })]
                    }), C.length > 0 && (0, s.jsxs)("div", {
                        children: [(0, s.jsxs)("div", {
                            className: $.itemTypeTitleContainer,
                            children: [(0, s.jsx)(d.Text, {
                                className: $.itemTypeTitle,
                                color: "header-secondary",
                                variant: "text-sm/bold",
                                children: q.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE
                            }), null != S && (0, s.jsx)(v.PremiumBadge, {
                                className: $.newItemTypeBadge,
                                text: q.default.Messages.NEW
                            })]
                        }), (0, s.jsx)("div", {
                            className: n($.cardsContainer, a),
                            children: C.map(e => (0, s.jsx)(w.default, {
                                onMount: T(e),
                                isPremiumUser: r,
                                category: t,
                                product: e
                            }, e.storeListingId))
                        })]
                    })]
                })
            }
            var ee = function(e) {
                let {
                    isFullScreen: t = !0
                } = e, {
                    analyticsSource: a,
                    analyticsLocations: r
                } = (0, c.useStateFromStoresObject)([y.default], () => y.default.getAnalytics()), {
                    AnalyticsLocationProvider: u,
                    analyticsLocations: h
                } = (0, p.default)([...r, g.default.COLLECTIBLES_SHOP]), v = (0, c.default)([T.default], () => T.default.getLayers().includes(Y.Layers.COLLECTIBLES_SHOP)), {
                    source: R
                } = (0, z.useCollectiblesShopRouting)(), F = (0, c.default)([b.default], () => b.default.getCurrentUser()), H = O.default.canUseCollectibles(F), {
                    categories: w,
                    isFetchingCategories: ee,
                    error: et
                } = (0, B.default)(), ea = (0, D.usePurchasedCategoriesSort)(w), {
                    shopForAllEnabled: es,
                    marketingEnabled: el
                } = (0, P.default)({
                    location: "CollectiblesShop"
                }), er = l.useRef(null);
                (0, M.useProductDetailsDeepLinking)({
                    categories: w,
                    isFetchingCategories: ee,
                    isLayer: v,
                    initialItemCardRef: er
                }), l.useEffect(() => {
                    N.default.track(Y.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: h,
                        source: a
                    }), !H && N.default.track(Y.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: Z.PremiumUpsellTypes.COLLECTIBLES_SHOP,
                        location_stack: h
                    })
                }, [H, h, a]), l.useEffect(() => {
                    J.forEach(e => {
                        !(0, S.isDismissibleContentDismissed)(e) && (0, S.markDismissibleContentAsDismissed)(e, {
                            dismissAction: X.ContentDismissActionType.AUTO_DISMISS,
                            forceTrack: !0
                        })
                    })
                }, []), l.useEffect(() => {
                    !t && (0, f.setHomeLink)(Y.Routes.COLLECTIBLES_SHOP)
                }, [t]), l.useEffect(() => () => {
                    (0, j.setCollectiblesCategoryItemsViewed)({
                        categories: [...w.values()],
                        itemTypes: [i.CollectiblesItemType.AVATAR_DECORATION, i.CollectiblesItemType.PROFILE_EFFECT]
                    })
                }, [w]);
                let en = () => {
                        (0, j.fetchCollectiblesCategories)()
                    },
                    eo = (0, E.default)(),
                    ei = [...w.values()].find(e => {
                        let {
                            skuId: t
                        } = e;
                        return t === o.CollectiblesCategorySkuId.DISXCORE
                    });
                return (0, s.jsx)(u, {
                    children: (0, s.jsxs)("div", {
                        className: $.shop,
                        children: [t ? null : (0, s.jsxs)(L.default, {
                            className: n((0, A.getThemeClass)(eo), $.headerBar),
                            toolbar: !0,
                            children: [(0, s.jsx)(I.default, {
                                className: $.logo
                            }), (0, s.jsx)(L.default.Title, {
                                className: $.title,
                                children: q.default.Messages.COLLECTIBLES_SHOP
                            })]
                        }), (0, s.jsx)(d.ScrollerAuto, {
                            className: $.shopScroll,
                            children: (0, s.jsxs)("div", {
                                className: n($.pageWrapper, {
                                    [$.pageWrapperFullscreen]: t
                                }),
                                children: [(0, s.jsxs)("main", {
                                    className: $.page,
                                    children: [t ? (0, s.jsx)(_.default, {
                                        title: q.default.Messages.COLLECTIBLES_SHOP
                                    }) : null, el ? (0, s.jsx)(G.default, {
                                        isFullScreen: t
                                    }) : (0, s.jsx)(W.default, {
                                        isFullScreen: t
                                    }), es || H || null == ei ? null : (0, s.jsx)(K.default, {
                                        category: ei
                                    }), ee ? (0, s.jsx)(V.default, {}) : et ? (0, s.jsx)(U.default, {
                                        onRetry: en
                                    }) : (0, s.jsx)("div", {
                                        children: ea.map(e => !(0, k.isPremiumCollectiblesCategory)(e) || es || H ? (0, s.jsx)(Q, {
                                            isPremiumUser: H,
                                            category: e,
                                            initialItemCardRef: er
                                        }, e.storeListingId) : null)
                                    })]
                                }), t && (0, s.jsx)("div", {
                                    children: (0, s.jsx)(C.default, {
                                        className: $.close,
                                        closeAction: () => {
                                            if (v) {
                                                (0, j.closeCollectiblesShop)();
                                                return
                                            }
                                            R === z.CollectiblesShopSourceParam.SETTINGS && ((0, x.back)(), (0, m.pushLayer)(Y.Layers.USER_SETTINGS)), 0 === (0, x.getHistory)().length ? (0, x.transitionTo)(Y.Routes.APP) : (0, x.back)()
                                        },
                                        keybind: "ESC"
                                    })
                                })]
                            })
                        })]
                    })
                })
            }
        },
        419513: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return I
                }
            });
            var s = a("37983"),
                l = a("884691"),
                r = a("635058"),
                n = a("65597"),
                o = a("77078"),
                i = a("685665"),
                c = a("649844"),
                u = a("697218"),
                d = a("153769"),
                f = a("270227"),
                m = a("719923"),
                C = a("805172"),
                E = a("491232"),
                g = a("716120"),
                p = a("342676"),
                S = a("408381"),
                h = a("57940"),
                L = a("646718"),
                x = a("782340"),
                T = a("927694");
            let b = (0, S.getLogoSize)(96),
                _ = e => {
                    let {
                        category: t
                    } = e, {
                        analyticsLocations: a
                    } = (0, i.default)(), r = l.useRef(null), d = (0, n.default)([u.default], () => u.default.getCurrentUser()), {
                        shopForAllEnabled: f
                    } = (0, C.default)({
                        location: "DisxcoreSummary"
                    });
                    return !f || m.default.canUseCollectibles(d) ? (0, s.jsx)(s.Fragment, {
                        children: t.summary
                    }) : (0, s.jsx)(s.Fragment, {
                        children: x.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
                            getPremium: e => (0, s.jsx)(o.Clickable, {
                                innerRef: r,
                                className: T.getPremiumHook,
                                onClick: () => {
                                    (0, c.default)({
                                        subscriptionTier: L.PremiumSubscriptionSKUs.TIER_2,
                                        analyticsLocations: a,
                                        returnRef: r
                                    })
                                },
                                tag: "span",
                                children: (0, s.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    color: "always-white",
                                    tag: "span",
                                    children: e
                                })
                            })
                        })
                    })
                };

            function I(e) {
                let {
                    category: t
                } = e, {
                    backgroundColors: a
                } = (0, h.default)(t);
                return (0, s.jsxs)(g.default, {
                    asset: t.banner,
                    className: T.shopBanner,
                    style: null != a ? {
                        background: "".concat((0, S.getBackgroundGradient)(a), " border-box border-box"),
                        outlineColor: a.border.toHslString()
                    } : void 0,
                    children: [(0, s.jsxs)("div", {
                        className: T.discordLogo,
                        children: [(0, s.jsx)(d.default, {
                            className: T.discordIcon
                        }), (0, s.jsx)(f.default, {
                            className: T.discordWordmark
                        })]
                    }), (0, s.jsx)("img", {
                        className: T.categoryLogo,
                        src: (0, E.getCollectiblesAssetURL)(t.logo, {
                            size: b
                        }),
                        alt: t.name
                    }), (0, s.jsx)(o.Text, {
                        className: T.summary,
                        variant: "text-md/normal",
                        color: "always-white",
                        children: t.skuId === r.CollectiblesCategorySkuId.DISXCORE ? (0, s.jsx)(_, {
                            category: t
                        }) : t.summary
                    }), (0, s.jsx)(p.default, {
                        category: t,
                        className: T.limitedTimeBadge,
                        display: "banner"
                    })]
                })
            }
        },
        434393: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return q
                }
            }), a("222007");
            var s = a("37983"),
                l = a("884691"),
                r = a("414456"),
                n = a.n(r),
                o = a("65597"),
                i = a("669491"),
                c = a("77078"),
                u = a("54239"),
                d = a("252744"),
                f = a("812204"),
                m = a("685665"),
                C = a("606292"),
                E = a("688318"),
                g = a("946964"),
                p = a("635956"),
                S = a("38766"),
                h = a("662286"),
                L = a("601095"),
                x = a("493390"),
                T = a("697218"),
                b = a("944441"),
                _ = a("462579"),
                I = a("216422"),
                v = a("956089"),
                N = a("50885"),
                O = a("21526"),
                A = a("417313"),
                j = a("775416"),
                R = a("805172"),
                P = a("491232"),
                y = a("730297"),
                k = a("806410"),
                B = a("342676"),
                D = a("450492"),
                F = a("920580"),
                M = a("54809"),
                H = a("408381"),
                w = a("264579"),
                U = a("57940"),
                W = a("646718"),
                G = a("782340"),
                z = a("395535");
            let V = N.default.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar,
                K = c.AvatarSizes.SIZE_120,
                Y = (0, C.getDecorationSizeForAvatarSize)(K),
                X = e => {
                    let {
                        children: t,
                        onClick: a,
                        ...l
                    } = e;
                    return (0, s.jsx)(c.Button, {
                        fullWidth: !0,
                        look: c.Button.Looks.FILLED,
                        onClick: e => {
                            e.stopPropagation(), a()
                        },
                        ...l,
                        children: t
                    })
                },
                Z = e => {
                    let {
                        className: t,
                        ...a
                    } = e;
                    return (0, s.jsx)(c.Button, {
                        color: c.ButtonColors.CUSTOM,
                        look: c.Button.Looks.FILLED,
                        size: c.ButtonSizes.ICON,
                        className: n(z.previewButton, t),
                        innerClassName: z.previewButtonInner,
                        "aria-label": G.default.Messages.PREVIEW,
                        ...a,
                        children: (0, s.jsx)(_.default, {
                            width: 24,
                            height: 24
                        })
                    })
                };
            var q = function(e) {
                let {
                    product: t,
                    category: a,
                    onMount: r,
                    isPremiumUser: _ = !1
                } = e, {
                    analyticsLocations: N
                } = (0, m.default)(f.default.COLLECTIBLES_SHOP_CARD), q = l.useRef(null), $ = (0, d.default)(q), [J, Q] = l.useState(!1), ee = $ || J, et = (0, o.default)([T.default], () => T.default.getCurrentUser()), ea = t.items.find(y.isAvatarDecorationRecord), es = t.items.find(k.isProfileEffectRecord), {
                    avatarDecorationSrc: el,
                    eventHandlers: er,
                    avatarPlaceholderSrc: en
                } = (0, E.default)({
                    user: et,
                    avatarDecorationOverride: ea,
                    size: Y,
                    animateOnHover: !ee
                }), {
                    buttonColors: eo,
                    backgroundColors: ei
                } = (0, U.default)(a), ec = (0, P.getFormattedPriceForCollectiblesProduct)(t, _), eu = (0, P.isPremiumCollectiblesCategory)(a), [ed, ef, em] = (0, o.useStateFromStoresArray)([j.default], () => [j.default.getPurchase(t.skuId), j.default.isClaiming === t.skuId, null != j.default.isClaiming && j.default.isClaiming !== t.skuId]), eC = (0, h.useCanUseProfileEffects)({
                    location: "CollectiblesShopCard"
                }), {
                    shopForAllEnabled: eE
                } = (0, R.default)({
                    location: "CollectiblesShopCard"
                }), {
                    giftingEnabled: eg
                } = (0, A.default)({
                    location: "CollectiblesShopCard"
                });
                l.useEffect(() => {
                    let {
                        current: e
                    } = q;
                    if (null == e) return;
                    let t = () => Q(!0);
                    return e.addEventListener("focusin", t), e.blur(), () => {
                        e.removeEventListener("focusin", t)
                    }
                }, []);
                let ep = (0, S.default)({
                        analyticsLocations: N
                    }),
                    eS = () => {
                        (0, u.popLayer)(), ep(), null != ea ? (0, C.openAvatarDecorationModal)({
                            analyticsLocations: N,
                            initialSelectedDecoration: t.items.find(y.isAvatarDecorationRecord)
                        }) : null != es && (0, x.openProfileEffectModal)({
                            analyticsLocations: N,
                            initialSelectedEffectID: null == es ? void 0 : es.id
                        })
                    },
                    eh = e => () => {
                        (0, M.openCollectiblesShopProductDetailsModal)({
                            product: t,
                            category: a,
                            analyticsLocations: N,
                            analyticsSource: e,
                            returnRef: q
                        })
                    },
                    eL = eh(f.default.COLLECTIBLES_SHOP_CARD),
                    ex = eh(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                    eT = () => (0, s.jsxs)("div", {
                        className: z.hoverUpsellContainer,
                        children: [!eE && (0, s.jsx)(c.Text, {
                            color: "always-white",
                            variant: "text-md/normal",
                            className: z.description,
                            children: null != es ? G.default.Messages.COLLECTIBLES_PROFILE_EFFECT_NON_PREMIUM_CARD_INFO : G.default.Messages.COLLECTIBLES_NON_PREMIUM_CARD_INFO
                        }), (0, s.jsxs)("div", {
                            className: z.buttonsContainer,
                            children: [(0, s.jsx)(p.default, {
                                fullWidth: !0,
                                className: z.premiumSubscribeButton,
                                disabled: em,
                                onClick: e => e.stopPropagation(),
                                buttonText: eE ? G.default.Messages.UNLOCK_WITH_NITRO : G.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA,
                                subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2
                            }), (0, s.jsx)(Z, {
                                className: z.defaultPreviewButtonColor,
                                style: {
                                    color: i.default.unsafe_rawColors.WHITE_500.css
                                },
                                onClick: ex
                            })]
                        })]
                    });
                l.useEffect(() => {
                    null == r || r(q)
                }, [r]);
                let eb = () => null != ed ? (0, s.jsx)(c.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: z.priceTag,
                        children: G.default.Messages.COLLECTIBLES_ALREADY_OWNED
                    }) : eu ? (0, s.jsx)(c.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: z.priceTag,
                        children: G.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    }) : (0, s.jsx)(F.default, {
                        product: t,
                        className: z.priceTag,
                        disableTooltipPointerEvents: !0
                    }),
                    e_ = () => {
                        if (eE && eu && !_ || !_ && !eE && null == ed) return eT();
                        let e = null != eo ? {
                                background: (0, H.getBackgroundGradient)(eo, 90),
                                color: eo.text.toHslString()
                            } : void 0,
                            l = null != eo ? {
                                background: eo.secondary.toHslString(),
                                color: eo.text.toHslString()
                            } : void 0;
                        return null == ed && eu ? (0, s.jsxs)("div", {
                            className: z.buttonsContainer,
                            children: [(0, s.jsx)(X, {
                                style: e,
                                className: z.purchaseButton,
                                submitting: ef,
                                submittingStartedLabel: G.default.Messages.COLLECTIBLES_COLLECTING,
                                submittingFinishedLabel: G.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                disabled: em,
                                onClick: async () => {
                                    await (0, O.claimPremiumCollectiblesProduct)(t.skuId), (0, w.default)({
                                        product: t,
                                        category: a,
                                        analyticsLocations: N
                                    })
                                },
                                children: G.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                            }), (0, s.jsx)(Z, {
                                style: l,
                                onClick: ex
                            })]
                        }) : null == ed ? (0, s.jsxs)("div", {
                            className: z.buttonsContainer,
                            children: [(0, s.jsx)(X, {
                                style: e,
                                className: z.purchaseButton,
                                disabled: em,
                                onClick: () => (0, g.default)({
                                    skuId: t.skuId,
                                    analyticsLocations: N,
                                    returnRef: q
                                }),
                                children: G.default.Messages.COLLECTIBLES_PURCHASE.format({
                                    price: ec
                                })
                            }), eg ? (0, s.jsx)(D.default, {
                                product: t,
                                returnRef: q
                            }) : (0, s.jsx)(Z, {
                                style: l,
                                onClick: ex
                            })]
                        }) : (0, s.jsxs)("div", {
                            className: z.buttonsContainer,
                            children: [(0, s.jsx)(X, {
                                style: e,
                                disabled: em,
                                onClick: eS,
                                children: G.default.Messages.COLLECTIBLES_USE_NOW
                            }), eg ? (0, s.jsx)(D.default, {
                                product: t,
                                returnRef: q
                            }) : (0, s.jsx)(Z, {
                                style: l,
                                className: z.defaultPreviewButtonColor,
                                onClick: ex
                            })]
                        })
                    };
                if (void 0 === ea && null != es && !1 === eC) return null;
                let eI = null != ei ? {
                    background: "".concat((0, H.getBackgroundGradient)(ei), " border-box border-box"),
                    borderColor: ei.border.toHslString(),
                    boxShadow: ee ? "0 0 25px 1px ".concat(ei.primary.toHslString()) : "none"
                } : void 0;
                return (0, s.jsx)(c.FocusRing, {
                    children: (0, s.jsxs)(c.Clickable, {
                        innerRef: q,
                        className: z.shopCard,
                        onBlur: () => Q(!1),
                        onClick: eL,
                        style: eI,
                        id: "shop-item-".concat(t.skuId),
                        children: [eu && (0, s.jsx)(c.Tooltip, {
                            tooltipContentClassName: z.premiumWheelTooltipContent,
                            color: c.Tooltip.Colors.PRIMARY,
                            text: G.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                            children: e => (0, s.jsx)(v.TextBadge, {
                                ...e,
                                className: z.premiumWheelBadge,
                                text: (0, s.jsx)(I.default, {
                                    className: z.premiumWheel
                                })
                            })
                        }), null != es && (0, s.jsx)("div", {
                            className: z.profileEffectShopPreview,
                            children: (0, s.jsx)(L.default, {
                                isHovering: ee,
                                profileEffectId: null == es ? void 0 : es.id,
                                isPurchased: null != ed
                            })
                        }), null != ea && (0, s.jsx)(V, {
                            ...er,
                            avatarDecoration: el,
                            src: en,
                            className: n(z.avatar, {
                                [z.avatarPurchased]: null != ed
                            }),
                            size: K,
                            "aria-label": G.default.Messages.USER_SETTINGS_AVATAR
                        }), null != ed ? (0, s.jsx)("div", {
                            className: null != ea ? z.checkmarkWrapper : z.profileEffectCheckmarkWrapper,
                            children: (0, s.jsx)(b.default, {
                                width: 38,
                                height: 38,
                                className: z.checkmark
                            })
                        }) : null, (0, s.jsxs)("div", {
                            className: n(z.cardText, {
                                [z.cardTextProfileEffect]: null != es
                            }),
                            children: [(0, s.jsx)("div", {
                                className: z.productName,
                                children: (_ || eE) && (0, s.jsx)(c.Text, {
                                    color: "always-white",
                                    variant: "text-lg/bold",
                                    children: t.name
                                })
                            }), (0, s.jsxs)("div", {
                                className: z.detailsWrapper,
                                children: [(0, s.jsxs)("div", {
                                    className: z.innerBlur,
                                    children: [!_ && !eE && (0, s.jsx)(c.Text, {
                                        color: "always-white",
                                        variant: "text-lg/bold",
                                        children: t.name
                                    }), (0, s.jsx)(c.Text, {
                                        color: "always-white",
                                        className: z.description,
                                        variant: "text-md/normal",
                                        children: t.summary
                                    }), eb()]
                                }), (0, s.jsx)("div", {
                                    className: z.innerHover,
                                    children: e_()
                                })]
                            })]
                        }), (0, s.jsx)(B.default, {
                            category: a,
                            className: z.limitedTimeBadge,
                            display: "card"
                        })]
                    })
                })
            }
        },
        571464: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("819855"),
                r = a("77078"),
                n = a("841098"),
                o = a("782340"),
                i = a("139948"),
                c = a("321220"),
                u = a("684386"),
                d = e => {
                    let {
                        onRetry: t
                    } = e, a = (0, n.default)();
                    return (0, s.jsxs)("div", {
                        className: i.wrapper,
                        children: [(0, s.jsx)("img", {
                            className: i.loadIssueImg,
                            src: (0, l.isThemeDark)(a) ? c : u,
                            alt: ""
                        }), (0, s.jsx)(r.Heading, {
                            className: i.heading1,
                            variant: "heading-xl/semibold",
                            children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
                        }), (0, s.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
                        }), (0, s.jsx)(r.Button, {
                            className: i.reload,
                            size: r.Button.Sizes.MEDIUM,
                            color: r.Button.Colors.BRAND_NEW,
                            onClick: t,
                            children: o.default.Messages.ERRORS_RELOAD
                        })]
                    })
                }
        },
        450492: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return m
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("77078"),
                r = a("446674"),
                n = a("685665"),
                o = a("946964"),
                i = a("978679"),
                c = a("853987"),
                u = a("57940"),
                d = a("782340"),
                f = a("436752"),
                m = e => {
                    let {
                        product: t,
                        returnRef: a,
                        onSuccess: m
                    } = e, {
                        analyticsLocations: C
                    } = (0, n.default)(), E = (0, r.useStateFromStores)([c.default], () => c.default.getCategoryForProduct(t.skuId)), {
                        buttonColors: g
                    } = (0, u.default)(E), p = null != g ? {
                        background: g.secondary.toHslString(),
                        color: g.text.toHslString()
                    } : void 0;
                    return (0, s.jsx)(l.Button, {
                        style: p,
                        className: f.giftButton,
                        color: l.ButtonColors.CUSTOM,
                        look: l.Button.Looks.FILLED,
                        size: l.ButtonSizes.ICON,
                        innerClassName: f.giftButtonInner,
                        "aria-label": d.default.Messages.PREMIUM_GIFTING_BUTTON,
                        onClick: e => {
                            e.stopPropagation(), (0, o.default)({
                                skuId: t.skuId,
                                isGift: !0,
                                analyticsLocations: C,
                                returnRef: a,
                                onClose: null != m ? e => {
                                    e && m()
                                } : void 0
                            })
                        },
                        children: (0, s.jsx)(i.default, {
                            width: 24,
                            height: 24
                        })
                    })
                }
        },
        43525: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return L
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("414456"),
                r = a.n(l),
                n = a("65597"),
                o = a("77078"),
                i = a("635956"),
                c = a("697218"),
                u = a("216422"),
                d = a("719923"),
                f = a("805172"),
                m = a("646718"),
                C = a("782340"),
                E = a("98881"),
                g = a("247329"),
                p = a("333838"),
                S = a("399637"),
                h = a("976076"),
                L = function(e) {
                    let {
                        isFullScreen: t
                    } = e, a = (0, n.default)([c.default], () => c.default.getCurrentUser()), l = d.default.canUseCollectibles(a), {
                        shopForAllEnabled: L
                    } = (0, f.default)({
                        location: "CollectiblesShopHeader"
                    }), x = L && !l;
                    return (0, s.jsxs)("div", {
                        className: r(E.heroBanner, {
                            [E.shopForAllHeroBanner]: x
                        }),
                        children: [(0, s.jsxs)("div", {
                            className: r(E.heroDescription, {
                                [E.heroDescriptionWithSidebar]: !t
                            }),
                            children: [!x && (0, s.jsxs)(o.Text, {
                                color: "always-white",
                                variant: "eyebrow",
                                className: E.premiumBadgeWrapper,
                                children: [(0, s.jsx)(u.default, {
                                    className: E.premiumBadge
                                }), (0, s.jsx)("span", {
                                    className: E.premiumBadgeText,
                                    children: C.default.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
                                })]
                            }), (0, s.jsx)(o.Heading, {
                                className: E.bannerTitle,
                                color: "always-white",
                                variant: "display-lg",
                                children: C.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
                            }), (0, s.jsx)(o.Text, {
                                className: E.heroSubtitle,
                                color: "always-white",
                                variant: "text-lg/normal",
                                children: L ? C.default.Messages.COLLECTIBLES_SFA_HERO_BANNER_SUBTITLE : C.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_SUBTITLE
                            }), L || l ? null : (0, s.jsx)(i.default, {
                                className: E.subscribeButton,
                                isTrialCTA: !0,
                                buttonText: C.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA,
                                subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2
                            })]
                        }), (0, s.jsx)("div", {
                            className: E.bannerBackgroundWrapper,
                            children: (0, s.jsx)("img", {
                                className: E.bannerBackground,
                                alt: "",
                                src: g
                            })
                        }), (0, s.jsx)("img", {
                            className: E.bannerForeground,
                            alt: "",
                            src: p
                        }), (0, s.jsx)("img", {
                            className: E.bannerHand,
                            alt: "",
                            src: S
                        }), (0, s.jsx)("img", {
                            className: r(E.largeSparkle, E.largeTopSparkle),
                            alt: "",
                            src: h
                        }), (0, s.jsx)("img", {
                            className: r(E.smallSparkle, E.smallTopSparkle),
                            alt: "",
                            src: h
                        }), (0, s.jsx)("img", {
                            className: r(E.largeSparkle, E.largeLeftSparkle),
                            alt: "",
                            src: h
                        }), (0, s.jsx)("img", {
                            className: r(E.smallSparkle, E.smallLeftSparkle),
                            alt: "",
                            src: h
                        }), (0, s.jsx)("img", {
                            className: r(E.largeSparkle, E.largeRightSparkle),
                            alt: "",
                            src: h
                        }), (0, s.jsx)("img", {
                            className: r(E.smallSparkle, E.smallRightSparkle),
                            alt: "",
                            src: h
                        })]
                    })
                }
        },
        798235: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return m
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("414456"),
                r = a.n(l),
                n = a("77078"),
                o = a("782340"),
                i = a("60109"),
                c = a("200406"),
                u = a("283045"),
                d = a("718297"),
                f = a("929880"),
                m = function(e) {
                    let {
                        isFullScreen: t
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: r(i.heroBanner, t ? i.heroBannerFullScreen : i.heroBannerWithSidebar),
                        children: [(0, s.jsxs)("div", {
                            className: i.heroDescription,
                            children: [(0, s.jsx)(n.Heading, {
                                className: i.bannerTitle,
                                color: "always-white",
                                variant: "display-lg",
                                children: o.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
                            }), (0, s.jsx)(n.Text, {
                                className: i.heroSubtitle,
                                color: "always-white",
                                variant: "text-lg/normal",
                                children: o.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_SUBTITLE_ALT
                            })]
                        }), (0, s.jsxs)("div", {
                            className: i.bannerArt,
                            children: [(0, s.jsx)("img", {
                                className: i.bannerGrid,
                                alt: "",
                                src: c,
                                width: "484",
                                height: "402"
                            }), (0, s.jsx)("img", {
                                className: i.bannerGridSmol,
                                alt: "",
                                src: d,
                                width: "85",
                                height: "60"
                            }), (0, s.jsx)("img", {
                                className: i.bannerGridMedium,
                                alt: "",
                                src: u,
                                width: "178",
                                height: "106"
                            }), (0, s.jsx)("img", {
                                className: i.bannerHand,
                                alt: "",
                                src: f,
                                width: "265",
                                height: "238"
                            })]
                        })]
                    })
                }
        },
        920580: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return p
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("414456"),
                r = a.n(l),
                n = a("65597"),
                o = a("77078"),
                i = a("697218"),
                c = a("216422"),
                u = a("719923"),
                d = a("805172"),
                f = a("491232"),
                m = a("791309"),
                C = a("49111"),
                E = a("782340"),
                g = a("173046");

            function p(e) {
                let {
                    product: t,
                    className: a,
                    disableTooltipPointerEvents: l
                } = e, p = (0, n.default)([i.default], () => i.default.getCurrentUser()), {
                    shopForAllEnabled: S
                } = (0, d.default)({
                    location: "CollectiblesPriceTag"
                }), h = (0, f.extractPriceByPurchaseTypes)(t, C.PriceSetAssignmentPurchaseTypes.DEFAULT);
                if (null == h) return null;
                let L = (0, f.extractPriceByPurchaseTypes)(t, C.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
                    x = !u.default.canUseCollectibles(p) && S;
                return (0, s.jsxs)("div", {
                    className: r(g.priceTagsContainer, a),
                    children: [(0, s.jsx)(m.default, {
                        price: h,
                        className: x ? void 0 : g.strikedPrice
                    }), null != L && (0, s.jsx)(m.default, {
                        price: L,
                        renderPrice: x ? e => E.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
                            price: e
                        }) : void 0,
                        className: x ? g.fullPrice : void 0,
                        variant: x ? "text-xs/semibold" : void 0,
                        icon: (0, s.jsx)(o.Tooltip, {
                            text: E.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                            "aria-label": E.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                            disableTooltipPointerEvents: l,
                            children: e => {
                                let {
                                    ...t
                                } = e;
                                return (0, s.jsx)(c.default, {
                                    ...t,
                                    className: r(g.premiumIcon, {
                                        [g.fullPrice]: x
                                    }),
                                    color: "white"
                                })
                            }
                        })
                    })]
                })
            }
        },
        791309: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("414456"),
                r = a.n(l),
                n = a("77078"),
                o = a("153160"),
                i = a("846367"),
                c = e => {
                    var t;
                    let {
                        price: {
                            amount: a,
                            currency: l
                        },
                        renderPrice: c,
                        icon: u,
                        className: d,
                        variant: f = "heading-md/semibold"
                    } = e, m = (0, o.formatPrice)(a, l);
                    return (0, s.jsxs)(n.Heading, {
                        variant: f,
                        color: "always-white",
                        className: r(i.heading, d),
                        children: [u, null !== (t = null == c ? void 0 : c(m)) && void 0 !== t ? t : m]
                    })
                }
        },
        54809: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                openCollectiblesShopProductDetailsModal: function() {
                    return n
                },
                closeCollectiblesShopProductDetailsModal: function() {
                    return o
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("77078");
            let r = "collectibles shop product details modal",
                n = e => {
                    let {
                        product: t,
                        category: n,
                        analyticsSource: o,
                        analyticsLocations: i,
                        returnRef: c
                    } = e;
                    (0, l.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("179047").then(a.bind(a, "179047"));
                        return a => (0, s.jsx)(e, {
                            ...a,
                            product: t,
                            category: n,
                            analyticsSource: o,
                            analyticsLocations: i,
                            returnRef: c
                        })
                    }, {
                        modalKey: r
                    })
                },
                o = () => {
                    (0, l.closeModal)(r)
                }
        },
        931262: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                CollectiblesShopSourceParam: function() {
                    return s
                },
                useCollectiblesShopRouting: function() {
                    return o
                }
            }), a("313619"), a("654714"), a("287168"), a("956660"), a("222007");
            var s, l, r = a("884691"),
                n = a("90915");

            function o() {
                let {
                    search: e
                } = (0, n.useLocation)(), t = (0, n.useParams)(), a = r.useMemo(() => new URLSearchParams(e), [e]), s = a.get("source"), l = null != s ? parseInt(s, 10) : null;
                return {
                    source: l,
                    ...t
                }
            }(l = s || (s = {}))[l.SETTINGS = 0] = "SETTINGS", l[l.CHANGELOG = 1] = "CHANGELOG", l[l.DM_LIST = 2] = "DM_LIST"
        },
        695824: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("414456"),
                r = a.n(l),
                n = a("451594"),
                o = a("927694"),
                i = a("395535"),
                c = a("492666");
            let u = () => 4 * Math.random() + 8,
                d = [u(), u(), u()];
            var f = () => (0, s.jsx)(s.Fragment, {
                children: d.map(e => (0, s.jsxs)("div", {
                    className: n.cardsContainer,
                    children: [(0, s.jsx)("div", {
                        className: r(c.skeleton, o.shopBanner),
                        children: (0, s.jsx)("div", {
                            className: c.bannerBody
                        })
                    }), Array.from({
                        length: e
                    }, (e, t) => t).map(e => (0, s.jsx)("div", {
                        className: r(c.skeleton, i.shopCard),
                        children: (0, s.jsxs)("div", {
                            className: c.cardBody,
                            children: [(0, s.jsx)("div", {
                                className: c.cardAvatar
                            }), (0, s.jsx)("div", {
                                className: c.cardTitle
                            }), (0, s.jsx)("div", {
                                className: c.cardDescription
                            }), (0, s.jsx)("div", {
                                className: c.cardSummary
                            })]
                        })
                    }, e))]
                }, e))
            })
        },
        594849: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return N
                }
            });
            var s = a("37983"),
                l = a("884691"),
                r = a("65597"),
                n = a("77078"),
                o = a("252744"),
                i = a("685665"),
                c = a("606292"),
                u = a("688318"),
                d = a("649844"),
                f = a("697218"),
                m = a("153769"),
                C = a("270227"),
                E = a("216422"),
                g = a("491232"),
                p = a("730297"),
                S = a("716120"),
                h = a("408381"),
                L = a("57940"),
                x = a("646718"),
                T = a("782340"),
                b = a("601664"),
                _ = a("725015");
            let I = n.AvatarSizes.SIZE_120,
                v = (0, h.getLogoSize)(96);
            var N = e => {
                var t, a, N;
                let {
                    category: O
                } = e, {
                    analyticsLocations: A
                } = (0, i.default)(), {
                    backgroundColors: j
                } = (0, L.default)(O), R = (0, r.default)([f.default], () => f.default.getCurrentUser()), P = l.useRef(null), y = (0, o.default)(P), k = {
                    size: (0, c.getDecorationSizeForAvatarSize)(I),
                    animateOnHover: !y
                }, B = O.products.map(e => {
                    var t;
                    return {
                        user: R,
                        avatarDecorationOverride: null !== (t = e.items.find(p.isAvatarDecorationRecord)) && void 0 !== t ? t : null,
                        ...k
                    }
                }), {
                    avatarDecorationSrc: D
                } = (0, u.default)(null !== (t = B[1]) && void 0 !== t ? t : k), {
                    avatarDecorationSrc: F
                } = (0, u.default)(null !== (a = B[0]) && void 0 !== a ? a : k), {
                    avatarDecorationSrc: M
                } = (0, u.default)(null !== (N = B[2]) && void 0 !== N ? N : k);
                return (0, s.jsxs)("div", {
                    ref: P,
                    className: b.bannerCard,
                    children: [(0, s.jsx)(S.default, {
                        asset: O.banner,
                        className: b.bannerBackground,
                        style: null != j ? {
                            background: (0, h.getBackgroundGradient)(j)
                        } : void 0
                    }), (0, s.jsxs)("div", {
                        className: b.contentSection,
                        children: [(0, s.jsxs)("div", {
                            className: b.discordLogo,
                            children: [(0, s.jsx)(m.default, {
                                className: b.discordIcon
                            }), (0, s.jsx)(C.default, {
                                className: b.discordWordmark
                            })]
                        }), (0, s.jsx)("img", {
                            className: b.bannerFont,
                            src: (0, g.getCollectiblesAssetURL)(O.logo, {
                                size: v
                            }),
                            alt: O.name
                        }), (0, s.jsx)(n.Text, {
                            color: "always-white",
                            className: b.bannerDescription,
                            variant: "text-md/normal",
                            tag: "span",
                            children: T.default.Messages.COLLECTIBLES_NON_PREMIUM_STARTER_BANNER.format({
                                unlockHook: e => (0, s.jsx)(n.Clickable, {
                                    className: b.premiumUnlockHook,
                                    onClick: () => (0, d.default)({
                                        analyticsLocations: A,
                                        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2
                                    }),
                                    tag: "span",
                                    children: (0, s.jsx)(n.Text, {
                                        variant: "text-md/normal",
                                        color: "always-white",
                                        tag: "span",
                                        children: e
                                    })
                                })
                            })
                        })]
                    }), (0, s.jsxs)("div", {
                        className: b.decoSection,
                        children: [(0, s.jsx)("div", {
                            className: b.pinkInterface,
                            children: (0, s.jsx)(n.Avatar, {
                                avatarDecoration: D,
                                "aria-label": T.default.Messages.USER_SETTINGS_AVATAR,
                                src: _,
                                size: I
                            })
                        }), (0, s.jsx)("div", {
                            className: b.blueHeadset,
                            children: (0, s.jsx)(n.Avatar, {
                                avatarDecoration: F,
                                "aria-label": T.default.Messages.USER_SETTINGS_AVATAR,
                                src: _,
                                size: I
                            })
                        }), (0, s.jsx)("div", {
                            className: b.greenSmoke,
                            children: (0, s.jsx)(n.Avatar, {
                                avatarDecoration: M,
                                "aria-label": T.default.Messages.USER_SETTINGS_AVATAR,
                                src: _,
                                size: I
                            })
                        })]
                    }), (0, s.jsx)("div", {
                        className: b.badge,
                        children: (0, s.jsx)(E.default, {
                            className: b.premiumIcon
                        })
                    })]
                })
            }
        },
        408381: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                MAX_CONTENT_WIDTH: function() {
                    return s
                },
                getLogoSize: function() {
                    return l
                },
                getBackgroundGradient: function() {
                    return r
                }
            });
            let s = 1060,
                l = e => 3.8 * e,
                r = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        {
                            primary: a,
                            secondary: s
                        } = e;
                    return "linear-gradient(".concat(t, "deg, ").concat(a.toHslString(), ", ").concat(s.toHslString(), ")")
                }
        },
        264579: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("77078"),
                r = e => {
                    let {
                        product: t,
                        category: r,
                        analyticsLocations: n
                    } = e;
                    (0, l.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("658756").then(a.bind(a, "658756"));
                        return a => (0, s.jsx)(e, {
                            analyticsLocations: n,
                            ...a,
                            product: t,
                            category: r
                        })
                    })
                }
        },
        57940: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return S
                }
            }), a("222007");
            var s = a("656280"),
                l = a.n(s),
                r = a("635058"),
                n = a("65597"),
                o = a("669491"),
                i = a("206230"),
                c = a("388491"),
                u = a("172858");
            let d = l(o.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: 1
                }).hex()),
                f = l(o.default.unsafe_rawColors.BLACK_500.resolve({
                    saturation: 1
                }).hex()),
                m = (e, t) => {
                    let a = e.toRgb(),
                        s = t.toRgb(),
                        [r, n, o] = (0, c.getValueInColorGradientByPercentage)([a.r, a.g, a.b], [s.r, s.g, s.b], 50);
                    return l({
                        r,
                        g: n,
                        b: o
                    })
                },
                C = (e, t) => {
                    let a = l(e),
                        s = l(t),
                        r = m(a, s);
                    return {
                        primary: a,
                        secondary: s,
                        border: r.setAlpha(.4)
                    }
                },
                E = (e, t) => {
                    let a = l(e),
                        s = l(t),
                        r = m(a, s);
                    return {
                        primary: a,
                        secondary: s,
                        text: l(r.isLight() ? f : d)
                    }
                },
                g = (e, t) => {
                    let {
                        h: a,
                        s,
                        l: r
                    } = e.toHsl();
                    return l({
                        h: a,
                        s: s * t,
                        l: r
                    })
                },
                p = {
                    [r.CollectiblesCategorySkuId.FANTASY]: {
                        backgroundColors: C("#146144", "#021A0E"),
                        buttonColors: E("#028737", "#00694A"),
                        confettiSprites: [a("655029"), a("290216")],
                        confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                    },
                    [r.CollectiblesCategorySkuId.ANIME]: {
                        backgroundColors: C("#4B79B0", "#0F0E3A"),
                        buttonColors: E("#8A45C1", "#136897"),
                        confettiSprites: [a("597704"), a("714293")],
                        confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                    },
                    [r.CollectiblesCategorySkuId.BREAKFAST]: {
                        backgroundColors: C("#E8B26B", "#7A3A00"),
                        buttonColors: E("#FFC355", "#FF9537"),
                        confettiSprites: [a("286642"), a("94646")],
                        confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                    },
                    [r.CollectiblesCategorySkuId.DISXCORE]: {
                        backgroundColors: C("#732565", "#111D40"),
                        buttonColors: E(o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.resolve({
                            saturation: 1
                        }).hex(), o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.resolve({
                            saturation: 1
                        }).hex()),
                        confettiSprites: u.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
                        confettiColors: ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
                    },
                    [r.CollectiblesCategorySkuId.HALLOWEEN]: {
                        backgroundColors: C("#5280DC", "#060F25"),
                        buttonColors: E("#496BDB", "#3E41B5"),
                        confettiSprites: [a("638538"), a("861485")],
                        confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                    },
                    [r.CollectiblesCategorySkuId.FALL]: {
                        backgroundColors: C("#FFC267", "#6C1A00"),
                        buttonColors: E("#F5A142", "#E4760E"),
                        confettiSprites: [a("740683"), a("489847")],
                        confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                    },
                    [r.CollectiblesCategorySkuId.WINTER]: {
                        backgroundColors: C("#467FFF", "#154ECF"),
                        buttonColors: E("#44C7FF", "#009DFF"),
                        confettiSprites: [a("770704"), a("165057")],
                        confettiColors: ["#3DC3FF", "#297AFF", "#FD8BFF", "#FF3BF5"]
                    }
                };
            var S = e => {
                let t = (0, n.default)([i.default], () => i.default.saturation);
                if (null == e) return {};
                let a = p[e.skuId];
                return (null == a ? void 0 : a.backgroundColors) == null || 1 === t ? null != a ? a : {} : {
                    ...a,
                    backgroundColors: {
                        primary: g(a.backgroundColors.primary, t),
                        secondary: g(a.backgroundColors.secondary, t),
                        border: g(a.backgroundColors.border, t)
                    },
                    buttonColors: {
                        primary: g(a.buttonColors.primary, t),
                        secondary: g(a.buttonColors.secondary, t),
                        text: a.buttonColors.text
                    },
                    confettiColors: a.confettiColors.map(e => g(l(e), t).toHexString())
                }
            }
        },
        946964: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("748820"),
                r = a("77078"),
                n = a("112679"),
                o = a("55689"),
                i = a("21526"),
                c = a("599110"),
                u = a("49111");

            function d(e) {
                let {
                    skuId: t,
                    isGift: d = !1,
                    giftMessage: f,
                    onClose: m,
                    onComplete: C,
                    analyticsLocations: E,
                    analyticsObject: g
                } = e, p = !1, S = (0, l.v4)();
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await a.el("894742").then(a.bind(a, "894742"));
                    return a => {
                        let {
                            onClose: l,
                            returnRef: r,
                            ...n
                        } = a;
                        return (0, s.jsx)(e, {
                            ...n,
                            loadId: S,
                            skuId: t,
                            isGift: d,
                            giftMessage: f,
                            analyticsLocations: E,
                            onClose: e => {
                                l(), null == m || m(e)
                            },
                            onComplete: () => {
                                p = !0, null == C || C()
                            },
                            returnRef: r
                        })
                    }
                }, {
                    onCloseCallback: () => {
                        !p && c.default.track(u.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: S,
                            payment_type: u.PurchaseTypeToAnalyticsPaymentType[u.PurchaseTypes.ONE_TIME],
                            location: g,
                            is_gift: !1,
                            location_stack: E
                        }), (0, n.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == m || m(p), p && (0, i.fetchCollectiblesPurchases)()
                    },
                    onCloseRequest: u.NOOP
                })
            }
        },
        601095: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            }), a("222007");
            var s = a("37983"),
                l = a("884691"),
                r = a("414456"),
                n = a.n(r),
                o = a("859498"),
                i = a("635471"),
                c = a("825054"),
                u = a("93902"),
                d = e => {
                    let {
                        profileEffectId: t,
                        isHovering: a,
                        forCollectedModal: r = !1,
                        isPurchased: d
                    } = e, f = r ? 250 : .1, [m, C] = l.useState(!0);
                    return (l.useEffect(() => {
                        if (!0 !== r) C(!1);
                        else {
                            let e = setTimeout(() => {
                                C(!1)
                            }, f);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [f, r]), null != t) ? (0, s.jsxs)("div", {
                        className: n(c.previewContainer, {
                            [c.previewContainerAnimation]: r
                        }),
                        children: [(0, s.jsx)("img", {
                            src: u,
                            alt: " ",
                            className: r ? c.previewForCollected : c.preview,
                            "aria-hidden": !0
                        }), !m && (0, s.jsx)("div", {
                            className: d ? c.purchasedEffect : void 0,
                            children: (0, s.jsx)(i.default, {
                                profileEffectID: t,
                                useThumbnail: !0,
                                autoPlay: r,
                                restartMethod: o.RestartMethod.FromStart,
                                resetOnHover: !0,
                                isHovering: a,
                                introDelay: f,
                                useOpacityOnHover: !1
                            })
                        })]
                    }) : null
                }
        },
        493390: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                openProfileEffectModal: function() {
                    return r
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("77078");
            let r = e => {
                let {
                    analyticsLocations: t,
                    initialSelectedEffectID: r
                } = e;
                (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await a.el("889793").then(a.bind(a, "889793"));
                    return a => (0, s.jsx)(e, {
                        ...a,
                        initialSelectedEffectID: r,
                        analyticsLocations: t
                    })
                }, {})
            }
        },
        944441: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("469563"),
                r = a("269096"),
                n = a("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, n.default)(o),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            className: r,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M9.00043 14.0491L19.5904 3.46912L23.1212 6.99994L8.99993 21.1213L1.28485 13.4062L4.83367 9.88236L9.00043 14.0491Z"
                        })
                    })
                }, r.CheckmarkLargeIcon, void 0, {
                    size: 24
                })
        }
    }
]);