(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40751"], {
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
            var l = n("427964"),
                a = n.n(l),
                u = n("267363"),
                i = n("863636"),
                d = n("401690"),
                r = n("923959"),
                s = n("660478"),
                o = n("599110"),
                f = n("49111"),
                E = n("133335");

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
                    readStateType: E.ReadStateTypes.CHANNEL,
                    messageId: s.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    n.push({
                        channelId: e,
                        readStateType: E.ReadStateTypes.GUILD_EVENT,
                        messageId: s.default.lastMessageId(e, E.ReadStateTypes.GUILD_EVENT)
                    }), n.push({
                        channelId: e,
                        readStateType: E.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: i.default.ackIdForGuild(e)
                    })
                }), o.default.track(f.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, u.bulkAck)(n)
            }
        },
        62948: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var l = n("498225"),
                a = n("173333"),
                u = n("913144"),
                i = n("679428"),
                d = n("525065"),
                r = n("305961"),
                s = n("282109"),
                o = n("568734"),
                f = n("483226"),
                E = n("44574"),
                S = n("49111"),
                c = n("397336");
            let g = "guildUnreadsEnabledStorageKey",
                C = "guildUnreadsLastClearedStorageKey",
                _ = {
                    guildUnreadsLastCleared: {}
                },
                T = _;
            class N extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(d.default), T = null != e ? e : _, ! function() {
                        var e, t, n;
                        a.default.remove("guildUnreadsOverridesStorageKey");
                        let l = null !== (e = T.guildUnreadsEnabled) && void 0 !== e ? e : {},
                            u = null !== (t = a.default.get(g)) && void 0 !== t ? t : new Set;
                        u.size > 0 && u.forEach(e => {
                            l[e] = !0
                        }), a.default.remove(g), T.guildUnreadsLastCleared = null !== (n = a.default.get(C)) && void 0 !== n ? n : {}, a.default.remove(C);
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
            N.displayName = "GuildUnreadSettingsStore", N.persistKey = "GuildUnreadSettingsStore";
            var A = new N(u.default, {
                CONNECTION_OPEN: function() {
                    let e = (0, E.isGuildUnreadsExperimentEnabled)();
                    if (!e) return;
                    let t = r.default.getGuilds(),
                        n = d.default.getMemberCounts();
                    Object.values(t).map(e => {
                        let t = s.default.getGuildFlags(e.id),
                            l = (0, o.hasFlag)(t, c.GuildNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS),
                            a = (0, o.hasFlag)(t, c.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES);
                        if (!e.hasFeature(S.GuildFeatures.COMMUNITY) && n[e.id] < 200) {
                            l && (0, f.setGuildUnreadSetting)(e.id, !1);
                            return
                        }
                        if (l || a) return;
                        let u = s.default.getMessageNotifications(e.id);
                        (u !== S.UserNotificationSettings.ALL_MESSAGES || e.defaultMessageNotifications === S.UserNotificationSettings.ALL_MESSAGES) && (0, f.setGuildUnreadSetting)(e.id, !0)
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
                    return f
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

            function f(e) {
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
                    return E
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
            let f = 108e5;

            function E(e) {
                let t = d.default.getCurrentUser(),
                    n = (0, s.isGuildUnreadsExperimentEnabled)(),
                    E = i.default.isGuildUnreadSettingEnabled(e),
                    S = r.default.getGuildUnreadsLastCleared(e),
                    c = a.default.getLastFetchedMillis(e),
                    g = Date.now(),
                    C = (0, u.isChannelHighlightsEnabledForGuild)(e),
                    _ = i.default.getNotifyHighlights(e),
                    T = _ === o.HighlightSettings.ENABLED || _ === o.HighlightSettings.NULL;
                return !!n && !!E && !!C && !!T && ((null == t ? void 0 : t.isStaff()) ? ((null == c || null != c && g - c > 36e5) && l.default.maybeLoadFeedForGuild(e), !1) : null == c || g - c > f && g - S > f)
            }
        },
        952451: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eA
                }
            });
            var l = n("427964"),
                a = n.n(l),
                u = n("500947"),
                i = n("483226"),
                d = n("44574"),
                r = n("488107");
            n("21121");
            var s = n("136511"),
                o = n("514933"),
                f = n("512395"),
                E = n("208127"),
                S = n("401690"),
                c = n("755624"),
                g = n("526311"),
                C = n("233069"),
                _ = n("271938"),
                T = n("42203"),
                N = n("957255"),
                A = n("660478"),
                L = n("18494"),
                G = n("455079"),
                U = n("282109"),
                h = n("697218"),
                I = n("49111"),
                p = n("724210"),
                y = n("133335");
            let D = "null",
                R = {},
                M = new Set,
                O = 0;

            function H(e) {
                var t;
                let n = R[null != e ? e : D];
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

            function m(e) {
                var t;
                return R[null != e ? e : D] = null !== (t = R[null != e ? e : D]) && void 0 !== t ? t : H(e)
            }

            function v(e) {
                let t = m(e);
                t.sentinel++, O++
            }

            function F(e, t, n) {
                let l = e.guild_id;
                return null != l && n && !((0, C.isThread)(e.type) || U.default.isChannelRecordOrParentOptedIn(e)) && 0 === t
            }

            function b(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (null == e || e.isGuildVocal() && 0 === t || e.hasFlag(p.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) return !1;
                if (0 === t) {
                    let t = e.isThread() ? c.default.isMuted(e.id) : U.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
                    if (t) return !1
                }
                return !(!e.isPrivate() && (F(e, t, (0, f.isOptInEnabledForGuild)(e.guild_id)) || !N.default.can(e.accessPermissions, e))) && (t > 0 || U.default.isChannelRelevant(e))
            }

            function P(e) {
                switch (e) {
                    case D:
                    case null:
                    case void 0:
                        return null;
                    default:
                        return e
                }
            }

            function B(e, t) {
                let n = e.guild_id,
                    l = e.id;
                return !(U.default.isGuildOrCategoryOrChannelMuted(n, l) || F(e, A.default.getMentionCount(l), t)) && A.default.hasNotableUnread(e.id)
            }

            function V(e, t) {
                let n = A.default.hasUnread(e, t);
                if (t === y.ReadStateTypes.GUILD_EVENT) return !(U.default.isMuted(e) || U.default.isMuteScheduledEventsEnabled(e)) && n;
                return n
            }

            function w(e, t) {
                let n = H(e);
                return n.mentionCounts = {
                    ...t.mentionCounts
                }, n.unreadByType = {
                    ...t.unreadByType
                }, n
            }

            function k(e) {
                return e.unread = Object.values(e.unreadByType).some(e => e), e
            }

            function K(e, t) {
                var n;
                if (!(0, o.isNotificationRedesignV2Enabled)() || s.default.tabFocused) return;
                let l = x(e),
                    a = x(t);
                e.ncMentionCount = Math.max((null !== (n = null == t ? void 0 : t.ncMentionCount) && void 0 !== n ? n : 0) + (l - a), 0)
            }

            function x(e) {
                let t = 0,
                    n = function() {
                        let e = h.default.getCurrentUser();
                        return null == e ? null : A.default.getNotifCenterReadState(e.id)
                    }();
                return null == e || null == n ? t : (Object.keys(e.mentionCounts).forEach(l => {
                    let a = A.default.lastMessageId(l),
                        i = n._ackMessageId;
                    u.default.compare(a, i) > 0 && (t += e.mentionCounts[l])
                }), t)
            }

            function Y(e, t, n) {
                return k(t), t.mentionCount = a(t.mentionCounts).values().sum(), (t.unread !== n.unread || t.mentionCount !== n.mentionCount) && (R[null != e ? e : D] = t, null != e && (t.unread ? M.add(e) : M.delete(e)), O++, v(null != e ? e : D), K(t, n), !0)
            }

            function j(e, t) {
                let n = P(e),
                    l = m(n),
                    a = w(n, l),
                    u = (0, f.isOptInEnabledForGuild)(n),
                    i = !1;
                if (t.forEach(e => {
                        let t = T.default.getChannel(e);
                        if (null == t) {
                            delete a.mentionCounts[e];
                            return
                        }
                        if (t.getGuildId() !== n) return;
                        let l = A.default.getMentionCount(e);
                        null !== n && !i && B(t, u) && b(t, l) && (i = !0, a.unreadChannelId = t.id), l > 0 && b(t, l) ? a.mentionCounts[t.id] = l : delete a.mentionCounts[t.id]
                    }), a.unreadByType[y.ReadStateTypes.CHANNEL] = i, a.unreadByType[y.ReadStateTypes.CHANNEL] !== l.unreadByType[y.ReadStateTypes.CHANNEL] && !a.unreadByType[y.ReadStateTypes.CHANNEL]) {
                    let e = T.default.getChannel(l.unreadChannelId);
                    if (!(null != e && !t.includes(e.id) && B(e, u) && b(e))) return z(n);
                    null != n && M.add(n), a.unreadByType[y.ReadStateTypes.CHANNEL] = !0
                }
                return Y(n, a, l)
            }

            function J(e, t) {
                if (null == e) return;
                let n = m(e),
                    l = w(e, n);
                return l.unreadByType[y.ReadStateTypes.GUILD_EVENT] = V(e, t), Y(e, l, n)
            }

            function z(e, t) {
                let n = P(e),
                    l = H(n),
                    a = (0, E.isReadStateStaffExperimentEnabled)();
                if (null == n) {
                    let e = T.default.getMutablePrivateChannels();
                    for (let t in e) {
                        let n = e[t],
                            a = A.default.getMentionCount(t);
                        a > 0 && b(n, a) && (l.mentionCount += a, l.mentionCounts[n.id] = a)
                    }
                } else {
                    let e = U.default.isMuted(n);
                    if (e && !1 === t) return !1;
                    let u = U.default.getMutedChannels(n),
                        i = U.default.getChannelOverrides(n),
                        r = (0, f.isOptInEnabledForGuild)(n),
                        s = (0, d.isGuildUnreadsExperimentEnabled)(),
                        o = T.default.getMutableBasicGuildChannelsForGuild(n);
                    for (let t in o) {
                        let n = o[t],
                            d = e || u.has(t) || null != n.parent_id && u.has(n.parent_id),
                            f = l.unreadByType[y.ReadStateTypes.CHANNEL],
                            {
                                mentionCount: E,
                                hasNotableUnread: S
                            } = A.default.getGuildChannelUnreadState(n, r, s, i, d, f),
                            c = E > 0;
                        if (!c && d) continue;
                        let g = !f && (!d || c) && S;
                        if (g || c) {
                            let e = function(e, t, n, l) {
                                if ((0, C.isGuildVocalChannelType)(e.type) && 0 === t || !N.default.canBasicChannel((0, C.getBasicAccessPermissions)(e.type), e) || F(e, t, l)) return !1;
                                return !("flags" in e && e.hasFlag(p.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && (t > 0 || !n || (0, C.isThread)(e.type) || U.default.resolvedMessageNotifications(e) === I.UserNotificationSettings.ALL_MESSAGES)
                            }(n, E, a, r);
                            e && (g && (l.unreadByType[y.ReadStateTypes.CHANNEL] = !0, l.unreadChannelId = t), c && (l.mentionCount += E, l.mentionCounts[n.id] = E))
                        }
                    }
                    let E = S.default.getActiveJoinedThreadsForGuild(n);
                    for (let t in E)
                        for (let n in E[t]) {
                            !l.unreadByType[y.ReadStateTypes.CHANNEL] && A.default.hasNotableUnread(n) && !c.default.isMuted(n) && !e && (l.unreadByType[y.ReadStateTypes.CHANNEL] = !0, l.unreadChannelId = n);
                            let t = A.default.getMentionCount(n);
                            t > 0 && (l.mentionCount += t, l.mentionCounts[n] = t)
                        }!l.unreadByType[y.ReadStateTypes.GUILD_EVENT] && V(n, y.ReadStateTypes.GUILD_EVENT) && (l.unreadByType[y.ReadStateTypes.GUILD_EVENT] = !0)
                }
                k(l);
                let u = m(n);
                return (l.unread !== u.unread || l.mentionCount !== u.mentionCount) && (R[null != n ? n : D] = l, null != n && (l.unread ? M.add(n) : (M.delete(n), (0, i.setGuildUnreadsLastCleared)(n))), O++, v(null != n ? n : D), K(l, u), !0)
            }

            function W(e) {
                let {
                    guilds: t
                } = e;
                R = {}, O = 0, M = new Set, z(null);
                let {
                    length: n
                } = t;
                for (let e = 0; e < n; e++) {
                    let n = t[e];
                    null != n && z(n.id)
                }
            }

            function X(e) {
                let {
                    guilds: t,
                    readState: n
                } = e;
                R = {}, O = 0, M = new Set;
                let l = n.entries.length < 500,
                    a = new Set;
                for (let e of (l && n.entries.forEach(e => {
                        if (null != e.mention_count && e.mention_count > 0) {
                            if (null == e.read_state_type || e.read_state_type === y.ReadStateTypes.CHANNEL) {
                                var t;
                                a.add(null === (t = T.default.getChannel(e.id)) || void 0 === t ? void 0 : t.guild_id)
                            } else a.add(e.id)
                        }
                    }), z(null), t)) z(e.id, l ? a.has(e.id) : void 0)
            }

            function Z(e) {
                let {
                    guild: t
                } = e;
                return z(t.id)
            }

            function Q(e) {
                let {
                    guild: t
                } = e;
                return null != R[t.id] && (delete R[t.id], M.delete(t.id), O++, !0)
            }

            function q(e) {
                let {
                    channel: {
                        id: t,
                        guild_id: n
                    }
                } = e;
                return j(n, [t])
            }

            function $() {
                let e = T.default.getChannel(L.default.getChannelId());
                return null != e && j(e.getGuildId(), [e.id])
            }

            function ee(e) {
                let {
                    user: t,
                    guildId: n
                } = e;
                return t.id === _.default.getId() && z(n)
            }

            function et(e) {
                let {
                    channelId: t
                } = e, n = T.default.getChannel(t);
                return null != n && j(n.getGuildId(), [n.id])
            }

            function en(e) {
                let {
                    channelId: t
                } = e, n = T.default.getChannel(t);
                if (null == n) return !1;
                if (null != n.guild_id) {
                    let e = m(n.guild_id),
                        l = n.isThread() ? !c.default.hasJoined(n.id) || c.default.isMuted(n.id) : U.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id);
                    if ((l || e.unreadByType[y.ReadStateTypes.CHANNEL]) && 0 === A.default.getMentionCount(t)) return !1
                }
                return j(n.getGuildId(), [n.id])
            }

            function el(e) {
                let {
                    channelId: t,
                    guildId: n
                } = e;
                return n !== I.FAVORITES && null != t && j(n, [t])
            }

            function ea(e) {
                let {
                    channel: t
                } = e;
                return j(t.getGuildId(), [t.id])
            }

            function eu(e) {
                let {
                    channels: t
                } = e;
                return a(t).groupBy(e => e.getGuildId()).reduce((e, t, n) => j(n, t.map(e => e.id)) || e, !1)
            }

            function ei(e) {
                let {
                    channels: t
                } = e;
                return a(t).map(e => {
                    let {
                        channelId: t
                    } = e;
                    return t
                }).filter(e => null != T.default.getChannel(e)).groupBy(e => {
                    var t;
                    return null === (t = T.default.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
                }).reduce((e, t, n) => j(n, t) || e, !1)
            }

            function ed(e) {
                let {
                    channel: t
                } = e;
                return j(t.getGuildId(), [t.id, t.parent_id])
            }

            function er(e) {
                let {
                    guildScheduledEvent: t
                } = e;
                return J(t.guild_id, y.ReadStateTypes.GUILD_EVENT)
            }

            function es(e) {
                let {
                    id: t,
                    ackType: n
                } = e;
                return J(t, n)
            }

            function eo(e) {
                let {
                    id: t,
                    guildId: n
                } = e;
                return j(n, [t])
            }

            function ef(e) {
                return (0, g.doesThreadMembersActionAffectMe)(e) && j(e.guildId, [e.id])
            }

            function eE(e) {
                let {
                    threads: t,
                    guildId: n
                } = e;
                return j(n, t.filter(e => c.default.hasJoined(e.id)).map(e => e.id))
            }

            function eS(e) {
                return null != e.channels && j(e.guildId, e.channels.map(e => e.id))
            }

            function ec(e) {
                let {
                    guildId: t
                } = e;
                return z(t)
            }

            function eg(e) {
                let {
                    guildId: t
                } = e;
                return z(t)
            }

            function eC(e) {
                var t;
                let {
                    userGuildSettings: n
                } = e, l = new Set(n.map(e => null !== (t = e.guild_id) && void 0 !== t ? t : D));
                return Object.keys(R).reduce((e, t) => l.has(t) && z(t) || e, !1)
            }

            function e_() {
                for (let e in R) {
                    let t = R[e];
                    t.ncMentionCount = 0
                }
            }

            function eT(e) {
                let {
                    guildId: t
                } = e;
                return z(t)
            }
            class eN extends G.default {
                takeSnapshot() {
                    return {
                        version: eN.LATEST_SNAPSHOT_VERSION,
                        data: {
                            guilds: R,
                            unreadGuilds: Array.from(M)
                        }
                    }
                }
                hasAnyUnread() {
                    return M.size > 0
                }
                getStoreChangeSentinel() {
                    return O
                }
                getMutableUnreadGuilds() {
                    return M
                }
                getMutableGuildStates() {
                    return R
                }
                hasUnread(e) {
                    return M.has(e) || (0, r.maybeForceUnread)(e)
                }
                getMentionCount(e) {
                    return m(e).mentionCount
                }
                getMutableGuildReadState(e) {
                    return m(e)
                }
                getGuildHasUnreadIgnoreMuted(e) {
                    let t = T.default.getMutableGuildChannelsForGuild(e);
                    for (let e in t) {
                        let n = t[e];
                        if (null != n) {
                            if ((!n.isGuildVocal() || 0 !== A.default.getMentionCount(e)) && N.default.can(n.accessPermissions, n) && A.default.hasUnread(e)) return !0
                        }
                    }
                    let n = S.default.getActiveJoinedThreadsForGuild(e);
                    for (let e in n) {
                        let t = T.default.getChannel(e);
                        if (null != t && b(t)) {
                            for (let t in n[e])
                                if (A.default.hasUnread(t)) return !0
                        }
                    }
                    return !!A.default.hasUnread(e, y.ReadStateTypes.GUILD_EVENT) || !1
                }
                getTotalMentionCount(e) {
                    let t = 0;
                    for (let n in R) {
                        let l = R[n];
                        (!0 !== e || n !== D) && (t += l.mentionCount)
                    }
                    return t
                }
                getTotalNotificationsMentionCount(e) {
                    let t = 0;
                    for (let n in R) {
                        let l = R[n];
                        (!0 !== e || n !== D) && (t += l.ncMentionCount)
                    }
                    return t
                }
                getPrivateChannelMentionCount() {
                    var e;
                    let t = R[D];
                    return null !== (e = null == t ? void 0 : t.mentionCount) && void 0 !== e ? e : 0
                }
                getMentionCountForChannels(e, t) {
                    let n = 0,
                        l = R[e];
                    return null == l ? 0 : (t.forEach(e => {
                        let t = l.mentionCounts[e];
                        n += null != t ? t : 0
                    }), n)
                }
                getGuildChangeSentinel(e) {
                    return m(e).sentinel
                }
                constructor() {
                    super(), this.loadCache = () => {
                        let e = this.readSnapshot(eN.LATEST_SNAPSHOT_VERSION);
                        null != e && (R = e.guilds, M = new Set(e.unreadGuilds))
                    }, this.registerActionHandlers({
                        CONNECTION_OPEN: X,
                        OVERLAY_INITIALIZE: W,
                        CACHE_LOADED_LAZY: this.loadCache,
                        GUILD_CREATE: Z,
                        GUILD_DELETE: Q,
                        MESSAGE_CREATE: en,
                        MESSAGE_ACK: et,
                        BULK_ACK: ei,
                        UPDATE_CHANNEL_DIMENSIONS: et,
                        CHANNEL_SELECT: el,
                        CHANNEL_DELETE: q,
                        WINDOW_FOCUS: $,
                        GUILD_ACK: ec,
                        GUILD_ROLE_CREATE: eg,
                        GUILD_ROLE_DELETE: eg,
                        GUILD_ROLE_UPDATE: eg,
                        CHANNEL_CREATE: ea,
                        CHANNEL_UPDATES: eu,
                        THREAD_CREATE: ed,
                        THREAD_UPDATE: ed,
                        THREAD_DELETE: ed,
                        THREAD_LIST_SYNC: eE,
                        THREAD_MEMBER_UPDATE: eo,
                        THREAD_MEMBERS_UPDATE: ef,
                        PASSIVE_UPDATE_V1: eS,
                        GUILD_MEMBER_UPDATE: ee,
                        USER_GUILD_SETTINGS_FULL_UPDATE: eC,
                        USER_GUILD_SETTINGS_CHANNEL_UPDATE: eT,
                        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: eT,
                        USER_GUILD_SETTINGS_GUILD_UPDATE: eT,
                        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: eT,
                        GUILD_FEATURE_ACK: es,
                        GUILD_SCHEDULED_EVENT_CREATE: er,
                        GUILD_SCHEDULED_EVENT_UPDATE: er,
                        GUILD_SCHEDULED_EVENT_DELETE: er,
                        CHANNEL_RTC_UPDATE_CHAT_OPEN: et,
                        LOAD_MESSAGES_SUCCESS: et,
                        CHANNEL_ACK: et,
                        CHANNEL_LOCAL_ACK: et,
                        VOICE_CHANNEL_SELECT: et,
                        ENABLE_AUTOMATIC_ACK: et,
                        RESORT_THREADS: et,
                        NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: e_
                    }), this.waitFor(T.default, L.default, A.default, N.default, _.default, h.default, U.default, S.default, c.default)
                }
            }
            eN.displayName = "GuildReadStateStore", eN.LATEST_SNAPSHOT_VERSION = 1;
            var eA = new eN
        }
    }
]);