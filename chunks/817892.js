"use strict";
n.r(t);
var a = n("446674"),
  s = n("913144");
let i = {};

function l() {
  i = {}
}
class r extends a.default.Store {
  getFpMessageInfo(e) {
    return i[e]
  }
}
r.displayName = "FalsePositiveStore", new r(s.default, {
  LOGOUT: function() {
    (function() {
      i = {}
    })()
  },
  CONNECTION_OPEN: function() {
    (function() {
      i = {}
    })()
  },
  MESSAGE_EXPLICIT_CONTENT_FP_CREATE: function(e) {
    let {
      messageId: t,
      channelId: n,
      attachments: a
    } = e;
    i[t] = {
      messageId: t,
      channelId: n,
      attachments: a,
      reportSubmit: !1
    }
  }
})