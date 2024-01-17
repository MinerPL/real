"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("77078"),
  l = n("599110"),
  r = n("186888"),
  o = n("70118"),
  u = n("398953"),
  d = n("7259"),
  c = n("250529"),
  f = n("391950"),
  E = n("49111"),
  _ = n("988268"),
  h = n("782340");

function C(e) {
  let {
    party: t,
    close: n,
    onSelect: C
  } = e, I = (0, u.default)(t), T = (0, f.default)(t), S = (0, c.default)(t), m = (0, d.default)(t), p = (0, r.default)(t), A = (0, o.default)(t);
  return s.useEffect(() => {
    let e = t.currentActivities.filter(e => {
      var t, n;
      return (null === (t = e.game) || void 0 === t ? void 0 : t.name) != null && (null === (n = e.game) || void 0 === n ? void 0 : n.type) === _.ApplicationTypes.GAME
    }).map(e => e.game.name);
    l.default.track(E.AnalyticEvents.OPEN_POPOUT, {
      type: "Now Playing Card Popout",
      games_detected: e
    })
  }, []), (0, a.jsxs)(i.Menu, {
    navId: "now-playing-menu",
    onClose: n,
    "aria-label": h.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onSelect: C,
    children: [I, (0, a.jsxs)(i.MenuGroup, {
      children: [T, S]
    }), (0, a.jsx)(i.MenuGroup, {
      children: m
    }), (0, a.jsx)(i.MenuGroup, {
      children: p
    }), A]
  })
}