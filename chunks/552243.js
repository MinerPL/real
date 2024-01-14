"use strict";
t.r(a), t.d(a, {
  default: function() {
    return s
  }
});
var l = t("37983");
t("884691");
var i = t("907002"),
  n = t("65597"),
  r = t("206230"),
  s = e => {
    let {
      children: a,
      initTranslate3d: t
    } = e, s = (0, n.default)([r.default], () => r.default.useReducedMotion), o = (0, i.useSpring)({
      immediate: s,
      from: {
        transform: t
      },
      to: {
        transform: "translate3d(0, 0, 0)"
      }
    });
    return (0, l.jsx)(i.animated.div, {
      style: o,
      children: a
    })
  }