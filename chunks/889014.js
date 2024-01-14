"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var r = n("446674"),
  s = n("76393");

function a() {
  return (0, r.useStateFromStores)([s.default], () => null != s.default.getRemoteSessionId() || null != s.default.getAwaitingRemoteSessionInfo())
}