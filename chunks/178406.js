            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return E
                }
            }), i("808653"), i("424973"), i("222007");
            var r = i("446674"),
                n = i("913144"),
                s = i("271938"),
                u = i("26989"),
                a = i("305961"),
                l = i("697218"),
                h = i("637240"),
                o = i("159132"),
                d = i("835257");
            let m = !1,
                c = {};

            function _(e) {
                return null == c[e] && (c[e] = new h.GuildMemberSafetyPageStore(e)), c[e]
            }

            function M(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = _(e);
                i.reset(t)
            }

            function f() {
                return !1
            }

            function g(e) {
                let {
                    guildId: t
                } = e, i = _(t);
                return i.rebuildAllMembers()
            }

            function b(e) {
                let {
                    guildId: t,
                    userId: i
                } = e, r = _(t);
                return r.updateMembersByMemberIds([i])
            }

            function I(e) {
                let t = !1;
                return e.guilds.forEach(e => {
                    let {
                        id: i,
                        members: r
                    } = e, n = _(i);
                    t = n.updateServerMembers(r) || t
                }), t
            }
            class p extends r.default.Store {
                initialize() {
                    this.waitFor(s.default, u.default, l.default)
                }
                isInitialized(e) {
                    let t = _(e);
                    return t.isInitialized
                }
                getMembersByGuildId(e, t) {
                    let i = _(e);
                    return i.getMembersByIndex(t)
                }
                getMembersCountByGuildId(e, t) {
                    let i = _(e);
                    return i.countMembersByIndex(t)
                }
                getEstimatedMemberSearchCountByGuildId(e) {
                    let t = _(e),
                        i = t.searchChunkSize,
                        r = t.countMembersByIndex(t.getSearchIndex()),
                        n = t.getTotalResultsCount();
                    return null == n || n < i ? r : n
                }
                getKnownMemberSearchCountByGuildId(e) {
                    let t = _(e);
                    return t.countMembersByIndex(t.getSearchIndex())
                }
                getCurrentMemberSearchResultsByGuildId(e) {
                    let t = _(e);
                    return t.getMembersByIndex(t.getSearchIndex())
                }
                getSearchStateByGuildId(e) {
                    let t = _(e);
                    return t.getSearchState()
                }
                hasDefaultSearchStateByGuildId(e) {
                    let t = _(e);
                    return t.hasDefaultSearchState()
                }
                getPagedMembersByGuildId(e) {
                    let t = _(e);
                    return t.getPaginatedMembers()
                }
                getPaginationStateByGuildId(e) {
                    let t = _(e);
                    return t.getPaginationState()
                }
                getElasticSearchPaginationByGuildId(e) {
                    let t = _(e);
                    return t.getElasticSearchPagination()
                }
                calculateNewContinuationToken(e, t) {
                    let i = _(e);
                    return i.calculateNewContinuationToken(t)
                }
                getEnhancedMember(e, t) {
                    let i = _(e);
                    return i.getMember(t)
                }
                getNewMemberTimestamp(e) {
                    let t = _(e);
                    return t.getNewMemberTimestamp()
                }
                getLastRefreshTimestamp(e) {
                    let t = _(e);
                    return t.lastRefreshTimestamp
                }
                getLastCursorTimestamp(e) {
                    let t = _(e);
                    return t.lastCursorTimestamp
                }
            }
            p.displayName = "MemberSafetyStore";
            let S = new p(n.default, {
                CONNECTION_OPEN: function(e) {
                    return m ? m = !1 : ! function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        for (let t in c) M(t, e)
                    }(!0), I(e)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    return I(e)
                },
                LOCAL_MESSAGES_LOADED: function(e) {
                    let {
                        guildId: t,
                        members: i
                    } = e;
                    if (null == t || null == a.default.getGuild(t)) return !1;
                    m = !0;
                    let r = _(t),
                        n = [];
                    for (let e of i) {
                        let t = r.getMember(e.userId);
                        null == t && n.push(e)
                    }
                    return n.length > 0 && r.updateClientMembers(n)
                },
                CACHE_LOADED: function(e) {
                    let {
                        guildMembers: t
                    } = e, i = !1;
                    return m = !0, Object.entries(t).forEach(e => {
                        let [t, r] = e, n = _(t);
                        i = n.updateClientMembers(Object.values(r)) || i
                    }), i
                },
                PASSIVE_UPDATE_V1: function(e) {
                    let {
                        members: t,
                        guildId: i
                    } = e;
                    if (null != t) {
                        let e = _(i);
                        return e.updateServerMembers(t)
                    }
                    return !1
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e, i = _(t.id);
                    M(t.id, i.isInitialized)
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e;
                    M(t)
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    let {
                        guildId: t,
                        members: i
                    } = e, r = _(t);
                    return r.updateServerMembers(i)
                },
                GUILD_MEMBER_ADD: f,
                GUILD_MEMBER_UPDATE: f,
                GUILD_MEMBER_UPDATE_LOCAL: function(e) {
                    let {
                        guildId: t
                    } = e, i = s.default.getId(), r = _(t);
                    return r.updateMembersByMemberIds([i])
                },
                GUILD_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        user: i
                    } = e, r = _(t);
                    return r.removeMember(i.id)
                },
                GUILD_ROLE_UPDATE: g,
                GUILD_ROLE_DELETE: g,
                GUILD_MEMBER_PROFILE_UPDATE: function(e) {
                    let {
                        guildId: t,
                        guildMember: i
                    } = e, r = _(t);
                    return r.updateMembersByMemberIds([i.user.id])
                },
                GUILD_ROLE_MEMBER_REMOVE: b,
                GUILD_ROLE_MEMBER_ADD: b,
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    let {
                        guildId: t,
                        members: i
                    } = e;
                    if (null == i || 0 === i.length) return !1;
                    let r = _(t),
                        n = i.reduce((e, t) => {
                            if (null != t.member) {
                                let i = t.member.user.id;
                                e.push(i)
                            }
                            return e
                        }, []);
                    return r.updateMembersByMemberIds(n)
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        addedMembers: i
                    } = e;
                    if (null == i || 0 === i.length) return !1;
                    let r = _(t),
                        n = i.reduce((e, t) => {
                            let i = t.userId;
                            return e.push(i), e
                        }, []);
                    return r.updateMembersByMemberIds(n)
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        members: i
                    } = e;
                    if (null == i || 0 === i.length) return !1;
                    let r = _(t),
                        n = i.reduce((e, t) => {
                            let i = t.userId;
                            return e.push(i), e
                        }, []);
                    return r.updateMembersByMemberIds(n)
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        guildId: t,
                        threads: i
                    } = e, r = Object.values(i);
                    if (0 === r.length) return !1;
                    let n = _(t),
                        s = r.reduce((e, t) => {
                            if (null != t.owner) {
                                let i = t.owner.user.id;
                                e.push(i)
                            }
                            return e
                        }, []);
                    return n.updateMembersByMemberIds(s)
                },
                INITIALIZE_MEMBER_SAFETY_STORE: function(e) {
                    let {
                        guildId: t
                    } = e, i = _(t);
                    return i.initialize()
                },
                MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: function(e) {
                    let {
                        guildId: t
                    } = e, i = _(t);
                    return i.refreshNewMembersAndSearchResults()
                },
                MEMBER_SAFETY_PAGINATION_UPDATE: function(e) {
                    let {
                        guildId: t,
                        pagination: i
                    } = e, r = _(t), [n] = r.updatePaginationState(i);
                    return n
                },
                MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: function(e) {
                    let {
                        guildId: t,
                        continuationToken: i
                    } = e, r = _(t);
                    return r.updatePaginationToken(i)
                },
                MEMBER_SAFETY_SEARCH_STATE_UPDATE: function(e) {
                    let {
                        guildId: t,
                        searchState: i
                    } = e, r = _(t);
                    return r.updateSearchState(i)
                },
                FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        memberSupplementals: i
                    } = e, r = (0, o.syncMemberSupplemental)(t, i);
                    if (r) {
                        let e = _(t);
                        e.updateMembersByMemberIds(i.map(e => e.userId))
                    }
                    return r
                },
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        members: i,
                        total_result_count: r
                    } = e, n = _(t), {
                        memberIds: s,
                        memberSupplementals: u
                    } = i.reduce((e, t) => {
                        let {
                            member: i,
                            source_invite_code: r,
                            join_source_type: n,
                            inviter_id: s
                        } = t, u = i.user;
                        return e.memberIds.push(u.id), e.memberSupplementals.push({
                            userId: u.id,
                            sourceInviteCode: r,
                            joinSourceType: n,
                            inviterId: s
                        }), e
                    }, {
                        memberIds: [],
                        memberSupplementals: []
                    }), a = (0, o.syncMemberSupplemental)(t, u);
                    (0, d.registerFetchedSupplementals)(t, s);
                    let l = n.updateSearchedMembersByMemberIds(s),
                        [h] = n.updatePaginationState({
                            totalResultsCount: r
                        }, !1);
                    return a || l || h
                },
                MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: function(e) {
                    let {
                        guildId: t,
                        userIds: i
                    } = e, r = _(t);
                    return r.updateMembersByMemberIds(i)
                }
            });
            var E = S