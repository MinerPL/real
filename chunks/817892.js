"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("446674"),
  l = n("913144");
let a = {};

function i() {
  a = {}
}
class r extends s.default.Store {
  getFpMessageInfo(e) {
    return a[e]
  }
}
r.displayName = "FalsePositiveStore";
var o = new r(l.default, {
  LOGOUT: function() {
    (function() {
      a = {}
    })()
  },
  CONNECTION_OPEN: function() {
    (function() {
      a = {}
    })()
  },
  MESSAGE_EXPLICIT_CONTENT_FP_CREATE: function(e) {
    let {
      messageId: t,
      channelId: n,
      attachments: s
    } = e;
    a[t] = {
      messageId: t,
      channelId: n,
      attachments: s,
      reportSubmit: !1
    }
  }
})