"use strict";
n.r(t), n.d(t, {
  commandName: function() {
    return i
  },
  toPermissionKey: function() {
    return r
  },
  keyPermissions: function() {
    return a
  }
}), n("222007");
var s = n("798609");

function i(e, t) {
  return e === s.ApplicationCommandType.CHAT ? "/" + t : t
}

function r(e, t) {
  return "".concat(e, ":").concat(t)
}

function a(e) {
  return Object.fromEntries(e.map(e => [r(e.id, e.type), e]))
}
n("524768")