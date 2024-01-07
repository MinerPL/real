            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return A
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("65597"),
                o = s("77078"),
                d = s("685665"),
                u = s("662286"),
                c = s("493390"),
                S = s("217513"),
                E = s("790618"),
                f = s("181114"),
                m = s("599110"),
                T = s("719923"),
                _ = s("906932"),
                g = s("570697"),
                h = s("632892"),
                I = s("49111"),
                N = s("646718"),
                p = s("782340"),
                C = s("273072");

            function A(e) {
                let {
                    user: t,
                    guild: s,
                    className: l,
                    forcedDivider: A = !1,
                    withTutorial: O = !1,
                    showBorder: x = !1,
                    isTryItOutFlow: M = !1,
                    initialSelectedEffectId: R
                } = e, v = (0, S.default)(t.id, null == s ? void 0 : s.id), L = T.default.canUsePremiumProfileCustomization(t), {
                    analyticsLocations: D
                } = (0, d.default)(), P = (0, u.useCanUseProfileEffects)({
                    location: "ProfileEffectSection"
                }), {
                    pendingProfileEffectId: j,
                    errors: b
                } = (0, r.useStateFromStoresObject)([E.default], () => ({
                    pendingProfileEffectId: E.default.getPendingProfileEffectId(),
                    errors: E.default.getErrors().profileEffect
                })), U = n.useCallback(() => (0, c.openProfileEffectModal)({
                    analyticsLocations: D,
                    initialSelectedEffectId: R
                }), [D, R]);
                if (n.useEffect(() => {
                        L && P && m.default.track(I.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: N.PremiumUpsellTypes.PROFILE_EFFECTS_INLINE_SETTINGS,
                            location_stack: D
                        })
                    }, [P, L, D]), !P) return null;
                let y = M || void 0 !== j ? null != j : (null == v ? void 0 : v.profileEffectId) != null,
                    B = O ? f.default : o.Button;
                return (0, a.jsx)(g.default, {
                    forcedDivider: A,
                    borderType: h.FeatureBorderTypes.PREMIUM,
                    hasBackground: !0,
                    title: p.default.Messages.USER_SETTINGS_PROFILE_EFFECT,
                    showBorder: x,
                    errors: b,
                    className: l,
                    children: (0, a.jsxs)("div", {
                        className: C.buttonsContainer,
                        children: [(0, a.jsx)(B, {
                            size: o.Button.Sizes.SMALL,
                            onClick: U,
                            className: i({
                                [C.buttonHighlighted]: O
                            }),
                            children: p.default.Messages.USER_SETTINGS_CHANGE_PROFILE_EFFECT
                        }), y && (0, a.jsx)(o.Button, {
                            className: C.removeButton,
                            color: o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.LINK,
                            size: o.Button.Sizes.SMALL,
                            onClick: function() {
                                (0, _.setNewPendingProfileEffectId)(null, null == v ? void 0 : v.profileEffectId)
                            },
                            children: p.default.Messages.USER_SETTINGS_REMOVE_PROFILE_EFFECT
                        })]
                    })
                })
            }