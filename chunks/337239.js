"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("845579"),
  l = n("476263"),
  r = n("866190"),
  o = n("132349"),
  u = n("492969");

function d(e) {
  let {
    coverImageAsset: t,
    title: n,
    guild: d,
    description: c,
    children: E
  } = e, f = i.GifAutoPlay.useSetting(), _ = (0, r.useIsWindowFocused)(), [h, C] = (0, o.default)(t, _ && f);
  return (0, a.jsxs)("div", {
    className: u.container,
    children: [(0, a.jsx)("div", {
      ref: h,
      className: u.coverImageContainer,
      children: null != C && (0, a.jsx)("img", {
        src: C,
        alt: "",
        className: u.coverImage
      })
    }), (0, a.jsx)("div", {
      className: u.guildIconContainer,
      children: (0, a.jsx)(l.default, {
        guild: d,
        size: l.default.Sizes.XLARGE
      })
    }), (0, a.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      className: u.ctaTitle,
      children: n
    }), (0, a.jsx)(s.Text, {
      className: u.ctaSubtitle,
      variant: "text-md/normal",
      color: "header-secondary",
      children: c
    }), E]
  })
}