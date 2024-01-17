"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("446674"),
  l = n("913144"),
  a = n("492249");
let i = null,
  r = [a.DispatchErrorCodes.REDISTRIBUTABLE_INSTALL_FAILED, a.DispatchErrorCodes.POST_INSTALL_FAILED, a.DispatchErrorCodes.POST_INSTALL_CANCELLED],
  o = [a.DispatchErrorCodes.APPLICATION_NOT_FOUND, a.DispatchErrorCodes.APPLICATION_LOAD_FAILED, a.DispatchErrorCodes.INTERRUPTED, a.DispatchErrorCodes.DESERIALIZATION_FAILED];
class u extends s.default.Store {
  getLastError() {
    return i
  }
}
u.displayName = "DispatchApplicationErrorStore";
var d = new u(l.default, {
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
    null != i && null != i.code && r.includes(i.code) && (i = null)
  },
  DISPATCH_APPLICATION_ERROR: function(e) {
    let {
      error: t
    } = e;
    i = null != t.code && o.includes(t.code) ? null : t
  }
})