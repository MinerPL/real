"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  },
  isRawMessageMentioned: function() {
    return o
  },
  isMentioned: function() {
    return d
  }
});
var s = n("42203"),
  i = n("26989"),
  r = n("305961");

function a(e) {
  let {
    message: t,
    userId: n,
    suppressEveryone: s = !1,
    suppressRoles: i = !1
  } = e;
  return d({
    userId: n,
    channelId: t.channel_id,
    mentionEveryone: t.mentionEveryone,
    mentionUsers: t.mentions,
    mentionRoles: t.mentionRoles,
    suppressEveryone: s,
    suppressRoles: i
  })
}

function o(e) {
  var t, n, s, i;
  let {
    rawMessage: r,
    userId: a,
    suppressEveryone: o = !1,
    suppressRoles: u = !1
  } = e;
  return d({
    userId: a,
    channelId: r.channel_id,
    mentionEveryone: null !== (n = r.mention_everyone) && void 0 !== n && n,
    mentionUsers: null !== (s = null === (t = r.mentions) || void 0 === t ? void 0 : t.map(e => e.id)) && void 0 !== s ? s : [],
    mentionRoles: null !== (i = r.mention_roles) && void 0 !== i ? i : [],
    suppressEveryone: o,
    suppressRoles: u
  })
}

function d(e) {
  let {
    userId: t,
    channelId: n,
    mentionEveryone: a,
    mentionUsers: o,
    mentionRoles: d,
    suppressEveryone: u = !1,
    suppressRoles: l = !1
  } = e;
  if (a && !u || o.includes(t)) return !0;
  if (l || null == d || 0 === d.length) return !1;
  let f = s.default.getChannel(n);
  if (null == f) return !1;
  let _ = f.getGuildId();
  if (null == _) return !1;
  let c = r.default.getGuild(_);
  if (null == c) return !1;
  let g = i.default.getMember(_, t);
  return null != g && d.some(e => g.roles.includes(e))
}