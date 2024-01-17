"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("37983");
s("884691");
var n = s("90915"),
  l = s("86621"),
  i = s("788188"),
  r = s("49111"),
  u = (0, l.default)(function() {
    return (0, a.jsxs)(n.Switch, {
      children: [(0, a.jsx)(n.Route, {
        path: r.Routes.APPLICATION_STORE,
        exact: !0,
        render: () => (0, a.jsx)(i.default, {})
      }), (0, a.jsx)(n.Redirect, {
        to: r.Routes.APP
      })]
    })
  })