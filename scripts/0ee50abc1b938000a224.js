(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["39963"], {
        820542: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                categoryCollapse: function() {
                    return a
                },
                categoryExpand: function() {
                    return u
                },
                categoryCollapseAll: function() {
                    return i
                },
                categoryExpandAll: function() {
                    return d
                }
            });
            var l = n("913144");

            function a(e) {
                l.default.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function u(e) {
                l.default.dispatch({
                    type: "CATEGORY_EXPAND",
                    id: e
                })
            }

            function i(e) {
                l.default.dispatch({
                    type: "CATEGORY_COLLAPSE_ALL",
                    guildId: e
                })
            }

            function d(e) {
                l.default.dispatch({
                    type: "CATEGORY_EXPAND_ALL",
                    guildId: e
                })
            }
        },
        542827: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("917351"),
                a = n.n(l),
                u = n("267363"),
                i = n("863636"),
                d = n("401690"),
                r = n("923959"),
                s = n("660478"),
                o = n("599110"),
                E = n("49111"),
                f = n("133335");

            function S(e, t) {
                let n = a.flatMap(e, e => {
                    let t = r.default.getSelectableChannelIds(e),
                        n = r.default.getVocalChannelIds(e),
                        l = [...t, ...n],
                        a = d.default.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        var u;
                        let t = null !== (u = a[e]) && void 0 !== u ? u : {};
                        for (let e in t) l.push(e)
                    }
                    return l
                }).map(e => ({
                    channelId: e,
                    readStateType: f.ReadStateTypes.CHANNEL,
                    messageId: s.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    n.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_EVENT,
                        messageId: s.default.lastMessageId(e, f.ReadStateTypes.GUILD_EVENT)
                    }), n.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: i.default.ackIdForGuild(e)
                    })
                }), o.default.track(E.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, u.bulkAck)(n)
            }
        },
        62948: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("446674"),
                a = n("95410"),
                u = n("913144"),
                i = n("679428"),
                d = n("525065"),
                r = n("305961"),
                s = n("282109"),
                o = n("568734"),
                E = n("483226"),
                f = n("44574"),
                S = n("49111"),
                c = n("397336");
            let C = "guildUnreadsEnabledStorageKey",
                g = "guildUnreadsLastClearedStorageKey",
                _ = {
                    guildUnreadsLastCleared: {}
                },
                T = _;
            class A extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(d.default), T = null != e ? e : _, ! function() {
                        var e, t, n;
                        a.default.remove("guildUnreadsOverridesStorageKey");
                        let l = null !== (e = T.guildUnreadsEnabled) && void 0 !== e ? e : {},
                            u = null !== (t = a.default.get(C)) && void 0 !== t ? t : new Set;
                        u.size > 0 && u.forEach(e => {
                            l[e] = !0
                        }), a.default.remove(C), T.guildUnreadsLastCleared = null !== (n = a.default.get(g)) && void 0 !== n ? n : {}, a.default.remove(g);
                        let d = {};
                        Object.keys(l).map(e => {
                            let t = !0 === l[e],
                                n = s.default.getGuildFlags(e);
                            n = (0, o.setFlag)(n, c.GuildNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, t), n = (0, o.setFlag)(n, c.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !t), d[e] = {
                                flags: n
                            }
                        }), Object.keys(d).length > 0 && i.default.saveUserGuildSettingsBulk(d), delete T.guildUnreadsEnabled
                    }()
                }
                getState() {
                    return T
                }
                getGuildUnreadsLastCleared(e) {
                    return T.guildUnreadsLastCleared[e]
                }
            }
            A.displayName = "GuildUnreadSettingsStore", A.persistKey = "GuildUnreadSettingsStore";
            var N = new A(u.default, {
                CONNECTION_OPEN: function() {
                    let e = (0, f.isGuildUnreadsExperimentEnabled)();
                    if (!e) return;
                    let t = r.default.getGuilds(),
                        n = d.default.getMemberCounts();
                    Object.values(t).map(e => {
                        let t = s.default.getGuildFlags(e.id),
                            l = (0, o.hasFlag)(t, c.GuildNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS),
                            a = (0, o.hasFlag)(t, c.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES);
                        if (!e.hasFeature(S.GuildFeatures.COMMUNITY) && n[e.id] < 200) {
                            l && (0, E.setGuildUnreadSetting)(e.id, !1);
                            return
                        }
                        if (l || a) return;
                        let u = s.default.getMessageNotifications(e.id);
                        (u !== S.UserNotificationSettings.ALL_MESSAGES || e.defaultMessageNotifications === S.UserNotificationSettings.ALL_MESSAGES) && (0, E.setGuildUnreadSetting)(e.id, !0)
                    })
                },
                GUILD_UNREADS_SET_LAST_CLEARED: function(e) {
                    let {
                        guildId: t
                    } = e, n = s.default.isGuildUnreadSettingEnabled(t);
                    n && (T.guildUnreadsLastCleared[t] = Date.now())
                }
            })
        },
        483226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setChannelUnreadSetting: function() {
                    return s
                },
                setGuildUnreadSetting: function() {
                    return o
                },
                setGuildUnreadsLastCleared: function() {
                    return E
                }
            });
            var l = n("913144"),
                a = n("519705"),
                u = n("282109"),
                i = n("568734"),
                d = n("627869"),
                r = n("397336");

            function s(e, t, n) {
                let l = u.default.getGuildChannelFlags(e, t);
                l = (0, i.setFlag)(l, r.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n === d.UserUnreadSettings.ALL_MESSAGES), l = (0, i.setFlag)(l, r.ChannelNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, n === d.UserUnreadSettings.MENTIONS_AND_HIGHLIGHTS), a.default.updateChannelOverrideSettings(e, t, {
                    flags: l
                })
            }

            function o(e, t) {
                let n = u.default.getGuildFlags(e);
                n = (0, i.setFlag)(n, r.GuildNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, t), n = (0, i.setFlag)(n, r.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !t), a.default.updateGuildNotificationSettings(e, {
                    flags: n
                })
            }

            function E(e) {
                l.default.dispatch({
                    type: "GUILD_UNREADS_SET_LAST_CLEARED",
                    guildId: e
                })
            }
        },
        488107: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                maybeForceUnread: function() {
                    return f
                }
            });
            var l = n("200029"),
                a = n("483038"),
                u = n("512395"),
                i = n("282109"),
                d = n("697218"),
                r = n("62948"),
                s = n("44574"),
                o = n("49111");
            let E = 108e5;

            function f(e) {
                let t = d.default.getCurrentUser(),
                    n = (0, s.isGuildUnreadsExperimentEnabled)(),
                    f = i.default.isGuildUnreadSettingEnabled(e),
                    S = r.default.getGuildUnreadsLastCleared(e),
                    c = a.default.getLastFetchedMillis(e),
                    C = Date.now(),
                    g = (0, u.isChannelHighlightsEnabledForGuild)(e),
                    _ = i.default.getNotifyHighlights(e),
                    T = _ === o.HighlightSettings.ENABLED || _ === o.HighlightSettings.NULL;
                return !!n && !!f && !!g && !!T && ((null == t ? void 0 : t.isStaff()) ? ((null == c || null != c && C - c > 36e5) && l.default.maybeLoadFeedForGuild(e), !1) : null == c || C - c > E && C - S > E)
            }
        },
        952451: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eg
                }
            });
            var l = n("917351"),
                a = n.n(l);
            n("249654");
            var u = n("483226"),
                i = n("44574"),
                d = n("488107");
            n("21121"), n("136511");
            var r = n("512395"),
                s = n("208127"),
                o = n("401690"),
                E = n("755624"),
                f = n("526311"),
                S = n("233069"),
                c = n("271938"),
                C = n("42203"),
                g = n("957255"),
                _ = n("660478"),
                T = n("18494"),
                A = n("455079"),
                N = n("282109"),
                L = n("697218"),
                h = n("49111"),
                I = n("724210"),
                U = n("133335");
            let G = "null",
                p = {},
                D = new Set,
                y = 0;

            function R(e) {
                var t;
                let n = p[null != e ? e : G];
                return {
                    unread: !1,
                    unreadByType: {},
                    unreadChannelId: null,
                    mentionCount: 0,
                    mentionCounts: {},
                    ncMentionCount: 0,
                    sentinel: null !== (t = null == n ? void 0 : n.sentinel) && void 0 !== t ? t : 0
                }
            }

            function O(e) {
                var t;
                return p[null != e ? e : G] = null !== (t = p[null != e ? e : G]) && void 0 !== t ? t : R(e)
            }

            function M(e) {
                let t = O(e);
                t.sentinel++, y++
            }

            function v(e, t, n) {
                let l = e.guild_id;
                return null != l && n && !((0, S.isThread)(e.type) || N.default.isChannelRecordOrParentOptedIn(e)) && 0 === t
            }

            function H(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (null == e || e.isGuildVocal() && 0 === t || e.hasFlag(I.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) return !1;
                if (0 === t) {
                    let t = e.isThread() ? E.default.isMuted(e.id) : N.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
                    if (t) return !1
                }
                return !(!e.isPrivate() && (v(e, t, (0, r.isOptInEnabledForGuild)(e.guild_id)) || !g.default.can(e.accessPermissions, e))) && (t > 0 || N.default.isChannelRelevant(e))
            }

            function m(e) {
                switch (e) {
                    case G:
                    case null:
                    case void 0:
                        return null;
                    default:
                        return e
                }
            }

            function F(e, t) {
                let n = e.guild_id,
                    l = e.id;
                return !(N.default.isGuildOrCategoryOrChannelMuted(n, l) || v(e, _.default.getMentionCount(l), t)) && _.default.hasNotableUnread(e.id)
            }

            function P(e, t) {
                let n = _.default.hasUnread(e, t);
                if (t === U.ReadStateTypes.GUILD_EVENT) return !(N.default.isMuted(e) || N.default.isMuteScheduledEventsEnabled(e)) && n;
                return n
            }

            function b(e, t) {
                let n = R(e);
                return n.mentionCounts = {
                    ...t.mentionCounts
                }, n.unreadByType = {
                    ...t.unreadByType
                }, n
            }

            function B(e) {
                return e.unread = Object.values(e.unreadByType).some(e => e), e
            }

            function V(e, t) {}

            function w(e, t, n) {
                if (B(t), t.mentionCount = a(t.mentionCounts).values().sum(), t.unread !== n.unread || t.mentionCount !== n.mentionCount) return p[null != e ? e : G] = t, null != e && (t.unread ? D.add(e) : D.delete(e)), y++, M(null != e ? e : G), !0;
                return !1
            }

            function K(e, t) {
                let n = m(e),
                    l = O(n),
                    a = b(n, l),
                    u = (0, r.isOptInEnabledForGuild)(n),
                    i = !1;
                if (t.forEach(e => {
                        let t = C.default.getChannel(e);
                        if (null == t) {
                            delete a.mentionCounts[e];
                            return
                        }
                        if (t.getGuildId() !== n) return;
                        let l = _.default.getMentionCount(e);
                        null !== n && !i && F(t, u) && H(t, l) && (i = !0, a.unreadChannelId = t.id), l > 0 && H(t, l) ? a.mentionCounts[t.id] = l : delete a.mentionCounts[t.id]
                    }), a.unreadByType[U.ReadStateTypes.CHANNEL] = i, a.unreadByType[U.ReadStateTypes.CHANNEL] !== l.unreadByType[U.ReadStateTypes.CHANNEL] && !a.unreadByType[U.ReadStateTypes.CHANNEL]) {
                    let e = C.default.getChannel(l.unreadChannelId);
                    if (!(null != e && !t.includes(e.id) && F(e, u) && H(e))) return x(n);
                    null != n && D.add(n), a.unreadByType[U.ReadStateTypes.CHANNEL] = !0
                }
                return w(n, a, l)
            }

            function k(e, t) {
                if (null == e) return;
                let n = O(e),
                    l = b(e, n);
                return l.unreadByType[U.ReadStateTypes.GUILD_EVENT] = P(e, t), w(e, l, n)
            }

            function x(e, t) {
                let n = m(e),
                    l = R(n),
                    a = (0, s.isReadStateStaffExperimentEnabled)();
                if (null == n) {
                    let e = C.default.getMutablePrivateChannels();
                    for (let t in e) {
                        let n = e[t],
                            a = _.default.getMentionCount(t);
                        a > 0 && H(n, a) && (l.mentionCount += a, l.mentionCounts[n.id] = a)
                    }
                } else {
                    let e = N.default.isMuted(n);
                    if (e && !1 === t) return !1;
                    let u = N.default.getMutedChannels(n),
                        d = N.default.getChannelOverrides(n),
                        s = (0, r.isOptInEnabledForGuild)(n),
                        f = (0, i.isGuildUnreadsExperimentEnabled)(),
                        c = C.default.getMutableBasicGuildChannelsForGuild(n);
                    for (let t in c) {
                        let n = c[t],
                            i = e || u.has(t) || null != n.parent_id && u.has(n.parent_id),
                            r = l.unreadByType[U.ReadStateTypes.CHANNEL],
                            {
                                mentionCount: o,
                                hasNotableUnread: E
                            } = _.default.getGuildChannelUnreadState(n, s, f, d, i, r),
                            C = o > 0;
                        if (!C && i) continue;
                        let T = !r && (!i || C) && E;
                        if (T || C) {
                            let e = function(e, t, n, l) {
                                if ((0, S.isGuildVocalChannelType)(e.type) && 0 === t || !g.default.canBasicChannel((0, S.getBasicAccessPermissions)(e.type), e) || v(e, t, l)) return !1;
                                return !("flags" in e && e.hasFlag(I.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && (t > 0 || !n || (0, S.isThread)(e.type) || N.default.resolvedMessageNotifications(e) === h.UserNotificationSettings.ALL_MESSAGES)
                            }(n, o, a, s);
                            e && (T && (l.unreadByType[U.ReadStateTypes.CHANNEL] = !0, l.unreadChannelId = t), C && (l.mentionCount += o, l.mentionCounts[n.id] = o))
                        }
                    }
                    let T = o.default.getActiveJoinedThreadsForGuild(n);
                    for (let t in T)
                        for (let n in T[t]) {
                            !l.unreadByType[U.ReadStateTypes.CHANNEL] && _.default.hasNotableUnread(n) && !E.default.isMuted(n) && !e && (l.unreadByType[U.ReadStateTypes.CHANNEL] = !0, l.unreadChannelId = n);
                            let t = _.default.getMentionCount(n);
                            t > 0 && (l.mentionCount += t, l.mentionCounts[n] = t)
                        }!l.unreadByType[U.ReadStateTypes.GUILD_EVENT] && P(n, U.ReadStateTypes.GUILD_EVENT) && (l.unreadByType[U.ReadStateTypes.GUILD_EVENT] = !0)
                }
                B(l);
                let d = O(n);
                if (l.unread !== d.unread || l.mentionCount !== d.mentionCount) return p[null != n ? n : G] = l, null != n && (l.unread ? D.add(n) : (D.delete(n), (0, u.setGuildUnreadsLastCleared)(n))), y++, M(null != n ? n : G), !0;
                return !1
            }

            function Y(e) {
                let {
                    guilds: t
                } = e;
                p = {}, y = 0, D = new Set, x(null);
                let {
                    length: n
                } = t;
                for (let e = 0; e < n; e++) {
                    let n = t[e];
                    null != n && x(n.id)
                }
            }

            function j(e) {
                let {
                    guilds: t,
                    readState: n
                } = e;
                p = {}, y = 0, D = new Set;
                let l = n.entries.length < 500,
                    a = new Set;
                for (let e of (l && n.entries.forEach(e => {
                        if (null != e.mention_count && e.mention_count > 0) {
                            if (null == e.read_state_type || e.read_state_type === U.ReadStateTypes.CHANNEL) {
                                var t;
                                a.add(null === (t = C.default.getChannel(e.id)) || void 0 === t ? void 0 : t.guild_id)
                            } else a.add(e.id)
                        }
                    }), x(null), t)) x(e.id, l ? a.has(e.id) : void 0)
            }

            function z(e) {
                let {
                    guild: t
                } = e;
                return x(t.id)
            }

            function J(e) {
                let {
                    guild: t
                } = e;
                return null != p[t.id] && (delete p[t.id], D.delete(t.id), y++, !0)
            }

            function Z(e) {
                let {
                    channel: {
                        id: t,
                        guild_id: n
                    }
                } = e;
                return K(n, [t])
            }

            function q() {
                let e = C.default.getChannel(T.default.getChannelId());
                return null != e && K(e.getGuildId(), [e.id])
            }

            function W(e) {
                let {
                    user: t,
                    guildId: n
                } = e;
                return t.id === c.default.getId() && x(n)
            }

            function X(e) {
                let {
                    channelId: t
                } = e, n = C.default.getChannel(t);
                return null != n && K(n.getGuildId(), [n.id])
            }

            function Q(e) {
                let {
                    channelId: t
                } = e, n = C.default.getChannel(t);
                if (null == n) return !1;
                if (null != n.guild_id) {
                    let e = O(n.guild_id),
                        l = n.isThread() ? !E.default.hasJoined(n.id) || E.default.isMuted(n.id) : N.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id);
                    if ((l || e.unreadByType[U.ReadStateTypes.CHANNEL]) && 0 === _.default.getMentionCount(t)) return !1
                }
                return K(n.getGuildId(), [n.id])
            }

            function $(e) {
                let {
                    channelId: t,
                    guildId: n
                } = e;
                return n !== h.FAVORITES && null != t && K(n, [t])
            }

            function ee(e) {
                let {
                    channel: t
                } = e;
                return K(t.getGuildId(), [t.id])
            }

            function et(e) {
                let {
                    channels: t
                } = e;
                return a(t).groupBy(e => e.getGuildId()).reduce((e, t, n) => K(n, t.map(e => e.id)) || e, !1)
            }

            function en(e) {
                let {
                    channels: t
                } = e;
                return a(t).map(e => {
                    let {
                        channelId: t
                    } = e;
                    return t
                }).filter(e => null != C.default.getChannel(e)).groupBy(e => {
                    var t;
                    return null === (t = C.default.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
                }).reduce((e, t, n) => K(n, t) || e, !1)
            }

            function el(e) {
                let {
                    channel: t
                } = e;
                return K(t.getGuildId(), [t.id, t.parent_id])
            }

            function ea(e) {
                let {
                    guildScheduledEvent: t
                } = e;
                return k(t.guild_id, U.ReadStateTypes.GUILD_EVENT)
            }

            function eu(e) {
                let {
                    id: t,
                    ackType: n
                } = e;
                return k(t, n)
            }

            function ei(e) {
                let {
                    id: t,
                    guildId: n
                } = e;
                return K(n, [t])
            }

            function ed(e) {
                return (0, f.doesThreadMembersActionAffectMe)(e) && K(e.guildId, [e.id])
            }

            function er(e) {
                let {
                    threads: t,
                    guildId: n
                } = e;
                return K(n, t.filter(e => E.default.hasJoined(e.id)).map(e => e.id))
            }

            function es(e) {
                return null != e.channels && K(e.guildId, e.channels.map(e => e.id))
            }

            function eo(e) {
                let {
                    guildId: t
                } = e;
                return x(t)
            }

            function eE(e) {
                let {
                    guildId: t
                } = e;
                return x(t)
            }

            function ef(e) {
                var t;
                let {
                    userGuildSettings: n
                } = e, l = new Set(n.map(e => null !== (t = e.guild_id) && void 0 !== t ? t : G));
                return Object.keys(p).reduce((e, t) => l.has(t) && x(t) || e, !1)
            }

            function eS() {
                for (let e in p) {
                    let t = p[e];
                    t.ncMentionCount = 0
                }
            }

            function ec(e) {
                let {
                    guildId: t
                } = e;
                return x(t)
            }
            class eC extends A.default {
                takeSnapshot() {
                    return {
                        version: eC.LATEST_SNAPSHOT_VERSION,
                        data: {
                            guilds: p,
                            unreadGuilds: Array.from(D)
                        }
                    }
                }
                hasAnyUnread() {
                    return D.size > 0
                }
                getStoreChangeSentinel() {
                    return y
                }
                getMutableUnreadGuilds() {
                    return D
                }
                getMutableGuildStates() {
                    return p
                }
                hasUnread(e) {
                    return D.has(e) || (0, d.maybeForceUnread)(e)
                }
                getMentionCount(e) {
                    return O(e).mentionCount
                }
                getMutableGuildReadState(e) {
                    return O(e)
                }
                getGuildHasUnreadIgnoreMuted(e) {
                    let t = C.default.getMutableGuildChannelsForGuild(e);
                    for (let e in t) {
                        let n = t[e];
                        if (null != n) {
                            if ((!n.isGuildVocal() || 0 !== _.default.getMentionCount(e)) && g.default.can(n.accessPermissions, n) && _.default.hasUnread(e)) return !0
                        }
                    }
                    let n = o.default.getActiveJoinedThreadsForGuild(e);
                    for (let e in n) {
                        let t = C.default.getChannel(e);
                        if (null != t && H(t)) {
                            for (let t in n[e])
                                if (_.default.hasUnread(t)) return !0
                        }
                    }
                    return !!_.default.hasUnread(e, U.ReadStateTypes.GUILD_EVENT) || !1
                }
                getTotalMentionCount(e) {
                    let t = 0;
                    for (let n in p) {
                        let l = p[n];
                        (!0 !== e || n !== G) && (t += l.mentionCount)
                    }
                    return t
                }
                getTotalNotificationsMentionCount(e) {
                    let t = 0;
                    for (let n in p) {
                        let l = p[n];
                        (!0 !== e || n !== G) && (t += l.ncMentionCount)
                    }
                    return t
                }
                getPrivateChannelMentionCount() {
                    var e;
                    let t = p[G];
                    return null !== (e = null == t ? void 0 : t.mentionCount) && void 0 !== e ? e : 0
                }
                getMentionCountForChannels(e, t) {
                    let n = 0,
                        l = p[e];
                    return null == l ? 0 : (t.forEach(e => {
                        let t = l.mentionCounts[e];
                        n += null != t ? t : 0
                    }), n)
                }
                getGuildChangeSentinel(e) {
                    return O(e).sentinel
                }
                constructor() {
                    super(), this.loadCache = () => {
                        let e = this.readSnapshot(eC.LATEST_SNAPSHOT_VERSION);
                        null != e && (p = e.guilds, D = new Set(e.unreadGuilds))
                    }, this.registerActionHandlers({
                        CONNECTION_OPEN: j,
                        OVERLAY_INITIALIZE: Y,
                        CACHE_LOADED_LAZY: this.loadCache,
                        GUILD_CREATE: z,
                        GUILD_DELETE: J,
                        MESSAGE_CREATE: Q,
                        MESSAGE_ACK: X,
                        BULK_ACK: en,
                        UPDATE_CHANNEL_DIMENSIONS: X,
                        CHANNEL_SELECT: $,
                        CHANNEL_DELETE: Z,
                        WINDOW_FOCUS: q,
                        GUILD_ACK: eo,
                        GUILD_ROLE_CREATE: eE,
                        GUILD_ROLE_DELETE: eE,
                        GUILD_ROLE_UPDATE: eE,
                        CHANNEL_CREATE: ee,
                        CHANNEL_UPDATES: et,
                        THREAD_CREATE: el,
                        THREAD_UPDATE: el,
                        THREAD_DELETE: el,
                        THREAD_LIST_SYNC: er,
                        THREAD_MEMBER_UPDATE: ei,
                        THREAD_MEMBERS_UPDATE: ed,
                        PASSIVE_UPDATE_V1: es,
                        GUILD_MEMBER_UPDATE: W,
                        USER_GUILD_SETTINGS_FULL_UPDATE: ef,
                        USER_GUILD_SETTINGS_CHANNEL_UPDATE: ec,
                        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: ec,
                        USER_GUILD_SETTINGS_GUILD_UPDATE: ec,
                        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: ec,
                        GUILD_FEATURE_ACK: eu,
                        GUILD_SCHEDULED_EVENT_CREATE: ea,
                        GUILD_SCHEDULED_EVENT_UPDATE: ea,
                        GUILD_SCHEDULED_EVENT_DELETE: ea,
                        CHANNEL_RTC_UPDATE_CHAT_OPEN: X,
                        LOAD_MESSAGES_SUCCESS: X,
                        CHANNEL_ACK: X,
                        CHANNEL_LOCAL_ACK: X,
                        VOICE_CHANNEL_SELECT: X,
                        ENABLE_AUTOMATIC_ACK: X,
                        RESORT_THREADS: X,
                        NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: eS
                    }), this.waitFor(C.default, T.default, _.default, g.default, c.default, L.default, N.default, o.default, E.default)
                }
            }
            eC.displayName = "GuildReadStateStore", eC.LATEST_SNAPSHOT_VERSION = 1;
            var eg = new eC
        },
        287850: function(e, t, n) {
            "use strict";
            let l, a, u;
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var i, d, r = n("866227"),
                s = n.n(r),
                o = n("446674"),
                E = n("407846"),
                f = n("913144"),
                S = n("21121"),
                c = n("934306"),
                C = n("288518"),
                g = n("486503"),
                _ = n("233069"),
                T = n("42203"),
                A = n("305961"),
                N = n("660478"),
                L = n("282109"),
                h = n("697218"),
                I = n("299039"),
                U = n("724210");
            (i = d || (d = {})).DEFAULT = "DEFAULT", i.FAVORITE = "FAVORITE";
            let G = new E.default(e => {
                let {
                    isRequest: t,
                    isFavorite: n
                } = e;
                return t ? [] : [n ? d.FAVORITE : d.DEFAULT]
            }, e => {
                let {
                    lastMessageId: t
                } = e;
                return -t
            });

            function p(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, n;
                    let l = null !== (n = null !== (t = N.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        a = e.isMessageRequestTimestamp;
                    if (null != a) {
                        let e = s(a).valueOf(),
                            t = I.default.fromTimestamp(e);
                        return I.default.compare(l, t) > 0 ? l : t
                    }
                    return l
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: L.default.isMessagesFavorite(e.id) && (0, S.isInMainTabsExperiment)(),
                    isRequest: C.default.isMessageRequest(e.id) || g.default.isSpam(e.id)
                }
            }

            function D() {
                G.clear(), Object.values(T.default.getMutablePrivateChannels()).forEach(e => {
                    G.set(e.id, p(e))
                }), (0, S.isInMainTabsExperiment)() && (0, c.isSplitMessagesTab)() && L.default.getAddedToMessages().forEach(e => {
                    let t = T.default.getChannel(e);
                    null != t && (0, _.isGuildTextChannelType)(t.type) && G.set(t.id, p(t))
                })
            }

            function y() {
                let e = T.default.getMutablePrivateChannels();
                for (let t in e) G.set(t, p(e[t]))
            }
            let R = (l = [], a = [], u = [], () => {
                let e = G.values(d.FAVORITE),
                    t = G.values(d.DEFAULT);
                return (l !== e || a !== t) && (u = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return u.push(t)
                }), l = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return u.push(t)
                }), a = t), u
            });
            class O extends o.default.Store {
                initialize() {
                    this.waitFor(T.default, A.default, h.default, C.default, L.default), this.syncWith([L.default, C.default], D)
                }
                getPrivateChannelIds() {
                    return R()
                }
                getSortedChannels() {
                    return [G.values(d.FAVORITE), G.values(d.DEFAULT)]
                }
                serializeForOverlay() {
                    let e = {};
                    return G.values().forEach(t => {
                        let {
                            channelId: n,
                            lastMessageId: l
                        } = t;
                        e[n] = l
                    }), e
                }
            }
            O.displayName = "PrivateChannelSortStore";
            var M = new O(f.default, {
                CONNECTION_OPEN: D,
                CONNECTION_OPEN_SUPPLEMENTAL: D,
                OVERLAY_INITIALIZE: D,
                CACHE_LOADED: y,
                CACHE_LOADED_LAZY: y,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, _.isPrivate)(e.type) || G.has(e.id)) && G.set(e.id, p(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, _.isPrivate)(t.type) || t.id === U.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    G.set(t.id, p(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return G.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e;
                    if (!G.has(t)) return !1;
                    let l = T.default.getChannel(t);
                    return null != l && G.set(t, p(l, n.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return G.delete(t)
                }
            })
        }
    }
]);