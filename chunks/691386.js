"use strict";
r.r(t), r.d(t, {
  PAGINATION_PAGE_SIZE_OPTIONS: function() {
    return a
  },
  MAX_VISIBLE_PAGES: function() {
    return l
  },
  createDefaultMemberSafetyPaginationState: function() {
    return h
  },
  getSearchChunkLimit: function() {
    return d
  },
  GuildMemberSafetyPagination: function() {
    return o
  }
}), r("808653"), r("424973"), r("222007");
var i, n, s = r("26989"),
  u = r("490931");
let a = [12, 25, 50, 100],
  l = 7;

function h() {
  return {
    pageSize: a[0],
    currentPage: 1,
    continuationToken: null
  }
}

function d(e) {
  return Math.max(5 * e.pageSize, 250)
}(n = i || (i = {}))[n.FORWARD = 1] = "FORWARD", n[n.BACKWARD = -1] = "BACKWARD";
class o {
  reset() {
    this._paginationState = h(), this._sortedMemberIds = [], this._cachedPaginationChunks = {}, this._version += 1
  }
  isMemberOnCurrentPage(e) {
    var t;
    let r = null !== (t = this._cachedPaginationChunks[this._paginationState.currentPage]) && void 0 !== t ? t : [];
    return r.includes(e)
  }
  isMemberInAnyChunk(e) {
    return this._sortedMemberIds.includes(e)
  }
  _initPaginationFromRawMembers(e) {
    let t = [],
      r = e.reduce((e, r, i) => (e = this._reduceMemberIdsToPaginationChunks(e, r.userId, i), t.push(r.userId), e), {});
    return [t, r]
  }
  _buildPaginationFromMemberIds(e) {
    let t = e.reduce(this._reduceMemberIdsToPaginationChunks, {});
    return t
  }
  _rebuildPaginationChunksFromStoredMembers() {
    return this._cachedPaginationChunks = this._buildPaginationFromMemberIds(this._sortedMemberIds), this._version += 1, !0
  }
  getPaginationState() {
    return this._paginationState
  }
  updatePaginationToken(e) {
    return e !== this._paginationState.continuationToken && (this._paginationState = {
      ...this._paginationState,
      continuationToken: e
    }, !0)
  }
  _calculateNewPageFromPageSizeChange(e, t) {
    let {
      currentPage: r,
      pageSize: i
    } = this._paginationState, n = e * i <= this._sortedMemberIds.length;
    return n ? Math.max(Math.ceil(i / e * (null != t ? t : r)), 1) : 1
  }
  updatePaginationState(e) {
    let t = !1,
      r = null != e.pageSize && e.pageSize !== this._paginationState.pageSize;
    if (r) {
      var i;
      t = !0, e.currentPage = this._calculateNewPageFromPageSizeChange(null !== (i = e.pageSize) && void 0 !== i ? i : this._paginationState.pageSize, e.currentPage)
    }
    return this._paginationState = {
      ...this._paginationState,
      ...e
    }, t && this._rebuildPaginationChunksFromStoredMembers(), [!0, t]
  }
  updateSortedMembers(e) {
    let [t, r] = this._initPaginationFromRawMembers(e);
    return this._sortedMemberIds = t, this._cachedPaginationChunks = r, this._version += 1, !0
  }
  updateSortedMembersByUserIds(e) {
    return this._sortedMemberIds = e, this._rebuildPaginationChunksFromStoredMembers(), !0
  }
  _findMember(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
      r = e;
    r < this._sortedMemberIds.length && (r = this._sortedMemberIds.length - 1), r < 0 && (r = 0);
    let i = this._sortedMemberIds[e],
      n = s.default.getMember(this.guildId, i);
    for (; null == n && !((e += t) < 0) && !(e >= this._sortedMemberIds.length);) {
      ;
      i = this._sortedMemberIds[e], (null == (n = s.default.getMember(this.guildId, i)) ? void 0 : n.joinedAt) == null && (n = null)
    }
    return n
  }
  getElasticSearchPagination() {
    let {
      pageSize: e,
      currentPage: t
    } = this._paginationState, r = d(this._paginationState), i = Math.min((Math.floor(e * t / r) + 1) * (r - 1), this._sortedMemberIds.length - 1), n = this._findMember(i, -1), s = this._findMember(Math.max(i - r, 0), 1);
    return {
      limit: r,
      after: (0, u.createMemberSearchCursor)(n),
      before: (0, u.createMemberSearchCursor)(s)
    }
  }
  get paginatedMembers() {
    return this._cachedPaginationChunks
  }
  get version() {
    return this._version
  }
  constructor(e, t) {
    this._reduceMemberIdsToPaginationChunks = (e, t, r) => {
      let i = Math.floor(r / this._paginationState.pageSize) + 1;
      return null == e[i] && (e[i] = []), e[i].push(t), e
    }, this.guildId = e, this._paginationState = h(), this._version = 0;
    let [r, i] = this._initPaginationFromRawMembers(t);
    this._sortedMemberIds = r, this._cachedPaginationChunks = i, this._version += 1
  }
}