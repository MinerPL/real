"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("37983");
n("884691");
var l = n("77078"),
  a = n("145131"),
  i = n("730541"),
  r = n("782340"),
  o = n("175333"),
  u = () => (0, s.jsxs)(a.default, {
    align: a.default.Align.CENTER,
    justify: a.default.Justify.CENTER,
    direction: a.default.Direction.VERTICAL,
    className: o.popout,
    children: [(0, s.jsx)("img", {
      alt: "",
      src: (0, i.getPublicSystemMessageAvatar)(),
      className: o.avatar
    }), (0, s.jsxs)(a.default, {
      align: a.default.Align.CENTER,
      justify: a.default.Justify.CENTER,
      className: o.nameWrapper,
      children: [(0, s.jsx)(l.Tooltip, {
        text: r.default.Messages.STAFF_BADGE_TOOLTIP,
        children: e => (0, s.jsx)("div", {
          ...e,
          className: o.staffBadge
        })
      }), (0, s.jsx)(l.Heading, {
        className: o.header,
        variant: "heading-md/semibold",
        children: r.default.Messages.ANNOUNCEMENT_GUILD_POPOUT_NAME
      })]
    }), (0, s.jsx)(l.Text, {
      className: o.description,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: r.default.Messages.ANNOUNCEMENT_GUILD_DESCRIPTION
    }), (0, s.jsx)(l.Text, {
      className: o.description,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: r.default.Messages.ANNOUNCEMENT_GUILD_HERE_TO_HELP
    })]
  })