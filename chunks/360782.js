"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("860957");

function u() {
  let e = s.default.getFocusedPID();
  return null != e && (s.default.isReady(e) || s.default.isCrashed(e)) ? e : null
}