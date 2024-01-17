"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  i = n("77078"),
  u = n("755624"),
  r = n("263024"),
  s = n("782340");

function d(e, t) {
  let n = (0, l.useStateFromStores)([u.default], () => u.default.hasJoined(e.id));
  return n ? (0, a.jsx)(i.MenuItem, {
    id: "leave-thread",
    label: e.isForumPost() ? s.default.Messages.LEAVE_FORUM_POST : s.default.Messages.LEAVE_THREAD,
    action: () => r.default.leaveThread(e, t)
  }) : (0, a.jsx)(i.MenuItem, {
    id: "join-thread",
    label: e.isForumPost() ? s.default.Messages.JOIN_FORUM_POST : s.default.Messages.JOIN_THREAD,
    action: () => r.default.joinThread(e, t)
  })
}