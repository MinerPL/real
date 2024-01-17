"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
});
var r = s("37983"),
  n = s("884691"),
  a = s("77078"),
  i = s("390236"),
  l = n.memo(function(e) {
    var t, s, l, o;
    let {
      user: u,
      size: d = a.AvatarSizes.SIZE_32,
      animate: c = !1,
      "aria-hidden": p = !1,
      ...h
    } = e, S = n.useContext(i.default);
    return (0, r.jsx)(a.Avatar, {
      src: (t = u, s = (0, a.getAvatarSize)(d), l = c, o = S, t.getAvatarURL(o, s, l)),
      size: d,
      "aria-label": p ? void 0 : u.username,
      "aria-hidden": p,
      ...h
    })
  })