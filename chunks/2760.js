"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("702976"), s("424973");
var a = s("37983");
s("884691");
var l = s("77078"),
  r = s("291373"),
  i = s("782340"),
  o = s("210466");

function n(e) {
  let {
    content: t,
    heading: s
  } = e;
  return (0, a.jsxs)("div", {
    className: o.row,
    children: [null != s ? (0, a.jsx)(l.Heading, {
      className: o.heading,
      variant: "text-sm/normal",
      children: s
    }) : null, (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: t
    })]
  })
}

function u(e) {
  let {
    flags: t,
    listScrollerStyle: s
  } = e, {
    hasMessageContent: u,
    hasGuildPresences: d,
    hasGuildMembers: c
  } = (0, r.useBotDataAccess)({
    flags: t
  });
  if (null == t) return null;
  let f = [];
  return u && f.push((0, a.jsx)(n, {
    heading: i.default.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
    content: i.default.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
  })), d && f.push((0, a.jsx)(n, {
    heading: i.default.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
    content: i.default.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
  })), c && f.push((0, a.jsx)(n, {
    heading: i.default.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
    content: i.default.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
  })), f.length > 0 && f.push((0, a.jsx)("div", {
    className: o.divider,
    children: (0, a.jsx)(l.FormDivider, {})
  })), f.push((0, a.jsx)(n, {
    content: i.default.Messages.BOTS_DATA_ACCESS_BASELINE.format({
      helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
    })
  })), (0, a.jsx)(l.ScrollerThin, {
    className: s,
    children: f
  })
}