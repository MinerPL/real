"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  a = n("77078"),
  s = n("430568"),
  u = n("888266");

function o(e) {
  let {
    benefit: t,
    className: n,
    emojiContainerClassName: r,
    showsDescription: o = !0,
    nameTextVariant: d = "text-md/medium",
    nameTextColor: c = "header-primary"
  } = e;
  return (0, i.jsxs)("div", {
    className: l(u.container, n),
    children: [null != t.emoji && (0, i.jsx)("div", {
      className: l(u.emojiContainer, r),
      children: (0, i.jsx)(s.default, {
        emojiId: t.emoji.id,
        emojiName: t.emoji.name,
        animated: t.emoji.animated
      })
    }), (0, i.jsxs)("div", {
      className: u.infoContainer,
      children: [(0, i.jsx)(a.Text, {
        variant: d,
        color: c,
        className: u.name,
        children: t.name
      }), o && (0, i.jsx)(a.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t.description
      })]
    })]
  })
}