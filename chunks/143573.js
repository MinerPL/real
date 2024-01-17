"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("446674"),
  l = n("913144");
let a = !1;
class i extends s.default.Store {
  get blockedByProxy() {
    return a
  }
}
i.displayName = "ProxyBlockStore";
var r = new i(l.default, {
  PROXY_BLOCKED_REQUEST: function(e) {
    a = !0
  }
})