"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var n = l("37983");
l("884691");
var a = l("414456"),
  s = l.n(a),
  i = l("77078"),
  r = l("581583"),
  o = l("777003"),
  u = l("782340"),
  d = l("259236"),
  c = l("814076");

function f(e) {
  let {
    user: t,
    guild: l,
    guildMember: a,
    showBorder: f
  } = e;
  return null == l || null == a ? null : (0, n.jsxs)(o.default, {
    children: [(0, n.jsx)(i.Heading, {
      variant: "eyebrow",
      className: c.title,
      children: u.default.Messages.ROLES_LIST.format({
        numRoles: a.roles.length
      })
    }), (0, n.jsx)(r.default, {
      roleClassName: s(d.rolePill, {
        [d.rolePillBorder]: f
      }),
      className: d.roles,
      guild: l,
      user: t,
      userRoles: a.roles,
      disableBorderColor: !0
    }, "roles")]
  })
}