"use strict";
r.r(t), r.d(t, {
  buildGetPremiumUserBannerStyles: function() {
    return a
  },
  getUserBannerStyles: function() {
    return u
  },
  getUserBannerHeight: function() {
    return d
  },
  getUserBannerSize: function() {
    return f
  }
}), r("794252");
var l = r("506838"),
  i = r("617258"),
  o = r("769846"),
  n = r("590456"),
  s = r("220817");
let a = e => t => {
    if (t.hasBanner && t.isPremium || t.hasProfileEffect) return e.premiumUserWithBanner;
    if (t.isPremium) {
      var r;
      return null !== (r = e.premiumUserWithoutBanner) && void 0 !== r ? r : e.default
    }
    return e.default
  },
  u = e => {
    let {
      profileType: t,
      user: r
    } = e;
    return (0, l.match)(t).with(n.UserProfileTypes.POPOUT, n.UserProfileTypes.POMELO_POPOUT, () => {
      let e = a({
        premiumUserWithBanner: s.popoutBannerPremium,
        premiumUserWithoutBanner: s.popoutNoBannerPremium,
        default: s.popoutBanner
      });
      return e(r)
    }).with(n.UserProfileTypes.MODAL, () => {
      let e = a({
        premiumUserWithBanner: s.profileBannerPremium,
        premiumUserWithoutBanner: s.profileBanner,
        default: s.profileBanner
      });
      return e(r)
    }).with(n.UserProfileTypes.SETTINGS, () => s.settingsBanner).with(n.UserProfileTypes.PANEL, () => s.panelBanner).with(n.UserProfileTypes.CANCEL_MODAL, () => s.cancelModalBanner).exhaustive()
  },
  d = e => {
    let {
      profileType: t,
      user: r
    } = e, s = (0, l.match)(t).with(n.UserProfileTypes.POPOUT, () => {
      let e = a({
        premiumUserWithBanner: o.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT,
        premiumUserWithoutBanner: o.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT,
        default: o.default.USER_BANNER_BANNER_HEIGHT_POPOUT
      });
      return e(r)
    }).with(n.UserProfileTypes.MODAL, () => {
      let e = a({
        premiumUserWithBanner: o.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE,
        premiumUserWithoutBanner: o.default.USER_BANNER_BANNER_HEIGHT_PROFILE,
        default: o.default.USER_BANNER_BANNER_HEIGHT_PROFILE
      });
      return e(r)
    }).with(n.UserProfileTypes.POMELO_POPOUT, () => o.default.USER_BANNER_BANNER_HEIGHT_POMELO).with(n.UserProfileTypes.SETTINGS, () => o.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS).with(n.UserProfileTypes.PANEL, () => o.default.USER_BANNER_BANNER_HEIGHT_PANEL).with(n.UserProfileTypes.CANCEL_MODAL, () => o.default.USER_BANNER_CANCEL_MODAL_HEIGHT).exhaustive();
    return (0, i.cssValueToNumber)(s)
  },
  c = Object.freeze({
    [n.UserProfileTypes.POPOUT]: 480,
    [n.UserProfileTypes.PANEL]: 480,
    [n.UserProfileTypes.MODAL]: 600,
    [n.UserProfileTypes.SETTINGS]: 600,
    [n.UserProfileTypes.POMELO_POPOUT]: 432,
    [n.UserProfileTypes.CANCEL_MODAL]: 172
  }),
  f = e => c[e]