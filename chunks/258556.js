            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return ea
                }
            }), l("794252"), l("222007");
            var a = l("37983"),
                s = l("884691"),
                r = l("414456"),
                n = l.n(r),
                o = l("917351"),
                i = l("506838"),
                u = l("265586"),
                c = l("65597"),
                d = l("151426"),
                f = l("551042"),
                C = l("77078"),
                m = l("939488"),
                E = l("304580"),
                p = l("841098"),
                g = l("812204"),
                h = l("685665"),
                T = l("481120"),
                b = l("10641"),
                x = l("539938"),
                L = l("210721"),
                S = l("78345"),
                I = l("65324"),
                v = l("778588"),
                _ = l("697218"),
                N = l("764490"),
                A = l("29557"),
                k = l("599110"),
                O = l("719923"),
                F = l("439932"),
                y = l("21526"),
                R = l("411691"),
                j = l("216719"),
                B = l("702953"),
                P = l("235898"),
                D = l("296304"),
                M = l("334820"),
                w = l("89569"),
                H = l("419513"),
                U = l("434393"),
                W = l("571464"),
                G = l("43525"),
                z = l("798235"),
                V = l("931262"),
                K = l("695824"),
                Y = l("518907"),
                X = l("368560"),
                Z = l("49111"),
                q = l("994428"),
                $ = l("894282"),
                J = l("646718"),
                Q = l("782340"),
                ee = l("451594");

            function et(e) {
                let {
                    isFullScreen: t
                } = e, l = (0, R.default)("CollectiblesShop");
                return (0, i.match)(l).with(R.CollectiblesShopMarketingVariants.WINTER_2023_DROP, () => (0, a.jsx)(z.default, {
                    isFullScreen: t
                })).otherwise(() => (0, a.jsx)(G.default, {
                    isFullScreen: t
                }))
            }

            function el(e) {
                var t, l;
                let {
                    category: r,
                    className: i,
                    isPremiumUser: d,
                    initialItemCardRef: f,
                    isGiftEasterEggEnabled: m,
                    setIsGiftEasterEggEnabled: E,
                    showEasterEggToggle: p
                } = e, g = s.useRef(10 + 70 * Math.random()), h = (0, M.usePurchasedProductsSort)(r.products), T = (0, o.groupBy)(h, "type"), b = (0, c.default)([j.default], () => j.default.initialProductSkuId), {
                    tallerCardsEnabled: x
                } = (0, B.useCollectiblesShopTallerCardsExperiment)({
                    location: "CollectiblesShop"
                }), v = x ? Y.default : U.default, _ = s.useCallback(e => t => {
                    e.skuId === b && (f.current = t.current)
                }, [b, f]), N = (e, t) => 0 === e.length ? null : (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(C.Text, {
                        className: n(ee.itemTypeTitle, {
                            [ee.itemTypeTitleForTallerCard]: x
                        }),
                        color: "header-secondary",
                        variant: "text-sm/bold",
                        children: t
                    }), (0, a.jsx)("div", {
                        className: n(ee.cardsContainer, x ? ee.tallerShopCard : ee.regularShopCard, i),
                        children: e.map(e => (0, a.jsx)(v, {
                            onMount: _(e),
                            isPremiumUser: d,
                            category: r,
                            product: e,
                            isGiftEasterEggEnabled: m
                        }, e.skuId))
                    })]
                });
                return (0, a.jsxs)("div", {
                    className: ee.categoryWrapper,
                    children: [p && (0, a.jsx)(C.Clickable, {
                        className: n(ee.hiddenWumpus, {
                            [ee.hiddenWumpusEnabled]: m
                        }),
                        onClick: () => E(!0),
                        style: {
                            left: "".concat(g.current, "%")
                        },
                        children: (0, a.jsx)(I.default, {
                            idleAnimationState: L.AnimationState.IDLE,
                            giftStyle: S.PremiumGiftStyles.BOX
                        })
                    }), (0, a.jsx)(H.default, {
                        category: r,
                        className: x ? ee.tallerShopCardBanner : void 0
                    }), N(null !== (t = T[u.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], Q.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), N(null !== (l = T[u.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== l ? l : [], Q.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
                })
            }
            var ea = function(e) {
                let {
                    isFullScreen: t = !0
                } = e, {
                    analyticsSource: l,
                    analyticsLocations: r
                } = (0, c.useStateFromStoresObject)([j.default], () => j.default.getAnalytics()), {
                    AnalyticsLocationProvider: o,
                    analyticsLocations: i
                } = (0, h.default)([...r, g.default.COLLECTIBLES_SHOP]), L = (0, c.default)([v.default], () => v.default.getLayers().includes(Z.Layers.COLLECTIBLES_SHOP)), S = (0, f.useHasAnyModalOpen)(), {
                    onClose: I
                } = (0, V.useCollectiblesShopRouting)(), R = (0, c.default)([_.default], () => _.default.getCurrentUser()), M = O.default.canUseCollectibles(R), {
                    categories: H,
                    isFetchingCategories: U,
                    error: G
                } = (0, P.default)(), z = (0, D.usePurchasedCategoriesSort)(H), Y = s.useRef(Math.random()), {
                    tallerCardsEnabled: ea
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
                } = (0, T.usePageScrollPosition)(Z.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, l);
                s.useEffect(() => {
                    k.default.track(Z.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: i,
                        source: l,
                        page_session_id: eo
                    }), !M && k.default.track(Z.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: J.PremiumUpsellTypes.COLLECTIBLES_SHOP,
                        location_stack: i
                    })
                }, [M, i, l, eo]), s.useEffect(() => {
                    !(0, b.isDismissibleContentDismissed)(d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, b.markDismissibleContentAsDismissed)(d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
                        dismissAction: q.ContentDismissActionType.AUTO_DISMISS,
                        forceTrack: !0
                    })
                }, []), s.useEffect(() => {
                    !t && (0, m.setHomeLink)(Z.Routes.COLLECTIBLES_SHOP)
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
                return (0, a.jsxs)(o, {
                    children: [(0, a.jsxs)("div", {
                        className: ee.shop,
                        children: [t ? null : (0, a.jsxs)(x.default, {
                            className: n((0, F.getThemeClass)(ed), ee.headerBar),
                            toolbar: !0,
                            children: [(0, a.jsx)(A.default, {
                                className: ee.logo
                            }), (0, a.jsx)(x.default.Title, {
                                className: ee.title,
                                children: Q.default.Messages.COLLECTIBLES_SHOP
                            })]
                        }), (0, a.jsx)(C.AdvancedScroller, {
                            className: n(ee.shopScroll, {
                                [ee.shopScrollBackgroundPrimary]: ea
                            }),
                            ref: ei,
                            onScroll: eu,
                            children: (0, a.jsxs)("div", {
                                className: n(ee.pageWrapper, {
                                    [ee.pageWrapperFullscreen]: t,
                                    [ee.pageWrapperBackgroundPrimary]: ea
                                }),
                                children: [(0, a.jsxs)("main", {
                                    className: ee.page,
                                    children: [t ? (0, a.jsx)(N.default, {
                                        title: Q.default.Messages.COLLECTIBLES_SHOP
                                    }) : null, (0, a.jsx)(et, {
                                        isFullScreen: t
                                    }), U ? (0, a.jsx)(K.default, {}) : G ? (0, a.jsx)(W.default, {
                                        onRetry: ec
                                    }) : (0, a.jsx)("div", {
                                        className: ee.categories,
                                        children: z.filter(e => {
                                            let {
                                                products: t
                                            } = e;
                                            return t.length > 0
                                        }).map((e, t) => (0, a.jsx)(el, {
                                            isPremiumUser: M,
                                            category: e,
                                            initialItemCardRef: es,
                                            setIsGiftEasterEggEnabled: en,
                                            isGiftEasterEggEnabled: er,
                                            showEasterEggToggle: t === Math.floor(Y.current * z.length)
                                        }, e.skuId))
                                    })]
                                }), t && (0, a.jsx)("div", {
                                    children: (0, a.jsx)(E.default, {
                                        className: ee.close,
                                        closeAction: L ? y.closeCollectiblesShop : I,
                                        keybind: "ESC"
                                    })
                                })]
                            })
                        })]
                    }), er && (0, a.jsx)(X.default, {})]
                })
            }