"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var u = n("37983");
n("884691");
var a = n("118810"),
  r = n("77078"),
  s = n("272030"),
  l = n("861370"),
  i = n("152298"),
  c = n("26051"),
  d = n("667358"),
  o = n("518155"),
  f = n("718381"),
  h = n("875834"),
  M = n("780657"),
  p = n("782340");

function E(e) {
  var t;
  let n, E, I, {
      channel: S,
      message: m,
      target: v,
      attachment: _,
      onSelect: x
    } = e,
    N = v;
  if (null != _) E = n = _.url;
  else
    for (;
      (0, a.isElement)(N);)(0, a.isElement)(N, HTMLImageElement) && null != N.src && (E = N.src), (0, a.isElement)(N, HTMLAnchorElement) && null != N.href && (n = N.href, I = N.textContent), N = N.parentNode;
  let A = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString(),
    g = (0, i.default)(A),
    G = (0, d.default)(A),
    O = (0, M.default)(m, S),
    C = (0, h.default)(m, S),
    j = (0, o.default)(m, S),
    T = (0, f.default)(m, S),
    P = (0, c.default)(null != n ? n : E, I),
    y = (0, l.default)({
      id: m.id,
      label: p.default.Messages.COPY_ID_MESSAGE,
      shiftId: "".concat(m.channel_id, "-").concat(m.id)
    }),
    R = (0, l.default)({
      id: m.author.id,
      label: p.default.Messages.COPY_ID_AUTHOR
    });
  return (0, u.jsxs)(r.Menu, {
    navId: "message",
    onClose: s.closeContextMenu,
    "aria-label": p.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    onSelect: x,
    children: [(0, u.jsx)(r.MenuGroup, {
      children: g
    }), (0, u.jsx)(r.MenuGroup, {
      children: G
    }), (0, u.jsxs)(r.MenuGroup, {
      children: [O, C, j, T]
    }), (0, u.jsx)(r.MenuGroup, {
      children: P
    }), (0, u.jsxs)(r.MenuGroup, {
      children: [y, R]
    })]
  })
}