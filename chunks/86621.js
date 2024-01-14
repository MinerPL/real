"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("599110");

function i(e) {
  var t;
  let n = a.forwardRef((t, n) => (0, l.jsx)(s.AnalyticsContext.Consumer, {
    children: a => (0, l.jsx)(e, {
      ...t,
      ref: n,
      analyticsContext: a
    })
  }));
  return n.displayName = "withAnalyticsContext(".concat(null !== (t = e.displayName) && void 0 !== t ? t : e.name, ")"), n
}