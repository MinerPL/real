            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            }), n("424973"), n("702976"), n("70102");
            var i = n("917351"),
                a = n.n(i);
            n("576863");
            var l = n("446674"),
                s = n("913144"),
                r = n("851387"),
                u = n("775433"),
                o = n("327037"),
                d = n("605250"),
                c = n("871336"),
                _ = n("25932"),
                E = n("410912"),
                f = n("116949"),
                h = n("233069"),
                p = n("522308"),
                T = n("766274"),
                C = n("42203"),
                m = n("26989"),
                S = n("778588"),
                I = n("260320"),
                g = n("697218"),
                A = n("800762"),
                N = n("10514"),
                O = n("521012"),
                R = n("224400"),
                y = n("390946"),
                v = n("509065"),
                M = n("518916");
            let D = new d.default("ConnectionStore"),
                L = new v.default(M.socket, (e, t) => {
                    var n;
                    e = null != e ? e : {
                        type: "CHANNEL_UPDATES",
                        channels: []
                    };
                    let i = (0, h.createChannelRecordFromServer)(t),
                        a = C.default.getChannel(t.id),
                        l = null == a ? void 0 : a.merge({
                            ...i,
                            recipients: a.recipients,
                            bitrate: null !== (n = i.bitrate) && void 0 !== n ? n : a.bitrate
                        });
                    return e.channels.push(null != l ? l : i), e
                }, e => "CHANNEL_UPDATE" !== e),
                U = new v.default(M.socket, (e, t) => ((e = null == e ? {
                    type: "SOUNDBOARD_SOUNDS_RECEIVED",
                    updates: []
                } : e).updates.push({
                    guildId: t.guild_id,
                    sounds: t.soundboard_sounds.map(e => ({
                        name: e.name,
                        soundId: e.sound_id,
                        emojiName: e.emoji_name,
                        emojiId: e.emoji_id,
                        userId: e.user_id,
                        volume: e.volume,
                        available: e.available,
                        guildId: t.guild_id
                    }))
                }), e), e => "SOUNDBOARD_SOUNDS" !== e),
                P = new v.default(M.socket, (e, t) => ((e = null == e ? {
                    type: "PRESENCE_UPDATES",
                    updates: []
                } : e).updates.push(t), e), e => "PRESENCE_UPDATE" !== e);

            function b(e, t) {
                var i, s, d, m;
                switch (v.default.flush(e, t), e) {
                    case "INITIAL_GUILD":
                        E.default.initialGuild.measure(() => {
                            l.default.Emitter.batched(() => {
                                let e = y.hydrateInitialGuild(t, M.socket.identifyStartTime);
                                null != g.default.getCurrentUser() && (G({
                                    type: "GUILD_CREATE",
                                    guild: e
                                }), G({
                                    type: "VOICE_STATE_UPDATES",
                                    voiceStates: e.voice_states.map(t => {
                                        var n;
                                        return {
                                            userId: t.user_id,
                                            guildId: e.id,
                                            sessionId: t.session_id,
                                            channelId: t.channel_id,
                                            mute: t.mute,
                                            deaf: t.deaf,
                                            selfMute: t.self_mute,
                                            selfDeaf: t.self_deaf,
                                            selfVideo: t.self_video || !1,
                                            suppress: t.suppress,
                                            selfStream: t.self_stream || !1,
                                            requestToSpeakTimestamp: null !== (n = t.request_to_speak_timestamp) && void 0 !== n ? n : null
                                        }
                                    })
                                }), D.log("Dispatched INITIAL_GUILD ".concat(t.id)))
                            })
                        });
                        break;
                    case "READY_SUPPLEMENTAL":
                        E.default.readySupplemental.measure(() => {
                            l.default.Emitter.batched(() => {
                                var e, n;
                                t = E.default.hydrateReadySupplemental.measure(() => y.hydrateReadySupplementalPayload(t, M.socket.identifyStartTime));
                                let i = e => e.map(e => ({
                                        user: e.user,
                                        status: e.status,
                                        clientStatus: e.client_status,
                                        activities: e.activities,
                                        broadcast: e.broadcast
                                    })),
                                    a = t.guilds.filter(e => !0 !== e.unavailable);
                                a.forEach(e => {
                                    e.presences = i(e.presences || [])
                                });
                                let l = t.presences ? i(t.presences) : [],
                                    s = (null !== (e = t.lazy_private_channels) && void 0 !== e ? e : []).map(e => (0, h.createChannelRecordFromServer)(e)),
                                    r = null !== (n = t.game_invites) && void 0 !== n ? n : [];
                                E.default.dispatchReadySupplemental.measure(() => {
                                    G({
                                        type: "CONNECTION_OPEN_SUPPLEMENTAL",
                                        guilds: a,
                                        presences: l,
                                        lazyPrivateChannels: s,
                                        gameInvites: r
                                    })
                                });
                                let u = [];
                                a.forEach(e => {
                                    e.voice_states.forEach(t => {
                                        var n;
                                        u.push({
                                            userId: t.user_id,
                                            guildId: e.id,
                                            sessionId: t.session_id,
                                            channelId: t.channel_id,
                                            mute: t.mute,
                                            deaf: t.deaf,
                                            selfMute: t.self_mute,
                                            selfDeaf: t.self_deaf,
                                            selfVideo: t.self_video || !1,
                                            suppress: t.suppress,
                                            selfStream: t.self_stream || !1,
                                            requestToSpeakTimestamp: null !== (n = t.request_to_speak_timestamp) && void 0 !== n ? n : null
                                        })
                                    })
                                }), G({
                                    type: "VOICE_STATE_UPDATES",
                                    voiceStates: u,
                                    initial: !0
                                }), M.localVoiceState.update(), M.localLobbyVoiceStates.update({}, !0)
                            })
                        }), setTimeout(() => G({
                            type: "POST_CONNECTION_OPEN"
                        }), 2e3);
                        break;
                    case "READY":
                        if (t.user.bot) {
                            G({
                                type: "LOGOUT"
                            });
                            return
                        }
                        E.default.ready.measure(() => {
                            l.default.Emitter.batched(() => {
                                t = E.default.hydrateReady.measure(() => y.hydrateReadyPayloadPrioritized(t, M.socket.identifyStartTime));
                                let e = t.private_channels.map(e => (0, h.createChannelRecordFromServer)(e)),
                                    n = t.guilds.filter(e => e.unavailable).map(e => e.id),
                                    i = t.guilds.filter(e => !0 !== e.unavailable);
                                i.forEach(e => {
                                    e.presences = []
                                });
                                let a = null == t.user_settings_proto ? void 0 : (0, f.b64ToPreloadedUserSettingsProto)(t.user_settings_proto);
                                E.default.dispatchReady.measure(() => {
                                    var l;
                                    G({
                                        type: "CONNECTION_OPEN",
                                        sessionId: t.session_id,
                                        authSessionIdHash: t.auth_session_id_hash,
                                        user: t.user,
                                        users: t.users,
                                        guilds: i,
                                        initialPrivateChannels: e,
                                        unavailableGuilds: n,
                                        readState: t.read_state,
                                        userGuildSettings: t.user_guild_settings,
                                        tutorial: t.tutorial,
                                        relationships: t.relationships,
                                        friendSuggestionCount: t.friend_suggestion_count,
                                        presences: t.presences,
                                        analyticsToken: t.analytics_token,
                                        experiments: t.experiments,
                                        connectedAccounts: t.connected_accounts,
                                        guildExperiments: t.guild_experiments,
                                        requiredAction: t.required_action,
                                        consents: t.consents,
                                        sessions: w(t.sessions || []),
                                        pendingPayments: t.pending_payments,
                                        countryCode: null !== (l = t.country_code) && void 0 !== l ? l : void 0,
                                        guildJoinRequests: t.guild_join_requests || [],
                                        userSettingsProto: a,
                                        apiCodeVersion: t.api_code_version,
                                        auth: t.auth,
                                        notificationSettings: {
                                            flags: t.notification_settings.flags
                                        }
                                    })
                                }), null != t.auth_token && G({
                                    type: "UPDATE_TOKEN",
                                    token: t.auth_token,
                                    userId: t.user.id
                                }), M.localPresenceState.update(), M.localVoiceState.update(), M.localLobbyVoiceStates.update(), V()
                            })
                        });
                        break;
                    case "RESUMED":
                        M.localPresenceState.forceUpdate(), M.localVoiceState.forceUpdate(), M.localLobbyVoiceStates.forceUpdate(), V(), G({
                            type: "CONNECTION_RESUMED"
                        });
                        break;
                    case "TYPING_START":
                        null != t.member && k(t.guild_id, t.member.user, t.member), G({
                            type: "TYPING_START",
                            channelId: t.channel_id,
                            userId: t.user_id
                        });
                        break;
                    case "ACTIVITY_START":
                        G({
                            type: "ACTIVITY_START",
                            userId: t.user_id,
                            activity: t.activity
                        });
                        break;
                    case "ACTIVITY_USER_ACTION":
                        G({
                            type: "ACTIVITY_USER_ACTION",
                            actionType: t.action_type,
                            user: t.user,
                            applicationId: t.application_id,
                            channelId: t.channel_id,
                            messageId: t.message_id
                        });
                        break;
                    case "MESSAGE_CREATE":
                        F(t), null != t.author && G({
                            type: "MESSAGE_CREATE",
                            guildId: t.guild_id,
                            channelId: t.channel_id,
                            message: t,
                            optimistic: !1,
                            isPushNotification: !1
                        });
                        break;
                    case "MESSAGE_UPDATE":
                        F(t), G({
                            type: "MESSAGE_UPDATE",
                            guildId: t.guild_id,
                            message: t
                        });
                        break;
                    case "MESSAGE_DELETE":
                        G({
                            type: "MESSAGE_DELETE",
                            guildId: t.guild_id,
                            id: t.id,
                            channelId: t.channel_id
                        });
                        break;
                    case "MESSAGE_DELETE_BULK":
                        G({
                            type: "MESSAGE_DELETE_BULK",
                            guildId: t.guild_id,
                            ids: t.ids,
                            channelId: t.channel_id
                        });
                        break;
                    case "MESSAGE_ACK":
                        G({
                            type: "MESSAGE_ACK",
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            manual: t.manual,
                            newMentionCount: t.mention_count,
                            version: t.version
                        });
                        break;
                    case "GUILD_FEATURE_ACK":
                        G({
                            type: "GUILD_FEATURE_ACK",
                            id: t.resource_id,
                            ackType: t.ack_type,
                            ackedId: t.entity_id
                        });
                        break;
                    case "USER_NON_CHANNEL_ACK":
                        G({
                            type: "USER_NON_CHANNEL_ACK",
                            ackType: t.ack_type,
                            ackedId: t.entity_id
                        });
                        break;
                    case "CHANNEL_PINS_ACK":
                        G({
                            type: "CHANNEL_PINS_ACK",
                            channelId: t.channel_id,
                            timestamp: t.timestamp,
                            version: t.version
                        });
                        break;
                    case "CHANNEL_PINS_UPDATE":
                        G({
                            type: "CHANNEL_PINS_UPDATE",
                            channelId: t.channel_id,
                            lastPinTimestamp: t.last_pin_timestamp
                        });
                        break;
                    case "CHANNEL_CREATE":
                    case "CHANNEL_DELETE":
                        G({
                            type: e,
                            channel: (0, h.createChannelRecordFromServer)(t)
                        });
                        break;
                    case "VOICE_CHANNEL_STATUS_UPDATE":
                        G({
                            type: e,
                            id: t.id,
                            guildId: t.guild_id,
                            status: t.status
                        });
                        break;
                    case "CHANNEL_STATUSES":
                        G({
                            type: e,
                            guildId: t.guild_id,
                            channels: t.channels
                        });
                        break;
                    case "CHANNEL_UPDATE":
                        L.add(t);
                        break;
                    case "THREAD_CREATE":
                    case "THREAD_UPDATE":
                    case "THREAD_DELETE": {
                        let {
                            newly_created: n,
                            ...i
                        } = t;
                        G({
                            type: e,
                            isNewlyCreated: n,
                            channel: (0, h.createChannelRecordFromServer)(i)
                        });
                        break
                    }
                    case "THREAD_LIST_SYNC":
                        G({
                            type: "THREAD_LIST_SYNC",
                            guildId: t.guild_id,
                            threads: t.threads.map(e => {
                                let t = C.default.getChannel(e.parent_id);
                                return null != t && (e.nsfw = t.nsfw, e.parentChannelThreadType = t.type), (0, h.createChannelRecordFromServer)(e)
                            }),
                            mostRecentMessages: t.most_recent_messages,
                            members: t.members ? a.map(t.members, _.default) : void 0,
                            channelIds: t.channel_ids
                        });
                        break;
                    case "THREAD_MEMBER_UPDATE":
                        G({
                            type: "THREAD_MEMBER_UPDATE",
                            id: t.id,
                            guildId: t.guild_id,
                            userId: t.user_id,
                            flags: t.flags,
                            muted: t.muted,
                            muteConfig: t.mute_config,
                            joinTimestamp: t.join_timestamp
                        });
                        break;
                    case "THREAD_MEMBERS_UPDATE":
                        G({
                            type: "THREAD_MEMBERS_UPDATE",
                            id: t.id,
                            guildId: t.guild_id,
                            memberCount: t.member_count,
                            addedMembers: null === (i = t.added_members) || void 0 === i ? void 0 : i.map(e => ({
                                id: e.id,
                                guildId: t.guild_id,
                                userId: e.user_id,
                                flags: e.flags,
                                joinTimestamp: e.join_timestamp
                            })),
                            removedMemberIds: t.removed_member_ids,
                            memberIdsPreview: t.member_ids_preview
                        });
                        break;
                    case "FORUM_UNREADS":
                        if (t.permission_denied) break;
                        G({
                            type: "FORUM_UNREADS",
                            channelId: t.channel_id,
                            threads: t.threads.map(e => ({
                                threadId: e.thread_id,
                                missing: e.missing,
                                count: e.count
                            }))
                        });
                        break;
                    case "SOUNDBOARD_SOUNDS":
                        U.add(t);
                        break;
                    case "CHANNEL_RECIPIENT_ADD":
                    case "CHANNEL_RECIPIENT_REMOVE":
                        let I = C.default.getBasicChannel(t.channel_id);
                        G({
                            type: e,
                            channelId: t.channel_id,
                            user: t.user,
                            nick: t.nick,
                            isMember: null != I
                        });
                        break;
                    case "GUILD_CREATE":
                        if (t.unavailable) G({
                            type: "GUILD_UNAVAILABLE",
                            guildId: t.id
                        });
                        else {
                            let e = y.hydratePreviouslyUnavailableGuild(t);
                            r.default.createGuild(e), G({
                                type: "VOICE_STATE_UPDATES",
                                voiceStates: e.voice_states.map(t => {
                                    var n;
                                    return {
                                        userId: t.user_id,
                                        guildId: e.id,
                                        sessionId: t.session_id,
                                        channelId: t.channel_id,
                                        mute: t.mute,
                                        deaf: t.deaf,
                                        selfMute: t.self_mute,
                                        selfDeaf: t.self_deaf,
                                        selfVideo: t.self_video || !1,
                                        suppress: t.suppress,
                                        selfStream: t.self_stream || !1,
                                        requestToSpeakTimestamp: null !== (n = t.request_to_speak_timestamp) && void 0 !== n ? n : null
                                    }
                                })
                            })
                        }
                        break;
                    case "GUILD_UPDATE":
                        G({
                            type: "GUILD_UPDATE",
                            guild: t
                        }), t.unavailable && G({
                            type: "GUILD_UNAVAILABLE",
                            guildId: t.id
                        });
                        break;
                    case "GUILD_DELETE":
                        G({
                            type: "GUILD_DELETE",
                            guild: t
                        }), t.unavailable && G({
                            type: "GUILD_UNAVAILABLE",
                            guildId: t.id
                        });
                        break;
                    case "GUILD_MEMBERS_CHUNK":
                        l.default.Emitter.batched(() => {
                            G({
                                type: "GUILD_MEMBERS_CHUNK",
                                guildId: t.guild_id,
                                members: t.members,
                                notFound: t.not_found
                            }), null != t.presences && t.presences.forEach(e => {
                                let {
                                    user: n,
                                    status: i,
                                    client_status: a,
                                    activities: l,
                                    broadcast: s
                                } = e;
                                return H({
                                    guildId: t.guild_id,
                                    user: n,
                                    status: i,
                                    activities: l,
                                    clientStatus: a,
                                    broadcast: s
                                })
                            }), v.default.flush()
                        });
                        break;
                    case "THREAD_MEMBER_LIST_UPDATE":
                        l.default.Emitter.batched(() => {
                            G({
                                type: "THREAD_MEMBER_LIST_UPDATE",
                                guildId: t.guild_id,
                                threadId: t.thread_id,
                                members: t.members
                            }), null != t.presences && t.presences.forEach(e => {
                                let {
                                    user: n,
                                    status: i,
                                    client_status: a,
                                    activities: l,
                                    broadcast: s
                                } = e;
                                return H({
                                    guildId: t.guild_id,
                                    user: n,
                                    status: i,
                                    activities: l,
                                    clientStatus: a,
                                    broadcast: s
                                })
                            }), v.default.flush()
                        });
                        break;
                    case "GUILD_BAN_ADD":
                    case "GUILD_BAN_REMOVE":
                    case "GUILD_MEMBER_ADD":
                    case "GUILD_MEMBER_UPDATE":
                    case "GUILD_MEMBER_REMOVE":
                        G({
                            type: e,
                            guildId: t.guild_id,
                            user: t.user,
                            avatar: t.avatar,
                            roles: t.roles,
                            nick: t.nick,
                            premiumSince: t.premium_since,
                            isPending: t.pending,
                            joinedAt: t.joined_at,
                            communicationDisabledUntil: t.communication_disabled_until,
                            unusualDMActivityUntil: t.unusual_dm_activity_until,
                            flags: t.flags
                        });
                        break;
                    case "GUILD_ROLE_CREATE":
                    case "GUILD_ROLE_UPDATE":
                        G({
                            type: e,
                            guildId: t.guild_id,
                            role: t.role
                        });
                        break;
                    case "GUILD_ROLE_DELETE":
                        G({
                            type: "GUILD_ROLE_DELETE",
                            guildId: t.guild_id,
                            roleId: t.role_id,
                            version: t.version
                        });
                        break;
                    case "GUILD_EMOJIS_UPDATE":
                        G({
                            type: "GUILD_EMOJIS_UPDATE",
                            guildId: t.guild_id,
                            emojis: t.emojis
                        });
                        break;
                    case "GUILD_STICKERS_UPDATE":
                        G({
                            type: "GUILD_STICKERS_UPDATE",
                            guildId: t.guild_id,
                            stickers: t.stickers
                        });
                        break;
                    case "GUILD_INTEGRATIONS_UPDATE":
                        G({
                            type: "GUILD_INTEGRATIONS_UPDATE",
                            guildId: t.guild_id
                        });
                        break;
                    case "INTEGRATION_CREATE":
                        G({
                            type: "INTEGRATION_CREATE",
                            application: t.application,
                            guildId: t.guild_id
                        });
                        break;
                    case "INTEGRATION_DELETE":
                        G({
                            type: "INTEGRATION_DELETE",
                            applicationId: t.application_id,
                            guildId: t.guild_id
                        });
                        break;
                    case "USER_UPDATE":
                        G({
                            type: "CURRENT_USER_UPDATE",
                            user: t
                        });
                        break;
                    case "USER_SETTINGS_PROTO_UPDATE":
                        let P = (0, f.b64ToProtoWithType)(t.settings.type, t.settings.proto);
                        if (null == P) break;
                        if ("string" == typeof P) throw console.error("Invalid proto: |".concat(P, "| |").concat(t.settings.proto, "|")), console.error({
                            parsed: P,
                            wire: t.settings.proto,
                            type: t.settings.type
                        }), Error("UserSettingsProto must not be a string");
                        G({
                            type: "USER_SETTINGS_PROTO_UPDATE",
                            settings: {
                                proto: P,
                                type: t.settings.type
                            },
                            partial: t.partial
                        });
                        break;
                    case "USER_GUILD_SETTINGS_UPDATE":
                        G({
                            type: "USER_GUILD_SETTINGS_FULL_UPDATE",
                            userGuildSettings: [t]
                        });
                        break;
                    case "USER_CONNECTIONS_UPDATE":
                        G({
                            type: "USER_CONNECTIONS_UPDATE"
                        });
                        break;
                    case "USER_REQUIRED_ACTION_UPDATE":
                        G({
                            type: "USER_REQUIRED_ACTION_UPDATE",
                            requiredAction: t.required_action
                        });
                        break;
                    case "USER_NOTE_UPDATE":
                        G({
                            type: "USER_NOTE_UPDATE",
                            ...t
                        });
                        break;
                    case "RELATIONSHIP_ADD":
                        G({
                            type: "RELATIONSHIP_ADD",
                            relationship: {
                                id: t.id,
                                type: t.type,
                                user: t.user,
                                since: t.since,
                                nickname: t.nickname
                            },
                            shouldNotify: !0 === t.should_notify
                        });
                        break;
                    case "RELATIONSHIP_REMOVE":
                        G({
                            type: "RELATIONSHIP_REMOVE",
                            relationship: t
                        });
                        break;
                    case "RELATIONSHIP_UPDATE":
                        G({
                            type: "RELATIONSHIP_UPDATE",
                            relationship: t
                        });
                        break;
                    case "PRESENCE_UPDATE":
                        H({
                            guildId: t.guild_id,
                            user: t.user,
                            status: t.status,
                            activities: t.activities,
                            clientStatus: t.client_status,
                            broadcast: t.broadcast
                        });
                        break;
                    case "PRESENCES_REPLACE":
                        G({
                            type: "PRESENCES_REPLACE",
                            presences: t
                        });
                        break;
                    case "SESSIONS_REPLACE":
                        G({
                            type: "SESSIONS_REPLACE",
                            sessions: w(t)
                        });
                        break;
                    case "VOICE_STATE_UPDATE":
                        null != t.member && k(t.guild_id, t.member.user, t.member), G({
                            type: "VOICE_STATE_UPDATES",
                            voiceStates: [{
                                userId: t.user_id,
                                guildId: t.guild_id,
                                sessionId: t.session_id,
                                channelId: t.channel_id,
                                mute: t.mute,
                                deaf: t.deaf,
                                selfMute: t.self_mute,
                                selfDeaf: t.self_deaf,
                                selfVideo: t.self_video || !1,
                                suppress: t.suppress,
                                selfStream: t.self_stream || !1,
                                requestToSpeakTimestamp: null !== (s = t.request_to_speak_timestamp) && void 0 !== s ? s : null,
                                oldChannelId: A.default.getUserVoiceChannelId(t.guild_id, t.user_id)
                            }]
                        });
                        break;
                    case "LOBBY_VOICE_STATE_UPDATE":
                        G({
                            type: "LOBBY_VOICE_STATE_UPDATE",
                            userId: t.user_id,
                            lobbyId: t.lobby_id,
                            sessionId: t.session_id,
                            channelId: t.channel_id,
                            mute: t.mute,
                            deaf: t.deaf,
                            selfMute: t.self_mute,
                            selfDeaf: t.self_deaf
                        });
                        break;
                    case "VOICE_SERVER_UPDATE":
                        G({
                            type: "VOICE_SERVER_UPDATE",
                            guildId: t.guild_id,
                            channelId: t.channel_id,
                            endpoint: t.endpoint,
                            token: t.token
                        });
                        break;
                    case "LOBBY_VOICE_SERVER_UPDATE":
                        G({
                            type: "LOBBY_VOICE_SERVER_UPDATE",
                            lobbyId: t.lobby_id,
                            endpoint: t.endpoint,
                            token: t.token
                        });
                        break;
                    case "CALL_CREATE":
                        G({
                            type: "CALL_CREATE",
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            embeddedActivities: t.embedded_activities,
                            region: t.region,
                            ringing: t.ringing
                        });
                        let b = t.voice_states;
                        null != b && G({
                            type: "VOICE_STATE_UPDATES",
                            voiceStates: b.map(e => {
                                var t;
                                return {
                                    userId: e.user_id,
                                    guildId: null,
                                    sessionId: e.session_id,
                                    channelId: e.channel_id,
                                    mute: e.mute,
                                    deaf: e.deaf,
                                    selfMute: e.self_mute,
                                    selfDeaf: e.self_deaf,
                                    selfVideo: e.self_video || !1,
                                    suppress: e.suppress,
                                    selfStream: e.self_stream || !1,
                                    requestToSpeakTimestamp: null !== (t = e.request_to_speak_timestamp) && void 0 !== t ? t : null
                                }
                            })
                        });
                        break;
                    case "CALL_UPDATE":
                        G({
                            type: "CALL_UPDATE",
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            region: t.region,
                            ringing: t.ringing
                        });
                        break;
                    case "CALL_DELETE":
                        G({
                            type: "CALL_DELETE",
                            channelId: t.channel_id,
                            unavailable: t.unavailable
                        });
                        break;
                    case "OAUTH2_TOKEN_REVOKE":
                        G({
                            type: "OAUTH2_TOKEN_REVOKE",
                            accessToken: t.access_token
                        });
                        break;
                    case "RECENT_MENTION_DELETE":
                        G({
                            type: "RECENT_MENTION_DELETE",
                            id: t.message_id
                        });
                        break;
                    case "FRIEND_SUGGESTION_CREATE":
                        G({
                            type: "FRIEND_SUGGESTION_CREATE",
                            suggestion: t
                        });
                        break;
                    case "FRIEND_SUGGESTION_DELETE":
                        G({
                            type: "FRIEND_SUGGESTION_DELETE",
                            suggestedUserId: t.suggested_user_id
                        });
                        break;
                    case "WEBHOOKS_UPDATE":
                        G({
                            type: "WEBHOOKS_UPDATE",
                            guildId: t.guild_id,
                            channelId: t.channel_id
                        });
                        break;
                    case "MESSAGE_REACTION_ADD":
                    case "MESSAGE_REACTION_REMOVE":
                        G({
                            type: e,
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            userId: t.user_id,
                            emoji: t.emoji,
                            burst: t.burst,
                            colors: t.burst_colors,
                            messageAuthorId: t.message_author_id,
                            reactionType: t.type
                        });
                        break;
                    case "MESSAGE_REACTION_REMOVE_ALL":
                        G({
                            type: "MESSAGE_REACTION_REMOVE_ALL",
                            channelId: t.channel_id,
                            messageId: t.message_id
                        });
                        break;
                    case "MESSAGE_REACTION_REMOVE_EMOJI":
                        G({
                            type: "MESSAGE_REACTION_REMOVE_EMOJI",
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            emoji: t.emoji
                        });
                        break;
                    case "MESSAGE_REACTION_ADD_MANY":
                        G({
                            type: "MESSAGE_REACTION_ADD_MANY",
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            reactions: t.reactions
                        });
                        break;
                    case "PAYMENT_UPDATE":
                        G({
                            type: "PAYMENT_UPDATE",
                            payment: t
                        });
                        break;
                    case "ENTITLEMENT_CREATE":
                    case "ENTITLEMENT_UPDATE":
                    case "ENTITLEMENT_DELETE":
                        G({
                            type: e,
                            entitlement: t
                        });
                        break;
                    case "USER_PAYMENT_SOURCES_UPDATE":
                        S.default.hasLayers() && (n("850068").fetchPaymentSources(), u.fetchSubscriptionPlansBySKUs(N.default.getFetchedSKUIDs()));
                        break;
                    case "USER_SUBSCRIPTIONS_UPDATE":
                        o.fetchCurrentUser(), S.default.hasLayers() && n("850068").fetchSubscriptions();
                        break;
                    case "USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE":
                        G({
                            type: "GUILD_BOOST_SLOT_CREATE",
                            guildBoostSlot: p.default.createFromServer(t, O.default.getSubscriptionById(t.subscription_id))
                        });
                        break;
                    case "USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE":
                        G({
                            type: "GUILD_BOOST_SLOT_UPDATE",
                            guildBoostSlot: p.default.createFromServer(t, O.default.getSubscriptionById(t.subscription_id))
                        });
                        break;
                    case "BILLING_POPUP_BRIDGE_CALLBACK":
                        G({
                            type: "BILLING_POPUP_BRIDGE_CALLBACK",
                            paymentSourceType: t.payment_source_type,
                            state: t.state,
                            path: t.path,
                            query: t.query
                        });
                        break;
                    case "USER_PAYMENT_BROWSER_CHECKOUT_DONE":
                        G({
                            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
                            loadId: t.load_id
                        });
                        break;
                    case "USER_PAYMENT_CLIENT_ADD":
                        (0, R.getPurchaseTokenHash)().then(e => {
                            let n = t.purchase_token_hash;
                            n === e && G({
                                type: "USER_PAYMENT_CLIENT_ADD",
                                purchaseTokenHash: n,
                                expiresAt: t.expires_at
                            })
                        });
                        break;
                    case "GUILD_MEMBER_LIST_UPDATE":
                        l.default.Emitter.batched(() => {
                            let e = e => {
                                if (null == e.member) return;
                                let {
                                    member: n
                                } = e;
                                if (k(t.guild_id, n.user, n), null == n.presence) return;
                                let {
                                    presence: i
                                } = n;
                                H({
                                    guildId: t.guild_id,
                                    user: i.user,
                                    status: i.status,
                                    activities: i.activities,
                                    clientStatus: i.client_status,
                                    broadcast: i.broadcast
                                })
                            };
                            t.ops.forEach(t => {
                                let {
                                    op: n,
                                    items: i,
                                    item: a
                                } = t;
                                switch (n) {
                                    case "SYNC":
                                        i.forEach(e);
                                        break;
                                    case "UPDATE":
                                    case "INSERT":
                                        e(a)
                                }
                            }), v.default.flush(), G({
                                type: "GUILD_MEMBER_LIST_UPDATE",
                                guildId: t.guild_id,
                                id: t.id,
                                ops: t.ops,
                                groups: t.groups,
                                memberCount: t.member_count,
                                onlineCount: t.online_count
                            })
                        });
                        break;
                    case "LOBBY_CREATE":
                        G({
                            type: "LOBBY_CREATE",
                            lobby: t
                        }), t.voice_states.forEach(e => {
                            G({
                                type: "LOBBY_VOICE_STATE_UPDATE",
                                lobbyId: t.id,
                                userId: e.user_id,
                                sessionId: e.session_id,
                                channelId: e.channel_id,
                                mute: e.mute,
                                deaf: e.deaf,
                                selfMute: e.self_mute,
                                selfDeaf: e.self_deaf
                            })
                        });
                        break;
                    case "LOBBY_UPDATE":
                        G({
                            type: "LOBBY_UPDATE",
                            lobby: t
                        });
                        break;
                    case "LOBBY_DELETE":
                        G({
                            type: "LOBBY_DELETE",
                            lobbyId: t.id,
                            reason: t.reason
                        });
                        break;
                    case "LOBBY_MEMBER_CONNECT":
                    case "LOBBY_MEMBER_UPDATE":
                    case "LOBBY_MEMBER_DISCONNECT":
                        G({
                            type: e,
                            lobbyId: t.lobby_id,
                            member: t.member
                        });
                        break;
                    case "LOBBY_MESSAGE":
                        G({
                            type: "LOBBY_MESSAGE",
                            lobbyId: t.lobby_id,
                            senderId: t.sender_id,
                            data: t.data
                        });
                        break;
                    case "GIFT_CODE_UPDATE":
                        G({
                            type: "GIFT_CODE_UPDATE",
                            uses: t.uses,
                            code: t.code
                        });
                        break;
                    case "GIFT_CODE_CREATE":
                        G({
                            type: "GIFT_CODE_CREATE",
                            giftCode: t
                        });
                        break;
                    case "USER_ACHIEVEMENT_UPDATE":
                        G({
                            type: "USER_ACHIEVEMENT_UPDATE",
                            userAchievement: t
                        });
                        break;
                    case "LIBRARY_APPLICATION_UPDATE":
                        G({
                            type: "LIBRARY_APPLICATION_UPDATE",
                            libraryApplication: t
                        });
                        break;
                    case "STREAM_CREATE":
                        G({
                            type: "STREAM_CREATE",
                            streamKey: t.stream_key,
                            region: t.region,
                            viewerIds: t.viewer_ids,
                            rtcServerId: t.rtc_server_id,
                            paused: t.paused
                        });
                        break;
                    case "STREAM_SERVER_UPDATE":
                        G({
                            type: "STREAM_SERVER_UPDATE",
                            streamKey: t.stream_key,
                            endpoint: t.endpoint,
                            token: t.token
                        });
                        break;
                    case "STREAM_UPDATE":
                        G({
                            type: "STREAM_UPDATE",
                            streamKey: t.stream_key,
                            region: t.region,
                            viewerIds: t.viewer_ids,
                            paused: t.paused
                        });
                        break;
                    case "STREAM_DELETE":
                        G({
                            type: "STREAM_DELETE",
                            streamKey: t.stream_key,
                            unavailable: t.unavailable,
                            reason: t.reason
                        });
                        break;
                    case "GENERIC_PUSH_NOTIFICATION_SENT":
                        G({
                            type: "GENERIC_PUSH_NOTIFICATION_SENT",
                            title: t.title,
                            body: t.body,
                            trackingType: t.tracking_type,
                            icon: t.icon,
                            route: t.route,
                            tag: t.tag
                        });
                        break;
                    case "NOTIFICATION_CENTER_ITEM_CREATE":
                        G({
                            type: "NOTIFICATION_CENTER_ITEM_CREATE",
                            item: t
                        });
                        break;
                    case "NOTIFICATION_CENTER_ITEM_DELETE":
                        G({
                            type: "NOTIFICATION_CENTER_ITEM_DELETE",
                            id: t.id
                        });
                        break;
                    case "NOTIFICATION_CENTER_ITEMS_ACK":
                        G({
                            type: "NOTIFICATION_CENTER_ITEMS_ACK",
                            ids: [t.id],
                            optimistic: !1
                        });
                        break;
                    case "NOTIFICATION_CENTER_ITEM_COMPLETED":
                        G({
                            type: "NOTIFICATION_CENTER_ITEM_COMPLETED",
                            item_enum: t.item_enum
                        });
                        break;
                    case "APPLICATION_COMMAND_PERMISSIONS_UPDATE":
                        G({
                            type: e,
                            guildId: t.guild_id
                        });
                        break;
                    case "GUILD_APPLICATION_COMMAND_INDEX_UPDATE":
                        G({
                            type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE",
                            guildId: t.guild_id,
                            version: t.version
                        });
                        break;
                    case "GUILD_JOIN_REQUEST_CREATE":
                        G({
                            type: "GUILD_JOIN_REQUEST_CREATE",
                            request: t.request,
                            status: t.status,
                            guildId: t.guild_id
                        });
                        break;
                    case "GUILD_JOIN_REQUEST_UPDATE":
                        G({
                            type: "GUILD_JOIN_REQUEST_UPDATE",
                            request: t.request,
                            status: t.status,
                            guildId: t.guild_id
                        });
                        break;
                    case "GUILD_JOIN_REQUEST_DELETE":
                        G({
                            type: "GUILD_JOIN_REQUEST_DELETE",
                            id: t.id,
                            userId: t.user_id,
                            guildId: t.guild_id
                        });
                        break;
                    case "INTERACTION_CREATE":
                        G({
                            type: "INTERACTION_CREATE",
                            interactionId: t.id,
                            nonce: t.nonce
                        });
                        break;
                    case "INTERACTION_SUCCESS":
                        G({
                            type: "INTERACTION_SUCCESS",
                            interactionId: t.id,
                            nonce: t.nonce
                        });
                        break;
                    case "INTERACTION_FAILURE":
                        G({
                            type: "INTERACTION_FAILURE",
                            nonce: t.nonce
                        });
                        break;
                    case "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE":
                        G({
                            type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE",
                            choices: t.choices,
                            nonce: t.nonce
                        });
                        break;
                    case "INTERACTION_MODAL_CREATE":
                        G({
                            type: "INTERACTION_MODAL_CREATE",
                            id: t.id,
                            channelId: t.channel_id,
                            customId: t.custom_id,
                            application: t.application,
                            title: t.title,
                            components: t.components,
                            nonce: t.nonce
                        });
                        break;
                    case "INTERACTION_IFRAME_MODAL_CREATE":
                        G({
                            type: "INTERACTION_IFRAME_MODAL_CREATE",
                            id: t.id,
                            channelId: t.channel_id,
                            customId: t.custom_id,
                            application: t.application,
                            title: t.title,
                            iframePath: t.iframe_path,
                            modalSize: t.modal_size,
                            nonce: t.nonce
                        });
                        break;
                    case "STAGE_INSTANCE_CREATE":
                        G({
                            type: "STAGE_INSTANCE_CREATE",
                            instance: t
                        });
                        break;
                    case "STAGE_INSTANCE_UPDATE":
                        G({
                            type: "STAGE_INSTANCE_UPDATE",
                            instance: t
                        });
                        break;
                    case "STAGE_INSTANCE_DELETE":
                        G({
                            type: "STAGE_INSTANCE_DELETE",
                            instance: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_CREATE":
                        G({
                            type: "GUILD_SCHEDULED_EVENT_CREATE",
                            guildScheduledEvent: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_UPDATE":
                        G({
                            type: "GUILD_SCHEDULED_EVENT_UPDATE",
                            guildScheduledEvent: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_DELETE":
                        G({
                            type: "GUILD_SCHEDULED_EVENT_DELETE",
                            guildScheduledEvent: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE":
                        G({
                            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE",
                            eventException: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE":
                        G({
                            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE",
                            eventException: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE":
                        G({
                            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE",
                            eventException: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE":
                        G({
                            type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE",
                            eventId: t.event_id
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_USER_ADD":
                        G({
                            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                            userId: t.user_id,
                            guildId: t.guild_id,
                            guildEventId: t.guild_scheduled_event_id,
                            guildEventExceptionId: t.guild_scheduled_event_exception_id,
                            response: t.response
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_USER_REMOVE":
                        G({
                            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                            userId: t.user_id,
                            guildId: t.guild_id,
                            guildEventId: t.guild_scheduled_event_id,
                            guildEventExceptionId: t.guild_scheduled_event_exception_id,
                            response: t.response
                        });
                        break;
                    case "GUILD_DIRECTORY_ENTRY_CREATE":
                        G({
                            type: "GUILD_DIRECTORY_ENTRY_CREATE",
                            channelId: t.directory_channel_id,
                            entry: t
                        });
                        break;
                    case "GUILD_DIRECTORY_ENTRY_UPDATE":
                        G({
                            type: "GUILD_DIRECTORY_ENTRY_UPDATE",
                            channelId: t.directory_channel_id,
                            entry: t
                        });
                        break;
                    case "GUILD_DIRECTORY_ENTRY_DELETE":
                        G({
                            type: "GUILD_DIRECTORY_ENTRY_DELETE",
                            channelId: t.directory_channel_id,
                            guildId: t.entity_id
                        });
                        break;
                    case "AUTO_MODERATION_MENTION_RAID_DETECTION":
                        G({
                            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
                            guildId: t.guild_id,
                            decisionId: t.decision_id,
                            suspiciousMentionActivityUntil: t.suspicious_mention_activity_until
                        });
                        break;
                    case "VOICE_CHANNEL_EFFECT_SEND":
                        G({
                            type: "VOICE_CHANNEL_EFFECT_SEND",
                            emoji: t.emoji,
                            channelId: t.channel_id,
                            userId: t.user_id,
                            animationType: t.animation_type,
                            animationId: t.animation_id,
                            soundId: t.sound_id,
                            soundVolume: t.sound_volume,
                            points: t.points,
                            streamerId: t.streamer_id,
                            lineId: t.line_id,
                            emojiHose: t.emoji_hose
                        });
                        break;
                    case "GUILD_SOUNDBOARD_SOUND_CREATE":
                        G({
                            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
                            sound: {
                                guildId: t.guild_id,
                                name: t.name,
                                soundId: t.sound_id,
                                user: new T.default(t.user),
                                userId: t.user_id,
                                volume: t.volume,
                                emojiId: t.emoji_id,
                                emojiName: t.emoji_name,
                                available: t.available
                            }
                        });
                        break;
                    case "GUILD_SOUNDBOARD_SOUND_UPDATE":
                        G({
                            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
                            sound: {
                                guildId: t.guild_id,
                                name: t.name,
                                soundId: t.sound_id,
                                user: new T.default(t.user),
                                userId: t.user_id,
                                volume: t.volume,
                                emojiId: t.emoji_id,
                                emojiName: t.emoji_name,
                                available: t.available
                            }
                        });
                        break;
                    case "GUILD_SOUNDBOARD_SOUND_DELETE":
                        G({
                            type: "GUILD_SOUNDBOARD_SOUND_DELETE",
                            guildId: t.guild_id,
                            soundId: t.sound_id
                        });
                        break;
                    case "GUILD_SOUNDBOARD_SOUNDS_UPDATE":
                        G({
                            type: "GUILD_SOUNDBOARD_SOUNDS_UPDATE",
                            guildId: t.guild_id,
                            soundboardSounds: t.soundboard_sounds.map(e => ({
                                name: e.name,
                                soundId: e.sound_id,
                                emojiName: e.emoji_name,
                                emojiId: e.emoji_id,
                                userId: e.user_id,
                                volume: e.volume,
                                available: e.available,
                                guildId: t.guild_id
                            }))
                        });
                        break;
                    case "EMBEDDED_ACTIVITY_UPDATE":
                        G({
                            type: "EMBEDDED_ACTIVITY_INBOUND_UPDATE",
                            guildId: t.guild_id,
                            channelId: t.channel_id,
                            embeddedActivity: t.embedded_activity,
                            connections: t.connections,
                            updateCode: t.update_code
                        });
                        break;
                    case "AUTH_SESSION_CHANGE":
                        G({
                            type: "AUTH_SESSION_CHANGE",
                            authSessionIdHash: t.auth_session_id_hash
                        });
                        break;
                    case "USER_CONNECTIONS_LINK_CALLBACK":
                        G({
                            type: "USER_CONNECTIONS_LINK_CALLBACK",
                            provider: t.provider,
                            callbackCode: t.callback_code,
                            callbackState: t.callback_state
                        });
                        break;
                    case "DELETED_ENTITY_IDS":
                        G({
                            type: "DELETED_ENTITY_IDS",
                            ...t
                        });
                        break;
                    case "CONSOLE_COMMAND_UPDATE":
                        G({
                            type: "CONSOLE_COMMAND_UPDATE",
                            id: t.id,
                            result: t.result,
                            error: t.error
                        });
                        break;
                    case "PASSIVE_UPDATE_V1":
                        G({
                            type: "PASSIVE_UPDATE_V1",
                            guildId: t.guild_id,
                            members: t.members,
                            channels: null === (d = t.channels) || void 0 === d ? void 0 : d.map(e => ({
                                id: e.id,
                                lastMessageId: e.last_message_id,
                                lastPinTimestamp: e.last_pin_timestamp
                            })),
                            voiceStates: null === (m = t.voice_states) || void 0 === m ? void 0 : m.map(e => {
                                var t;
                                return {
                                    channelId: e.channel_id,
                                    deaf: e.deaf || !1,
                                    mute: e.mute || !1,
                                    requestToSpeakTimestamp: null !== (t = e.request_to_speak_timestamp) && void 0 !== t ? t : null,
                                    selfDeaf: e.self_deaf || !1,
                                    selfMute: e.self_mute || !1,
                                    selfStream: e.self_stream || !1,
                                    selfVideo: e.self_video || !1,
                                    sessionId: e.session_id,
                                    suppress: e.suppress,
                                    userId: e.user_id
                                }
                            })
                        });
                        break;
                    case "PRIVATE_CHANNEL_INTEGRATION_CREATE":
                        G({
                            type: "PRIVATE_CHANNEL_INTEGRATION_CREATE",
                            integration: t
                        });
                        break;
                    case "PRIVATE_CHANNEL_INTEGRATION_UPDATE":
                        G({
                            type: "PRIVATE_CHANNEL_INTEGRATION_UPDATE",
                            integration: t
                        });
                        break;
                    case "PRIVATE_CHANNEL_INTEGRATION_DELETE":
                        G({
                            type: "PRIVATE_CHANNEL_INTEGRATION_DELETE",
                            channelId: t.channel_id,
                            applicationId: t.application_id
                        });
                        break;
                    case "CREATOR_MONETIZATION_RESTRICTIONS_UPDATE":
                        G({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
                            guildId: t.guild_id,
                            restrictions: t.restrictions
                        });
                        break;
                    case "BILLING_REFERRAL_TRIAL_OFFER_UPDATE":
                        G({
                            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
                            userTrialOfferId: t.user_trial_offer_id,
                            recipientId: t.recipient_id
                        });
                        break;
                    case "SPEED_TEST_CREATE":
                        G({
                            type: "SPEED_TEST_CREATE",
                            streamKey: t.stream_key,
                            region: t.region,
                            viewerIds: t.viewer_ids,
                            rtcServerId: t.rtc_server_id,
                            paused: t.paused
                        });
                        break;
                    case "SPEED_TEST_SERVER_UPDATE":
                        G({
                            type: "SPEED_TEST_SERVER_UPDATE",
                            streamKey: t.stream_key,
                            endpoint: t.endpoint,
                            token: t.token
                        });
                        break;
                    case "SPEED_TEST_UPDATE":
                        G({
                            type: "SPEED_TEST_UPDATE",
                            streamKey: t.stream_key,
                            region: t.region,
                            viewerIds: t.viewer_ids,
                            paused: t.paused
                        });
                        break;
                    case "SPEED_TEST_DELETE":
                        G({
                            type: "SPEED_TEST_DELETE",
                            streamKey: t.stream_key,
                            unavailable: t.unavailable,
                            reason: t.reason
                        });
                        break;
                    case "LAST_MESSAGES":
                        G({
                            type: "MESSAGE_PREVIEWS_LOADED",
                            guildId: t.guild_id,
                            messages: t.messages
                        });
                        break;
                    case "AUTHENTICATOR_UPDATE":
                        G({
                            type: "AUTHENTICATOR_UPDATE",
                            credential: t
                        });
                        break;
                    case "AUTHENTICATOR_CREATE":
                        G({
                            type: "AUTHENTICATOR_CREATE",
                            credential: t
                        });
                        break;
                    case "AUTHENTICATOR_DELETE":
                        G({
                            type: "AUTHENTICATOR_DELETE",
                            credential: t
                        });
                        break;
                    case "INVENTORY_PACK_UPDATE":
                        G({
                            type: "INVENTORY_PACK_UPDATE",
                            pack: c.default.fromServer(t)
                        });
                        break;
                    case "INVENTORY_PACK_DELETE":
                        G({
                            type: "INVENTORY_PACK_DELETE",
                            pack: c.default.fromServer(t)
                        });
                        break;
                    case "NOTIFICATION_SETTINGS_UPDATE":
                        G({
                            type: "NOTIFICATION_SETTINGS_UPDATE",
                            settings: {
                                flags: t.flags
                            }
                        });
                        break;
                    case "GAME_INVITE_CREATE":
                        G({
                            type: "GAME_INVITE_CREATE",
                            gameInvite: t
                        });
                        break;
                    case "GAME_INVITE_DELETE":
                        G({
                            type: "GAME_INVITE_DELETE",
                            inviteId: t.invite_id
                        });
                        break;
                    case "GAME_INVITE_DELETE_MANY":
                        G({
                            type: "GAME_INVITE_DELETE_MANY",
                            inviteIds: t.invite_ids
                        });
                        break;
                    case "PREMIUM_MARKETING_PREVIEW":
                        G({
                            type: "PREMIUM_MARKETING_PREVIEW",
                            properties: t.properties
                        })
                }
            }

            function G(e) {
                s.default.dispatch(e).catch(t => M.socket.resetSocketOnError(t, e.type))
            }

            function k(e, t, n) {
                let {
                    roles: i,
                    nick: l,
                    avatar: s,
                    flags: r,
                    premium_since: u,
                    pending: o,
                    joined_at: d,
                    communication_disabled_until: c,
                    unusual_dm_activity_until: _
                } = n, E = m.default.getMember(e, t.id);
                (!(null != E && E.nick === l && E.avatar === s && a.isEqual(E.roles, i)) || E.premiumSince !== u || E.isPending !== o || E.joinedAt !== d || E.communicationDisabledUntil !== c || E.flags !== r || E.unusualDMActivityUntil !== _) && G({
                    type: "GUILD_MEMBER_ADD",
                    guildId: e,
                    user: t,
                    roles: i,
                    nick: l,
                    avatar: s,
                    premiumSince: u,
                    isPending: o,
                    joinedAt: d,
                    communicationDisabledUntil: c,
                    unusualDMActivityUntil: _,
                    flags: r
                })
            }

            function F(e) {
                let {
                    member: t,
                    mentions: n,
                    author: i,
                    guild_id: a
                } = e;
                null != t && k(a, i, t), null != n && n.forEach(e => {
                    if (null != e.member) {
                        let {
                            member: t
                        } = e;
                        delete e.member, k(a, e, t)
                    }
                })
            }

            function w(e) {
                return e.map(e => ({
                    sessionId: e.session_id,
                    lastModified: e.last_modified,
                    status: e.status,
                    activities: e.activities,
                    active: !!e.active,
                    clientInfo: e.client_info,
                    broadcast: e.broadcast
                }))
            }

            function V() {
                M.socket.isSessionEstablished() && I.default.getPendingLobbies().forEach(e => {
                    M.socket.lobbyConnect(e.id, e.secret)
                })
            }

            function H(e) {
                let {
                    guildId: t,
                    user: n,
                    status: i,
                    activities: a,
                    clientStatus: l,
                    broadcast: s
                } = e;
                P.add({
                    guildId: t,
                    user: n,
                    status: i,
                    clientStatus: l,
                    activities: a,
                    broadcast: s
                })
            }