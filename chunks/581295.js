"use strict";
r.r(t), r.d(t, {
  default: function() {
    return P
  }
}), r("70102"), r("794252");
var l = r("37983");
r("884691");
var i = r("506838"),
  o = r("769846"),
  n = r("77078"),
  s = r("606292"),
  a = r("476765"),
  u = r("159885"),
  d = r("878569"),
  c = r("590456"),
  f = r("573135"),
  E = r("423713");
let p = {
  [c.UserProfileTypes.POPOUT]: n.AvatarSizes.SIZE_80,
  [c.UserProfileTypes.MODAL]: n.AvatarSizes.SIZE_120,
  [c.UserProfileTypes.SETTINGS]: n.AvatarSizes.SIZE_80,
  [c.UserProfileTypes.PANEL]: n.AvatarSizes.SIZE_80,
  [c.UserProfileTypes.POMELO_POPOUT]: n.AvatarSizes.SIZE_80,
  [c.UserProfileTypes.CANCEL_MODAL]: n.AvatarSizes.SIZE_56
};

function P(e) {
  let {
    children: t,
    profileType: r,
    isPremium: P,
    hasThemeColors: T,
    hasBanner: _,
    forProfileEffectModal: O,
    hasProfileEffect: C = !1
  } = e, S = p[r], L = (0, a.useUID)(), I = function(e) {
    let {
      profileType: t,
      avatarSize: r,
      hasBanner: l,
      isPremium: a,
      hasThemeColors: E,
      hasProfileEffect: p
    } = e, P = f.AvatarDecorationBorderSizes[r];
    if (null == P) throw Error("Unsupported avatar size for banner mask");
    let T = (0, s.getDecorationSizeForAvatarSize)(r),
      {
        size: _,
        stroke: O
      } = (0, n.getAvatarSpecs)(r),
      C = {
        avatarSize: _,
        avatarBorderSize: O,
        avatarDecorationSize: T,
        avatarDecorationBorderSize: P,
        avatarDecorationOffsetY: -(T + 2 * P) / 2,
        bannerHeight: (0, d.getUserBannerHeight)({
          profileType: t,
          user: {
            hasBanner: l,
            isPremium: a,
            hasProfileEffect: p
          }
        })
      };
    return (0, i.match)(t).with(c.UserProfileTypes.POPOUT, () => {
      let e = E ? (0, u.cssValueToNumber)(o.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING) : 0;
      return {
        ...C,
        bannerWidth: (0, u.cssValueToNumber)(o.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
        offsetX: 16 - e,
        offsetY: 4 + e,
        avatarDecorationOffsetX: 4
      }
    }).with(c.UserProfileTypes.MODAL, () => ({
      ...C,
      bannerWidth: (0, d.getUserBannerSize)(c.UserProfileTypes.MODAL),
      offsetX: 14,
      offsetY: 5,
      avatarDecorationOffsetX: 2
    })).with(c.UserProfileTypes.SETTINGS, () => ({
      ...C,
      bannerWidth: 660,
      offsetX: 16,
      offsetY: -22,
      avatarDecorationOffsetX: 8
    })).with(c.UserProfileTypes.PANEL, () => {
      let e = (0, u.cssValueToNumber)(o.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING);
      return {
        ...C,
        bannerWidth: (0, u.cssValueToNumber)(o.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
        offsetX: 16 - e,
        offsetY: 4 + e,
        avatarDecorationOffsetX: 4
      }
    }).with(c.UserProfileTypes.POMELO_POPOUT, () => ({
      ...C,
      bannerWidth: (0, d.getUserBannerSize)(c.UserProfileTypes.POMELO_POPOUT),
      offsetX: 20,
      offsetY: -20,
      avatarDecorationOffsetX: 10
    })).with(c.UserProfileTypes.CANCEL_MODAL, () => ({
      ...C,
      bannerWidth: (0, d.getUserBannerSize)(c.UserProfileTypes.CANCEL_MODAL),
      offsetX: 8,
      offsetY: 2,
      avatarDecorationOffsetX: 8
    })).exhaustive()
  }({
    profileType: r,
    avatarSize: S,
    hasBanner: _,
    isPremium: P,
    hasThemeColors: T,
    hasProfileEffect: C
  });
  O && (I.bannerWidth = (0, u.cssValueToNumber)(o.default.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH));
  let h = I.avatarSize / 2 + I.avatarBorderSize,
    y = I.bannerHeight - I.offsetY;
  return (0, l.jsxs)("svg", {
    className: E.bannerSVGWrapper,
    viewBox: "0 0 ".concat(I.bannerWidth, " ").concat(I.bannerHeight),
    style: {
      minWidth: I.bannerWidth,
      minHeight: I.bannerHeight
    },
    children: [(0, l.jsxs)("mask", {
      id: L,
      children: [(0, l.jsx)("rect", {
        fill: "white",
        x: "0",
        y: "0",
        width: "100%",
        height: "100%"
      }), (0, l.jsx)("circle", {
        fill: "black",
        cx: I.offsetX + h,
        cy: y,
        r: h
      })]
    }), (0, l.jsx)("foreignObject", {
      x: "0",
      y: "0",
      width: "100%",
      height: "100%",
      overflow: "visible",
      mask: "url(#".concat(L, ")"),
      children: t
    })]
  })
}