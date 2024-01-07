            "use strict";
            let i;
            n.r(t), n.d(t, {
                PAGE_SIZE: function() {
                    return A
                },
                default: function() {
                    return L
                }
            }), n("222007");
            var a = n("917351"),
                l = n.n(a),
                s = n("335710"),
                r = n("249654"),
                u = n("446674"),
                d = n("913144"),
                o = n("786742"),
                c = n("867965"),
                _ = n("233069"),
                f = n("42203"),
                h = n("660478"),
                E = n("449008"),
                g = n("755624");
            let A = 25,
                m = !1,
                T = !0,
                S = !1,
                p = !1,
                M = null,
                v = s.ThreadSortOrder.LATEST_ACTIVITY,
                C = [],
                N = 0;

            function O() {
                m = !1, T = !0, S = !1, p = !1, M = null, v = s.ThreadSortOrder.LATEST_ACTIVITY, i = new Set, N = 0, C = []
            }

            function R(e, t) {
                return t === s.ThreadSortOrder.LATEST_ACTIVITY ? h.default.lastMessageId(e.id) : e.id
            }

            function I() {
                if (null == M) return !1;
                let e = !S,
                    t = f.default.getChannel(C[C.length - 1]),
                    n = null == t ? null : R(t, v);
                C = l(f.default.getAllThreadsForParent(M)).filter(e => e.isArchivedThread()).filter(t => {
                    var a;
                    if (0 !== i.size && (null === (a = t.appliedTags) || void 0 === a ? void 0 : a.some(e => i.has(e))) !== !0) return !1;
                    if (e || null == n) return !0;
                    {
                        let e = null == t ? null : R(t, v);
                        return null != e && r.default.compare(e, n) >= 0
                    }
                }).sort((e, t) => r.default.compare(R(e, v), R(t, v))).map(e => e.id).reverse().value()
            }

            function D(e) {
                if (!(C.indexOf(e) >= 0)) return !1;
                C = C.filter(t => t !== e)
            }
            let b = [];
            class y extends u.default.Store {
                initialize() {
                    this.waitFor(f.default, g.default, h.default)
                }
                get canLoadMore() {
                    return S && !m && !p
                }
                get nextOffset() {
                    return N
                }
                get isInitialLoad() {
                    return T
                }
                isLoading(e, t, n) {
                    return M === e && v === t && (0, E.areSetsEqual)(i, n) ? m : (O(), !1)
                }
                getThreads(e, t, n) {
                    return M === e && v === t && (0, E.areSetsEqual)(i, n) ? C : b
                }
            }
            y.displayName = "ArchivedThreadsStore";
            var L = new y(d.default, {
                CONNECTION_OPEN: O,
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return D(t.id)
                },
                THREAD_UPDATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return M === t.parent_id && !!(0, o.isForumPostPinned)(t.id) && void D(t.id)
                },
                CHANNEL_DELETE: function(e) {
                    if (e.channel.id !== M) return !1;
                    O()
                },
                LOAD_ARCHIVED_THREADS: function(e) {
                    (e.channelId !== M || e.sortOrder !== v || !(0, E.areSetsEqual)(e.tagFilter, i)) && O(), M = e.channelId, v = e.sortOrder, i = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter), m = !0, T = !1
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
                    if (e.channelId !== M || e.sortOrder !== v || !(0, E.areSetsEqual)(e.tagFilter, i)) return !1;
                    let t = e.threads.filter(e => _.ALL_CHANNEL_TYPES.has(e.type)).map(e => e.id);
                    C = C.concat(t);
                    let n = f.default.getChannel(M);
                    null != n && n.isForumLikeChannel() && (0, c.trackForumMorePostsLoaded)({
                        guildId: n.guild_id,
                        channelId: n.id,
                        numArchivedThreads: C.length,
                        hasMoreThreads: e.hasMore,
                        filterTagIds: Array.from(e.tagFilter),
                        sortOrder: e.sortOrder
                    }), I(), S = e.hasMore, N = e.offset + A, m = !1, T = !1
                },
                LOAD_ARCHIVED_THREADS_FAIL: function(e) {
                    if (e.channelId !== M || e.sortOrder !== v || !(0, E.areSetsEqual)(e.tagFilter, i)) return !1;
                    m = !1, p = !0, T = !1
                },
                RESORT_THREADS: function(e) {
                    return (null == M || null == e.channelId || M === e.channelId) && I()
                }
            })