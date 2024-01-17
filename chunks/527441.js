"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("446674"),
  s = n("913144");
let i = null;
class l extends a.default.PersistedStore {
  initialize(e) {
    var t;
    i = null !== (t = null == e ? void 0 : e.type) && void 0 !== t ? t : null
  }
  getType() {
    return i
  }
  getState() {
    return {
      type: i
    }
  }
}
l.displayName = "NewUserStore", l.persistKey = "nuf";
var r = new l(s.default, {
  NUF_NEW_USER: function(e) {
    let {
      newUserType: t
    } = e;
    i = t
  },
  NUF_COMPLETE: function() {
    i = null
  }
})