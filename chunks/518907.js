            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return X
                }
            }), l("222007");
            var a = l("37983"),
                s = l("884691"),
                r = l("414456"),
                n = l.n(r),
                o = l("65597"),
                i = l("669491"),
                u = l("755854"),
                c = l("77078"),
                d = l("265586"),
                f = l("54239"),
                C = l("252744"),
                m = l("812204"),
                E = l("685665"),
                p = l("606292"),
                g = l("688318"),
                h = l("946964"),
                T = l("635956"),
                b = l("38766"),
                x = l("662286"),
                L = l("601095"),
                S = l("493390"),
                I = l("161778"),
                v = l("697218"),
                _ = l("944441"),
                N = l("462579"),
                A = l("216422"),
                k = l("956089"),
                O = l("50885"),
                F = l("21526"),
                y = l("775416"),
                R = l("491232"),
                j = l("342676"),
                B = l("450492"),
                P = l("920580"),
                D = l("54809"),
                M = l("264579"),
                w = l("57940"),
                H = l("646718"),
                U = l("782340"),
                W = l("216365");
            let G = O.default.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar,
                z = c.AvatarSizes.SIZE_152,
                V = (0, p.getDecorationSizeForAvatarSize)(z),
                K = e => {
                    let {
                        children: t,
                        onClick: l,
                        ...s
                    } = e;
                    return (0, a.jsx)(c.Button, {
                        fullWidth: !0,
                        look: c.Button.Looks.FILLED,
                        onClick: e => {
                            e.stopPropagation(), l()
                        },
                        ...s,
                        children: t
                    })
                },
                Y = e => {
                    let {
                        className: t,
                        ...l
                    } = e;
                    return (0, a.jsx)(c.Button, {
                        color: c.ButtonColors.BRAND,
                        look: c.Button.Looks.FILLED,
                        size: c.ButtonSizes.ICON,
                        className: n(W.previewButton, t),
                        innerClassName: W.previewButtonInner,
                        "aria-label": U.default.Messages.PREVIEW,
                        ...l,
                        children: (0, a.jsx)(N.default, {
                            width: 24,
                            height: 24
                        })
                    })
                };
            var X = function(e) {
                let {
                    product: t,
                    category: l,
                    onMount: r,
                    isPremiumUser: N = !1,
                    isGiftEasterEggEnabled: O
                } = e, {
                    analyticsLocations: X
                } = (0, E.default)(m.default.COLLECTIBLES_SHOP_CARD), Z = s.useRef(null), q = (0, C.default)(Z), [$, J] = s.useState(!1), Q = q || $, ee = (0, o.default)([v.default], () => v.default.getCurrentUser()), [et] = t.items, {
                    avatarDecorationSrc: el,
                    eventHandlers: ea,
                    avatarPlaceholderSrc: es
                } = (0, g.default)({
                    user: ee,
                    avatarDecorationOverride: (null == et ? void 0 : et.type) === d.CollectiblesItemType.AVATAR_DECORATION ? et : void 0,
                    size: V,
                    animateOnHover: !Q
                }), {
                    backgroundColors: er
                } = (0, w.default)(t.categorySkuId), en = (0, R.getFormattedPriceForCollectiblesProduct)(t, N), eo = (0, R.isPremiumCollectiblesProduct)(t), ei = (0, R.isFreeCollectiblesProduct)(t), [eu, ec, ed] = (0, o.useStateFromStoresArray)([y.default], () => [y.default.getPurchase(t.skuId), y.default.isClaiming === t.skuId, null != y.default.isClaiming && y.default.isClaiming !== t.skuId]), ef = (0, x.useCanUseProfileEffects)({
                    location: "CollectiblesShopCard"
                }), eC = (0, o.default)([I.default], () => (0, u.isThemeDark)(I.default.theme));
                s.useEffect(() => {
                    let {
                        current: e
                    } = Z;
                    if (null == e) return;
                    let t = () => J(!0);
                    return e.addEventListener("focusin", t), e.blur(), () => {
                        e.removeEventListener("focusin", t)
                    }
                }, []);
                let em = (0, b.default)({
                        analyticsLocations: X
                    }),
                    eE = () => {
                        if ((0, f.popLayer)(), em(), (null == et ? void 0 : et.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
                            (0, p.openAvatarDecorationModal)({
                                initialSelectedDecoration: et,
                                analyticsLocations: X
                            });
                            return
                        }(null == et ? void 0 : et.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, S.openProfileEffectModal)({
                            initialSelectedEffectId: et.id,
                            analyticsLocations: X
                        })
                    },
                    ep = e => () => {
                        (0, D.openCollectiblesShopProductDetailsModal)({
                            product: t,
                            category: l,
                            analyticsLocations: X,
                            analyticsSource: e
                        })
                    },
                    eg = ep(m.default.COLLECTIBLES_SHOP_CARD),
                    eh = ep(m.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                    eT = () => (0, a.jsx)("div", {
                        className: W.hoverUpsellContainer,
                        children: (0, a.jsx)(T.default, {
                            fullWidth: !0,
                            className: W.premiumSubscribeButton,
                            disabled: ed,
                            onClick: e => e.stopPropagation(),
                            buttonText: U.default.Messages.UNLOCK_WITH_NITRO,
                            subscriptionTier: H.PremiumSubscriptionSKUs.TIER_2
                        })
                    });
                s.useEffect(() => {
                    null == r || r(Z)
                }, [r]);
                let eb = () => null != eu ? (0, a.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        className: W.priceTag,
                        children: U.default.Messages.COLLECTIBLES_ALREADY_OWNED
                    }) : eo ? (0, a.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        className: W.priceTag,
                        children: U.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    }) : (0, a.jsx)(P.default, {
                        alwaysWhiteText: !1,
                        product: t,
                        className: W.priceTag,
                        disableTooltipPointerEvents: !0
                    }),
                    ex = () => eo ? null : ei ? (0, a.jsx)(Y, {
                        onClick: eh
                    }) : (0, a.jsx)(B.default, {
                        product: t,
                        returnRef: Z,
                        isGiftEasterEggEnabled: O,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }),
                    eL = () => {
                        if (eo && !N && !ei) return eT();
                        let e = eo ? {
                            submitting: ec,
                            submittingStartedLabel: U.default.Messages.COLLECTIBLES_COLLECTING,
                            submittingFinishedLabel: U.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                            onClick: async () => {
                                await (0, F.claimPremiumCollectiblesProduct)(t.skuId), (0, M.default)({
                                    product: t,
                                    analyticsLocations: X
                                })
                            }
                        } : {
                            onClick: () => (0, h.default)({
                                skuId: t.skuId,
                                analyticsLocations: X,
                                returnRef: Z
                            })
                        };
                        return (0, a.jsxs)("div", {
                            className: W.buttonsContainer,
                            children: [null == eu ? (0, a.jsx)(K, {
                                disabled: ed,
                                className: W.purchaseButton,
                                ...e,
                                children: eo ? U.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : U.default.Messages.COLLECTIBLES_PURCHASE.format({
                                    price: en
                                })
                            }) : (0, a.jsx)(K, {
                                disabled: ed,
                                onClick: eE,
                                children: U.default.Messages.COLLECTIBLES_USE_NOW
                            }), ex()]
                        })
                    };
                if (!1 === ef) return null;
                let eS = eC ? "0 0 15px 1px ".concat(i.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
                return (0, a.jsx)(c.FocusRing, {
                    children: (0, a.jsxs)(c.Clickable, {
                        innerRef: Z,
                        className: W.shopCard,
                        onBlur: () => J(!1),
                        onClick: eg,
                        style: null != er ? {
                            backgroundColor: eC ? "var(--background-floating)" : "var(--background-secondary)",
                            borderColor: "var(--chat-border)",
                            boxShadow: Q ? eS : "none"
                        } : void 0,
                        id: "shop-item-".concat(t.skuId),
                        children: [eo && (0, a.jsx)(c.Tooltip, {
                            tooltipContentClassName: W.premiumWheelTooltipContent,
                            color: c.Tooltip.Colors.PRIMARY,
                            text: U.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                            children: e => (0, a.jsx)(k.TextBadge, {
                                ...e,
                                className: W.premiumWheelBadge,
                                text: (0, a.jsx)(A.default, {
                                    className: W.premiumWheel
                                })
                            })
                        }), (null == et ? void 0 : et.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, a.jsx)("div", {
                            className: W.profileEffectShopPreview,
                            children: (0, a.jsx)(L.default, {
                                isHovering: Q,
                                profileEffectId: et.id,
                                isPurchased: null != eu,
                                removeSetHeight: !0
                            })
                        }), (null == et ? void 0 : et.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, a.jsx)("div", {
                            className: W.avatarContainer,
                            children: (0, a.jsx)(G, {
                                ...ea,
                                avatarDecoration: el,
                                src: es,
                                className: n(W.avatar, {
                                    [W.avatarPurchased]: null != eu
                                }),
                                size: z,
                                "aria-label": U.default.Messages.USER_SETTINGS_AVATAR
                            })
                        }), null != eu ? (0, a.jsx)("div", {
                            className: W.checkmarkWrapper,
                            children: (0, a.jsx)(_.default, {
                                width: 38,
                                height: 38,
                                className: W.checkmark
                            })
                        }) : null, (0, a.jsxs)("div", {
                            className: n(W.cardText, {
                                [W.cardTextBlur]: (null == et ? void 0 : et.type) === d.CollectiblesItemType.PROFILE_EFFECT
                            }),
                            children: [(0, a.jsx)("div", {
                                className: n(W.cardBackground, eC ? W.darkCardBackground : W.lightCardBackground, (null == et ? void 0 : et.type) === d.CollectiblesItemType.PROFILE_EFFECT ? W.cardLowOpacity : null)
                            }), (0, a.jsx)("div", {
                                className: W.productName,
                                children: N && (0, a.jsx)(c.Text, {
                                    variant: "text-lg/bold",
                                    children: t.name
                                })
                            }), (0, a.jsxs)("div", {
                                className: W.detailsWrapper,
                                children: [(0, a.jsx)(c.Text, {
                                    className: n(W.description, W.innerMask),
                                    variant: "text-md/normal",
                                    lineClamp: 3,
                                    children: t.summary
                                }), (0, a.jsx)("div", {
                                    className: W.innerBlur,
                                    children: eb()
                                }), (0, a.jsx)("div", {
                                    className: W.innerHover,
                                    children: eL()
                                })]
                            })]
                        }), (0, a.jsx)(j.default, {
                            category: l,
                            className: W.limitedTimeBadge,
                            display: "card"
                        })]
                    })
                })
            }