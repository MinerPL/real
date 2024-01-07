            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return D
                }
            }), s("424973"), s("222007");
            var a = s("446674"),
                n = s("407846"),
                l = s("913144"),
                i = s("697218"),
                r = s("591023"),
                o = s("567054"),
                d = s("982527");
            let u = {};

            function c(e) {
                var t;
                return null !== (t = u[e]) && void 0 !== t ? t : 0
            }

            function E(e, t) {
                u[e] = t
            }

            function _(e, t, s) {
                if (t !== s && null != t) {
                    var a, n, l, i;
                    if (t === o.GuildJoinRequestApplicationStatuses.SUBMITTED) {
                        ;
                        let t = c(e);
                        a = e, n = t + 1, u[a] = n
                    }
                    if (s === o.GuildJoinRequestApplicationStatuses.SUBMITTED) {
                        ;
                        let t = c(e);
                        l = e, i = Math.max(0, t - 1), u[l] = i
                    }
                }
            }
            let T = !1,
                I = {
                    GUILD_JOIN_REQUESTS_BY_ID: e => "guild-join-request=".concat(e),
                    GUILD_JOIN_REQUESTS_BY_STATUS: (e, t) => "guild-".concat(e, "-").concat(t)
                };

            function S(e) {
                let t = [];
                return t.push(I.GUILD_JOIN_REQUESTS_BY_ID(e.id)), t.push(I.GUILD_JOIN_REQUESTS_BY_STATUS(e.guildId, e.applicationStatus)), t
            }
            let N = new n.default(S, e => "".concat(e.id)),
                g = new n.default(S, e => "".concat(e.id)),
                f = new n.default(S, e => "".concat(e.actionedAt));

            function A(e) {
                return N.get(e)
            }

            function L(e) {
                N.set(e.id, e), (0, r.isSubmittedApplicationStatus)(e.applicationStatus) && (f.delete(e.id), g.set(e.id, e)), (0, r.isActionedApplicationStatus)(e.applicationStatus) && (g.delete(e.id), f.set(e.id, e))
            }

            function m(e) {
                var t, s;
                let {
                    guildId: a,
                    request: n
                } = e, l = (0, d.joinRequestFromServer)(n), r = i.default.getCurrentUser();
                if (null == r || l.userId === r.id) return !1;
                let o = null === (s = l.id, t = N.get(s)) || void 0 === t ? void 0 : t.applicationStatus;
                return _(a, l.applicationStatus, o), L(l), !0
            }
            let C = {},
                O = {},
                h = {};
            class R extends a.default.Store {
                getRequests(e, t) {
                    let s = I.GUILD_JOIN_REQUESTS_BY_STATUS(e, t);
                    return (0, r.isActionedApplicationStatus)(t) ? f.values(s) : (0, r.isSubmittedApplicationStatus)(t) ? g.values(s) : N.values(s)
                }
                getSubmittedGuildJoinRequestTotal(e) {
                    return c(e)
                }
                isFetching() {
                    return T
                }
                getSelectedApplicationStatus(e) {
                    var t;
                    return null !== (t = C[e]) && void 0 !== t ? t : o.GuildJoinRequestApplicationStatuses.SUBMITTED
                }
                getSelectedSortOrder(e) {
                    var t;
                    return null !== (t = O[e]) && void 0 !== t ? t : o.GuildJoinRequestSortOrders.TIMESTAMP_DESC
                }
                getSelectedGuildJoinRequest(e) {
                    var t;
                    let s = h[e];
                    return null != s ? (t = s.id, N.get(t)) : null
                }
            }
            R.displayName = "GuildJoinRequestStoreV2";
            var D = new R(l.default, {
                GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function(e) {
                    let {
                        status: t,
                        requests: s,
                        total: a,
                        guildId: n
                    } = e;
                    if (T = !1, t === o.GuildJoinRequestApplicationStatuses.SUBMITTED) {
                        var l, i;
                        l = n, i = a, u[l] = i
                    }
                    s.forEach(e => {
                        L(e)
                    })
                },
                GUILD_JOIN_REQUESTS_FETCH_START: function() {
                    T = !0
                },
                GUILD_JOIN_REQUESTS_FETCH_FAILURE: function() {
                    T = !1
                },
                GUILD_JOIN_REQUESTS_BULK_ACTION: function(e) {
                    let {
                        guildId: t,
                        action: s
                    } = e, a = N.values(I.GUILD_JOIN_REQUESTS_BY_STATUS(t, o.GuildJoinRequestApplicationStatuses.SUBMITTED));
                    a.forEach(e => {
                        L({
                            ...e,
                            applicationStatus: s
                        })
                    }), u[t] = 0
                },
                GUILD_JOIN_REQUEST_CREATE: m,
                GUILD_JOIN_REQUEST_UPDATE: m,
                GUILD_JOIN_REQUEST_DELETE: function(e) {
                    var t, s;
                    let {
                        id: a,
                        guildId: n
                    } = e;
                    let l = (t = a, N.get(t));
                    if (null != l) {
                        ;
                        _(n, null, l.applicationStatus), s = a, N.delete(s), g.delete(s), f.delete(s)
                    }
                },
                GUILD_JOIN_REQUESTS_SET_APPLICATION_STATUS: function(e) {
                    let {
                        guildId: t,
                        applicationStatus: s
                    } = e;
                    s !== C[t] && (C[t] = s)
                },
                GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function(e) {
                    var t;
                    let {
                        guildId: s,
                        sortOrder: a
                    } = e;
                    if (a === O[s]) return;
                    O[s] = a;
                    let n = null !== (t = C[s]) && void 0 !== t ? t : o.GuildJoinRequestApplicationStatuses.SUBMITTED;
                    (0, r.isActionedApplicationStatus)(n) && f.clear(), (0, r.isSubmittedApplicationStatus)(n) && g.clear()
                },
                GUILD_JOIN_REQUESTS_SET_SELECTED: function(e) {
                    let {
                        guildId: t,
                        request: s
                    } = e;
                    h[t] = s
                }
            })