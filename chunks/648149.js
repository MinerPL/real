"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  s = n("224038");

function i(e) {
  let {
    user: t,
    nickname: n
  } = e, i = null != n;
  return (0, a.jsx)(l.Avatar, {
    src: t.getAvatarURL(void 0, i ? 16 : 24),
    size: i ? l.AvatarSizes.SIZE_16 : l.AvatarSizes.SIZE_24,
    className: i ? s.miniAvatar : s.largeAvatar,
    "aria-hidden": !0
  })
}