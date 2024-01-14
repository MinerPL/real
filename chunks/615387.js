"use strict";
l.r(t), l.d(t, {
  getHasImportantUnread: function() {
    return n
  }
}), l("446674");
var s = l("660478"),
  u = l("282109"),
  i = l("133335");

function n(e) {
  return s.default.hasUnread(e.id) && u.default.getChannelUnreadMode(e) === i.UnreadMode.IMPORTANT
}