"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("77078"),
  r = n("278915"),
  o = e => {
    let {
      renderTitle: t,
      renderTagline: n,
      renderActions: l,
      renderMedia: o,
      className: u,
      isHorizontal: d = !1
    } = e;
    return (0, s.jsxs)("div", {
      className: a(r.tile, {
        [r.tileHorizontal]: d
      }, u),
      children: [(0, s.jsx)("div", {
        className: a(r.media, {
          [r.mediaHorizontal]: d
        }),
        children: null == o ? void 0 : o()
      }), (0, s.jsxs)("div", {
        className: r.description,
        children: [(0, s.jsx)(i.H, {
          className: r.title,
          children: null == t ? void 0 : t()
        }), (0, s.jsx)("div", {
          className: r.tagline,
          children: null == n ? void 0 : n()
        }), (0, s.jsx)("div", {
          className: r.actions,
          children: null == l ? void 0 : l()
        })]
      })]
    })
  }