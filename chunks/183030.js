"use strict";
n.r(t), n.d(t, {
  useNotificationCenterItemAcked: function() {
    return i
  }
});
var a = n("446674"),
  l = n("204116"),
  s = n("342176");
let i = (e, t) => {
  let n = (0, a.useStateFromStores)([l.default], () => l.default.isLocalItemAcked(e));
  return !e.forceUnacked && (n || (0, s.isRemoteAcked)(e, t))
}