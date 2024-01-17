"use strict";
i.r(t), i.d(t, {
  GuildMemberSafetyPageStore: function() {
    return o
  }
}), i("222007"), i("808653"), i("424973");
var r = i("917351"),
  n = i("26989"),
  s = i("697218"),
  a = i("718517"),
  u = i("493910"),
  l = i("691386"),
  h = i("936763");
let d = 3 * a.default.Millis.SECOND;
class o {
  getSearchIndex() {
    let e = null == this._search || this._search.hasDefaultQuery;
    return e ? u.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER : u.MemberSafetySecondaryIndex.INCLUDED_IN_SEARCH_RESULTS
  }
  initialize() {
    if (this._initialized) {
      this.lastCursorTimestamp = Date.now();
      return
    }
    this._initialized = !0, this._search = new h.GuildMemberSafetySearch(this.guildId), this._members = new u.GuildMemberSafetyMembers(this.guildId), this._pagination = new l.GuildMemberSafetyPagination(this.guildId, this._members.values(this.getSearchIndex()))
  }
  get isInitialized() {
    return this._initialized
  }
  reset() {
    var e, t, i;
    let r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    this._initialized && (null === (e = this._members) || void 0 === e || e.reset(), null === (t = this._pagination) || void 0 === t || t.reset(), null === (i = this._search) || void 0 === i || i.reset(), r && this.initialize())
  }
  get searchChunkSize() {
    return null != this._pagination && this._initialized ? (0, l.getSearchChunkLimit)(this._pagination.getPaginationState()) : 0
  }
  getMember(e) {
    var t;
    return null != this._members && this._initialized ? null !== (t = this._members.getMemberByUserId(e)) && void 0 !== t ? t : null : null
  }
  getMembersByIndex(e) {
    return null != this._members && this._initialized ? [this._members.values(e), this._members.version] : [
      [], 0
    ]
  }
  countMembersByIndex(e) {
    return null != this._members && this._initialized ? this._members.count(e) : 0
  }
  _checkUpdatesForPaginationUpdate(e, t) {
    return null != t.isIncludedInSearchResults && t.isIncludedInSearchResults !== e.isIncludedInSearchResults || null != t.isCurrentGuildMemberByTimestamp && t.isCurrentGuildMemberByTimestamp !== e.isCurrentGuildMemberByTimestamp || !1
  }
  _getIsIncludedInSearch(e, t) {
    if (null == this._search) return [!1, !1];
    let i = this._search.hasDefaultQuery;
    if (i) return [!1, !1];
    let r = {
        ...e,
        ...t
      },
      n = this._search.isMemberIncludedInSearchResults(r),
      s = n !== e.isIncludedInSearchResults;
    return [n, s]
  }
  updatePaginationChunks() {
    if (null == this._pagination || null == this._members || !this._initialized) return !1;
    let e = this._members.values(this.getSearchIndex());
    return this._pagination.updateSortedMembers(e)
  }
  removeMember(e) {
    if (null == this._members || !this._initialized) return !1;
    let t = this._members.getMemberByUserId(e);
    if (null == t) return !1;
    let i = this._members.removeMember(e);
    return i ? this.updatePaginationChunks() : i
  }
  _rawUpdateMember(e, t) {
    if (null == this._members) return [!1, !1];
    let i = !1,
      r = this._members.getMemberByUserId(e);
    if (null == r) {
      i = !0;
      let s = n.default.getTrueMember(this.guildId, e);
      if (null == s) return [!1, !1];
      r = this._members.enhanceNewMember(s, t)
    }
    if (null == t.isIncludedInSearchResults) {
      let [e, n] = this._getIsIncludedInSearch(r, t);
      n && (i = !0, t.isIncludedInSearchResults = e)
    } else t.isIncludedInSearchResults !== r.isIncludedInSearchResults && (i = !0);
    let s = this._members.updateMember(r, t);
    return !i && (i = this._checkUpdatesForPaginationUpdate(r, t)), [i, s]
  }
  isMemberInIndex(e) {
    return null != this._members && !!this._initialized && this._members._membersMap.has(e)
  }
  isMemberIncludedInSearchResults(e) {
    if (null == this._members || null == this._search || null == this._pagination || !this._initialized) return !1;
    let t = this._search.hasDefaultQuery;
    if (t) return this._pagination.isMemberInAnyChunk(e);
    let i = this._members.getMemberByUserId(e);
    if (null == i) {
      let t = n.default.getTrueMember(this.guildId, e);
      if (null == t) return !1;
      i = this._members.enhanceNewMember(t)
    } else if (i.isIncludedInSearchResults) return !0;
    let r = this._search.isMemberIncludedInSearchResults(i);
    return r
  }
  updateMember(e, t) {
    if (null == this._members || !this._initialized) return !1;
    let [i, r] = this._rawUpdateMember(e, t);
    return i ? this.updatePaginationChunks() : r
  }
  updateClientMembers(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == this._members || !this._initialized) return !1;
    let r = !1,
      n = !1;
    for (let s of e) {
      if (null == s.joinedAt) continue;
      let e = s;
      if (t && (e = {
          ...e,
          isIncludedInSearchResults: !0
        }), i) {
        let t = this._members.getJoinedAtTimestamp(s);
        e = {
          ...e,
          isCurrentGuildMemberByTimestamp: t <= this._members.newMemberTimestamp,
          refreshTimestamp: this.lastRefreshTimestamp
        }
      }
      let [a, u] = this._rawUpdateMember(s.userId, e);
      r = a || r, n = u || n
    }
    return r ? this.updatePaginationChunks() : n
  }
  updateServerMembers(e) {
    if (null == this._members || !this._initialized) return !1;
    let t = !1,
      i = !1;
    for (let r of e) {
      let e = n.default.getTrueMember(this.guildId, r.user.id);
      if (null == e) continue;
      let [s, a] = this._rawUpdateMember(r.user.id, e);
      t = s || t, i = a || i
    }
    return t ? this.updatePaginationChunks() : i
  }
  updateMembersByMemberIds(e) {
    if (null == this._members || !this._initialized) return !1;
    let t = e.reduce((e, t) => {
      let i = n.default.getTrueMember(this.guildId, t);
      return null != i && e.push(i), e
    }, []);
    return this.updateClientMembers(t)
  }
  updateSearchedMembersByMemberIds(e) {
    if (null == this._search || null == this._members || !this._initialized) return !1;
    let t = e.reduce((e, t) => {
      let i = n.default.getTrueMember(this.guildId, t);
      return null != i && e.push(i), e
    }, []);
    return this.updateClientMembers(t, this._search.requiresUsernameMatch, 0 !== this.lastRefreshTimestamp)
  }
  rebuildAllMembers() {
    if (null == this._members || !this._initialized) return !1;
    let e = n.default.getMembers(this.guildId);
    return this.updateClientMembers(e)
  }
  _scheduleRefresh(e) {
    this.lastRefreshTimestamp = e, this.lastCursorTimestamp = Date.now(), null != this._lastRefreshTimer && clearTimeout(this._lastRefreshTimer), this._lastRefreshTimer = setTimeout(() => {
      this._lastRefreshTimer = null, this.lastRefreshTimestamp = 0
    }, d)
  }
  refreshNewMembersAndSearchResults() {
    if (null == this._search || null == this._members || !this._initialized) return !1;
    let e = Number(Date.now());
    this._scheduleRefresh(e);
    let t = (0, r.cloneDeep)(this._members.values(u.MemberSafetySecondaryIndex.NEW_GUILD_MEMBER)),
      i = !1;
    for (let r of t) i = this._members.updateMember(r, {
      isCurrentGuildMemberByTimestamp: !0,
      refreshTimestamp: e,
      user: s.default.getUser(r.userId)
    }) || i;
    this._members.resetNewMemberTimestamp(), this.resetSearchState() && (i = !1);
    let [n, a] = this.updatePaginationState({
      currentPage: 1
    }, !1);
    return a && (i = !1), i && this.updatePaginationChunks(), !0
  }
  getNewMemberTimestamp() {
    return null != this._members && this._initialized ? this._members.newMemberTimestamp : 0
  }
  updateSearchState(e) {
    if (null == this._members || null == this._search || !this._initialized) return !1;
    let t = !!this._search.hasDefaultQuery,
      i = this._search.updateSearchState(e);
    if (this._search.hasDefaultQuery && t) return this.updatePaginationChunks();
    let n = (0, r.cloneDeep)(this._members.values(u.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER)),
      s = t !== this._search.hasDefaultQuery;
    for (let e of n) {
      if (!e.isCurrentGuildMemberByTimestamp) continue;
      let t = this._search.isMemberIncludedInSearchResults(e);
      t !== e.isIncludedInSearchResults && (s = !0, i = !0, this._members.updateMember(e, {
        isIncludedInSearchResults: t
      }))
    }
    return s ? (this.updatePaginationChunks(), this.updatePaginationState({
      currentPage: 1
    }), !0) : i
  }
  getSearchState() {
    return null != this._search && this._initialized ? this._search.getSearchState() : (0, h.getDefaultSearchState)()
  }
  hasDefaultSearchState() {
    return null == this._search || !this._initialized || this._search.hasDefaultQuery
  }
  resetSearchState() {
    if (null == this._search || !this._initialized) return !1;
    let e = this._search.resetSearchState();
    return !!e && this.updatePaginationChunks()
  }
  getTotalResultsCount() {
    return null != this._search && null != this._pagination && this._initialized ? this._search.hasDefaultQuery && null != this._defaultSearchTotalResultsCount ? this._defaultSearchTotalResultsCount : this._pagination.getPaginationState().totalResultsCount : 0
  }
  updatePaginationState(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return null != this._search && null != this._pagination && this._initialized ? (t && (this.lastRefreshTimestamp = 0), this._search.hasDefaultQuery && null != e.totalResultsCount && (this._defaultSearchTotalResultsCount = e.totalResultsCount), this._pagination.updatePaginationState(e)) : [!1, !1]
  }
  getPaginationState() {
    return null != this._pagination && this._initialized ? this._pagination.getPaginationState() : (0, l.createDefaultMemberSafetyPaginationState)()
  }
  getPaginatedMembers() {
    return null != this._pagination && this._initialized ? [this._pagination.paginatedMembers, this._pagination.version] : [{}, 0]
  }
  calculateNewContinuationToken(e) {
    return null != this._pagination && this._initialized ? this._pagination.calculateNewContinuationToken(e) : null
  }
  updatePaginationToken(e) {
    return null != this._pagination && !!this._initialized && this._pagination.updatePaginationToken(e)
  }
  getElasticSearchPagination() {
    return null != this._pagination && this._initialized ? this._pagination.getElasticSearchPagination() : null
  }
  constructor(e) {
    this.lastRefreshTimestamp = 0, this.lastCursorTimestamp = Date.now(), this._lastRefreshTimer = null, this.guildId = e, this._initialized = !1, this._members = null, this._pagination = null, this._search = null
  }
}