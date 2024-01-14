"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var a = n("446674"),
  s = n("95410"),
  i = n("913144"),
  l = n("525065"),
  r = n("305961"),
  o = n("957255"),
  u = n("49111");
let d = {
  MAX_MEMBER_COUNT: new Set
};
class c extends a.default.Store {
  initialize() {
    var e;
    this.waitFor(o.default, r.default, l.default), this.syncWith([o.default, r.default, l.default], u.NOOP), s.default.remove(u.ChannelNoticeTypes.MAX_MEMBER_COUNT_100), s.default.remove(u.ChannelNoticeTypes.MAX_MEMBER_COUNT_250), e = new Set(s.default.get(u.ChannelNoticeTypes.MAX_MEMBER_COUNT)), d[u.ChannelNoticeTypes.MAX_MEMBER_COUNT] = void 0 !== e ? e : new Set
  }
  isVisible(e) {
    var t;
    if (null == e) return !1;
    let n = null !== (t = l.default.getMemberCount(e.id)) && void 0 !== t ? t : 0,
      a = o.default.can(u.Permissions.ADMINISTRATOR, e);
    return !d[u.ChannelNoticeTypes.MAX_MEMBER_COUNT].has(e.id) && a && e.maxMembers > 0 && e.maxMembers - n <= 1e4
  }
}
c.displayName = "MaxMemberCountChannelNoticeStore";
var E = new c(i.default, {
  MAX_MEMBER_COUNT_NOTICE_DISMISS: function(e) {
    let t = e.guildId;
    if (!d[u.ChannelNoticeTypes.MAX_MEMBER_COUNT].has(t)) return d[u.ChannelNoticeTypes.MAX_MEMBER_COUNT].add(t), s.default.set(u.ChannelNoticeTypes.MAX_MEMBER_COUNT, d[u.ChannelNoticeTypes.MAX_MEMBER_COUNT]), !0
  }
})