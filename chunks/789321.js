            "use strict";
            l.r(t), l.d(t, {
                DEFAULT_COLLECTIBLES_UPSELL_HEIGHT: function() {
                    return x
                },
                default: function() {
                    return P
                }
            }), l("222007"), l("794252");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("506838"),
                o = l("65597"),
                u = l("77078"),
                d = l("731898"),
                c = l("206230"),
                f = l("812204"),
                m = l("685665"),
                p = l("606292"),
                E = l("688318"),
                T = l("21526"),
                h = l("853987"),
                _ = l("491232"),
                S = l("845962"),
                I = l("697218"),
                g = l("945330"),
                A = l("719923"),
                v = l("627601"),
                C = l("994428"),
                N = l("782340"),
                y = l("304118"),
                M = l("604689");

            function O(e) {
                let {
                    onClick: t
                } = e;
                return (0, n.jsx)(u.Clickable, {
                    className: y.closeButton,
                    onClick: t,
                    "aria-label": N.default.Messages.DISMISS,
                    children: (0, n.jsx)(g.default, {
                        className: y.closeIcon,
                        width: 18,
                        height: 18
                    })
                })
            }
            let x = 76,
                R = e => (0, n.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    tag: "span",
                    className: y.ctaLink,
                    children: e
                }),
                L = e => {
                    let {
                        user: t,
                        onClick: l
                    } = e, {
                        avatarDecorationSrc: a
                    } = (0, E.default)({
                        user: t,
                        size: (0, p.getDecorationSizeForAvatarSize)(u.AvatarSizes.SIZE_48)
                    });
                    return (0, n.jsx)(u.Clickable, {
                        className: y.avatarButton,
                        onClick: l,
                        "aria-label": N.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                        children: (0, n.jsx)(u.Avatar, {
                            src: M,
                            avatarDecoration: a,
                            size: u.AvatarSizes.SIZE_48,
                            "aria-hidden": !0
                        })
                    })
                };
            var P = e => {
                var t;
                let {
                    user: l,
                    displayProfile: s,
                    onClose: p,
                    onDismiss: E,
                    isInSidebar: g = !1,
                    canShowAvatarDecorationUpsell: M = !1,
                    canShowProfileEffectUpsell: P = !1,
                    upsellSource: b
                } = e, {
                    analyticsLocations: D
                } = (0, m.default)(f.default.COLLECTIBLES_USER_POPOUT_UPSELL), U = (0, o.default)([c.default], () => c.default.useReducedMotion), {
                    ref: j,
                    height: F
                } = (0, d.default)(), w = a.useMemo(() => ({
                    top: "-".concat((null != F ? F : x) + 6, "px")
                }), [F]), G = (0, o.default)([I.default], () => I.default.getCurrentUser()), k = A.default.canUseCollectibles(G), {
                    setUpsellSource: B,
                    reset: Y
                } = (0, v.useUserPopoutCollectiblesUpsellStore)();
                a.useEffect(() => (B(b), () => {
                    Y()
                }), [B, b, Y]);
                let V = (0, o.default)([S.default], () => S.default.getProfileEffectById(null == s ? void 0 : s.profileEffectId)),
                    [H, W] = (0, o.useStateFromStoresArray)([h.default], () => {
                        var e;
                        return [(0, _.isPremiumCollectiblesProduct)(h.default.getProduct(null === (e = l.avatarDecoration) || void 0 === e ? void 0 : e.skuId)), (0, _.isPremiumCollectiblesProduct)(h.default.getProduct(null == V ? void 0 : V.skuId))]
                    }),
                    z = a.useCallback(() => {
                        var e, t, n, a;
                        null == E || E(C.ContentDismissActionType.PRIMARY), null == p || p(), (0, T.openCollectiblesShop)({
                            analyticsLocations: D,
                            analyticsSource: f.default.COLLECTIBLES_USER_POPOUT_UPSELL,
                            initialProductSkuId: H ? null !== (n = null == V ? void 0 : V.skuId) && void 0 !== n ? n : null === (e = l.avatarDecoration) || void 0 === e ? void 0 : e.skuId : null !== (a = null === (t = l.avatarDecoration) || void 0 === t ? void 0 : t.skuId) && void 0 !== a ? a : null == V ? void 0 : V.skuId
                        })
                    }, [E, p, D, null == V ? void 0 : V.skuId, null === (t = l.avatarDecoration) || void 0 === t ? void 0 : t.skuId, H]),
                    K = a.useCallback(() => {
                        null == E || E(C.ContentDismissActionType.DISMISS)
                    }, [E]);
                if (!M && !P) return null;
                let Z = (0, r.match)([M, P]).with([!0, !0], () => H && W && k ? N.default.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NITRO.format({
                    openShop: R
                }) : H && W ? N.default.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NON_NITRO.format({
                    openShop: R
                }) : N.default.Messages.COMBINED_COLLECTIBLES_SOCIAL_UPSELL.format({
                    openShop: R
                })).with([!0, !1], () => H && k ? N.default.Messages.STARTER_AVATAR_DECORATIONS_SOCIAL_UPSELL_NITRO.format({
                    openShop: R
                }) : N.default.Messages.AVATAR_DECORATIONS_SOCIAL_UPSELL.format({
                    openShop: R
                })).with([!1, !0], () => W && k ? N.default.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NITRO.format({
                    openShop: R
                }) : (W && N.default.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NON_NITRO.format({
                    openShop: R
                }), N.default.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL.format({
                    openShop: R
                }))).otherwise(() => null);
                return (0, n.jsx)("div", {
                    style: w,
                    className: i(y.containerWrapper, {
                        [y.animation]: !U,
                        [y.inSidebar]: g
                    }),
                    ref: j,
                    children: (0, n.jsxs)("div", {
                        className: y.container,
                        children: [M && (0, n.jsx)(L, {
                            user: l,
                            onClick: z
                        }), (0, n.jsx)(u.Clickable, {
                            className: M ? y.contentWithAvatar : y.content,
                            onClick: z,
                            "aria-label": N.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
                            children: (0, n.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "text-normal",
                                tag: "span",
                                children: Z
                            })
                        }), (0, n.jsx)("div", {
                            className: y.buttons,
                            children: (0, n.jsx)(O, {
                                onClick: K
                            })
                        })]
                    })
                })
            }