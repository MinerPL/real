"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("37983");
n("884691");
var l = n("959097"),
  a = n("304198"),
  i = n("782340"),
  r = n("13154");

function o(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, s.jsx)(a.default, {
    iconNode: (0, s.jsx)(l.default, {
      className: r.icon
    }),
    timestamp: t.timestamp,
    compact: n,
    children: i.default.Messages.THREAD_STARTER_MESSAGE_NOT_LOADED
  })
}