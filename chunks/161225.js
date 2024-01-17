"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("77078"),
  r = n("574073"),
  o = n("79798"),
  u = n("93332"),
  d = n("304198"),
  c = n("250375"),
  f = n("49111"),
  E = n("988268"),
  _ = n("782340"),
  T = n("413362");

function I(e) {
  let {
    message: t,
    compact: n,
    usernameHook: l
  } = e, I = (0, r.default)(t), m = l(I), {
    avatarSrc: N,
    eventHandlers: {
      onMouseEnter: p,
      onMouseLeave: S
    }
  } = (0, c.useAutomodAvatar)(!0), A = "" !== t.content ? new Date(t.content).toLocaleString(_.default.getLocale(), {
    hour: "numeric",
    minute: "2-digit",
    month: "2-digit",
    day: "2-digit",
    year: "numeric"
  }) : "";
  return (0, s.jsx)("div", {
    onMouseEnter: p,
    onMouseLeave: S,
    children: (0, s.jsx)(d.default, {
      className: a(T.mainContainer, {
        [T.compact]: n
      }),
      iconNode: n ? null : (0, s.jsx)(c.AutomodAvatar, {
        src: N
      }),
      iconContainerClassName: T.iconContainer,
      compact: n,
      children: (0, s.jsxs)("div", {
        className: a(T.content, {
          [T.compact]: n
        }),
        children: [(0, s.jsx)(u.BaseMessageHeader, {
          message: t,
          messageClassname: T.spanCorrection,
          className: a(T.usernameContainer, T.spanCorrection, {
            [T.compact]: n
          }),
          username: (0, s.jsxs)("div", {
            className: T.spanCorrection,
            children: [(0, s.jsx)(i.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: T.username,
              children: _.default.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(o.default, {
              type: E.BotTagTypes.SYSTEM_DM,
              className: T.systemTag
            })]
          }),
          compact: n,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: a(T.messageContent, {
            [T.compact]: n
          }),
          children: t.type === f.MessageTypes.GUILD_INCIDENT_ALERT_MODE_ENABLED ? _.default.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_SYSTEM_MESSAGE_SHORT.format({
            username: I.nick,
            usernameHook: m,
            time: A
          }) : _.default.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_SYSTEM_MESSAGE.format({
            username: I.nick,
            usernameHook: m
          })
        })]
      })
    })
  })
}