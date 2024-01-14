"use strict";
i.r(t), i.d(t, {
  MemberSafetySecondaryIndex: function() {
    return r
  },
  GuildMemberSafetyMembers: function() {
    return g
  }
}), i("424973"), i("222007");
var r, n, s = i("969176"),
  u = i.n(s),
  a = i("407846"),
  l = i("654017"),
  h = i("26989"),
  o = i("697218"),
  d = i("490931"),
  m = i("159132");
let c = Date.now();

function _(e) {
  let t = !e.isCurrentGuildMemberByTimestamp,
    i = [t ? "NEW_GUILD_MEMBER" : "CURRENT_GUILD_MEMBER"];
  return e.isIncludedInSearchResults && i.push("INCLUDED_IN_SEARCH_RESULTS"), i
}

function M(e) {
  return -e.joinedAtTimestamp
}

function f() {
  return new a.default(_, M)
}(n = r || (r = {})).NEW_GUILD_MEMBER = "NEW_GUILD_MEMBER", n.CURRENT_GUILD_MEMBER = "CURRENT_GUILD_MEMBER", n.INCLUDED_IN_SEARCH_RESULTS = "INCLUDED_IN_SEARCH_RESULTS";
class g {
  reset() {
    this._membersMap.clear(), this._membersMap = f(), this.resetNewMemberTimestamp()
  }
  resetNewMemberTimestamp() {
    this.newMemberTimestamp = Date.now()
  }
  getJoinedAtTimestamp(e) {
    let t = null != e.joinedAt ? new Date(e.joinedAt) : new Date,
      i = t.getTime();
    return i
  }
  enhanceNewMember(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      i = this.getJoinedAtTimestamp(e),
      {
        hasUnusualDmActivity: r,
        hasUnusualAccountActivity: n,
        sourceInviteCode: s,
        joinSourceType: u,
        inviterId: a,
        integrationType: l
      } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
      h = o.default.getUser(e.userId),
      d = {
        hasUnusualDmActivity: r,
        hasUnusualAccountActivity: n,
        sourceInviteCode: s,
        joinSourceType: u,
        inviterId: a,
        integrationType: l,
        ...e,
        isCurrentGuildMemberByTimestamp: i <= this.newMemberTimestamp,
        isIncludedInSearchResults: !1,
        user: h,
        joinedAtTimestamp: i,
        ...t
      };
    return d
  }
  _computeMemberSupplementals(e, t) {
    var i;
    let r = (0, m.getMemberSupplementalByGuildId)(this.guildId),
      {
        sourceInviteCode: n,
        joinSourceType: s,
        inviterId: u,
        integrationType: a
      } = null !== (i = r[e]) && void 0 !== i ? i : {};
    return {
      sourceInviteCode: null != n ? n : null,
      joinSourceType: null != s ? s : null,
      inviterId: null != u ? u : null,
      integrationType: null != a ? a : null,
      hasUnusualDmActivity: function(e) {
        if (null == e) return !1;
        let t = new Date(e).getTime();
        return t >= c - d.UNUSUAL_DM_COMPARISON_DELTA
      }(t),
      hasUnusualAccountActivity: (0, l.isSpammer)(e)
    }
  }
  createMember(e) {
    return this._membersMap.set(e.userId, e)
  }
  updateMember(e, t) {
    var i;
    if (null == t) return this._membersMap.set(e.userId, e);
    let r = {
        ...e
      },
      n = {
        ...t
      },
      s = !1,
      {
        sourceInviteCode: a,
        hasUnusualDmActivity: l,
        hasUnusualAccountActivity: h,
        joinSourceType: o,
        inviterId: d,
        integrationType: m
      } = this._computeMemberSupplementals(r.userId, null !== (i = n.unusualDMActivityUntil) && void 0 !== i ? i : r.unusualDMActivityUntil);
    for (let e in r.sourceInviteCode !== a && (n.sourceInviteCode = a), r.hasUnusualDmActivity !== l && (n.hasUnusualDmActivity = l), r.hasUnusualAccountActivity !== h && (n.hasUnusualAccountActivity = h), r.joinSourceType !== o && (n.joinSourceType = o), r.inviterId !== d && (n.inviterId = d), r.integrationType !== m && (n.integrationType = m), n) {
      let t = n[e],
        i = r[e];
      !u(t, i) && (r[e] = t, s = !0)
    }
    return this._membersMap.set(r.userId, r) || s
  }
  upsertMember(e, t) {
    let i = this.getMemberByUserId(e);
    if (null == i) {
      let t = h.default.getTrueMember(this.guildId, e);
      if (null == t) return !1;
      i = this.enhanceNewMember(t)
    }
    return this.updateMember(i, t)
  }
  removeMember(e) {
    return this._membersMap.delete(e)
  }
  syncFromGuildMemberStore(e, t) {
    let i = h.default.getTrueMember(e, t);
    return null == i ? this.removeMember(t) : this.upsertMember(t, i)
  }
  getMemberByUserId(e) {
    return this._membersMap.get(e)
  }
  values(e) {
    return this._membersMap.values(e, !0)
  }
  count(e) {
    return this._membersMap.size(e)
  }
  get version() {
    return this._membersMap.version
  }
  constructor(e) {
    this.newMemberTimestamp = Date.now(), this.guildId = e, this._membersMap = f()
  }
}