"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("446674"),
  s = n("913144"),
  i = n("957255"),
  l = n("49111");

function r() {
  return !0
}
class o extends a.default.Store {
  initialize() {
    this.waitFor(i.default), this.syncWith([i.default], r)
  }
  channelNoticePredicate(e, t) {
    let n = Date.now() - t >= l.CHANNEL_NOTICE_SHOW_DELAY;
    return n && i.default.can(l.Permissions.ADMINISTRATOR, e)
  }
}
o.displayName = "InviteNoticeStore";
var u = new o(s.default)