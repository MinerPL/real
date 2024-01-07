            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return v
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("627445"),
                l = s.n(n),
                i = s("446674"),
                r = s("77078"),
                o = s("956967"),
                d = s("906932"),
                u = s("702877"),
                c = s("447645"),
                S = s("52704"),
                E = s("121370"),
                f = s("370505"),
                m = s("713135"),
                T = s("26989"),
                _ = s("697218"),
                g = s("216422"),
                h = s("719923"),
                I = s("158998"),
                N = s("929423"),
                p = s("424562"),
                C = s("754893"),
                A = s("8204"),
                O = s("250590"),
                x = s("49111"),
                M = s("782340"),
                R = s("91451");

            function v(e) {
                var t, s, n, v;
                let {
                    guild: L
                } = e, D = (0, i.useStateFromStores)([_.default], () => {
                    let e = _.default.getCurrentUser();
                    return l(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
                }), {
                    pendingAvatar: P,
                    pendingNickname: j,
                    pendingBanner: b,
                    pendingBio: U,
                    pendingPronouns: y,
                    pendingThemeColors: B,
                    errors: F,
                    guild: G
                } = (0, i.useStateFromStoresObject)([p.default], () => {
                    let {
                        pendingAvatar: e,
                        pendingNickname: t,
                        pendingBio: s,
                        pendingPronouns: a,
                        pendingBanner: n,
                        pendingThemeColors: l
                    } = p.default.getAllPending();
                    return {
                        pendingAvatar: e,
                        pendingNickname: t,
                        pendingBanner: n,
                        pendingBio: s,
                        pendingPronouns: a,
                        pendingThemeColors: l,
                        errors: p.default.getErrors(),
                        guild: p.default.getGuild()
                    }
                }), k = null != L ? L : G;
                l(null != k, "guild should not be null");
                let w = (0, o.useGuildAutomodProfileQuarantineErrors)(k.id),
                    H = (0, i.useStateFromStores)([T.default], () => null == k.id ? null : T.default.getMember(k.id, D.id)),
                    V = (0, i.useStateFromStores)([m.default], () => m.default.getGuildMemberProfile(D.id, k.id)),
                    Y = h.default.canUsePremiumProfileCustomization(D),
                    W = (0, d.showRemoveAvatar)(P, null == H ? void 0 : H.avatar),
                    K = (0, d.showRemoveBanner)(b, null == V ? void 0 : V.banner),
                    z = (0, C.canResetThemeColors)(B, null == V ? void 0 : V.themeColors),
                    Q = null !== (t = null == V ? void 0 : V.bio) && void 0 !== t ? t : "",
                    q = null !== (s = null == V ? void 0 : V.pronouns) && void 0 !== s ? s : "",
                    Z = (e, t, s) => {
                        s(null != e ? e : null != t ? null : void 0)
                    };
                return (0, a.jsxs)("div", {
                    className: R.sectionsContainer,
                    children: [(0, a.jsx)(A.default, {
                        errors: null !== (n = null == F ? void 0 : F.nick) && void 0 !== n ? n : null == w ? void 0 : w.nick,
                        username: I.default.getName(D),
                        pendingNick: j,
                        currentNick: null == H ? void 0 : H.nick,
                        guild: k
                    }, "nick"), (0, a.jsx)(f.default, {
                        sectionTitle: M.default.Messages.USER_SETTINGS_PRONOUNS,
                        errors: null == F ? void 0 : F.pronouns,
                        onPronounsChange: e => {
                            (0, C.setNewPendingGuildIdentityPronouns)(e, q)
                        },
                        pendingPronouns: y,
                        currentPronouns: q
                    }, "pronouns"), (0, a.jsxs)(O.default, {
                        user: D,
                        showOverlay: !Y,
                        children: [(0, a.jsx)(c.default, {
                            sectionTitle: (0, a.jsxs)(a.Fragment, {
                                children: [M.default.Messages.USER_SETTINGS_AVATAR, (0, a.jsx)(r.Tooltip, {
                                    text: M.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                                    children: e => (0, a.jsx)(g.default, {
                                        ...e,
                                        className: R.nitroWheel
                                    })
                                })]
                            }),
                            showRemoveAvatarButton: W,
                            onAvatarChange: e => Z(e, null == H ? void 0 : H.avatar, N.setPendingAvatar),
                            errors: null == F ? void 0 : F.avatar,
                            guildId: k.id,
                            disabled: !Y
                        }, "avatar"), (0, a.jsx)(S.default, {
                            showRemoveBannerButton: K,
                            errors: null == F ? void 0 : F.banner,
                            onBannerChange: e => Z(e, null == V ? void 0 : V.banner, N.setPendingBanner),
                            guildId: null == k ? void 0 : k.id,
                            disabled: !Y
                        }, "banner"), (0, a.jsx)(E.default, {
                            user: D,
                            pendingAvatar: P,
                            pendingColors: B,
                            onThemeColorsChange: e => {
                                (0, C.setNewPendingGuildIdentityThemeColors)(e, null == V ? void 0 : V.themeColors)
                            },
                            guildId: null == k ? void 0 : k.id,
                            showResetThemeButton: z
                        }), (0, a.jsx)(u.default, {
                            placeholder: M.default.Messages.CHANGE_IDENTITY_BIO_PLACEHOLDER,
                            sectionTitle: (0, a.jsxs)(a.Fragment, {
                                children: [M.default.Messages.USER_PROFILE_ABOUT_ME, (0, a.jsx)(r.Tooltip, {
                                    text: M.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                                    children: e => (0, a.jsx)(g.default, {
                                        ...e,
                                        className: R.nitroWheel
                                    })
                                })]
                            }),
                            onBioChange: e => {
                                (0, C.setNewPendingGuildIdentityBio)(e, Q), (0, N.setDisableSubmit)(null != e && e.length > x.BIO_MAX_LENGTH)
                            },
                            errors: null !== (v = null == F ? void 0 : F.bio) && void 0 !== v ? v : null == w ? void 0 : w.bio,
                            pendingBio: U,
                            currentBio: Q,
                            disabled: !Y
                        }, "about")]
                    })]
                })
            }