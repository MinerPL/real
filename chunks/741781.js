            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return C
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("65597"),
                o = s("77078"),
                d = s("685665"),
                u = s("493390"),
                c = s("217513"),
                S = s("790618"),
                E = s("181114"),
                f = s("599110"),
                m = s("719923"),
                T = s("906932"),
                _ = s("570697"),
                g = s("632892"),
                h = s("49111"),
                I = s("646718"),
                N = s("782340"),
                p = s("273072");

            function C(e) {
                let {
                    user: t,
                    guild: s,
                    className: l,
                    forcedDivider: C = !1,
                    withTutorial: A = !1,
                    showBorder: O = !1,
                    isTryItOutFlow: x = !1,
                    initialSelectedEffectId: M
                } = e, R = (0, c.default)(t.id, null == s ? void 0 : s.id), v = m.default.canUsePremiumProfileCustomization(t), {
                    analyticsLocations: L
                } = (0, d.default)(), {
                    pendingProfileEffectId: D,
                    errors: P
                } = (0, r.useStateFromStoresObject)([S.default], () => ({
                    pendingProfileEffectId: S.default.getPendingProfileEffectId(),
                    errors: S.default.getErrors().profileEffect
                })), j = n.useCallback(() => (0, u.openProfileEffectModal)({
                    analyticsLocations: L,
                    initialSelectedEffectId: M
                }), [L, M]);
                n.useEffect(() => {
                    v && f.default.track(h.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: I.PremiumUpsellTypes.PROFILE_EFFECTS_INLINE_SETTINGS,
                        location_stack: L
                    })
                }, [v, L]);
                let b = x || void 0 !== D ? null != D : (null == R ? void 0 : R.profileEffectId) != null,
                    U = A ? E.default : o.Button;
                return (0, a.jsx)(_.default, {
                    forcedDivider: C,
                    borderType: g.FeatureBorderTypes.PREMIUM,
                    hasBackground: !0,
                    title: N.default.Messages.USER_SETTINGS_PROFILE_EFFECT,
                    showBorder: O,
                    errors: P,
                    className: l,
                    children: (0, a.jsxs)("div", {
                        className: p.buttonsContainer,
                        children: [(0, a.jsx)(U, {
                            size: o.Button.Sizes.SMALL,
                            onClick: j,
                            className: i({
                                [p.buttonHighlighted]: A
                            }),
                            children: N.default.Messages.USER_SETTINGS_CHANGE_PROFILE_EFFECT
                        }), b && (0, a.jsx)(o.Button, {
                            className: p.removeButton,
                            color: o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.LINK,
                            size: o.Button.Sizes.SMALL,
                            onClick: function() {
                                (0, T.setNewPendingProfileEffectId)(null, null == R ? void 0 : R.profileEffectId)
                            },
                            children: N.default.Messages.USER_SETTINGS_REMOVE_PROFILE_EFFECT
                        })]
                    })
                })
            }