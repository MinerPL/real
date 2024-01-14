"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var i = n("77078"),
  l = n("625149"),
  s = n("516358"),
  u = n("363396"),
  r = n("782340");

function d(e, t) {
  let n = (0, l.useCanReplyToMessage)(t, e);
  return n ? (0, a.jsx)(i.MenuItem, {
    id: "reply",
    label: r.default.Messages.MESSAGE_ACTION_REPLY,
    icon: s.default,
    action: n => {
      (0, u.replyToMessage)(t, e, n)
    }
  }) : null
}