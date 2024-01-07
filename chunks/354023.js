            "use strict";
            let a;
            s.r(t), s.d(t, {
                RowTypes: function() {
                    return n
                },
                generateRowsForQuery: function() {
                    return R
                },
                getMostRecentDMedUser: function() {
                    return D
                },
                getUsersAlreadyJoined: function() {
                    return M
                },
                maxAgeString: function() {
                    return p
                },
                default: function() {
                    return U
                }
            }), s("424973"), s("222007");
            var n, l, i = s("191225"),
                r = s("42203"),
                o = s("26989"),
                d = s("660478"),
                u = s("27618"),
                c = s("697218"),
                E = s("287850"),
                _ = s("25292"),
                T = s("49111"),
                I = s("91366"),
                S = s("782340");
            a = s("591205"), (l = n || (n = {})).GROUP_DM = "GROUP_DM", l.DM = "DM", l.FRIEND = "FRIEND", l.CHANNEL = "CHANNEL";
            let N = (e, t) => null != e && o.default.isMember(e, t),
                g = e => {
                    let {
                        omitUserIds: t,
                        suggestedUserIds: s,
                        maxRowsWithoutQuery: a,
                        omitGuildId: n,
                        shownUserIds: l,
                        rows: i,
                        counts: r
                    } = e;
                    if (null != s)
                        for (let e of s) {
                            if (null != a && a > 0 && i.length >= a) break;
                            if (t.has(e) || l.has(e)) continue;
                            let s = c.default.getUser(e);
                            !(null == s || N(n, s.id)) && (l.add(s.id), i.push({
                                type: "FRIEND",
                                item: s,
                                isSuggested: !0
                            }), r.numFriends++)
                        }
                },
                f = e => {
                    let {
                        suggestedChannelIds: t,
                        maxRowsWithoutQuery: s,
                        rows: a,
                        counts: n
                    } = e;
                    if (null != t)
                        for (let e of t) {
                            if (null != s && s > 0 && a.length >= s) break;
                            let t = r.default.getChannel(e);
                            null != t && (a.push({
                                type: "CHANNEL",
                                item: t,
                                isSuggested: !0
                            }), n.numChannels++)
                        }
                },
                A = e => {
                    let {
                        omitUserIds: t,
                        maxRowsWithoutQuery: s,
                        omitGuildId: a,
                        shownUserIds: n,
                        rows: l,
                        counts: i,
                        includeGroupDms: o,
                        limit: u
                    } = e, _ = 0;
                    for (let e of E.default.getPrivateChannelIds()) {
                        if (null != s && s > 0 && l.length >= s || null != u && _ >= u) break;
                        let E = r.default.getChannel(e);
                        if (null == E || !E.isPrivate()) continue;
                        if (o && E.type === T.ChannelTypes.GROUP_DM) {
                            l.push({
                                type: "GROUP_DM",
                                item: E,
                                isSuggested: !1
                            }), i.numGroupDms++, _++;
                            continue
                        }
                        let I = d.default.lastMessageId(E.id);
                        if (null == I) continue;
                        let S = E.getRecipientId();
                        if (null != S && !t.has(S) && !n.has(S)) {
                            let e = c.default.getUser(S);
                            if (null == e || e.bot || N(a, e.id)) continue;
                            n.add(e.id), l.push({
                                type: "DM",
                                item: e,
                                isSuggested: !1
                            }), i.numDms++, _++
                        }
                    }
                },
                L = e => {
                    let {
                        omitUserIds: t,
                        maxRowsWithoutQuery: s,
                        omitGuildId: a,
                        shownUserIds: n,
                        rows: l,
                        counts: i
                    } = e;
                    for (let e of u.default.getFriendIDs()) {
                        if (null != s && s > 0 && l.length >= s) break;
                        if (t.has(e) || n.has(e)) continue;
                        let r = c.default.getUser(e);
                        !(null == r || N(a, r.id)) && (l.push({
                            type: "FRIEND",
                            item: r,
                            isSuggested: !1
                        }), i.numFriends++)
                    }
                },
                m = e => {
                    let {
                        query: t,
                        rows: s,
                        counts: a,
                        inviteTargetType: n
                    } = e;
                    n === I.InviteTargetTypes.EMBEDDED_APPLICATION && _.default.queryChannels({
                        query: t,
                        limit: 3,
                        guildId: void 0
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        s.push({
                            type: "CHANNEL",
                            item: t,
                            isSuggested: !1
                        }), a.numChannels++
                    })
                },
                C = e => {
                    let {
                        query: t,
                        omitUserIds: s,
                        shownUserIds: a,
                        rows: n,
                        counts: l
                    } = e;
                    _.default.queryDMUsers({
                        query: t,
                        limit: 50
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        if (s.has(t.id)) return;
                        let i = r.default.getDMFromUserId(t.id);
                        if (null == i) return;
                        let o = d.default.lastMessageId(i);
                        null != o && (a.add(t.id), n.push({
                            type: "DM",
                            item: t,
                            isSuggested: !1
                        }), l.numDms++)
                    })
                },
                O = e => {
                    let {
                        query: t,
                        rows: s,
                        counts: a
                    } = e;
                    _.default.queryGroupDMs({
                        query: t,
                        limit: 50,
                        fuzzy: !1
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        s.push({
                            type: "GROUP_DM",
                            item: t,
                            isSuggested: !1
                        }), a.numGroupDms++
                    })
                },
                h = e => {
                    let {
                        query: t,
                        rows: s,
                        counts: a,
                        omitUserIds: n,
                        shownUserIds: l
                    } = e;
                    _.default.queryFriends({
                        query: t,
                        limit: 500,
                        _fuzzy: !1
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        !(n.has(t.id) || l.has(t.id)) && (l.add(t.id), s.push({
                            type: "FRIEND",
                            item: t,
                            isSuggested: !1
                        }), a.numFriends++)
                    })
                };

            function R(e) {
                let {
                    query: t,
                    inviteTargetType: s,
                    omitUserIds: a,
                    suggestedUserIds: n,
                    suggestedChannelIds: l,
                    maxRowsWithoutQuery: i,
                    omitGuildId: r
                } = e, o = new Set, d = [], u = {
                    numFriends: 0,
                    numDms: 0,
                    numGroupDms: 0,
                    numGuildMembers: 0,
                    numChannels: 0
                };
                if ("" === t) {
                    let e = {
                        omitUserIds: a,
                        maxRowsWithoutQuery: i,
                        omitGuildId: r,
                        shownUserIds: o,
                        rows: d,
                        counts: u
                    };
                    s === I.InviteTargetTypes.EMBEDDED_APPLICATION && (A({
                        ...e,
                        includeGroupDms: !1,
                        limit: 1
                    }), f({
                        ...e,
                        suggestedChannelIds: l
                    })), g({
                        ...e,
                        suggestedUserIds: n
                    }), A({
                        ...e,
                        includeGroupDms: !0
                    }), L(e)
                } else {
                    let e = {
                        query: t,
                        rows: d,
                        counts: u
                    };
                    s === I.InviteTargetTypes.EMBEDDED_APPLICATION && m({
                        ...e,
                        inviteTargetType: s
                    }), C({
                        ...e,
                        omitUserIds: a,
                        shownUserIds: o
                    }), O(e), h({
                        ...e,
                        omitUserIds: a,
                        shownUserIds: o
                    })
                }
                return {
                    rows: d,
                    counts: u
                }
            }

            function D(e, t) {
                for (let s of E.default.getPrivateChannelIds()) {
                    let a = r.default.getChannel(s);
                    if (null == a || !a.isDM() || null == d.default.lastMessageId(a.id)) continue;
                    let n = a.getRecipientId();
                    if (null != n && !e.has(n)) {
                        let e = c.default.getUser(n);
                        if (null == e || e.bot || N(t, e.id)) continue;
                        return e
                    }
                }
                return null
            }

            function M(e) {
                let {
                    channel: t,
                    inviteTargetType: s,
                    applicationId: a
                } = e;
                if (s === I.InviteTargetTypes.EMBEDDED_APPLICATION) {
                    if (null != t) {
                        for (let e of i.default.getEmbeddedActivitiesForChannel(t.id))
                            if (e.application_id === a) return new Set(e.connections.keys())
                    }
                }
                return new Set
            }
            let G = {
                    MINUTES: "minutes",
                    HOURS: "hours",
                    DAYS: "days",
                    NEVER: "never"
                },
                x = {
                    [a.INVITE_OPTIONS_30_MINUTES.value]: {
                        value: 30,
                        type: G.MINUTES
                    },
                    [a.INVITE_OPTIONS_1_HOUR.value]: {
                        value: 1,
                        type: G.HOURS
                    },
                    [a.INVITE_OPTIONS_6_HOURS.value]: {
                        value: 6,
                        type: G.HOURS
                    },
                    [a.INVITE_OPTIONS_12_HOURS.value]: {
                        value: 12,
                        type: G.HOURS
                    },
                    [a.INVITE_OPTIONS_1_DAY.value]: {
                        value: 1,
                        type: G.DAYS
                    },
                    [a.INVITE_OPTIONS_7_DAYS.value]: {
                        value: 7,
                        type: G.DAYS
                    },
                    [a.INVITE_OPTIONS_30_DAYS.value]: {
                        value: 30,
                        type: G.DAYS
                    },
                    [a.INVITE_OPTIONS_FOREVER.value]: {
                        value: 0,
                        type: G.NEVER
                    }
                };

            function p(e, t) {
                let s = parseInt(t, 10),
                    a = 0 === s,
                    n = x[e].value,
                    l = x[e].type;
                switch (l) {
                    case G.MINUTES:
                        if (a) return S.default.Messages.INVITE_EXPIRES_MINUTES;
                        return S.default.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
                            numUses: s
                        });
                    case G.HOURS:
                        if (a) return S.default.Messages.INVITE_EXPIRES_HOURS.format({
                            numHours: n
                        });
                        return S.default.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
                            numHours: n,
                            numUses: s
                        });
                    case G.DAYS:
                        if (a) return S.default.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
                            numDays: n
                        });
                        return S.default.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
                            numDays: n,
                            numUses: s
                        });
                    case G.NEVER:
                        if (a) return S.default.Messages.INVITE_EXPIRES_NEVER;
                        return S.default.Messages.INVITE_EXPIRES_USES.format({
                            numUses: s
                        });
                    default:
                        return ""
                }
            }
            var U = {
                getMaxAgeOptions: a.MAX_AGE_OPTIONS,
                getMaxUsesOptions: a.MAX_USES_OPTIONS,
                INVITE_OPTIONS_FOREVER: a.INVITE_OPTIONS_FOREVER,
                INVITE_OPTIONS_1_DAY: a.INVITE_OPTIONS_1_DAY,
                INVITE_OPTIONS_7_DAYS: a.INVITE_OPTIONS_7_DAYS,
                INVITE_OPTIONS_30_DAYS: a.INVITE_OPTIONS_30_DAYS,
                INVITE_OPTIONS_12_HOURS: a.INVITE_OPTIONS_12_HOURS,
                INVITE_OPTIONS_6_HOURS: a.INVITE_OPTIONS_6_HOURS,
                INVITE_OPTIONS_1_HOUR: a.INVITE_OPTIONS_1_HOUR,
                INVITE_OPTIONS_30_MINUTES: a.INVITE_OPTIONS_30_MINUTES,
                INVITE_OPTIONS_UNLIMITED: a.INVITE_OPTIONS_UNLIMITED,
                INVITE_OPTIONS_ONCE: a.INVITE_OPTIONS_ONCE,
                INVITE_OPTIONS_5_TIMES: a.INVITE_OPTIONS_5_TIMES,
                INVITE_OPTIONS_10_TIMES: a.INVITE_OPTIONS_10_TIMES,
                INVITE_OPTIONS_25_TIMES: a.INVITE_OPTIONS_25_TIMES,
                INVITE_OPTIONS_50_TIMES: a.INVITE_OPTIONS_50_TIMES,
                INVITE_OPTIONS_100_TIMES: a.INVITE_OPTIONS_100_TIMES
            }