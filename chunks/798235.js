"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
});
var l = a("37983");
a("884691");
var s = a("414456"),
  r = a.n(s),
  n = a("77078"),
  o = a("782340"),
  i = a("60109"),
  u = a("200406"),
  c = a("283045"),
  d = a("718297"),
  f = a("929880"),
  C = function(e) {
    let {
      isFullScreen: t
    } = e;
    return (0, l.jsxs)("div", {
      className: r(i.heroBanner, t ? i.heroBannerFullScreen : i.heroBannerWithSidebar),
      children: [(0, l.jsxs)("div", {
        className: i.heroDescription,
        children: [(0, l.jsx)(n.Heading, {
          className: i.bannerTitle,
          color: "always-white",
          variant: "display-lg",
          children: o.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
        }), (0, l.jsx)(n.Text, {
          className: i.heroSubtitle,
          color: "always-white",
          variant: "text-lg/normal",
          children: o.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_SUBTITLE_ALT
        })]
      }), (0, l.jsxs)("div", {
        className: i.bannerArt,
        children: [(0, l.jsx)("img", {
          className: i.bannerGrid,
          alt: "",
          src: u,
          width: "484",
          height: "402"
        }), (0, l.jsx)("img", {
          className: i.bannerGridSmol,
          alt: "",
          src: d,
          width: "85",
          height: "60"
        }), (0, l.jsx)("img", {
          className: i.bannerGridMedium,
          alt: "",
          src: c,
          width: "178",
          height: "106"
        }), (0, l.jsx)("img", {
          className: i.bannerHand,
          alt: "",
          src: f,
          width: "265",
          height: "238"
        })]
      })]
    })
  }