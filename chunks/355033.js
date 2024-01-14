"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var i = s("37983");
s("884691");
var n = s("265586"),
  a = s("446674"),
  o = s("77078"),
  u = s("606292"),
  r = s("688318"),
  l = s("601095"),
  c = s("697218"),
  d = s("853987"),
  p = s("929392");
let f = o.AvatarSizes.SIZE_152,
  m = (0, u.getDecorationSizeForAvatarSize)(f),
  h = e => {
    let {
      item: t
    } = e, s = (0, a.useStateFromStores)([c.default], () => c.default.getCurrentUser()), {
      avatarDecorationSrc: n,
      avatarPlaceholderSrc: u,
      eventHandlers: l
    } = (0, r.default)({
      user: s,
      avatarDecorationOverride: t,
      size: m
    });
    return (0, i.jsx)("div", {
      className: p.avatarDecorationPreview,
      children: (0, i.jsx)(o.Avatar, {
        ...l,
        "aria-label": t.label,
        src: u,
        avatarDecoration: n,
        size: f
      })
    })
  },
  _ = e => {
    let {
      item: t
    } = e;
    return (0, i.jsx)("div", {
      className: p.profileEffectPreview,
      children: (0, i.jsx)(l.default, {
        isHovering: !0,
        profileEffectId: null == t ? void 0 : t.id
      })
    })
  };
var g = e => {
  let {
    giftCode: t
  } = e, s = (0, a.useStateFromStores)([d.default], () => d.default.getProduct(t.skuId)), o = null == s ? void 0 : s.items[0];
  return (0, i.jsxs)(i.Fragment, {
    children: [(null == o ? void 0 : o.type) === n.CollectiblesItemType.AVATAR_DECORATION && (0, i.jsx)(h, {
      item: o
    }), (null == o ? void 0 : o.type) === n.CollectiblesItemType.PROFILE_EFFECT && (0, i.jsx)(_, {
      item: o
    })]
  })
}