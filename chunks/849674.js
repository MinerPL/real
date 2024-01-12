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
                let _ = (0, c.default)(T),
                    {
                        upsellSource: S
                    } = (0, E.useUserPopoutCollectiblesUpsellStore)(),
                    h = (0, i.default)([m.default], () => m.default.getCurrentUser());
                s(null != h, "currentUser should not be null");
                let I = (0, d.useBlockedPaymentsConfig)(),
                    A = (0, p.default)(h.id, a),
                    g = (0, p.default)(t.id, a);
                n.useEffect(() => {
                    null == A && (0, o.fetchProfile)(h.id)
                }, [A, h]);
                let v = _ !== c.CollectiblesShopMarketingVariants.DEFAULT && (null == h ? void 0 : h.id) !== t.id && !I && !(null != S && S !== l),
                    C = v && (null == h ? void 0 : h.avatarDecoration) == null && (null == t ? void 0 : t.avatarDecoration) != null,
                    N = v && null != A && null == A.profileEffectId && (null == g ? void 0 : g.profileEffectId) != null,
                    [y, O] = (0, f.useSelectedDismissibleContent)(C || N ? [r.DismissibleContent.SHOP_FOR_ALL_USER_POPOUT_UPSELL] : [], void 0, !0);
                return {
                    shouldShow: y === r.DismissibleContent.SHOP_FOR_ALL_USER_POPOUT_UPSELL,
                    canShowAvatarDecorationUpsell: C,
                    canShowProfileEffectUpsell: N,
                    onDismiss: O
                }
            }