"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("550410");

function i(e) {
  let {
    children: t
  } = e, {
    preventIdle: n,
    allowIdle: i
  } = (0, s.usePreventIdle)("popup");
  return l.useEffect(() => (n(), () => i()), [i, n]), (0, a.jsx)(a.Fragment, {
    children: t
  })
}