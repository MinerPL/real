            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return el
                }
            }), a("794252"), a("222007");
            var l = a("37983"),
                s = a("884691"),
                r = a("414456"),
                n = a.n(r),
                o = a("917351"),
                i = a("506838"),
                u = a("265586"),
                c = a("65597"),
                d = a("151426"),
                f = a("551042"),
                C = a("77078"),
                E = a("939488"),
                m = a("304580"),
                p = a("841098"),
                g = a("812204"),
                h = a("685665"),
                T = a("481120"),
                b = a("10641"),
                x = a("539938"),
                L = a("210721"),
                S = a("78345"),
                I = a("65324"),
                v = a("778588"),
                _ = a("697218"),
                N = a("764490"),
                A = a("29557"),
                k = a("599110"),
                F = a("719923"),
                O = a("439932"),
                y = a("21526"),
                R = a("411691"),
                j = a("216719"),
                B = a("702953"),
                P = a("235898"),
                D = a("296304"),
                M = a("334820"),
                w = a("89569"),
                H = a("419513"),
                U = a("434393"),
                W = a("571464"),
                G = a("43525"),
                z = a("798235"),
                V = a("931262"),
                K = a("695824"),
                Y = a("518907"),
                X = a("368560"),
                Z = a("49111"),
                q = a("994428"),
                $ = a("894282"),
                J = a("646718"),
                Q = a("782340"),
                ee = a("451594");

            function et(e) {
                let {
                    isFullScreen: t
                } = e, a = (0, R.default)("CollectiblesShop");
                return (0, i.match)(a).with(R.CollectiblesShopMarketingVariants.WINTER_2023_DROP, () => (0, l.jsx)(z.default, {
                    isFullScreen: t
                })).otherwise(() => (0, l.jsx)(G.default, {
                    isFullScreen: t
                }))
            }

            function ea(e) {
                var t, a;
                let {
                    category: r,
                    className: i,
                    isPremiumUser: d,
                    initialItemCardRef: f,
                    isGiftEasterEggEnabled: E,
                    setIsGiftEasterEggEnabled: m,
                    showEasterEggToggle: p
                } = e, g = s.useRef(10 + 70 * Math.random()), h = (0, M.usePurchasedProductsSort)(r.products), T = (0, o.groupBy)(h, "type"), b = (0, c.default)([j.default], () => j.default.initialProductSkuId), {
                    tallerCardsEnabled: x
                } = (0, B.useCollectiblesShopTallerCardsExperiment)({
                    location: "CollectiblesShop"
                }), v = x ? Y.default : U.default, _ = s.useCallback(e => t => {
                    e.skuId === b && (f.current = t.current)
                }, [b, f]), N = (e, t) => 0 === e.length ? null : (0, l.jsxs)("div", {
                    children: [(0, l.jsx)(C.Text, {
                        className: n(ee.itemTypeTitle, {
                            [ee.itemTypeTitleForTallerCard]: x
                        }),
                        color: "header-secondary",
                        variant: "text-sm/bold",
                        children: t
                    }), (0, l.jsx)("div", {
                        className: n(ee.cardsContainer, x ? ee.tallerShopCard : ee.regularShopCard, i),
                        children: e.map(e => (0, l.jsx)(v, {
                            onMount: _(e),
                            isPremiumUser: d,
                            category: r,
                            product: e,
                            isGiftEasterEggEnabled: E
                        }, e.skuId))
                    })]
                });
                return (0, l.jsxs)("div", {
                    className: ee.categoryWrapper,
                    children: [p && (0, l.jsx)(C.Clickable, {
                        className: n(ee.hiddenWumpus, {
                            [ee.hiddenWumpusEnabled]: E
                        }),
                        onClick: () => m(!0),
                        style: {
                            left: "".concat(g.current, "%")
                        },
                        children: (0, l.jsx)(I.default, {
                            idleAnimationState: L.AnimationState.IDLE,
                            giftStyle: S.PremiumGiftStyles.BOX
                        })
                    }), (0, l.jsx)(H.default, {
                        category: r,
                        className: x ? ee.tallerShopCardBanner : void 0
                    }), N(null !== (t = T[u.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], Q.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), N(null !== (a = T[u.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], Q.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
                })
            }
            var el = function(e) {
                let {
                    isFullScreen: t = !0
                } = e, {
                    analyticsSource: a,
                    analyticsLocations: r
                } = (0, c.useStateFromStoresObject)([j.default], () => j.default.getAnalytics()), {
                    AnalyticsLocationProvider: o,
                    analyticsLocations: i
                } = (0, h.default)([...r, g.default.COLLECTIBLES_SHOP]), L = (0, c.default)([v.default], () => v.default.getLayers().includes(Z.Layers.COLLECTIBLES_SHOP)), S = (0, f.useHasAnyModalOpen)(), {
                    onClose: I
                } = (0, V.useCollectiblesShopRouting)(), R = (0, c.default)([_.default], () => _.default.getCurrentUser()), M = F.default.canUseCollectibles(R), {
                    categories: H,
                    isFetchingCategories: U,
                    error: G
                } = (0, P.default)(), z = (0, D.usePurchasedCategoriesSort)(H), Y = s.useRef(Math.random()), {
                    tallerCardsEnabled: el
                } = (0, B.useCollectiblesShopTallerCardsExperiment)({
                    location: "CollectiblesShop"
                }), es = s.useRef(null), [er, en] = s.useState(!1);
                (0, w.useProductDetailsDeepLinking)({
                    categories: H,
                    isFetchingCategories: U,
                    isLayer: L,
                    initialItemCardRef: es
                });
                let {
                    sessionId: eo,
                    scrollerRef: ei,
                    scrollHandler: eu
                } = (0, T.usePageScrollPosition)(Z.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
                s.useEffect(() => {
                    k.default.track(Z.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: i,
                        source: a,
                        page_session_id: eo
                    }), !M && k.default.track(Z.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: J.PremiumUpsellTypes.COLLECTIBLES_SHOP,
                        location_stack: i
                    })
                }, [M, i, a, eo]), s.useEffect(() => {
                    !(0, b.isDismissibleContentDismissed)(d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, b.markDismissibleContentAsDismissed)(d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
                        dismissAction: q.ContentDismissActionType.AUTO_DISMISS,
                        forceTrack: !0
                    })
                }, []), s.useEffect(() => {
                    !t && (0, E.setHomeLink)(Z.Routes.COLLECTIBLES_SHOP)
                }, [t]), s.useEffect(() => () => {
                    (0, y.setCollectiblesCategoryItemsViewed)({
                        categories: [...H.values()],
                        itemTypes: [u.CollectiblesItemType.AVATAR_DECORATION, u.CollectiblesItemType.PROFILE_EFFECT]
                    })
                }, [H]), s.useEffect(() => {
                    if (!t || L || S) return;
                    let e = e => {
                        e.key === $.KeyboardEventKey.Escape && I()
                    };
                    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                }, [t, L, S, I]);
                let ec = () => {
                        (0, y.fetchCollectiblesCategories)()
                    },
                    ed = (0, p.default)();
                return (0, l.jsxs)(o, {
                    children: [(0, l.jsxs)("div", {
                        className: ee.shop,
                        children: [t ? null : (0, l.jsxs)(x.default, {
                            className: n((0, O.getThemeClass)(ed), ee.headerBar),
                            toolbar: !0,
                            children: [(0, l.jsx)(A.default, {
                                className: ee.logo
                            }), (0, l.jsx)(x.default.Title, {
                                className: ee.title,
                                children: Q.default.Messages.COLLECTIBLES_SHOP
                            })]
                        }), t && (0, l.jsx)("div", {
                            className: ee.closeWrapper,
                            children: (0, l.jsx)(m.default, {
                                className: ee.close,
                                closeAction: L ? y.closeCollectiblesShop : I,
                                keybind: "ESC"
                            })
                        }), (0, l.jsx)(C.AdvancedScroller, {
                            className: n(ee.shopScroll, {
                                [ee.shopScrollBackgroundPrimary]: el
                            }),
                            ref: ei,
                            onScroll: eu,
                            children: (0, l.jsx)("div", {
                                className: n(ee.pageWrapper, {
                                    [ee.pageWrapperFullscreen]: t,
                                    [ee.pageWrapperBackgroundPrimary]: el
                                }),
                                children: (0, l.jsxs)("main", {
                                    className: ee.page,
                                    children: [t ? (0, l.jsx)(N.default, {
                                        title: Q.default.Messages.COLLECTIBLES_SHOP
                                    }) : null, (0, l.jsx)(et, {
                                        isFullScreen: t
                                    }), U ? (0, l.jsx)(K.default, {}) : G ? (0, l.jsx)(W.default, {
                                        onRetry: ec
                                    }) : (0, l.jsx)("div", {
                                        className: ee.categories,
                                        children: z.filter(e => {
                                            let {
                                                products: t
                                            } = e;
                                            return t.length > 0
                                        }).map((e, t) => (0, l.jsx)(ea, {
                                            isPremiumUser: M,
                                            category: e,
                                            initialItemCardRef: es,
                                            setIsGiftEasterEggEnabled: en,
                                            isGiftEasterEggEnabled: er,
                                            showEasterEggToggle: t === Math.floor(Y.current * z.length)
                                        }, e.skuId))
                                    })]
                                })
                            })
                        })]
                    }), er && (0, l.jsx)(X.default, {})]
                })
            }