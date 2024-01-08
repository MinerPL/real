            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var a = n("446674"),
                l = n("913144"),
                s = n("513688"),
                i = n("730647");
            let r = Object.freeze({}),
                u = !1,
                o = {},
                d = {},
                c = {},
                f = {},
                h = {};
            class p extends a.default.Store {
                isFetching() {
                    return u
                }
                getCurrentCategoryId(e) {
                    var t;
                    return null !== (t = d[e]) && void 0 !== t ? t : i.DirectoryEntryCategories.ALL
                }
                getDirectoryEntries(e, t) {
                    var n;
                    return null != t ? null === (n = c[e]) || void 0 === n ? void 0 : n[t] : o[e]
                }
                getDirectoryEntry(e, t) {
                    var n;
                    return null === (n = o[e]) || void 0 === n ? void 0 : n[t]
                }
                getDirectoryAllEntriesCount(e) {
                    var t;
                    return Object.keys(null !== (t = o[e]) && void 0 !== t ? t : {}).length
                }
                getDirectoryCategoryCounts(e) {
                    var t;
                    return null !== (t = f[e]) && void 0 !== t ? t : r
                }
                getAdminGuildEntryIds(e) {
                    return h[e]
                }
            }
            p.displayName = "GuildDirectoryStore";
            var m = new p(l.default, {
                GUILD_DIRECTORY_FETCH_START: function() {
                    u = !0
                },
                GUILD_DIRECTORY_FETCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        entries: n
                    } = e;
                    u = !1;
                    let a = {},
                        l = {};
                    n.forEach(e => {
                        let t = (0, s.guildDirectoryEntryFromServer)(e);
                        a[t.guildId] = t, null != l[t.primaryCategoryId] ? l[t.primaryCategoryId][t.guildId] = t : l[t.primaryCategoryId] = {
                            [t.guildId]: t
                        }
                    }), o[t] = a, c[t] = l
                },
                GUILD_DIRECTORY_FETCH_FAILURE: function() {
                    u = !1
                },
                GUILD_DIRECTORY_ENTRY_CREATE: function(e) {
                    var t, n, a, l, r;
                    let {
                        channelId: u,
                        entry: d
                    } = e, h = (0, s.guildDirectoryEntryFromServer)(d);
                    if (null == h || (null === (t = o[u]) || void 0 === t ? void 0 : t[h.guildId]) != null) return;
                    o[u] = {
                        ...o[u],
                        [h.guildId]: h
                    };
                    let p = null !== (a = h.primaryCategoryId) && void 0 !== a ? a : i.DirectoryEntryCategories.UNCATEGORIZED;
                    if (c[u] = {
                            ...c[u],
                            [p]: {
                                ...null === (n = c[u]) || void 0 === n ? void 0 : n[p],
                                [h.guildId]: h
                            }
                        }, null != f[u]) {
                        let e = null !== (r = null === (l = f[u]) || void 0 === l ? void 0 : l[p]) && void 0 !== r ? r : 0;
                        f[u] = {
                            ...f[u],
                            [p]: e + 1
                        }
                    }
                },
                GUILD_DIRECTORY_ENTRY_DELETE: function(e) {
                    var t, n;
                    let {
                        channelId: a,
                        guildId: l
                    } = e, s = null === (t = o[a]) || void 0 === t ? void 0 : t[l];
                    if (null == s) return;
                    let i = s.primaryCategoryId,
                        r = Object.assign({}, o[a]);
                    delete r[l], null === (n = h[a]) || void 0 === n || n.delete(l), h[a] = new Set(h[a]), o[a] = r;
                    let u = Object.assign({}, c[a][i]);
                    if (delete u[l], c[a] = {
                            ...c[a],
                            [i]: u
                        }, null != f[a]) {
                        let e = f[a][i] - 1;
                        f[a] = {
                            ...f[a],
                            [i]: e >= 0 ? e : 0
                        }
                    }
                },
                GUILD_DIRECTORY_ENTRY_UPDATE: function(e) {
                    var t, n, a, l, r, u, d, h, p;
                    let {
                        channelId: m,
                        entry: E
                    } = e, C = (0, s.guildDirectoryEntryFromServer)(E), S = null === (t = o[m]) || void 0 === t ? void 0 : t[C.guildId];
                    o[m] = {
                        ...o[m],
                        [C.guildId]: {
                            ...S,
                            ...C
                        }
                    };
                    let g = null !== (l = null == S ? void 0 : S.primaryCategoryId) && void 0 !== l ? l : i.DirectoryEntryCategories.UNCATEGORIZED,
                        _ = null !== (r = C.primaryCategoryId) && void 0 !== r ? r : i.DirectoryEntryCategories.UNCATEGORIZED,
                        I = Object.assign({}, null === (n = c[m]) || void 0 === n ? void 0 : n[g]);
                    null != S && g !== _ && delete I[C.guildId], c[m] = {
                        ...c[m],
                        [g]: I,
                        [_]: {
                            ...null === (a = c[m]) || void 0 === a ? void 0 : a[_],
                            [C.guildId]: {
                                ...S,
                                ...C
                            }
                        }
                    }, _ !== g && null != f[m] && (f[m] = {
                        ...f[m],
                        [g]: (null === (u = f[m]) || void 0 === u ? void 0 : u[g]) > 0 ? (null === (d = f[m]) || void 0 === d ? void 0 : d[g]) - 1 : 0,
                        [_]: (null !== (p = null === (h = f[m]) || void 0 === h ? void 0 : h[_]) && void 0 !== p ? p : 0) + 1
                    })
                },
                GUILD_DIRECTORY_CATEGORY_SELECT: function(e) {
                    let {
                        channelId: t,
                        categoryId: n
                    } = e;
                    d[t] = n
                },
                GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        counts: n
                    } = e;
                    f[t] = n
                },
                GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        entries: n
                    } = e, a = new Set;
                    n.forEach(e => {
                        let t = (0, s.guildDirectoryEntryFromServer)(e);
                        a.add(t.guildId)
                    }), h[t] = a
                }
            })