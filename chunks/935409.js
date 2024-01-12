            "use strict";
            n.r(t), n.d(t, {
                UserPopoutBadgeList: function() {
                    return L
                },
                UserPopoutAvatar: function() {
                    return D
                },
                default: function() {
                    return b
                }
            }), n("794252");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("506838"),
                u = n("446674"),
                o = n("669491"),
                c = n("77078"),
                d = n("606292"),
                f = n("980215"),
                T = n("824794"),
                E = n("635471"),
                A = n("305961"),
                _ = n("423487"),
                S = n("587974"),
                m = n("599110"),
                C = n("719923"),
                N = n("50885"),
                g = n("713135"),
                v = n("106435"),
                p = n("289918"),
                I = n("878569"),
                M = n("590006"),
                h = n("430312"),
                O = n("401642"),
                U = n("590456"),
                x = n("49111"),
                R = n("646718"),
                y = n("782340"),
                j = n("524466");
            let P = c.AvatarSizes.SIZE_80,
                H = (0, d.getDecorationSizeForAvatarSize)(P);

            function L(e) {
                let {
                    user: t,
                    guildId: n,
                    isTryItOutFlow: l,
                    forProfileEffectModal: s
                } = e, i = (0, u.useStateFromStores)([g.default], () => g.default.getUserProfile(t.id), [t]), r = (0, u.useStateFromStores)([A.default], () => A.default.getGuild(n), [n]), d = (0, f.useClydeProfilesEnabled)(r);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(null == i ? void 0 : i.profileFetchFailed) && (!t.isClyde() || d) && (0, a.jsx)(c.Tooltip, {
                        text: y.default.Messages.USER_PROFILE_LOAD_ERROR,
                        spacing: 16,
                        children: e => (0, a.jsx)(_.default, {
                            ...e,
                            className: j.warningCircleIcon,
                            color: o.default.unsafe_rawColors.YELLOW_300.css
                        })
                    }), (0, a.jsx)(M.default, {
                        className: s ? j.profileBadgesCompactNoTouch : j.profileBadges,
                        user: t,
                        guildId: n,
                        isTryItOutFlow: l,
                        size: M.BadgeSizes.SIZE_22
                    })]
                })
            }
            let G = N.default.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar;

            function D(e) {
                let {
                    user: t,
                    displayProfile: n,
                    avatarSrc: s,
                    hasBanner: u,
                    status: o,
                    isMobile: d,
                    guildId: f,
                    channelId: E,
                    onClose: A,
                    disableUserProfileLink: _,
                    profileType: N,
                    animateOnHover: g,
                    hasProfileEffect: p
                } = e, {
                    profileTheme: M
                } = l.useContext(h.UserProfileContext), L = l.useContext(m.AnalyticsContext), D = t.isNonUserBot() && !t.isClyde(), b = C.default.isPremiumAtLeast(null == n ? void 0 : n.premiumType, R.PremiumTypes.TIER_2), B = l.useMemo(() => (0, T.shouldDisableUserPresenceInChannel)(t, E), [t, E]), F = _ || t.isClyde(), {
                    avatarDecorationSrc: k,
                    avatarSrc: w,
                    eventHandlers: V
                } = (0, v.default)({
                    user: t,
                    guildId: f,
                    size: P,
                    animateOnHover: g
                }), W = (0, a.jsx)("div", {
                    className: j.avatarHoverTarget,
                    ...V,
                    children: (0, a.jsx)(G, {
                        src: null != s ? s : w,
                        avatarDecoration: k,
                        size: P,
                        "aria-label": t.username,
                        status: B ? x.StatusTypes.UNKNOWN : o,
                        statusBackdropColor: null != M && b && !B ? (0, c.getStatusBackdropColor)(M) : void 0,
                        isMobile: d,
                        statusTooltip: !0
                    })
                }), Y = (0, r.match)(N).with(U.UserProfileTypes.POPOUT, () => {
                    let e = (0, I.buildGetPremiumUserBannerStyles)({
                        premiumUserWithBanner: j.avatarPositionPremiumBanner,
                        premiumUserWithoutBanner: j.avatarPositionPremiumNoBanner,
                        default: j.avatarPositionNormal
                    });
                    return e({
                        isPremium: b && !D,
                        hasBanner: u,
                        hasProfileEffect: p
                    })
                }).with(U.UserProfileTypes.POMELO_POPOUT, () => j.avatarPositionPomelo).with(U.UserProfileTypes.PANEL, () => j.avatarPositionPanel).exhaustive();
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(c.Clickable, {
                        className: i({
                            [j.clickable]: !F,
                            [j.avatarWrapperNonUserBot]: D,
                            [j.avatarWrapperNormal]: !D
                        }, Y),
                        onClick: D || F ? void 0 : function() {
                            (0, O.openUserProfileModal)({
                                userId: t.id,
                                guildId: null != f ? f : void 0,
                                channelId: null != E ? E : void 0,
                                analyticsLocation: L.location
                            }), null == A || A()
                        },
                        children: [W, !F && function() {
                            let e = null != k,
                                t = e ? H : (0, c.getAvatarSize)(P);
                            return (0, a.jsx)(S.default, {
                                mask: null == o || o === x.StatusTypes.UNKNOWN || B ? S.default.Masks.AVATAR_DEFAULT : (0, r.match)([e, d]).with([!0, !0], () => S.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => S.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => S.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => S.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
                                className: e ? j.avatarDecorationHint : j.avatarHint,
                                style: e ? {
                                    borderRadius: .4 * t
                                } : void 0,
                                width: t,
                                height: t,
                                children: (0, a.jsx)("div", {
                                    className: j.avatarHintInner,
                                    children: y.default.Messages.VIEW_PROFILE
                                })
                            })
                        }()]
                    })
                })
            }

            function b(e) {
                let {
                    user: t,
                    displayProfile: n,
                    guildId: l,
                    channelId: s,
                    onClose: i,
                    isMobile: r,
                    isStreaming: u,
                    status: o,
                    disableUserProfileLink: c,
                    isHovering: d,
                    showPremiumBadgeUpsell: f = !0,
                    upsell: T
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [T, (0, a.jsx)(p.default, {
                        user: t,
                        displayProfile: n,
                        onClose: i,
                        guildId: l,
                        profileType: U.UserProfileTypes.POPOUT,
                        showPremiumBadgeUpsell: f,
                        isHovering: d,
                        hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
                    }), (null == n ? void 0 : n.profileEffectId) != null && (0, a.jsx)(E.default, {
                        profileEffectId: null == n ? void 0 : n.profileEffectId,
                        bannerAdjustment: 0,
                        isHovering: d
                    }), (0, a.jsx)(D, {
                        user: t,
                        displayProfile: n,
                        status: u ? x.StatusTypes.STREAMING : o,
                        isMobile: r,
                        guildId: l,
                        channelId: s,
                        onClose: i,
                        disableUserProfileLink: c,
                        hasBanner: (null == n ? void 0 : n.banner) != null,
                        hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
                        profileType: U.UserProfileTypes.POPOUT
                    }), (0, a.jsx)(L, {
                        user: t,
                        guildId: l
                    })]
                })
            }