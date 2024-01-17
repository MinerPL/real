"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var l = n("281862"),
  a = n("77078"),
  i = n("819689"),
  r = n("574073"),
  o = n("304198"),
  u = n("782340");

function d(e) {
  let {
    message: t,
    usernameHook: d,
    onClickPins: c,
    compact: f
  } = e, E = (0, r.default)(t), _ = E.nick, T = d(E), I = () => {
    if (null == t.messageReference) return;
    let {
      channel_id: e,
      message_id: n
    } = t.messageReference;
    i.default.jumpToMessage({
      channelId: e,
      messageId: n,
      flash: !0
    })
  }, m = (0, a.useRedesignIconContext)().enabled, N = m ? {
    iconNode: (0, s.jsx)(l.PinIcon, {
      width: 18,
      height: 18,
      color: "currentColor"
    })
  } : {
    icon: n("728963")
  };
  return (0, s.jsx)(o.default, {
    ...N,
    timestamp: t.timestamp,
    compact: f,
    children: null != t.messageReference ? null == c ? u.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA_FORMATTED_WITH_MESSAGE_HOOK.format({
      usernameHook: T,
      username: _,
      messageOnClick: I
    }) : u.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_WITH_MESSAGE.format({
      usernameHook: T,
      username: _,
      pinsActionOnClick: c,
      messageOnClick: I
    }) : null == c ? u.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA_FORMATTED_HOOK.format({
      usernameHook: T,
      username: _
    }) : u.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE.format({
      usernameHook: T,
      username: _,
      pinsActionOnClick: c
    })
  })
}