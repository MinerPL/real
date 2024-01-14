"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("560437"),
  r = s("441762"),
  o = function(e) {
    let {
      className: t,
      hasCooldown: n,
      isCanceled: o,
      useReducedMotion: d
    } = e;
    return (0, a.jsxs)("div", {
      className: l(r.boostIconContainer, t),
      children: [o ? (0, a.jsx)("img", {
        className: l(r.boostIcon, r.boostIconCanceled),
        src: s("430208"),
        alt: ""
      }) : (0, a.jsx)(i.default, {
        className: r.boostIcon,
        boostInCooldown: n,
        useReducedMotion: d
      }), !o && n && (0, a.jsx)("img", {
        className: r.snowflake,
        src: s("203705"),
        alt: ""
      })]
    })
  }