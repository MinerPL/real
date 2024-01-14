"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
});
var n = a("37983");
a("884691");
var l = a("446674"),
  i = a("77078"),
  u = a("272030"),
  r = a("299285"),
  d = a("443070"),
  s = a("686470"),
  c = a("845266"),
  o = a("615019"),
  f = a("433294"),
  I = a("883378"),
  A = a("423219"),
  _ = a("359327"),
  T = a("170616"),
  E = a("75967"),
  N = a("517033"),
  p = a("49111"),
  L = a("782340");

function C(e) {
  let {
    application: t,
    libraryApplication: a,
    analyticsContext: l,
    onSelect: r
  } = e, d = null != l ? l.location : null, s = {
    ...d,
    object: p.AnalyticsObjects.CONTEXT_MENU
  }, C = (0, I.default)(a, s), g = (0, A.default)(a), M = (0, T.default)(a), O = (0, N.default)(a), b = (0, E.default)(a), P = (0, f.default)(a, t), S = (0, _.default)(a, t), h = (0, c.default)(a, t), m = (0, o.default)(t);
  return (0, n.jsxs)(i.Menu, {
    navId: "game-context",
    onClose: u.closeContextMenu,
    "aria-label": L.default.Messages.APPLICATION_ACTIONS_MENU_LABEL,
    onSelect: r,
    children: [C, g, M, O, b, P, S, (0, n.jsx)(i.MenuGroup, {
      children: h
    }), (0, n.jsx)(i.MenuGroup, {
      children: m
    })]
  })
}

function g(e) {
  let {
    applicationId: t,
    branchId: a
  } = e, i = (0, l.useStateFromStores)([r.default], () => r.default.getApplication(t), [t]), u = (0, l.useStateFromStores)([s.default], () => null != a ? s.default.getLibraryApplication(t, a) : s.default.getActiveLibraryApplication(t), [t, a]);
  return null == i || null == u ? (0, n.jsx)(d.default, {
    ...e,
    id: t,
    label: L.default.Messages.COPY_ID_APPLICATION
  }) : (0, n.jsx)(C, {
    ...e,
    application: i,
    libraryApplication: u
  })
}