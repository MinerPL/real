            "use strict";
            n.r(t), n.d(t, {
                Opcode: function() {
                    return i
                },
                default: function() {
                    return a
                }
            }), n("702976");
            var i, a, l, s = n("44170"),
                r = n("590401");
            (l = i || (i = {}))[l.DISPATCH = 0] = "DISPATCH", l[l.HEARTBEAT = 1] = "HEARTBEAT", l[l.IDENTIFY = 2] = "IDENTIFY", l[l.PRESENCE_UPDATE = 3] = "PRESENCE_UPDATE", l[l.VOICE_STATE_UPDATE = 4] = "VOICE_STATE_UPDATE", l[l.VOICE_SERVER_PING = 5] = "VOICE_SERVER_PING", l[l.RESUME = 6] = "RESUME", l[l.RECONNECT = 7] = "RECONNECT", l[l.REQUEST_GUILD_MEMBERS = 8] = "REQUEST_GUILD_MEMBERS", l[l.INVALID_SESSION = 9] = "INVALID_SESSION", l[l.HELLO = 10] = "HELLO", l[l.HEARTBEAT_ACK = 11] = "HEARTBEAT_ACK", l[l.CALL_CONNECT = 13] = "CALL_CONNECT", l[l.GUILD_SUBSCRIPTIONS = 14] = "GUILD_SUBSCRIPTIONS", l[l.LOBBY_CONNECT = 15] = "LOBBY_CONNECT", l[l.LOBBY_DISCONNECT = 16] = "LOBBY_DISCONNECT", l[l.LOBBY_VOICE_STATES_UPDATE = 17] = "LOBBY_VOICE_STATES_UPDATE", l[l.STREAM_CREATE = 18] = "STREAM_CREATE", l[l.STREAM_DELETE = 19] = "STREAM_DELETE", l[l.STREAM_WATCH = 20] = "STREAM_WATCH", l[l.STREAM_PING = 21] = "STREAM_PING", l[l.STREAM_SET_PAUSED = 22] = "STREAM_SET_PAUSED", l[l.REQUEST_GUILD_APPLICATION_COMMANDS = 24] = "REQUEST_GUILD_APPLICATION_COMMANDS", l[l.EMBEDDED_ACTIVITY_LAUNCH = 25] = "EMBEDDED_ACTIVITY_LAUNCH", l[l.EMBEDDED_ACTIVITY_CLOSE = 26] = "EMBEDDED_ACTIVITY_CLOSE", l[l.EMBEDDED_ACTIVITY_UPDATE = 27] = "EMBEDDED_ACTIVITY_UPDATE", l[l.REQUEST_FORUM_UNREADS = 28] = "REQUEST_FORUM_UNREADS", l[l.REMOTE_COMMAND = 29] = "REMOTE_COMMAND", l[l.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH = 30] = "GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH", l[l.REQUEST_SOUNDBOARD_SOUNDS = 31] = "REQUEST_SOUNDBOARD_SOUNDS", l[l.SPEED_TEST_CREATE = 32] = "SPEED_TEST_CREATE", l[l.SPEED_TEST_DELETE = 33] = "SPEED_TEST_DELETE", l[l.REQUEST_LAST_MESSAGES = 34] = "REQUEST_LAST_MESSAGES", l[l.SEARCH_RECENT_MEMBERS = 35] = "SEARCH_RECENT_MEMBERS", l[l.REQUEST_CHANNEL_STATUSES = 36] = "REQUEST_CHANNEL_STATUSES", a = class extends s.EventEmitter {
                presenceUpdate(e, t, n, i, a) {
                    this.send(3, {
                        status: e,
                        since: t,
                        activities: n,
                        afk: i,
                        broadcast: a
                    })
                }
                voiceStateUpdate(e) {
                    let {
                        guildId: t = null,
                        channelId: n = null,
                        selfMute: i = !1,
                        selfDeaf: a = !1,
                        selfVideo: l = !1,
                        preferredRegion: s = null,
                        videoStreamParameters: u = null,
                        flags: o = 0
                    } = e, d = {
                        guild_id: t,
                        channel_id: n,
                        self_mute: i,
                        self_deaf: a,
                        self_video: l,
                        flags: o
                    };
                    null != n && r.default.shouldIncludePreferredRegion() && (d.preferred_region = s), null != u && (d.tracks = null == u ? void 0 : u.map(e => ({
                        type: e.type,
                        rid: e.rid,
                        quality: e.quality
                    }))), this.send(4, d)
                }
                voiceServerPing() {
                    this.send(5, null)
                }
                embeddedActivityClose(e, t, n) {
                    this.send(26, {
                        guild_id: null != e ? e : "0",
                        channel_id: t,
                        application_id: n
                    })
                }
                requestGuildMembers(e, t) {
                    let {
                        query: n,
                        limit: i,
                        userIds: a,
                        presences: l
                    } = t;
                    this.send(8, {
                        guild_id: e,
                        query: n,
                        limit: i,
                        user_ids: a,
                        presences: l
                    })
                }
                searchRecentMembers(e, t) {
                    let {
                        query: n,
                        continuationToken: i
                    } = t;
                    this.send(35, {
                        guild_id: e,
                        query: null != n ? n : "",
                        continuation_token: null != i ? i : null
                    })
                }
                updateGuildSubscriptions(e, t) {
                    this.send(14, {
                        guild_id: e,
                        ...t
                    })
                }
                callConnect(e) {
                    this.send(13, {
                        channel_id: e
                    })
                }
                lobbyConnect(e, t) {
                    this.send(15, {
                        lobby_id: e,
                        lobby_secret: t
                    })
                }
                lobbyDisconnect(e) {
                    this.send(16, {
                        lobby_id: e
                    })
                }
                lobbyVoiceStatesUpdate(e) {
                    this.send(17, e.map(e => ({
                        lobby_id: e.lobbyId,
                        self_mute: e.selfMute,
                        self_deaf: e.selfDeaf
                    })))
                }
                streamCreate(e, t, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    this.send(18, {
                        type: e,
                        guild_id: t,
                        channel_id: n,
                        preferred_region: i
                    })
                }
                streamWatch(e) {
                    this.send(20, {
                        stream_key: e
                    })
                }
                streamPing(e) {
                    this.send(21, {
                        stream_key: e
                    })
                }
                streamDelete(e) {
                    this.send(19, {
                        stream_key: e
                    })
                }
                streamSetPaused(e, t) {
                    this.send(22, {
                        stream_key: e,
                        paused: t
                    })
                }
                speedTestCreate() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    this.send(32, {
                        preferred_region: e
                    })
                }
                speedTestDelete() {
                    this.send(33, null)
                }
                requestForumUnreads(e, t, n) {
                    this.send(28, {
                        guild_id: e,
                        channel_id: t,
                        threads: n.map(e => ({
                            thread_id: e.threadId,
                            ack_message_id: e.ackMessageId
                        }))
                    })
                }
                requestSoundboardSounds(e) {
                    this.send(31, {
                        guild_ids: e
                    })
                }
                requestLastMessages(e, t) {
                    this.send(34, {
                        guild_id: e,
                        channel_ids: t
                    })
                }
                getDeletedEntityIdsNotMatchingHash(e, t, n, i, a) {
                    this.send(30, {
                        guild_id: e,
                        channel_ids_hash: t,
                        role_ids_hash: n,
                        emoji_ids_hash: i,
                        sticker_ids_hash: a
                    })
                }
                requestChannelStatuses(e) {
                    this.send(36, {
                        guild_id: e
                    })
                }
                remoteCommand(e, t) {
                    this.send(29, {
                        target_session_id: e,
                        payload: t
                    })
                }
            }