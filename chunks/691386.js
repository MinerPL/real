            "use strict";
            i.r(t), i.d(t, {
                PAGINATION_PAGE_SIZE_OPTIONS: function() {
                    return l
                },
                MAX_VISIBLE_PAGES: function() {
                    return h
                },
                createDefaultMemberSafetyPaginationState: function() {
                    return o
                },
                getSearchChunkLimit: function() {
                    return d
                },
                GuildMemberSafetyPagination: function() {
                    return m
                }
            }), i("808653"), i("424973"), i("222007");
            var r, n, s = i("525065"),
                u = i("26989"),
                a = i("490931");
            let l = [12, 25, 50, 100],
                h = 7;

            function o() {
                return {
                    pageSize: l[0],
                    currentPage: 1,
                    continuationToken: null
                }
            }(n = r || (r = {}))[n.FORWARD = 1] = "FORWARD", n[n.BACKWARD = -1] = "BACKWARD";

            function d(e) {
                return Math.max(5 * e.pageSize, 250)
            }
            class m {
                reset() {
                    this._paginationState = o(), this._sortedMemberIds = [], this._cachedPaginationChunks = {}, this._version += 1
                }
                isMemberOnCurrentPage(e) {
                    var t;
                    let i = null !== (t = this._cachedPaginationChunks[this._paginationState.currentPage]) && void 0 !== t ? t : [];
                    return i.includes(e)
                }
                isMemberInAnyChunk(e) {
                    return this._sortedMemberIds.includes(e)
                }
                _initPaginationFromRawMembers(e) {
                    let t = [],
                        i = e.reduce((e, i, r) => (e = this._reduceMemberIdsToPaginationChunks(e, i.userId, r), t.push(i.userId), e), {});
                    return [t, i]
                }
                _buildPaginationFromMemberIds(e) {
                    let t = e.reduce(this._reduceMemberIdsToPaginationChunks, {});
                    return t
                }
                _rebuildPaginationChunksFromStoredMembers() {
                    return this._cachedPaginationChunks = this._buildPaginationFromMemberIds(this._sortedMemberIds), this._version += 1, !0
                }
                calculateNewContinuationToken(e) {
                    var t, i, r;
                    let n = null !== (t = s.default.getMemberCount(this.guildId)) && void 0 !== t ? t : this._sortedMemberIds.length,
                        u = this._sortedMemberIds.length - 1,
                        a = this._sortedMemberIds[u],
                        l = Math.min(d(this._paginationState), u);
                    let h = null != (r = e).totalResultsCount ? r.totalResultsCount : r.currentPage * r.pageSize,
                        o = null !== (i = this._sortedMemberIds[h - 1]) && void 0 !== i ? i : a;
                    if (null == this._paginationState.continuationToken) return h < l ? this._paginationState.continuationToken : o;
                    let m = this._sortedMemberIds.findIndex(e => e === this._paginationState.continuationToken);
                    return -1 === m ? o : h > n ? a : m - h >= 0 ? this._paginationState.continuationToken : Math.ceil(h / l) > Math.ceil(m / l) ? o : this._paginationState.continuationToken
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
                        currentPage: i,
                        pageSize: r
                    } = this._paginationState, n = e * r <= this._sortedMemberIds.length;
                    return n ? Math.max(Math.ceil(r / e * (null != t ? t : i)), 1) : 1
                }
                updatePaginationState(e) {
                    let t = !1,
                        i = null != e.pageSize && e.pageSize !== this._paginationState.pageSize;
                    if (i) {
                        var r;
                        t = !0, e.currentPage = this._calculateNewPageFromPageSizeChange(null !== (r = e.pageSize) && void 0 !== r ? r : this._paginationState.pageSize, e.currentPage)
                    }
                    return this._paginationState = {
                        ...this._paginationState,
                        ...e
                    }, t && this._rebuildPaginationChunksFromStoredMembers(), [!0, t]
                }
                updateSortedMembers(e) {
                    let [t, i] = this._initPaginationFromRawMembers(e);
                    return this._sortedMemberIds = t, this._cachedPaginationChunks = i, this._version += 1, !0
                }
                updateSortedMembersByUserIds(e) {
                    return this._sortedMemberIds = e, this._rebuildPaginationChunksFromStoredMembers(), !0
                }
                _findMember(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                        i = e;
                    i < this._sortedMemberIds.length && (i = this._sortedMemberIds.length - 1), i < 0 && (i = 0);
                    let r = this._sortedMemberIds[e],
                        n = u.default.getMember(this.guildId, r);
                    for (; null == n && !((e += t) < 0) && !(e >= this._sortedMemberIds.length);) {
                        ;
                        r = this._sortedMemberIds[e], (null == (n = u.default.getMember(this.guildId, r)) ? void 0 : n.joinedAt) == null && (n = null)
                    }
                    return n
                }
                getElasticSearchPagination() {
                    let {
                        pageSize: e,
                        currentPage: t
                    } = this._paginationState, i = d(this._paginationState), r = Math.min((Math.floor(e * t / i) + 1) * (i - 1), this._sortedMemberIds.length - 1), n = this._findMember(r, -1), s = this._findMember(Math.max(r - i, 0), 1);
                    return {
                        limit: i,
                        after: (0, a.createMemberSearchCursor)(n),
                        before: (0, a.createMemberSearchCursor)(s)
                    }
                }
                get paginatedMembers() {
                    return this._cachedPaginationChunks
                }
                get version() {
                    return this._version
                }
                constructor(e, t) {
                    this._reduceMemberIdsToPaginationChunks = (e, t, i) => {
                        let r = Math.floor(i / this._paginationState.pageSize) + 1;
                        return null == e[r] && (e[r] = []), e[r].push(t), e
                    }, this.guildId = e, this._paginationState = o(), this._version = 0;
                    let [i, r] = this._initPaginationFromRawMembers(t);
                    this._sortedMemberIds = i, this._cachedPaginationChunks = r, this._version += 1
                }
            }