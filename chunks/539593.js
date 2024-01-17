"use strict";
l.r(t), l.d(t, {
  default: function() {
    return L
  }
});
var u = l("37983");
l("884691");
var a = l("77078"),
  d = l("272030"),
  n = l("838446"),
  s = l("158534"),
  i = l("846883"),
  o = l("812204"),
  r = l("861370"),
  c = l("230947"),
  f = l("823026"),
  M = l("170990"),
  E = l("304582"),
  g = l("72057"),
  A = l("300925"),
  S = l("489836"),
  _ = l("406703"),
  v = l("314838"),
  p = l("383161"),
  N = l("421602"),
  T = l("459870"),
  m = l("692986"),
  U = l("806179"),
  I = l("97508"),
  b = l("816106"),
  O = l("623879"),
  C = l("49111"),
  x = l("782340"),
  L = (0, s.default)((0, n.default)(function(e) {
    let {
      user: t,
      guildId: l,
      showModalItems: n = !0,
      showMediaItems: s = !1,
      showChatItems: o = !0,
      context: L,
      onSelect: D
    } = e, h = (0, U.default)(t.id, l), j = (0, p.default)(t, l, L), V = (0, N.default)(t.id, L), G = (0, O.default)(t.id), R = (0, _.default)(t, L), k = (0, g.default)({
      user: t,
      guildId: l,
      context: L
    }), P = (0, E.default)(t), B = (0, b.default)(t.id), F = (0, m.default)(t.id), y = (0, c.default)({
      guildId: l,
      userId: t.id,
      analyticsLocation: {
        page: C.AnalyticsPages.GUILD_CHANNEL,
        section: C.AnalyticsSections.CHAT_USERNAME,
        object: C.AnalyticsObjects.CONTEXT_MENU_ITEM
      },
      context: L
    }), w = (0, f.default)({
      user: t,
      guildId: l
    }), H = (0, v.default)(t, l), X = (0, i.default)(null, t), Y = (0, M.default)(t), z = (0, S.default)(t), Z = (0, A.default)(t, l), W = (0, I.default)(t.id, l), q = (0, T.default)(t, l), J = (0, r.default)({
      id: t.id,
      label: x.default.Messages.COPY_ID_USER
    }), K = t.isNonUserBot();
    return (0, u.jsxs)(a.Menu, {
      navId: "user-context",
      onClose: d.closeContextMenu,
      "aria-label": x.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: D,
      children: [!K && (0, u.jsxs)(u.Fragment, {
        children: [(0, u.jsxs)(a.MenuGroup, {
          children: [n && h, o && j, V, R, n && k, n && P, G]
        }), s && (0, u.jsx)(a.MenuGroup, {
          children: B
        }), (0, u.jsx)(a.MenuGroup, {
          children: n && X
        }), (0, u.jsxs)(a.MenuGroup, {
          children: [s && F, n && y, n && H, Y, w, n && z]
        }), (0, u.jsx)(a.MenuGroup, {
          children: Z
        }), (0, u.jsxs)(a.MenuGroup, {
          children: [W, q]
        })]
      }), (0, u.jsx)(a.MenuGroup, {
        children: J
      })]
    })
  }, {
    object: C.AnalyticsObjects.CONTEXT_MENU
  }), [o.default.CONTEXT_MENU, o.default.GUILD_USER_MENU])