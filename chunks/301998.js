"use strict";
l.r(t), l.d(t, {
  default: function() {
    return d
  }
});
var n = l("37983");
l("884691");
var a = l("77078"),
  s = l("910330"),
  i = l("777003"),
  r = l("782340"),
  o = l("920244"),
  u = l("814076");

function d(e) {
  let {
    user: t,
    setNote: l,
    autoFocus: d,
    lastSection: c,
    hideNote: f
  } = e;
  return f ? null : (0, n.jsxs)(i.default, {
    lastSection: c,
    children: [(0, n.jsx)(a.Heading, {
      variant: "eyebrow",
      className: u.title,
      children: r.default.Messages.NOTE
    }), (0, n.jsx)(s.default, {
      userId: t.id,
      autoFocus: l || d,
      className: o.note
    }, "note")]
  })
}