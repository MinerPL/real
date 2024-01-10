            "use strict";
            r.r(t), r.d(t, {
                trackProfilePanelViewed: function() {
                    return o
                },
                trackProfilePanelToggled: function() {
                    return u
                }
            });
            var n = r("373469"),
                i = r("824563"),
                s = r("27618"),
                l = r("599110"),
                a = r("49111");
            let o = e => {
                    let {
                        displayProfile: t,
                        isMobile: r,
                        loadDurationMs: n,
                        activity: i,
                        customStatusActivity: s,
                        status: o
                    } = e;
                    l.default.track(a.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: r,
                        has_activity: null != i && (null == i ? void 0 : i.type) !== a.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == i ? void 0 : i.type) === a.ActivityTypes.PLAYING,
                        load_duration_ms: n,
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
                    let r = e.userId,
                        l = null != n.default.getAnyStreamForUser(r),
                        o = i.default.findActivity(r, e => {
                            let {
                                type: t
                            } = e;
                            return l ? t === a.ActivityTypes.PLAYING : t !== a.ActivityTypes.CUSTOM_STATUS
                        }),
                        u = null == o ? void 0 : o.assets,
                        c = s.default.isFriend(r);
                    return {
                        has_images: !!(null !== (t = null == u ? void 0 : u.large_image) && void 0 !== t ? t : null == u ? void 0 : u.small_image),
                        is_friend: c,
                        viewed_profile_user_id: r,
                        profile_has_nitro_customization: e.hasPremiumCustomization(),
                        profile_has_theme_color_customized: e.hasThemeColors(),
                        profile_has_theme_animation: null != e.popoutAnimationParticleType
                    }
                }