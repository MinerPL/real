(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["90382"], {
        656913: function(e, t, I) {
            "use strict";
            I.r(t), I.d(t, {
                default: function() {
                    return f
                }
            });
            var u = I("37983");
            I("884691");
            var n = I("414456"),
                a = I.n(n),
                s = I("819855"),
                _ = I("841098"),
                l = I("449918"),
                r = I("832132"),
                i = I("818643"),
                E = I("608684"),
                S = I("49111"),
                T = I("575282");
            let N = S.Color.PRIMARY_400,
                O = S.Color.PRIMARY_500;

            function f(e) {
                let {
                    enabled: t,
                    imageClassName: I,
                    iconWrapperClassName: n,
                    ...S
                } = e, f = (0, _.default)(), d = (0, s.isThemeDark)(f) ? N : O, o = {
                    height: 18,
                    width: 18,
                    color: (0, l.getColor)(d)
                };
                return (0, u.jsx)(E.default, {
                    className: a({
                        [T.avatarUploader]: t,
                        [T.avatarUploaderDisabled]: !t
                    }),
                    imageClassName: a(I, T.avatarUploaderInnerSquare, {
                        [T.avatarUploaderInnerSquareDisabled]: !t
                    }),
                    icon: null != S.image && "" !== S.image ? (0, u.jsx)(r.default, {
                        ...o
                    }) : (0, u.jsx)(i.default, {
                        ...o
                    }),
                    iconClassName: a(T.avatarUploadIcon, T.hideDefaultIcon),
                    iconWrapperClassName: n,
                    showIcon: !0,
                    showIconDisabled: !0,
                    hideSize: !0,
                    ...S
                })
            }
        },
        354023: function(e, t, I) {
            "use strict";
            let u;
            I.r(t), I.d(t, {
                RowTypes: function() {
                    return a
                },
                generateRowsForQuery: function() {
                    return R
                },
                getMostRecentDMedUser: function() {
                    return V
                },
                getUsersAlreadyJoined: function() {
                    return A
                },
                maxAgeString: function() {
                    return y
                },
                default: function() {
                    return v
                }
            });
            var n, a, s = I("191225"),
                _ = I("42203"),
                l = I("26989"),
                r = I("660478"),
                i = I("27618"),
                E = I("697218"),
                S = I("287850"),
                T = I("25292"),
                N = I("49111"),
                O = I("91366"),
                f = I("782340");
            u = I("591205"), (n = a || (a = {})).GROUP_DM = "GROUP_DM", n.DM = "DM", n.FRIEND = "FRIEND", n.CHANNEL = "CHANNEL";
            let d = (e, t) => null != e && l.default.isMember(e, t),
                o = e => {
                    let {
                        omitUserIds: t,
                        suggestedUserIds: I,
                        maxRowsWithoutQuery: u,
                        omitGuildId: n,
                        shownUserIds: s,
                        rows: _,
                        counts: l
                    } = e;
                    if (null != I)
                        for (let e of I) {
                            if (null != u && u > 0 && _.length >= u) break;
                            if (t.has(e) || s.has(e)) continue;
                            let I = E.default.getUser(e);
                            !(null == I || d(n, I.id)) && (s.add(I.id), _.push({
                                type: a.FRIEND,
                                item: I,
                                isSuggested: !0
                            }), l.numFriends++)
                        }
                },
                M = e => {
                    let {
                        suggestedChannelIds: t,
                        maxRowsWithoutQuery: I,
                        rows: u,
                        counts: n
                    } = e;
                    if (null != t)
                        for (let e of t) {
                            if (null != I && I > 0 && u.length >= I) break;
                            let t = _.default.getChannel(e);
                            null != t && (u.push({
                                type: a.CHANNEL,
                                item: t,
                                isSuggested: !0
                            }), n.numChannels++)
                        }
                },
                P = e => {
                    let {
                        omitUserIds: t,
                        maxRowsWithoutQuery: I,
                        omitGuildId: u,
                        shownUserIds: n,
                        rows: s,
                        counts: l,
                        includeGroupDms: i,
                        limit: T
                    } = e, O = 0;
                    for (let e of S.default.getPrivateChannelIds()) {
                        if (null != I && I > 0 && s.length >= I || null != T && O >= T) break;
                        let S = _.default.getChannel(e);
                        if (null == S || !S.isPrivate()) continue;
                        if (i && S.type === N.ChannelTypes.GROUP_DM) {
                            s.push({
                                type: a.GROUP_DM,
                                item: S,
                                isSuggested: !1
                            }), l.numGroupDms++, O++;
                            continue
                        }
                        let f = r.default.lastMessageId(S.id);
                        if (null == f) continue;
                        let o = S.getRecipientId();
                        if (null != o && !t.has(o) && !n.has(o)) {
                            let e = E.default.getUser(o);
                            if (null == e || e.bot || d(u, e.id)) continue;
                            n.add(e.id), s.push({
                                type: a.DM,
                                item: e,
                                isSuggested: !1
                            }), l.numDms++, O++
                        }
                    }
                },
                U = e => {
                    let {
                        omitUserIds: t,
                        maxRowsWithoutQuery: I,
                        omitGuildId: u,
                        shownUserIds: n,
                        rows: s,
                        counts: _
                    } = e;
                    for (let e of i.default.getFriendIDs()) {
                        if (null != I && I > 0 && s.length >= I) break;
                        if (t.has(e) || n.has(e)) continue;
                        let l = E.default.getUser(e);
                        !(null == l || d(u, l.id)) && (s.push({
                            type: a.FRIEND,
                            item: l,
                            isSuggested: !1
                        }), _.numFriends++)
                    }
                },
                m = e => {
                    let {
                        query: t,
                        rows: I,
                        counts: u,
                        inviteTargetType: n
                    } = e;
                    n === O.InviteTargetTypes.EMBEDDED_APPLICATION && T.default.queryChannels({
                        query: t,
                        limit: 3,
                        guildId: void 0
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        I.push({
                            type: a.CHANNEL,
                            item: t,
                            isSuggested: !1
                        }), u.numChannels++
                    })
                },
                g = e => {
                    let {
                        query: t,
                        omitUserIds: I,
                        shownUserIds: u,
                        rows: n,
                        counts: s
                    } = e;
                    T.default.queryDMUsers({
                        query: t,
                        limit: 50
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        if (I.has(t.id)) return;
                        let l = _.default.getDMFromUserId(t.id);
                        if (null == l) return;
                        let i = r.default.lastMessageId(l);
                        null != i && (u.add(t.id), n.push({
                            type: a.DM,
                            item: t,
                            isSuggested: !1
                        }), s.numDms++)
                    })
                },
                D = e => {
                    let {
                        query: t,
                        rows: I,
                        counts: u
                    } = e;
                    T.default.queryGroupDMs({
                        query: t,
                        limit: 50,
                        fuzzy: !1
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        I.push({
                            type: a.GROUP_DM,
                            item: t,
                            isSuggested: !1
                        }), u.numGroupDms++
                    })
                },
                c = e => {
                    let {
                        query: t,
                        rows: I,
                        counts: u,
                        omitUserIds: n,
                        shownUserIds: s
                    } = e;
                    T.default.queryFriends({
                        query: t,
                        limit: 500,
                        _fuzzy: !1
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        !(n.has(t.id) || s.has(t.id)) && (s.add(t.id), I.push({
                            type: a.FRIEND,
                            item: t,
                            isSuggested: !1
                        }), u.numFriends++)
                    })
                };

            function R(e) {
                let {
                    query: t,
                    inviteTargetType: I,
                    omitUserIds: u,
                    suggestedUserIds: n,
                    suggestedChannelIds: a,
                    maxRowsWithoutQuery: s,
                    omitGuildId: _
                } = e, l = new Set, r = [], i = {
                    numFriends: 0,
                    numDms: 0,
                    numGroupDms: 0,
                    numGuildMembers: 0,
                    numChannels: 0
                };
                if ("" === t) {
                    let e = {
                        omitUserIds: u,
                        maxRowsWithoutQuery: s,
                        omitGuildId: _,
                        shownUserIds: l,
                        rows: r,
                        counts: i
                    };
                    I === O.InviteTargetTypes.EMBEDDED_APPLICATION && (P({
                        ...e,
                        includeGroupDms: !1,
                        limit: 1
                    }), M({
                        ...e,
                        suggestedChannelIds: a
                    })), o({
                        ...e,
                        suggestedUserIds: n
                    }), P({
                        ...e,
                        includeGroupDms: !0
                    }), U(e)
                } else {
                    let e = {
                        query: t,
                        rows: r,
                        counts: i
                    };
                    I === O.InviteTargetTypes.EMBEDDED_APPLICATION && m({
                        ...e,
                        inviteTargetType: I
                    }), g({
                        ...e,
                        omitUserIds: u,
                        shownUserIds: l
                    }), D(e), c({
                        ...e,
                        omitUserIds: u,
                        shownUserIds: l
                    })
                }
                return {
                    rows: r,
                    counts: i
                }
            }

            function V(e, t) {
                for (let I of S.default.getPrivateChannelIds()) {
                    let u = _.default.getChannel(I);
                    if (null == u || !u.isDM() || null == r.default.lastMessageId(u.id)) continue;
                    let n = u.getRecipientId();
                    if (null != n && !e.has(n)) {
                        let e = E.default.getUser(n);
                        if (null == e || e.bot || d(t, e.id)) continue;
                        return e
                    }
                }
                return null
            }

            function A(e) {
                let {
                    channel: t,
                    inviteTargetType: I,
                    applicationId: u
                } = e;
                if (I === O.InviteTargetTypes.EMBEDDED_APPLICATION) {
                    if (null != t) {
                        for (let e of s.default.getEmbeddedActivitiesForChannel(t.id))
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
                let I = parseInt(t, 10),
                    u = 0 === I,
                    n = h[e].value,
                    a = h[e].type;
                switch (a) {
                    case p.MINUTES:
                        if (u) return f.default.Messages.INVITE_EXPIRES_MINUTES;
                        return f.default.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
                            numUses: I
                        });
                    case p.HOURS:
                        if (u) return f.default.Messages.INVITE_EXPIRES_HOURS.format({
                            numHours: n
                        });
                        return f.default.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
                            numHours: n,
                            numUses: I
                        });
                    case p.DAYS:
                        if (u) return f.default.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
                            numDays: n
                        });
                        return f.default.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
                            numDays: n,
                            numUses: I
                        });
                    case p.NEVER:
                        if (u) return f.default.Messages.INVITE_EXPIRES_NEVER;
                        return f.default.Messages.INVITE_EXPIRES_USES.format({
                            numUses: I
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
        591205: function(e, t, I) {
            "use strict";
            I.r(t), I.d(t, {
                INVITE_OPTIONS_UNLIMITED: function() {
                    return a
                },
                INVITE_OPTIONS_ONCE: function() {
                    return s
                },
                INVITE_OPTIONS_5_TIMES: function() {
                    return _
                },
                INVITE_OPTIONS_10_TIMES: function() {
                    return l
                },
                INVITE_OPTIONS_25_TIMES: function() {
                    return r
                },
                INVITE_OPTIONS_50_TIMES: function() {
                    return i
                },
                INVITE_OPTIONS_100_TIMES: function() {
                    return E
                },
                MAX_USES_OPTIONS: function() {
                    return S
                },
                INVITE_OPTIONS_30_MINUTES: function() {
                    return T
                },
                INVITE_OPTIONS_1_HOUR: function() {
                    return N
                },
                INVITE_OPTIONS_6_HOURS: function() {
                    return O
                },
                INVITE_OPTIONS_12_HOURS: function() {
                    return f
                },
                INVITE_OPTIONS_1_DAY: function() {
                    return d
                },
                INVITE_OPTIONS_7_DAYS: function() {
                    return o
                },
                INVITE_OPTIONS_30_DAYS: function() {
                    return M
                },
                INVITE_OPTIONS_FOREVER: function() {
                    return P
                },
                MAX_AGE_OPTIONS: function() {
                    return U
                }
            });
            var u = I("782340");

            function n(e, t) {
                return {
                    value: e,
                    get label() {
                        return t()
                    }
                }
            }
            let a = n(0, () => u.default.Messages.MAX_USES.format({
                    maxUses: 0
                })),
                s = n(1, () => u.default.Messages.MAX_USES.format({
                    maxUses: 1
                })),
                _ = n(5, () => u.default.Messages.MAX_USES.format({
                    maxUses: 5
                })),
                l = n(10, () => u.default.Messages.MAX_USES.format({
                    maxUses: 10
                })),
                r = n(25, () => u.default.Messages.MAX_USES.format({
                    maxUses: 25
                })),
                i = n(50, () => u.default.Messages.MAX_USES.format({
                    maxUses: 50
                })),
                E = n(100, () => u.default.Messages.MAX_USES.format({
                    maxUses: 100
                })),
                S = [a, s, _, l, r, i, E],
                T = n(1800, () => u.default.Messages.DURATION_MINUTES.format({
                    minutes: 30
                })),
                N = n(3600, () => u.default.Messages.DURATION_HOURS.format({
                    hours: 1
                })),
                O = n(21600, () => u.default.Messages.DURATION_HOURS.format({
                    hours: 6
                })),
                f = n(43200, () => u.default.Messages.DURATION_HOURS.format({
                    hours: 12
                })),
                d = n(86400, () => u.default.Messages.DURATION_DAYS.format({
                    days: 1
                })),
                o = n(604800, () => u.default.Messages.DURATION_DAYS.format({
                    days: 7
                })),
                M = n(2592e3, () => u.default.Messages.DURATION_DAYS.format({
                    days: 30
                })),
                P = n(0, () => u.default.Messages.MAX_AGE_NEVER),
                U = [T, N, O, f, d, o, M, P]
        }
    }
]);