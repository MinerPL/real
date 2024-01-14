"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var s = n("281862"),
  l = n("77078"),
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
  } = e, m = (0, r.default)(t), E = m.nick, _ = d(m), h = () => {
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
  }, p = (0, l.useRedesignIconContext)().enabled, I = p ? {
    iconNode: (0, a.jsx)(s.PinIcon, {
      width: 18,
      height: 18,
      color: "currentColor"
    })
  } : {
    icon: n("728963")
  };
  return (0, a.jsx)(o.default, {
    ...I,
    timestamp: t.timestamp,
    compact: f,
    children: null != t.messageReference ? null == c ? u.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA_FORMATTED_WITH_MESSAGE_HOOK.format({
      usernameHook: _,
      username: E,
      messageOnClick: h
    }) : u.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_WITH_MESSAGE.format({
      usernameHook: _,
      username: E,
      pinsActionOnClick: c,
      messageOnClick: h
    }) : null == c ? u.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA_FORMATTED_HOOK.format({
      usernameHook: _,
      username: E
    }) : u.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE.format({
      usernameHook: _,
      username: E,
      pinsActionOnClick: c
    })
  })
}