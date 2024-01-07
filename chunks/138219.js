            "use strict";
            s.r(t), s.d(t, {
                usePaginatedMemberApplications: function() {
                    return c
                }
            }), s("222007");
            var a = s("884691"),
                l = s("866227"),
                i = s.n(l),
                n = s("249654"),
                u = s("448993"),
                r = s("549103"),
                o = s("567054");
            let d = o.MAX_RESULTS_PER_PAGE * o.MAX_VISIBLE_PAGES;

            function c(e) {
                let {
                    guildId: t,
                    guildJoinRequests: s
                } = e, l = a.useRef(!1), [c, E] = a.useState(null), I = a.useRef(null), S = a.useRef(!1), f = a.useCallback(async (e, a) => {
                    if (l.current) return;
                    let f = "".concat(e, "-").concat(a),
                        T = !1;
                    if (f !== I.current && (I.current = f, S.current = !1, T = !0), S.current) return;
                    null != c && E(null);
                    let _ = function(e, t, s, a) {
                        let l = s === o.GuildJoinRequestApplicationStatuses.SUBMITTED;
                        if (t === o.GuildJoinRequestSortOrders.TIMESTAMP_DESC) {
                            if (a) {
                                let e = n.default.fromTimestamp(new Date().getTime());
                                return {
                                    before: e
                                }
                            } {
                                let t = e[e.length - 1],
                                    s = l ? t.id : t.actionedAt;
                                return {
                                    before: s
                                }
                            }
                        }
                        if (a) {
                            let e = n.default.fromTimestamp(i().subtract(180, "days").valueOf());
                            return {
                                after: e
                            }
                        } {
                            let t = e[e.length - 1],
                                s = l ? t.id : t.actionedAt;
                            return {
                                after: s
                            }
                        }
                    }(s, e, a, T);
                    try {
                        l.current = !0;
                        let e = await r.default.fetchGuildJoinRequests({
                            guildId: t,
                            status: a,
                            limit: d,
                            ..._
                        });
                        if (null != e) {
                            let {
                                guild_join_requests: t
                            } = e.body;
                            t.length < d && (S.current = !0)
                        }
                    } catch (t) {
                        let e = new u.APIError(t);
                        E(e.getAnyErrorMessage())
                    } finally {
                        l.current = !1
                    }
                }, [c, t, s]);
                return {
                    fetchNextPage: f,
                    error: c
                }
            }