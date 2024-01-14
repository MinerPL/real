"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var n = s("446674"),
  a = s("913144");
let l = {};
class r extends n.default.Store {
  getBranches(e) {
    var t;
    return null !== (t = l[e]) && void 0 !== t ? t : []
  }
}
r.displayName = "ApplicationBranchStore";
var i = new r(a.default, {
  OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function(e) {
    let {
      applicationId: t,
      branches: s
    } = e;
    l[t] = s
  },
  LOGOUT: function() {
    l = {}
  }
})