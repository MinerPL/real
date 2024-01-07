            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return D
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("627445"),
                l = s.n(n),
                i = s("446674"),
                r = s("152584"),
                o = s("875212"),
                d = s("956967"),
                u = s("906932"),
                c = s("702877"),
                S = s("668688"),
                E = s("447645"),
                f = s("569460"),
                m = s("97747"),
                T = s("52704"),
                _ = s("79685"),
                g = s("741781"),
                h = s("121370"),
                I = s("370505"),
                N = s("662286"),
                p = s("783142"),
                C = s("713135"),
                A = s("217513"),
                O = s("790618"),
                x = s("697218"),
                M = s("719923"),
                R = s("49111"),
                v = s("782340"),
                L = s("361904");

            function D() {
                var e, t, s, n, D, P, j, b;
                let U = (0, i.useStateFromStores)([x.default], () => {
                        let e = x.default.getCurrentUser();
                        return l(null != e, "DefaultCustomizationSections: user cannot be undefined"), e
                    }),
                    y = (0, i.useStateFromStores)([C.default], () => C.default.getUserProfile(U.id)),
                    {
                        pendingAvatar: B,
                        pendingGlobalName: F,
                        pendingBanner: G,
                        pendingBio: k,
                        pendingPronouns: w,
                        pendingAccentColor: H,
                        pendingThemeColors: V,
                        errors: Y
                    } = (0, i.useStateFromStoresObject)([O.default], () => {
                        let e = O.default.getAllPending(),
                            t = O.default.getErrors();
                        return {
                            ...e,
                            errors: t
                        }
                    }),
                    W = (0, d.useGuildAutomodProfileQuarantineErrors)(),
                    K = M.default.canUsePremiumProfileCustomization(U),
                    z = (0, u.showRemoveAvatar)(B, U.avatar),
                    Q = (0, u.showRemoveBanner)(G, null == y ? void 0 : y.banner),
                    q = "DefaultCustomizationSections";
                (0, o.useTriggerDebuggingAA)({
                    location: q + " auto on",
                    autoTrackExposure: !0
                }), (0, o.useTriggerDebuggingAA)({
                    location: q + " auto off",
                    autoTrackExposure: !1
                });
                let Z = (0, N.useCanUseProfileEffects)({
                        location: "DefaultCustomizationSections"
                    }),
                    X = (0, A.default)(U.id),
                    J = null == X ? void 0 : X.getLegacyUsername(),
                    $ = (null !== (s = null === (e = Y.global_name) || void 0 === e ? void 0 : e.length) && void 0 !== s ? s : 0) > 0 ? Y.global_name : null !== (n = null == W ? void 0 : W.nick) && void 0 !== n ? n : [],
                    ee = (null !== (D = null === (t = Y.bio) || void 0 === t ? void 0 : t.length) && void 0 !== D ? D : 0) > 0 ? Y.bio : null !== (P = null == W ? void 0 : W.bio) && void 0 !== P ? P : [];
                return (0, a.jsxs)("div", {
                    className: L.sectionsContainer,
                    children: [(0, a.jsx)(f.default, {
                        placeholder: U.username,
                        errors: $,
                        currentGlobalName: U.globalName,
                        pendingGlobalName: F,
                        onGlobalNameChange: r.setPendingGlobalNameName
                    }), (0, a.jsx)(I.default, {
                        sectionTitle: v.default.Messages.USER_SETTINGS_PRONOUNS,
                        errors: Y.pronouns,
                        onPronounsChange: p.setPendingPronouns,
                        pendingPronouns: w,
                        currentPronouns: null !== (j = null == y ? void 0 : y.pronouns) && void 0 !== j ? j : ""
                    }, "pronouns"), (0, a.jsx)(E.default, {
                        onAvatarChange: r.setPendingAvatar,
                        showRemoveAvatarButton: z,
                        errors: Y.avatar,
                        sectionTitle: v.default.Messages.USER_SETTINGS_AVATAR,
                        forcedDivider: !0
                    }, "avatar"), (0, a.jsx)(S.default, {
                        user: U
                    }, "decoration"), Z && (0, a.jsx)(g.default, {
                        user: U
                    }, "effect"), K ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(T.default, {
                            showRemoveBannerButton: Q,
                            errors: Y.banner,
                            onBannerChange: p.setPendingBanner,
                            forcedDivider: !0
                        }, "banner"), (0, a.jsx)(h.default, {
                            user: U,
                            pendingAvatar: B,
                            pendingColors: V,
                            onThemeColorsChange: p.setPendingThemeColors,
                            forcedDivider: !0
                        })]
                    }) : (0, a.jsx)(_.default, {
                        user: U,
                        savedUserColor: null == y ? void 0 : y.accentColor,
                        pendingColor: H,
                        setPendingAccentColor: p.setPendingAccentColor
                    }, "color"), (0, a.jsx)(c.default, {
                        sectionTitle: v.default.Messages.USER_SETTINGS_ABOUT_ME,
                        errors: ee,
                        onBioChange: e => {
                            (0, u.setNewPendingUserBio)(e, null == y ? void 0 : y.bio), (0, r.setDisableSubmit)(null != e && e.length > R.BIO_MAX_LENGTH)
                        },
                        pendingBio: k,
                        currentBio: null !== (b = null == y ? void 0 : y.bio) && void 0 !== b ? b : ""
                    }, "bio"), null != J && (0, a.jsx)(m.default, {
                        legacyUsername: J
                    }, "legacy_username")]
                })
            }