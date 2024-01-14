"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("446674"),
  a = n("913144"),
  s = n("42203"),
  i = n("86878"),
  r = n("377253");
let o = null;
class u extends l.default.Store {
  initialize() {
    this.waitFor(s.default, i.default, r.default)
  }
  getApps() {
    return o
  }
}
u.displayName = "AuthorizedAppsStore";
var d = new u(a.default, {
  USER_AUTHORIZED_APPS_UPDATE: function(e) {
    o = e.apps
  }
})