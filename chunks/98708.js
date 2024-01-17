"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("37983");
n("884691");
var s = n("446674"),
  i = n("77078"),
  l = n("145079"),
  r = n("206230"),
  o = n("606292"),
  u = n("688318"),
  d = n("843962"),
  c = n("27618"),
  f = n("158998"),
  E = n("50885"),
  _ = n("91830"),
  h = n("214621"),
  C = n("782340"),
  I = n("556559");
let T = E.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

function S(e) {
  var t;
  let {
    channel: n,
    otherUser: E,
    active: S
  } = e, m = (0, s.useStateFromStores)([r.default], () => r.default.useReducedMotion), p = (0, s.useStateFromStores)([c.default], () => null == E ? null : c.default.getNickname(E.id)), A = (0, _.useMessageRequestRelativeTimestampText)(n), {
    avatarDecorationSrc: g
  } = (0, u.default)({
    user: E,
    size: (0, o.getDecorationSizeForAvatarSize)(i.AvatarSizes.SIZE_40),
    animateOnHover: !0
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(T, {
      className: I.avatar,
      src: (0, d.getChannelIconURL)(n, 40, !m && S),
      avatarDecoration: g,
      size: i.AvatarSizes.SIZE_40,
      "aria-label": null !== (t = null == E ? void 0 : E.username) && void 0 !== t ? t : C.default.Messages.UNKNOWN_USER
    }), (0, a.jsxs)("div", {
      className: I.userPreview,
      children: [(0, a.jsxs)("div", {
        className: I.userContainerWithPreview,
        children: [(0, a.jsx)(l.default, {
          nick: p,
          user: E,
          showAccountIdentifier: !0,
          className: I.tagContainer,
          usernameClass: I.username,
          discriminatorClass: null != f.default.getGlobalName(E) ? I.globalName : I.discriminator
        }), (0, a.jsx)(i.Text, {
          className: I.timestampWithPreview,
          color: "text-muted",
          variant: "text-xs/normal",
          children: A
        })]
      }), (0, a.jsx)("div", {
        className: I.messagePreview,
        children: (0, a.jsx)(h.default, {
          channel: n
        })
      })]
    })]
  })
}