"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("77078"),
  r = n("953109"),
  o = n("450754");

function u(e) {
  let {
    className: t,
    embeddedApps: n
  } = e;
  if (n.length <= 0) return null;
  {
    if (1 === n.length) return (0, l.jsx)("div", {
      className: s(o.container, t),
      children: (0, l.jsx)(r.default, {
        game: n[0].application,
        className: o.icon24px
      })
    });
    let e = n.length - 1;
    return (0, l.jsxs)("div", {
      className: s(o.container, t),
      children: [(0, l.jsx)(r.default, {
        game: n[0].application,
        className: o.icon20px
      }), 2 === n.length ? (0, l.jsx)(r.default, {
        game: n[1].application,
        className: o.icon20px
      }) : (0, l.jsx)(i.Text, {
        className: o.overflow,
        variant: "text-xs/bold",
        color: "interactive-active",
        children: "+".concat(e)
      })]
    })
  }
}