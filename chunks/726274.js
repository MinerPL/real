"use strict";
n.r(t), n.d(t, {
  useMemberActionsForChannel: function() {
    return d
  },
  useNextMemberAction: function() {
    return c
  },
  useAllActionsCompleted: function() {
    return f
  }
}), n("702976");
var s = n("65597"),
  a = n("26989"),
  l = n("568734"),
  i = n("698882"),
  r = n("675305"),
  o = n("363176"),
  u = n("657944");

function d(e, t) {
  var n;
  let a = (0, o.default)(e),
    l = (0, s.default)([i.default], () => i.default.getNewMemberActions(e), [e]),
    u = (0, s.default)([r.default], () => r.default.getCompletedActions(e));
  if (!a) return {};
  let d = null !== (n = null == l ? void 0 : l.findIndex(e => e.channelId === t.id)) && void 0 !== n ? n : 0,
    c = d >= 0 && null != l ? l[d] : null,
    f = null != c && (null == u ? void 0 : u[c.channelId]) === !0;
  return {
    channelAction: c,
    completed: f
  }
}

function c(e, t) {
  let n = (0, s.default)([i.default], () => i.default.getNewMemberActions(e)),
    a = (0, s.default)([r.default], () => r.default.getCompletedActions(e)),
    l = null == n ? void 0 : n.find(e => (null == a ? void 0 : a[e.channelId]) !== !0 && e.channelId !== t);
  return l
}

function f(e) {
  var t;
  let n = (0, s.default)([a.default], () => a.default.getSelfMember(e));
  return (0, l.hasFlag)(null !== (t = null == n ? void 0 : n.flags) && void 0 !== t ? t : 0, u.GuildMemberFlags.COMPLETED_HOME_ACTIONS)
}