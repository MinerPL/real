(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["77951"], {
        287850: function(e, t, u) {
            "use strict";
            let n, s, I;
            u.r(t), u.d(t, {
                default: function() {
                    return v
                }
            });
            var a, l, r = u("866227"),
                i = u.n(r),
                _ = u("446674"),
                E = u("407846"),
                T = u("913144"),
                f = u("21121"),
                N = u("934306"),
                O = u("288518"),
                S = u("486503"),
                d = u("233069"),
                o = u("42203"),
                M = u("305961"),
                P = u("660478"),
                g = u("282109"),
                A = u("697218"),
                D = u("299039"),
                c = u("724210");
            (a = l || (l = {})).DEFAULT = "DEFAULT", a.FAVORITE = "FAVORITE";
            let U = new E.default(e => {
                let {
                    isRequest: t,
                    isFavorite: u
                } = e;
                return t ? [] : [u ? l.FAVORITE : l.DEFAULT]
            }, e => {
                let {
                    lastMessageId: t
                } = e;
                return -t
            });

            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, u;
                    let n = null !== (u = null !== (t = P.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== u ? u : e.id,
                        s = e.isMessageRequestTimestamp;
                    if (null != s) {
                        let e = i(s).valueOf(),
                            t = D.default.fromTimestamp(e);
                        return D.default.compare(n, t) > 0 ? n : t
                    }
                    return n
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: g.default.isMessagesFavorite(e.id) && (0, f.isInMainTabsExperiment)(),
                    isRequest: O.default.isMessageRequest(e.id) || S.default.isSpam(e.id)
                }
            }

            function R() {
                U.clear(), Object.values(o.default.getMutablePrivateChannels()).forEach(e => {
                    U.set(e.id, m(e))
                }), (0, f.isInMainTabsExperiment)() && (0, N.isSplitMessagesTab)() && g.default.getAddedToMessages().forEach(e => {
                    let t = o.default.getChannel(e);
                    null != t && (0, d.isGuildTextChannelType)(t.type) && U.set(t.id, m(t))
                })
            }

            function V() {
                let e = o.default.getMutablePrivateChannels();
                for (let t in e) U.set(t, m(e[t]))
            }
            let h = (n = [], s = [], I = [], () => {
                let e = U.values(l.FAVORITE),
                    t = U.values(l.DEFAULT);
                return (n !== e || s !== t) && (I = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return I.push(t)
                }), n = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return I.push(t)
                }), s = t), I
            });
            class p extends _.default.Store {
                initialize() {
                    this.waitFor(o.default, M.default, A.default, O.default, g.default), this.syncWith([g.default, O.default], R)
                }
                getPrivateChannelIds() {
                    return h()
                }
                getSortedChannels() {
                    return [U.values(l.FAVORITE), U.values(l.DEFAULT)]
                }
                serializeForOverlay() {
                    let e = {};
                    return U.values().forEach(t => {
                        let {
                            channelId: u,
                            lastMessageId: n
                        } = t;
                        e[u] = n
                    }), e
                }
            }
            p.displayName = "PrivateChannelSortStore";
            var v = new p(T.default, {
                CONNECTION_OPEN: R,
                CONNECTION_OPEN_SUPPLEMENTAL: R,
                OVERLAY_INITIALIZE: R,
                CACHE_LOADED: V,
                CACHE_LOADED_LAZY: V,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, d.isPrivate)(e.type) || U.has(e.id)) && U.set(e.id, m(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, d.isPrivate)(t.type) || t.id === c.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    U.set(t.id, m(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return U.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: u
                    } = e;
                    if (!U.has(t)) return !1;
                    let n = o.default.getChannel(t);
                    return null != n && U.set(t, m(n, u.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return U.delete(t)
                }
            })
        },
        354023: function(e, t, u) {
            "use strict";
            let n;
            u.r(t), u.d(t, {
                RowTypes: function() {
                    return I
                },
                generateRowsForQuery: function() {
                    return m
                },
                getMostRecentDMedUser: function() {
                    return R
                },
                getUsersAlreadyJoined: function() {
                    return V
                },
                maxAgeString: function() {
                    return v
                },
                default: function() {
                    return y
                }
            });
            var s, I, a = u("191225"),
                l = u("42203"),
                r = u("26989"),
                i = u("660478"),
                _ = u("27618"),
                E = u("697218"),
                T = u("287850"),
                f = u("25292"),
                N = u("49111"),
                O = u("91366"),
                S = u("782340");
            n = u("591205"), (s = I || (I = {})).GROUP_DM = "GROUP_DM", s.DM = "DM", s.FRIEND = "FRIEND", s.CHANNEL = "CHANNEL";
            let d = (e, t) => null != e && r.default.isMember(e, t),
                o = e => {
                    let {
                        omitUserIds: t,
                        suggestedUserIds: u,
                        maxRowsWithoutQuery: n,
                        omitGuildId: s,
                        shownUserIds: a,
                        rows: l,
                        counts: r
                    } = e;
                    if (null != u)
                        for (let e of u) {
                            if (null != n && n > 0 && l.length >= n) break;
                            if (t.has(e) || a.has(e)) continue;
                            let u = E.default.getUser(e);
                            !(null == u || d(s, u.id)) && (a.add(u.id), l.push({
                                type: I.FRIEND,
                                item: u,
                                isSuggested: !0
                            }), r.numFriends++)
                        }
                },
                M = e => {
                    let {
                        suggestedChannelIds: t,
                        maxRowsWithoutQuery: u,
                        rows: n,
                        counts: s
                    } = e;
                    if (null != t)
                        for (let e of t) {
                            if (null != u && u > 0 && n.length >= u) break;
                            let t = l.default.getChannel(e);
                            null != t && (n.push({
                                type: I.CHANNEL,
                                item: t,
                                isSuggested: !0
                            }), s.numChannels++)
                        }
                },
                P = e => {
                    let {
                        omitUserIds: t,
                        maxRowsWithoutQuery: u,
                        omitGuildId: n,
                        shownUserIds: s,
                        rows: a,
                        counts: r,
                        includeGroupDms: _,
                        limit: f
                    } = e, O = 0;
                    for (let e of T.default.getPrivateChannelIds()) {
                        if (null != u && u > 0 && a.length >= u || null != f && O >= f) break;
                        let T = l.default.getChannel(e);
                        if (null == T || !T.isPrivate()) continue;
                        if (_ && T.type === N.ChannelTypes.GROUP_DM) {
                            a.push({
                                type: I.GROUP_DM,
                                item: T,
                                isSuggested: !1
                            }), r.numGroupDms++, O++;
                            continue
                        }
                        let S = i.default.lastMessageId(T.id);
                        if (null == S) continue;
                        let o = T.getRecipientId();
                        if (null != o && !t.has(o) && !s.has(o)) {
                            let e = E.default.getUser(o);
                            if (null == e || e.bot || d(n, e.id)) continue;
                            s.add(e.id), a.push({
                                type: I.DM,
                                item: e,
                                isSuggested: !1
                            }), r.numDms++, O++
                        }
                    }
                },
                g = e => {
                    let {
                        omitUserIds: t,
                        maxRowsWithoutQuery: u,
                        omitGuildId: n,
                        shownUserIds: s,
                        rows: a,
                        counts: l
                    } = e;
                    for (let e of _.default.getFriendIDs()) {
                        if (null != u && u > 0 && a.length >= u) break;
                        if (t.has(e) || s.has(e)) continue;
                        let r = E.default.getUser(e);
                        !(null == r || d(n, r.id)) && (a.push({
                            type: I.FRIEND,
                            item: r,
                            isSuggested: !1
                        }), l.numFriends++)
                    }
                },
                A = e => {
                    let {
                        query: t,
                        rows: u,
                        counts: n,
                        inviteTargetType: s
                    } = e;
                    s === O.InviteTargetTypes.EMBEDDED_APPLICATION && f.default.queryChannels({
                        query: t,
                        limit: 3,
                        guildId: void 0
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        u.push({
                            type: I.CHANNEL,
                            item: t,
                            isSuggested: !1
                        }), n.numChannels++
                    })
                },
                D = e => {
                    let {
                        query: t,
                        omitUserIds: u,
                        shownUserIds: n,
                        rows: s,
                        counts: a
                    } = e;
                    f.default.queryDMUsers({
                        query: t,
                        limit: 50
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        if (u.has(t.id)) return;
                        let r = l.default.getDMFromUserId(t.id);
                        if (null == r) return;
                        let _ = i.default.lastMessageId(r);
                        null != _ && (n.add(t.id), s.push({
                            type: I.DM,
                            item: t,
                            isSuggested: !1
                        }), a.numDms++)
                    })
                },
                c = e => {
                    let {
                        query: t,
                        rows: u,
                        counts: n
                    } = e;
                    f.default.queryGroupDMs({
                        query: t,
                        limit: 50,
                        fuzzy: !1
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        u.push({
                            type: I.GROUP_DM,
                            item: t,
                            isSuggested: !1
                        }), n.numGroupDms++
                    })
                },
                U = e => {
                    let {
                        query: t,
                        rows: u,
                        counts: n,
                        omitUserIds: s,
                        shownUserIds: a
                    } = e;
                    f.default.queryFriends({
                        query: t,
                        limit: 500,
                        _fuzzy: !1
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        !(s.has(t.id) || a.has(t.id)) && (a.add(t.id), u.push({
                            type: I.FRIEND,
                            item: t,
                            isSuggested: !1
                        }), n.numFriends++)
                    })
                };

            function m(e) {
                let {
                    query: t,
                    inviteTargetType: u,
                    omitUserIds: n,
                    suggestedUserIds: s,
                    suggestedChannelIds: I,
                    maxRowsWithoutQuery: a,
                    omitGuildId: l
                } = e, r = new Set, i = [], _ = {
                    numFriends: 0,
                    numDms: 0,
                    numGroupDms: 0,
                    numGuildMembers: 0,
                    numChannels: 0
                };
                if ("" === t) {
                    let e = {
                        omitUserIds: n,
                        maxRowsWithoutQuery: a,
                        omitGuildId: l,
                        shownUserIds: r,
                        rows: i,
                        counts: _
                    };
                    u === O.InviteTargetTypes.EMBEDDED_APPLICATION && (P({
                        ...e,
                        includeGroupDms: !1,
                        limit: 1
                    }), M({
                        ...e,
                        suggestedChannelIds: I
                    })), o({
                        ...e,
                        suggestedUserIds: s
                    }), P({
                        ...e,
                        includeGroupDms: !0
                    }), g(e)
                } else {
                    let e = {
                        query: t,
                        rows: i,
                        counts: _
                    };
                    u === O.InviteTargetTypes.EMBEDDED_APPLICATION && A({
                        ...e,
                        inviteTargetType: u
                    }), D({
                        ...e,
                        omitUserIds: n,
                        shownUserIds: r
                    }), c(e), U({
                        ...e,
                        omitUserIds: n,
                        shownUserIds: r
                    })
                }
                return {
                    rows: i,
                    counts: _
                }
            }

            function R(e, t) {
                for (let u of T.default.getPrivateChannelIds()) {
                    let n = l.default.getChannel(u);
                    if (null == n || !n.isDM() || null == i.default.lastMessageId(n.id)) continue;
                    let s = n.getRecipientId();
                    if (null != s && !e.has(s)) {
                        let e = E.default.getUser(s);
                        if (null == e || e.bot || d(t, e.id)) continue;
                        return e
                    }
                }
                return null
            }

            function V(e) {
                let {
                    channel: t,
                    inviteTargetType: u,
                    applicationId: n
                } = e;
                if (u === O.InviteTargetTypes.EMBEDDED_APPLICATION) {
                    if (null != t) {
                        for (let e of a.default.getEmbeddedActivitiesForChannel(t.id))
                            if (e.application_id === n) return new Set(e.connections.keys())
                    }
                }
                return new Set
            }
            let h = {
                    MINUTES: "minutes",
                    HOURS: "hours",
                    DAYS: "days",
                    NEVER: "never"
                },
                p = {
                    [n.INVITE_OPTIONS_30_MINUTES.value]: {
                        value: 30,
                        type: h.MINUTES
                    },
                    [n.INVITE_OPTIONS_1_HOUR.value]: {
                        value: 1,
                        type: h.HOURS
                    },
                    [n.INVITE_OPTIONS_6_HOURS.value]: {
                        value: 6,
                        type: h.HOURS
                    },
                    [n.INVITE_OPTIONS_12_HOURS.value]: {
                        value: 12,
                        type: h.HOURS
                    },
                    [n.INVITE_OPTIONS_1_DAY.value]: {
                        value: 1,
                        type: h.DAYS
                    },
                    [n.INVITE_OPTIONS_7_DAYS.value]: {
                        value: 7,
                        type: h.DAYS
                    },
                    [n.INVITE_OPTIONS_30_DAYS.value]: {
                        value: 30,
                        type: h.DAYS
                    },
                    [n.INVITE_OPTIONS_FOREVER.value]: {
                        value: 0,
                        type: h.NEVER
                    }
                };

            function v(e, t) {
                let u = parseInt(t, 10),
                    n = 0 === u,
                    s = p[e].value,
                    I = p[e].type;
                switch (I) {
                    case h.MINUTES:
                        if (n) return S.default.Messages.INVITE_EXPIRES_MINUTES;
                        return S.default.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
                            numUses: u
                        });
                    case h.HOURS:
                        if (n) return S.default.Messages.INVITE_EXPIRES_HOURS.format({
                            numHours: s
                        });
                        return S.default.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
                            numHours: s,
                            numUses: u
                        });
                    case h.DAYS:
                        if (n) return S.default.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
                            numDays: s
                        });
                        return S.default.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
                            numDays: s,
                            numUses: u
                        });
                    case h.NEVER:
                        if (n) return S.default.Messages.INVITE_EXPIRES_NEVER;
                        return S.default.Messages.INVITE_EXPIRES_USES.format({
                            numUses: u
                        });
                    default:
                        return ""
                }
            }
            var y = {
                getMaxAgeOptions: n.MAX_AGE_OPTIONS,
                getMaxUsesOptions: n.MAX_USES_OPTIONS,
                INVITE_OPTIONS_FOREVER: n.INVITE_OPTIONS_FOREVER,
                INVITE_OPTIONS_1_DAY: n.INVITE_OPTIONS_1_DAY,
                INVITE_OPTIONS_7_DAYS: n.INVITE_OPTIONS_7_DAYS,
                INVITE_OPTIONS_30_DAYS: n.INVITE_OPTIONS_30_DAYS,
                INVITE_OPTIONS_12_HOURS: n.INVITE_OPTIONS_12_HOURS,
                INVITE_OPTIONS_6_HOURS: n.INVITE_OPTIONS_6_HOURS,
                INVITE_OPTIONS_1_HOUR: n.INVITE_OPTIONS_1_HOUR,
                INVITE_OPTIONS_30_MINUTES: n.INVITE_OPTIONS_30_MINUTES,
                INVITE_OPTIONS_UNLIMITED: n.INVITE_OPTIONS_UNLIMITED,
                INVITE_OPTIONS_ONCE: n.INVITE_OPTIONS_ONCE,
                INVITE_OPTIONS_5_TIMES: n.INVITE_OPTIONS_5_TIMES,
                INVITE_OPTIONS_10_TIMES: n.INVITE_OPTIONS_10_TIMES,
                INVITE_OPTIONS_25_TIMES: n.INVITE_OPTIONS_25_TIMES,
                INVITE_OPTIONS_50_TIMES: n.INVITE_OPTIONS_50_TIMES,
                INVITE_OPTIONS_100_TIMES: n.INVITE_OPTIONS_100_TIMES
            }
        },
        591205: function(e, t, u) {
            "use strict";
            u.r(t), u.d(t, {
                INVITE_OPTIONS_UNLIMITED: function() {
                    return I
                },
                INVITE_OPTIONS_ONCE: function() {
                    return a
                },
                INVITE_OPTIONS_5_TIMES: function() {
                    return l
                },
                INVITE_OPTIONS_10_TIMES: function() {
                    return r
                },
                INVITE_OPTIONS_25_TIMES: function() {
                    return i
                },
                INVITE_OPTIONS_50_TIMES: function() {
                    return _
                },
                INVITE_OPTIONS_100_TIMES: function() {
                    return E
                },
                MAX_USES_OPTIONS: function() {
                    return T
                },
                INVITE_OPTIONS_30_MINUTES: function() {
                    return f
                },
                INVITE_OPTIONS_1_HOUR: function() {
                    return N
                },
                INVITE_OPTIONS_6_HOURS: function() {
                    return O
                },
                INVITE_OPTIONS_12_HOURS: function() {
                    return S
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
                    return g
                }
            });
            var n = u("782340");

            function s(e, t) {
                return {
                    value: e,
                    get label() {
                        return t()
                    }
                }
            }
            let I = s(0, () => n.default.Messages.MAX_USES.format({
                    maxUses: 0
                })),
                a = s(1, () => n.default.Messages.MAX_USES.format({
                    maxUses: 1
                })),
                l = s(5, () => n.default.Messages.MAX_USES.format({
                    maxUses: 5
                })),
                r = s(10, () => n.default.Messages.MAX_USES.format({
                    maxUses: 10
                })),
                i = s(25, () => n.default.Messages.MAX_USES.format({
                    maxUses: 25
                })),
                _ = s(50, () => n.default.Messages.MAX_USES.format({
                    maxUses: 50
                })),
                E = s(100, () => n.default.Messages.MAX_USES.format({
                    maxUses: 100
                })),
                T = [I, a, l, r, i, _, E],
                f = s(1800, () => n.default.Messages.DURATION_MINUTES.format({
                    minutes: 30
                })),
                N = s(3600, () => n.default.Messages.DURATION_HOURS.format({
                    hours: 1
                })),
                O = s(21600, () => n.default.Messages.DURATION_HOURS.format({
                    hours: 6
                })),
                S = s(43200, () => n.default.Messages.DURATION_HOURS.format({
                    hours: 12
                })),
                d = s(86400, () => n.default.Messages.DURATION_DAYS.format({
                    days: 1
                })),
                o = s(604800, () => n.default.Messages.DURATION_DAYS.format({
                    days: 7
                })),
                M = s(2592e3, () => n.default.Messages.DURATION_DAYS.format({
                    days: 30
                })),
                P = s(0, () => n.default.Messages.MAX_AGE_NEVER),
                g = [f, N, O, S, d, o, M, P]
        }
    }
]);