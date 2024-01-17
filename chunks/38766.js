"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("884691"),
  l = n("79112"),
  r = n("685665"),
  a = n("929423");
n("424562");
var s = n("49111"),
  o = n("397336");

function u(e) {
  let {
    guild: t,
    scrollPosition: n,
    analyticsLocation: u,
    analyticsLocations: d,
    openWithoutBackstack: c = !1
  } = e, {
    analyticsLocations: f
  } = (0, r.default)(), h = (0, i.useCallback)(() => {
    null != t && (0, a.initGuildIdentitySettings)(t, null != d ? d : f), l.default.open(s.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? o.ProfileCustomizationSubsection.GUILD : o.ProfileCustomizationSubsection.USER_PROFILE, {
      scrollPosition: n,
      analyticsLocation: u,
      analyticsLocations: d,
      openWithoutBackstack: c
    })
  }, [t, n, u, d, c, f]);
  return h
}