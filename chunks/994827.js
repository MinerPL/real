"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  i = n("272030"),
  u = n("158534"),
  r = n("812204"),
  s = n("861370"),
  d = n("972701"),
  o = n("30874"),
  f = n("458574"),
  c = n("308798"),
  _ = n("44141"),
  E = n("530101"),
  T = n("64016"),
  S = n("13777"),
  h = n("37774"),
  C = n("117399"),
  g = n("400501"),
  N = n("542640"),
  m = n("255228"),
  M = n("772371"),
  A = n("604656"),
  I = n("782340"),
  v = (0, u.default)(function(e) {
    let {
      channel: t,
      onSelect: n
    } = e, u = (0, f.default)(t), r = (0, _.default)(t), v = (0, m.default)(t), p = (0, o.default)(t), O = (0, h.default)(t), U = (0, c.default)(t), F = (0, s.default)({
      id: t.id,
      label: I.default.Messages.COPY_ID_THREAD
    }), L = (0, T.default)(t, "Context Menu"), R = (0, C.default)(t), G = (0, M.default)(t), y = (0, g.default)(t), D = (0, N.default)(t.id), b = (0, S.default)(t), P = (0, A.default)(t), x = (0, E.default)(t, {
      hoist: !0
    }), H = (0, d.useAddToFavoritesItem)(t), j = (0, d.useRemoveFromFavoritesItem)(t);
    return (0, a.jsxs)(l.Menu, {
      navId: "thread-context",
      onClose: i.closeContextMenu,
      "aria-label": I.default.Messages.THREAD_ACTIONS_MENU_LABEL,
      onSelect: n,
      children: [(0, a.jsx)(l.MenuGroup, {
        children: r
      }, "mark-as-read"), (0, a.jsxs)(l.MenuGroup, {
        children: [L, b, p, O, y, D, u, H]
      }, "thread-actions"), (0, a.jsxs)(l.MenuGroup, {
        children: [v, G]
      }, "notifications"), (0, a.jsx)(l.MenuGroup, {
        children: j
      }), (0, a.jsxs)(l.MenuGroup, {
        children: [P, x, R, U]
      }, "admin-actions"), (0, a.jsx)(l.MenuGroup, {
        children: F
      }, "developer-actions")]
    })
  }, [r.default.CONTEXT_MENU, r.default.CHANNEL_LIST_THREAD_MENU])