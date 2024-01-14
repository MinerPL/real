"use strict";
s.r(t), s.d(t, {
  default: function() {
    return a
  }
});
var n = s("37983");
s("884691");
var r = s("75196");

function a(e) {
  let {
    width: t = 14,
    height: s = 14,
    color: a = "currentColor",
    foreground: l,
    ...i
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, r.default)(i),
    width: t,
    height: s,
    viewBox: "0 0 14 14",
    children: (0, n.jsx)("path", {
      className: l,
      fill: a,
      d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z"
    })
  })
}