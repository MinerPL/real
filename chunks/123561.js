            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return W
                }
            }), n("222007");
            var i = n("917351"),
                o = n.n(i),
                l = n("446674"),
                a = n("913144"),
                u = n("191225"),
                d = n("848415"),
                s = n("203288"),
                r = n("398604"),
                E = n("401690"),
                _ = n("755624"),
                A = n("374363"),
                c = n("271938"),
                C = n("870691"),
                T = n("42203"),
                S = n("816092"),
                I = n("546463"),
                f = n("957255"),
                N = n("660478"),
                O = n("18494"),
                L = n("282109"),
                p = n("449008"),
                D = n("319839"),
                R = n("397336");
            let h = null,
                g = null,
                G = new D.default;

            function b() {
                let e = O.default.getChannelId(),
                    t = O.default.getVoiceChannelId();
                return h = e, g = t, G.clear()
            }

            function M(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                return G.clearGuildId(t)
            }

            function P(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                return G.clearGuildId(t)
            }

            function m(e) {
                let {
                    guildId: t
                } = e;
                return G.clearGuildId(t)
            }

            function U(e) {
                let {
                    channelId: t
                } = e;
                return G.nonPositionalChannelIdUpdate(t)
            }

            function y() {
                return null != h && G.nonPositionalChannelIdUpdate(h)
            }

            function K(e) {
                let {
                    channel: t
                } = e;
                return G.nonPositionalChannelIdUpdate(t.id)
            }

            function H(e) {
                let {
                    id: t
                } = e;
                return G.nonPositionalChannelIdUpdate(t)
            }

            function B() {
                let e = O.default.getChannelId(),
                    t = O.default.getVoiceChannelId(),
                    n = h !== e || g !== t;
                return !!n && (o([h, g, e, t]).uniq().forEach(e => {
                    null != e && G.nonPositionalChannelIdUpdate(e) && (n = !0)
                }), h = e, g = t, !0)
            }

            function v(e) {
                let {
                    id: t
                } = e, n = T.default.getChannel(t);
                return null == n ? G.clearGuildId(t) : G.clearGuildId(n.guild_id)
            }

            function V(e) {
                let {
                    guildId: t
                } = e;
                return G.clearGuildId(t)
            }

            function F() {
                return G.updateSubtitles()
            }

            function Y(e) {
                let {
                    guildScheduledEvent: t
                } = e;
                return G.updateSubtitles(t.guild_id)
            }
            class w extends l.default.Store {
                initialize() {
                    this.waitFor(E.default, c.default, C.default, T.default, S.default, u.default, I.default, s.default, r.default, _.default, f.default, N.default, O.default, L.default, A.default, d.default)
                }
                getGuild(e, t) {
                    let n = G.getGuild(e, t);
                    return {
                        guildChannelsVersion: n.version,
                        guildChannels: n
                    }
                }
                getGuildWithoutChangingCommunityRows(e) {
                    let t = G.getGuildWithoutCommunityRows(e);
                    return {
                        guildChannelsVersion: t.version,
                        guildChannels: t
                    }
                }
                recentsChannelCount(e) {
                    if (null == e) return 0;
                    let t = G.getGuildWithoutCommunityRows(e),
                        n = t.getCategoryFromSection(t.recentsSectionNumber);
                    return n.getShownChannelIds().length
                }
            }
            w.displayName = "ChannelListStore";
            var W = new w(a.default, {
                APPLICATION_FETCH_FAIL: F,
                APPLICATION_FETCH_SUCCESS: F,
                APPLICATION_FETCH: F,
                APPLICATIONS_FETCH_FAIL: F,
                APPLICATIONS_FETCH_SUCCESS: F,
                APPLICATIONS_FETCH: F,
                ASSISTANT_COMPLETE_ACTION: function(e) {
                    let {
                        kind: t,
                        targetId: n
                    } = e;
                    if ("openTextChannel" === t || "joinVoiceChannel" === t) {
                        let e = T.default.getChannel(n);
                        return null != e && G.clearGuildId(e.guild_id)
                    }
                    return ("splashScreen" === t || "joinVoiceChannelMultitask" === t) && G.clear()
                },
                ASSISTANT_DISMISS: b,
                ASSISTANT_REBUILD_ACTION_STACK: b,
                BACKGROUND_SYNC: b,
                BULK_ACK: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    return o(t).map(e => {
                        var t;
                        return null === (t = T.default.getChannel(e.channelId)) || void 0 === t ? void 0 : t.guild_id
                    }).filter(p.isNotNullish).uniq().forEach(e => {
                        G.clearGuildId(e) && (n = !0)
                    }), n
                },
                BULK_CLEAR_RECENTS: m,
                CACHE_LOADED_LAZY: b,
                CATEGORY_COLLAPSE_ALL: m,
                CATEGORY_COLLAPSE: v,
                CATEGORY_EXPAND_ALL: m,
                CATEGORY_EXPAND: v,
                CHANNEL_ACK: U,
                CHANNEL_COLLAPSE: function(e) {
                    var t;
                    let {
                        channelId: n
                    } = e;
                    return G.clearGuildId(null === (t = T.default.getChannel(n)) || void 0 === t ? void 0 : t.guild_id)
                },
                CHANNEL_CREATE: P,
                CHANNEL_DELETE: P,
                CHANNEL_LOCAL_ACK: U,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: U,
                CHANNEL_SELECT: B,
                CHANNEL_STATUSES: function(e) {
                    return G.clearGuildId(e.guildId)
                },
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    return o(t).map(e => e.guild_id).uniq().forEach(e => {
                        G.clearGuildId(e) && (n = !0)
                    }), n
                },
                CONNECTION_OPEN_SUPPLEMENTAL: F,
                CONNECTION_OPEN: b,
                CURRENT_USER_UPDATE: b,
                DECAY_READ_STATES: b,
                DEV_TOOLS_DESIGN_TOGGLE_SET: b,
                DISABLE_AUTOMATIC_ACK: U,
                DISMISS_FAVORITE_SUGGESTION: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return G.nonPositionalChannelIdUpdate(t)
                },
                DRAWER_CLOSE: y,
                DRAWER_OPEN: y,
                EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    return G.updateSubtitles(t, n)
                },
                EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
                    F()
                },
                EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: F,
                ENABLE_AUTOMATIC_ACK: U,
                FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return G.updateSubtitles(t)
                },
                GAMES_DATABASE_FETCH_FAIL: F,
                GAMES_DATABASE_FETCH: F,
                GAMES_DATABASE_UPDATE: F,
                GUILD_APPLICATIONS_FETCH_SUCCESS: F,
                GUILD_CREATE: M,
                GUILD_DELETE: M,
                GUILD_FEED_FETCH_SUCCESS: F,
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    return c.default.getId() === n.id && G.clearGuildId(t)
                },
                GUILD_ROLE_CREATE: m,
                GUILD_ROLE_DELETE: m,
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: m,
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: m,
                GUILD_ROLE_UPDATE: m,
                GUILD_SCHEDULED_EVENT_CREATE: Y,
                GUILD_SCHEDULED_EVENT_DELETE: Y,
                GUILD_SCHEDULED_EVENT_UPDATE: Y,
                GUILD_TOGGLE_COLLAPSE_MUTED: m,
                GUILD_UPDATE: M,
                IMPERSONATE_STOP: m,
                IMPERSONATE_UPDATE: m,
                LOAD_MESSAGES_SUCCESS: U,
                MESSAGE_ACK: U,
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return G.nonPositionalChannelIdUpdate(t)
                },
                MESSAGE_DELETE_BULK: U,
                MESSAGE_DELETE: U,
                NOTIFICATION_SETTINGS_UPDATE: b,
                OVERLAY_INITIALIZE: b,
                PASSIVE_UPDATE_V1: function(e) {
                    return null != e.channels && (G.clearGuildId(e.guildId), !0)
                },
                RECOMPUTE_READ_STATES: b,
                RESORT_THREADS: U,
                SET_RECENTLY_ACTIVE_COLLAPSED: b,
                THREAD_CREATE: K,
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return G.nonPositionalChannelUpdate(t)
                },
                THREAD_LIST_SYNC: m,
                THREAD_MEMBER_UPDATE: H,
                THREAD_MEMBERS_UPDATE: H,
                THREAD_UPDATE: K,
                UPDATE_CHANNEL_DIMENSIONS: U,
                UPDATE_CHANNEL_LIST_SUBTITLES: function(e) {
                    let {
                        guildId: t
                    } = e;
                    G.updateSubtitles(t)
                },
                USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: m,
                USER_GUILD_SETTINGS_CHANNEL_UPDATE: m,
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guild_id: t
                        } = e;
                        return G.clearGuildId(t)
                    })
                },
                USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: m,
                USER_GUILD_SETTINGS_GUILD_UPDATE: m,
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    var t;
                    let {
                        settings: n
                    } = e;
                    if (n.type !== R.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
                    let i = null === (t = n.proto.guilds) || void 0 === t ? void 0 : t.guilds,
                        o = !1;
                    return null != i && Object.keys(i).forEach(e => {
                        let t = i[e].guildRecentsDismissedAt;
                        null != t && (o = G.updateRecentsCategory(e) || o)
                    }), o
                },
                VOICE_CATEGORY_COLLAPSE: V,
                VOICE_CATEGORY_EXPAND: V,
                VOICE_CHANNEL_SELECT: B,
                VOICE_CHANNEL_STATUS_UPDATE: function(e) {
                    return G.nonPositionalChannelIdUpdate(e.id)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e, n = B(), i = new Set;
                    for (let {
                            channelId: e,
                            oldChannelId: o
                        }
                        of t) null != o && !i.has(o) && (G.nonPositionalChannelIdUpdate(o) && (n = !0), i.add(o)), null != e && !i.has(e) && (G.nonPositionalChannelIdUpdate(e) && (n = !0), i.add(e));
                    return n
                },
                WINDOW_FOCUS: y
            })