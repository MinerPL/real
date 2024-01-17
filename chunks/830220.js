"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
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
  f = n("988268"),
  E = n("782340"),
  _ = n("413362");

function T(e) {
  let {
    message: t,
    compact: n,
    usernameHook: l
  } = e, T = (0, r.default)(t), I = l(T), {
    avatarSrc: m,
    eventHandlers: {
      onMouseEnter: N,
      onMouseLeave: p
    }
  } = (0, c.useAutomodAvatar)(!0);
  return (0, s.jsx)("div", {
    onMouseEnter: N,
    onMouseLeave: p,
    children: (0, s.jsx)(d.default, {
      className: a(_.mainContainer, {
        [_.compact]: n
      }),
      iconNode: n ? null : (0, s.jsx)(c.AutomodAvatar, {
        src: m
      }),
      iconContainerClassName: _.iconContainer,
      compact: n,
      children: (0, s.jsxs)("div", {
        className: a(_.content, {
          [_.compact]: n
        }),
        children: [(0, s.jsx)(u.BaseMessageHeader, {
          message: t,
          messageClassname: _.spanCorrection,
          className: a(_.usernameContainer, _.spanCorrection, {
            [_.compact]: n
          }),
          username: (0, s.jsxs)("div", {
            className: _.spanCorrection,
            children: [(0, s.jsx)(i.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: _.username,
              children: E.default.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(o.default, {
              type: f.BotTagTypes.SYSTEM_DM,
              className: _.systemTag
            })]
          }),
          compact: n,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: a(_.messageContent, {
            [_.compact]: n
          }),
          children: E.default.Messages.GUILD_REPORT_FALSE_ALARM_SYSTEM_MESSAGE_SHORT.format({
            username: T.nick,
            usernameHook: I
          })
        })]
      })
    })
  })
}