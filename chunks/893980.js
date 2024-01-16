"use strict";
n.r(t), n.d(t, {
  trackProfilePanelViewed: function() {
    return u
  },
  trackProfilePanelToggled: function() {
    return o
  }
});
var i = n("373469"),
  r = n("824563"),
  s = n("27618"),
  l = n("599110"),
  a = n("49111");
let u = e => {
    let {
      displayProfile: t,
      isMobile: n,
      loadDurationMs: i,
      activity: r,
      customStatusActivity: s,
      status: u
    } = e;
    l.default.track(a.AnalyticEvents.DM_PROFILE_VIEWED, {
      has_mobile_indicator: n,
      has_activity: null != r && (null == r ? void 0 : r.type) !== a.ActivityTypes.CUSTOM_STATUS,
      has_game_activity: (null == r ? void 0 : r.type) === a.ActivityTypes.PLAYING,
      load_duration_ms: i,
      profile_user_status: u,
      has_custom_status: null != s,
      has_profile_effect: null != t.profileEffectId,
      ...c(t)
    })
  },
  o = (e, t) => {
    l.default.track(a.AnalyticEvents.DM_PROFILE_TOGGLED, {
      is_profile_open: t,
      ...c(e)
    })
  },
  c = e => {
    var t;
    if (null == e) return {};
    let n = e.userId,
      l = null != i.default.getAnyStreamForUser(n),
      u = r.default.findActivity(n, e => {
        let {
          type: t
        } = e;
        return l ? t === a.ActivityTypes.PLAYING : t !== a.ActivityTypes.CUSTOM_STATUS
      }),
      o = null == u ? void 0 : u.assets,
      c = s.default.isFriend(n);
    return {
      has_images: !!(null !== (t = null == o ? void 0 : o.large_image) && void 0 !== t ? t : null == o ? void 0 : o.small_image),
      is_friend: c,
      viewed_profile_user_id: n,
      profile_has_nitro_customization: e.hasPremiumCustomization(),
      profile_has_theme_color_customized: e.hasThemeColors(),
      profile_has_theme_animation: null != e.popoutAnimationParticleType
    }
  }