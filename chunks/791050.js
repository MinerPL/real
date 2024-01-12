            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return N
                }
            }), r("222007");
            var a = r("37983"),
                n = r("884691"),
                s = r("265586"),
                u = r("446674"),
                i = r("77078"),
                l = r("812204"),
                o = r("685665"),
                c = r("21526"),
                d = r("491232"),
                E = r("984002"),
                _ = r("235898"),
                f = r("170313"),
                C = r("635956"),
                I = r("91653"),
                A = r("697218"),
                S = r("599110"),
                p = r("719923"),
                h = r("234251"),
                m = r("659117"),
                T = r("765221"),
                L = r("49111"),
                O = r("646718"),
                v = r("782340"),
                R = r("705057");

            function g(e) {
                let {
                    user: t,
                    categories: r,
                    analyticsLocations: s,
                    onClose: u,
                    initialSelectedDecoration: o,
                    isTryItOutFlow: _
                } = e, {
                    pendingAvatarDecoration: A,
                    setPendingAvatarDecoration: S
                } = (0, I.default)({
                    analyticsLocations: s,
                    isTryItOut: _
                }), [L, g] = n.useState(() => {
                    var e;
                    if (null != o) return o;
                    if (void 0 !== A) return A;
                    if ((null == t ? void 0 : t.avatarDecoration) == null || 0 === r.size) return null;
                    let a = (0, d.getAvatarDecorationsFromCategories)(r);
                    return null !== (e = a.find(e => (0, h.isEqualAvatarDecoration)(e, t.avatarDecoration))) && void 0 !== e ? e : null
                }), {
                    product: N,
                    purchase: D
                } = (0, E.default)(null == L ? void 0 : L.skuId), P = p.default.canUseCollectibles(t), y = n.useRef(null), M = (0, f.default)(s), H = (0, h.isEqualAvatarDecoration)(L, void 0 === A ? null == t ? void 0 : t.avatarDecoration : A), x = () => {
                    S(L), u()
                }, w = n.useCallback(() => {
                    u(), (0, c.openCollectiblesShop)({
                        analyticsLocations: s,
                        analyticsSource: l.default.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: null != L ? L.skuId : void 0
                    })
                }, [s, u, L]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(i.ModalHeader, {
                        separator: !1,
                        className: R.modalHeader,
                        children: [(0, a.jsx)(i.Heading, {
                            variant: "heading-lg/semibold",
                            children: v.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
                        }), (0, a.jsx)(i.ModalCloseButton, {
                            className: R.modalCloseButton,
                            onClick: u
                        })]
                    }), (0, a.jsxs)(i.ModalContent, {
                        className: R.modalContent,
                        scrollbarType: "none",
                        children: [(0, a.jsx)(T.default, {
                            user: t,
                            pendingAvatarDecoration: L,
                            selectedAvatarDecorationRef: y,
                            onSelect: e => {
                                g(e), null != e && M(e)
                            },
                            onOpenShop: w
                        }), (0, a.jsx)(m.default, {
                            className: R.modalPreview,
                            user: t,
                            avatarDecorationOverride: L
                        })]
                    }), (0, a.jsxs)(i.ModalFooter, {
                        className: R.modalFooter,
                        children: [(() => {
                            let e = null != D && (!(0, d.isPremiumCollectiblesPurchase)(D) || P);
                            if (e || null === L) return (0, a.jsx)(i.Button, {
                                onClick: x,
                                disabled: H,
                                children: v.default.Messages.AVATAR_DECORATION_MODAL_APPLY
                            });
                            let r = P || !(0, d.isPremiumCollectiblesProduct)(N);
                            return r ? (0, a.jsx)(i.Button, {
                                className: R.modalFooterShopButton,
                                onClick: w,
                                children: v.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                            }) : (0, a.jsx)(C.default, {
                                subscriptionTier: O.PremiumSubscriptionSKUs.TIER_2,
                                buttonText: p.default.isPremium(t) ? v.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : v.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                            })
                        })(), (0, a.jsx)(i.Button, {
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.PRIMARY,
                            onClick: u,
                            children: v.default.Messages.CANCEL
                        })]
                    })]
                })
            }

            function N(e) {
                let {
                    transitionState: t,
                    analyticsLocations: r,
                    onClose: d,
                    initialSelectedDecoration: E,
                    isTryItOutFlow: f
                } = e, C = (0, u.useStateFromStores)([A.default], () => A.default.getCurrentUser()), {
                    AnalyticsLocationProvider: I,
                    analyticsLocations: p
                } = (0, o.default)(r, l.default.EDIT_AVATAR_DECORATION_MODAL), {
                    categories: h,
                    purchases: m,
                    isFetchingCategories: T,
                    isFetchingPurchases: O
                } = (0, _.default)(), v = T || O && 0 === m.size;
                return n.useEffect(() => {
                    S.default.track(L.AnalyticEvents.OPEN_MODAL, {
                        type: "Edit Avatar Decoration Modal",
                        location_stack: p
                    })
                }, [p]), n.useEffect(() => () => {
                    (0, c.setCollectiblesCategoryItemsViewed)({
                        categories: [...h.values()],
                        itemTypes: [s.CollectiblesItemType.AVATAR_DECORATION]
                    })
                }, [h]), null == C ? null : (0, a.jsx)(I, {
                    children: (0, a.jsx)(i.ModalRoot, {
                        transitionState: t,
                        className: R.modal,
                        size: v ? i.ModalSize.DYNAMIC : i.ModalSize.MEDIUM,
                        children: v ? (0, a.jsx)(i.Spinner, {
                            className: R.spinner,
                            type: i.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, a.jsx)(g, {
                            user: C,
                            categories: h,
                            analyticsLocations: p,
                            initialSelectedDecoration: E,
                            onClose: d,
                            isTryItOutFlow: f
                        })
                    })
                })
            }