"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("37983");
n("884691");
var s = n("65597"),
  l = n("880731");

function r(e) {
  let {
    children: t,
    confettiLocation: n
  } = e, r = (0, s.default)([l.default], () => l.default.isEnabled({
    confettiLocation: n
  }));
  return r ? (0, i.jsx)(i.Fragment, {
    children: t
  }) : null
}