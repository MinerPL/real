"use strict";
n.r(t), n.d(t, {
  canChannelBeDefault: function() {
    return o
  }
}), n("446674");
var i = n("203288"),
  r = n("42203"),
  s = n("991170"),
  a = n("49111");

function o(e, t) {
  return i.default.isChannelGated(e, t) || s.default.canEveryoneRole(a.Permissions.VIEW_CHANNEL, r.default.getChannel(t))
}