(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["59423"], {
        685073: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                loadInviteSuggestions: function() {
                    return s
                },
                searchInviteSuggestions: function() {
                    return l
                }
            }), n("222007");
            var u = n("913144"),
                I = n("777273");

            function s(e) {
                let {
                    omitUserIds: t,
                    guild: n,
                    channel: s,
                    applicationId: l,
                    inviteTargetType: a
                } = e;
                return (0, I.fetchUserAffinities)().then(() => {
                    u.default.dispatch({
                        type: "LOAD_INVITE_SUGGESTIONS",
                        omitUserIds: null != t ? t : new Set,
                        guild: n,
                        channel: s,
                        applicationId: l,
                        inviteTargetType: a
                    })
                })
            }

            function l(e) {
                u.default.dispatch({
                    type: "INVITE_SUGGESTIONS_SEARCH",
                    query: e
                })
            }
        },
        705955: function(e, t, n) {
            "use strict";
            let u, I, s, l, a, i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("222007");
            var _ = n("446674"),
                S = n("913144"),
                T = n("116460"),
                E = n("449008"),
                f = n("354023"),
                N = n("42203"),
                O = n("27618"),
                d = n("843823"),
                o = n("49111"),
                g = n("91366");
            let M = new Set,
                U = [],
                c = new Map;

            function P(e) {
                let t = new Set,
                    n = null == l || r === g.InviteTargetTypes.EMBEDDED_APPLICATION ? void 0 : l.id,
                    u = (0, f.getMostRecentDMedUser)(M, n);
                for (let e of (null != u && !O.default.isBlocked(u.id) && t.add(u.id), d.default.getUserAffinitiesUserIds())) t.add(e);
                let I = new Set;
                if (r === g.InviteTargetTypes.EMBEDDED_APPLICATION) {
                    let e = T.default.getChannelHistory();
                    e.map(e => N.default.getChannel(e)).filter(E.isNotNullish).filter(e => e.type === o.ChannelTypes.GUILD_TEXT).slice(0, 3).forEach(e => I.add(e.id))
                }
                return (0, f.generateRowsForQuery)({
                    query: e,
                    omitUserIds: M,
                    suggestedUserIds: t,
                    maxRowsWithoutQuery: 100,
                    omitGuildId: n,
                    suggestedChannelIds: I,
                    inviteTargetType: r
                })
            }

            function D(e) {
                U = e, c = new Map, e.forEach((e, t) => {
                    c.set(e, {
                        index: t
                    })
                })
            }
            class m extends _.default.Store {
                initialize() {
                    this.waitFor(O.default, d.default)
                }
                getInviteSuggestionRows() {
                    return U
                }
                getTotalSuggestionsCount() {
                    return I
                }
                getInitialCounts() {
                    return u
                }
                getSelectedInviteMetadata(e) {
                    let t = c.get(e),
                        n = d.default.getUserAffinitiesUserIds();
                    return null != t ? {
                        rowNum: t.index,
                        isAffinitySuggestion: e.isSuggested,
                        numTotal: U.length,
                        numAffinityConnections: n.size,
                        isFiltered: s
                    } : null
                }
            }
            m.displayName = "InviteSuggestionsStore";
            var R = new m(S.default, {
                LOAD_INVITE_SUGGESTIONS: function(e) {
                    let {
                        omitUserIds: t,
                        guild: n,
                        channel: _,
                        applicationId: S,
                        inviteTargetType: T
                    } = e;
                    l = null != _ ? n : null, a = _, i = S, r = T;
                    let E = O.default.getRelationships(),
                        N = Object.keys(E).filter(e => E[e] === o.RelationshipTypes.BLOCKED),
                        d = (0, f.getUsersAlreadyJoined)({
                            channel: a,
                            applicationId: i,
                            inviteTargetType: T
                        });
                    M = new Set([...t, ...N, ...d]), s = !1;
                    let {
                        rows: g,
                        counts: c
                    } = P("");
                    D(g), u = c, I = U.length
                },
                INVITE_SUGGESTIONS_SEARCH: function(e) {
                    let {
                        query: t
                    } = e;
                    s = "" !== t;
                    let {
                        rows: n
                    } = P(t);
                    D(n)
                }
            })
        },
        354023: function(e, t, n) {
            "use strict";
            let u;
            n.r(t), n.d(t, {
                RowTypes: function() {
                    return I
                },
                generateRowsForQuery: function() {
                    return R
                },
                getMostRecentDMedUser: function() {
                    return A
                },
                getUsersAlreadyJoined: function() {
                    return V
                },
                maxAgeString: function() {
                    return y
                },
                default: function() {
                    return v
                }
            }), n("424973"), n("222007");
            var I, s, l = n("191225"),
                a = n("42203"),
                i = n("26989"),
                r = n("660478"),
                _ = n("27618"),
                S = n("697218"),
                T = n("287850"),
                E = n("25292"),
                f = n("49111"),
                N = n("91366"),
                O = n("782340");
            u = n("591205"), (s = I || (I = {})).GROUP_DM = "GROUP_DM", s.DM = "DM", s.FRIEND = "FRIEND", s.CHANNEL = "CHANNEL";
            let d = (e, t) => null != e && i.default.isMember(e, t),
                o = e => {
                    let {
                        omitUserIds: t,
                        suggestedUserIds: n,
                        maxRowsWithoutQuery: u,
                        omitGuildId: I,
                        shownUserIds: s,
                        rows: l,
                        counts: a
                    } = e;
                    if (null != n)
                        for (let e of n) {
                            if (null != u && u > 0 && l.length >= u) break;
                            if (t.has(e) || s.has(e)) continue;
                            let n = S.default.getUser(e);
                            !(null == n || d(I, n.id)) && (s.add(n.id), l.push({
                                type: "FRIEND",
                                item: n,
                                isSuggested: !0
                            }), a.numFriends++)
                        }
                },
                g = e => {
                    let {
                        suggestedChannelIds: t,
                        maxRowsWithoutQuery: n,
                        rows: u,
                        counts: I
                    } = e;
                    if (null != t)
                        for (let e of t) {
                            if (null != n && n > 0 && u.length >= n) break;
                            let t = a.default.getChannel(e);
                            null != t && (u.push({
                                type: "CHANNEL",
                                item: t,
                                isSuggested: !0
                            }), I.numChannels++)
                        }
                },
                M = e => {
                    let {
                        omitUserIds: t,
                        maxRowsWithoutQuery: n,
                        omitGuildId: u,
                        shownUserIds: I,
                        rows: s,
                        counts: l,
                        includeGroupDms: i,
                        limit: _
                    } = e, E = 0;
                    for (let e of T.default.getPrivateChannelIds()) {
                        if (null != n && n > 0 && s.length >= n || null != _ && E >= _) break;
                        let T = a.default.getChannel(e);
                        if (null == T || !T.isPrivate()) continue;
                        if (i && T.type === f.ChannelTypes.GROUP_DM) {
                            s.push({
                                type: "GROUP_DM",
                                item: T,
                                isSuggested: !1
                            }), l.numGroupDms++, E++;
                            continue
                        }
                        let N = r.default.lastMessageId(T.id);
                        if (null == N) continue;
                        let O = T.getRecipientId();
                        if (null != O && !t.has(O) && !I.has(O)) {
                            let e = S.default.getUser(O);
                            if (null == e || e.bot || d(u, e.id)) continue;
                            I.add(e.id), s.push({
                                type: "DM",
                                item: e,
                                isSuggested: !1
                            }), l.numDms++, E++
                        }
                    }
                },
                U = e => {
                    let {
                        omitUserIds: t,
                        maxRowsWithoutQuery: n,
                        omitGuildId: u,
                        shownUserIds: I,
                        rows: s,
                        counts: l
                    } = e;
                    for (let e of _.default.getFriendIDs()) {
                        if (null != n && n > 0 && s.length >= n) break;
                        if (t.has(e) || I.has(e)) continue;
                        let a = S.default.getUser(e);
                        !(null == a || d(u, a.id)) && (s.push({
                            type: "FRIEND",
                            item: a,
                            isSuggested: !1
                        }), l.numFriends++)
                    }
                },
                c = e => {
                    let {
                        query: t,
                        rows: n,
                        counts: u,
                        inviteTargetType: I
                    } = e;
                    I === N.InviteTargetTypes.EMBEDDED_APPLICATION && E.default.queryChannels({
                        query: t,
                        limit: 3,
                        guildId: void 0
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        n.push({
                            type: "CHANNEL",
                            item: t,
                            isSuggested: !1
                        }), u.numChannels++
                    })
                },
                P = e => {
                    let {
                        query: t,
                        omitUserIds: n,
                        shownUserIds: u,
                        rows: I,
                        counts: s
                    } = e;
                    E.default.queryDMUsers({
                        query: t,
                        limit: 50
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        if (n.has(t.id)) return;
                        let l = a.default.getDMFromUserId(t.id);
                        if (null == l) return;
                        let i = r.default.lastMessageId(l);
                        null != i && (u.add(t.id), I.push({
                            type: "DM",
                            item: t,
                            isSuggested: !1
                        }), s.numDms++)
                    })
                },
                D = e => {
                    let {
                        query: t,
                        rows: n,
                        counts: u
                    } = e;
                    E.default.queryGroupDMs({
                        query: t,
                        limit: 50,
                        fuzzy: !1
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        n.push({
                            type: "GROUP_DM",
                            item: t,
                            isSuggested: !1
                        }), u.numGroupDms++
                    })
                },
                m = e => {
                    let {
                        query: t,
                        rows: n,
                        counts: u,
                        omitUserIds: I,
                        shownUserIds: s
                    } = e;
                    E.default.queryFriends({
                        query: t,
                        limit: 500,
                        _fuzzy: !1
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        !(I.has(t.id) || s.has(t.id)) && (s.add(t.id), n.push({
                            type: "FRIEND",
                            item: t,
                            isSuggested: !1
                        }), u.numFriends++)
                    })
                };

            function R(e) {
                let {
                    query: t,
                    inviteTargetType: n,
                    omitUserIds: u,
                    suggestedUserIds: I,
                    suggestedChannelIds: s,
                    maxRowsWithoutQuery: l,
                    omitGuildId: a
                } = e, i = new Set, r = [], _ = {
                    numFriends: 0,
                    numDms: 0,
                    numGroupDms: 0,
                    numGuildMembers: 0,
                    numChannels: 0
                };
                if ("" === t) {
                    let e = {
                        omitUserIds: u,
                        maxRowsWithoutQuery: l,
                        omitGuildId: a,
                        shownUserIds: i,
                        rows: r,
                        counts: _
                    };
                    n === N.InviteTargetTypes.EMBEDDED_APPLICATION && (M({
                        ...e,
                        includeGroupDms: !1,
                        limit: 1
                    }), g({
                        ...e,
                        suggestedChannelIds: s
                    })), o({
                        ...e,
                        suggestedUserIds: I
                    }), M({
                        ...e,
                        includeGroupDms: !0
                    }), U(e)
                } else {
                    let e = {
                        query: t,
                        rows: r,
                        counts: _
                    };
                    n === N.InviteTargetTypes.EMBEDDED_APPLICATION && c({
                        ...e,
                        inviteTargetType: n
                    }), P({
                        ...e,
                        omitUserIds: u,
                        shownUserIds: i
                    }), D(e), m({
                        ...e,
                        omitUserIds: u,
                        shownUserIds: i
                    })
                }
                return {
                    rows: r,
                    counts: _
                }
            }

            function A(e, t) {
                for (let n of T.default.getPrivateChannelIds()) {
                    let u = a.default.getChannel(n);
                    if (null == u || !u.isDM() || null == r.default.lastMessageId(u.id)) continue;
                    let I = u.getRecipientId();
                    if (null != I && !e.has(I)) {
                        let e = S.default.getUser(I);
                        if (null == e || e.bot || d(t, e.id)) continue;
                        return e
                    }
                }
                return null
            }

            function V(e) {
                let {
                    channel: t,
                    inviteTargetType: n,
                    applicationId: u
                } = e;
                if (n === N.InviteTargetTypes.EMBEDDED_APPLICATION) {
                    if (null != t) {
                        for (let e of l.default.getEmbeddedActivitiesForChannel(t.id))
                            if (e.application_id === u) return new Set(e.connections.keys())
                    }
                }
                return new Set
            }
            let p = {
                    MINUTES: "minutes",
                    HOURS: "hours",
                    DAYS: "days",
                    NEVER: "never"
                },
                h = {
                    [u.INVITE_OPTIONS_30_MINUTES.value]: {
                        value: 30,
                        type: p.MINUTES
                    },
                    [u.INVITE_OPTIONS_1_HOUR.value]: {
                        value: 1,
                        type: p.HOURS
                    },
                    [u.INVITE_OPTIONS_6_HOURS.value]: {
                        value: 6,
                        type: p.HOURS
                    },
                    [u.INVITE_OPTIONS_12_HOURS.value]: {
                        value: 12,
                        type: p.HOURS
                    },
                    [u.INVITE_OPTIONS_1_DAY.value]: {
                        value: 1,
                        type: p.DAYS
                    },
                    [u.INVITE_OPTIONS_7_DAYS.value]: {
                        value: 7,
                        type: p.DAYS
                    },
                    [u.INVITE_OPTIONS_30_DAYS.value]: {
                        value: 30,
                        type: p.DAYS
                    },
                    [u.INVITE_OPTIONS_FOREVER.value]: {
                        value: 0,
                        type: p.NEVER
                    }
                };

            function y(e, t) {
                let n = parseInt(t, 10),
                    u = 0 === n,
                    I = h[e].value,
                    s = h[e].type;
                switch (s) {
                    case p.MINUTES:
                        if (u) return O.default.Messages.INVITE_EXPIRES_MINUTES;
                        return O.default.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
                            numUses: n
                        });
                    case p.HOURS:
                        if (u) return O.default.Messages.INVITE_EXPIRES_HOURS.format({
                            numHours: I
                        });
                        return O.default.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
                            numHours: I,
                            numUses: n
                        });
                    case p.DAYS:
                        if (u) return O.default.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
                            numDays: I
                        });
                        return O.default.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
                            numDays: I,
                            numUses: n
                        });
                    case p.NEVER:
                        if (u) return O.default.Messages.INVITE_EXPIRES_NEVER;
                        return O.default.Messages.INVITE_EXPIRES_USES.format({
                            numUses: n
                        });
                    default:
                        return ""
                }
            }
            var v = {
                getMaxAgeOptions: u.MAX_AGE_OPTIONS,
                getMaxUsesOptions: u.MAX_USES_OPTIONS,
                INVITE_OPTIONS_FOREVER: u.INVITE_OPTIONS_FOREVER,
                INVITE_OPTIONS_1_DAY: u.INVITE_OPTIONS_1_DAY,
                INVITE_OPTIONS_7_DAYS: u.INVITE_OPTIONS_7_DAYS,
                INVITE_OPTIONS_30_DAYS: u.INVITE_OPTIONS_30_DAYS,
                INVITE_OPTIONS_12_HOURS: u.INVITE_OPTIONS_12_HOURS,
                INVITE_OPTIONS_6_HOURS: u.INVITE_OPTIONS_6_HOURS,
                INVITE_OPTIONS_1_HOUR: u.INVITE_OPTIONS_1_HOUR,
                INVITE_OPTIONS_30_MINUTES: u.INVITE_OPTIONS_30_MINUTES,
                INVITE_OPTIONS_UNLIMITED: u.INVITE_OPTIONS_UNLIMITED,
                INVITE_OPTIONS_ONCE: u.INVITE_OPTIONS_ONCE,
                INVITE_OPTIONS_5_TIMES: u.INVITE_OPTIONS_5_TIMES,
                INVITE_OPTIONS_10_TIMES: u.INVITE_OPTIONS_10_TIMES,
                INVITE_OPTIONS_25_TIMES: u.INVITE_OPTIONS_25_TIMES,
                INVITE_OPTIONS_50_TIMES: u.INVITE_OPTIONS_50_TIMES,
                INVITE_OPTIONS_100_TIMES: u.INVITE_OPTIONS_100_TIMES
            }
        },
        591205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                INVITE_OPTIONS_UNLIMITED: function() {
                    return s
                },
                INVITE_OPTIONS_ONCE: function() {
                    return l
                },
                INVITE_OPTIONS_5_TIMES: function() {
                    return a
                },
                INVITE_OPTIONS_10_TIMES: function() {
                    return i
                },
                INVITE_OPTIONS_25_TIMES: function() {
                    return r
                },
                INVITE_OPTIONS_50_TIMES: function() {
                    return _
                },
                INVITE_OPTIONS_100_TIMES: function() {
                    return S
                },
                MAX_USES_OPTIONS: function() {
                    return T
                },
                INVITE_OPTIONS_30_MINUTES: function() {
                    return E
                },
                INVITE_OPTIONS_1_HOUR: function() {
                    return f
                },
                INVITE_OPTIONS_6_HOURS: function() {
                    return N
                },
                INVITE_OPTIONS_12_HOURS: function() {
                    return O
                },
                INVITE_OPTIONS_1_DAY: function() {
                    return d
                },
                INVITE_OPTIONS_7_DAYS: function() {
                    return o
                },
                INVITE_OPTIONS_30_DAYS: function() {
                    return g
                },
                INVITE_OPTIONS_FOREVER: function() {
                    return M
                },
                MAX_AGE_OPTIONS: function() {
                    return U
                }
            });
            var u = n("782340");

            function I(e, t) {
                return {
                    value: e,
                    get label() {
                        return t()
                    }
                }
            }
            let s = I(0, () => u.default.Messages.MAX_USES.format({
                    maxUses: 0
                })),
                l = I(1, () => u.default.Messages.MAX_USES.format({
                    maxUses: 1
                })),
                a = I(5, () => u.default.Messages.MAX_USES.format({
                    maxUses: 5
                })),
                i = I(10, () => u.default.Messages.MAX_USES.format({
                    maxUses: 10
                })),
                r = I(25, () => u.default.Messages.MAX_USES.format({
                    maxUses: 25
                })),
                _ = I(50, () => u.default.Messages.MAX_USES.format({
                    maxUses: 50
                })),
                S = I(100, () => u.default.Messages.MAX_USES.format({
                    maxUses: 100
                })),
                T = [s, l, a, i, r, _, S],
                E = I(1800, () => u.default.Messages.DURATION_MINUTES.format({
                    minutes: 30
                })),
                f = I(3600, () => u.default.Messages.DURATION_HOURS.format({
                    hours: 1
                })),
                N = I(21600, () => u.default.Messages.DURATION_HOURS.format({
                    hours: 6
                })),
                O = I(43200, () => u.default.Messages.DURATION_HOURS.format({
                    hours: 12
                })),
                d = I(86400, () => u.default.Messages.DURATION_DAYS.format({
                    days: 1
                })),
                o = I(604800, () => u.default.Messages.DURATION_DAYS.format({
                    days: 7
                })),
                g = I(2592e3, () => u.default.Messages.DURATION_DAYS.format({
                    days: 30
                })),
                M = I(0, () => u.default.Messages.MAX_AGE_NEVER),
                U = [E, f, N, O, d, o, g, M]
        }
    }
]);