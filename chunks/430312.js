"use strict";
r.r(t), r.d(t, {
  UserProfileContext: function() {
    return E
  },
  default: function() {
    return P
  }
}), r("794252");
var l = r("37983"),
  i = r("884691"),
  o = r("414456"),
  n = r.n(o),
  s = r("506838"),
  a = r("217513"),
  u = r("906889"),
  d = r("590456"),
  c = r("200932"),
  f = r("677055");
let E = i.createContext({
  profileType: null,
  profileTheme: null
});

function p(e) {
  var t, r;
  let {
    user: o,
    guildId: p,
    profileType: P,
    className: T,
    pendingThemeColors: _,
    pendingProfileEffectId: O,
    useDefaultClientTheme: C,
    children: S,
    forceShowPremium: L = !1,
    showOutOfBoundaryComponents: I = !1
  } = e, h = i.useRef(null), y = (0, a.default)(o.id, p), {
    profileTheme: U
  } = (0, u.default)(o, y, {
    themeElementRef: h,
    pendingThemeColors: _,
    isPreview: L,
    useDefaultClientTheme: C
  }), m = (null == y ? void 0 : y.canEditThemes) || L, A = i.useMemo(() => ({
    profileType: P,
    profileTheme: U
  }), [P, U]);
  return (0, l.jsx)("div", {
    ref: h,
    className: n((t = P, (0, s.match)(t).with(d.UserProfileTypes.POPOUT, d.UserProfileTypes.SETTINGS, d.UserProfileTypes.CANCEL_MODAL, () => f.userPopoutOuter).with(d.UserProfileTypes.MODAL, () => f.userProfileModalOuter).with(d.UserProfileTypes.PANEL, () => f.userPanelOuter).with(d.UserProfileTypes.CARD, () => f.userCardOuter).exhaustive()), m ? f.userProfileOuterThemed : f.userProfileOuterUnthemed, c.profileColors, I ? f.showOutOfBoundaryComponents : void 0, "theme-".concat(U), T),
    children: (0, l.jsx)("div", {
      className: n((r = P, (0, s.match)(r).with(d.UserProfileTypes.POPOUT, d.UserProfileTypes.SETTINGS, d.UserProfileTypes.CANCEL_MODAL, () => f.userPopoutInner).with(d.UserProfileTypes.MODAL, () => f.userProfileModalInner).with(d.UserProfileTypes.PANEL, () => f.userPanelInner).with(d.UserProfileTypes.CARD, () => f.userCardInner).exhaustive()), function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = arguments.length > 1 ? arguments[1] : void 0,
          r = arguments.length > 2 ? arguments[2] : void 0;
        return (0, s.match)({
          profileType: r,
          canUsePremiumProfileCustomization: e,
          hasBanner: t
        }).with({
          profileType: d.UserProfileTypes.PANEL
        }, () => f.userPanelInnerThemed).with({
          canUsePremiumProfileCustomization: !0,
          hasBanner: !0
        }, () => f.userProfileInnerThemedWithBanner).with({
          canUsePremiumProfileCustomization: !0
        }, () => f.userProfileInnerThemedPremiumWithoutBanner).otherwise(() => f.userProfileInnerThemedNonPremium)
      }((null == y ? void 0 : y.canUsePremiumProfileCustomization) || L, null !== O && ((null == y ? void 0 : y.banner) != null || void 0 !== O), P)),
      children: (0, l.jsx)(E.Provider, {
        value: A,
        children: S
      })
    })
  })
}
p.Inner = function(e) {
  var t;
  let {
    className: r,
    children: o
  } = e, {
    profileType: a
  } = i.useContext(E);
  return (0, l.jsx)("div", {
    className: n((t = a, (0, s.match)(t).with(d.UserProfileTypes.POPOUT, d.UserProfileTypes.SETTINGS, () => f.userPopoutOverlayBackground).with(d.UserProfileTypes.MODAL, () => f.userProfileModalOverlayBackground).with(d.UserProfileTypes.PANEL, () => f.userPanelOverlayBackground).otherwise(() => f.overlayBackground)), r),
    children: o
  })
};
var P = p