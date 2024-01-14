"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("90915"),
  l = n("901582"),
  r = n("73749"),
  o = n("69927"),
  u = n("970366"),
  d = n("661804"),
  c = n("928056"),
  E = n("49111"),
  f = n("782340"),
  _ = n("312079");

function h() {
  return (0, a.jsxs)(i.Switch, {
    children: [(0, a.jsx)(r.default, {
      path: E.Routes.APPLICATION_LIBRARY_SETTINGS,
      exact: !0,
      children: (0, a.jsxs)(l.default, {
        page: E.AnalyticsPages.LIBRARY_SETTINGS,
        root: !0,
        children: [(0, a.jsx)(o.AppPageTitle, {
          subsection: f.default.Messages.SETTINGS
        }), (0, a.jsx)(c.default, {})]
      })
    }), (0, a.jsx)(r.default, {
      path: E.Routes.APPLICATION_LIBRARY,
      children: (0, a.jsxs)(l.default, {
        page: E.AnalyticsPages.LIBRARY,
        root: !0,
        children: [(0, a.jsx)(o.AppPageTitle, {
          subsection: f.default.Messages.APPLICATION_LIBRARY_MY_GAMES
        }), (0, a.jsx)(d.default, {})]
      })
    })]
  })
}
var C = s.memo(function() {
  return s.useEffect(() => {
    (0, u.trackAppUIViewed)("application_library")
  }, []), (0, a.jsxs)("div", {
    className: _.container,
    children: [(0, a.jsx)(o.AppPageTitle, {
      location: f.default.Messages.LIBRARY
    }), (0, a.jsx)(h, {})]
  })
})