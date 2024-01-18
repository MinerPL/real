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
  s = n("838446"),
  i = n("158534"),
  l = n("846883"),
  d = n("812204"),
  o = n("243288"),
  f = n("321135"),
  c = n("873254"),
  m = n("861370"),
  h = n("726750"),
  p = n("170990"),
  v = n("304582"),
  g = n("72057"),
  M = n("489836"),
  x = n("406703"),
  S = n("343856"),
  j = n("502533"),
  _ = n("314838"),
  C = n("383161"),
  I = n("421602"),
  N = n("432487"),
  E = n("151200"),
  T = n("692986"),
  O = n("806179"),
  R = n("816106"),
  A = n("623879"),
  P = n("49111"),
  U = n("782340"),
  G = (0, i.default)((0, s.default)(function(e) {
    var t;
    let {
      user: n,
      channel: s,
      context: i,
      showChatItems: d = !0,
      showMediaItems: P = !1,
      showChannelCallItems: G = !1,
      showModalItems: y = !0,
      onSelect: b
    } = e, w = (0, O.default)(n.id, null), L = (0, C.default)(n, null, i), F = (0, E.default)(n.id, s.id), k = (0, I.default)(n.id, i), D = (0, x.default)(n, i), z = (0, g.default)({
      user: n,
      context: i
    }), W = (0, v.default)(n), B = (0, R.default)(n.id), H = (0, N.default)(n.id, s.id), Y = (0, T.default)(n.id), X = (0, j.default)(n.id, s.id), Z = (0, _.default)(n), V = (0, l.default)(null, n), q = (0, p.default)(n), J = (0, M.default)(n), K = (0, m.default)({
      id: n.id,
      label: U.default.Messages.COPY_ID_USER
    }), Q = (0, A.default)(n.id), $ = (0, f.default)(n.id), ee = (0, o.default)(s.id), et = (0, h.default)(n), en = (0, c.default)(n.id), ea = (0, S.default)(n, s), eu = n.isNonUserBot(), er = s.isManaged(), es = null === (t = s.recipients) || void 0 === t ? void 0 : t.includes(n.id);
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
        }), es && (0, a.jsxs)(u.MenuGroup, {
          children: [!er && H, ea]
        }), (0, a.jsx)(u.MenuGroup, {
          children: y && V
        }), (0, a.jsxs)(u.MenuGroup, {
          children: [P && Y, P && X, y && Z, q, y && J, P && en]
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