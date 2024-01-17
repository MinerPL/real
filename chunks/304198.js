"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("77078"),
  r = n("587904"),
  o = n("933470");

function u(e) {
  let {
    icon: t,
    iconNode: n,
    timestamp: l,
    className: i,
    children: u,
    contentClassName: d,
    iconClassName: c,
    iconContainerClassName: f,
    compact: E = !1
  } = e;
  return (0, s.jsxs)("div", {
    className: a(i, {
      [o.container]: !0,
      [o.compact]: E,
      [o.cozy]: !E
    }),
    children: [null != n && (0, s.jsx)("div", {
      className: a(o.iconContainer, f),
      children: n
    }), null != t && (0, s.jsx)("div", {
      className: o.iconContainer,
      children: (0, s.jsx)("div", {
        "data-accessibility": "desaturate",
        className: a(o.icon, o.iconSize, c),
        style: {
          backgroundImage: "url('".concat(t, "')")
        }
      })
    }), (0, s.jsxs)("div", {
      className: a(d, o.content),
      children: [u, null != l && (0, s.jsx)(r.default, {
        timestamp: l
      })]
    })]
  })
}
u.Action = e => {
  let {
    onClick: t,
    children: n
  } = e;
  return (0, s.jsxs)("span", {
    className: o.action,
    children: ["—", (0, s.jsx)(i.Anchor, {
      onClick: t,
      className: o.actionAnchor,
      children: n
    })]
  })
};
var d = u