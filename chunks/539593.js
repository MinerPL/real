"use strict";
l.r(t), l.d(t, {
  default: function() {
    return O
  }
});
var u = l("37983");
l("884691");
var n = l("77078"),
  i = l("272030"),
  d = l("838446"),
  a = l("158534"),
  s = l("846883"),
  o = l("812204"),
  r = l("861370"),
  c = l("230947"),
  f = l("823026"),
  p = l("170990"),
  v = l("304582"),
  A = l("72057"),
  M = l("300925"),
  E = l("489836"),
  I = l("406703"),
  N = l("314838"),
  S = l("383161"),
  U = l("421602"),
  _ = l("459870"),
  G = l("692986"),
  g = l("806179"),
  h = l("97508"),
  j = l("816106"),
  x = l("623879"),
  T = l("49111"),
  C = l("782340"),
  O = (0, a.default)((0, d.default)(function(e) {
    let {
      user: t,
      guildId: l,
      showModalItems: d = !0,
      showMediaItems: a = !1,
      showChatItems: o = !0,
      context: O,
      onSelect: b
    } = e, m = (0, g.default)(t.id, l), P = (0, S.default)(t, l, O), L = (0, U.default)(t.id, O), R = (0, x.default)(t.id), k = (0, I.default)(t, O), D = (0, A.default)({
      user: t,
      guildId: l,
      context: O
    }), y = (0, v.default)(t), H = (0, j.default)(t.id), X = (0, G.default)(t.id), w = (0, c.default)({
      guildId: l,
      userId: t.id,
      analyticsLocation: {
        page: T.AnalyticsPages.GUILD_CHANNEL,
        section: T.AnalyticsSections.CHAT_USERNAME,
        object: T.AnalyticsObjects.CONTEXT_MENU_ITEM
      },
      context: O
    }), z = (0, f.default)({
      user: t,
      guildId: l
    }), B = (0, N.default)(t, l), F = (0, s.default)(null, t), Z = (0, p.default)(t), Y = (0, E.default)(t), q = (0, M.default)(t, l), J = (0, h.default)(t.id, l), K = (0, _.default)(t, l), Q = (0, r.default)({
      id: t.id,
      label: C.default.Messages.COPY_ID_USER
    }), V = t.isNonUserBot();
    return (0, u.jsxs)(n.Menu, {
      navId: "user-context",
      onClose: i.closeContextMenu,
      "aria-label": C.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: b,
      children: [!V && (0, u.jsxs)(u.Fragment, {
        children: [(0, u.jsxs)(n.MenuGroup, {
          children: [d && m, o && P, L, k, d && D, d && y, R]
        }), a && (0, u.jsx)(n.MenuGroup, {
          children: H
        }), (0, u.jsx)(n.MenuGroup, {
          children: d && F
        }), (0, u.jsxs)(n.MenuGroup, {
          children: [a && X, d && w, d && B, Z, z, d && Y]
        }), (0, u.jsx)(n.MenuGroup, {
          children: q
        }), (0, u.jsxs)(n.MenuGroup, {
          children: [J, K]
        })]
      }), (0, u.jsx)(n.MenuGroup, {
        children: Q
      })]
    })
  }, {
    object: T.AnalyticsObjects.CONTEXT_MENU
  }), [o.default.CONTEXT_MENU, o.default.GUILD_USER_MENU])