            "use strict";
            n.r(t), n.d(t, {
                trackProfilePanelViewed: function() {
                    return r
                },
                trackProfilePanelToggled: function() {
                    return d
                }
            });
            var a = n("373469"),
                l = n("824563"),
                i = n("27618"),
                u = n("599110"),
                s = n("49111");
            let r = e => {
                    let {
                        displayProfile: t,
                        isMobile: n,
                        loadDurationMs: a,
                        activity: l,
                        customStatusActivity: i,
                        status: r
                    } = e;
                    u.default.track(s.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: n,
                        has_activity: null != l && (null == l ? void 0 : l.type) !== s.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == l ? void 0 : l.type) === s.ActivityTypes.PLAYING,
                        load_duration_ms: a,
                        profile_user_status: r,
                        has_custom_status: null != i,
                        has_profile_effect: null != t.profileEffectId,
                        ...o(t)
                    })
                },
                d = (e, t) => {
                    u.default.track(s.AnalyticEvents.DM_PROFILE_TOGGLED, {
                        is_profile_open: t,
                        ...o(e)
                    })
                },
                o = e => {
                    var t;
                    if (null == e) return {};
                    let n = e.userId,
                        u = null != a.default.getAnyStreamForUser(n),
                        r = l.default.findActivity(n, e => {
                            let {
                                type: t
                            } = e;
                            return u ? t === s.ActivityTypes.PLAYING : t !== s.ActivityTypes.CUSTOM_STATUS
                        }),
                        d = null == r ? void 0 : r.assets,
                        o = i.default.isFriend(n);
                    return {
                        has_images: !!(null !== (t = null == d ? void 0 : d.large_image) && void 0 !== t ? t : null == d ? void 0 : d.small_image),
                        is_friend: o,
                        viewed_profile_user_id: n,
                        profile_has_nitro_customization: e.hasPremiumCustomization(),
                        profile_has_theme_color_customized: e.hasThemeColors(),
                        profile_has_theme_animation: null != e.popoutAnimationParticleType
                    }
                }