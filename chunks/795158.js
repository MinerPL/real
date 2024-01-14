"use strict";
r.r(t), r.d(t, {
  default: function() {
    return o
  }
});
var a = r("37983");
r("884691");
var n = r("77078"),
  s = r("106435"),
  u = r("50885"),
  i = r("782340");
let l = u.default.getEnableHardwareAcceleration() ? n.AnimatedAvatar : n.Avatar;
var o = e => {
  let {
    user: t,
    avatarDecorationOverride: r,
    status: u,
    avatarSize: o = n.AvatarSizes.SIZE_120,
    "aria-hidden": c = !1
  } = e, {
    avatarDecorationSrc: d,
    avatarSrc: E,
    eventHandlers: _
  } = (0, s.default)({
    user: t,
    size: o,
    showPending: !0,
    avatarDecorationOverride: r
  });
  return (0, a.jsx)(l, {
    avatarDecoration: d,
    src: E,
    size: o,
    status: u,
    "aria-label": c ? void 0 : i.default.Messages.USER_SETTINGS_AVATAR,
    "aria-hidden": c,
    ..._
  })
}