"use strict";
r.r(t), r.d(t, {
  default: function() {
    return o
  }
});
var a = r("37983");
r("884691");
var n = r("77078"),
  i = r("106435"),
  s = r("50885"),
  u = r("782340");
let l = s.default.getEnableHardwareAcceleration() ? n.AnimatedAvatar : n.Avatar;
var o = e => {
  let {
    user: t,
    avatarDecorationOverride: r,
    status: s,
    avatarSize: o = n.AvatarSizes.SIZE_120,
    "aria-hidden": c = !1
  } = e, {
    avatarDecorationSrc: d,
    avatarSrc: E,
    eventHandlers: _
  } = (0, i.default)({
    user: t,
    size: o,
    showPending: !0,
    avatarDecorationOverride: r
  });
  return (0, a.jsx)(l, {
    avatarDecoration: d,
    src: E,
    size: o,
    status: s,
    "aria-label": c ? void 0 : u.default.Messages.USER_SETTINGS_AVATAR,
    "aria-hidden": c,
    ..._
  })
}