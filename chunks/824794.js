"use strict";
n.r(t), n.d(t, {
  shouldDisableUserPresenceInChannel: function() {
    return l
  }
});
var a = n("42203");

function l(e, t) {
  let n = a.default.getChannel(t);
  return null != n && e.bot && n.isPrivate() && null == n.rawRecipients.find(t => t.id === e.id)
}