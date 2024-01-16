"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var i = n("37983");
n("884691");
var r = n("65597"),
  s = n("880731");

function l(e) {
  let {
    children: t,
    confettiLocation: n
  } = e, l = (0, r.default)([s.default], () => s.default.isEnabled({
    confettiLocation: n
  }));
  return l ? (0, i.jsx)(i.Fragment, {
    children: t
  }) : null
}