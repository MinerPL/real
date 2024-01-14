"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007"), n("702976"), n("424973");
var s = n("446674"),
  i = n("913144"),
  r = n("568734"),
  a = n("26989"),
  o = n("305961"),
  d = n("697218"),
  u = n("49111"),
  l = n("657944");
let f = {
    notClaimed: !1,
    notEmailVerified: !1,
    notPhoneVerified: !1,
    newAccount: !1,
    newMember: !1,
    canChat: !0
  },
  _ = new Set,
  c = {};

function g(e) {
  let t;
  m(e), _.add(e);
  let n = o.default.getGuild(e),
    s = d.default.getCurrentUser();
  if (null == n || n.verificationLevel === u.VerificationLevels.NONE || null == s || n.isOwner(s) || s.isPhoneVerified()) return;
  let f = a.default.getMember(n.id, s.id);
  if (null != f) {
    var g;
    if ((0, r.hasFlag)(null !== (g = f.flags) && void 0 !== g ? g : 0, l.GuildMemberFlags.BYPASSES_VERIFICATION)) return;
    let e = new Set;
    for (let t of f.roles) {
      let s = n.getRole(t);
      null != s && !s.managed && e.add(t)
    }
    let t = new Date("2022-12-02 00:00:00"),
      s = null == f.joinedAt || new Date(f.joinedAt) < t,
      i = n.hasFeature(u.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && !s;
    if (!i && e.size > 0) return
  }
  let h = +s.createdAt + 6e4 * u.VerificationCriteria.ACCOUNT_AGE - Date.now(),
    v = +n.joinedAt + 6e4 * u.VerificationCriteria.MEMBER_AGE - Date.now(),
    E = n.verificationLevel >= u.VerificationLevels.LOW && !s.isClaimed(),
    p = !1,
    y = !1,
    T = !1,
    C = !1;
  !s.isPhoneVerified() && !s.isStaff() && (p = n.verificationLevel >= u.VerificationLevels.LOW && !s.verified, y = n.verificationLevel >= u.VerificationLevels.VERY_HIGH, T = n.verificationLevel >= u.VerificationLevels.MEDIUM && h > 0, C = n.verificationLevel >= u.VerificationLevels.HIGH && v > 0);
  let S = [];
  C && S.push(v), T && S.push(h), S.length > 0 && (t = setTimeout(() => i.default.dispatch({
    type: "GUILD_VERIFICATION_CHECK",
    guildId: e
  }), Math.max(...S))), c[e] = {
    notClaimed: E,
    notEmailVerified: p,
    notPhoneVerified: y,
    newAccount: T,
    newMember: C,
    canChat: !(E || p || y || T || C),
    accountDeadline: new Date(Date.now() + h),
    memberDeadline: new Date(Date.now() + v),
    timeoutRef: t
  }
}

function m(e) {
  let t = c[e];
  null != t && clearTimeout(t.timeoutRef), delete c[e]
}

function h(e) {
  _.delete(e.guild.id), g(e.guild.id)
}
class v extends s.default.Store {
  initialize() {
    this.waitFor(o.default, d.default)
  }
  getCheck(e) {
    var t;
    return !_.has(e) && g(e), null !== (t = c[e]) && void 0 !== t ? t : f
  }
  canChatInGuild(e) {
    return this.getCheck(e).canChat
  }
}
v.displayName = "GuildVerificationStore";
var E = new v(i.default, {
  CONNECTION_OPEN: function() {
    for (let e in _.clear(), c) m(e)
  },
  CONNECTION_CLOSED: function() {
    Object.keys(c).forEach(m)
  },
  CURRENT_USER_UPDATE: function() {
    _.clear()
  },
  GUILD_CREATE: h,
  GUILD_UPDATE: h,
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    m(t.id)
  },
  GUILD_MEMBER_UPDATE: function(e) {
    var t;
    let {
      guildId: n,
      user: s
    } = e;
    if (s.id !== (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
    _.delete(n)
  },
  GUILD_VERIFICATION_CHECK: function(e) {
    let {
      guildId: t
    } = e;
    g(t)
  }
})