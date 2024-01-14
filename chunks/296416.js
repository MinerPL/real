"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a, n, l = s("37983");
s("884691");
var i = s("217928"),
  r = s("945330"),
  o = s("982624");
(a = n || (n = {})).ARROW_DOWN = "arrow_down", a.CROSS = "cross";

function d(e) {
  let {
    type: t
  } = e;
  return (0, l.jsx)("div", {
    className: o.dividerContainer,
    children: (0, l.jsx)("div", {
      className: o.dividerIconContainer,
      children: function(e) {
        switch (e) {
          case "arrow_down":
            return (0, l.jsx)(i.default, {
              width: 24,
              height: 24,
              className: o.dividierIcon
            });
          case "cross":
            return (0, l.jsx)(r.default, {
              width: 24,
              height: 24,
              className: o.dividierIcon
            });
          default:
            return null
        }
      }(t)
    })
  })
}
d.Type = n