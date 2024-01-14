"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("383957");

function r(e) {
  let {
    children: t,
    lastSection: n = !1,
    className: l,
    ...r
  } = e;
  return (0, a.jsx)("div", {
    className: s(i.section, l, {
      [i.lastSection]: n
    }),
    ...r,
    children: t
  })
}