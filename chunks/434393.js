            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return K
                }
            }), l("222007");
            var a = l("37983"),
                s = l("884691"),
                r = l("414456"),
                n = l.n(r),
                o = l("65597"),
                i = l("77078"),
                u = l("265586"),
                c = l("54239"),
                d = l("252744"),
                f = l("812204"),
                C = l("685665"),
                E = l("606292"),
                m = l("688318"),
                p = l("946964"),
                g = l("635956"),
                h = l("38766"),
                b = l("662286"),
                T = l("601095"),
                x = l("493390"),
                L = l("697218"),
                S = l("944441"),
                I = l("462579"),
                v = l("216422"),
                _ = l("956089"),
                N = l("50885"),
                A = l("21526"),
                k = l("775416"),
                F = l("491232"),
                O = l("342676"),
                y = l("450492"),
                R = l("920580"),
                j = l("54809"),
                B = l("408381"),
                P = l("264579"),
                D = l("57940"),
                M = l("646718"),
                w = l("782340"),
                H = l("395535");
            let U = N.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar,
                W = i.AvatarSizes.SIZE_120,
                G = (0, E.getDecorationSizeForAvatarSize)(W),
                z = e => {
                    let {
                        children: t,
                        onClick: l,
                        ...s
                    } = e;
                    return (0, a.jsx)(i.Button, {
                        fullWidth: !0,
                        look: i.Button.Looks.FILLED,
                        onClick: e => {
                            e.stopPropagation(), l()
                        },
                        ...s,
                        children: t
                    })
                },
                V = e => {
                    let {
                        className: t,
                        ...l
                    } = e;
                    return (0, a.jsx)(i.Button, {
                        color: i.ButtonColors.CUSTOM,
                        look: i.Button.Looks.FILLED,
                        size: i.ButtonSizes.ICON,
                        className: n(H.previewButton, t),
                        innerClassName: H.previewButtonInner,
                        "aria-label": w.default.Messages.PREVIEW,
                        ...l,
                        children: (0, a.jsx)(I.default, {
                            width: 24,
                            height: 24
                        })
                    })
                };
            var K = function(e) {
                let {
                    product: t,
                    category: l,
                    onMount: r,
                    isPremiumUser: I = !1,
                    isGiftEasterEggEnabled: N
                } = e, {
                    analyticsLocations: K
                } = (0, C.default)(f.default.COLLECTIBLES_SHOP_CARD), Y = s.useRef(null), X = (0, d.default)(Y), [Z, q] = s.useState(!1), $ = X || Z, J = (0, o.default)([L.default], () => L.default.getCurrentUser()), [Q] = t.items, {
                    avatarDecorationSrc: ee,
                    eventHandlers: et,
                    avatarPlaceholderSrc: el
                } = (0, m.default)({
                    user: J,
                    avatarDecorationOverride: (null == Q ? void 0 : Q.type) === u.CollectiblesItemType.AVATAR_DECORATION ? Q : void 0,
                    size: G,
                    animateOnHover: !$
                }), {
                    buttonColors: ea,
                    backgroundColors: es
                } = (0, D.default)(t.categorySkuId), er = (0, F.getFormattedPriceForCollectiblesProduct)(t, I), en = (0, F.isPremiumCollectiblesProduct)(t), eo = (0, F.isFreeCollectiblesProduct)(t), [ei, eu, ec] = (0, o.useStateFromStoresArray)([k.default], () => [k.default.getPurchase(t.skuId), k.default.isClaiming === t.skuId, null != k.default.isClaiming && k.default.isClaiming !== t.skuId]), ed = (0, b.useCanUseProfileEffects)({
                    location: "CollectiblesShopCard"
                }), ef = s.useRef(null);
                s.useEffect(() => {
                    let {
                        current: e
                    } = Y;
                    if (null == e) return;
                    let t = () => q(!0);
                    return e.addEventListener("focusin", t), e.blur(), () => {
                        e.removeEventListener("focusin", t)
                    }
                }, []);
                let eC = (0, h.default)({
                        analyticsLocations: K
                    }),
                    eE = () => {
                        if ((0, c.popLayer)(), eC(), (null == Q ? void 0 : Q.type) === u.CollectiblesItemType.AVATAR_DECORATION) {
                            (0, E.openAvatarDecorationModal)({
                                initialSelectedDecoration: Q,
                                analyticsLocations: K
                            });
                            return
                        }(null == Q ? void 0 : Q.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, x.openProfileEffectModal)({
                            initialSelectedEffectId: Q.id,
                            analyticsLocations: K
                        })
                    },
                    em = e => a => {
                        ef.current = a.currentTarget, (0, j.openCollectiblesShopProductDetailsModal)({
                            product: t,
                            category: l,
                            analyticsLocations: K,
                            analyticsSource: e,
                            returnRef: ef
                        })
                    },
                    ep = em(f.default.COLLECTIBLES_SHOP_CARD),
                    eg = em(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                    eh = () => (0, a.jsx)("div", {
                        className: H.hoverUpsellContainer,
                        children: (0, a.jsx)(g.default, {
                            fullWidth: !0,
                            className: H.premiumSubscribeButton,
                            disabled: ec,
                            onClick: e => e.stopPropagation(),
                            buttonText: w.default.Messages.UNLOCK_WITH_NITRO,
                            subscriptionTier: M.PremiumSubscriptionSKUs.TIER_2
                        })
                    });
                s.useEffect(() => {
                    null == r || r(Y)
                }, [r]);
                let eb = () => null != ei ? (0, a.jsx)(i.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: H.priceTag,
                        children: w.default.Messages.COLLECTIBLES_ALREADY_OWNED
                    }) : en ? (0, a.jsx)(i.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: H.priceTag,
                        children: w.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    }) : (0, a.jsx)(R.default, {
                        product: t,
                        className: H.priceTag,
                        disableTooltipPointerEvents: !0
                    }),
                    eT = () => en ? null : eo ? (0, a.jsx)(V, {
                        style: null != ea ? {
                            background: ea.secondary.toHslString(),
                            color: ea.text.toHslString()
                        } : void 0,
                        className: H.defaultPreviewButtonColor,
                        onClick: eg
                    }) : (0, a.jsx)(y.default, {
                        product: t,
                        returnRef: Y,
                        isGiftEasterEggEnabled: N,
                        tooltipDelay: 250
                    }),
                    ex = () => {
                        if (en && !I && !eo) return eh();
                        let e = null != ea ? {
                                background: (0, B.getBackgroundGradient)(ea, 90),
                                color: ea.text.toHslString()
                            } : void 0,
                            l = en ? {
                                submitting: eu,
                                submittingStartedLabel: w.default.Messages.COLLECTIBLES_COLLECTING,
                                submittingFinishedLabel: w.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                onClick: async () => {
                                    await (0, A.claimPremiumCollectiblesProduct)(t.skuId), (0, P.default)({
                                        product: t,
                                        analyticsLocations: K
                                    })
                                }
                            } : {
                                onClick: () => (0, p.default)({
                                    skuId: t.skuId,
                                    analyticsLocations: K,
                                    returnRef: Y
                                })
                            };
                        return (0, a.jsxs)("div", {
                            className: H.buttonsContainer,
                            children: [null == ei ? (0, a.jsx)(z, {
                                style: e,
                                disabled: ec,
                                className: H.purchaseButton,
                                ...l,
                                children: en ? w.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : w.default.Messages.COLLECTIBLES_PURCHASE.format({
                                    price: er
                                })
                            }) : (0, a.jsx)(z, {
                                style: e,
                                disabled: ec,
                                onClick: eE,
                                children: w.default.Messages.COLLECTIBLES_USE_NOW
                            }), eT()]
                        })
                    };
                if (!1 === ed) return null;
                let eL = null != es ? {
                    background: "".concat((0, B.getBackgroundGradient)(es), " border-box border-box"),
                    borderColor: es.border.toHslString(),
                    boxShadow: $ ? "0 0 25px 1px ".concat(es.primary.toHslString()) : "none"
                } : void 0;
                return (0, a.jsx)(i.FocusRing, {
                    children: (0, a.jsxs)(i.Clickable, {
                        innerRef: Y,
                        className: H.shopCard,
                        onBlur: () => q(!1),
                        onClick: ep,
                        style: eL,
                        id: "shop-item-".concat(t.skuId),
                        children: [en && (0, a.jsx)(i.Tooltip, {
                            tooltipContentClassName: H.premiumWheelTooltipContent,
                            color: i.Tooltip.Colors.PRIMARY,
                            text: w.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                            children: e => (0, a.jsx)(_.TextBadge, {
                                ...e,
                                className: H.premiumWheelBadge,
                                text: (0, a.jsx)(v.default, {
                                    className: H.premiumWheel
                                })
                            })
                        }), (null == Q ? void 0 : Q.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, a.jsx)("div", {
                            className: H.profileEffectShopPreview,
                            children: (0, a.jsx)(T.default, {
                                isHovering: $,
                                profileEffectId: Q.id,
                                isPurchased: null != ei
                            })
                        }), (null == Q ? void 0 : Q.type) === u.CollectiblesItemType.AVATAR_DECORATION && (0, a.jsx)(U, {
                            ...et,
                            avatarDecoration: ee,
                            src: el,
                            className: n(H.avatar, {
                                [H.avatarPurchased]: null != ei
                            }),
                            size: W,
                            "aria-label": w.default.Messages.USER_SETTINGS_AVATAR
                        }), null != ei ? (0, a.jsx)("div", {
                            className: (null == Q ? void 0 : Q.type) === u.CollectiblesItemType.PROFILE_EFFECT ? H.profileEffectCheckmarkWrapper : H.checkmarkWrapper,
                            children: (0, a.jsx)(S.default, {
                                width: 38,
                                height: 38,
                                className: H.checkmark
                            })
                        }) : null, (0, a.jsxs)("div", {
                            className: n(H.cardText, {
                                [H.cardTextProfileEffect]: (null == Q ? void 0 : Q.type) === u.CollectiblesItemType.PROFILE_EFFECT
                            }),
                            children: [(0, a.jsx)("div", {
                                className: H.productName,
                                children: I && (0, a.jsx)(i.Text, {
                                    color: "always-white",
                                    variant: "text-lg/bold",
                                    children: t.name
                                })
                            }), (0, a.jsxs)("div", {
                                className: H.detailsWrapper,
                                children: [(0, a.jsxs)("div", {
                                    className: H.innerBlur,
                                    children: [(0, a.jsx)(i.Text, {
                                        color: "always-white",
                                        className: H.description,
                                        variant: "text-md/normal",
                                        children: t.summary
                                    }), eb()]
                                }), (0, a.jsx)("div", {
                                    className: H.innerHover,
                                    children: ex()
                                })]
                            })]
                        }), (0, a.jsx)(O.default, {
                            category: l,
                            className: H.limitedTimeBadge,
                            display: "card"
                        })]
                    })
                })
            }