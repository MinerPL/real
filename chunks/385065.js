"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var i = n("37983");
n("884691");
var l = n("118810"),
  a = n("77078"),
  s = n("272030"),
  r = n("798609"),
  u = n("861370"),
  d = n("152298"),
  o = n("26051"),
  c = n("667358"),
  I = n("563816"),
  p = n("518155"),
  T = n("718381"),
  E = n("875834"),
  f = n("782340");

function N(e) {
  var t;
  let n, N, S, {
      channel: _,
      message: h,
      target: m,
      attachment: O,
      onSelect: A,
      onHeightUpdate: C
    } = e,
    G = m;
  if (null != O) N = n = O.url;
  else
    for (;
      (0, l.isElement)(G);)(0, l.isElement)(G, HTMLImageElement) && null != G.src && (N = G.src), (0, l.isElement)(G, HTMLAnchorElement) && null != G.href && (n = G.href, S = G.textContent), G = G.parentNode;
  let v = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString(),
    M = (0, d.default)(v),
    R = (0, c.default)(v),
    g = (0, I.default)({
      commandType: r.ApplicationCommandType.MESSAGE,
      commandTargetId: h.id,
      channel: _,
      guildId: void 0,
      onHeightUpdate: C
    }),
    y = (0, E.default)(h, _),
    P = (0, p.default)(h, _),
    x = (0, T.default)(h, _),
    b = (0, o.default)(null != n ? n : N, S),
    D = (0, u.default)({
      id: h.id,
      label: f.default.Messages.COPY_ID_MESSAGE,
      shiftId: "".concat(h.channel_id, "-").concat(h.id)
    });
  return (0, i.jsxs)(a.Menu, {
    navId: "message",
    onClose: s.closeContextMenu,
    "aria-label": f.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    onSelect: A,
    children: [(0, i.jsx)(a.MenuGroup, {
      children: M
    }), (0, i.jsx)(a.MenuGroup, {
      children: R
    }), (0, i.jsxs)(a.MenuGroup, {
      children: [g, y, P, x]
    }), (0, i.jsx)(a.MenuGroup, {
      children: b
    }), (0, i.jsx)(a.MenuGroup, {
      children: D
    })]
  })
}