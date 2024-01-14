"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("145131"),
  i = n("730541"),
  r = n("782340"),
  o = n("175333"),
  u = () => (0, a.jsxs)(l.default, {
    align: l.default.Align.CENTER,
    justify: l.default.Justify.CENTER,
    direction: l.default.Direction.VERTICAL,
    className: o.popout,
    children: [(0, a.jsx)("img", {
      alt: "",
      src: (0, i.getPublicSystemMessageAvatar)(),
      className: o.avatar
    }), (0, a.jsxs)(l.default, {
      align: l.default.Align.CENTER,
      justify: l.default.Justify.CENTER,
      className: o.nameWrapper,
      children: [(0, a.jsx)(s.Tooltip, {
        text: r.default.Messages.STAFF_BADGE_TOOLTIP,
        children: e => (0, a.jsx)("div", {
          ...e,
          className: o.staffBadge
        })
      }), (0, a.jsx)(s.Heading, {
        className: o.header,
        variant: "heading-md/semibold",
        children: r.default.Messages.ANNOUNCEMENT_GUILD_POPOUT_NAME
      })]
    }), (0, a.jsx)(s.Text, {
      className: o.description,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: r.default.Messages.ANNOUNCEMENT_GUILD_DESCRIPTION
    }), (0, a.jsx)(s.Text, {
      className: o.description,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: r.default.Messages.ANNOUNCEMENT_GUILD_HERE_TO_HELP
    })]
  })