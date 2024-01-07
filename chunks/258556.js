            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return et
                }
            }), l("222007");
            var a = l("37983"),
                s = l("884691"),
                r = l("414456"),
                n = l.n(r),
                o = l("917351"),
                i = l("265586"),
                u = l("65597"),
                c = l("151426"),
                d = l("551042"),
                f = l("77078"),
                C = l("939488"),
                m = l("304580"),
                E = l("841098"),
                p = l("812204"),
                g = l("685665"),
                h = l("481120"),
                T = l("10641"),
                b = l("539938"),
                x = l("210721"),
                L = l("78345"),
                S = l("65324"),
                I = l("778588"),
                v = l("697218"),
                _ = l("764490"),
                N = l("29557"),
                A = l("599110"),
                k = l("719923"),
                O = l("439932"),
                F = l("21526"),
                y = l("805172"),
                R = l("216719"),
                j = l("702953"),
                B = l("235898"),
                P = l("296304"),
                D = l("334820"),
                M = l("89569"),
                w = l("419513"),
                H = l("434393"),
                U = l("571464"),
                W = l("43525"),
                G = l("798235"),
                z = l("931262"),
                V = l("695824"),
                K = l("518907"),
                Y = l("368560"),
                X = l("49111"),
                Z = l("994428"),
                q = l("894282"),
                $ = l("646718"),
                J = l("782340"),
                Q = l("451594");

            function ee(e) {
                let {
                    category: t,
                    className: l,
                    isPremiumUser: r,
                    initialItemCardRef: c,
                    isGiftEasterEggEnabled: d,
                    setIsGiftEasterEggEnabled: C,
                    showEasterEggToggle: m
                } = e, E = s.useRef(10 + 70 * Math.random()), p = (0, D.usePurchasedProductsSort)(t.products), g = (0, o.groupBy)(p, "type"), h = (0, u.default)([R.default], () => R.default.initialProductSkuId), {
                    tallerCardsEnabled: T
                } = (0, j.useCollectiblesShopTallerCardsExperiment)({
                    location: "CollectiblesShop"
                }), b = T ? K.default : H.default, I = s.useCallback(e => t => {
                    e.skuId === h && (c.current = t.current)
                }, [h, c]), v = (e, s) => 0 === e.length ? null : (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(f.Text, {
                        className: n(Q.itemTypeTitle, {
                            [Q.itemTypeTitleForTallerCard]: T
                        }),
                        color: "header-secondary",
                        variant: "text-sm/bold",
                        children: s
                    }), (0, a.jsx)("div", {
                        className: n(Q.cardsContainer, T ? Q.tallerShopCard : Q.regularShopCard, l),
                        children: e.map(e => (0, a.jsx)(b, {
                            onMount: I(e),
                            isPremiumUser: r,
                            category: t,
                            product: e,
                            isGiftEasterEggEnabled: d
                        }, e.skuId))
                    })]
                });
                return (0, a.jsxs)("div", {
                    className: Q.categoryWrapper,
                    children: [m && (0, a.jsx)(f.Clickable, {
                        className: n(Q.hiddenWumpus, {
                            [Q.hiddenWumpusEnabled]: d
                        }),
                        onClick: () => C(!0),
                        style: {
                            left: "".concat(E.current, "%")
                        },
                        children: (0, a.jsx)(S.default, {
                            idleAnimationState: x.AnimationState.IDLE,
                            giftStyle: L.PremiumGiftStyles.BOX
                        })
                    }), (0, a.jsx)(w.default, {
                        category: t,
                        className: T ? Q.tallerShopCardBanner : void 0
                    }), v(g[i.CollectiblesItemType.AVATAR_DECORATION], J.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), v(g[i.CollectiblesItemType.PROFILE_EFFECT], J.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
                })
            }
            var et = function(e) {
                let {
                    isFullScreen: t = !0
                } = e, {
                    analyticsSource: l,
                    analyticsLocations: r
                } = (0, u.useStateFromStoresObject)([R.default], () => R.default.getAnalytics()), {
                    AnalyticsLocationProvider: o,
                    analyticsLocations: x
                } = (0, g.default)([...r, p.default.COLLECTIBLES_SHOP]), L = (0, u.default)([I.default], () => I.default.getLayers().includes(X.Layers.COLLECTIBLES_SHOP)), S = (0, d.useHasAnyModalOpen)(), {
                    onClose: D
                } = (0, z.useCollectiblesShopRouting)(), w = (0, u.default)([v.default], () => v.default.getCurrentUser()), H = k.default.canUseCollectibles(w), {
                    categories: K,
                    isFetchingCategories: et,
                    error: el
                } = (0, B.default)(), ea = (0, P.usePurchasedCategoriesSort)(K), es = s.useRef(Math.random()), {
                    marketingEnabled: er
                } = (0, y.default)({
                    location: "CollectiblesShop"
                }), {
                    tallerCardsEnabled: en
                } = (0, j.useCollectiblesShopTallerCardsExperiment)({
                    location: "CollectiblesShop"
                }), eo = s.useRef(null), [ei, eu] = s.useState(!1);
                (0, M.useProductDetailsDeepLinking)({
                    categories: K,
                    isFetchingCategories: et,
                    isLayer: L,
                    initialItemCardRef: eo
                });
                let {
                    sessionId: ec,
                    scrollerRef: ed,
                    scrollHandler: ef
                } = (0, h.usePageScrollPosition)(X.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, l);
                s.useEffect(() => {
                    A.default.track(X.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: x,
                        source: l,
                        page_session_id: ec
                    }), !H && A.default.track(X.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: $.PremiumUpsellTypes.COLLECTIBLES_SHOP,
                        location_stack: x
                    })
                }, [H, x, l, ec]), s.useEffect(() => {
                    !(0, T.isDismissibleContentDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, T.markDismissibleContentAsDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
                        dismissAction: Z.ContentDismissActionType.AUTO_DISMISS,
                        forceTrack: !0
                    })
                }, []), s.useEffect(() => {
                    !t && (0, C.setHomeLink)(X.Routes.COLLECTIBLES_SHOP)
                }, [t]), s.useEffect(() => () => {
                    (0, F.setCollectiblesCategoryItemsViewed)({
                        categories: [...K.values()],
                        itemTypes: [i.CollectiblesItemType.AVATAR_DECORATION, i.CollectiblesItemType.PROFILE_EFFECT]
                    })
                }, [K]), s.useEffect(() => {
                    if (!t || L || S) return;
                    let e = e => {
                        e.key === q.KeyboardEventKey.Escape && D()
                    };
                    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                }, [t, L, S, D]);
                let eC = () => {
                        (0, F.fetchCollectiblesCategories)()
                    },
                    em = (0, E.default)();
                return (0, a.jsxs)(o, {
                    children: [(0, a.jsxs)("div", {
                        className: Q.shop,
                        children: [t ? null : (0, a.jsxs)(b.default, {
                            className: n((0, O.getThemeClass)(em), Q.headerBar),
                            toolbar: !0,
                            children: [(0, a.jsx)(N.default, {
                                className: Q.logo
                            }), (0, a.jsx)(b.default.Title, {
                                className: Q.title,
                                children: J.default.Messages.COLLECTIBLES_SHOP
                            })]
                        }), (0, a.jsx)(f.AdvancedScroller, {
                            className: n(Q.shopScroll, {
                                [Q.shopScrollBackgroundPrimary]: en
                            }),
                            ref: ed,
                            onScroll: ef,
                            children: (0, a.jsxs)("div", {
                                className: n(Q.pageWrapper, {
                                    [Q.pageWrapperFullscreen]: t,
                                    [Q.pageWrapperBackgroundPrimary]: en
                                }),
                                children: [(0, a.jsxs)("main", {
                                    className: Q.page,
                                    children: [t ? (0, a.jsx)(_.default, {
                                        title: J.default.Messages.COLLECTIBLES_SHOP
                                    }) : null, er ? (0, a.jsx)(G.default, {
                                        isFullScreen: t
                                    }) : (0, a.jsx)(W.default, {
                                        isFullScreen: t
                                    }), et ? (0, a.jsx)(V.default, {}) : el ? (0, a.jsx)(U.default, {
                                        onRetry: eC
                                    }) : (0, a.jsx)("div", {
                                        className: Q.categories,
                                        children: ea.filter(e => {
                                            let {
                                                products: t
                                            } = e;
                                            return t.length > 0
                                        }).map((e, t) => (0, a.jsx)(ee, {
                                            isPremiumUser: H,
                                            category: e,
                                            initialItemCardRef: eo,
                                            setIsGiftEasterEggEnabled: eu,
                                            isGiftEasterEggEnabled: ei,
                                            showEasterEggToggle: t === Math.floor(es.current * ea.length)
                                        }, e.skuId))
                                    })]
                                }), t && (0, a.jsx)("div", {
                                    children: (0, a.jsx)(m.default, {
                                        className: Q.close,
                                        closeAction: L ? F.closeCollectiblesShop : D,
                                        keybind: "ESC"
                                    })
                                })]
                            })
                        })]
                    }), ei && (0, a.jsx)(Y.default, {})]
                })
            }