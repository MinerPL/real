(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["4560"], {
        42211: function(e, t, s) {
            "use strict";
            e.exports = s.p + "dd4a336fd444ced6dd81.jpg"
        },
        6966: function(e, t, s) {
            "use strict";
            e.exports = s.p + "4afee995f6783932a280.jpg"
        },
        513002: function(e, t, s) {
            "use strict";
            e.exports = s.p + "f328a6f8209d4f1f5022.png"
        },
        235898: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useMaybeFetchCollectiblesCategories: function() {
                    return c
                },
                default: function() {
                    return u
                }
            }), s("222007");
            var a = s("884691"),
                i = s("65597"),
                r = s("875212"),
                l = s("21526"),
                o = s("853987"),
                n = s("775416");

            function c() {
                let e = "useMaybeFetchCollectiblesCategories";
                (0, r.useTriggerDebuggingAA)({
                    location: e + " auto on",
                    autoTrackExposure: !0
                }), (0, r.useTriggerDebuggingAA)({
                    location: e + " auto off",
                    autoTrackExposure: !1
                });
                let [t, s, n, c] = (0, i.useStateFromStoresArray)([o.default], () => {
                    var e;
                    return [o.default.isFetching, o.default.error, null !== (e = o.default.lastFetched) && void 0 !== e ? e : 0, o.default.categories]
                });
                return (0, a.useEffect)(() => {
                    !(t || s || Date.now() - n < 6e5) && (0, l.fetchCollectiblesCategories)()
                }, [t, n, s]), {
                    isFetching: t,
                    categories: c,
                    error: s
                }
            }

            function u() {
                var e;
                let t = "useFetchCollectiblesCategoriesAndPurchases";
                (0, r.useTriggerDebuggingAA)({
                    location: t + " auto on",
                    autoTrackExposure: !0
                }), (0, r.useTriggerDebuggingAA)({
                    location: t + " auto off",
                    autoTrackExposure: !1
                });
                let {
                    isFetching: s,
                    categories: o,
                    error: u
                } = c(), {
                    isClaiming: d,
                    fetchError: f,
                    claimError: m,
                    isFetching: g,
                    purchases: h
                } = function() {
                    let e = "useFetchPurchases";
                    (0, r.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, r.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    });
                    let [t, s, o, c, u] = (0, i.useStateFromStoresArray)([n.default], () => [n.default.isFetching, n.default.isClaiming, n.default.fetchError, n.default.claimError, n.default.purchases]);
                    return (0, a.useEffect)(() => {
                        (0, l.fetchCollectiblesPurchases)()
                    }, []), {
                        isClaiming: s,
                        fetchError: o,
                        claimError: c,
                        isFetching: t,
                        purchases: u
                    }
                }(), C = null !== (e = null != u ? u : f) && void 0 !== e ? e : m;
                return {
                    isFetching: s || g,
                    isFetchingCategories: s,
                    isFetchingPurchases: g,
                    isClaiming: d,
                    categories: o,
                    purchases: h,
                    error: C
                }
            }
        },
        806224: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                CollectiblesItemsList: function() {
                    return p
                }
            }), s("794252");
            var a = s("37983"),
                i = s("884691"),
                r = s("414456"),
                l = s.n(r),
                o = s("506838"),
                n = s("265586"),
                c = s("446674"),
                u = s("77078"),
                d = s("252744"),
                f = s("606292"),
                m = s("688318"),
                g = s("845962"),
                h = s("859498"),
                C = s("635471"),
                E = s("697218"),
                S = s("312595"),
                I = s("513002");
            let x = e => {
                    let {
                        item: t,
                        avatarSize: s
                    } = e, i = (0, c.useStateFromStores)([E.default], () => E.default.getCurrentUser()), {
                        avatarDecorationSrc: r,
                        eventHandlers: l
                    } = (0, m.default)({
                        user: i,
                        avatarDecorationOverride: t,
                        size: (0, f.getDecorationSizeForAvatarSize)(s),
                        animateOnHover: !0
                    });
                    return (0, a.jsx)("img", {
                        ...l,
                        className: S.avatarDecoration,
                        src: r,
                        alt: t.label
                    })
                },
                A = e => {
                    var t;
                    let {
                        item: s
                    } = e, r = (0, c.useStateFromStores)([g.default], () => g.default.getProfileEffectById(s.id)), {
                        accessibilityLabel: l,
                        id: o
                    } = null !== (t = null == r ? void 0 : r.config) && void 0 !== t ? t : {}, n = i.useRef(null), u = (0, d.default)(n);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("img", {
                            ref: n,
                            src: I,
                            alt: l,
                            className: S.presetEffectBackground
                        }), (0, a.jsx)(C.default, {
                            profileEffectID: o,
                            useThumbnail: !0,
                            autoPlay: u,
                            restartMethod: h.RestartMethod.FromStart,
                            resetOnHover: !0,
                            isHovering: !1,
                            introDelay: .1,
                            useOpacityOnHover: !1,
                            noBorderRadius: !0
                        })]
                    })
                };

            function v(e) {
                let {
                    listRef: t,
                    items: s,
                    selectedItem: i,
                    setSelectedItem: r,
                    isAccountSwitcher: c,
                    avatarSize: d
                } = e, f = e => {
                    let {
                        item: t,
                        children: s,
                        className: o
                    } = e, n = t.skuId === (null == i ? void 0 : i.skuId);
                    return (0, a.jsx)(u.FocusRing, {
                        children: (0, a.jsx)(u.Clickable, {
                            className: l({
                                [S.selectedItem]: n
                            }, c ? S.accountSwitcherItem : S.interactiveModalItem, o),
                            onClick: () => r(t),
                            children: s
                        })
                    })
                };
                return (0, a.jsx)("div", {
                    ref: t,
                    className: c ? S.accountSwitcherCollectiblesList : S.interactiveModalCollectiblesList,
                    children: s.map(e => (0, o.match)(e).with({
                        type: n.CollectiblesItemType.AVATAR_DECORATION
                    }, e => (0, a.jsx)(f, {
                        item: e,
                        className: S.avatarDecorationItem,
                        children: (0, a.jsx)(x, {
                            item: e,
                            avatarSize: d
                        }, e.id)
                    })).with({
                        type: n.CollectiblesItemType.PROFILE_EFFECT
                    }, e => (0, a.jsx)(f, {
                        item: e,
                        children: (0, a.jsx)(A, {
                            item: e
                        }, e.id)
                    })).otherwise(() => null))
                })
            }
            let p = e => {
                let {
                    items: t,
                    isFetching: s,
                    selectedItem: r,
                    setSelectedItem: l,
                    containerClassName: o,
                    isAccountSwitcher: n
                } = e, c = i.useRef(null);
                if (s) return (0, a.jsx)(u.Spinner, {
                    className: S.loading
                });
                let d = (e, s) => (0, a.jsx)(v, {
                    listRef: c,
                    items: t,
                    selectedItem: r,
                    setSelectedItem: l,
                    isAccountSwitcher: s,
                    avatarSize: e
                });
                return (0, a.jsx)(u.FocusRingScope, {
                    containerRef: c,
                    children: n ? (0, a.jsx)(u.AdvancedScroller, {
                        className: o,
                        children: d(u.AvatarSizes.SIZE_56, !0)
                    }) : (0, a.jsx)("div", {
                        className: o,
                        children: d(u.AvatarSizes.SIZE_48)
                    })
                })
            }
        },
        542430: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return b
                }
            }), s("222007");
            var a = s("37983"),
                i = s("884691"),
                r = s("446674"),
                l = s("77078"),
                o = s("812204"),
                n = s("685665"),
                c = s("184900"),
                u = s("697218"),
                d = s("476765"),
                f = s("719923"),
                m = s("21526"),
                g = s("491232"),
                h = s("235898"),
                C = s("730297"),
                E = s("806410"),
                S = s("806224"),
                I = s("994428"),
                x = s("782340"),
                A = s("95194");

            function v(e) {
                let {
                    onClose: t,
                    markAsDismissed: s
                } = e, i = (0, d.useUID)();
                return (0, a.jsxs)(l.ModalHeader, {
                    separator: !1,
                    className: A.header,
                    children: [(0, a.jsx)(l.Heading, {
                        id: i,
                        variant: "heading-xl/extrabold",
                        className: A.headerTitle,
                        children: x.default.Messages.COLLECTIBLES_INTERACTIVE_MODAL_HEADER
                    }), (0, a.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        className: A.headerSubtitle,
                        children: x.default.Messages.COLLECTIBLES_INTERACTIVE_MODAL_SUBHEADER
                    }), (0, a.jsx)(l.ModalCloseButton, {
                        className: A.closeButton,
                        onClick: () => {
                            var e, a;
                            return e = s, a = t, void(e(I.ContentDismissActionType.USER_DISMISS), null == a || a())
                        }
                    })]
                })
            }

            function p(e) {
                let {
                    selectedItem: t,
                    setSelectedItem: s
                } = e, o = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()), {
                    categories: n,
                    isFetching: d
                } = (0, h.useMaybeFetchCollectiblesCategories)(), m = f.default.canUsePremiumProfileCustomization(o), I = i.useMemo(() => (0, g.sortAvatarDecorationsByPopularity)((0, g.getAvatarDecorationsFromCategories)(n)).slice(0, 12), [n]), v = i.useMemo(() => (0, g.sortProfileEffectsByPopularity)((0, g.getProfileEffectsFromCategories)(n)).slice(0, 12), [n]);
                return (i.useEffect(() => {
                    0 !== I.length && s(I[0])
                }, [I, s]), null == o) ? null : (0, a.jsxs)(l.ModalContent, {
                    className: A.modalContent,
                    children: [(0, a.jsxs)("div", {
                        children: [(0, a.jsx)(l.FormTitle, {
                            className: A.title,
                            children: x.default.Messages.USER_SETTINGS_AVATAR_DECORATION
                        }), (0, a.jsx)(S.CollectiblesItemsList, {
                            items: I,
                            isFetching: d,
                            selectedItem: t,
                            setSelectedItem: s,
                            containerClassName: A.listContainer,
                            isAccountSwitcher: !1
                        })]
                    }), (0, a.jsx)(c.default, {
                        user: o,
                        disabledInputs: !0,
                        forProfileEffectModal: !0,
                        canUsePremiumCustomization: m,
                        pendingAvatarDecoration: (0, C.isAvatarDecorationRecord)(t) ? t : null,
                        pendingProfileEffectID: (0, E.isProfileEffectRecord)(t) ? t.id : null,
                        hideFakeActivity: !0,
                        hideExampleButton: !0,
                        hideMemberStatusSection: !1,
                        bodyClassName: A.previewBody,
                        onAvatarChange: () => {},
                        onBannerChange: () => {},
                        pendingBio: void 0,
                        pendingPronouns: void 0,
                        pendingAvatar: void 0,
                        pendingBanner: void 0,
                        slideInAvatarDecoration: !0
                    }), (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(l.FormTitle, {
                            className: A.title,
                            children: x.default.Messages.USER_SETTINGS_PROFILE_EFFECT
                        }), (0, a.jsx)(S.CollectiblesItemsList, {
                            items: v,
                            isFetching: d,
                            selectedItem: t,
                            setSelectedItem: s,
                            containerClassName: A.listContainer,
                            isAccountSwitcher: !1
                        })]
                    })]
                })
            }

            function T(e) {
                let {
                    onClose: t,
                    selectedItem: s
                } = e, {
                    analyticsLocations: i
                } = (0, n.default)(o.default.COLLECTIBLES_INTERACTIVE_MODAL_POPUP_UPSELL);
                return (0, a.jsx)(l.ModalFooter, {
                    children: (0, a.jsx)(l.Button, {
                        size: l.Button.Sizes.MEDIUM,
                        className: A.checkItOutButton,
                        type: "button",
                        color: l.Button.Colors.BRAND,
                        onClick: () => {
                            (0, m.openCollectiblesShop)({
                                analyticsLocations: i,
                                analyticsSource: o.default.COLLECTIBLES_INTERACTIVE_MODAL_POPUP_UPSELL,
                                initialProductSkuId: null != s ? s.skuId : void 0
                            }), null == t || t()
                        },
                        children: (0, a.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            className: A.checkItOutButtonText,
                            children: x.default.Messages.CHECK_IT_OUT
                        })
                    })
                })
            }

            function b(e) {
                let {
                    transitionState: t,
                    onClose: s,
                    markAsDismissed: r
                } = e, [o, n] = i.useState();
                return (0, a.jsxs)(l.ModalRoot, {
                    transitionState: t,
                    size: l.ModalSize.DYNAMIC,
                    className: A.modal,
                    children: [(0, a.jsx)(v, {
                        onClose: s,
                        markAsDismissed: r
                    }), (0, a.jsx)(p, {
                        selectedItem: o,
                        setSelectedItem: n
                    }), (0, a.jsx)(T, {
                        onClose: s,
                        selectedItem: o
                    })]
                })
            }
        }
    }
]);