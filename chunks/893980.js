"use strict";
n.r(t), n.d(t, {
  trackProfilePanelViewed: function() {
    return u
  },
  trackProfilePanelToggled: function() {
    return o
  }
});
var s = n("373469"),
  i = n("824563"),
  l = n("27618"),
  r = n("599110"),
  a = n("49111");
let u = e => {
    let {
      displayProfile: t,
      isMobile: n,
      loadDurationMs: s,
      activity: i,
      customStatusActivity: l,
      status: u
    } = e;
    r.default.track(a.AnalyticEvents.DM_PROFILE_VIEWED, {
      has_mobile_indicator: n,
      has_activity: null != i && (null == i ? void 0 : i.type) !== a.ActivityTypes.CUSTOM_STATUS,
      has_game_activity: (null == i ? void 0 : i.type) === a.ActivityTypes.PLAYING,
      load_duration_ms: s,
      profile_user_status: u,
      has_custom_status: null != l,
      has_profile_effect: null != t.profileEffectId,
      ...c(t)
    })
  },
  o = (e, t) => {
    r.default.track(a.AnalyticEvents.DM_PROFILE_TOGGLED, {
      is_profile_open: t,
      ...c(e)
    })
  },
  c = e => {
    var t;
    if (null == e) return {};
    let n = e.userId,
      r = null != s.default.getAnyStreamForUser(n),
      u = i.default.findActivity(n, e => {
        let {
          type: t
        } = e;
        return r ? t === a.ActivityTypes.PLAYING : t !== a.ActivityTypes.CUSTOM_STATUS
      }),
      o = null == u ? void 0 : u.assets,
      c = l.default.isFriend(n);
    return {
      has_images: !!(null !== (t = null == o ? void 0 : o.large_image) && void 0 !== t ? t : null == o ? void 0 : o.small_image),
      is_friend: c,
      viewed_profile_user_id: n,
      profile_has_nitro_customization: e.hasPremiumCustomization(),
      profile_has_theme_color_customized: e.hasThemeColors(),
      profile_has_theme_animation: null != e.popoutAnimationParticleType
    }
  }