"use strict";
s.r(e), s.d(e, {
  default: function() {
    return S
  }
});
var i = s("37983");
s("884691");
var l = s("265586"),
  a = s("446674"),
  n = s("77078"),
  r = s("606292"),
  o = s("688318"),
  u = s("601095"),
  d = s("697218"),
  c = s("853987"),
  f = s("929392");
let p = n.AvatarSizes.SIZE_152,
  h = (0, r.getDecorationSizeForAvatarSize)(p),
  m = t => {
    let {
      item: e
    } = t, s = (0, a.useStateFromStores)([d.default], () => d.default.getCurrentUser()), {
      avatarDecorationSrc: l,
      avatarPlaceholderSrc: r,
      eventHandlers: u
    } = (0, o.default)({
      user: s,
      avatarDecorationOverride: e,
      size: h
    });
    return (0, i.jsx)("div", {
      className: f.avatarDecorationPreview,
      children: (0, i.jsx)(n.Avatar, {
        ...u,
        "aria-label": e.label,
        src: r,
        avatarDecoration: l,
        size: p
      })
    })
  },
  C = t => {
    let {
      item: e
    } = t;
    return (0, i.jsx)("div", {
      className: f.profileEffectPreview,
      children: (0, i.jsx)(u.default, {
        isHovering: !0,
        profileEffectId: null == e ? void 0 : e.id
      })
    })
  };
var S = t => {
  let {
    giftCode: e
  } = t, s = (0, a.useStateFromStores)([c.default], () => c.default.getProduct(e.skuId)), n = null == s ? void 0 : s.items[0];
  return (0, i.jsxs)(i.Fragment, {
    children: [(null == n ? void 0 : n.type) === l.CollectiblesItemType.AVATAR_DECORATION && (0, i.jsx)(m, {
      item: n
    }), (null == n ? void 0 : n.type) === l.CollectiblesItemType.PROFILE_EFFECT && (0, i.jsx)(C, {
      item: n
    })]
  })
}