"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  l = n("77078"),
  a = n("978679"),
  u = n("265469");

function o(e) {
  let {
    className: t,
    copy: n,
    bannerImage: r,
    textColor: o = "always-white"
  } = e;
  return (0, i.jsxs)("div", {
    className: s(u.bannerContainer, t),
    children: [null == r ? null : (0, i.jsx)("img", {
      alt: "",
      className: u.banner,
      src: r
    }), (0, i.jsxs)("div", {
      className: u.textContainer,
      children: [(0, i.jsx)(a.default, {
        className: u.giftIcon
      }), (0, i.jsx)(l.Heading, {
        className: u.textHeader,
        color: o,
        variant: "eyebrow",
        children: n
      })]
    })]
  })
}