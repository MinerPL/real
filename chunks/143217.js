"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983");
n("884691");
var s = n("446674"),
  i = n("77078"),
  l = n("851387"),
  r = n("161778"),
  o = n("465126"),
  u = n("973191"),
  d = n("782340"),
  c = n("683449"),
  E = e => {
    let {
      guilds: t
    } = e, n = (0, s.useStateFromStores)([r.default], () => r.default.theme), E = t.map(e => (0, a.jsx)(o.default, {
      className: c.guildCard,
      onView: () => l.default.transitionToGuildSync(e.id),
      guild: {
        ...e,
        presenceCount: void 0,
        memberCount: void 0,
        premiumSubscriptionCount: void 0,
        emojis: void 0
      },
      theme: n
    }, e.id));
    return (0, a.jsx)("section", {
      className: c.guildListSection,
      children: t.length > 0 ? (0, a.jsxs)("div", {
        children: [(0, a.jsx)(i.Heading, {
          className: c.title,
          variant: "heading-lg/semibold",
          children: d.default.Messages.YOUR_HUB
        }), (0, a.jsxs)("div", {
          className: c.guildList,
          children: [E, (0, a.jsx)(u.default, {
            hasHub: !0
          })]
        })]
      }) : (0, a.jsx)("div", {
        className: c.guildList,
        children: (0, a.jsx)(u.default, {
          hasHub: !1
        })
      })
    })
  }