"use strict";
n.r(t), n.d(t, {
  getAutomodQuarantinedProfileFlags: function() {
    return a
  },
  getAutomodQuarantinedGuildMemberFlags: function() {
    return o
  },
  hasAutomodQuarantinedProfile: function() {
    return l
  }
}), n("222007"), n("808653"), n("424973"), n("702976");
var i = n("568734"),
  r = n("657944");
let s = [r.GuildMemberFlags.AUTOMOD_QUARANTINED_BIO, r.GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME];

function a(e) {
  if (null == e) return new Set;
  let t = new Set(s.reduce((t, n) => ((0, i.hasFlag)(null != e ? e : 0, n) && t.push(n), t), []));
  return t
}

function o(e) {
  return null == e ? new Set : a(e.flags)
}

function l(e) {
  return null != e && null != e.flags && s.some(t => {
    var n;
    return (0, i.hasFlag)(null !== (n = e.flags) && void 0 !== n ? n : 0, t)
  })
}