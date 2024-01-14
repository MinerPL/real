"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("54239"),
  i = s("393414"),
  r = s("49111"),
  o = s("782340"),
  d = s("609456"),
  u = s("269863");

function c() {
  return (0, a.jsxs)("div", {
    className: d.emptyState,
    children: [(0, a.jsx)("img", {
      src: u,
      alt: "",
      className: d.image
    }), (0, a.jsx)(n.Heading, {
      className: d.topSpacing,
      variant: "heading-lg/extrabold",
      children: o.default.Messages.GUILD_IDENTITY_SETTINGS_EMPTY_STATE_TITLE
    }), (0, a.jsx)(n.Text, {
      className: d.topSpacing,
      variant: "text-md/normal",
      children: o.default.Messages.GUILD_IDENTITY_SETTINGS_EMPTY_STATE_DESCRIPTION
    }), (0, a.jsx)(n.Button, {
      className: d.topSpacing,
      onClick: () => {
        (0, i.transitionTo)(r.Routes.GUILD_DISCOVERY), l.popLayer()
      },
      children: o.default.Messages.GUILD_IDENTITY_SETTINGS_EMPTY_STATE_CTA
    })]
  })
}