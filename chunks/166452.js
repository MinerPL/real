"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
});
var a = n("37983");
n("884691");
var u = n("77078"),
  r = n("272030"),
  i = n("838446"),
  l = n("158534"),
  s = n("846883"),
  d = n("812204"),
  o = n("243288"),
  c = n("321135"),
  f = n("873254"),
  m = n("861370"),
  v = n("726750"),
  h = n("170990"),
  p = n("304582"),
  M = n("72057"),
  g = n("489836"),
  x = n("406703"),
  S = n("343856"),
  _ = n("502533"),
  j = n("314838"),
  I = n("383161"),
  N = n("421602"),
  T = n("432487"),
  C = n("151200"),
  E = n("692986"),
  O = n("806179"),
  R = n("816106"),
  A = n("623879"),
  P = n("49111"),
  U = n("782340"),
  G = (0, l.default)((0, i.default)(function(e) {
    var t;
    let {
      user: n,
      channel: i,
      context: l,
      showChatItems: d = !0,
      showMediaItems: P = !1,
      showChannelCallItems: G = !1,
      showModalItems: y = !0,
      onSelect: b
    } = e, w = (0, O.default)(n.id, null), L = (0, I.default)(n, null, l), F = (0, C.default)(n.id, i.id), k = (0, N.default)(n.id, l), D = (0, x.default)(n, l), z = (0, M.default)({
      user: n,
      context: l
    }), W = (0, p.default)(n), B = (0, R.default)(n.id), H = (0, T.default)(n.id, i.id), V = (0, E.default)(n.id), Y = (0, _.default)(n.id, i.id), X = (0, j.default)(n), Z = (0, s.default)(null, n), q = (0, h.default)(n), J = (0, g.default)(n), K = (0, m.default)({
      id: n.id,
      label: U.default.Messages.COPY_ID_USER
    }), Q = (0, A.default)(n.id), $ = (0, c.default)(n.id), ee = (0, o.default)(i.id), et = (0, v.default)(n), en = (0, f.default)(n.id), ea = (0, S.default)(n, i), eu = n.isNonUserBot(), er = i.isManaged(), ei = null === (t = i.recipients) || void 0 === t ? void 0 : t.includes(n.id);
    return (0, a.jsxs)(u.Menu, {
      navId: "user-context",
      onClose: r.closeContextMenu,
      "aria-label": U.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: b,
      children: [!eu && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.MenuGroup, {
          children: et
        }), (0, a.jsxs)(u.MenuGroup, {
          children: [y && w, d && L, k, D, !er && F, y && z, y && W, Q]
        }), P && (0, a.jsx)(u.MenuGroup, {
          children: B
        }), ei && (0, a.jsxs)(u.MenuGroup, {
          children: [!er && H, ea]
        }), (0, a.jsx)(u.MenuGroup, {
          children: y && Z
        }), (0, a.jsxs)(u.MenuGroup, {
          children: [P && V, P && Y, y && X, q, y && J, P && en]
        }), G && (0, a.jsxs)(u.MenuGroup, {
          children: [ee, $]
        })]
      }), (0, a.jsx)(u.MenuGroup, {
        children: K
      })]
    })
  }, {
    object: P.AnalyticsObjects.CONTEXT_MENU
  }), [d.default.CONTEXT_MENU, d.default.GROUP_DM_USER_MENU])