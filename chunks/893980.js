            "use strict";
            n.r(t), n.d(t, {
                trackProfilePanelViewed: function() {
                    return o
                },
                trackProfilePanelToggled: function() {
                    return s
                }
            });
            var a = n("373469"),
                i = n("824563"),
                r = n("27618"),
                l = n("599110"),
                u = n("49111");
            let o = e => {
                    let {
                        displayProfile: t,
                        isMobile: n,
                        loadDurationMs: a,
                        activity: i,
                        customStatusActivity: r,
                        status: o
                    } = e;
                    l.default.track(u.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: n,
                        has_activity: null != i && (null == i ? void 0 : i.type) !== u.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == i ? void 0 : i.type) === u.ActivityTypes.PLAYING,
                        load_duration_ms: a,
                        profile_user_status: o,
                        has_custom_status: null != r,
                        has_profile_effect: null != t.profileEffectId,
                        ...d(t)
                    })
                },
                s = (e, t) => {
                    l.default.track(u.AnalyticEvents.DM_PROFILE_TOGGLED, {
                        is_profile_open: t,
                        ...d(e)
                    })
                },
                d = e => {
                    var t;
                    if (null == e) return {};
                    let n = e.userId,
                        l = null != a.default.getAnyStreamForUser(n),
                        o = i.default.findActivity(n, e => {
                            let {
                                type: t
                            } = e;
                            return l ? t === u.ActivityTypes.PLAYING : t !== u.ActivityTypes.CUSTOM_STATUS
                        }),
                        s = null == o ? void 0 : o.assets,
                        d = r.default.isFriend(n);
                    return {
                        has_images: !!(null !== (t = null == s ? void 0 : s.large_image) && void 0 !== t ? t : null == s ? void 0 : s.small_image),
                        is_friend: d,
                        viewed_profile_user_id: n,
                        profile_has_nitro_customization: e.hasPremiumCustomization(),
                        profile_has_theme_color_customized: e.hasThemeColors(),
                        profile_has_theme_animation: null != e.popoutAnimationParticleType
                    }
                }