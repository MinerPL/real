(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["12109"], {
        665484: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("77078"),
                i = s("730297"),
                o = s("806410"),
                n = s("782340");

            function r(e) {
                let {
                    product: t
                } = e, s = function(e) {
                    switch (!0) {
                        case null != e.items.find(i.isAvatarDecorationRecord):
                            return n.default.Messages.USER_SETTINGS_AVATAR_DECORATION;
                        case null != e.items.find(o.isProfileEffectRecord):
                            return n.default.Messages.USER_SETTINGS_PROFILE_EFFECT;
                        default:
                            return null
                    }
                }(t);
                return null === s ? null : (0, a.jsx)(l.Text, {
                    color: "text-normal",
                    variant: "eyebrow",
                    children: s
                })
            }
        },
        179047: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return eC
                }
            }), s("222007");
            var a = s("37983"),
                l = s("884691"),
                i = s("414456"),
                o = s.n(i),
                n = s("635058"),
                r = s("65597"),
                u = s("77078"),
                d = s("54239"),
                c = s("152584"),
                f = s("812204"),
                C = s("685665"),
                E = s("606292"),
                L = s("688318"),
                m = s("692038"),
                I = s("815297"),
                _ = s("574073"),
                S = s("291655"),
                T = s("946964"),
                g = s("649844"),
                h = s("635956"),
                M = s("38766"),
                v = s("184900"),
                P = s("662286"),
                O = s("493390"),
                p = s("217513"),
                x = s("790618"),
                N = s("697218"),
                A = s("46829"),
                D = s("216422"),
                R = s("351825"),
                k = s("599110"),
                b = s("719923"),
                B = s("21526"),
                j = s("417313"),
                w = s("775416"),
                U = s("805172"),
                y = s("491232"),
                F = s("730297"),
                H = s("806410"),
                z = s("716120"),
                W = s("89569"),
                G = s("665484"),
                K = s("342676"),
                Y = s("450492"),
                V = s("920580"),
                X = s("791309"),
                Z = s("54809"),
                q = s("408381"),
                J = s("264579"),
                Q = s("57940"),
                $ = s("49111"),
                ee = s("646718"),
                et = s("843455"),
                es = s("782340"),
                ea = s("483622"),
                el = s("53708");
            let ei = u.AvatarSizes.SIZE_152,
                eo = (0, E.getDecorationSizeForAvatarSize)(ei),
                en = (0, q.getLogoSize)(18),
                er = e => {
                    let {
                        text: t
                    } = e, {
                        analyticsLocations: s
                    } = (0, C.default)(), i = l.useRef(null);
                    return (0, a.jsx)(u.Clickable, {
                        className: ea.subscribeNow,
                        innerRef: i,
                        onClick: () => {
                            (0, g.default)({
                                subscriptionTier: ee.PremiumSubscriptionSKUs.TIER_2,
                                analyticsLocations: s,
                                returnRef: i
                            })
                        },
                        children: t
                    })
                },
                eu = e => {
                    let {
                        product: t,
                        user: s,
                        category: i,
                        onClose: o,
                        returnRef: n
                    } = e, {
                        analyticsLocations: f
                    } = (0, C.default)(), m = (0, P.useCanUseProfileEffects)({
                        location: "CollectiblesProductPreviewInfo"
                    }), {
                        shopForAllEnabled: I
                    } = (0, U.default)({
                        location: "CollectiblesProductPreviewInfo"
                    }), {
                        giftingEnabled: _
                    } = (0, j.default)({
                        location: "CollectiblesProductPreviewInfo"
                    }), S = b.default.canUseCollectibles(s), [g, v] = (0, r.useStateFromStoresArray)([w.default], () => [w.default.getPurchase(t.skuId), w.default.isClaiming === t.skuId]), p = (0, M.default)({
                        analyticsLocations: f
                    }), {
                        buttonColors: x,
                        backgroundColors: N
                    } = (0, Q.default)(i), A = null != x ? {
                        background: (0, q.getBackgroundGradient)(x, 90),
                        color: x.text.toHslString()
                    } : void 0, R = null != N ? {
                        background: (0, q.getBackgroundGradient)(N, 135)
                    } : void 0, k = (0, y.isPremiumCollectiblesCategory)(i), z = l.useMemo(() => {
                        var e;
                        return null !== (e = t.items.find(F.isAvatarDecorationRecord)) && void 0 !== e ? e : null
                    }, [t]), W = l.useMemo(() => {
                        var e;
                        return null !== (e = t.items.find(H.isProfileEffectRecord)) && void 0 !== e ? e : null
                    }, [t]), eu = null != W && null == z, ed = null != z && null == W;
                    l.useEffect(() => (ed && (0, c.setPendingAvatarDecoration)(z), () => {
                        (0, c.setPendingAvatarDecoration)(void 0)
                    }), [ed, z]);
                    let ec = e => (0, a.jsx)(h.default, {
                            subscriptionTier: ee.PremiumSubscriptionSKUs.TIER_2,
                            fullWidth: !0,
                            buttonText: e,
                            onClick: Z.closeCollectiblesShopProductDetailsModal,
                            onSubscribeModalClose: () => {
                                (0, Z.openCollectiblesShopProductDetailsModal)({
                                    product: t,
                                    category: i,
                                    returnRef: n,
                                    analyticsLocations: f
                                })
                            }
                        }),
                        {
                            avatarDecorationSrc: ef,
                            eventHandlers: eC
                        } = (0, L.default)({
                            user: s,
                            avatarDecorationOverride: z,
                            size: eo
                        });
                    return (0, a.jsxs)("div", {
                        className: ea.collectibleInfoContainer,
                        style: R,
                        children: [(0, a.jsxs)("div", {
                            className: ea.titleContainer,
                            children: [(0, a.jsx)("div", {
                                className: ea.titleImageWrapper,
                                children: (0, a.jsx)("img", {
                                    className: ea.titleImage,
                                    src: (0, y.getCollectiblesAssetURL)(i.logo, {
                                        size: en
                                    }),
                                    alt: i.name
                                })
                            }), (0, a.jsx)(K.default, {
                                category: i,
                                display: "modal"
                            })]
                        }), null != z && (0, a.jsx)("div", {
                            className: ea.avatarPreviewContainer,
                            children: (0, a.jsx)(u.Avatar, {
                                ...eC,
                                "aria-label": es.default.Messages.USER_SETTINGS_AVATAR,
                                size: ei,
                                avatarDecoration: ef,
                                src: el
                            })
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsxs)("div", {
                                className: ea.description,
                                children: [m && (0, a.jsx)(G.default, {
                                    product: t
                                }), (0, a.jsx)(u.Heading, {
                                    color: "always-white",
                                    variant: "heading-xl/extrabold",
                                    className: m ? ea.headingWithItemTypePill : void 0,
                                    children: t.name
                                }), (0, a.jsx)(u.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: t.summary
                                }), (() => {
                                    if (null != g) return (0, a.jsx)(u.Text, {
                                        color: "always-white",
                                        variant: "text-md/semibold",
                                        className: ea.priceTag,
                                        children: es.default.Messages.COLLECTIBLES_ALREADY_OWNED
                                    });
                                    if (k) return (0, a.jsx)(u.Text, {
                                        color: "always-white",
                                        variant: "text-md/semibold",
                                        className: ea.priceTag,
                                        children: es.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                                    });
                                    if (!_ || S) return (0, a.jsx)(V.default, {
                                        product: t,
                                        className: ea.priceTag
                                    });
                                    let e = (0, y.extractPriceByPurchaseTypes)(t, $.PriceSetAssignmentPurchaseTypes.DEFAULT);
                                    if (null == e) return null;
                                    let s = (0, y.extractPriceByPurchaseTypes)(t, $.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2);
                                    return (0, a.jsxs)("div", {
                                        className: ea.priceTagContainer,
                                        children: [(0, a.jsx)(X.default, {
                                            price: e
                                        }), null != s && (0, a.jsx)(X.default, {
                                            price: s,
                                            variant: "text-xs/medium",
                                            className: ea.premiumPriceTag,
                                            renderPrice: e => es.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
                                                price: e,
                                                subscribeNowHook: e => (0, a.jsx)(er, {
                                                    text: e
                                                })
                                            }),
                                            icon: (0, a.jsx)(u.Tooltip, {
                                                text: es.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                                                "aria-label": es.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                                                children: e => {
                                                    let {
                                                        ...t
                                                    } = e;
                                                    return (0, a.jsx)(D.default, {
                                                        ...t,
                                                        className: ea.premiumPriceTagIcon,
                                                        color: "white"
                                                    })
                                                }
                                            })
                                        })]
                                    })
                                })()]
                            }), (0, a.jsxs)("div", {
                                className: ea.buttonsContainer,
                                children: [(0, a.jsxs)("div", {
                                    className: ea.primaryButtons,
                                    children: [I && k && !S ? ec(es.default.Messages.UNLOCK_WITH_NITRO) : S || I ? null != g ? (0, a.jsx)(u.Button, {
                                        className: ea.button,
                                        look: u.Button.Looks.FILLED,
                                        onClick: () => {
                                            o(), (0, d.popLayer)(), p(), ed ? (0, E.openAvatarDecorationModal)({
                                                analyticsLocations: f,
                                                initialSelectedDecoration: null != z ? z : null
                                            }) : eu && (0, O.openProfileEffectModal)({
                                                analyticsLocations: f,
                                                initialSelectedEffectID: null == W ? void 0 : W.id
                                            })
                                        },
                                        children: es.default.Messages.COLLECTIBLES_USE_NOW
                                    }) : k ? (0, a.jsx)(u.Button, {
                                        style: A,
                                        className: ea.button,
                                        look: u.Button.Looks.FILLED,
                                        submitting: v,
                                        submittingStartedLabel: es.default.Messages.COLLECTIBLES_COLLECTING,
                                        submittingFinishedLabel: es.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                        onClick: async () => {
                                            await (0, B.claimPremiumCollectiblesProduct)(t.skuId), o(), (0, J.default)({
                                                product: t,
                                                category: i,
                                                analyticsLocations: f
                                            })
                                        },
                                        children: es.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                                    }) : (0, a.jsx)(u.Button, {
                                        style: A,
                                        className: ea.button,
                                        look: u.Button.Looks.FILLED,
                                        onClick: () => (0, T.default)({
                                            skuId: t.skuId,
                                            analyticsLocations: f,
                                            onClose: e => e ? o() : (0, et.NOOP)()
                                        }),
                                        children: eu ? es.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : es.default.Messages.COLLECTIBLES_BUY_DECORATION
                                    }) : ec(es.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA), _ && !k && (0, a.jsx)(Y.default, {
                                        product: t,
                                        onSuccess: o
                                    })]
                                }), _ || !I || k || null != g || S ? null : (0, a.jsx)(h.default, {
                                    subscriptionTier: ee.PremiumSubscriptionSKUs.TIER_2,
                                    fullWidth: !0,
                                    color: u.Button.Colors.WHITE,
                                    look: u.Button.Looks.OUTLINED,
                                    buttonText: b.default.isPremium(s) ? es.default.Messages.COLLECTIBLES_UPGRADE_FOR_DISCOUNT : es.default.Messages.COLLECTIBLES_SFA_UNLOCK_DISCOUNT,
                                    className: ea.unlockDiscountButton,
                                    onlyShineOnHover: !0,
                                    onClick: Z.closeCollectiblesShopProductDetailsModal,
                                    onSubscribeModalClose: () => {
                                        (0, Z.openCollectiblesShopProductDetailsModal)({
                                            product: t,
                                            category: i,
                                            returnRef: n,
                                            analyticsLocations: f
                                        })
                                    }
                                })]
                            }), (0, a.jsx)(u.Text, {
                                color: "none",
                                className: ea.disclaimer,
                                variant: "text-xxs/normal",
                                children: null != g ? null : S || I ? k ? es.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : eu ? es.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : es.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER : eu ? es.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECTS_NON_PREMIUM_PURCHASE_DISCLAIMER : es.default.Messages.COLLECTIBLES_DETAILS_MODAL_NON_PREMIUM_PURCHASE_DISCLAIMER
                            })]
                        })]
                    })
                },
                ed = e => {
                    let {
                        product: t,
                        user: s
                    } = e, i = b.default.canUsePremiumProfileCustomization(s), o = (0, r.useStateFromStoresObject)([x.default], () => x.default.getAllPending()), n = (0, p.default)(s.id), u = !!(null == n ? void 0 : n.getPreviewBio(o.pendingBio).value), d = l.useMemo(() => {
                        var e;
                        return null !== (e = t.items.find(F.isAvatarDecorationRecord)) && void 0 !== e ? e : null
                    }, [t]), c = l.useMemo(() => t.items.find(H.isProfileEffectRecord), [t]);
                    return (0, a.jsxs)("div", {
                        className: null != d ? ea.previewsContainerInner : ea.profileEffectPreviewsContainerInner,
                        children: [(0, a.jsx)(v.default, {
                            ...o,
                            user: s,
                            canUsePremiumCustomization: i,
                            onAvatarChange: et.NOOP,
                            onBannerChange: et.NOOP,
                            bodyClassName: ea.profileCustomizationBody,
                            pendingAvatarDecoration: null != d ? d : void 0,
                            pendingProfileEffectID: null == c ? void 0 : c.id,
                            forProfileEffectModal: null != c,
                            disabledInputs: !0,
                            hideExampleButton: !0,
                            hideFakeActivity: null != d || u,
                            hideBioSection: null != d
                        }), null != d && (0, a.jsx)(ef, {
                            user: s
                        })]
                    })
                },
                ec = e => {
                    let {
                        author: t
                    } = e, s = (0, m.createMessageRecord)({
                        ...(0, I.default)({
                            author: t,
                            channelId: "1337",
                            content: es.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
                        }),
                        state: $.MessageStates.SENT,
                        id: "0"
                    });
                    return s
                },
                ef = e => {
                    let {
                        user: t
                    } = e, s = ec({
                        author: t
                    });
                    return (0, a.jsx)(u.FocusBlock, {
                        children: (0, a.jsxs)(u.Card, {
                            className: ea.chatPreview,
                            outline: !0,
                            "aria-hidden": !0,
                            children: [(0, a.jsx)(S.default, {
                                className: ea.mockMessage,
                                author: (0, _.getMessageAuthor)(s),
                                message: s
                            }, s.id), (0, a.jsxs)("div", {
                                className: ea.mockInput,
                                children: [(0, a.jsx)(R.default, {
                                    className: ea.mockInputButton,
                                    width: 24,
                                    height: 24
                                }), (0, a.jsx)(A.default, {
                                    className: ea.mockInputButton,
                                    width: 24,
                                    height: 24
                                })]
                            })]
                        })
                    })
                };
            var eC = e => {
                let {
                    transitionState: t,
                    onClose: s,
                    product: i,
                    category: d,
                    returnRef: c,
                    analyticsSource: E,
                    analyticsLocations: L
                } = e, m = (0, r.default)([N.default], () => N.default.getCurrentUser()), {
                    analyticsLocations: I,
                    AnalyticsLocationProvider: _
                } = (0, C.default)([...L, f.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
                (0, W.useProductDetailsLinkableRoute)(i);
                let S = l.useMemo(() => i.items.find(F.isAvatarDecorationRecord), [i]),
                    T = d.skuId === n.CollectiblesCategorySkuId.WINTER;
                return (l.useEffect(() => {
                    k.default.track($.AnalyticEvents.OPEN_MODAL, {
                        type: $.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
                        source: E,
                        location_stack: I,
                        sku_id: i.skuId,
                        product_type: null != S ? "avatar decoration" : "profile effect"
                    }), i.items.map(B.productDetailsOpened)
                }, [E, I, i.skuId, i.items, S]), null == m) ? null : (0, a.jsx)(_, {
                    children: (0, a.jsx)(u.ModalRoot, {
                        hideShadow: !0,
                        className: ea.modalRoot,
                        returnRef: c,
                        transitionState: t,
                        size: u.ModalSize.DYNAMIC,
                        children: (0, a.jsxs)(u.ModalContent, {
                            className: ea.modalContent,
                            children: [(0, a.jsx)(eu, {
                                user: m,
                                product: i,
                                category: d,
                                onClose: s
                            }), (0, a.jsxs)("div", {
                                className: null != S ? ea.collectiblePreviewsContainerWithChat : ea.collectiblePreviewsContainerNoChat,
                                children: [(0, a.jsx)(z.default, {
                                    asset: d.banner,
                                    size: 540,
                                    className: o(T ? ea.winterCategoryBanner : ea.categoryBanner)
                                }), (0, a.jsx)(ed, {
                                    user: m,
                                    product: i
                                })]
                            }), (0, a.jsx)(u.ModalCloseButton, {
                                onClick: s,
                                className: ea.modalCloseButton,
                                withCircleBackground: !0
                            })]
                        })
                    })
                })
            }
        },
        291655: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return C
                }
            });
            var a = s("37983"),
                l = s("884691"),
                i = s("414456"),
                o = s.n(i),
                n = s("193865"),
                r = s("780571"),
                u = s("39331"),
                d = s("596368"),
                c = s("227439"),
                f = s("877671"),
                C = l.memo(function(e) {
                    var t, s, l;
                    let {
                        message: i,
                        channel: C,
                        compact: E,
                        className: L,
                        isGroupStart: m,
                        hideSimpleEmbedContent: I = !0,
                        disableInteraction: _
                    } = e, S = (0, n.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()), T = (0, n.useShowImprovedMarkdownGuildExperimentConfig)(null !== (s = null == C ? void 0 : C.guild_id) && void 0 !== s ? s : "", (null !== (l = i.editedTimestamp) && void 0 !== l ? l : i.timestamp).valueOf()), {
                        content: g
                    } = (0, u.default)(i, {
                        hideSimpleEmbedContent: I,
                        allowList: S.showListsAndHeaders || T.showListsAndHeaders,
                        allowHeading: S.showListsAndHeaders || T.showListsAndHeaders,
                        allowLinks: S.showMaskedLinks || T.showMaskedLinks,
                        previewLinkTarget: S.showMaskedLinks || T.showMaskedLinks
                    });
                    return (0, a.jsx)(r.default, {
                        compact: E,
                        className: o(L, {
                            [f.message]: !0,
                            [f.cozyMessage]: !E,
                            [f.groupStart]: m
                        }),
                        childrenHeader: (0, c.default)({
                            ...e,
                            channel: C,
                            guildId: void 0
                        }),
                        childrenMessageContent: (0, d.default)(e, g),
                        disableInteraction: _
                    })
                })
        }
    }
]);