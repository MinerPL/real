            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eT
                }
            }), n("222007"), n("702976"), n("808653");
            var u = n("917351"),
                l = n.n(u);
            n("249654"), n("21121"), n("136511");
            var d = n("512395"),
                a = n("401690"),
                i = n("755624"),
                r = n("526311"),
                o = n("233069"),
                E = n("271938"),
                s = n("42203"),
                f = n("305961"),
                C = n("957255"),
                T = n("660478"),
                _ = n("18494"),
                c = n("455079"),
                A = n("282109"),
                S = n("697218"),
                N = n("49111"),
                I = n("724210"),
                h = n("133335");
            let L = "null",
                g = {},
                p = new Set,
                y = 0;

            function U(e) {
                var t;
                let n = g[null != e ? e : L];
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

            function G(e) {
                var t;
                return g[null != e ? e : L] = null !== (t = g[null != e ? e : L]) && void 0 !== t ? t : U(e)
            }

            function D(e) {
                let t = G(e);
                t.sentinel++, y++
            }

            function R(e, t, n) {
                let u = e.guild_id;
                return null != u && n && !((0, o.isThread)(e.type) || A.default.isChannelRecordOrParentOptedIn(e)) && 0 === t
            }

            function O(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null == e || e.isGuildVocal() && 0 === t || e.hasFlag(I.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) return !1;
                if (0 === t || n) {
                    let t = e.isThread() ? i.default.isMuted(e.id) || A.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id) : A.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
                    if (t) return !1
                }
                return !(!e.isPrivate() && (R(e, t, (0, d.isOptInEnabledForGuild)(e.guild_id)) || !C.default.can(e.accessPermissions, e))) && (t > 0 || A.default.getChannelUnreadMode(e) === h.UnreadMode.IMPORTANT)
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

            function H(e, t) {
                let n = T.default.hasUnread(e, t);
                if (t === h.ReadStateTypes.GUILD_EVENT) return !(A.default.isMuted(e) || A.default.isMuteScheduledEventsEnabled(e)) && n;
                return n
            }

            function m(e, t) {
                let n = U(e);
                return n.mentionCounts = {
                    ...t.mentionCounts
                }, n.unreadByType = {
                    ...t.unreadByType
                }, n
            }

            function v(e) {
                return e.unread = Object.values(e.unreadByType).some(e => e), e
            }

            function P(e, t) {}

            function B(e, t, n) {
                if (v(t), t.mentionCount = l(t.mentionCounts).values().sum(), t.unread !== n.unread || t.mentionCount !== n.mentionCount) return g[null != e ? e : L] = t, null != e && (t.unread ? p.add(e) : p.delete(e)), y++, D(null != e ? e : L), !0;
                return !1
            }

            function V(e, t) {
                let n = M(e),
                    u = G(n),
                    l = m(n, u),
                    d = !1;
                if (t.forEach(e => {
                        let t = s.default.getChannel(e);
                        if (null == t) {
                            delete l.mentionCounts[e];
                            return
                        }
                        if (t.getGuildId() !== n) return;
                        let u = T.default.getMentionCount(e);
                        null !== n && !d && T.default.hasUnread(t.id) && O(t, u, !0) && (d = !0, l.unreadChannelId = t.id), u > 0 && O(t, u) ? l.mentionCounts[t.id] = u : delete l.mentionCounts[t.id]
                    }), l.unreadByType[h.ReadStateTypes.CHANNEL] = d, l.unreadByType[h.ReadStateTypes.CHANNEL] !== u.unreadByType[h.ReadStateTypes.CHANNEL] && !l.unreadByType[h.ReadStateTypes.CHANNEL]) {
                    let e = s.default.getChannel(u.unreadChannelId);
                    if (!(null != e && !t.includes(e.id) && T.default.hasUnread(e.id) && O(e))) return b(n);
                    null != n && p.add(n), l.unreadByType[h.ReadStateTypes.CHANNEL] = !0
                }
                return B(n, l, u)
            }

            function F(e, t) {
                if (null == e) return;
                let n = G(e),
                    u = m(e, n);
                return u.unreadByType[h.ReadStateTypes.GUILD_EVENT] = H(e, t), B(e, u, n)
            }

            function b(e, t) {
                let n = M(e),
                    u = U(n);
                if (null == n) {
                    let e = s.default.getMutablePrivateChannels();
                    for (let t in e) {
                        let n = e[t],
                            l = T.default.getMentionCount(t);
                        l > 0 && O(n, l) && (u.mentionCount += l, u.mentionCounts[n.id] = l)
                    }
                } else {
                    let e = A.default.isMuted(n);
                    if (e && !1 === t) return !1;
                    let l = A.default.getMutedChannels(n),
                        r = A.default.getChannelOverrides(n),
                        E = (0, d.isOptInEnabledForGuild)(n),
                        f = s.default.getMutableBasicGuildChannelsForGuild(n);
                    for (let t in f) {
                        let n = f[t],
                            d = e || l.has(t) || null != n.parent_id && l.has(n.parent_id),
                            a = u.unreadByType[h.ReadStateTypes.CHANNEL],
                            {
                                mentionCount: i,
                                unread: s
                            } = T.default.getGuildChannelUnreadState(n, E, r, d, a),
                            _ = i > 0;
                        if (!_ && d) continue;
                        let c = !a && (!d || _) && s;
                        if (c || _) {
                            let e = function(e, t, n) {
                                if ((0, o.isGuildVocalChannelType)(e.type) && 0 === t || !C.default.canBasicChannel((0, o.getBasicAccessPermissions)(e.type), e) || R(e, t, n)) return !1;
                                return !("flags" in e && e.hasFlag(I.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && (t > 0 || A.default.getChannelUnreadMode(e) === h.UnreadMode.IMPORTANT)
                            }(n, i, E);
                            e && (c && (u.unreadByType[h.ReadStateTypes.CHANNEL] = !0, u.unreadChannelId = t), _ && (u.mentionCount += i, u.mentionCounts[n.id] = i))
                        }
                    }
                    let _ = a.default.getActiveJoinedThreadsForGuild(n);
                    for (let t in _)
                        for (let n in _[t]) {
                            !u.unreadByType[h.ReadStateTypes.CHANNEL] && T.default.hasUnread(n) && !i.default.isMuted(n) && !e && (u.unreadByType[h.ReadStateTypes.CHANNEL] = !0, u.unreadChannelId = n);
                            let t = T.default.getMentionCount(n);
                            t > 0 && (u.mentionCount += t, u.mentionCounts[n] = t)
                        }!u.unreadByType[h.ReadStateTypes.GUILD_EVENT] && H(n, h.ReadStateTypes.GUILD_EVENT) && (u.unreadByType[h.ReadStateTypes.GUILD_EVENT] = !0)
                }
                v(u);
                let l = G(n);
                if (u.unread !== l.unread || u.mentionCount !== l.mentionCount) return g[null != n ? n : L] = u, null != n && (u.unread ? p.add(n) : p.delete(n)), y++, D(null != n ? n : L), !0;
                return !1
            }

            function w(e) {
                let {
                    guilds: t
                } = e;
                g = {}, y = 0, p = new Set, b(null);
                let {
                    length: n
                } = t;
                for (let e = 0; e < n; e++) {
                    let n = t[e];
                    null != n && b(n.id)
                }
            }

            function k(e) {
                let {
                    guilds: t,
                    readState: n
                } = e;
                g = {}, y = 0, p = new Set;
                let u = n.entries.length < 500,
                    l = new Set;
                for (let e of (u && n.entries.forEach(e => {
                        if (null != e.mention_count && e.mention_count > 0) {
                            if (null == e.read_state_type || e.read_state_type === h.ReadStateTypes.CHANNEL) {
                                var t;
                                l.add(null === (t = s.default.getChannel(e.id)) || void 0 === t ? void 0 : t.guild_id)
                            } else l.add(e.id)
                        }
                    }), b(null), t)) b(e.id, u ? l.has(e.id) : void 0)
            }

            function K() {
                g = {}, p = new Set, b(null);
                let e = Object.values(f.default.getGuildIds());
                for (let t of e) b(t)
            }

            function Y(e) {
                let {
                    guild: t
                } = e;
                return b(t.id)
            }

            function J(e) {
                let {
                    guild: t
                } = e;
                return null != g[t.id] && (delete g[t.id], p.delete(t.id), y++, !0)
            }

            function j(e) {
                let {
                    channel: {
                        id: t,
                        guild_id: n
                    }
                } = e;
                return V(n, [t])
            }

            function x() {
                let e = s.default.getChannel(_.default.getChannelId());
                return null != e && V(e.getGuildId(), [e.id])
            }

            function W(e) {
                let {
                    user: t,
                    guildId: n
                } = e;
                return t.id === E.default.getId() && b(n)
            }

            function X(e) {
                let {
                    channelId: t
                } = e, n = s.default.getChannel(t);
                return null != n && V(n.getGuildId(), [n.id])
            }

            function Z(e) {
                let {
                    channelId: t
                } = e, n = s.default.getChannel(t);
                if (null == n) return !1;
                if (null != n.guild_id) {
                    let e = G(n.guild_id),
                        u = n.isThread() ? !i.default.hasJoined(n.id) || i.default.isMuted(n.id) : A.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id);
                    if ((u || e.unreadByType[h.ReadStateTypes.CHANNEL]) && 0 === T.default.getMentionCount(t)) return !1
                }
                return V(n.getGuildId(), [n.id])
            }

            function z(e) {
                let {
                    channelId: t,
                    guildId: n
                } = e;
                return n !== N.FAVORITES && null != t && V(n, [t])
            }

            function Q(e) {
                let {
                    channel: t
                } = e;
                return V(t.getGuildId(), [t.id])
            }

            function q(e) {
                let {
                    channels: t
                } = e;
                return l(t).groupBy(e => e.getGuildId()).reduce((e, t, n) => V(n, t.map(e => e.id)) || e, !1)
            }

            function $(e) {
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
                }).reduce((e, t, n) => V(n, t) || e, !1)
            }

            function ee(e) {
                let {
                    channel: t
                } = e;
                return V(t.getGuildId(), [t.id, t.parent_id])
            }

            function et(e) {
                let {
                    guildScheduledEvent: t
                } = e;
                return F(t.guild_id, h.ReadStateTypes.GUILD_EVENT)
            }

            function en(e) {
                let {
                    guildScheduledEvent: t
                } = e;
                return F(t.guild_id, h.ReadStateTypes.GUILD_EVENT)
            }

            function eu(e) {
                let {
                    id: t,
                    ackType: n
                } = e;
                return F(t, n)
            }

            function el(e) {
                let {
                    id: t,
                    guildId: n
                } = e;
                return V(n, [t])
            }

            function ed(e) {
                return (0, r.doesThreadMembersActionAffectMe)(e) && V(e.guildId, [e.id])
            }

            function ea(e) {
                let {
                    threads: t,
                    guildId: n
                } = e;
                return V(n, t.filter(e => i.default.hasJoined(e.id)).map(e => e.id))
            }

            function ei(e) {
                return null != e.channels && V(e.guildId, e.channels.map(e => e.id))
            }

            function er(e) {
                let {
                    guildId: t
                } = e;
                return b(t)
            }

            function eo(e) {
                let {
                    guildId: t
                } = e;
                return b(t)
            }

            function eE(e) {
                let {
                    userGuildSettings: t
                } = e, n = new Set(t.map(e => {
                    var t;
                    return null !== (t = e.guild_id) && void 0 !== t ? t : L
                }));
                return Object.keys(g).reduce((e, t) => n.has(t) && b(t) || e, !1)
            }

            function es() {
                for (let e in g) {
                    let t = g[e];
                    t.ncMentionCount = 0
                }
            }

            function ef(e) {
                let {
                    guildId: t
                } = e;
                return b(t)
            }
            class eC extends c.default {
                takeSnapshot() {
                    return {
                        version: eC.LATEST_SNAPSHOT_VERSION,
                        data: {
                            guilds: g,
                            unreadGuilds: Array.from(p)
                        }
                    }
                }
                hasAnyUnread() {
                    return p.size > 0
                }
                getStoreChangeSentinel() {
                    return y
                }
                getMutableUnreadGuilds() {
                    return p
                }
                getMutableGuildStates() {
                    return g
                }
                hasUnread(e) {
                    return p.has(e)
                }
                getMentionCount(e) {
                    return G(e).mentionCount
                }
                getMutableGuildReadState(e) {
                    return G(e)
                }
                getGuildHasUnreadIgnoreMuted(e) {
                    let t = s.default.getMutableGuildChannelsForGuild(e);
                    for (let e in t) {
                        let n = t[e];
                        if (null != n) {
                            if ((!n.isGuildVocal() || 0 !== T.default.getMentionCount(e)) && C.default.can(n.accessPermissions, n) && T.default.hasUnread(e)) return !0
                        }
                    }
                    let n = a.default.getActiveJoinedThreadsForGuild(e);
                    for (let e in n) {
                        let t = s.default.getChannel(e);
                        if (null != t && O(t)) {
                            for (let t in n[e])
                                if (T.default.hasUnread(t)) return !0
                        }
                    }
                    return !!T.default.hasUnread(e, h.ReadStateTypes.GUILD_EVENT) || !1
                }
                getTotalMentionCount(e) {
                    let t = 0;
                    for (let n in g) {
                        let u = g[n];
                        (!0 !== e || n !== L) && (t += u.mentionCount)
                    }
                    return t
                }
                getTotalNotificationsMentionCount(e) {
                    let t = 0;
                    for (let n in g) {
                        let u = g[n];
                        (!0 !== e || n !== L) && (t += u.ncMentionCount)
                    }
                    return t
                }
                getPrivateChannelMentionCount() {
                    var e;
                    let t = g[L];
                    return null !== (e = null == t ? void 0 : t.mentionCount) && void 0 !== e ? e : 0
                }
                getMentionCountForChannels(e, t) {
                    let n = 0,
                        u = g[e];
                    return null == u ? 0 : (t.forEach(e => {
                        let t = u.mentionCounts[e];
                        n += null != t ? t : 0
                    }), n)
                }
                getGuildChangeSentinel(e) {
                    return G(e).sentinel
                }
                constructor() {
                    super(), this.loadCache = () => {
                        let e = this.readSnapshot(eC.LATEST_SNAPSHOT_VERSION);
                        null != e && (g = e.guilds, p = new Set(e.unreadGuilds))
                    }, this.registerActionHandlers({
                        CONNECTION_OPEN: k,
                        OVERLAY_INITIALIZE: w,
                        CACHE_LOADED_LAZY: this.loadCache,
                        GUILD_CREATE: Y,
                        GUILD_DELETE: J,
                        MESSAGE_CREATE: Z,
                        MESSAGE_ACK: X,
                        BULK_ACK: $,
                        UPDATE_CHANNEL_DIMENSIONS: X,
                        CHANNEL_SELECT: z,
                        CHANNEL_DELETE: j,
                        WINDOW_FOCUS: x,
                        GUILD_ACK: er,
                        GUILD_ROLE_CREATE: eo,
                        GUILD_ROLE_DELETE: eo,
                        GUILD_ROLE_UPDATE: eo,
                        CHANNEL_CREATE: Q,
                        CHANNEL_UPDATES: q,
                        THREAD_CREATE: ee,
                        THREAD_UPDATE: ee,
                        THREAD_DELETE: ee,
                        THREAD_LIST_SYNC: ea,
                        THREAD_MEMBER_UPDATE: el,
                        THREAD_MEMBERS_UPDATE: ed,
                        PASSIVE_UPDATE_V1: ei,
                        GUILD_MEMBER_UPDATE: W,
                        USER_GUILD_SETTINGS_FULL_UPDATE: eE,
                        USER_GUILD_SETTINGS_CHANNEL_UPDATE: ef,
                        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: ef,
                        USER_GUILD_SETTINGS_GUILD_UPDATE: ef,
                        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: ef,
                        GUILD_FEATURE_ACK: eu,
                        GUILD_SCHEDULED_EVENT_CREATE: et,
                        GUILD_SCHEDULED_EVENT_UPDATE: et,
                        GUILD_SCHEDULED_EVENT_DELETE: en,
                        CHANNEL_RTC_UPDATE_CHAT_OPEN: X,
                        LOAD_MESSAGES_SUCCESS: X,
                        CHANNEL_ACK: X,
                        CHANNEL_LOCAL_ACK: X,
                        NOTIFICATION_SETTINGS_UPDATE: K,
                        RECOMPUTE_READ_STATES: K,
                        VOICE_CHANNEL_SELECT: X,
                        ENABLE_AUTOMATIC_ACK: X,
                        RESORT_THREADS: X,
                        NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: es
                    }), this.waitFor(s.default, _.default, T.default, C.default, E.default, S.default, A.default, a.default, i.default)
                }
            }
            eC.displayName = "GuildReadStateStore", eC.LATEST_SNAPSHOT_VERSION = 1;
            var eT = new eC