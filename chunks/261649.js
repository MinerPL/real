"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  },
  useMessageMenu: function() {
    return U
  }
});
var a = n("37983");
n("884691");
var i = n("118810"),
  l = n("77078"),
  s = n("272030"),
  u = n("798609"),
  r = n("861370"),
  d = n("152298"),
  o = n("447651"),
  c = n("26051"),
  f = n("667358"),
  E = n("563816"),
  M = n("761136"),
  m = n("126423"),
  g = n("175537"),
  I = n("485598"),
  S = n("518155"),
  p = n("355669"),
  _ = n("718381"),
  A = n("442711"),
  h = n("702495"),
  v = n("875834"),
  T = n("780657"),
  C = n("204462"),
  R = n("487051"),
  O = n("815384"),
  y = n("263879"),
  x = n("604179"),
  N = n("167670"),
  b = n("913274"),
  D = n("514705"),
  j = n("321456"),
  G = n("470254"),
  F = n("678803"),
  L = n("782340");

function P(e) {
  var t, n;
  let a, l, u, r, {
      channel: d,
      message: o,
      target: c,
      attachment: f,
      shouldHideMediaOptions: E,
      onSelect: M,
      onHeightUpdate: m
    } = e,
    g = c,
    I = c.getAttribute("data-type"),
    S = c.getAttribute("data-id"),
    p = c.getAttribute("data-name");
  if (null != f) l = a = u = f.url;
  else
    for (;
      (0, i.isElement)(g);)(0, i.isElement)(g, HTMLImageElement) && null != g.src && (l = g.src), (0, i.isElement)(g, HTMLAnchorElement) && null != g.href && (a = g.href, r = g.textContent, null == l && "img" === g.getAttribute("data-role") && (l = a, g.hasAttribute("data-safe-src") && "" !== g.getAttribute("data-safe-src") && (u = g.getAttribute("data-safe-src")))), g = g.parentNode;
  let _ = null !== (n = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : "";
  return U({
    message: o,
    channel: d,
    attachment: f,
    textSelection: _,
    favoriteableType: I,
    favoriteableId: S,
    favoriteableName: p,
    itemHref: a,
    itemSrc: l,
    itemSafeSrc: u,
    itemTextContent: r,
    canReport: !0,
    onHeightUpdate: m,
    onSelect: M,
    onClose: s.closeContextMenu,
    navId: "message",
    ariaLabel: L.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    shouldHideMediaOptions: E
  })
}

function U(e) {
  let {
    message: t,
    channel: n,
    attachment: i,
    textSelection: s,
    favoriteableType: P,
    favoriteableId: U,
    favoriteableName: k,
    itemHref: w,
    itemSrc: V,
    itemSafeSrc: K,
    itemTextContent: H,
    canReport: B,
    onHeightUpdate: Y,
    onSelect: z,
    onClose: X,
    navId: Z,
    ariaLabel: J,
    shouldHideMediaOptions: W = !1
  } = e, q = (0, d.default)(s), $ = (0, f.default)(s), Q = (0, C.default)(t, n), ee = (0, g.default)(t, n), et = (0, A.default)(t, n), en = (0, T.default)(t, n), ea = (0, h.default)({
    type: P,
    id: U,
    name: k
  }), ei = (0, D.default)(t, n), el = (0, v.default)(t, n), es = (0, R.default)(t), eu = (0, I.default)(t, n), er = (0, S.default)(t, n), ed = (0, y.default)(t, n), eo = (0, x.default)(t, n), ec = (0, _.default)(t, n), ef = (0, b.default)(t), eE = (0, j.default)(t, n), eM = (0, c.default)(null != w ? w : V, H, t, {
    shouldHideMediaOptions: W
  }), em = (0, o.default)(K, t, {
    shouldHideMediaOptions: W
  }), eg = (0, F.default)(t, i), eI = (0, r.default)({
    id: t.id,
    label: L.default.Messages.COPY_ID_MESSAGE,
    shiftId: "".concat(t.channel_id, "-").concat(t.id)
  }), eS = (0, N.default)(t, n), ep = (0, G.default)(t, n), e_ = (0, m.default)(t, n, {
    hoist: !0
  }), eA = (0, M.default)(s, n.getGuildId()), eh = (0, O.default)(t), ev = (0, p.default)(t), eT = (0, E.default)({
    commandType: u.ApplicationCommandType.MESSAGE,
    commandTargetId: t.id,
    channel: n,
    guildId: void 0,
    onHeightUpdate: Y
  });
  return (0, a.jsxs)(l.Menu, {
    navId: Z,
    onClose: X,
    "aria-label": J,
    onSelect: z,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: q
    }), (0, a.jsx)(l.MenuGroup, {
      children: $
    }), (0, a.jsxs)(l.MenuGroup, {
      children: ["" === s ? Q : null, ee, es, et, en, ea, eS, ep, ev, eT, ei, el, eh, eu, er, eE, e_, eo, ed, ec, B && ef]
    }), null != eA && (0, a.jsx)(l.MenuGroup, {
      children: eA
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [em, eg]
    }), (0, a.jsx)(l.MenuGroup, {
      children: eM
    }), (0, a.jsx)(l.MenuGroup, {
      children: eI
    })]
  })
}