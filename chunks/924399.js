"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  i = n("446674"),
  r = n("77078"),
  o = n("574073"),
  u = n("305961"),
  d = n("79798"),
  c = n("93332"),
  f = n("304198"),
  m = n("250375"),
  E = n("988268"),
  _ = n("782340"),
  h = n("413362");

function p(e) {
  var t;
  let {
    message: n,
    compact: s,
    usernameHook: p,
    channel: I
  } = e, T = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(I.guild_id)), g = (0, o.default)(n), C = p(g), {
    avatarSrc: S,
    eventHandlers: {
      onMouseEnter: A,
      onMouseLeave: N
    }
  } = (0, m.useAutomodAvatar)(!0);
  return (0, a.jsx)("div", {
    onMouseEnter: A,
    onMouseLeave: N,
    children: (0, a.jsx)(f.default, {
      className: l(h.mainContainer, {
        [h.compact]: s
      }),
      iconNode: s ? null : (0, a.jsx)(m.AutomodAvatar, {
        src: S
      }),
      iconContainerClassName: h.iconContainer,
      compact: s,
      children: (0, a.jsxs)("div", {
        className: l(h.content, {
          [h.compact]: s
        }),
        children: [(0, a.jsx)(c.BaseMessageHeader, {
          message: n,
          messageClassname: h.spanCorrection,
          className: l(h.usernameContainer, h.spanCorrection, {
            [h.compact]: s
          }),
          username: (0, a.jsxs)("div", {
            className: h.spanCorrection,
            children: [(0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: h.username,
              children: _.default.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, a.jsx)(d.default, {
              type: E.BotTagTypes.SYSTEM_DM,
              className: h.systemTag
            })]
          }),
          compact: s,
          showTimestamp: !0
        }), (0, a.jsx)("div", {
          className: l(h.messageContent, {
            [h.compact]: s
          }),
          children: _.default.Messages.GUILD_RAID_REPORT_SYSTEM_MESSAGE.format({
            username: g.nick,
            usernameHook: C,
            guildName: null !== (t = null == T ? void 0 : T.name) && void 0 !== t ? t : ""
          })
        })]
      })
    })
  })
}