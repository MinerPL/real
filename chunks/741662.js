"use strict";
n.r(t), n.d(t, {
  HiddenVisually: function() {
    return o
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  a = n("919089");

function o(e) {
  let {
    id: t,
    tag: n = "span",
    showOnFocus: r,
    children: o
  } = e;
  return (0, i.jsx)(n, {
    id: t,
    className: s({
      [a.hiddenVisually]: !r,
      [a.showOnFocus]: r
    }),
    children: o
  })
}