"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("446674"),
  l = n("913144");
let a = null;
class i extends s.default.Store {
  hasAction() {
    return null != a
  }
  getAction() {
    return a
  }
}

function r(e) {
  a = e.requiredAction
}
i.displayName = "UserRequiredActionStore";
var o = new i(l.default, {
  CONNECTION_OPEN: r,
  USER_REQUIRED_ACTION_UPDATE: r
})