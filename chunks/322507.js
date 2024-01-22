"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  r = s("448052"),
  i = s("77078"),
  u = s("782340"),
  o = s("16358"),
  d = s("460026"),
  c = e => {
    let {
      className: t,
      onBackClick: s
    } = e;
    return (0, a.jsxs)("div", {
      className: l(o.container, t),
      "data-testid": "all-perks-hero-header",
      children: [(0, a.jsx)("img", {
        src: d,
        alt: "",
        className: o.headerArt
      }), (0, a.jsx)("div", {
        className: o.content,
        children: (0, a.jsx)(i.Heading, {
          variant: "display-lg",
          color: "always-white",
          children: "All Your Nitro Perks"
        })
      }), (0, a.jsxs)(i.Clickable, {
        onClick: s,
        className: o.backButton,
        children: [(0, a.jsx)(r.ChevronSmallLeftIcon, {
          color: "currentColor"
        }), u.default.Messages.BACK]
      })]
    })
  }