"use strict";
n.r(t), n.d(t, {
  getIsNewMember: function() {
    return u
  },
  default: function() {
    return c
  }
}), n("702976");
var i = n("446674"),
  r = n("38654"),
  s = n("26989"),
  a = n("718517"),
  o = n("568734"),
  l = n("657944");

function u(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    i = (null == e ? void 0 : e.joinedAt) == null ? null : new Date(e.joinedAt),
    r = new Date;
  return !!n || null != i && r.getTime() - i.getTime() < a.default.Millis.WEEK && !(0, o.hasFlag)(null !== (t = null == e ? void 0 : e.flags) && void 0 !== t ? t : 0, l.GuildMemberFlags.COMPLETED_HOME_ACTIONS)
}

function c(e) {
  let t = (0, i.useStateFromStores)([s.default], () => s.default.getSelfMember(e)),
    n = (0, i.useStateFromStores)([r.default], () => r.default.isFullServerPreview(e));
  return u(t, n)
}