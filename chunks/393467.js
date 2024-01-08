            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("424973");
            var a = n("446674"),
                l = n("913144"),
                s = n("513688");
            let i = [],
                r = {},
                u = {};
            class o extends a.default.Store {
                getSearchState(e) {
                    var t;
                    return null !== (t = r[e]) && void 0 !== t ? t : {
                        mostRecentQuery: "",
                        fetching: !1
                    }
                }
                getSearchResults(e, t) {
                    var n, a, l;
                    return null !== (l = null === (a = u[e]) || void 0 === a ? void 0 : null === (n = a[t]) || void 0 === n ? void 0 : n.results) && void 0 !== l ? l : i
                }
                shouldFetch(e, t) {
                    var n, a;
                    let l = null === (a = u[e]) || void 0 === a ? void 0 : null === (n = a[t]) || void 0 === n ? void 0 : n.lastSearchedAt;
                    return null == l || Date.now() - l > 12e4
                }
            }
            o.displayName = "GuildDirectorySearchStore";
            var d = new o(l.default, {
                GUILD_DIRECTORY_SEARCH_START: function(e) {
                    let {
                        channelId: t,
                        query: n
                    } = e;
                    r[t] = {
                        fetching: !0,
                        mostRecentQuery: n
                    }
                },
                GUILD_DIRECTORY_SEARCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        query: n,
                        results: a
                    } = e;
                    r[t] = {
                        ...r[t],
                        fetching: !1
                    };
                    let l = [];
                    a.forEach(e => {
                        let t = (0, s.guildDirectoryEntryFromServer)(e);
                        l.push(t)
                    }), u[t] = {
                        ...u[t],
                        [n]: {
                            results: (0, s.orderByTotalMemberCount)(l),
                            lastSearchedAt: Date.now()
                        }
                    }
                },
                GUILD_DIRECTORY_SEARCH_FAILURE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    r[t] = {
                        ...r[t],
                        fetching: !1
                    }
                },
                GUILD_DIRECTORY_SEARCH_CLEAR: function(e) {
                    let {
                        channelId: t
                    } = e;
                    r[t] = {
                        fetching: !1,
                        mostRecentQuery: ""
                    }
                },
                GUILD_DIRECTORY_CACHED_SEARCH: function(e) {
                    let {
                        channelId: t,
                        query: n
                    } = e;
                    r[t] = {
                        fetching: !1,
                        mostRecentQuery: n
                    }
                },
                GUILD_DIRECTORY_ENTRY_DELETE: function(e) {
                    var t;
                    let {
                        channelId: n,
                        guildId: a
                    } = e, l = null === (t = r[n]) || void 0 === t ? void 0 : t.mostRecentQuery;
                    if (null == l) return;
                    let s = u[n][l];
                    if (null == s) return;
                    let i = s.results.filter(e => e.guildId !== a);
                    u[n] = {
                        ...u[n],
                        [r[n].mostRecentQuery]: {
                            ...s,
                            results: i
                        }
                    }
                }
            })