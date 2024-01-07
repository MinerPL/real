            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return G
                }
            }), s("424973"), s("222007");
            var a = s("446674"),
                l = s("407846"),
                i = s("913144"),
                n = s("697218"),
                u = s("591023"),
                r = s("567054"),
                o = s("982527");
            let d = {};

            function c(e) {
                var t;
                return null !== (t = d[e]) && void 0 !== t ? t : 0
            }

            function E(e, t) {
                d[e] = t
            }

            function I(e, t, s) {
                if (t !== s && null != t) {
                    var a, l, i, n;
                    if (t === r.GuildJoinRequestApplicationStatuses.SUBMITTED) {
                        ;
                        let t = c(e);
                        a = e, l = t + 1, d[a] = l
                    }
                    if (s === r.GuildJoinRequestApplicationStatuses.SUBMITTED) {
                        ;
                        let t = c(e);
                        i = e, n = Math.max(0, t - 1), d[i] = n
                    }
                }
            }
            let S = !1,
                f = {
                    GUILD_JOIN_REQUESTS_BY_ID: e => "guild-join-request=".concat(e),
                    GUILD_JOIN_REQUESTS_BY_STATUS: (e, t) => "guild-".concat(e, "-").concat(t)
                };

            function T(e) {
                let t = [];
                return t.push(f.GUILD_JOIN_REQUESTS_BY_ID(e.id)), t.push(f.GUILD_JOIN_REQUESTS_BY_STATUS(e.guildId, e.applicationStatus)), t
            }
            let _ = new l.default(T, e => "".concat(e.id)),
                R = new l.default(T, e => "".concat(e.id)),
                p = new l.default(T, e => "".concat(e.actionedAt));

            function m(e) {
                return _.get(e)
            }

            function N(e) {
                _.set(e.id, e), (0, u.isSubmittedApplicationStatus)(e.applicationStatus) && (p.delete(e.id), R.set(e.id, e)), (0, u.isActionedApplicationStatus)(e.applicationStatus) && (R.delete(e.id), p.set(e.id, e))
            }

            function A(e) {
                var t, s;
                let {
                    guildId: a,
                    request: l
                } = e, i = (0, o.joinRequestFromServer)(l), u = n.default.getCurrentUser();
                if (null == u || i.userId === u.id) return !1;
                let r = null === (s = i.id, t = _.get(s)) || void 0 === t ? void 0 : t.applicationStatus;
                return I(a, i.applicationStatus, r), N(i), !0
            }
            let M = {},
                h = {},
                g = {};
            class x extends a.default.Store {
                getRequests(e, t) {
                    let s = f.GUILD_JOIN_REQUESTS_BY_STATUS(e, t);
                    return (0, u.isActionedApplicationStatus)(t) ? p.values(s) : (0, u.isSubmittedApplicationStatus)(t) ? R.values(s) : _.values(s)
                }
                getSubmittedGuildJoinRequestTotal(e) {
                    return c(e)
                }
                isFetching() {
                    return S
                }
                getSelectedApplicationStatus(e) {
                    var t;
                    return null !== (t = M[e]) && void 0 !== t ? t : r.GuildJoinRequestApplicationStatuses.SUBMITTED
                }
                getSelectedSortOrder(e) {
                    var t;
                    return null !== (t = h[e]) && void 0 !== t ? t : r.GuildJoinRequestSortOrders.TIMESTAMP_DESC
                }
                getSelectedGuildJoinRequest(e) {
                    var t;
                    let s = g[e];
                    return null != s ? (t = s.id, _.get(t)) : null
                }
            }
            x.displayName = "GuildJoinRequestStoreV2";
            var G = new x(i.default, {
                GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function(e) {
                    let {
                        status: t,
                        requests: s,
                        total: a,
                        guildId: l
                    } = e;
                    if (S = !1, t === r.GuildJoinRequestApplicationStatuses.SUBMITTED) {
                        var i, n;
                        i = l, n = a, d[i] = n
                    }
                    s.forEach(e => {
                        N(e)
                    })
                },
                GUILD_JOIN_REQUESTS_FETCH_START: function() {
                    S = !0
                },
                GUILD_JOIN_REQUESTS_FETCH_FAILURE: function() {
                    S = !1
                },
                GUILD_JOIN_REQUESTS_BULK_ACTION: function(e) {
                    let {
                        guildId: t,
                        action: s
                    } = e, a = _.values(f.GUILD_JOIN_REQUESTS_BY_STATUS(t, r.GuildJoinRequestApplicationStatuses.SUBMITTED));
                    a.forEach(e => {
                        N({
                            ...e,
                            applicationStatus: s
                        })
                    }), d[t] = 0
                },
                GUILD_JOIN_REQUEST_CREATE: A,
                GUILD_JOIN_REQUEST_UPDATE: A,
                GUILD_JOIN_REQUEST_DELETE: function(e) {
                    var t, s;
                    let {
                        id: a,
                        guildId: l
                    } = e;
                    let i = (t = a, _.get(t));
                    if (null != i) {
                        ;
                        I(l, null, i.applicationStatus), s = a, _.delete(s), R.delete(s), p.delete(s)
                    }
                },
                GUILD_JOIN_REQUESTS_SET_APPLICATION_STATUS: function(e) {
                    let {
                        guildId: t,
                        applicationStatus: s
                    } = e;
                    s !== M[t] && (M[t] = s)
                },
                GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function(e) {
                    var t;
                    let {
                        guildId: s,
                        sortOrder: a
                    } = e;
                    if (a === h[s]) return;
                    h[s] = a;
                    let l = null !== (t = M[s]) && void 0 !== t ? t : r.GuildJoinRequestApplicationStatuses.SUBMITTED;
                    (0, u.isActionedApplicationStatus)(l) && p.clear(), (0, u.isSubmittedApplicationStatus)(l) && R.clear()
                },
                GUILD_JOIN_REQUESTS_SET_SELECTED: function(e) {
                    let {
                        guildId: t,
                        request: s
                    } = e;
                    g[t] = s
                }
            })