"use strict";
l.r(r), l.d(r, {
  default: function() {
    return T
  }
}), l("70102"), l("794252");
var t = l("37983");
l("884691");
var o = l("506838"),
  i = l("769846"),
  n = l("77078"),
  a = l("606292"),
  s = l("476765"),
  u = l("159885"),
  f = l("878569"),
  d = l("590456"),
  c = l("573135"),
  P = l("423713");
let E = {
  [d.UserProfileTypes.POPOUT]: n.AvatarSizes.SIZE_80,
  [d.UserProfileTypes.MODAL]: n.AvatarSizes.SIZE_120,
  [d.UserProfileTypes.SETTINGS]: n.AvatarSizes.SIZE_80,
  [d.UserProfileTypes.PANEL]: n.AvatarSizes.SIZE_80,
  [d.UserProfileTypes.POMELO_POPOUT]: n.AvatarSizes.SIZE_80,
  [d.UserProfileTypes.CANCEL_MODAL]: n.AvatarSizes.SIZE_56
};

function T(e) {
  let {
    children: r,
    profileType: l,
    isPremium: T,
    hasThemeColors: p,
    hasBanner: O,
    forProfileEffectModal: U,
    hasProfileEffect: _ = !1
  } = e, h = E[l], y = (0, s.useUID)(), m = function(e) {
    let {
      profileType: r,
      avatarSize: l,
      hasBanner: t,
      isPremium: s,
      hasThemeColors: P,
      hasProfileEffect: E
    } = e, T = c.AvatarDecorationBorderSizes[l];
    if (null == T) throw Error("Unsupported avatar size for banner mask");
    let p = (0, a.getDecorationSizeForAvatarSize)(l),
      {
        size: O,
        stroke: U
      } = (0, n.getAvatarSpecs)(l),
      _ = {
        avatarSize: O,
        avatarBorderSize: U,
        avatarDecorationSize: p,
        avatarDecorationBorderSize: T,
        avatarDecorationOffsetY: -(p + 2 * T) / 2,
        bannerHeight: (0, f.getUserBannerHeight)({
          profileType: r,
          user: {
            hasBanner: t,
            isPremium: s,
            hasProfileEffect: E
          }
        })
      };
    return (0, o.match)(r).with(d.UserProfileTypes.POPOUT, () => {
      let e = P ? (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING) : 0;
      return {
        ..._,
        bannerWidth: (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
        offsetX: 16 - e,
        offsetY: 4 + e,
        avatarDecorationOffsetX: 4
      }
    }).with(d.UserProfileTypes.MODAL, () => ({
      ..._,
      bannerWidth: (0, f.getUserBannerSize)(d.UserProfileTypes.MODAL),
      offsetX: 14,
      offsetY: 5,
      avatarDecorationOffsetX: 2
    })).with(d.UserProfileTypes.SETTINGS, () => ({
      ..._,
      bannerWidth: 660,
      offsetX: 16,
      offsetY: -22,
      avatarDecorationOffsetX: 8
    })).with(d.UserProfileTypes.PANEL, () => {
      let e = (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING);
      return {
        ..._,
        bannerWidth: (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
        offsetX: 16 - e,
        offsetY: 4 + e,
        avatarDecorationOffsetX: 4
      }
    }).with(d.UserProfileTypes.POMELO_POPOUT, () => ({
      ..._,
      bannerWidth: (0, f.getUserBannerSize)(d.UserProfileTypes.POMELO_POPOUT),
      offsetX: 20,
      offsetY: -20,
      avatarDecorationOffsetX: 10
    })).with(d.UserProfileTypes.CANCEL_MODAL, () => ({
      ..._,
      bannerWidth: (0, f.getUserBannerSize)(d.UserProfileTypes.CANCEL_MODAL),
      offsetX: 8,
      offsetY: 2,
      avatarDecorationOffsetX: 8
    })).exhaustive()
  }({
    profileType: l,
    avatarSize: h,
    hasBanner: O,
    isPremium: T,
    hasThemeColors: p,
    hasProfileEffect: _
  });
  U && (m.bannerWidth = (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH));
  let v = m.avatarSize / 2 + m.avatarBorderSize,
    S = m.bannerHeight - m.offsetY;
  return (0, t.jsxs)("svg", {
    className: P.bannerSVGWrapper,
    viewBox: "0 0 ".concat(m.bannerWidth, " ").concat(m.bannerHeight),
    style: {
      minWidth: m.bannerWidth,
      minHeight: m.bannerHeight
    },
    children: [(0, t.jsxs)("mask", {
      id: y,
      children: [(0, t.jsx)("rect", {
        fill: "white",
        x: "0",
        y: "0",
        width: "100%",
        height: "100%"
      }), (0, t.jsx)("circle", {
        fill: "black",
        cx: m.offsetX + v,
        cy: S,
        r: v
      })]
    }), (0, t.jsx)("foreignObject", {
      x: "0",
      y: "0",
      width: "100%",
      height: "100%",
      overflow: "visible",
      mask: "url(#".concat(y, ")"),
      children: r
    })]
  })
}