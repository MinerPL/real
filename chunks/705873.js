"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("702976");
var i = n("49111");

function r(e) {
  var t;
  return ((null !== (t = e.flags) && void 0 !== t ? t : 0) & i.UserFlags.STAFF) === i.UserFlags.STAFF || (null == e ? void 0 : e.personal_connection_id) != null
}