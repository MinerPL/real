"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
});
var l = a("37983");
a("884691");
var n = a("669491"),
  s = a("956089"),
  d = a("782340");

function i(e) {
  let {
    className: t,
    color: a = n.default.unsafe_rawColors.BRAND_500.css,
    ...i
  } = e;
  return (0, l.jsx)(s.TextBadge, {
    ...i,
    text: d.default.Messages.BETA,
    color: a,
    className: t
  })
}