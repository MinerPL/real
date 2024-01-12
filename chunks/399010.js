            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("424973"), n("702976"), n("70102");
            var s = n("917351"),
                i = n.n(s);
            n("576863");
            var r = n("446674"),
                a = n("913144"),
                o = n("851387"),
                d = n("775433"),
                u = n("327037"),
                l = n("605250"),
                f = n("871336"),
                _ = n("25932"),
                c = n("410912"),
                g = n("116949"),
                m = n("233069"),
                h = n("522308"),
                v = n("766274"),
                E = n("42203"),
                p = n("26989"),
                y = n("778588"),
                T = n("260320"),
                C = n("697218"),
                S = n("800762"),
                I = n("10514"),
                A = n("521012"),
                D = n("224400"),
                N = n("390946"),
                O = n("509065"),
                b = n("518916");
            let P = new l.default("ConnectionStore"),
                V = new O.default(b.socket, (e, t) => {
                    var n;
                    e = null != e ? e : {
                        type: "CHANNEL_UPDATES",
                        channels: []
                    };
                    let s = (0, m.createChannelRecordFromServer)(t),
                        i = E.default.getChannel(t.id),
                        r = null == i ? void 0 : i.merge({
                            ...s,
                            recipients: i.recipients,
                            bitrate: null !== (n = s.bitrate) && void 0 !== n ? n : i.bitrate
                        });
                    return e.channels.push(null != r ? r : s), e
                }, e => "CHANNEL_UPDATE" !== e),
                R = new O.default(b.socket, (e, t) => ((e = null == e ? {
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
                k = new O.default(b.socket, (e, t) => ((e = null == e ? {
                    type: "PRESENCE_UPDATES",
                    updates: []
                } : e).updates.push(t), e), e => "PRESENCE_UPDATE" !== e);

            function M(e, t) {
                var s, a, l, p;
                switch (O.default.flush(e, t), e) {
                    case "INITIAL_GUILD":
                        c.default.initialGuild.measure(() => {
                            r.default.Emitter.batched(() => {
                                let e = N.hydrateInitialGuild(t, b.socket.identifyStartTime);
                                null != C.default.getCurrentUser() && (w({
                                    type: "GUILD_CREATE",
                                    guild: e
                                }), w({
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
                                }), P.log("Dispatched INITIAL_GUILD ".concat(t.id)))
                            })
                        });
                        break;
                    case "READY_SUPPLEMENTAL":
                        c.default.readySupplemental.measure(() => {
                            r.default.Emitter.batched(() => {
                                var e, n;
                                t = c.default.hydrateReadySupplemental.measure(() => N.hydrateReadySupplementalPayload(t, b.socket.identifyStartTime));
                                let s = e => e.map(e => ({
                                        user: e.user,
                                        status: e.status,
                                        clientStatus: e.client_status,
                                        activities: e.activities,
                                        broadcast: e.broadcast
                                    })),
                                    i = t.guilds.filter(e => !0 !== e.unavailable);
                                i.forEach(e => {
                                    e.presences = s(e.presences || [])
                                });
                                let r = t.presences ? s(t.presences) : [],
                                    a = (null !== (e = t.lazy_private_channels) && void 0 !== e ? e : []).map(e => (0, m.createChannelRecordFromServer)(e)),
                                    o = null !== (n = t.game_invites) && void 0 !== n ? n : [];
                                c.default.dispatchReadySupplemental.measure(() => {
                                    w({
                                        type: "CONNECTION_OPEN_SUPPLEMENTAL",
                                        guilds: i,
                                        presences: r,
                                        lazyPrivateChannels: a,
                                        gameInvites: o
                                    })
                                });
                                let d = [];
                                i.forEach(e => {
                                    e.voice_states.forEach(t => {
                                        var n;
                                        d.push({
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
                                }), w({
                                    type: "VOICE_STATE_UPDATES",
                                    voiceStates: d,
                                    initial: !0
                                }), b.localVoiceState.update(), b.localLobbyVoiceStates.update({}, !0)
                            })
                        }), setTimeout(() => w({
                            type: "POST_CONNECTION_OPEN"
                        }), 2e3);
                        break;
                    case "READY":
                        if (t.user.bot) {
                            w({
                                type: "LOGOUT"
                            });
                            return
                        }
                        c.default.ready.measure(() => {
                            r.default.Emitter.batched(() => {
                                t = c.default.hydrateReady.measure(() => N.hydrateReadyPayloadPrioritized(t, b.socket.identifyStartTime));
                                let e = t.private_channels.map(e => (0, m.createChannelRecordFromServer)(e)),
                                    n = t.guilds.filter(e => e.unavailable || null != e.geo_restricted && !1 === e.geo_restricted).map(e => e.id),
                                    s = t.guilds.filter(e => !0 !== e.unavailable),
                                    i = t.guilds.filter(e => !0 === e.geo_restricted);
                                s.forEach(e => {
                                    e.presences = []
                                });
                                let r = null == t.user_settings_proto ? void 0 : (0, g.b64ToPreloadedUserSettingsProto)(t.user_settings_proto);
                                c.default.dispatchReady.measure(() => {
                                    var a;
                                    w({
                                        type: "CONNECTION_OPEN",
                                        sessionId: t.session_id,
                                        authSessionIdHash: t.auth_session_id_hash,
                                        user: t.user,
                                        users: t.users,
                                        guilds: s,
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
                                        sessions: G(t.sessions || []),
                                        pendingPayments: t.pending_payments,
                                        countryCode: null !== (a = t.country_code) && void 0 !== a ? a : void 0,
                                        guildJoinRequests: t.guild_join_requests || [],
                                        userSettingsProto: r,
                                        apiCodeVersion: t.api_code_version,
                                        auth: t.auth,
                                        notificationSettings: {
                                            flags: t.notification_settings.flags
                                        },
                                        geoRestrictedGuilds: i
                                    })
                                }), null != t.auth_token && w({
                                    type: "UPDATE_TOKEN",
                                    token: t.auth_token,
                                    userId: t.user.id
                                }), b.localPresenceState.update(), b.localVoiceState.update(), b.localLobbyVoiceStates.update(), F()
                            })
                        });
                        break;
                    case "RESUMED":
                        b.localPresenceState.forceUpdate(), b.localVoiceState.forceUpdate(), b.localLobbyVoiceStates.forceUpdate(), F(), w({
                            type: "CONNECTION_RESUMED"
                        });
                        break;
                    case "TYPING_START":
                        null != t.member && L(t.guild_id, t.member.user, t.member), w({
                            type: "TYPING_START",
                            channelId: t.channel_id,
                            userId: t.user_id
                        });
                        break;
                    case "ACTIVITY_START":
                        w({
                            type: "ACTIVITY_START",
                            userId: t.user_id,
                            activity: t.activity
                        });
                        break;
                    case "ACTIVITY_USER_ACTION":
                        w({
                            type: "ACTIVITY_USER_ACTION",
                            actionType: t.action_type,
                            user: t.user,
                            applicationId: t.application_id,
                            channelId: t.channel_id,
                            messageId: t.message_id
                        });
                        break;
                    case "MESSAGE_CREATE":
                        U(t), null != t.author && w({
                            type: "MESSAGE_CREATE",
                            guildId: t.guild_id,
                            channelId: t.channel_id,
                            message: t,
                            optimistic: !1,
                            isPushNotification: !1
                        });
                        break;
                    case "MESSAGE_UPDATE":
                        U(t), w({
                            type: "MESSAGE_UPDATE",
                            guildId: t.guild_id,
                            message: t
                        });
                        break;
                    case "MESSAGE_DELETE":
                        w({
                            type: "MESSAGE_DELETE",
                            guildId: t.guild_id,
                            id: t.id,
                            channelId: t.channel_id
                        });
                        break;
                    case "MESSAGE_DELETE_BULK":
                        w({
                            type: "MESSAGE_DELETE_BULK",
                            guildId: t.guild_id,
                            ids: t.ids,
                            channelId: t.channel_id
                        });
                        break;
                    case "MESSAGE_ACK":
                        w({
                            type: "MESSAGE_ACK",
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            manual: t.manual,
                            newMentionCount: t.mention_count,
                            version: t.version
                        });
                        break;
                    case "GUILD_FEATURE_ACK":
                        w({
                            type: "GUILD_FEATURE_ACK",
                            id: t.resource_id,
                            ackType: t.ack_type,
                            ackedId: t.entity_id
                        });
                        break;
                    case "USER_NON_CHANNEL_ACK":
                        w({
                            type: "USER_NON_CHANNEL_ACK",
                            ackType: t.ack_type,
                            ackedId: t.entity_id
                        });
                        break;
                    case "CHANNEL_PINS_ACK":
                        w({
                            type: "CHANNEL_PINS_ACK",
                            channelId: t.channel_id,
                            timestamp: t.timestamp,
                            version: t.version
                        });
                        break;
                    case "CHANNEL_PINS_UPDATE":
                        w({
                            type: "CHANNEL_PINS_UPDATE",
                            channelId: t.channel_id,
                            lastPinTimestamp: t.last_pin_timestamp
                        });
                        break;
                    case "CHANNEL_CREATE":
                    case "CHANNEL_DELETE":
                        w({
                            type: e,
                            channel: (0, m.createChannelRecordFromServer)(t)
                        });
                        break;
                    case "VOICE_CHANNEL_STATUS_UPDATE":
                        w({
                            type: e,
                            id: t.id,
                            guildId: t.guild_id,
                            status: t.status
                        });
                        break;
                    case "CHANNEL_STATUSES":
                        w({
                            type: e,
                            guildId: t.guild_id,
                            channels: t.channels
                        });
                        break;
                    case "CHANNEL_UPDATE":
                        V.add(t);
                        break;
                    case "THREAD_CREATE":
                    case "THREAD_UPDATE":
                    case "THREAD_DELETE": {
                        let {
                            newly_created: n,
                            ...s
                        } = t;
                        w({
                            type: e,
                            isNewlyCreated: n,
                            channel: (0, m.createChannelRecordFromServer)(s)
                        });
                        break
                    }
                    case "THREAD_LIST_SYNC":
                        w({
                            type: "THREAD_LIST_SYNC",
                            guildId: t.guild_id,
                            threads: t.threads.map(e => {
                                let t = E.default.getChannel(e.parent_id);
                                return null != t && (e.nsfw = t.nsfw, e.parentChannelThreadType = t.type), (0, m.createChannelRecordFromServer)(e)
                            }),
                            mostRecentMessages: t.most_recent_messages,
                            members: t.members ? i.map(t.members, _.default) : void 0,
                            channelIds: t.channel_ids
                        });
                        break;
                    case "THREAD_MEMBER_UPDATE":
                        w({
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
                        w({
                            type: "THREAD_MEMBERS_UPDATE",
                            id: t.id,
                            guildId: t.guild_id,
                            memberCount: t.member_count,
                            addedMembers: null === (s = t.added_members) || void 0 === s ? void 0 : s.map(e => ({
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
                        w({
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
                        R.add(t);
                        break;
                    case "CHANNEL_RECIPIENT_ADD":
                    case "CHANNEL_RECIPIENT_REMOVE":
                        let T = E.default.getBasicChannel(t.channel_id);
                        w({
                            type: e,
                            channelId: t.channel_id,
                            user: t.user,
                            nick: t.nick,
                            isMember: null != T
                        });
                        break;
                    case "GUILD_CREATE":
                        if (t.unavailable) w({
                            type: "GUILD_UNAVAILABLE",
                            guildId: t.id
                        });
                        else {
                            let e = N.hydratePreviouslyUnavailableGuild(t);
                            o.default.createGuild(e), w({
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
                        w({
                            type: "GUILD_UPDATE",
                            guild: t
                        }), t.unavailable && w({
                            type: "GUILD_UNAVAILABLE",
                            guildId: t.id
                        });
                        break;
                    case "GUILD_DELETE":
                        w({
                            type: "GUILD_DELETE",
                            guild: t
                        }), t.geo_restricted ? w({
                            type: "GUILD_GEO_RESTRICTED",
                            guildId: t.id,
                            icon: t.icon,
                            name: t.name
                        }) : t.unavailable && w({
                            type: "GUILD_UNAVAILABLE",
                            guildId: t.id
                        });
                        break;
                    case "GUILD_MEMBERS_CHUNK":
                        r.default.Emitter.batched(() => {
                            w({
                                type: "GUILD_MEMBERS_CHUNK",
                                guildId: t.guild_id,
                                members: t.members,
                                notFound: t.not_found
                            }), null != t.presences && t.presences.forEach(e => {
                                let {
                                    user: n,
                                    status: s,
                                    client_status: i,
                                    activities: r,
                                    broadcast: a
                                } = e;
                                return x({
                                    guildId: t.guild_id,
                                    user: n,
                                    status: s,
                                    activities: r,
                                    clientStatus: i,
                                    broadcast: a
                                })
                            }), O.default.flush()
                        });
                        break;
                    case "THREAD_MEMBER_LIST_UPDATE":
                        r.default.Emitter.batched(() => {
                            w({
                                type: "THREAD_MEMBER_LIST_UPDATE",
                                guildId: t.guild_id,
                                threadId: t.thread_id,
                                members: t.members
                            }), null != t.presences && t.presences.forEach(e => {
                                let {
                                    user: n,
                                    status: s,
                                    client_status: i,
                                    activities: r,
                                    broadcast: a
                                } = e;
                                return x({
                                    guildId: t.guild_id,
                                    user: n,
                                    status: s,
                                    activities: r,
                                    clientStatus: i,
                                    broadcast: a
                                })
                            }), O.default.flush()
                        });
                        break;
                    case "GUILD_BAN_ADD":
                    case "GUILD_BAN_REMOVE":
                    case "GUILD_MEMBER_ADD":
                    case "GUILD_MEMBER_UPDATE":
                    case "GUILD_MEMBER_REMOVE":
                        w({
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
                        w({
                            type: e,
                            guildId: t.guild_id,
                            role: t.role
                        });
                        break;
                    case "GUILD_ROLE_DELETE":
                        w({
                            type: "GUILD_ROLE_DELETE",
                            guildId: t.guild_id,
                            roleId: t.role_id,
                            version: t.version
                        });
                        break;
                    case "GUILD_EMOJIS_UPDATE":
                        w({
                            type: "GUILD_EMOJIS_UPDATE",
                            guildId: t.guild_id,
                            emojis: t.emojis
                        });
                        break;
                    case "GUILD_STICKERS_UPDATE":
                        w({
                            type: "GUILD_STICKERS_UPDATE",
                            guildId: t.guild_id,
                            stickers: t.stickers
                        });
                        break;
                    case "GUILD_INTEGRATIONS_UPDATE":
                        w({
                            type: "GUILD_INTEGRATIONS_UPDATE",
                            guildId: t.guild_id
                        });
                        break;
                    case "INTEGRATION_CREATE":
                        w({
                            type: "INTEGRATION_CREATE",
                            application: t.application,
                            guildId: t.guild_id
                        });
                        break;
                    case "INTEGRATION_DELETE":
                        w({
                            type: "INTEGRATION_DELETE",
                            applicationId: t.application_id,
                            guildId: t.guild_id
                        });
                        break;
                    case "USER_UPDATE":
                        w({
                            type: "CURRENT_USER_UPDATE",
                            user: t
                        });
                        break;
                    case "USER_SETTINGS_PROTO_UPDATE":
                        let k = (0, g.b64ToProtoWithType)(t.settings.type, t.settings.proto);
                        if (null == k) break;
                        if ("string" == typeof k) throw console.error("Invalid proto: |".concat(k, "| |").concat(t.settings.proto, "|")), console.error({
                            parsed: k,
                            wire: t.settings.proto,
                            type: t.settings.type
                        }), Error("UserSettingsProto must not be a string");
                        w({
                            type: "USER_SETTINGS_PROTO_UPDATE",
                            settings: {
                                proto: k,
                                type: t.settings.type
                            },
                            partial: t.partial
                        });
                        break;
                    case "USER_GUILD_SETTINGS_UPDATE":
                        w({
                            type: "USER_GUILD_SETTINGS_FULL_UPDATE",
                            userGuildSettings: [t]
                        });
                        break;
                    case "USER_CONNECTIONS_UPDATE":
                        w({
                            type: "USER_CONNECTIONS_UPDATE"
                        });
                        break;
                    case "USER_REQUIRED_ACTION_UPDATE":
                        w({
                            type: "USER_REQUIRED_ACTION_UPDATE",
                            requiredAction: t.required_action
                        });
                        break;
                    case "USER_NOTE_UPDATE":
                        w({
                            type: "USER_NOTE_UPDATE",
                            ...t
                        });
                        break;
                    case "RELATIONSHIP_ADD":
                        w({
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
                        w({
                            type: "RELATIONSHIP_REMOVE",
                            relationship: t
                        });
                        break;
                    case "RELATIONSHIP_UPDATE":
                        w({
                            type: "RELATIONSHIP_UPDATE",
                            relationship: t
                        });
                        break;
                    case "PRESENCE_UPDATE":
                        x({
                            guildId: t.guild_id,
                            user: t.user,
                            status: t.status,
                            activities: t.activities,
                            clientStatus: t.client_status,
                            broadcast: t.broadcast
                        });
                        break;
                    case "PRESENCES_REPLACE":
                        w({
                            type: "PRESENCES_REPLACE",
                            presences: t
                        });
                        break;
                    case "SESSIONS_REPLACE":
                        w({
                            type: "SESSIONS_REPLACE",
                            sessions: G(t)
                        });
                        break;
                    case "VOICE_STATE_UPDATE":
                        null != t.member && L(t.guild_id, t.member.user, t.member), w({
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
                                requestToSpeakTimestamp: null !== (a = t.request_to_speak_timestamp) && void 0 !== a ? a : null,
                                oldChannelId: S.default.getUserVoiceChannelId(t.guild_id, t.user_id)
                            }]
                        });
                        break;
                    case "LOBBY_VOICE_STATE_UPDATE":
                        w({
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
                        w({
                            type: "VOICE_SERVER_UPDATE",
                            guildId: t.guild_id,
                            channelId: t.channel_id,
                            endpoint: t.endpoint,
                            token: t.token
                        });
                        break;
                    case "LOBBY_VOICE_SERVER_UPDATE":
                        w({
                            type: "LOBBY_VOICE_SERVER_UPDATE",
                            lobbyId: t.lobby_id,
                            endpoint: t.endpoint,
                            token: t.token
                        });
                        break;
                    case "CALL_CREATE":
                        w({
                            type: "CALL_CREATE",
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            embeddedActivities: t.embedded_activities,
                            region: t.region,
                            ringing: t.ringing
                        });
                        let M = t.voice_states;
                        null != M && w({
                            type: "VOICE_STATE_UPDATES",
                            voiceStates: M.map(e => {
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
                        w({
                            type: "CALL_UPDATE",
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            region: t.region,
                            ringing: t.ringing
                        });
                        break;
                    case "CALL_DELETE":
                        w({
                            type: "CALL_DELETE",
                            channelId: t.channel_id,
                            unavailable: t.unavailable
                        });
                        break;
                    case "OAUTH2_TOKEN_REVOKE":
                        w({
                            type: "OAUTH2_TOKEN_REVOKE",
                            accessToken: t.access_token
                        });
                        break;
                    case "RECENT_MENTION_DELETE":
                        w({
                            type: "RECENT_MENTION_DELETE",
                            id: t.message_id
                        });
                        break;
                    case "FRIEND_SUGGESTION_CREATE":
                        w({
                            type: "FRIEND_SUGGESTION_CREATE",
                            suggestion: t
                        });
                        break;
                    case "FRIEND_SUGGESTION_DELETE":
                        w({
                            type: "FRIEND_SUGGESTION_DELETE",
                            suggestedUserId: t.suggested_user_id
                        });
                        break;
                    case "WEBHOOKS_UPDATE":
                        w({
                            type: "WEBHOOKS_UPDATE",
                            guildId: t.guild_id,
                            channelId: t.channel_id
                        });
                        break;
                    case "MESSAGE_REACTION_ADD":
                    case "MESSAGE_REACTION_REMOVE":
                        w({
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
                        w({
                            type: "MESSAGE_REACTION_REMOVE_ALL",
                            channelId: t.channel_id,
                            messageId: t.message_id
                        });
                        break;
                    case "MESSAGE_REACTION_REMOVE_EMOJI":
                        w({
                            type: "MESSAGE_REACTION_REMOVE_EMOJI",
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            emoji: t.emoji
                        });
                        break;
                    case "MESSAGE_REACTION_ADD_MANY":
                        w({
                            type: "MESSAGE_REACTION_ADD_MANY",
                            channelId: t.channel_id,
                            messageId: t.message_id,
                            reactions: t.reactions
                        });
                        break;
                    case "PAYMENT_UPDATE":
                        w({
                            type: "PAYMENT_UPDATE",
                            payment: t
                        });
                        break;
                    case "ENTITLEMENT_CREATE":
                    case "ENTITLEMENT_UPDATE":
                    case "ENTITLEMENT_DELETE":
                        w({
                            type: e,
                            entitlement: t
                        });
                        break;
                    case "USER_PAYMENT_SOURCES_UPDATE":
                        y.default.hasLayers() && (n("850068").fetchPaymentSources(), d.fetchSubscriptionPlansBySKUs(I.default.getFetchedSKUIDs()));
                        break;
                    case "USER_SUBSCRIPTIONS_UPDATE":
                        u.fetchCurrentUser(), y.default.hasLayers() && n("850068").fetchSubscriptions();
                        break;
                    case "USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE":
                        w({
                            type: "GUILD_BOOST_SLOT_CREATE",
                            guildBoostSlot: h.default.createFromServer(t, A.default.getSubscriptionById(t.subscription_id))
                        });
                        break;
                    case "USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE":
                        w({
                            type: "GUILD_BOOST_SLOT_UPDATE",
                            guildBoostSlot: h.default.createFromServer(t, A.default.getSubscriptionById(t.subscription_id))
                        });
                        break;
                    case "BILLING_POPUP_BRIDGE_CALLBACK":
                        w({
                            type: "BILLING_POPUP_BRIDGE_CALLBACK",
                            paymentSourceType: t.payment_source_type,
                            state: t.state,
                            path: t.path,
                            query: t.query
                        });
                        break;
                    case "USER_PAYMENT_BROWSER_CHECKOUT_DONE":
                        w({
                            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
                            loadId: t.load_id
                        });
                        break;
                    case "USER_PAYMENT_CLIENT_ADD":
                        (0, D.getPurchaseTokenHash)().then(e => {
                            let n = t.purchase_token_hash;
                            n === e && w({
                                type: "USER_PAYMENT_CLIENT_ADD",
                                purchaseTokenHash: n,
                                expiresAt: t.expires_at
                            })
                        });
                        break;
                    case "GUILD_MEMBER_LIST_UPDATE":
                        r.default.Emitter.batched(() => {
                            let e = e => {
                                if (null == e.member) return;
                                let {
                                    member: n
                                } = e;
                                if (L(t.guild_id, n.user, n), null == n.presence) return;
                                let {
                                    presence: s
                                } = n;
                                x({
                                    guildId: t.guild_id,
                                    user: s.user,
                                    status: s.status,
                                    activities: s.activities,
                                    clientStatus: s.client_status,
                                    broadcast: s.broadcast
                                })
                            };
                            t.ops.forEach(t => {
                                let {
                                    op: n,
                                    items: s,
                                    item: i
                                } = t;
                                switch (n) {
                                    case "SYNC":
                                        s.forEach(e);
                                        break;
                                    case "UPDATE":
                                    case "INSERT":
                                        e(i)
                                }
                            }), O.default.flush(), w({
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
                        w({
                            type: "LOBBY_CREATE",
                            lobby: t
                        }), t.voice_states.forEach(e => {
                            w({
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
                        w({
                            type: "LOBBY_UPDATE",
                            lobby: t
                        });
                        break;
                    case "LOBBY_DELETE":
                        w({
                            type: "LOBBY_DELETE",
                            lobbyId: t.id,
                            reason: t.reason
                        });
                        break;
                    case "LOBBY_MEMBER_CONNECT":
                    case "LOBBY_MEMBER_UPDATE":
                    case "LOBBY_MEMBER_DISCONNECT":
                        w({
                            type: e,
                            lobbyId: t.lobby_id,
                            member: t.member
                        });
                        break;
                    case "LOBBY_MESSAGE":
                        w({
                            type: "LOBBY_MESSAGE",
                            lobbyId: t.lobby_id,
                            senderId: t.sender_id,
                            data: t.data
                        });
                        break;
                    case "GIFT_CODE_UPDATE":
                        w({
                            type: "GIFT_CODE_UPDATE",
                            uses: t.uses,
                            code: t.code
                        });
                        break;
                    case "GIFT_CODE_CREATE":
                        w({
                            type: "GIFT_CODE_CREATE",
                            giftCode: t
                        });
                        break;
                    case "USER_ACHIEVEMENT_UPDATE":
                        w({
                            type: "USER_ACHIEVEMENT_UPDATE",
                            userAchievement: t
                        });
                        break;
                    case "LIBRARY_APPLICATION_UPDATE":
                        w({
                            type: "LIBRARY_APPLICATION_UPDATE",
                            libraryApplication: t
                        });
                        break;
                    case "STREAM_CREATE":
                        w({
                            type: "STREAM_CREATE",
                            streamKey: t.stream_key,
                            region: t.region,
                            viewerIds: t.viewer_ids,
                            rtcServerId: t.rtc_server_id,
                            paused: t.paused
                        });
                        break;
                    case "STREAM_SERVER_UPDATE":
                        w({
                            type: "STREAM_SERVER_UPDATE",
                            streamKey: t.stream_key,
                            endpoint: t.endpoint,
                            token: t.token
                        });
                        break;
                    case "STREAM_UPDATE":
                        w({
                            type: "STREAM_UPDATE",
                            streamKey: t.stream_key,
                            region: t.region,
                            viewerIds: t.viewer_ids,
                            paused: t.paused
                        });
                        break;
                    case "STREAM_DELETE":
                        w({
                            type: "STREAM_DELETE",
                            streamKey: t.stream_key,
                            unavailable: t.unavailable,
                            reason: t.reason
                        });
                        break;
                    case "GENERIC_PUSH_NOTIFICATION_SENT":
                        w({
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
                        w({
                            type: "NOTIFICATION_CENTER_ITEM_CREATE",
                            item: t
                        });
                        break;
                    case "NOTIFICATION_CENTER_ITEM_DELETE":
                        w({
                            type: "NOTIFICATION_CENTER_ITEM_DELETE",
                            id: t.id
                        });
                        break;
                    case "NOTIFICATION_CENTER_ITEMS_ACK":
                        w({
                            type: "NOTIFICATION_CENTER_ITEMS_ACK",
                            ids: [t.id],
                            optimistic: !1
                        });
                        break;
                    case "NOTIFICATION_CENTER_ITEM_COMPLETED":
                        w({
                            type: "NOTIFICATION_CENTER_ITEM_COMPLETED",
                            item_enum: t.item_enum
                        });
                        break;
                    case "APPLICATION_COMMAND_PERMISSIONS_UPDATE":
                        w({
                            type: e,
                            guildId: t.guild_id
                        });
                        break;
                    case "GUILD_APPLICATION_COMMAND_INDEX_UPDATE":
                        w({
                            type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE",
                            guildId: t.guild_id,
                            version: t.version
                        });
                        break;
                    case "GUILD_JOIN_REQUEST_CREATE":
                        w({
                            type: "GUILD_JOIN_REQUEST_CREATE",
                            request: t.request,
                            status: t.status,
                            guildId: t.guild_id
                        });
                        break;
                    case "GUILD_JOIN_REQUEST_UPDATE":
                        w({
                            type: "GUILD_JOIN_REQUEST_UPDATE",
                            request: t.request,
                            status: t.status,
                            guildId: t.guild_id
                        });
                        break;
                    case "GUILD_JOIN_REQUEST_DELETE":
                        w({
                            type: "GUILD_JOIN_REQUEST_DELETE",
                            id: t.id,
                            userId: t.user_id,
                            guildId: t.guild_id
                        });
                        break;
                    case "INTERACTION_CREATE":
                        w({
                            type: "INTERACTION_CREATE",
                            interactionId: t.id,
                            nonce: t.nonce
                        });
                        break;
                    case "INTERACTION_SUCCESS":
                        w({
                            type: "INTERACTION_SUCCESS",
                            interactionId: t.id,
                            nonce: t.nonce
                        });
                        break;
                    case "INTERACTION_FAILURE":
                        w({
                            type: "INTERACTION_FAILURE",
                            nonce: t.nonce
                        });
                        break;
                    case "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE":
                        w({
                            type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE",
                            choices: t.choices,
                            nonce: t.nonce
                        });
                        break;
                    case "INTERACTION_MODAL_CREATE":
                        w({
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
                        w({
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
                        w({
                            type: "STAGE_INSTANCE_CREATE",
                            instance: t
                        });
                        break;
                    case "STAGE_INSTANCE_UPDATE":
                        w({
                            type: "STAGE_INSTANCE_UPDATE",
                            instance: t
                        });
                        break;
                    case "STAGE_INSTANCE_DELETE":
                        w({
                            type: "STAGE_INSTANCE_DELETE",
                            instance: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_CREATE":
                        w({
                            type: "GUILD_SCHEDULED_EVENT_CREATE",
                            guildScheduledEvent: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_UPDATE":
                        w({
                            type: "GUILD_SCHEDULED_EVENT_UPDATE",
                            guildScheduledEvent: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_DELETE":
                        w({
                            type: "GUILD_SCHEDULED_EVENT_DELETE",
                            guildScheduledEvent: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE":
                        w({
                            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE",
                            eventException: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE":
                        w({
                            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE",
                            eventException: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE":
                        w({
                            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE",
                            eventException: t
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE":
                        w({
                            type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE",
                            eventId: t.event_id
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_USER_ADD":
                        w({
                            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
                            userId: t.user_id,
                            guildId: t.guild_id,
                            guildEventId: t.guild_scheduled_event_id,
                            guildEventExceptionId: t.guild_scheduled_event_exception_id,
                            response: t.response
                        });
                        break;
                    case "GUILD_SCHEDULED_EVENT_USER_REMOVE":
                        w({
                            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
                            userId: t.user_id,
                            guildId: t.guild_id,
                            guildEventId: t.guild_scheduled_event_id,
                            guildEventExceptionId: t.guild_scheduled_event_exception_id,
                            response: t.response
                        });
                        break;
                    case "GUILD_DIRECTORY_ENTRY_CREATE":
                        w({
                            type: "GUILD_DIRECTORY_ENTRY_CREATE",
                            channelId: t.directory_channel_id,
                            entry: t
                        });
                        break;
                    case "GUILD_DIRECTORY_ENTRY_UPDATE":
                        w({
                            type: "GUILD_DIRECTORY_ENTRY_UPDATE",
                            channelId: t.directory_channel_id,
                            entry: t
                        });
                        break;
                    case "GUILD_DIRECTORY_ENTRY_DELETE":
                        w({
                            type: "GUILD_DIRECTORY_ENTRY_DELETE",
                            channelId: t.directory_channel_id,
                            guildId: t.entity_id
                        });
                        break;
                    case "AUTO_MODERATION_MENTION_RAID_DETECTION":
                        w({
                            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
                            guildId: t.guild_id,
                            decisionId: t.decision_id,
                            suspiciousMentionActivityUntil: t.suspicious_mention_activity_until
                        });
                        break;
                    case "VOICE_CHANNEL_EFFECT_SEND":
                        w({
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
                        w({
                            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
                            sound: {
                                guildId: t.guild_id,
                                name: t.name,
                                soundId: t.sound_id,
                                user: new v.default(t.user),
                                userId: t.user_id,
                                volume: t.volume,
                                emojiId: t.emoji_id,
                                emojiName: t.emoji_name,
                                available: t.available
                            }
                        });
                        break;
                    case "GUILD_SOUNDBOARD_SOUND_UPDATE":
                        w({
                            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
                            sound: {
                                guildId: t.guild_id,
                                name: t.name,
                                soundId: t.sound_id,
                                user: new v.default(t.user),
                                userId: t.user_id,
                                volume: t.volume,
                                emojiId: t.emoji_id,
                                emojiName: t.emoji_name,
                                available: t.available
                            }
                        });
                        break;
                    case "GUILD_SOUNDBOARD_SOUND_DELETE":
                        w({
                            type: "GUILD_SOUNDBOARD_SOUND_DELETE",
                            guildId: t.guild_id,
                            soundId: t.sound_id
                        });
                        break;
                    case "GUILD_SOUNDBOARD_SOUNDS_UPDATE":
                        w({
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
                        w({
                            type: "EMBEDDED_ACTIVITY_INBOUND_UPDATE",
                            guildId: t.guild_id,
                            channelId: t.channel_id,
                            embeddedActivity: t.embedded_activity,
                            connections: t.connections,
                            updateCode: t.update_code
                        });
                        break;
                    case "EMBEDDED_ACTIVITY_UPDATE_V2":
                        w({
                            type: "EMBEDDED_ACTIVITY_INBOUND_UPDATE_V2",
                            activitySessionId: t.activity_session_id,
                            applicationId: t.application_id,
                            channelId: t.channel_id,
                            guildId: t.guild_id,
                            instanceId: t.instance_id,
                            userIds: t.user_ids
                        });
                        break;
                    case "AUTH_SESSION_CHANGE":
                        w({
                            type: "AUTH_SESSION_CHANGE",
                            authSessionIdHash: t.auth_session_id_hash
                        });
                        break;
                    case "USER_CONNECTIONS_LINK_CALLBACK":
                        w({
                            type: "USER_CONNECTIONS_LINK_CALLBACK",
                            provider: t.provider,
                            callbackCode: t.callback_code,
                            callbackState: t.callback_state
                        });
                        break;
                    case "DELETED_ENTITY_IDS":
                        w({
                            type: "DELETED_ENTITY_IDS",
                            ...t
                        });
                        break;
                    case "CONSOLE_COMMAND_UPDATE":
                        w({
                            type: "CONSOLE_COMMAND_UPDATE",
                            id: t.id,
                            result: t.result,
                            error: t.error
                        });
                        break;
                    case "PASSIVE_UPDATE_V1":
                        w({
                            type: "PASSIVE_UPDATE_V1",
                            guildId: t.guild_id,
                            members: t.members,
                            channels: null === (l = t.channels) || void 0 === l ? void 0 : l.map(e => ({
                                id: e.id,
                                lastMessageId: e.last_message_id,
                                lastPinTimestamp: e.last_pin_timestamp
                            })),
                            voiceStates: null === (p = t.voice_states) || void 0 === p ? void 0 : p.map(e => {
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
                        w({
                            type: "PRIVATE_CHANNEL_INTEGRATION_CREATE",
                            integration: t
                        });
                        break;
                    case "PRIVATE_CHANNEL_INTEGRATION_UPDATE":
                        w({
                            type: "PRIVATE_CHANNEL_INTEGRATION_UPDATE",
                            integration: t
                        });
                        break;
                    case "PRIVATE_CHANNEL_INTEGRATION_DELETE":
                        w({
                            type: "PRIVATE_CHANNEL_INTEGRATION_DELETE",
                            channelId: t.channel_id,
                            applicationId: t.application_id
                        });
                        break;
                    case "CREATOR_MONETIZATION_RESTRICTIONS_UPDATE":
                        w({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
                            guildId: t.guild_id,
                            restrictions: t.restrictions
                        });
                        break;
                    case "BILLING_REFERRAL_TRIAL_OFFER_UPDATE":
                        w({
                            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
                            userTrialOfferId: t.user_trial_offer_id,
                            recipientId: t.recipient_id
                        });
                        break;
                    case "SPEED_TEST_CREATE":
                        w({
                            type: "SPEED_TEST_CREATE",
                            streamKey: t.stream_key,
                            region: t.region,
                            viewerIds: t.viewer_ids,
                            rtcServerId: t.rtc_server_id,
                            paused: t.paused
                        });
                        break;
                    case "SPEED_TEST_SERVER_UPDATE":
                        w({
                            type: "SPEED_TEST_SERVER_UPDATE",
                            streamKey: t.stream_key,
                            endpoint: t.endpoint,
                            token: t.token
                        });
                        break;
                    case "SPEED_TEST_UPDATE":
                        w({
                            type: "SPEED_TEST_UPDATE",
                            streamKey: t.stream_key,
                            region: t.region,
                            viewerIds: t.viewer_ids,
                            paused: t.paused
                        });
                        break;
                    case "SPEED_TEST_DELETE":
                        w({
                            type: "SPEED_TEST_DELETE",
                            streamKey: t.stream_key,
                            unavailable: t.unavailable,
                            reason: t.reason
                        });
                        break;
                    case "LAST_MESSAGES":
                        w({
                            type: "MESSAGE_PREVIEWS_LOADED",
                            guildId: t.guild_id,
                            messages: t.messages
                        });
                        break;
                    case "AUTHENTICATOR_UPDATE":
                        w({
                            type: "AUTHENTICATOR_UPDATE",
                            credential: t
                        });
                        break;
                    case "AUTHENTICATOR_CREATE":
                        w({
                            type: "AUTHENTICATOR_CREATE",
                            credential: t
                        });
                        break;
                    case "AUTHENTICATOR_DELETE":
                        w({
                            type: "AUTHENTICATOR_DELETE",
                            credential: t
                        });
                        break;
                    case "INVENTORY_PACK_UPDATE":
                        w({
                            type: "INVENTORY_PACK_UPDATE",
                            pack: f.default.fromServer(t)
                        });
                        break;
                    case "INVENTORY_PACK_DELETE":
                        w({
                            type: "INVENTORY_PACK_DELETE",
                            pack: f.default.fromServer(t)
                        });
                        break;
                    case "NOTIFICATION_SETTINGS_UPDATE":
                        w({
                            type: "NOTIFICATION_SETTINGS_UPDATE",
                            settings: {
                                flags: t.flags
                            }
                        });
                        break;
                    case "GAME_INVITE_CREATE":
                        w({
                            type: "GAME_INVITE_CREATE",
                            gameInvite: t
                        });
                        break;
                    case "GAME_INVITE_DELETE":
                        w({
                            type: "GAME_INVITE_DELETE",
                            inviteId: t.invite_id
                        });
                        break;
                    case "GAME_INVITE_DELETE_MANY":
                        w({
                            type: "GAME_INVITE_DELETE_MANY",
                            inviteIds: t.invite_ids
                        });
                        break;
                    case "PREMIUM_MARKETING_PREVIEW":
                        w({
                            type: "PREMIUM_MARKETING_PREVIEW",
                            properties: t.properties
                        });
                        break;
                    case "USER_APPLICATION_UPDATE":
                        w({
                            type: "USER_APPLICATION_UPDATE",
                            applicationId: t.application_id
                        });
                        break;
                    case "USER_APPLICATION_REMOVE":
                        w({
                            type: "USER_APPLICATION_REMOVE",
                            applicationId: t.application_id
                        })
                }
            }

            function w(e) {
                a.default.dispatch(e).catch(t => b.socket.resetSocketOnError(t, e.type))
            }

            function L(e, t, n) {
                let {
                    roles: s,
                    nick: r,
                    avatar: a,
                    flags: o,
                    premium_since: d,
                    pending: u,
                    joined_at: l,
                    communication_disabled_until: f,
                    unusual_dm_activity_until: _
                } = n, c = p.default.getMember(e, t.id);
                (!(null != c && c.nick === r && c.avatar === a && i.isEqual(c.roles, s)) || c.premiumSince !== d || c.isPending !== u || c.joinedAt !== l || c.communicationDisabledUntil !== f || c.flags !== o || c.unusualDMActivityUntil !== _) && w({
                    type: "GUILD_MEMBER_ADD",
                    guildId: e,
                    user: t,
                    roles: s,
                    nick: r,
                    avatar: a,
                    premiumSince: d,
                    isPending: u,
                    joinedAt: l,
                    communicationDisabledUntil: f,
                    unusualDMActivityUntil: _,
                    flags: o
                })
            }

            function U(e) {
                let {
                    member: t,
                    mentions: n,
                    author: s,
                    guild_id: i
                } = e;
                null != t && L(i, s, t), null != n && n.forEach(e => {
                    if (null != e.member) {
                        let {
                            member: t
                        } = e;
                        delete e.member, L(i, e, t)
                    }
                })
            }

            function G(e) {
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

            function F() {
                b.socket.isSessionEstablished() && T.default.getPendingLobbies().forEach(e => {
                    b.socket.lobbyConnect(e.id, e.secret)
                })
            }

            function x(e) {
                let {
                    guildId: t,
                    user: n,
                    status: s,
                    activities: i,
                    clientStatus: r,
                    broadcast: a
                } = e;
                k.add({
                    guildId: t,
                    user: n,
                    status: s,
                    clientStatus: r,
                    activities: i,
                    broadcast: a
                })
            }