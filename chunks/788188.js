"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var a = s("37983");
s("884691");
var n = s("90915"),
  l = s("446674"),
  i = s("77078"),
  r = s("901582"),
  u = s("86621"),
  o = s("984376"),
  d = s("812204"),
  c = s("685665"),
  _ = s("539938"),
  E = s("595426"),
  I = s("697218"),
  T = s("145131"),
  f = s("216422"),
  S = s("49111"),
  R = s("646718"),
  m = s("782340"),
  p = s("309285");
let N = l.default.connectStores([I.default], () => ({
  user: I.default.getCurrentUser()
}))((0, o.default)((0, u.default)(e => {
  let {
    AnalyticsLocationProvider: t
  } = (0, c.default)(d.default.HOME_PAGE_PREMIUM_TAB), {
    isAuthenticated: s,
    user: l
  } = e;
  return s ? (0, a.jsxs)("div", {
    className: p.homeWrapperNormal,
    children: [(0, a.jsx)(r.default, {
      section: S.AnalyticsSections.NAVIGATION,
      children: (0, a.jsxs)(_.default, {
        isAuthenticated: s,
        className: p.headerBar,
        children: [(0, a.jsx)(_.default.Icon, {
          icon: f.default,
          "aria-hidden": !0
        }), (0, a.jsx)(_.default.Title, {
          children: m.default.Messages.PREMIUM
        })]
      })
    }), (0, a.jsx)(t, {
      children: null == l ? (0, a.jsx)(T.default, {
        align: T.default.Align.CENTER,
        justify: T.default.Justify.CENTER,
        children: (0, a.jsx)(i.Spinner, {
          className: p.spinner
        })
      }) : (0, a.jsx)(E.default, {
        entrypoint: R.PremiumMarketingEntrypoints.ApplicationStoreHome
      })
    })]
  }) : (0, a.jsx)(n.Redirect, {
    to: S.Routes.LOGIN
  })
})));
var A = N