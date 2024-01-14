"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("77078"),
  i = n("36694"),
  r = n("945330"),
  o = n("921314"),
  u = n("652416"),
  d = n("397336"),
  c = n("782340"),
  f = n("60490");

function h(e) {
  return a.useEffect(() => e.onChannelChange(), [e.channel.id]), (0, s.jsxs)("div", {
    className: f.notice,
    children: [(0, s.jsx)(o.default, {
      id: e.channel.id
    }), (0, s.jsx)("div", {
      className: f.info,
      children: (0, s.jsx)(l.Text, {
        variant: "text-sm/medium",
        children: c.default.Messages.UNREAD_NOTIFICATION_SETTING_NOTICE
      })
    }), (0, s.jsxs)("div", {
      className: f.buttons,
      children: [(0, s.jsxs)(l.Button, {
        size: l.Button.Sizes.TINY,
        look: l.Button.Looks.FILLED,
        color: l.Button.Colors.PRIMARY,
        className: f.button,
        innerClassName: f.buttonInner,
        onClick: () => (0, u.default)(e.channel.guild_id, e.channel.id, d.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES),
        children: [(0, s.jsx)(i.default, {
          height: 16,
          width: 16,
          style: {
            marginRight: 4
          }
        }), c.default.Messages.YES_TEXT]
      }), (0, s.jsx)(l.Button, {
        style: {
          marginLeft: 8
        },
        size: l.Button.Sizes.TINY,
        look: l.Button.Looks.FILLED,
        color: l.Button.Colors.PRIMARY,
        className: f.button,
        innerClassName: f.buttonInner,
        onClick: () => (0, u.default)(e.channel.guild_id, e.channel.id, d.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS),
        children: (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(r.default, {
            height: 16,
            width: 16,
            style: {
              marginRight: 4
            }
          }), c.default.Messages.NO_TEXT]
        })
      })]
    })]
  })
}