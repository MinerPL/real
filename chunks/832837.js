            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return U
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("917351"),
                o = s.n(r),
                d = s("866227"),
                u = s.n(d),
                c = s("446674"),
                S = s("77078"),
                E = s("913144"),
                f = s("316718"),
                m = s("79112"),
                T = s("841098"),
                _ = s("376152"),
                g = s("243632"),
                h = s("180273"),
                I = s("367376"),
                N = s("44678"),
                p = s("694540"),
                C = s("541840"),
                A = s("437712"),
                O = s("888400"),
                x = s("659632"),
                M = s("845579"),
                R = s("943927"),
                v = s("663952"),
                L = s("49111"),
                D = s("646718"),
                P = s("782340"),
                j = s("76836");

            function b(e) {
                let t, {
                        outboundPromotion: s,
                        code: l,
                        addClaimedOutboundPromotionCode: r
                    } = e,
                    [o, d] = n.useState(!1),
                    [c, E] = n.useState(!1),
                    f = () => d(e => !e),
                    m = (0, T.default)(),
                    _ = (0, N.getPromotionImageURL)(s.id, m),
                    g = null != l,
                    h = g ? (0, O.dateFormat)(u(s.endDate).add(D.OUTBOUND_PROMOTION_REDEMPTION_EXPIRATION_WINDOW), "LL") : (0, O.dateFormat)(u(s.endDate), "LL");
                g && o ? t = P.default.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_EXPANDED_BODY.format({
                    endDate: h,
                    onClickDetails: f
                }) : g && !o ? t = P.default.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_UNEXPANDED_BODY.format({
                    endDate: h,
                    onClickDetails: f
                }) : !g && o ? t = P.default.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_EXPANDED_BODY.format({
                    endDate: h,
                    onClickDetails: f
                }) : !g && !o && (t = P.default.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_UNEXPANDED_BODY.format({
                    endDate: h,
                    onClickDetails: f
                }));
                let p = g ? P.default.Messages.OUTBOUND_PROMOTION_SEE_CODE : P.default.Messages.PROMOTION_CARD_ACTION_CLAIM,
                    A = n.useCallback(() => E(!1), []),
                    {
                        outboundTitle: x,
                        outboundTermsAndConditions: M
                    } = s;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: i(j.skuCard, j.promotionCard),
                        children: [(0, a.jsxs)("div", {
                            className: j.mainPromotionCardContainer,
                            children: [(0, a.jsxs)("div", {
                                className: j.promotionCardLeftContainer,
                                children: [(0, a.jsx)("div", {
                                    className: j.promotionIcon,
                                    children: (0, a.jsx)("img", {
                                        alt: "",
                                        src: _,
                                        className: j.promotionIconImage
                                    })
                                }), (0, a.jsxs)("div", {
                                    children: [(0, a.jsx)(S.Heading, {
                                        variant: "heading-md/semibold",
                                        children: x
                                    }), (0, a.jsx)(S.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-normal",
                                        className: j.promotionText,
                                        children: t
                                    })]
                                })]
                            }), (0, a.jsx)(S.Button, {
                                className: j.promotionCardButton,
                                color: S.Button.Colors.BRAND,
                                size: S.Button.Sizes.SMALL,
                                onClick: () => E(!0),
                                children: p
                            })]
                        }), o && (0, a.jsx)(S.Text, {
                            className: j.promotionLegalese,
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: I.default.parse(M, !1, {
                                allowLinks: !0
                            })
                        })]
                    }), c && (0, a.jsx)(S.Modal, {
                        renderModal: e => (0, a.jsx)(C.default, {
                            ...e,
                            onClose: A,
                            onClaim: r,
                            code: l,
                            outboundPromotion: s
                        }),
                        onCloseRequest: A
                    })]
                })
            }
            var U = function() {
                let e = (0, c.useStateFromStoresArray)([A.default], () => A.default.getGiftable()),
                    [t, s] = o.partition(e, e => {
                        let {
                            giftCodeBatchId: t
                        } = e;
                        return null == t
                    }),
                    l = o.groupBy(t, e => (0, x.makeComboId)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
                    [i, r] = n.useState(!1),
                    d = (0, c.useStateFromStores)([h.default], () => h.default.userStatus);
                n.useEffect(() => {
                    E.default.wait(() => {
                        (0, f.fetchGiftableEntitlements)().then(() => r(!0))
                    })
                }, []);
                let u = (0, g.useAnyDropsEnabled)();
                n.useEffect(() => {
                    u && E.default.wait(async () => {
                        await (0, _.fetchDropsUserStatus)()
                    })
                }, [u]);
                let T = M.DropsOptedOut.useSetting(),
                    I = null != d || !u,
                    {
                        promotionsLoaded: N,
                        activeOutboundPromotions: C,
                        claimedEndedOutboundPromotions: O,
                        claimedOutboundPromotionCodeMap: U,
                        addClaimedOutboundPromotionCode: y
                    } = (0, p.useOutboundPromotions)();

                function B() {
                    m.default.open(L.UserSettingsSections.PREMIUM)
                }
                return i && N && I ? (0, a.jsxs)(a.Fragment, {
                    children: [u ? (0, a.jsx)(v.default, {
                        dropsOptedOut: T,
                        dropsStatuses: d
                    }) : null, function() {
                        var e;
                        let t = s.find(e => e.giftCodeBatchId === D.BLACK_FRIDAY_2020_GIFT_CODE_BATCH_ID && !e.consumed),
                            n = null !== (e = s.filter(e => e.giftCodeBatchId === D.STICKERS_GIFT_CODE_BATCH_ID && !e.consumed)) && void 0 !== e ? e : [],
                            [l, i] = o.partition(n, e => {
                                let {
                                    subscriptionPlanId: t
                                } = e;
                                return t === D.SubscriptionPlans.PREMIUM_YEAR_TIER_2
                            }),
                            r = C.length + O.length > 0;
                        return (0, a.jsx)(S.FormSection, {
                            children: (0, a.jsxs)(S.HeadingLevel, {
                                component: (0, a.jsx)(S.Heading, {
                                    variant: "heading-md/semibold",
                                    children: r ? P.default.Messages.GIFT_INVENTORY_YOUR_GIFTS : void 0
                                }),
                                children: [r ? (0, a.jsx)(S.FormDivider, {
                                    className: j.divider
                                }) : null, O.map(e => {
                                    let {
                                        code: t,
                                        promotion: s
                                    } = e;
                                    return (0, a.jsx)(b, {
                                        outboundPromotion: s,
                                        code: t,
                                        addClaimedOutboundPromotionCode: y
                                    }, s.id)
                                }), C.map(e => (0, a.jsx)(b, {
                                    outboundPromotion: e,
                                    code: U[e.id],
                                    addClaimedOutboundPromotionCode: y
                                }, e.id)), null != t ? (0, a.jsx)(R.default, {
                                    className: j.skuCard,
                                    skuId: t.skuId,
                                    subscriptionPlanId: t.subscriptionPlanId,
                                    entitlements: [t],
                                    giftCodeBatchId: D.BLACK_FRIDAY_2020_GIFT_CODE_BATCH_ID
                                }, (0, x.makeComboId)(t.skuId, t.subscriptionPlanId)) : null, l.length > 0 ? (0, a.jsx)(R.default, {
                                    className: j.skuCard,
                                    skuId: l[0].skuId,
                                    subscriptionPlanId: l[0].subscriptionPlanId,
                                    entitlements: l,
                                    giftCodeBatchId: D.STICKERS_GIFT_CODE_BATCH_ID
                                }, (0, x.makeComboId)(l[0].skuId, l[0].subscriptionPlanId)) : null, i.length > 0 ? (0, a.jsx)(R.default, {
                                    className: j.skuCard,
                                    skuId: i[0].skuId,
                                    subscriptionPlanId: i[0].subscriptionPlanId,
                                    entitlements: i,
                                    giftCodeBatchId: D.STICKERS_GIFT_CODE_BATCH_ID
                                }, (0, x.makeComboId)(i[0].skuId, i[0].subscriptionPlanId)) : null]
                            })
                        })
                    }(), (0, a.jsx)(S.FormSection, {
                        children: (0, a.jsxs)(S.HeadingLevel, {
                            component: (0, a.jsx)(S.Heading, {
                                variant: "heading-md/semibold",
                                children: P.default.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED
                            }),
                            children: [(0, a.jsx)(S.FormDivider, {
                                className: j.divider
                            }), 0 === Object.keys(l).length ? (0, a.jsxs)("div", {
                                className: j.emptyState,
                                children: [(0, a.jsx)("div", {
                                    className: j.emptyStateImage
                                }), (0, a.jsx)(S.H, {
                                    className: j.emptyStateHeader,
                                    children: P.default.Messages.GIFT_INVENTORY_NO_GIFTS
                                }), (0, a.jsx)("p", {
                                    className: j.emptyStateSubtext,
                                    children: P.default.Messages.GIFT_INVENTORY_NO_GIFTS_SUBTEXT.format({
                                        onClick: B
                                    })
                                })]
                            }) : o.keys(l).map(e => {
                                let {
                                    skuId: t,
                                    subscriptionPlanId: s,
                                    giftStyle: n
                                } = (0, x.parseComboId)(e);
                                return (0, a.jsx)(R.default, {
                                    className: j.skuCard,
                                    skuId: t,
                                    subscriptionPlanId: s,
                                    entitlements: l[e],
                                    giftStyle: n
                                }, e)
                            })]
                        })
                    })]
                }) : (0, a.jsx)(S.Spinner, {
                    className: j.loading
                })
            }