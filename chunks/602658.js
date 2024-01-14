"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("37983");
n("884691");
var l = n("509043"),
  r = n("405645"),
  o = n("483093"),
  s = n("339023"),
  u = n("49111");

function a(e) {
  var t;
  let {
    guildId: n,
    role: a,
    size: c,
    className: d
  } = e, f = (0, r.useRoleIcon)({
    guildId: n,
    roleId: a.id,
    size: c
  });
  return null != f ? (0, i.jsx)(o.default, {
    className: d,
    ...f
  }) : (0, i.jsx)(s.default, {
    color: null !== (t = a.colorString) && void 0 !== t ? t : (0, l.int2hex)(u.DEFAULT_ROLE_COLOR),
    className: d,
    size: c
  })
}