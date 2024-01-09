            "use strict";
            l.r(t), l.d(t, {
                useShouldShowUserPopoutCollectiblesUpsell: function() {
                    return T
                }
            }), l("222007");
            var n = l("884691"),
                a = l("627445"),
                s = l.n(a),
                i = l("65597"),
                r = l("151426"),
                o = l("327037"),
                u = l("875212"),
                d = l("619935"),
                c = l("411691"),
                f = l("384997"),
                m = l("697218"),
                p = l("217513"),
                E = l("627601");
            let T = e => {
                let {
                    popoutUser: t,
                    source: l,
                    guildId: a
                } = e, T = "useShouldShowUserPopoutCollectiblesUpsell";
                (0, u.useTriggerDebuggingAA)({
                    location: T + "auto on",
                    autoTrackExposure: !0
                }), (0, u.useTriggerDebuggingAA)({
                    location: T + "auto off",
                    autoTrackExposure: !1
                });
                let h = (0, c.default)(T),
                    {
                        upsellSource: _
                    } = (0, E.useUserPopoutCollectiblesUpsellStore)(),
                    S = (0, i.default)([m.default], () => m.default.getCurrentUser());
                s(null != S, "currentUser should not be null");
                let I = (0, d.useBlockedPaymentsConfig)(),
                    g = (0, p.default)(S.id, a),
                    A = (0, p.default)(t.id, a);
                n.useEffect(() => {
                    null == g && (0, o.fetchProfile)(S.id)
                }, [g, S]);
                let v = h !== c.CollectiblesShopMarketingVariants.DEFAULT && (null == S ? void 0 : S.id) !== t.id && !I && !(null != _ && _ !== l),
                    C = v && (null == S ? void 0 : S.avatarDecoration) == null && (null == t ? void 0 : t.avatarDecoration) != null,
                    N = v && null != g && null == g.profileEffectId && (null == A ? void 0 : A.profileEffectId) != null,
                    [y, O] = (0, f.useSelectedDismissibleContent)(C || N ? [r.DismissibleContent.SHOP_FOR_ALL_USER_POPOUT_UPSELL] : [], void 0, !0);
                return {
                    shouldShow: y === r.DismissibleContent.SHOP_FOR_ALL_USER_POPOUT_UPSELL,
                    canShowAvatarDecorationUpsell: C,
                    canShowProfileEffectUpsell: N,
                    onDismiss: O
                }
            }