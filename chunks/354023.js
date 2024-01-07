            "use strict";
            let l;
            n.r(t), n.d(t, {
                RowTypes: function() {
                    return a
                },
                generateRowsForQuery: function() {
                    return R
                },
                getMostRecentDMedUser: function() {
                    return A
                },
                getUsersAlreadyJoined: function() {
                    return O
                },
                maxAgeString: function() {
                    return D
                },
                default: function() {
                    return y
                }
            }), n("424973"), n("222007");
            var a, s, i = n("191225"),
                r = n("42203"),
                u = n("26989"),
                o = n("660478"),
                d = n("27618"),
                c = n("697218"),
                E = n("287850"),
                f = n("25292"),
                _ = n("49111"),
                I = n("91366"),
                h = n("782340");
            l = n("591205"), (s = a || (a = {})).GROUP_DM = "GROUP_DM", s.DM = "DM", s.FRIEND = "FRIEND", s.CHANNEL = "CHANNEL";
            let T = (e, t) => null != e && u.default.isMember(e, t),
                N = e => {
                    let {
                        omitUserIds: t,
                        suggestedUserIds: n,
                        maxRowsWithoutQuery: l,
                        omitGuildId: a,
                        shownUserIds: s,
                        rows: i,
                        counts: r
                    } = e;
                    if (null != n)
                        for (let e of n) {
                            if (null != l && l > 0 && i.length >= l) break;
                            if (t.has(e) || s.has(e)) continue;
                            let n = c.default.getUser(e);
                            !(null == n || T(a, n.id)) && (s.add(n.id), i.push({
                                type: "FRIEND",
                                item: n,
                                isSuggested: !0
                            }), r.numFriends++)
                        }
                },
                v = e => {
                    let {
                        suggestedChannelIds: t,
                        maxRowsWithoutQuery: n,
                        rows: l,
                        counts: a
                    } = e;
                    if (null != t)
                        for (let e of t) {
                            if (null != n && n > 0 && l.length >= n) break;
                            let t = r.default.getChannel(e);
                            null != t && (l.push({
                                type: "CHANNEL",
                                item: t,
                                isSuggested: !0
                            }), a.numChannels++)
                        }
                },
                m = e => {
                    let {
                        omitUserIds: t,
                        maxRowsWithoutQuery: n,
                        omitGuildId: l,
                        shownUserIds: a,
                        rows: s,
                        counts: i,
                        includeGroupDms: u,
                        limit: d
                    } = e, f = 0;
                    for (let e of E.default.getPrivateChannelIds()) {
                        if (null != n && n > 0 && s.length >= n || null != d && f >= d) break;
                        let E = r.default.getChannel(e);
                        if (null == E || !E.isPrivate()) continue;
                        if (u && E.type === _.ChannelTypes.GROUP_DM) {
                            s.push({
                                type: "GROUP_DM",
                                item: E,
                                isSuggested: !1
                            }), i.numGroupDms++, f++;
                            continue
                        }
                        let I = o.default.lastMessageId(E.id);
                        if (null == I) continue;
                        let h = E.getRecipientId();
                        if (null != h && !t.has(h) && !a.has(h)) {
                            let e = c.default.getUser(h);
                            if (null == e || e.bot || T(l, e.id)) continue;
                            a.add(e.id), s.push({
                                type: "DM",
                                item: e,
                                isSuggested: !1
                            }), i.numDms++, f++
                        }
                    }
                },
                S = e => {
                    let {
                        omitUserIds: t,
                        maxRowsWithoutQuery: n,
                        omitGuildId: l,
                        shownUserIds: a,
                        rows: s,
                        counts: i
                    } = e;
                    for (let e of d.default.getFriendIDs()) {
                        if (null != n && n > 0 && s.length >= n) break;
                        if (t.has(e) || a.has(e)) continue;
                        let r = c.default.getUser(e);
                        !(null == r || T(l, r.id)) && (s.push({
                            type: "FRIEND",
                            item: r,
                            isSuggested: !1
                        }), i.numFriends++)
                    }
                },
                g = e => {
                    let {
                        query: t,
                        rows: n,
                        counts: l,
                        inviteTargetType: a
                    } = e;
                    a === I.InviteTargetTypes.EMBEDDED_APPLICATION && f.default.queryChannels({
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
                        }), l.numChannels++
                    })
                },
                C = e => {
                    let {
                        query: t,
                        omitUserIds: n,
                        shownUserIds: l,
                        rows: a,
                        counts: s
                    } = e;
                    f.default.queryDMUsers({
                        query: t,
                        limit: 50
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        if (n.has(t.id)) return;
                        let i = r.default.getDMFromUserId(t.id);
                        if (null == i) return;
                        let u = o.default.lastMessageId(i);
                        null != u && (l.add(t.id), a.push({
                            type: "DM",
                            item: t,
                            isSuggested: !1
                        }), s.numDms++)
                    })
                },
                p = e => {
                    let {
                        query: t,
                        rows: n,
                        counts: l
                    } = e;
                    f.default.queryGroupDMs({
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
                        }), l.numGroupDms++
                    })
                },
                x = e => {
                    let {
                        query: t,
                        rows: n,
                        counts: l,
                        omitUserIds: a,
                        shownUserIds: s
                    } = e;
                    f.default.queryFriends({
                        query: t,
                        limit: 500,
                        _fuzzy: !1
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        !(a.has(t.id) || s.has(t.id)) && (s.add(t.id), n.push({
                            type: "FRIEND",
                            item: t,
                            isSuggested: !1
                        }), l.numFriends++)
                    })
                };

            function R(e) {
                let {
                    query: t,
                    inviteTargetType: n,
                    omitUserIds: l,
                    suggestedUserIds: a,
                    suggestedChannelIds: s,
                    maxRowsWithoutQuery: i,
                    omitGuildId: r
                } = e, u = new Set, o = [], d = {
                    numFriends: 0,
                    numDms: 0,
                    numGroupDms: 0,
                    numGuildMembers: 0,
                    numChannels: 0
                };
                if ("" === t) {
                    let e = {
                        omitUserIds: l,
                        maxRowsWithoutQuery: i,
                        omitGuildId: r,
                        shownUserIds: u,
                        rows: o,
                        counts: d
                    };
                    n === I.InviteTargetTypes.EMBEDDED_APPLICATION && (m({
                        ...e,
                        includeGroupDms: !1,
                        limit: 1
                    }), v({
                        ...e,
                        suggestedChannelIds: s
                    })), N({
                        ...e,
                        suggestedUserIds: a
                    }), m({
                        ...e,
                        includeGroupDms: !0
                    }), S(e)
                } else {
                    let e = {
                        query: t,
                        rows: o,
                        counts: d
                    };
                    n === I.InviteTargetTypes.EMBEDDED_APPLICATION && g({
                        ...e,
                        inviteTargetType: n
                    }), C({
                        ...e,
                        omitUserIds: l,
                        shownUserIds: u
                    }), p(e), x({
                        ...e,
                        omitUserIds: l,
                        shownUserIds: u
                    })
                }
                return {
                    rows: o,
                    counts: d
                }
            }

            function A(e, t) {
                for (let n of E.default.getPrivateChannelIds()) {
                    let l = r.default.getChannel(n);
                    if (null == l || !l.isDM() || null == o.default.lastMessageId(l.id)) continue;
                    let a = l.getRecipientId();
                    if (null != a && !e.has(a)) {
                        let e = c.default.getUser(a);
                        if (null == e || e.bot || T(t, e.id)) continue;
                        return e
                    }
                }
                return null
            }

            function O(e) {
                let {
                    channel: t,
                    inviteTargetType: n,
                    applicationId: l
                } = e;
                if (n === I.InviteTargetTypes.EMBEDDED_APPLICATION) {
                    if (null != t) {
                        for (let e of i.default.getEmbeddedActivitiesForChannel(t.id))
                            if (e.application_id === l) return new Set(e.connections.keys())
                    }
                }
                return new Set
            }
            let L = {
                    MINUTES: "minutes",
                    HOURS: "hours",
                    DAYS: "days",
                    NEVER: "never"
                },
                M = {
                    [l.INVITE_OPTIONS_30_MINUTES.value]: {
                        value: 30,
                        type: L.MINUTES
                    },
                    [l.INVITE_OPTIONS_1_HOUR.value]: {
                        value: 1,
                        type: L.HOURS
                    },
                    [l.INVITE_OPTIONS_6_HOURS.value]: {
                        value: 6,
                        type: L.HOURS
                    },
                    [l.INVITE_OPTIONS_12_HOURS.value]: {
                        value: 12,
                        type: L.HOURS
                    },
                    [l.INVITE_OPTIONS_1_DAY.value]: {
                        value: 1,
                        type: L.DAYS
                    },
                    [l.INVITE_OPTIONS_7_DAYS.value]: {
                        value: 7,
                        type: L.DAYS
                    },
                    [l.INVITE_OPTIONS_30_DAYS.value]: {
                        value: 30,
                        type: L.DAYS
                    },
                    [l.INVITE_OPTIONS_FOREVER.value]: {
                        value: 0,
                        type: L.NEVER
                    }
                };

            function D(e, t) {
                let n = parseInt(t, 10),
                    l = 0 === n,
                    a = M[e].value,
                    s = M[e].type;
                switch (s) {
                    case L.MINUTES:
                        if (l) return h.default.Messages.INVITE_EXPIRES_MINUTES;
                        return h.default.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
                            numUses: n
                        });
                    case L.HOURS:
                        if (l) return h.default.Messages.INVITE_EXPIRES_HOURS.format({
                            numHours: a
                        });
                        return h.default.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
                            numHours: a,
                            numUses: n
                        });
                    case L.DAYS:
                        if (l) return h.default.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
                            numDays: a
                        });
                        return h.default.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
                            numDays: a,
                            numUses: n
                        });
                    case L.NEVER:
                        if (l) return h.default.Messages.INVITE_EXPIRES_NEVER;
                        return h.default.Messages.INVITE_EXPIRES_USES.format({
                            numUses: n
                        });
                    default:
                        return ""
                }
            }
            var y = {
                getMaxAgeOptions: l.MAX_AGE_OPTIONS,
                getMaxUsesOptions: l.MAX_USES_OPTIONS,
                INVITE_OPTIONS_FOREVER: l.INVITE_OPTIONS_FOREVER,
                INVITE_OPTIONS_1_DAY: l.INVITE_OPTIONS_1_DAY,
                INVITE_OPTIONS_7_DAYS: l.INVITE_OPTIONS_7_DAYS,
                INVITE_OPTIONS_30_DAYS: l.INVITE_OPTIONS_30_DAYS,
                INVITE_OPTIONS_12_HOURS: l.INVITE_OPTIONS_12_HOURS,
                INVITE_OPTIONS_6_HOURS: l.INVITE_OPTIONS_6_HOURS,
                INVITE_OPTIONS_1_HOUR: l.INVITE_OPTIONS_1_HOUR,
                INVITE_OPTIONS_30_MINUTES: l.INVITE_OPTIONS_30_MINUTES,
                INVITE_OPTIONS_UNLIMITED: l.INVITE_OPTIONS_UNLIMITED,
                INVITE_OPTIONS_ONCE: l.INVITE_OPTIONS_ONCE,
                INVITE_OPTIONS_5_TIMES: l.INVITE_OPTIONS_5_TIMES,
                INVITE_OPTIONS_10_TIMES: l.INVITE_OPTIONS_10_TIMES,
                INVITE_OPTIONS_25_TIMES: l.INVITE_OPTIONS_25_TIMES,
                INVITE_OPTIONS_50_TIMES: l.INVITE_OPTIONS_50_TIMES,
                INVITE_OPTIONS_100_TIMES: l.INVITE_OPTIONS_100_TIMES
            }