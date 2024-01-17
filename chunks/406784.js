"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("37983");
n("884691");
var i = n("77078"),
  u = n("272030"),
  a = n("838446"),
  o = n("158534"),
  r = n("846883"),
  d = n("812204"),
  s = n("861370"),
  c = n("726750"),
  f = n("170990"),
  E = n("304582"),
  _ = n("72057"),
  S = n("489836"),
  T = n("406703"),
  p = n("314838"),
  A = n("421602"),
  g = n("692986"),
  N = n("806179"),
  C = n("816106"),
  I = n("623879"),
  O = n("49111"),
  U = n("782340"),
  m = (0, o.default)((0, a.default)(function(e) {
    let {
      user: t,
      showMediaItems: n = !1,
      mediaEngineContext: a,
      onSelect: o
    } = e, d = (0, N.default)(t.id), O = (0, A.default)(t.id), m = (0, T.default)(t), v = (0, _.default)({
      user: t
    }), h = (0, E.default)(t), R = (0, I.default)(t.id), P = (0, C.default)(t.id), y = (0, g.default)(t.id, a), b = (0, p.default)(t), M = (0, r.default)(null, t), D = (0, f.default)(t), L = (0, S.default)(t), w = (0, s.default)({
      id: t.id,
      label: U.default.Messages.COPY_ID_USER
    }), V = (0, c.default)(t), G = t.isNonUserBot();
    return (0, l.jsxs)(i.Menu, {
      navId: "user-context",
      onClose: u.closeContextMenu,
      "aria-label": U.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: o,
      children: [!G && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(i.MenuGroup, {
          children: V
        }), (0, l.jsxs)(i.MenuGroup, {
          children: [d, O, m, v, h, R]
        }), n && (0, l.jsx)(i.MenuGroup, {
          children: P
        }), (0, l.jsx)(i.MenuGroup, {
          children: M
        }), (0, l.jsxs)(i.MenuGroup, {
          children: [n && y, b, D, L]
        })]
      }), (0, l.jsx)(i.MenuGroup, {
        children: w
      })]
    })
  }, {
    object: O.AnalyticsObjects.CONTEXT_MENU
  }), [d.default.CONTEXT_MENU, d.default.USER_GENERIC_MENU])