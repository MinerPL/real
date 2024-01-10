            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return Y
                }
            }), a("222007");
            var l = a("37983"),
                s = a("884691"),
                r = a("414456"),
                n = a.n(r),
                o = a("65597"),
                i = a("669491"),
                u = a("755854"),
                c = a("77078"),
                d = a("265586"),
                f = a("54239"),
                C = a("252744"),
                E = a("812204"),
                m = a("685665"),
                p = a("606292"),
                g = a("688318"),
                h = a("946964"),
                b = a("635956"),
                T = a("38766"),
                x = a("601095"),
                L = a("493390"),
                S = a("161778"),
                I = a("697218"),
                v = a("944441"),
                _ = a("462579"),
                N = a("216422"),
                A = a("956089"),
                k = a("50885"),
                F = a("21526"),
                O = a("775416"),
                y = a("491232"),
                R = a("342676"),
                j = a("450492"),
                B = a("920580"),
                P = a("54809"),
                D = a("264579"),
                M = a("57940"),
                w = a("646718"),
                H = a("782340"),
                U = a("216365");
            let W = k.default.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar,
                G = c.AvatarSizes.SIZE_152,
                z = (0, p.getDecorationSizeForAvatarSize)(G),
                V = e => {
                    let {
                        children: t,
                        onClick: a,
                        ...s
                    } = e;
                    return (0, l.jsx)(c.Button, {
                        fullWidth: !0,
                        look: c.Button.Looks.FILLED,
                        onClick: e => {
                            e.stopPropagation(), a()
                        },
                        ...s,
                        children: t
                    })
                },
                K = e => {
                    let {
                        className: t,
                        ...a
                    } = e;
                    return (0, l.jsx)(c.Button, {
                        color: c.ButtonColors.BRAND,
                        look: c.Button.Looks.FILLED,
                        size: c.ButtonSizes.ICON,
                        className: n(U.previewButton, t),
                        innerClassName: U.previewButtonInner,
                        "aria-label": H.default.Messages.PREVIEW,
                        ...a,
                        children: (0, l.jsx)(_.default, {
                            width: 24,
                            height: 24
                        })
                    })
                };
            var Y = function(e) {
                let {
                    product: t,
                    category: a,
                    onMount: r,
                    isPremiumUser: _ = !1,
                    isGiftEasterEggEnabled: k
                } = e, {
                    analyticsLocations: Y
                } = (0, m.default)(E.default.COLLECTIBLES_SHOP_CARD), X = s.useRef(null), Z = (0, C.default)(X), [q, $] = s.useState(!1), J = Z || q, Q = (0, o.default)([I.default], () => I.default.getCurrentUser()), [ee] = t.items, {
                    avatarDecorationSrc: et,
                    eventHandlers: ea,
                    avatarPlaceholderSrc: el
                } = (0, g.default)({
                    user: Q,
                    avatarDecorationOverride: (null == ee ? void 0 : ee.type) === d.CollectiblesItemType.AVATAR_DECORATION ? ee : void 0,
                    size: z,
                    animateOnHover: !J
                }), {
                    backgroundColors: es
                } = (0, M.default)(t.categorySkuId), er = (0, y.getFormattedPriceForCollectiblesProduct)(t, _), en = (0, y.isPremiumCollectiblesProduct)(t), eo = (0, y.isFreeCollectiblesProduct)(t), [ei, eu, ec] = (0, o.useStateFromStoresArray)([O.default], () => [O.default.getPurchase(t.skuId), O.default.isClaiming === t.skuId, null != O.default.isClaiming && O.default.isClaiming !== t.skuId]), ed = (0, o.default)([S.default], () => (0, u.isThemeDark)(S.default.theme));
                s.useEffect(() => {
                    let {
                        current: e
                    } = X;
                    if (null == e) return;
                    let t = () => $(!0);
                    return e.addEventListener("focusin", t), e.blur(), () => {
                        e.removeEventListener("focusin", t)
                    }
                }, []);
                let ef = (0, T.default)({
                        analyticsLocations: Y
                    }),
                    eC = s.useRef(null),
                    eE = () => {
                        if ((0, f.popLayer)(), ef(), (null == ee ? void 0 : ee.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
                            (0, p.openAvatarDecorationModal)({
                                initialSelectedDecoration: ee,
                                analyticsLocations: Y
                            });
                            return
                        }(null == ee ? void 0 : ee.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, L.openProfileEffectModal)({
                            initialSelectedEffectId: ee.id,
                            analyticsLocations: Y
                        })
                    },
                    em = e => l => {
                        eC.current = l.currentTarget, (0, P.openCollectiblesShopProductDetailsModal)({
                            product: t,
                            category: a,
                            analyticsLocations: Y,
                            analyticsSource: e,
                            returnRef: eC
                        })
                    },
                    ep = em(E.default.COLLECTIBLES_SHOP_CARD),
                    eg = em(E.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                    eh = () => (0, l.jsx)("div", {
                        className: U.hoverUpsellContainer,
                        children: (0, l.jsx)(b.default, {
                            fullWidth: !0,
                            className: U.premiumSubscribeButton,
                            disabled: ec,
                            onClick: e => e.stopPropagation(),
                            buttonText: H.default.Messages.UNLOCK_WITH_NITRO,
                            subscriptionTier: w.PremiumSubscriptionSKUs.TIER_2
                        })
                    });
                s.useEffect(() => {
                    null == r || r(X)
                }, [r]);
                let eb = () => null != ei ? (0, l.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        className: U.priceTag,
                        children: H.default.Messages.COLLECTIBLES_ALREADY_OWNED
                    }) : en ? (0, l.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        className: U.priceTag,
                        children: H.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    }) : (0, l.jsx)(B.default, {
                        alwaysWhiteText: !1,
                        product: t,
                        className: U.priceTag,
                        disableTooltipPointerEvents: !0
                    }),
                    eT = () => en ? null : eo ? (0, l.jsx)(K, {
                        onClick: eg
                    }) : (0, l.jsx)(j.default, {
                        product: t,
                        returnRef: X,
                        isGiftEasterEggEnabled: k,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }),
                    ex = () => {
                        if (en && !_ && !eo) return eh();
                        let e = en ? {
                            submitting: eu,
                            submittingStartedLabel: H.default.Messages.COLLECTIBLES_COLLECTING,
                            submittingFinishedLabel: H.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                            onClick: async () => {
                                await (0, F.claimPremiumCollectiblesProduct)(t.skuId), (0, D.default)({
                                    product: t,
                                    analyticsLocations: Y
                                })
                            }
                        } : {
                            onClick: () => (0, h.default)({
                                skuId: t.skuId,
                                analyticsLocations: Y,
                                returnRef: X
                            })
                        };
                        return (0, l.jsxs)("div", {
                            className: U.buttonsContainer,
                            children: [null == ei ? (0, l.jsx)(V, {
                                disabled: ec,
                                className: U.purchaseButton,
                                ...e,
                                children: en ? H.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : H.default.Messages.COLLECTIBLES_PURCHASE.format({
                                    price: er
                                })
                            }) : (0, l.jsx)(V, {
                                disabled: ec,
                                onClick: eE,
                                children: H.default.Messages.COLLECTIBLES_USE_NOW
                            }), eT()]
                        })
                    },
                    eL = ed ? "0 0 15px 1px ".concat(i.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
                return (0, l.jsx)(c.FocusRing, {
                    children: (0, l.jsxs)(c.Clickable, {
                        innerRef: X,
                        className: U.shopCard,
                        onBlur: () => $(!1),
                        onClick: ep,
                        style: null != es ? {
                            backgroundColor: ed ? "var(--background-floating)" : "var(--background-secondary)",
                            borderColor: "var(--chat-border)",
                            boxShadow: J ? eL : "none"
                        } : void 0,
                        id: "shop-item-".concat(t.skuId),
                        children: [en && (0, l.jsx)(c.Tooltip, {
                            tooltipContentClassName: U.premiumWheelTooltipContent,
                            color: c.Tooltip.Colors.PRIMARY,
                            text: H.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                            children: e => (0, l.jsx)(A.TextBadge, {
                                ...e,
                                className: U.premiumWheelBadge,
                                text: (0, l.jsx)(N.default, {
                                    className: U.premiumWheel
                                })
                            })
                        }), (null == ee ? void 0 : ee.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
                            className: U.profileEffectShopPreview,
                            children: (0, l.jsx)(x.default, {
                                isHovering: J,
                                profileEffectId: ee.id,
                                isPurchased: null != ei,
                                removeSetHeight: !0
                            })
                        }), (null == ee ? void 0 : ee.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)("div", {
                            className: U.avatarContainer,
                            children: (0, l.jsx)(W, {
                                ...ea,
                                avatarDecoration: et,
                                src: el,
                                className: n(U.avatar, {
                                    [U.avatarPurchased]: null != ei
                                }),
                                size: G,
                                "aria-label": H.default.Messages.USER_SETTINGS_AVATAR
                            })
                        }), null != ei ? (0, l.jsx)("div", {
                            className: U.checkmarkWrapper,
                            children: (0, l.jsx)(v.default, {
                                width: 38,
                                height: 38,
                                className: U.checkmark
                            })
                        }) : null, (0, l.jsxs)("div", {
                            className: n(U.cardText, {
                                [U.cardTextBlur]: (null == ee ? void 0 : ee.type) === d.CollectiblesItemType.PROFILE_EFFECT
                            }),
                            children: [(0, l.jsx)("div", {
                                className: n(U.cardBackground, ed ? U.darkCardBackground : U.lightCardBackground, (null == ee ? void 0 : ee.type) === d.CollectiblesItemType.PROFILE_EFFECT ? U.cardLowOpacity : null)
                            }), (0, l.jsx)("div", {
                                className: U.productName,
                                children: _ && (0, l.jsx)(c.Text, {
                                    variant: "text-lg/bold",
                                    children: t.name
                                })
                            }), (0, l.jsxs)("div", {
                                className: U.detailsWrapper,
                                children: [(0, l.jsx)(c.Text, {
                                    className: n(U.description, U.innerMask),
                                    variant: "text-md/normal",
                                    lineClamp: 3,
                                    children: t.summary
                                }), (0, l.jsx)("div", {
                                    className: U.innerBlur,
                                    children: eb()
                                }), (0, l.jsx)("div", {
                                    className: U.innerHover,
                                    children: ex()
                                })]
                            })]
                        }), (0, l.jsx)(R.default, {
                            category: a,
                            className: U.limitedTimeBadge,
                            display: "card"
                        })]
                    })
                })
            }