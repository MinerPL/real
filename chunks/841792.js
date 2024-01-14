"use strict";
s.r(t), s.d(t, {
  default: function() {
    return a
  }
}), s("222007");
var o = s("37983"),
  i = s("884691"),
  l = s("446674"),
  n = s("206230"),
  C = s("491605");

function a(e) {
  let {
    animationData: t,
    className: s
  } = e, [a, r] = (0, i.useState)(0), d = (0, l.useStateFromStores)([n.default], () => n.default.useReducedMotion);
  return (0, i.useEffect)(() => {
    let e = a + 1;
    e < t.length && t[e]()
  }, [a, t]), (0, o.jsx)(C.default, {
    importData: t[a],
    className: s,
    shouldAnimate: !d,
    versionKey: a,
    onComplete: () => {
      a < t.length - 1 && r(a + 1)
    },
    loop: a === t.length - 1
  })
}