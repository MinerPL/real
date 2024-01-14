"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var s = n("509043"),
  l = n("77078"),
  i = n("191814"),
  r = n("45029"),
  o = n("782340"),
  u = n("411531");

function d(e) {
  let {
    locked: t,
    role: n,
    textVariant: d = "text-xs/medium"
  } = e, c = (0, l.useToken)(l.tokens.colors.INTERACTIVE_NORMAL).hex();
  return (0, a.jsx)("div", {
    className: u.roleTagContainer,
    children: (0, a.jsxs)("div", {
      className: u.roleTag,
      children: [(0, a.jsx)("div", {
        className: u.roleColor,
        style: {
          backgroundColor: (0, s.int2hex)(n.color)
        }
      }), (0, a.jsx)(i.default, {
        size: 8,
        horizontal: !0
      }), (0, a.jsxs)(l.Text, {
        variant: d,
        color: "text-normal",
        children: [(0, a.jsx)(l.HiddenVisually, {
          children: o.default.Messages.GUILD_PRODUCT_CARD_HIDDEN_ROLE_SCREEN_READER
        }), n.name]
      }), !0 === t && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(i.default, {
          size: 8,
          horizontal: !0
        }), (0, a.jsx)(r.default, {
          color: c
        })]
      })]
    })
  })
}