(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40751"], {
        820542: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                categoryCollapse: function() {
                    return l
                },
                categoryExpand: function() {
                    return a
                },
                categoryCollapseAll: function() {
                    return d
                },
                categoryExpandAll: function() {
                    return i
                }
            });
            var u = n("913144");

            function l(e) {
                u.default.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function a(e) {
                u.default.dispatch({
                    type: "CATEGORY_EXPAND",
                    id: e
                })
            }

            function d(e) {
                u.default.dispatch({
                    type: "CATEGORY_COLLAPSE_ALL",
                    guildId: e
                })
            }

            function i(e) {
                u.default.dispatch({
                    type: "CATEGORY_EXPAND_ALL",
                    guildId: e
                })
            }
        },
        542827: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("881410"), n("222007"), n("424973");
            var u = n("917351"),
                l = n.n(u),
                a = n("267363"),
                d = n("863636"),
                i = n("401690"),
                r = n("923959"),
                o = n("660478"),
                E = n("599110"),
                s = n("49111"),
                f = n("133335");

            function C(e, t) {
                let n = l.flatMap(e, e => {
                    let t = r.default.getSelectableChannelIds(e),
                        n = r.default.getVocalChannelIds(e),
                        u = [...t, ...n],
                        l = i.default.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        var a;
                        let t = null !== (a = l[e]) && void 0 !== a ? a : {};
                        for (let e in t) u.push(e)
                    }
                    return u
                }).map(e => ({
                    channelId: e,
                    readStateType: f.ReadStateTypes.CHANNEL,
                    messageId: o.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    n.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_EVENT,
                        messageId: o.default.lastMessageId(e, f.ReadStateTypes.GUILD_EVENT)
                    }), n.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: d.default.ackIdForGuild(e)
                    })
                }), E.default.track(s.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, a.bulkAck)(n)
            }
        },
        952451: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ef
                }
            }), n("222007"), n("702976"), n("808653");
            var u = n("917351"),
                l = n.n(u);
            n("249654"), n("21121"), n("136511");
            var a = n("512395"),
                d = n("401690"),
                i = n("755624"),
                r = n("526311"),
                o = n("233069"),
                E = n("271938"),
                s = n("42203"),
                f = n("957255"),
                C = n("660478"),
                _ = n("18494"),
                T = n("455079"),
                c = n("282109"),
                A = n("697218"),
                S = n("49111"),
                N = n("724210"),
                h = n("133335");
            let L = "null",
                I = {},
                g = new Set,
                p = 0;

            function y(e) {
                var t;
                let n = I[null != e ? e : L];
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

            function U(e) {
                var t;
                return I[null != e ? e : L] = null !== (t = I[null != e ? e : L]) && void 0 !== t ? t : y(e)
            }

            function G(e) {
                let t = U(e);
                t.sentinel++, p++
            }

            function D(e, t, n) {
                let u = e.guild_id;
                return null != u && n && !((0, o.isThread)(e.type) || c.default.isChannelRecordOrParentOptedIn(e)) && 0 === t
            }

            function R(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null == e || e.isGuildVocal() && 0 === t || e.hasFlag(N.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) return !1;
                if (0 === t || n) {
                    let t = e.isThread() ? i.default.isMuted(e.id) || c.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id) : c.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
                    if (t) return !1
                }
                return !(!e.isPrivate() && (D(e, t, (0, a.isOptInEnabledForGuild)(e.guild_id)) || !f.default.can(e.accessPermissions, e))) && (t > 0 || c.default.getChannelUnreadMode(e) === h.UnreadMode.IMPORTANT)
            }

            function M(e) {
                switch (e) {
                    case L:
                    case null:
                    case void 0:
                        return null;
                    default:
                        return e
                }
            }

            function O(e, t) {
                let n = C.default.hasUnread(e, t);
                if (t === h.ReadStateTypes.GUILD_EVENT) return !(c.default.isMuted(e) || c.default.isMuteScheduledEventsEnabled(e)) && n;
                return n
            }

            function H(e, t) {
                let n = y(e);
                return n.mentionCounts = {
                    ...t.mentionCounts
                }, n.unreadByType = {
                    ...t.unreadByType
                }, n
            }

            function m(e) {
                return e.unread = Object.values(e.unreadByType).some(e => e), e
            }

            function v(e, t) {}

            function P(e, t, n) {
                if (m(t), t.mentionCount = l(t.mentionCounts).values().sum(), t.unread !== n.unread || t.mentionCount !== n.mentionCount) return I[null != e ? e : L] = t, null != e && (t.unread ? g.add(e) : g.delete(e)), p++, G(null != e ? e : L), !0;
                return !1
            }

            function B(e, t) {
                let n = M(e),
                    u = U(n),
                    l = H(n, u),
                    a = !1;
                if (t.forEach(e => {
                        let t = s.default.getChannel(e);
                        if (null == t) {
                            delete l.mentionCounts[e];
                            return
                        }
                        if (t.getGuildId() !== n) return;
                        let u = C.default.getMentionCount(e);
                        null !== n && !a && C.default.hasUnread(t.id) && R(t, u, !0) && (a = !0, l.unreadChannelId = t.id), u > 0 && R(t, u) ? l.mentionCounts[t.id] = u : delete l.mentionCounts[t.id]
                    }), l.unreadByType[h.ReadStateTypes.CHANNEL] = a, l.unreadByType[h.ReadStateTypes.CHANNEL] !== u.unreadByType[h.ReadStateTypes.CHANNEL] && !l.unreadByType[h.ReadStateTypes.CHANNEL]) {
                    let e = s.default.getChannel(u.unreadChannelId);
                    if (!(null != e && !t.includes(e.id) && C.default.hasUnread(e.id) && R(e))) return F(n);
                    null != n && g.add(n), l.unreadByType[h.ReadStateTypes.CHANNEL] = !0
                }
                return P(n, l, u)
            }

            function V(e, t) {
                if (null == e) return;
                let n = U(e),
                    u = H(e, n);
                return u.unreadByType[h.ReadStateTypes.GUILD_EVENT] = O(e, t), P(e, u, n)
            }

            function F(e, t) {
                let n = M(e),
                    u = y(n);
                if (null == n) {
                    let e = s.default.getMutablePrivateChannels();
                    for (let t in e) {
                        let n = e[t],
                            l = C.default.getMentionCount(t);
                        l > 0 && R(n, l) && (u.mentionCount += l, u.mentionCounts[n.id] = l)
                    }
                } else {
                    let e = c.default.isMuted(n);
                    if (e && !1 === t) return !1;
                    let l = c.default.getMutedChannels(n),
                        r = c.default.getChannelOverrides(n),
                        E = (0, a.isOptInEnabledForGuild)(n),
                        _ = s.default.getMutableBasicGuildChannelsForGuild(n);
                    for (let t in _) {
                        let n = _[t],
                            a = e || l.has(t) || null != n.parent_id && l.has(n.parent_id),
                            d = u.unreadByType[h.ReadStateTypes.CHANNEL],
                            {
                                mentionCount: i,
                                unread: s
                            } = C.default.getGuildChannelUnreadState(n, E, r, a, d),
                            T = i > 0;
                        if (!T && a) continue;
                        let A = !d && (!a || T) && s;
                        if (A || T) {
                            let e = function(e, t, n) {
                                if ((0, o.isGuildVocalChannelType)(e.type) && 0 === t || !f.default.canBasicChannel((0, o.getBasicAccessPermissions)(e.type), e) || D(e, t, n)) return !1;
                                return !("flags" in e && e.hasFlag(N.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && (t > 0 || c.default.getChannelUnreadMode(e) === h.UnreadMode.IMPORTANT)
                            }(n, i, E);
                            e && (A && (u.unreadByType[h.ReadStateTypes.CHANNEL] = !0, u.unreadChannelId = t), T && (u.mentionCount += i, u.mentionCounts[n.id] = i))
                        }
                    }
                    let T = d.default.getActiveJoinedThreadsForGuild(n);
                    for (let t in T)
                        for (let n in T[t]) {
                            !u.unreadByType[h.ReadStateTypes.CHANNEL] && C.default.hasUnread(n) && !i.default.isMuted(n) && !e && (u.unreadByType[h.ReadStateTypes.CHANNEL] = !0, u.unreadChannelId = n);
                            let t = C.default.getMentionCount(n);
                            t > 0 && (u.mentionCount += t, u.mentionCounts[n] = t)
                        }!u.unreadByType[h.ReadStateTypes.GUILD_EVENT] && O(n, h.ReadStateTypes.GUILD_EVENT) && (u.unreadByType[h.ReadStateTypes.GUILD_EVENT] = !0)
                }
                m(u);
                let l = U(n);
                if (u.unread !== l.unread || u.mentionCount !== l.mentionCount) return I[null != n ? n : L] = u, null != n && (u.unread ? g.add(n) : g.delete(n)), p++, G(null != n ? n : L), !0;
                return !1
            }

            function b(e) {
                let {
                    guilds: t
                } = e;
                I = {}, p = 0, g = new Set, F(null);
                let {
                    length: n
                } = t;
                for (let e = 0; e < n; e++) {
                    let n = t[e];
                    null != n && F(n.id)
                }
            }

            function w(e) {
                let {
                    guilds: t,
                    readState: n
                } = e;
                I = {}, p = 0, g = new Set;
                let u = n.entries.length < 500,
                    l = new Set;
                for (let e of (u && n.entries.forEach(e => {
                        if (null != e.mention_count && e.mention_count > 0) {
                            if (null == e.read_state_type || e.read_state_type === h.ReadStateTypes.CHANNEL) {
                                var t;
                                l.add(null === (t = s.default.getChannel(e.id)) || void 0 === t ? void 0 : t.guild_id)
                            } else l.add(e.id)
                        }
                    }), F(null), t)) F(e.id, u ? l.has(e.id) : void 0)
            }

            function k(e) {
                let {
                    guild: t
                } = e;
                return F(t.id)
            }

            function K(e) {
                let {
                    guild: t
                } = e;
                return null != I[t.id] && (delete I[t.id], g.delete(t.id), p++, !0)
            }

            function Y(e) {
                let {
                    channel: {
                        id: t,
                        guild_id: n
                    }
                } = e;
                return B(n, [t])
            }

            function J() {
                let e = s.default.getChannel(_.default.getChannelId());
                return null != e && B(e.getGuildId(), [e.id])
            }

            function x(e) {
                let {
                    user: t,
                    guildId: n
                } = e;
                return t.id === E.default.getId() && F(n)
            }

            function j(e) {
                let {
                    channelId: t
                } = e, n = s.default.getChannel(t);
                return null != n && B(n.getGuildId(), [n.id])
            }

            function W(e) {
                let {
                    channelId: t
                } = e, n = s.default.getChannel(t);
                if (null == n) return !1;
                if (null != n.guild_id) {
                    let e = U(n.guild_id),
                        u = n.isThread() ? !i.default.hasJoined(n.id) || i.default.isMuted(n.id) : c.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id);
                    if ((u || e.unreadByType[h.ReadStateTypes.CHANNEL]) && 0 === C.default.getMentionCount(t)) return !1
                }
                return B(n.getGuildId(), [n.id])
            }

            function X(e) {
                let {
                    channelId: t,
                    guildId: n
                } = e;
                return n !== S.FAVORITES && null != t && B(n, [t])
            }

            function Z(e) {
                let {
                    channel: t
                } = e;
                return B(t.getGuildId(), [t.id])
            }

            function z(e) {
                let {
                    channels: t
                } = e;
                return l(t).groupBy(e => e.getGuildId()).reduce((e, t, n) => B(n, t.map(e => e.id)) || e, !1)
            }

            function Q(e) {
                let {
                    channels: t
                } = e;
                return l(t).map(e => {
                    let {
                        channelId: t
                    } = e;
                    return t
                }).filter(e => null != s.default.getChannel(e)).groupBy(e => {
                    var t;
                    return null === (t = s.default.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
                }).reduce((e, t, n) => B(n, t) || e, !1)
            }

            function q(e) {
                let {
                    channel: t
                } = e;
                return B(t.getGuildId(), [t.id, t.parent_id])
            }

            function $(e) {
                let {
                    guildScheduledEvent: t
                } = e;
                return V(t.guild_id, h.ReadStateTypes.GUILD_EVENT)
            }

            function ee(e) {
                let {
                    guildScheduledEvent: t
                } = e;
                return V(t.guild_id, h.ReadStateTypes.GUILD_EVENT)
            }

            function et(e) {
                let {
                    id: t,
                    ackType: n
                } = e;
                return V(t, n)
            }

            function en(e) {
                let {
                    id: t,
                    guildId: n
                } = e;
                return B(n, [t])
            }

            function eu(e) {
                return (0, r.doesThreadMembersActionAffectMe)(e) && B(e.guildId, [e.id])
            }

            function el(e) {
                let {
                    threads: t,
                    guildId: n
                } = e;
                return B(n, t.filter(e => i.default.hasJoined(e.id)).map(e => e.id))
            }

            function ea(e) {
                return null != e.channels && B(e.guildId, e.channels.map(e => e.id))
            }

            function ed(e) {
                let {
                    guildId: t
                } = e;
                return F(t)
            }

            function ei(e) {
                let {
                    guildId: t
                } = e;
                return F(t)
            }

            function er(e) {
                let {
                    userGuildSettings: t
                } = e, n = new Set(t.map(e => {
                    var t;
                    return null !== (t = e.guild_id) && void 0 !== t ? t : L
                }));
                return Object.keys(I).reduce((e, t) => n.has(t) && F(t) || e, !1)
            }

            function eo() {
                for (let e in I) {
                    let t = I[e];
                    t.ncMentionCount = 0
                }
            }

            function eE(e) {
                let {
                    guildId: t
                } = e;
                return F(t)
            }
            class es extends T.default {
                takeSnapshot() {
                    return {
                        version: es.LATEST_SNAPSHOT_VERSION,
                        data: {
                            guilds: I,
                            unreadGuilds: Array.from(g)
                        }
                    }
                }
                hasAnyUnread() {
                    return g.size > 0
                }
                getStoreChangeSentinel() {
                    return p
                }
                getMutableUnreadGuilds() {
                    return g
                }
                getMutableGuildStates() {
                    return I
                }
                hasUnread(e) {
                    return g.has(e)
                }
                getMentionCount(e) {
                    return U(e).mentionCount
                }
                getMutableGuildReadState(e) {
                    return U(e)
                }
                getGuildHasUnreadIgnoreMuted(e) {
                    let t = s.default.getMutableGuildChannelsForGuild(e);
                    for (let e in t) {
                        let n = t[e];
                        if (null != n) {
                            if ((!n.isGuildVocal() || 0 !== C.default.getMentionCount(e)) && f.default.can(n.accessPermissions, n) && C.default.hasUnread(e)) return !0
                        }
                    }
                    let n = d.default.getActiveJoinedThreadsForGuild(e);
                    for (let e in n) {
                        let t = s.default.getChannel(e);
                        if (null != t && R(t)) {
                            for (let t in n[e])
                                if (C.default.hasUnread(t)) return !0
                        }
                    }
                    return !!C.default.hasUnread(e, h.ReadStateTypes.GUILD_EVENT) || !1
                }
                getTotalMentionCount(e) {
                    let t = 0;
                    for (let n in I) {
                        let u = I[n];
                        (!0 !== e || n !== L) && (t += u.mentionCount)
                    }
                    return t
                }
                getTotalNotificationsMentionCount(e) {
                    let t = 0;
                    for (let n in I) {
                        let u = I[n];
                        (!0 !== e || n !== L) && (t += u.ncMentionCount)
                    }
                    return t
                }
                getPrivateChannelMentionCount() {
                    var e;
                    let t = I[L];
                    return null !== (e = null == t ? void 0 : t.mentionCount) && void 0 !== e ? e : 0
                }
                getMentionCountForChannels(e, t) {
                    let n = 0,
                        u = I[e];
                    return null == u ? 0 : (t.forEach(e => {
                        let t = u.mentionCounts[e];
                        n += null != t ? t : 0
                    }), n)
                }
                getGuildChangeSentinel(e) {
                    return U(e).sentinel
                }
                constructor() {
                    super(), this.loadCache = () => {
                        let e = this.readSnapshot(es.LATEST_SNAPSHOT_VERSION);
                        null != e && (I = e.guilds, g = new Set(e.unreadGuilds))
                    }, this.registerActionHandlers({
                        CONNECTION_OPEN: w,
                        OVERLAY_INITIALIZE: b,
                        CACHE_LOADED_LAZY: this.loadCache,
                        GUILD_CREATE: k,
                        GUILD_DELETE: K,
                        MESSAGE_CREATE: W,
                        MESSAGE_ACK: j,
                        BULK_ACK: Q,
                        UPDATE_CHANNEL_DIMENSIONS: j,
                        CHANNEL_SELECT: X,
                        CHANNEL_DELETE: Y,
                        WINDOW_FOCUS: J,
                        GUILD_ACK: ed,
                        GUILD_ROLE_CREATE: ei,
                        GUILD_ROLE_DELETE: ei,
                        GUILD_ROLE_UPDATE: ei,
                        CHANNEL_CREATE: Z,
                        CHANNEL_UPDATES: z,
                        THREAD_CREATE: q,
                        THREAD_UPDATE: q,
                        THREAD_DELETE: q,
                        THREAD_LIST_SYNC: el,
                        THREAD_MEMBER_UPDATE: en,
                        THREAD_MEMBERS_UPDATE: eu,
                        PASSIVE_UPDATE_V1: ea,
                        GUILD_MEMBER_UPDATE: x,
                        USER_GUILD_SETTINGS_FULL_UPDATE: er,
                        USER_GUILD_SETTINGS_CHANNEL_UPDATE: eE,
                        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: eE,
                        USER_GUILD_SETTINGS_GUILD_UPDATE: eE,
                        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: eE,
                        GUILD_FEATURE_ACK: et,
                        GUILD_SCHEDULED_EVENT_CREATE: $,
                        GUILD_SCHEDULED_EVENT_UPDATE: $,
                        GUILD_SCHEDULED_EVENT_DELETE: ee,
                        CHANNEL_RTC_UPDATE_CHAT_OPEN: j,
                        LOAD_MESSAGES_SUCCESS: j,
                        CHANNEL_ACK: j,
                        CHANNEL_LOCAL_ACK: j,
                        VOICE_CHANNEL_SELECT: j,
                        ENABLE_AUTOMATIC_ACK: j,
                        RESORT_THREADS: j,
                        NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: eo
                    }), this.waitFor(s.default, _.default, C.default, f.default, E.default, A.default, c.default, d.default, i.default)
                }
            }
            es.displayName = "GuildReadStateStore", es.LATEST_SNAPSHOT_VERSION = 1;
            var ef = new es
        }
    }
]);