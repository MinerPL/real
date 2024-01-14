"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var s = n("959097"),
  l = n("304198"),
  i = n("782340"),
  r = n("13154");

function o(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, a.jsx)(l.default, {
    iconNode: (0, a.jsx)(s.default, {
      className: r.icon
    }),
    timestamp: t.timestamp,
    compact: n,
    children: i.default.Messages.THREAD_STARTER_MESSAGE_NOT_LOADED
  })
}