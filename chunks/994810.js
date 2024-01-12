            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                l = n("913144"),
                a = n("42203");
            let s = {};

            function r(e) {
                let t = a.default.getChannel(e);
                return !!(null != t && t.isForumLikeChannel()) || !1
            }

            function u(e) {
                var t;
                let n = null !== (t = s[e]) && void 0 !== t ? t : {
                    query: null,
                    loading: !1,
                    results: null
                };
                return s[e] = n, n
            }
            class d extends i.default.Store {
                getSearchQuery(e) {
                    let t = s[e];
                    return null == t ? void 0 : t.query
                }
                getSearchLoading(e) {
                    var t;
                    let n = s[e];
                    return null !== (t = null == n ? void 0 : n.loading) && void 0 !== t && t
                }
                getSearchResults(e) {
                    let t = s[e];
                    return null == t ? void 0 : t.results
                }
                getHasSearchResults(e) {
                    let t = s[e];
                    return (null == t ? void 0 : t.results) != null && t.results.length > 0
                }
            }
            d.displayName = "ForumSearchStore";
            var o = new d(l.default, {
                CONNECTION_OPEN: function() {
                    s = {}
                },
                THREAD_DELETE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e, i = n.parent_id;
                    if (null == i) return !1;
                    let l = s[i];
                    if (null == l) return !1;
                    s[i] = {
                        ...l,
                        results: null === (t = l.results) || void 0 === t ? void 0 : t.filter(e => n.id !== e)
                    }
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e, n = delete s[t.id];
                    return n
                },
                FORUM_SEARCH_QUERY_UPDATED: function(e) {
                    let {
                        channelId: t,
                        query: n
                    } = e;
                    if (!r(t)) return !1;
                    let i = u(t);
                    s[t] = {
                        ...i,
                        query: n,
                        results: null
                    }
                },
                FORUM_SEARCH_START: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (!r(t)) return !1;
                    let n = u(t);
                    s[t] = {
                        ...n,
                        loading: !0
                    }
                },
                FORUM_SEARCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        threadIds: n
                    } = e;
                    if (!r(t)) return !1;
                    let i = u(t);
                    s[t] = {
                        ...i,
                        loading: !1,
                        results: n
                    }
                },
                FORUM_SEARCH_FAILURE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (!r(t)) return !1;
                    let n = u(t);
                    s[t] = {
                        ...n,
                        loading: !1,
                        results: []
                    }
                },
                FORUM_SEARCH_CLEAR: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (!r(t)) return !1;
                    let n = delete s[t];
                    return n
                }
            })