            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return M
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("627445"),
                i = s.n(l),
                r = s("446674"),
                o = s("913144"),
                d = s("327037"),
                u = s("152584"),
                c = s("642950"),
                S = s("875212"),
                E = s("812204"),
                f = s("685665"),
                T = s("104385"),
                m = s("884351"),
                _ = s("184900"),
                g = s("11899"),
                h = s("635415"),
                I = s("783142"),
                N = s("102985"),
                p = s("790618"),
                C = s("697218"),
                A = s("719923"),
                O = s("845579"),
                x = s("415167"),
                R = s("907148");

            function M() {
                let e = (0, r.useStateFromStores)([C.default], () => {
                    let e = C.default.getCurrentUser();
                    return i(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e
                });
                n.useEffect(() => {
                    (0, d.fetchProfile)(e.id)
                }, [e.id]);
                let t = (0, r.useStateFromStores)([N.default], () => N.default.hidePersonalInformation),
                    {
                        pendingAvatar: s,
                        pendingBanner: l,
                        pendingBio: M,
                        pendingPronouns: v,
                        pendingGlobalName: D,
                        pendingAccentColor: L,
                        pendingAvatarDecoration: P,
                        pendingThemeColors: j,
                        pendingProfileEffectId: b
                    } = (0, r.useStateFromStoresObject)([p.default], () => {
                        let e = p.default.getAllPending(),
                            t = p.default.getErrors();
                        return {
                            ...e,
                            errors: t
                        }
                    }),
                    U = O.UseLegacyChatInput.useSetting(),
                    B = U && null != M ? m.default.parse(void 0, M).content : M,
                    y = A.default.canUsePremiumProfileCustomization(e),
                    {
                        AnalyticsLocationProvider: F
                    } = (0, f.default)(E.default.PROFILE),
                    G = {
                        user: e,
                        canUsePremiumCustomization: y,
                        onUpsellClick: x.default,
                        onAvatarChange: u.setPendingAvatar,
                        onBannerChange: I.setPendingBanner,
                        pendingBanner: l,
                        pendingBio: B,
                        pendingPronouns: v,
                        pendingAvatar: s,
                        pendingGlobalName: D,
                        pendingAvatarDecoration: P,
                        pendingProfileEffectId: b
                    };
                n.useEffect(() => () => o.default.wait(u.resetAllPending), []);
                let k = "UserSettingsProfileCustomization";
                return ((0, S.useTriggerDebuggingAA)({
                    location: k + " auto on",
                    autoTrackExposure: !0
                }), (0, S.useTriggerDebuggingAA)({
                    location: k + " auto off",
                    autoTrackExposure: !1
                }), t) ? (0, a.jsx)(c.default, {}) : (0, a.jsx)(F, {
                    children: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(T.default, {}), (0, a.jsx)(g.default, {
                            profilePreview: (0, a.jsx)(_.default, {
                                ...G,
                                pendingThemeColors: j,
                                pendingAccentColor: L
                            }),
                            children: (0, a.jsx)(R.default, {})
                        }), !A.default.canUsePremiumProfileCustomization(e) && (0, a.jsx)(h.default, {
                            user: e
                        })]
                    })
                })
            }