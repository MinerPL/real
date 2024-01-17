"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("446674"),
  r = n("77078"),
  o = n("574073"),
  u = n("305961"),
  d = n("79798"),
  c = n("93332"),
  f = n("304198"),
  E = n("250375"),
  _ = n("988268"),
  T = n("782340"),
  I = n("413362");

function m(e) {
  var t;
  let {
    message: n,
    compact: l,
    usernameHook: m,
    channel: N
  } = e, p = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(N.guild_id)), S = (0, o.default)(n), A = m(S), {
    avatarSrc: C,
    eventHandlers: {
      onMouseEnter: h,
      onMouseLeave: g
    }
  } = (0, E.useAutomodAvatar)(!0);
  return (0, s.jsx)("div", {
    onMouseEnter: h,
    onMouseLeave: g,
    children: (0, s.jsx)(f.default, {
      className: a(I.mainContainer, {
        [I.compact]: l
      }),
      iconNode: l ? null : (0, s.jsx)(E.AutomodAvatar, {
        src: C
      }),
      iconContainerClassName: I.iconContainer,
      compact: l,
      children: (0, s.jsxs)("div", {
        className: a(I.content, {
          [I.compact]: l
        }),
        children: [(0, s.jsx)(c.BaseMessageHeader, {
          message: n,
          messageClassname: I.spanCorrection,
          className: a(I.usernameContainer, I.spanCorrection, {
            [I.compact]: l
          }),
          username: (0, s.jsxs)("div", {
            className: I.spanCorrection,
            children: [(0, s.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: I.username,
              children: T.default.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(d.default, {
              type: _.BotTagTypes.SYSTEM_DM,
              className: I.systemTag
            })]
          }),
          compact: l,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: a(I.messageContent, {
            [I.compact]: l
          }),
          children: T.default.Messages.GUILD_RAID_REPORT_SYSTEM_MESSAGE.format({
            username: S.nick,
            usernameHook: A,
            guildName: null !== (t = null == p ? void 0 : p.name) && void 0 !== t ? t : ""
          })
        })]
      })
    })
  })
}