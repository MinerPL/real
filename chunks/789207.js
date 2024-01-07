            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("872717"),
                a = n("913144"),
                s = n("49111"),
                i = {
                    setGuildFilter(e) {
                        let {
                            guildFilter: t,
                            roleFilter: n,
                            everyoneFilter: l
                        } = e;
                        a.default.dispatch({
                            type: "SET_RECENT_MENTIONS_FILTER",
                            guildFilter: t,
                            roleFilter: n,
                            everyoneFilter: l
                        })
                    },
                    clearMentions() {
                        a.default.dispatch({
                            type: "CLEAR_MENTIONS"
                        })
                    },
                    truncateMentions(e) {
                        a.default.dispatch({
                            type: "TRUNCATE_MENTIONS",
                            size: e
                        })
                    },
                    fetchRecentMentions(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.MAX_MENTIONS_PER_FETCH,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                            r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                        a.default.dispatch({
                            type: "LOAD_RECENT_MENTIONS",
                            guildId: n
                        }), l.default.get({
                            url: s.Endpoints.MENTIONS,
                            query: {
                                before: e,
                                limit: t,
                                guild_id: n,
                                roles: i,
                                everyone: r
                            },
                            retries: 2,
                            oldFormErrors: !0
                        }).then(t => {
                            let {
                                body: n
                            } = t;
                            a.default.dispatch({
                                type: "LOAD_RECENT_MENTIONS_SUCCESS",
                                messages: n,
                                isAfter: null != e,
                                hasMoreAfter: n.length >= s.MAX_MENTIONS_PER_FETCH
                            })
                        }, () => {
                            a.default.dispatch({
                                type: "LOAD_RECENT_MENTIONS_FAILURE"
                            })
                        })
                    },
                    deleteRecentMention(e) {
                        l.default.delete({
                            url: s.Endpoints.MENTIONS_MESSAGE_ID(e),
                            retries: 2,
                            oldFormErrors: !0
                        }), a.default.dispatch({
                            type: "RECENT_MENTION_DELETE",
                            id: e
                        })
                    },
                    setRecentMentionsStale() {
                        a.default.dispatch({
                            type: "SET_RECENT_MENTIONS_STALE"
                        })
                    }
                }