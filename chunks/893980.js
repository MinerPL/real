            "use strict";
            n.r(t), n.d(t, {
                trackProfilePanelViewed: function() {
                    return o
                },
                trackProfilePanelToggled: function() {
                    return u
                }
            });
            var r = n("373469"),
                i = n("824563"),
                s = n("27618"),
                l = n("599110"),
                a = n("49111");
            let o = e => {
                    let {
                        displayProfile: t,
                        isMobile: n,
                        loadDurationMs: r,
                        activity: i,
                        customStatusActivity: s,
                        status: o
                    } = e;
                    l.default.track(a.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: n,
                        has_activity: null != i && (null == i ? void 0 : i.type) !== a.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == i ? void 0 : i.type) === a.ActivityTypes.PLAYING,
                        load_duration_ms: r,
                        profile_user_status: o,
                        has_custom_status: null != s,
                        has_profile_effect: null != t.profileEffectId,
                        ...c(t)
                    })
                },
                u = (e, t) => {
                    l.default.track(a.AnalyticEvents.DM_PROFILE_TOGGLED, {
                        is_profile_open: t,
                        ...c(e)
                    })
                },
                c = e => {
                    var t;
                    if (null == e) return {};
                    let n = e.userId,
                        l = null != r.default.getAnyStreamForUser(n),
                        o = i.default.findActivity(n, e => {
                            let {
                                type: t
                            } = e;
                            return l ? t === a.ActivityTypes.PLAYING : t !== a.ActivityTypes.CUSTOM_STATUS
                        }),
                        u = null == o ? void 0 : o.assets,
                        c = s.default.isFriend(n);
                    return {
                        has_images: !!(null !== (t = null == u ? void 0 : u.large_image) && void 0 !== t ? t : null == u ? void 0 : u.small_image),
                        is_friend: c,
                        viewed_profile_user_id: n,
                        profile_has_nitro_customization: e.hasPremiumCustomization(),
                        profile_has_theme_color_customized: e.hasThemeColors(),
                        profile_has_theme_animation: null != e.popoutAnimationParticleType
                    }
                }