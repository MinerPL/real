"use strict";
l.r(r), l.d(r, {
  UserProfileContext: function() {
    return P
  },
  default: function() {
    return T
  }
}), l("794252");
var t = l("37983"),
  o = l("884691"),
  i = l("414456"),
  n = l.n(i),
  a = l("506838"),
  s = l("217513"),
  u = l("906889"),
  f = l("590456"),
  d = l("200932"),
  c = l("677055");
let P = o.createContext({
  profileType: null,
  profileTheme: null
});

function E(e) {
  var r, l;
  let {
    user: i,
    guildId: E,
    profileType: T,
    className: p,
    pendingThemeColors: O,
    pendingProfileEffectId: U,
    useDefaultClientTheme: _,
    children: h,
    forceShowPremium: y = !1,
    showOutOfBoundaryComponents: m = !1
  } = e, v = o.useRef(null), S = (0, s.default)(i.id, E), {
    profileTheme: I
  } = (0, u.default)(i, S, {
    themeElementRef: v,
    pendingThemeColors: O,
    isPreview: y,
    useDefaultClientTheme: _
  }), N = (null == S ? void 0 : S.canEditThemes) || y, A = o.useMemo(() => ({
    profileType: T,
    profileTheme: I
  }), [T, I]);
  return (0, t.jsx)("div", {
    ref: v,
    className: n((r = T, (0, a.match)(r).with(f.UserProfileTypes.POPOUT, f.UserProfileTypes.SETTINGS, f.UserProfileTypes.CANCEL_MODAL, () => c.userPopoutOuter).with(f.UserProfileTypes.MODAL, () => c.userProfileModalOuter).with(f.UserProfileTypes.PANEL, () => c.userPanelOuter).with(f.UserProfileTypes.CARD, () => c.userCardOuter).exhaustive()), N ? c.userProfileOuterThemed : c.userProfileOuterUnthemed, d.profileColors, m ? c.showOutOfBoundaryComponents : void 0, "theme-".concat(I), p),
    children: (0, t.jsx)("div", {
      className: n((l = T, (0, a.match)(l).with(f.UserProfileTypes.POPOUT, f.UserProfileTypes.SETTINGS, f.UserProfileTypes.CANCEL_MODAL, () => c.userPopoutInner).with(f.UserProfileTypes.MODAL, () => c.userProfileModalInner).with(f.UserProfileTypes.PANEL, () => c.userPanelInner).with(f.UserProfileTypes.CARD, () => c.userCardInner).exhaustive()), function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          r = arguments.length > 1 ? arguments[1] : void 0,
          l = arguments.length > 2 ? arguments[2] : void 0;
        return (0, a.match)({
          profileType: l,
          canUsePremiumProfileCustomization: e,
          hasBanner: r
        }).with({
          profileType: f.UserProfileTypes.PANEL
        }, () => c.userPanelInnerThemed).with({
          canUsePremiumProfileCustomization: !0,
          hasBanner: !0
        }, () => c.userProfileInnerThemedWithBanner).with({
          canUsePremiumProfileCustomization: !0
        }, () => c.userProfileInnerThemedPremiumWithoutBanner).otherwise(() => c.userProfileInnerThemedNonPremium)
      }((null == S ? void 0 : S.canUsePremiumProfileCustomization) || y, null !== U && ((null == S ? void 0 : S.banner) != null || void 0 !== U), T)),
      children: (0, t.jsx)(P.Provider, {
        value: A,
        children: h
      })
    })
  })
}
E.Inner = function(e) {
  var r;
  let {
    className: l,
    children: i
  } = e, {
    profileType: s
  } = o.useContext(P);
  return (0, t.jsx)("div", {
    className: n((r = s, (0, a.match)(r).with(f.UserProfileTypes.POPOUT, f.UserProfileTypes.SETTINGS, () => c.userPopoutOverlayBackground).with(f.UserProfileTypes.MODAL, () => c.userProfileModalOverlayBackground).with(f.UserProfileTypes.PANEL, () => c.userPanelOverlayBackground).otherwise(() => c.overlayBackground)), l),
    children: i
  })
};
var T = E