"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var a = l("37983"),
  n = l("884691"),
  r = l("446674"),
  i = l("471671"),
  u = l("232268"),
  s = l("759432"),
  o = l("798592");

function d(e) {
  let {
    confettiSpawnRef: t,
    shouldFire: l
  } = e, a = (0, r.useStateFromStores)([i.default], () => i.default.isFocused()), u = (0, o.default)(), d = (0, s.default)(t);
  return n.useEffect(() => {
    a && l && null != d && u.fire(d.x, d.y)
  }, [u, a, d, l]), null
}

function c(e) {
  return (0, a.jsx)(u.default, {
    confettiLocation: e.confettiLocation,
    children: (0, a.jsx)(d, {
      ...e
    })
  })
}