            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("446674"),
                r = n("77078"),
                s = n("152584"),
                a = n("853987"),
                o = n("491232"),
                c = n("884351"),
                u = n("184900"),
                d = n("783142"),
                f = n("217513"),
                h = n("915639"),
                C = n("845579"),
                E = n("415167"),
                p = n("790618"),
                v = n("697218");
            n("550515");
            var I = n("719923"),
                g = n("782340"),
                _ = n("146252");
            let m = e => {
                    var t;
                    let {
                        effectIsOwned: n,
                        pendingProfileEffectRecord: s,
                        product: c,
                        purchase: u
                    } = e, d = (0, i.useStateFromStores)([v.default], () => v.default.getCurrentUser()), f = (0, i.useStateFromStores)([a.default], () => a.default.getProduct(null == s ? void 0 : s.skuId)), C = (0, i.useStateFromStores)([h.default], () => h.default.locale), E = I.default.canUseCollectibles(d), p = (0, o.isPremiumCollectiblesPurchase)(u), m = (0, o.isPremiumCollectiblesProduct)(c), N = L(!E && p, m, E);
                    return null != s ? (0, l.jsx)("div", {
                        className: n ? _.effectDescriptionNoGradient : _.effectDescriptionBorderWithGradient,
                        children: (0, l.jsxs)("div", {
                            className: _.effectDescriptionContainer,
                            children: [(0, l.jsx)(r.Text, {
                                color: "header-primary",
                                variant: "text-sm/semibold",
                                className: _.effectName,
                                children: null !== (t = null == u ? void 0 : u.name) && void 0 !== t ? t : null == f ? void 0 : f.name
                            }), (0, l.jsx)(r.Text, {
                                color: "text-normal",
                                variant: "text-sm/normal",
                                className: _.effectDescription,
                                children: null != u ? u.summary : N
                            }), null != u && (0, l.jsxs)(r.Text, {
                                variant: "text-xxs/normal",
                                color: "text-muted",
                                className: _.effectPurchasedAt,
                                children: [g.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                    date: u.purchasedAt.toLocaleDateString(C, {
                                        month: "long",
                                        year: "numeric"
                                    })
                                }), p && (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)("br", {}), g.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
                                })]
                            })]
                        })
                    }) : null
                },
                L = (e, t, n) => e ? g.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED : t && n ? g.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM : t && !n ? g.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER : g.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM;
            var N = e => {
                var t;
                let {
                    user: n,
                    pendingProfileEffectRecord: r,
                    canApplySelectedChange: a,
                    product: o,
                    purchase: h
                } = e, {
                    pendingAvatar: v,
                    pendingBanner: g,
                    pendingBio: L,
                    pendingPronouns: N,
                    pendingGlobalName: S,
                    pendingAccentColor: A,
                    pendingAvatarDecoration: T,
                    pendingThemeColors: x
                } = (0, i.useStateFromStoresObject)([p.default], () => {
                    let e = p.default.getAllPending(),
                        t = p.default.getErrors();
                    return {
                        ...e,
                        errors: t
                    }
                }), P = I.default.isPremium(n), O = (0, f.default)(n.id), R = !!(null == O ? void 0 : O.getPreviewBio(L).value), M = C.UseLegacyChatInput.useSetting(), F = M && null != L ? c.default.parse(void 0, L).content : L, w = I.default.canUsePremiumProfileCustomization(n), H = (null == O ? void 0 : O.canUsePremiumProfileCustomization) || w, j = {
                    user: n,
                    canUsePremiumCustomization: w,
                    onUpsellClick: E.default,
                    onAvatarChange: s.setPendingAvatar,
                    onBannerChange: d.setPendingBanner,
                    pendingBanner: g,
                    pendingBio: F,
                    pendingPronouns: N,
                    pendingAvatar: v,
                    pendingGlobalName: S,
                    pendingAvatarDecoration: T,
                    pendingThemeColors: x,
                    pendingAccentColor: A,
                    pendingProfileEffectId: null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : null,
                    hideFakeActivity: R,
                    useLargeBanner: !0
                };
                return (0, l.jsxs)("div", {
                    className: H ? _.previewContainerWithTheme : _.previewContainerWithoutTheme,
                    children: [(0, l.jsx)(u.default, {
                        ...j,
                        disabledInputs: !0,
                        forProfileEffectModal: !0
                    }), !1, (0, l.jsx)(m, {
                        effectIsOwned: a,
                        pendingProfileEffectRecord: r,
                        product: o,
                        purchase: h,
                        userIsPremium: P
                    })]
                })
            }