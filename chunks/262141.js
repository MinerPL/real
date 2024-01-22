"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("575136"),
  i = n("563903"),
  r = n("321314"),
  o = n("387646");

function u(e) {
  let {
    channel: t,
    onAction: n
  } = e, u = (0, s.default)(t), d = (0, s.useEmbeddedAppsWithPresence)(u), c = Array.from(d.values());
  return 0 === c.length ? null : (0, l.jsxs)(a.Scroller, {
    className: o.container,
    children: [(0, l.jsx)("div", {
      className: o.popoutHeaderContainer,
      children: (0, l.jsx)(r.default, {
        channel: t
      })
    }), (0, l.jsx)("div", {
      className: o.headerDivider
    }), c.map((e, a) => {
      var s;
      return (0, l.jsx)(i.default, {
        embeddedApp: e,
        presenceActivity: null !== (s = e.presenceActivity) && void 0 !== s ? s : void 0,
        channel: t,
        onAction: n
      }, a)
    })]
  })
}