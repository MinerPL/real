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
  i = s("65597"),
  r = s("77078"),
  o = s("102985"),
  d = s("79798"),
  u = s("713431");

function c(e) {
  let {
    className: t,
    avatarURL: s,
    name: n,
    bot: c,
    verifiedBot: E,
    userTag: _
  } = e, T = (0, i.default)([o.default], () => o.default.hidePersonalInformation);
  return (0, a.jsxs)("div", {
    className: l(u.container, t),
    children: [(0, a.jsx)(r.Avatar, {
      className: u.avatar,
      src: s,
      size: r.AvatarSizes.SIZE_24,
      "aria-label": n
    }), (0, a.jsxs)("div", {
      className: u.textContainer,
      children: [(0, a.jsx)(r.Text, {
        tag: "span",
        className: u.name,
        color: "header-primary",
        variant: "text-sm/semibold",
        children: n
      }), c ? (0, a.jsx)(d.default, {
        className: u.botTag,
        verified: E
      }) : null, T ? null : (0, a.jsx)(r.Text, {
        tag: "span",
        color: "interactive-normal",
        className: u.userTag,
        variant: "text-sm/normal",
        children: _
      })]
    })]
  })
}