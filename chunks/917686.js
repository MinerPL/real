"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  i = n("77078"),
  r = n("945330"),
  o = n("317134"),
  u = n("382377");

function d(e) {
  let {
    className: t,
    roleColor: n,
    roleName: a,
    hasRemoveIcon: d = !1,
    onClick: c,
    disabled: f = !1,
    verified: h = !1
  } = e;
  return (0, s.jsx)(i.Button, {
    className: l(t, u.button),
    look: i.Button.Looks.BLANK,
    size: i.Button.Sizes.NONE,
    onClick: c,
    disabled: f,
    children: (0, s.jsx)(o.default, {
      className: u.role,
      roleColor: n,
      roleName: a,
      verified: h,
      children: d && (0, s.jsx)(r.default, {
        height: 6,
        width: 6,
        className: u.removeRole,
        foreground: u.removeRoleIcon
      })
    })
  })
}