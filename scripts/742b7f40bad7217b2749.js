(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["92750"], {
        101017: function(e, a, l) {
            "use strict";
            e.exports = l.p + "76db37e93ca50f3fa98b.svg"
        },
        65757: function(e, a, l) {
            "use strict";
            e.exports = l.p + "829f8ef7dcf355fbe141.svg"
        },
        603798: function(e, a, l) {
            "use strict";
            l.r(a), l.d(a, {
                default: function() {
                    return d
                }
            });
            var t = l("37983");
            l("884691");
            var s = l("77078"),
                i = l("730297"),
                n = l("806410"),
                o = l("782340"),
                r = l("31879");

            function d(e) {
                let {
                    product: a
                } = e, l = function(e) {
                    switch (!0) {
                        case null != e.items.find(i.isAvatarDecorationRecord):
                            return o.default.Messages.USER_SETTINGS_AVATAR_DECORATION;
                        case null != e.items.find(n.isProfileEffectRecord):
                            return o.default.Messages.USER_SETTINGS_PROFILE_EFFECT;
                        default:
                            return null
                    }
                }(a);
                return null === l ? null : (0, t.jsx)("div", {
                    className: r.typePill,
                    children: (0, t.jsx)(s.Text, {
                        color: "always-white",
                        variant: "text-xxs/normal",
                        children: l
                    })
                })
            }
        },
        179047: function(e, a, l) {
            "use strict";
            l.r(a), l.d(a, {
                default: function() {
                    return et
                }
            });
            var t = l("37983"),
                s = l("884691"),
                i = l("65597"),
                n = l("77078"),
                o = l("54239"),
                r = l("812204"),
                d = l("685665"),
                u = l("606292"),
                c = l("688318"),
                f = l("692038"),
                m = l("815297"),
                C = l("574073"),
                h = l("291655"),
                E = l("946964"),
                I = l("635956"),
                L = l("38766"),
                g = l("184900"),
                p = l("662286"),
                S = l("493390"),
                v = l("217513"),
                _ = l("766274"),
                x = l("790618"),
                M = l("697218"),
                N = l("46829"),
                A = l("351825"),
                T = l("599110"),
                O = l("719923"),
                R = l("21526"),
                j = l("775416"),
                k = l("805172"),
                P = l("491232"),
                b = l("730297"),
                D = l("806410"),
                U = l("716120"),
                B = l("603798"),
                w = l("342676"),
                y = l("781755"),
                F = l("54809"),
                H = l("408381"),
                z = l("264579"),
                W = l("57940"),
                G = l("49111"),
                V = l("646718"),
                K = l("843455"),
                Y = l("782340"),
                Z = l("483622"),
                X = l("53708");
            let q = n.AvatarSizes.SIZE_152,
                J = (0, u.getDecorationSizeForAvatarSize)(q),
                Q = (0, H.getLogoSize)(18),
                $ = e => {
                    let {
                        product: a,
                        user: l,
                        category: r,
                        onClose: f,
                        returnRef: m
                    } = e, {
                        analyticsLocations: C
                    } = (0, d.default)(), h = (0, p.useCanUseProfileEffects)({
                        location: "CollectiblesShop"
                    }), {
                        shopForAllEnabled: g
                    } = (0, k.default)({
                        location: "CollectiblesShop"
                    }), v = O.default.canUseCollectibles(l), [_, x] = (0, i.useStateFromStoresArray)([j.default], () => [j.default.getPurchase(a.skuId), j.default.isClaiming === a.skuId]), M = (0, L.default)({
                        analyticsLocations: C
                    }), {
                        buttonColors: N,
                        backgroundColors: A
                    } = (0, W.default)(r), T = null != N ? {
                        background: (0, H.getBackgroundGradient)(N, 90),
                        color: N.text.toHslString()
                    } : void 0, U = null != A ? {
                        background: (0, H.getBackgroundGradient)(A, 135)
                    } : void 0, G = (0, P.isPremiumCollectiblesCategory)(r), $ = s.useMemo(() => {
                        var e;
                        return null !== (e = a.items.find(b.isAvatarDecorationRecord)) && void 0 !== e ? e : null
                    }, [a]), ee = s.useMemo(() => {
                        var e;
                        return null !== (e = a.items.find(D.isProfileEffectRecord)) && void 0 !== e ? e : null
                    }, [a]), ea = null != ee && null == $, el = null != $ && null == ee, et = e => (0, t.jsx)(I.default, {
                        subscriptionTier: V.PremiumSubscriptionSKUs.TIER_2,
                        fullWidth: !0,
                        buttonText: e,
                        onClick: F.closeCollectiblesShopProductDetailsModal,
                        onSubscribeModalClose: () => {
                            (0, F.openCollectiblesShopProductDetailsModal)({
                                product: a,
                                category: r,
                                returnRef: m,
                                analyticsLocations: C
                            })
                        }
                    }), {
                        avatarDecorationSrc: es,
                        eventHandlers: ei
                    } = (0, c.default)({
                        user: l,
                        avatarDecorationOverride: $,
                        size: J
                    });
                    return (0, t.jsxs)("div", {
                        className: Z.collectibleInfoContainer,
                        style: U,
                        children: [(0, t.jsxs)("div", {
                            className: Z.titleContainer,
                            children: [(0, t.jsx)("div", {
                                className: Z.titleImageWrapper,
                                children: (0, t.jsx)("img", {
                                    className: Z.titleImage,
                                    src: (0, P.getCollectiblesAssetURL)(r.logo, {
                                        size: Q
                                    }),
                                    alt: r.name
                                })
                            }), (0, t.jsx)(w.default, {
                                category: r,
                                display: "modal"
                            })]
                        }), null != $ && (0, t.jsx)("div", {
                            className: Z.avatarPreviewContainer,
                            children: (0, t.jsx)(n.Avatar, {
                                ...ei,
                                "aria-label": Y.default.Messages.USER_SETTINGS_AVATAR,
                                size: q,
                                avatarDecoration: es,
                                src: X
                            })
                        }), (0, t.jsxs)("div", {
                            children: [(0, t.jsxs)("div", {
                                className: Z.description,
                                children: [h && (0, t.jsx)(B.default, {
                                    product: a
                                }), (0, t.jsx)(n.Heading, {
                                    color: "always-white",
                                    variant: "heading-xl/extrabold",
                                    className: h ? Z.headingWithItemTypePill : void 0,
                                    children: a.name
                                }), (0, t.jsx)(n.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: a.summary
                                }), (0, t.jsx)(y.default, {
                                    product: a,
                                    purchase: _,
                                    isPremiumCategory: G,
                                    className: Z.priceTag
                                })]
                            }), (0, t.jsxs)("div", {
                                className: Z.buttonsContainer,
                                children: [g && G && !v ? et(Y.default.Messages.UNLOCK_WITH_NITRO) : v || g ? null != _ ? (0, t.jsx)(n.Button, {
                                    className: Z.button,
                                    look: n.Button.Looks.FILLED,
                                    onClick: () => {
                                        if (f(), (0, o.popLayer)(), M(), el)(0, u.openAvatarDecorationModal)({
                                            analyticsLocations: C,
                                            initialSelectedDecoration: null != $ ? $ : null
                                        });
                                        else if (ea)(0, S.openProfileEffectModal)({
                                            analyticsLocations: C,
                                            initialSelectedEffectID: null == ee ? void 0 : ee.id
                                        })
                                    },
                                    children: Y.default.Messages.COLLECTIBLES_USE_NOW
                                }) : G ? (0, t.jsx)(n.Button, {
                                    style: T,
                                    className: Z.button,
                                    look: n.Button.Looks.FILLED,
                                    submitting: x,
                                    submittingStartedLabel: Y.default.Messages.COLLECTIBLES_COLLECTING,
                                    submittingFinishedLabel: Y.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                    onClick: async () => {
                                        await (0, R.claimPremiumCollectiblesProduct)(a.skuId), f(), (0, z.default)({
                                            product: a,
                                            category: r,
                                            analyticsLocations: C
                                        })
                                    },
                                    children: Y.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                                }) : (0, t.jsx)(n.Button, {
                                    style: T,
                                    className: Z.button,
                                    look: n.Button.Looks.FILLED,
                                    onClick: () => (0, E.default)({
                                        skuId: a.skuId,
                                        analyticsLocations: C,
                                        onClose: e => e ? f() : (0, K.NOOP)()
                                    }),
                                    children: ea ? Y.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : Y.default.Messages.COLLECTIBLES_BUY_DECORATION
                                }) : et(Y.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA), !g || G || null != _ || v ? null : (0, t.jsx)(I.default, {
                                    subscriptionTier: V.PremiumSubscriptionSKUs.TIER_2,
                                    fullWidth: !0,
                                    color: n.Button.Colors.WHITE,
                                    look: n.Button.Looks.OUTLINED,
                                    buttonText: O.default.isPremium(l) ? Y.default.Messages.COLLECTIBLES_UPGRADE_FOR_DISCOUNT : Y.default.Messages.COLLECTIBLES_SFA_UNLOCK_DISCOUNT,
                                    className: Z.unlockDiscountButton,
                                    onlyShineOnHover: !0,
                                    onClick: F.closeCollectiblesShopProductDetailsModal,
                                    onSubscribeModalClose: () => {
                                        (0, F.openCollectiblesShopProductDetailsModal)({
                                            product: a,
                                            category: r,
                                            returnRef: m,
                                            analyticsLocations: C
                                        })
                                    }
                                })]
                            }), (0, t.jsx)(n.Text, {
                                color: "none",
                                className: Z.disclaimer,
                                variant: "text-xxs/normal",
                                children: null != _ ? null : v || g ? G ? Y.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : ea ? Y.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : Y.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER : ea ? Y.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECTS_NON_PREMIUM_PURCHASE_DISCLAIMER : Y.default.Messages.COLLECTIBLES_DETAILS_MODAL_NON_PREMIUM_PURCHASE_DISCLAIMER
                            })]
                        })]
                    })
                },
                ee = e => {
                    let {
                        product: a,
                        user: l,
                        category: n
                    } = e, o = O.default.canUsePremiumProfileCustomization(l), r = (0, i.useStateFromStoresObject)([x.default], () => x.default.getAllPending()), d = (0, v.default)(l.id), u = !!(null == d ? void 0 : d.getPreviewBio(r.pendingBio).value), c = s.useMemo(() => {
                        var e;
                        return null !== (e = a.items.find(b.isAvatarDecorationRecord)) && void 0 !== e ? e : null
                    }, [a]), f = s.useMemo(() => a.items.find(D.isProfileEffectRecord), [a]);
                    return (0, t.jsxs)("div", {
                        className: null != c ? Z.previewsContainerInner : Z.profileEffectPreviewsContainerInner,
                        children: [(0, t.jsx)(g.default, {
                            ...r,
                            user: l,
                            canUsePremiumCustomization: o,
                            onAvatarChange: K.NOOP,
                            onBannerChange: K.NOOP,
                            bodyClassName: Z.profileCustomizationBody,
                            pendingAvatarDecoration: c,
                            pendingProfileEffectID: null == f ? void 0 : f.id,
                            forProfileEffectModal: null != f,
                            disabledInputs: !0,
                            hideExampleButton: !0,
                            hideFakeActivity: null != c || u,
                            hideBioSection: null != c
                        }), null != c && (0, t.jsx)(el, {
                            user: l,
                            product: a,
                            category: n
                        })]
                    })
                },
                ea = e => {
                    let {
                        author: a,
                        product: l
                    } = e, t = (0, f.createMessageRecord)({
                        ...(0, m.default)({
                            author: a,
                            channelId: "1337",
                            content: Y.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
                        }),
                        state: G.MessageStates.SENT,
                        id: "0"
                    });
                    return t.author = new _.default({
                        ...t.author,
                        avatar_decoration_data: l.items.find(b.isAvatarDecorationRecord)
                    }), t
                },
                el = e => {
                    let {
                        product: a,
                        user: l
                    } = e, s = ea({
                        author: l,
                        product: a
                    });
                    return (0, t.jsx)(n.FocusBlock, {
                        children: (0, t.jsxs)(n.Card, {
                            className: Z.chatPreview,
                            outline: !0,
                            "aria-hidden": !0,
                            children: [(0, t.jsx)(h.default, {
                                className: Z.mockMessage,
                                author: (0, C.getMessageAuthor)(s),
                                message: s
                            }, s.id), (0, t.jsxs)("div", {
                                className: Z.mockInput,
                                children: [(0, t.jsx)(A.default, {
                                    className: Z.mockInputButton,
                                    width: 24,
                                    height: 24
                                }), (0, t.jsx)(N.default, {
                                    className: Z.mockInputButton,
                                    width: 24,
                                    height: 24
                                })]
                            })]
                        })
                    })
                };
            var et = e => {
                let {
                    transitionState: a,
                    onClose: l,
                    product: o,
                    category: u,
                    returnRef: c,
                    analyticsSource: f,
                    analyticsLocations: m
                } = e, C = (0, i.default)([M.default], () => M.default.getCurrentUser()), {
                    analyticsLocations: h,
                    AnalyticsLocationProvider: E
                } = (0, d.default)([...m, r.default.COLLECTIBLES_SHOP_DETAILS_MODAL]), I = s.useMemo(() => o.items.find(b.isAvatarDecorationRecord), [o]);
                return (s.useEffect(() => {
                    let e = null != I ? "avatar decoration" : "profile effect";
                    T.default.track(G.AnalyticEvents.OPEN_MODAL, {
                        type: G.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
                        source: f,
                        location_stack: h,
                        sku_id: o.skuId,
                        product_type: e
                    })
                }, [f, h, o.skuId, I]), null == C) ? null : (0, t.jsx)(E, {
                    children: (0, t.jsx)(n.ModalRoot, {
                        hideShadow: !0,
                        className: Z.modalRoot,
                        returnRef: c,
                        transitionState: a,
                        size: n.ModalSize.DYNAMIC,
                        children: (0, t.jsxs)(n.ModalContent, {
                            className: Z.modalContent,
                            children: [(0, t.jsx)($, {
                                user: C,
                                product: o,
                                category: u,
                                onClose: l
                            }), (0, t.jsxs)("div", {
                                className: null != I ? Z.collectiblePreviewsContainerWithChat : Z.collectiblePreviewsContainerNoChat,
                                children: [(0, t.jsx)(U.default, {
                                    asset: u.banner,
                                    size: 540,
                                    className: Z.categoryBanner
                                }), (0, t.jsx)(ee, {
                                    user: C,
                                    product: o,
                                    category: u
                                })]
                            }), (0, t.jsx)(n.ModalCloseButton, {
                                onClick: l,
                                className: Z.modalCloseButton,
                                withCircleBackground: !0
                            })]
                        })
                    })
                })
            }
        },
        608684: function(e, a, l) {
            "use strict";
            l.r(a), l.d(a, {
                ImageUploaderIcon: function() {
                    return h
                },
                default: function() {
                    return I
                }
            });
            var t = l("37983"),
                s = l("884691"),
                i = l("414456"),
                n = l.n(i),
                o = l("627445"),
                r = l.n(o),
                d = l("77078"),
                u = l("159885"),
                c = l("694187"),
                f = l("49111"),
                m = l("782340"),
                C = l("911686");

            function h(e) {
                let {
                    className: a,
                    icon: l = null
                } = e;
                return (0, t.jsx)("div", {
                    className: n(C.imageUploaderIcon, a),
                    children: l
                })
            }
            class E extends s.PureComponent {
                handleExternalFileChange(e) {
                    r(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let a, l, s, i;
                    let {
                        image: o,
                        hint: r,
                        name: E,
                        makeURL: I,
                        disabled: L,
                        onChange: g,
                        showIcon: p,
                        showIconDisabled: S,
                        className: v,
                        imageClassName: _,
                        iconClassName: x,
                        iconWrapperClassName: M,
                        icon: N,
                        hideSize: A,
                        imageStyle: T,
                        showRemoveButton: O,
                        maxFileSizeBytes: R,
                        onFileSizeError: j,
                        onOpenImageSelectModal: k,
                        "aria-label": P
                    } = this.props;
                    if (null != (a = null != o && /^data:/.test(o) ? o : I(o)) ? l = 'url("'.concat(a, '")') : null != E && (s = (0, t.jsx)("div", {
                            className: C.imageUploaderAcronym,
                            children: (0, u.getAcronym)(E)
                        })), L) return (0, t.jsx)("div", {
                        className: n(C.imageUploader, C.disabled, v),
                        children: (0, t.jsxs)("div", {
                            className: n(C.imageUploaderInner, _),
                            style: {
                                ...T,
                                backgroundImage: l
                            },
                            children: [s, S && (0, t.jsx)("div", {
                                className: n(C.imageUploaderIcon, C.imageUploaderIconDisabled, x),
                                children: N
                            })]
                        })
                    });
                    null != o ? i = (0, t.jsx)(d.Anchor, {
                        className: C.removeButton,
                        onClick: this.handleRemove,
                        children: m.default.Messages.REMOVE
                    }) : !A && (i = (0, t.jsx)("small", {
                        className: C.sizeInfo,
                        children: m.default.Messages.MINIMUM_SIZE.format({
                            size: f.AVATAR_SIZE
                        })
                    }));
                    let b = null !== (e = null != P ? P : r) && void 0 !== e ? e : m.default.Messages.CHANGE_AVATAR;
                    return (0, t.jsxs)("div", {
                        className: n(C.imageUploader, v),
                        children: [(0, t.jsx)(d.FocusRing, {
                            within: !0,
                            children: (0, t.jsxs)("div", {
                                className: p ? n(C.imageUploaderIconWrapper, M) : void 0,
                                children: [(0, t.jsxs)("div", {
                                    className: n(C.imageUploaderInner, _),
                                    style: {
                                        ...T,
                                        backgroundImage: l
                                    },
                                    children: [(0, t.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: s
                                    }), null != k ? (0, t.jsx)(d.Clickable, {
                                        className: C.imageUploaderFileInput,
                                        "aria-label": b,
                                        onClick: k
                                    }) : (0, t.jsx)(c.default, {
                                        ref: this.inputRef,
                                        onChange: g,
                                        className: C.imageUploaderFileInput,
                                        "aria-label": b,
                                        tabIndex: 0,
                                        maxFileSizeBytes: R,
                                        onFileSizeError: j
                                    })]
                                }), null != r && (0, t.jsx)("div", {
                                    className: C.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: r
                                }), p && (0, t.jsx)(h, {
                                    className: x,
                                    icon: N
                                })]
                            })
                        }), O ? i : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = s.createRef(), this.handleRemove = () => {
                        this.props.onChange(null)
                    }
                }
            }
            E.defaultProps = {
                name: "",
                makeURL: e => e,
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            var I = E
        },
        291655: function(e, a, l) {
            "use strict";
            l.r(a), l.d(a, {
                default: function() {
                    return m
                }
            });
            var t = l("37983"),
                s = l("884691"),
                i = l("414456"),
                n = l.n(i),
                o = l("193865"),
                r = l("780571"),
                d = l("39331"),
                u = l("596368"),
                c = l("227439"),
                f = l("877671"),
                m = s.memo(function(e) {
                    var a, l, s;
                    let {
                        message: i,
                        channel: m,
                        compact: C,
                        className: h,
                        isGroupStart: E,
                        hideSimpleEmbedContent: I = !0,
                        disableInteraction: L
                    } = e, g = (0, o.useShowImprovedMarkdownUserExperimentConfig)((null !== (a = i.editedTimestamp) && void 0 !== a ? a : i.timestamp).valueOf()), p = (0, o.useShowImprovedMarkdownGuildExperimentConfig)(null !== (l = null == m ? void 0 : m.guild_id) && void 0 !== l ? l : "", (null !== (s = i.editedTimestamp) && void 0 !== s ? s : i.timestamp).valueOf()), {
                        content: S
                    } = (0, d.default)(i, {
                        hideSimpleEmbedContent: I,
                        allowList: g.showListsAndHeaders || p.showListsAndHeaders,
                        allowHeading: g.showListsAndHeaders || p.showListsAndHeaders,
                        allowLinks: g.showMaskedLinks || p.showMaskedLinks,
                        previewLinkTarget: g.showMaskedLinks || p.showMaskedLinks
                    });
                    return (0, t.jsx)(r.default, {
                        compact: C,
                        className: n(h, {
                            [f.message]: !0,
                            [f.cozyMessage]: !C,
                            [f.groupStart]: E
                        }),
                        childrenHeader: (0, c.default)({
                            ...e,
                            channel: m,
                            guildId: void 0
                        }),
                        childrenMessageContent: (0, u.default)(e, S),
                        disableInteraction: L
                    })
                })
        }
    }
]);