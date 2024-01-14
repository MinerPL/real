"use strict";
s.r(e), s.d(e, {
  default: function() {
    return d
  }
});
var n = s("987317"),
  a = s("42203"),
  r = s("569363");

function d() {
  let t = a.default.getDMFromUserId(r.SYSTEM_USER);
  null != t && n.default.selectPrivateChannel(t)
}