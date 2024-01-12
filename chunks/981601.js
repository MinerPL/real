            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return Y
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("627445"),
                i = l.n(s),
                r = l("446674"),
                o = l("77078"),
                u = l("901582"),
                d = l("252744"),
                c = l("340066"),
                f = l("750560"),
                m = l("575365"),
                p = l("502651"),
                E = l("812204"),
                T = l("685665"),
                _ = l("299285"),
                S = l("442939"),
                h = l("373469"),
                I = l("26989"),
                A = l("305961"),
                g = l("824563"),
                v = l("27618"),
                C = l("697218"),
                N = l("599110"),
                y = l("713135"),
                O = l("561845"),
                M = l("217513"),
                x = l("641055"),
                R = l("430312"),
                L = l("763866"),
                P = l("789321"),
                b = l("627601"),
                D = l("935409"),
                j = l("849674"),
                U = l("590456"),
                F = l("49111"),
                w = l("450484"),
                G = l("304118");

            function k(e) {
                e.stopPropagation()
            }

            function B(e) {
                let {
                    user: t,
                    guildId: l,
                    channelId: s,
                    setNote: i,
                    closePopout: C,
                    setPopoutRef: B,
                    disableUserProfileLink: Y = __OVERLAY__,
                    analyticsParams: V = {}
                } = e, H = a.useRef(null), W = (0, M.default)(t.id, l), z = (0, d.default)(H), K = (0, r.useStateFromStores)([y.default], () => {
                    var e;
                    return null === (e = y.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
                }), {
                    AnalyticsLocationProvider: Z
                } = (0, T.default)(E.default.PROFILE_POPOUT), X = (0, r.useStateFromStores)([A.default], () => null != l ? A.default.getGuild(l) : null), J = (0, r.useStateFromStores)([I.default], () => null != l ? I.default.getMember(l, t.id) : null), Q = t.isNonUserBot(), {
                    activity: q,
                    customStatusActivity: $,
                    status: ee,
                    isMobile: et,
                    isApplicationStreaming: el
                } = (0, r.useStateFromStoresObject)([h.default, g.default], () => {
                    let e = null != h.default.getAnyStreamForUser(t.id);
                    return {
                        activity: g.default.findActivity(t.id, t => {
                            let {
                                type: l
                            } = t;
                            return e ? l === F.ActivityTypes.PLAYING : l !== F.ActivityTypes.CUSTOM_STATUS
                        }),
                        customStatusActivity: g.default.findActivity(t.id, e => {
                            let {
                                type: t
                            } = e;
                            return t === F.ActivityTypes.CUSTOM_STATUS
                        }),
                        status: Q ? null : g.default.getStatus(t.id),
                        isMobile: g.default.isMobileOnline(t.id),
                        isApplicationStreaming: e
                    }
                }), [en, ea] = a.useState(!1), es = a.useMemo(() => null != l ? {
                    [l]: [t.id]
                } : {}, [l, t.id]);
                (0, f.useSubscribeGuildMembers)(es);
                let ei = (0, O.default)(t.id, l),
                    er = (0, j.useShouldShowUserPopoutCollectiblesUpsell)({
                        popoutUser: t,
                        source: b.UserPopoutUpsellSource.USER_POPOUT,
                        guildId: l
                    }),
                    [eo, eu] = a.useState(!1);
                (0, c.default)(() => eu(!0), er.shouldShow ? 250 : null);
                let ed = (0, S.useGetOrFetchApplication)(null == q ? void 0 : q.application_id);
                return a.useEffect(() => {
                    null == B || B(null == H ? void 0 : H.current)
                }, [H, B]), a.useEffect(() => {
                    if (!en)((null == q ? void 0 : q.application_id) == null || null != ed) && (null == l || (null == J ? void 0 : J.fullProfileLoadedTimestamp) != null) && (function() {
                        var e;
                        let n, a, i;
                        null != q && (n = q.party, a = q.assets, i = null != q.application_id ? _.default.getApplication(q.application_id) : null);
                        let r = ee;
                        ee === F.StatusTypes.ONLINE && (r = et ? F.AnalyticsUserStatusTypes.ONLINE_MOBILE : F.AnalyticsUserStatusTypes.ONLINE_DESKTOP);
                        let o = null != J ? {
                                has_nickname: !!(null == J ? void 0 : J.nick),
                                has_guild_member_avatar: !!(null == J ? void 0 : J.avatar),
                                has_guild_member_banner: !!(null == W ? void 0 : W.isUsingGuildMemberBanner()),
                                has_guild_member_bio: !!(null == W ? void 0 : W.isUsingGuildMemberBio())
                            } : {},
                            u = null != K ? {
                                other_application_id: null == K ? void 0 : K.id,
                                other_application_name: t.toString()
                            } : {};
                        N.default.track(F.AnalyticEvents.OPEN_POPOUT, {
                            type: "Profile Popout",
                            guild_id: l,
                            channel_id: s,
                            other_user_id: t.id,
                            application_id: null != q ? q.application_id : void 0,
                            application_name: null != q ? q.name : void 0,
                            sku_id: null != i ? i.primarySkuId : null,
                            is_friend: v.default.isFriend(t.id),
                            has_images: !!(null !== (e = null == a ? void 0 : a.large_image) && void 0 !== e ? e : null == a ? void 0 : a.small_image),
                            party_max: null != n && null != n.size ? n.size[1] : void 0,
                            party_id: null != n ? n.id : void 0,
                            party_platform: null != n && (0, w.isSpotifyParty)(n.id) ? F.PlatformTypes.SPOTIFY : null,
                            game_platform: (0, m.default)(q),
                            profile_user_status: r,
                            is_streaming: el,
                            has_custom_status: null != $,
                            has_avatar_decoration: null != t.avatarDecoration,
                            has_profile_effect: (null == W ? void 0 : W.profileEffectId) != null,
                            profile_has_nitro_customization: null != W && (null == W ? void 0 : W.hasPremiumCustomization()),
                            profile_has_theme_color_customized: null != W && W.hasThemeColors(),
                            profile_has_theme_animation: (null == W ? void 0 : W.popoutAnimationParticleType) != null,
                            ...o,
                            ...u,
                            ...V
                        })
                    }(), ea(!0))
                }, [J, null == q ? void 0 : q.application_id, ed, en, l]), (0, n.jsx)(Z, {
                    children: (0, n.jsx)(u.default, {
                        section: F.AnalyticsSections.PROFILE_POPOUT,
                        children: (0, n.jsx)(o.Dialog, {
                            ref: H,
                            "aria-label": t.username,
                            onClick: k,
                            onContextMenu: k,
                            style: er.shouldShow ? {
                                marginTop: P.DEFAULT_COLLECTIBLES_UPSELL_HEIGHT
                            } : void 0,
                            children: (0, n.jsxs)(R.default, {
                                user: t,
                                guildId: l,
                                profileType: U.UserProfileTypes.POPOUT,
                                className: er.shouldShow ? G.hasCollectiblesUpsell : void 0,
                                showOutOfBoundaryComponents: eo,
                                children: [(0, n.jsx)(D.default, {
                                    user: t,
                                    displayProfile: W,
                                    guildId: l,
                                    channelId: s,
                                    onClose: () => null == C ? void 0 : C(),
                                    isMobile: et,
                                    isStreaming: (0, p.default)(q),
                                    status: ee,
                                    disableUserProfileLink: Y,
                                    isHovering: z,
                                    upsell: er.shouldShow ? (0, n.jsx)(P.default, {
                                        user: t,
                                        upsellSource: b.UserPopoutUpsellSource.USER_POPOUT,
                                        displayProfile: W,
                                        onClose: C,
                                        ...er
                                    }) : void 0
                                }), (0, n.jsxs)(R.default.Inner, {
                                    children: [(0, n.jsx)(x.default, {
                                        onTooltipClose: C
                                    }), (0, n.jsx)(L.default, {
                                        activity: q,
                                        customStatusActivity: $,
                                        displayProfile: W,
                                        user: t,
                                        guild: X,
                                        guildMember: J,
                                        channelId: s,
                                        onClose: C,
                                        setNote: i,
                                        canDM: ei
                                    })]
                                })]
                            })
                        })
                    })
                })
            }
            var Y = a.memo(function(e) {
                let {
                    userId: t,
                    user: l,
                    ...a
                } = e, s = (0, r.useStateFromStores)([C.default], () => C.default.getUser(t), [t]), o = null != l ? l : s;
                return i(null != o, "Unexpected missing user"), (0, n.jsx)(B, {
                    user: o,
                    ...a
                })
            })