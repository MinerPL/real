"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
}), a("794252");
var s = a("37983");
a("884691");
var l = a("414456"),
  i = a.n(l),
  n = a("506838"),
  r = a("669491"),
  o = a("77078"),
  d = a("775955"),
  u = a("381546"),
  c = a("341923");
let E = () => (0, s.jsx)(d.default, {
    width: 13,
    height: 13,
    backgroundColor: r.default.colors.TEXT_POSITIVE.css
  }),
  f = () => (0, s.jsx)(u.default, {
    width: 13,
    height: 13,
    color: r.default.colors.TEXT_DANGER.css
  }),
  m = () => (0, s.jsx)(u.default, {
    width: 13,
    height: 13,
    color: r.default.colors.TEXT_WARNING.css
  });

function S(e) {
  let t = (0, n.match)(e.type).with("info", () => (0, s.jsx)(m, {})).with("error", () => (0, s.jsx)(f, {})).with("success", () => (0, s.jsx)(E, {})).otherwise(() => null);
  return (0, s.jsxs)(s.Fragment, {
    children: [t, (0, s.jsx)(o.Text, {
      variant: "text-sm/medium",
      className: i(c.formMessage, {
        [c.formMessageNegative]: "error" === e.type,
        [c.formMessagePositive]: "success" === e.type
      }),
      children: e.children
    })]
  })
}