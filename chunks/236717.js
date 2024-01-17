"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("446674"),
  l = n("913144");
let s = "UPDATE_NOT_AVAILABLE";

function i(e) {
  s = e.type
}
class r extends a.default.Store {
  getState() {
    return s
  }
}
r.displayName = "AutoUpdateStore";
var o = new r(l.default, {
  CHECKING_FOR_UPDATES: i,
  UPDATE_NOT_AVAILABLE: i,
  UPDATE_AVAILABLE: i,
  UPDATE_MANUALLY: i,
  UPDATE_ERROR: i,
  UPDATE_DOWNLOADED: i
})