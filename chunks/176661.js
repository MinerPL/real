"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("106435"),
  l = n("50885"),
  r = n("25132"),
  o = n("884706"),
  u = n("420386");
let d = l.default.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;

function c(e) {
  let {
    otherUser: t,
    status: n
  } = e, l = (0, r.useLinkTimestampText)(t.id, n), {
    avatarSrc: c,
    avatarDecorationSrc: E,
    eventHandlers: f
  } = (0, i.default)({
    user: t,
    size: s.AvatarSizes.SIZE_40,
    animateOnHover: !0
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      ...f,
      children: (0, a.jsx)(d, {
        className: u.avatar,
        src: c,
        avatarDecoration: E,
        size: s.AvatarSizes.SIZE_40,
        "aria-label": t.username
      })
    }), (0, a.jsxs)("div", {
      className: u.userPreview,
      children: [(0, a.jsx)("div", {
        className: u.userContainerWithTimestamp,
        children: (0, a.jsx)(o.default, {
          user: t
        })
      }), (0, a.jsx)(s.Text, {
        className: u.timestamp,
        color: "text-muted",
        variant: "text-xs/normal",
        children: l
      })]
    })]
  })
}