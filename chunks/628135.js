"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("794252");
var i = n("37983");
n("884691");
var a = n("506838"),
  r = n("265586"),
  l = n("65597"),
  s = n("77078"),
  u = n("606292"),
  o = n("688318"),
  c = n("426188"),
  d = n("210721"),
  p = n("65324"),
  m = n("845962"),
  f = n("635471"),
  S = n("50885"),
  h = n("635357"),
  P = n("782340"),
  I = n("433264"),
  v = n("93902");
let E = S.default.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;

function y(e) {
  let {
    avatarDecoration: t
  } = e, {
    avatarDecorationSrc: n,
    eventHandlers: a,
    avatarPlaceholderSrc: r
  } = (0, o.default)({
    avatarDecorationOverride: t,
    size: (0, u.getDecorationSizeForAvatarSize)(s.AvatarSizes.SIZE_152)
  });
  return (0, i.jsx)("div", {
    className: I.giftMainAnimationWrapper,
    children: (0, i.jsx)(E, {
      ...a,
      avatarDecoration: n,
      src: r,
      className: I.avatar,
      size: s.AvatarSizes.SIZE_152,
      "aria-label": P.default.Messages.USER_SETTINGS_AVATAR
    })
  })
}

function T(e) {
  let {
    id: t
  } = e, n = (0, l.default)([m.default], () => {
    var e;
    return null === (e = m.default.getProfileEffectById(t)) || void 0 === e ? void 0 : e.config
  });
  return (0, i.jsxs)("div", {
    className: I.profileEffectContainer,
    children: [(0, i.jsx)("img", {
      src: v,
      alt: null == n ? void 0 : n.accessibilityLabel,
      className: I.profileEffectBackground
    }), (0, i.jsx)(f.default, {
      profileEffectId: t
    })]
  })
}

function x(e) {
  let {
    sku: t
  } = e, {
    selectedGiftStyle: n
  } = (0, h.useGiftContext)(), {
    product: l
  } = (0, c.useFetchCollectiblesProduct)(null == t ? void 0 : t.id), s = null == l ? void 0 : l.items[0], u = (0, a.match)(s).with({
    type: r.CollectiblesItemType.AVATAR_DECORATION
  }, e => (0, i.jsx)(y, {
    avatarDecoration: e
  })).with({
    type: r.CollectiblesItemType.PROFILE_EFFECT
  }, e => (0, i.jsx)(T, {
    id: e.id
  })).otherwise(() => null);
  return null != n && null == u ? (0, i.jsx)("div", {
    className: I.giftMainAnimationWrapper,
    children: (0, i.jsx)(p.default, {
      defaultAnimationState: d.AnimationState.LOOP,
      giftStyle: n,
      shouldAnimate: !0,
      className: I.giftMainAnimation
    })
  }) : u
}