            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return L
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
                N = s("783142"),
                p = s("713135"),
                C = s("217513"),
                A = s("790618"),
                O = s("697218"),
                x = s("719923"),
                M = s("49111"),
                R = s("782340"),
                v = s("361904");

            function L() {
                var e, t, s, n, L, D, P, j;
                let b = (0, i.useStateFromStores)([O.default], () => {
                        let e = O.default.getCurrentUser();
                        return l(null != e, "DefaultCustomizationSections: user cannot be undefined"), e
                    }),
                    U = (0, i.useStateFromStores)([p.default], () => p.default.getUserProfile(b.id)),
                    {
                        pendingAvatar: y,
                        pendingGlobalName: B,
                        pendingBanner: F,
                        pendingBio: G,
                        pendingPronouns: k,
                        pendingAccentColor: w,
                        pendingThemeColors: H,
                        errors: V
                    } = (0, i.useStateFromStoresObject)([A.default], () => {
                        let e = A.default.getAllPending(),
                            t = A.default.getErrors();
                        return {
                            ...e,
                            errors: t
                        }
                    }),
                    Y = (0, d.useGuildAutomodProfileQuarantineErrors)(),
                    W = x.default.canUsePremiumProfileCustomization(b),
                    K = (0, u.showRemoveAvatar)(y, b.avatar),
                    z = (0, u.showRemoveBanner)(F, null == U ? void 0 : U.banner),
                    Q = "DefaultCustomizationSections";
                (0, o.useTriggerDebuggingAA)({
                    location: Q + " auto on",
                    autoTrackExposure: !0
                }), (0, o.useTriggerDebuggingAA)({
                    location: Q + " auto off",
                    autoTrackExposure: !1
                });
                let q = (0, C.default)(b.id),
                    Z = null == q ? void 0 : q.getLegacyUsername(),
                    X = (null !== (s = null === (e = V.global_name) || void 0 === e ? void 0 : e.length) && void 0 !== s ? s : 0) > 0 ? V.global_name : null !== (n = null == Y ? void 0 : Y.nick) && void 0 !== n ? n : [],
                    J = (null !== (L = null === (t = V.bio) || void 0 === t ? void 0 : t.length) && void 0 !== L ? L : 0) > 0 ? V.bio : null !== (D = null == Y ? void 0 : Y.bio) && void 0 !== D ? D : [];
                return (0, a.jsxs)("div", {
                    className: v.sectionsContainer,
                    children: [(0, a.jsx)(f.default, {
                        placeholder: b.username,
                        errors: X,
                        currentGlobalName: b.globalName,
                        pendingGlobalName: B,
                        onGlobalNameChange: r.setPendingGlobalNameName
                    }), (0, a.jsx)(I.default, {
                        sectionTitle: R.default.Messages.USER_SETTINGS_PRONOUNS,
                        errors: V.pronouns,
                        onPronounsChange: N.setPendingPronouns,
                        pendingPronouns: k,
                        currentPronouns: null !== (P = null == U ? void 0 : U.pronouns) && void 0 !== P ? P : ""
                    }, "pronouns"), (0, a.jsx)(E.default, {
                        onAvatarChange: r.setPendingAvatar,
                        showRemoveAvatarButton: K,
                        errors: V.avatar,
                        sectionTitle: R.default.Messages.USER_SETTINGS_AVATAR,
                        forcedDivider: !0
                    }, "avatar"), (0, a.jsx)(S.default, {
                        user: b
                    }, "decoration"), (0, a.jsx)(g.default, {
                        user: b
                    }, "effect"), W ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(T.default, {
                            showRemoveBannerButton: z,
                            errors: V.banner,
                            onBannerChange: N.setPendingBanner,
                            forcedDivider: !0
                        }, "banner"), (0, a.jsx)(h.default, {
                            user: b,
                            pendingAvatar: y,
                            pendingColors: H,
                            onThemeColorsChange: N.setPendingThemeColors,
                            forcedDivider: !0
                        })]
                    }) : (0, a.jsx)(_.default, {
                        user: b,
                        savedUserColor: null == U ? void 0 : U.accentColor,
                        pendingColor: w,
                        setPendingAccentColor: N.setPendingAccentColor
                    }, "color"), (0, a.jsx)(c.default, {
                        sectionTitle: R.default.Messages.USER_SETTINGS_ABOUT_ME,
                        errors: J,
                        onBioChange: e => {
                            (0, u.setNewPendingUserBio)(e, null == U ? void 0 : U.bio), (0, r.setDisableSubmit)(null != e && e.length > M.BIO_MAX_LENGTH)
                        },
                        pendingBio: G,
                        currentBio: null !== (j = null == U ? void 0 : U.bio) && void 0 !== j ? j : ""
                    }, "bio"), null != Z && (0, a.jsx)(m.default, {
                        legacyUsername: Z
                    }, "legacy_username")]
                })
            }