"use strict";
r.r(t), r.d(t, {
  default: function() {
    return E
  }
}), r("808653"), r("424973"), r("222007");
var i = r("446674"),
  n = r("913144"),
  s = r("271938"),
  u = r("26989"),
  a = r("305961"),
  l = r("697218"),
  h = r("637240"),
  d = r("159132"),
  o = r("835257");
let m = !1,
  c = {};

function _(e) {
  return null == c[e] && (c[e] = new h.GuildMemberSafetyPageStore(e)), c[e]
}

function M(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    r = _(e);
  r.reset(t)
}

function f() {
  return !1
}

function b(e) {
  let t = !1,
    r = _(e.guildId);
  return "GUILD_ROLE_DELETE" === e.type && (t = r.removeRoleFromSearchState(e.roleId)), r.rebuildAllMembers() || t
}

function g(e) {
  let {
    guildId: t,
    userId: r
  } = e, i = _(t);
  return i.updateMembersByMemberIds([r])
}

function S(e) {
  let t = !1;
  return e.guilds.forEach(e => {
    let {
      id: r,
      members: i
    } = e, n = _(r);
    t = n.updateServerMembers(i) || t
  }), t
}
class p extends i.default.Store {
  initialize() {
    this.waitFor(s.default, u.default, l.default)
  }
  isInitialized(e) {
    let t = _(e);
    return t.isInitialized
  }
  getMembersByGuildId(e, t) {
    let r = _(e);
    return r.getMembersByIndex(t)
  }
  getMembersCountByGuildId(e, t) {
    let r = _(e);
    return r.countMembersByIndex(t)
  }
  getEstimatedMemberSearchCountByGuildId(e) {
    let t = _(e),
      r = t.searchChunkSize,
      i = t.countMembersByIndex(t.getSearchIndex()),
      n = t.getTotalResultsCount();
    return null == n || n < r ? i : n
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
  getEnhancedMember(e, t) {
    let r = _(e);
    return r.getMember(t)
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
let I = new p(n.default, {
  CONNECTION_OPEN: function(e) {
    return m ? m = !1 : ! function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      for (let t in c) M(t, e)
    }(!0), S(e)
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    return S(e)
  },
  LOCAL_MESSAGES_LOADED: function(e) {
    let {
      guildId: t,
      members: r
    } = e;
    if (null == t || null == a.default.getGuild(t)) return !1;
    m = !0;
    let i = _(t),
      n = [];
    for (let e of r) {
      let t = i.getMember(e.userId);
      null == t && n.push(e)
    }
    return n.length > 0 && i.updateClientMembers(n)
  },
  CACHE_LOADED: function(e) {
    let {
      guildMembers: t
    } = e, r = !1;
    return m = !0, Object.entries(t).forEach(e => {
      let [t, i] = e, n = _(t);
      r = n.updateClientMembers(Object.values(i)) || r
    }), r
  },
  PASSIVE_UPDATE_V1: function(e) {
    let {
      members: t,
      guildId: r
    } = e;
    if (null != t) {
      let e = _(r);
      return e.updateServerMembers(t)
    }
    return !1
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e, r = _(t.id);
    M(t.id, r.isInitialized)
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
      members: r
    } = e, i = _(t);
    return i.updateServerMembers(r)
  },
  GUILD_MEMBER_ADD: f,
  GUILD_MEMBER_UPDATE: f,
  GUILD_MEMBER_UPDATE_LOCAL: function(e) {
    let {
      guildId: t
    } = e, r = s.default.getId(), i = _(t);
    return i.updateMembersByMemberIds([r])
  },
  GUILD_MEMBER_REMOVE: function(e) {
    let {
      guildId: t,
      user: r
    } = e, i = _(t);
    return i.removeMember(r.id)
  },
  GUILD_ROLE_UPDATE: b,
  GUILD_ROLE_DELETE: b,
  GUILD_MEMBER_PROFILE_UPDATE: function(e) {
    let {
      guildId: t,
      guildMember: r
    } = e, i = _(t);
    return i.updateMembersByMemberIds([r.user.id])
  },
  GUILD_ROLE_MEMBER_REMOVE: g,
  GUILD_ROLE_MEMBER_ADD: g,
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      members: r
    } = e;
    if (null == r || 0 === r.length) return !1;
    let i = _(t),
      n = r.reduce((e, t) => {
        if (null != t.member) {
          let r = t.member.user.id;
          e.push(r)
        }
        return e
      }, []);
    return i.updateMembersByMemberIds(n)
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let {
      guildId: t,
      addedMembers: r
    } = e;
    if (null == r || 0 === r.length) return !1;
    let i = _(t),
      n = r.reduce((e, t) => {
        let r = t.userId;
        return e.push(r), e
      }, []);
    return i.updateMembersByMemberIds(n)
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
    let {
      guildId: t,
      members: r
    } = e;
    if (null == r || 0 === r.length) return !1;
    let i = _(t),
      n = r.reduce((e, t) => {
        let r = t.userId;
        return e.push(r), e
      }, []);
    return i.updateMembersByMemberIds(n)
  },
  LOAD_FORUM_POSTS: function(e) {
    let {
      guildId: t,
      threads: r
    } = e, i = Object.values(r);
    if (0 === i.length) return !1;
    let n = _(t),
      s = i.reduce((e, t) => {
        if (null != t.owner) {
          let r = t.owner.user.id;
          e.push(r)
        }
        return e
      }, []);
    return n.updateMembersByMemberIds(s)
  },
  INITIALIZE_MEMBER_SAFETY_STORE: function(e) {
    let {
      guildId: t
    } = e, r = _(t);
    return r.initialize()
  },
  MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: function(e) {
    let {
      guildId: t
    } = e, r = _(t);
    return r.refreshNewMembersAndSearchResults()
  },
  MEMBER_SAFETY_PAGINATION_UPDATE: function(e) {
    let {
      guildId: t,
      pagination: r
    } = e, i = _(t), [n] = i.updatePaginationState(r);
    return n
  },
  MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: function(e) {
    let {
      guildId: t,
      continuationToken: r
    } = e, i = _(t);
    return i.updatePaginationToken(r)
  },
  MEMBER_SAFETY_SEARCH_STATE_UPDATE: function(e) {
    let {
      guildId: t,
      searchState: r
    } = e, i = _(t);
    return i.updateSearchState(r)
  },
  FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: function(e) {
    let {
      guildId: t,
      memberSupplementals: r
    } = e, i = (0, d.syncMemberSupplemental)(t, r);
    if (i) {
      let e = _(t);
      e.updateMembersByMemberIds(r.map(e => e.userId))
    }
    return i
  },
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
    let {
      guildId: t,
      members: r,
      total_result_count: i
    } = e, n = _(t), {
      memberIds: s,
      memberSupplementals: u
    } = r.reduce((e, t) => {
      let {
        member: r,
        source_invite_code: i,
        join_source_type: n,
        inviter_id: s
      } = t, u = r.user;
      return e.memberIds.push(u.id), e.memberSupplementals.push({
        userId: u.id,
        sourceInviteCode: i,
        joinSourceType: n,
        inviterId: s
      }), e
    }, {
      memberIds: [],
      memberSupplementals: []
    }), a = (0, d.syncMemberSupplemental)(t, u);
    (0, o.registerFetchedSupplementals)(t, s);
    let l = n.updateSearchedMembersByMemberIds(s),
      [h] = n.updatePaginationState({
        totalResultsCount: i
      }, !1);
    return a || l || h
  },
  MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: function(e) {
    let {
      guildId: t,
      userIds: r
    } = e, i = _(t);
    return i.updateMembersByMemberIds(r)
  }
});
var E = I