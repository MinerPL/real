"use strict";
l.r(r), l.d(r, {
  buildGetPremiumUserBannerStyles: function() {
    return s
  },
  getUserBannerStyles: function() {
    return u
  },
  getUserBannerHeight: function() {
    return f
  },
  getUserBannerSize: function() {
    return c
  }
}), l("794252");
var t = l("506838"),
  o = l("617258"),
  i = l("769846"),
  n = l("590456"),
  a = l("220817");
let s = e => r => {
    if (r.hasBanner && r.isPremium || r.hasProfileEffect) return e.premiumUserWithBanner;
    if (r.isPremium) {
      var l;
      return null !== (l = e.premiumUserWithoutBanner) && void 0 !== l ? l : e.default
    }
    return e.default
  },
  u = e => {
    let {
      profileType: r,
      user: l
    } = e;
    return (0, t.match)(r).with(n.UserProfileTypes.POPOUT, n.UserProfileTypes.POMELO_POPOUT, () => {
      let e = s({
        premiumUserWithBanner: a.popoutBannerPremium,
        premiumUserWithoutBanner: a.popoutNoBannerPremium,
        default: a.popoutBanner
      });
      return e(l)
    }).with(n.UserProfileTypes.MODAL, () => {
      let e = s({
        premiumUserWithBanner: a.profileBannerPremium,
        premiumUserWithoutBanner: a.profileBanner,
        default: a.profileBanner
      });
      return e(l)
    }).with(n.UserProfileTypes.SETTINGS, () => a.settingsBanner).with(n.UserProfileTypes.PANEL, () => a.panelBanner).with(n.UserProfileTypes.CANCEL_MODAL, () => a.cancelModalBanner).exhaustive()
  },
  f = e => {
    let {
      profileType: r,
      user: l
    } = e, a = (0, t.match)(r).with(n.UserProfileTypes.POPOUT, () => {
      let e = s({
        premiumUserWithBanner: i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT,
        premiumUserWithoutBanner: i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT,
        default: i.default.USER_BANNER_BANNER_HEIGHT_POPOUT
      });
      return e(l)
    }).with(n.UserProfileTypes.MODAL, () => {
      let e = s({
        premiumUserWithBanner: i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE,
        premiumUserWithoutBanner: i.default.USER_BANNER_BANNER_HEIGHT_PROFILE,
        default: i.default.USER_BANNER_BANNER_HEIGHT_PROFILE
      });
      return e(l)
    }).with(n.UserProfileTypes.POMELO_POPOUT, () => i.default.USER_BANNER_BANNER_HEIGHT_POMELO).with(n.UserProfileTypes.SETTINGS, () => i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS).with(n.UserProfileTypes.PANEL, () => i.default.USER_BANNER_BANNER_HEIGHT_PANEL).with(n.UserProfileTypes.CANCEL_MODAL, () => i.default.USER_BANNER_CANCEL_MODAL_HEIGHT).exhaustive();
    return (0, o.cssValueToNumber)(a)
  },
  d = Object.freeze({
    [n.UserProfileTypes.POPOUT]: 480,
    [n.UserProfileTypes.PANEL]: 480,
    [n.UserProfileTypes.MODAL]: 600,
    [n.UserProfileTypes.SETTINGS]: 600,
    [n.UserProfileTypes.POMELO_POPOUT]: 432,
    [n.UserProfileTypes.CANCEL_MODAL]: 172
  }),
  c = e => d[e]