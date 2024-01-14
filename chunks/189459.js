"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("446674"),
  a = n("913144"),
  s = n("492249");
let i = null,
  r = [s.DispatchErrorCodes.REDISTRIBUTABLE_INSTALL_FAILED, s.DispatchErrorCodes.POST_INSTALL_FAILED, s.DispatchErrorCodes.POST_INSTALL_CANCELLED],
  o = [s.DispatchErrorCodes.APPLICATION_NOT_FOUND, s.DispatchErrorCodes.APPLICATION_LOAD_FAILED, s.DispatchErrorCodes.INTERRUPTED, s.DispatchErrorCodes.DESERIALIZATION_FAILED];
class u extends l.default.Store {
  getLastError() {
    return i
  }
}
u.displayName = "DispatchApplicationErrorStore";
var d = new u(a.default, {
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