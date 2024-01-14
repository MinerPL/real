"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("77078"),
  i = n("15649"),
  r = n("341542"),
  o = n("305961"),
  u = n("610898"),
  d = n("829562"),
  c = n("49111"),
  f = n("782340"),
  h = n("258023");

function C() {
  let e = (0, a.useStateFromStores)([r.default, o.default], () => r.default.unavailableGuilds.filter(e => null == o.default.getGuild(e)).length);
  return e <= 0 ? null : (0, l.jsx)(u.ListItem, {
    children: (0, l.jsx)(d.default, {
      text: f.default.Messages.PARTIAL_OUTAGE.format({
        count: e
      }),
      color: s.Tooltip.Colors.RED,
      children: (0, l.jsx)(s.Anchor, {
        href: (0, i.default)(c.LocalizedLinks.TWITTER),
        target: "_blank",
        className: h.guildsError,
        "aria-label": f.default.Messages.PARTIAL_OUTAGE_A11Y.format({
          count: e
        }),
        children: (0, l.jsx)("span", {
          "aria-hidden": !0,
          className: h.errorInner,
          children: "!"
        })
      })
    })
  })
}