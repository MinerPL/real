"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("37983");
s("884691");
var n = s("90915"),
  r = s("86621"),
  l = s("788188"),
  i = s("49111"),
  u = (0, r.default)(function() {
    return (0, a.jsxs)(n.Switch, {
      children: [(0, a.jsx)(n.Route, {
        path: i.Routes.APPLICATION_STORE,
        exact: !0,
        render: () => (0, a.jsx)(l.default, {})
      }), (0, a.jsx)(n.Redirect, {
        to: i.Routes.APP
      })]
    })
  })