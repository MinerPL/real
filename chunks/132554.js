"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  r = n("77078"),
  i = n("978679"),
  u = n("265469");

function o(e) {
  let {
    className: t,
    copy: n,
    bannerImage: a,
    textColor: o = "always-white"
  } = e;
  return (0, s.jsxs)("div", {
    className: l(u.bannerContainer, t),
    children: [null == a ? null : (0, s.jsx)("img", {
      alt: "",
      className: u.banner,
      src: a
    }), (0, s.jsxs)("div", {
      className: u.textContainer,
      children: [(0, s.jsx)(i.default, {
        className: u.giftIcon
      }), (0, s.jsx)(r.Heading, {
        className: u.textHeader,
        color: o,
        variant: "eyebrow",
        children: n
      })]
    })]
  })
}