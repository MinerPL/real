"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  s = n("77078"),
  i = n("712234"),
  r = n("826332"),
  o = n("782340");

function u(e) {
  let t = (0, l.useStateFromStores)([i.default], () => i.default.getToastsEnabled(e));
  return (0, a.jsx)(s.MenuCheckboxItem, {
    id: "show-call-chat-toasts",
    label: o.default.Messages.SHOW_NEW_MESSAGE_PREVIEWS,
    checked: t,
    action: () => r.default.setCallChatToastsEnabled(e, !t)
  })
}