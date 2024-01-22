"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("424973"), n("702976"), n("70102");
var i = n("917351"),
  s = n.n(i);
n("576863");
var r = n("446674"),
  a = n("913144"),
  o = n("851387"),
  l = n("775433"),
  u = n("327037"),
  d = n("605250"),
  c = n("871336"),
  f = n("25932"),
  _ = n("410912"),
  h = n("116949"),
  g = n("233069"),
  m = n("522308"),
  E = n("766274"),
  p = n("42203"),
  v = n("26989"),
  S = n("778588"),
  T = n("260320"),
  I = n("697218"),
  C = n("800762"),
  A = n("10514"),
  y = n("521012"),
  N = n("224400"),
  R = n("390946"),
  O = n("509065"),
  D = n("518916");
let P = new d.default("ConnectionStore"),
  b = new O.default(D.socket, (e, t) => {
    var n;
    e = null != e ? e : {
      type: "CHANNEL_UPDATES",
      channels: []
    };
    let i = (0, g.createChannelRecordFromServer)(t),
      s = p.default.getChannel(t.id),
      r = null == s ? void 0 : s.merge({
        ...i,
        recipients: s.recipients,
        bitrate: null !== (n = i.bitrate) && void 0 !== n ? n : s.bitrate
      });
    return e.channels.push(null != r ? r : i), e
  }, e => "CHANNEL_UPDATE" !== e),
  L = new O.default(D.socket, (e, t) => ((e = null == e ? {
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
  M = new O.default(D.socket, (e, t) => ((e = null == e ? {
    type: "PRESENCE_UPDATES",
    updates: []
  } : e).updates.push(t), e), e => "PRESENCE_UPDATE" !== e);

function U(e, t) {
  var i, a, d, v;
  switch (O.default.flush(e, t), e) {
    case "INITIAL_GUILD":
      _.default.initialGuild.measure(() => {
        r.default.Emitter.batched(() => {
          let e = R.hydrateInitialGuild(t, D.socket.identifyStartTime);
          null != I.default.getCurrentUser() && (k({
            type: "GUILD_CREATE",
            guild: e
          }), k({
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
      _.default.readySupplemental.measure(() => {
        r.default.Emitter.batched(() => {
          var e, n;
          t = _.default.hydrateReadySupplemental.measure(() => R.hydrateReadySupplementalPayload(t, D.socket.identifyStartTime));
          let i = e => e.map(e => ({
              user: e.user,
              status: e.status,
              clientStatus: e.client_status,
              activities: e.activities,
              broadcast: e.broadcast
            })),
            s = t.guilds.filter(e => !0 !== e.unavailable);
          s.forEach(e => {
            e.presences = i(e.presences || [])
          });
          let r = t.presences ? i(t.presences) : [],
            a = (null !== (e = t.lazy_private_channels) && void 0 !== e ? e : []).map(e => (0, g.createChannelRecordFromServer)(e)),
            o = null !== (n = t.game_invites) && void 0 !== n ? n : [];
          _.default.dispatchReadySupplemental.measure(() => {
            k({
              type: "CONNECTION_OPEN_SUPPLEMENTAL",
              guilds: s,
              presences: r,
              lazyPrivateChannels: a,
              gameInvites: o
            })
          });
          let l = [];
          s.forEach(e => {
            e.voice_states.forEach(t => {
              var n;
              l.push({
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
          }), k({
            type: "VOICE_STATE_UPDATES",
            voiceStates: l,
            initial: !0
          }), D.localVoiceState.update(), D.localLobbyVoiceStates.update({}, !0)
        })
      }), setTimeout(() => k({
        type: "POST_CONNECTION_OPEN"
      }), 2e3);
      break;
    case "READY":
      if (t.user.bot) {
        k({
          type: "LOGOUT"
        });
        return
      }
      _.default.ready.measure(() => {
        r.default.Emitter.batched(() => {
          t = _.default.hydrateReady.measure(() => R.hydrateReadyPayloadPrioritized(t, D.socket.identifyStartTime));
          let e = t.private_channels.map(e => (0, g.createChannelRecordFromServer)(e)),
            n = t.guilds.filter(e => !0 === e.unavailable && !0 !== e.geo_restricted).map(e => e.id),
            i = t.guilds.filter(e => !0 !== e.unavailable),
            s = t.guilds.filter(e => !0 === e.geo_restricted);
          i.forEach(e => {
            e.presences = []
          });
          let r = null == t.user_settings_proto ? void 0 : (0, h.b64ToPreloadedUserSettingsProto)(t.user_settings_proto);
          _.default.dispatchReady.measure(() => {
            var a;
            k({
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
              geoRestrictedGuilds: s
            })
          }), null != t.auth_token && k({
            type: "UPDATE_TOKEN",
            token: t.auth_token,
            userId: t.user.id
          }), D.localPresenceState.update(), D.localVoiceState.update(), D.localLobbyVoiceStates.update(), F()
        })
      });
      break;
    case "RESUMED":
      D.localPresenceState.forceUpdate(), D.localVoiceState.forceUpdate(), D.localLobbyVoiceStates.forceUpdate(), F(), k({
        type: "CONNECTION_RESUMED"
      });
      break;
    case "TYPING_START":
      null != t.member && w(t.guild_id, t.member.user, t.member), k({
        type: "TYPING_START",
        channelId: t.channel_id,
        userId: t.user_id
      });
      break;
    case "ACTIVITY_START":
      k({
        type: "ACTIVITY_START",
        userId: t.user_id,
        activity: t.activity
      });
      break;
    case "ACTIVITY_USER_ACTION":
      k({
        type: "ACTIVITY_USER_ACTION",
        actionType: t.action_type,
        user: t.user,
        applicationId: t.application_id,
        channelId: t.channel_id,
        messageId: t.message_id
      });
      break;
    case "MESSAGE_CREATE":
      V(t), null != t.author && k({
        type: "MESSAGE_CREATE",
        guildId: t.guild_id,
        channelId: t.channel_id,
        message: t,
        optimistic: !1,
        isPushNotification: !1
      });
      break;
    case "MESSAGE_UPDATE":
      V(t), k({
        type: "MESSAGE_UPDATE",
        guildId: t.guild_id,
        message: t
      });
      break;
    case "MESSAGE_DELETE":
      k({
        type: "MESSAGE_DELETE",
        guildId: t.guild_id,
        id: t.id,
        channelId: t.channel_id
      });
      break;
    case "MESSAGE_DELETE_BULK":
      k({
        type: "MESSAGE_DELETE_BULK",
        guildId: t.guild_id,
        ids: t.ids,
        channelId: t.channel_id
      });
      break;
    case "MESSAGE_ACK":
      k({
        type: "MESSAGE_ACK",
        channelId: t.channel_id,
        messageId: t.message_id,
        manual: t.manual,
        newMentionCount: t.mention_count,
        version: t.version
      });
      break;
    case "GUILD_FEATURE_ACK":
      k({
        type: "GUILD_FEATURE_ACK",
        id: t.resource_id,
        ackType: t.ack_type,
        ackedId: t.entity_id
      });
      break;
    case "USER_NON_CHANNEL_ACK":
      k({
        type: "USER_NON_CHANNEL_ACK",
        ackType: t.ack_type,
        ackedId: t.entity_id
      });
      break;
    case "CHANNEL_PINS_ACK":
      k({
        type: "CHANNEL_PINS_ACK",
        channelId: t.channel_id,
        timestamp: t.timestamp,
        version: t.version
      });
      break;
    case "CHANNEL_PINS_UPDATE":
      k({
        type: "CHANNEL_PINS_UPDATE",
        channelId: t.channel_id,
        lastPinTimestamp: t.last_pin_timestamp
      });
      break;
    case "CHANNEL_CREATE":
    case "CHANNEL_DELETE":
      k({
        type: e,
        channel: (0, g.createChannelRecordFromServer)(t)
      });
      break;
    case "VOICE_CHANNEL_STATUS_UPDATE":
      k({
        type: e,
        id: t.id,
        guildId: t.guild_id,
        status: t.status
      });
      break;
    case "CHANNEL_STATUSES":
      k({
        type: e,
        guildId: t.guild_id,
        channels: t.channels
      });
      break;
    case "CHANNEL_UPDATE":
      b.add(t);
      break;
    case "THREAD_CREATE":
    case "THREAD_UPDATE":
    case "THREAD_DELETE": {
      let {
        newly_created: n,
        ...i
      } = t;
      k({
        type: e,
        isNewlyCreated: n,
        channel: (0, g.createChannelRecordFromServer)(i)
      });
      break
    }
    case "THREAD_LIST_SYNC":
      k({
        type: "THREAD_LIST_SYNC",
        guildId: t.guild_id,
        threads: t.threads.map(e => {
          let t = p.default.getChannel(e.parent_id);
          return null != t && (e.nsfw = t.nsfw, e.parentChannelThreadType = t.type), (0, g.createChannelRecordFromServer)(e)
        }),
        mostRecentMessages: t.most_recent_messages,
        members: t.members ? s.map(t.members, f.default) : void 0,
        channelIds: t.channel_ids
      });
      break;
    case "THREAD_MEMBER_UPDATE":
      k({
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
      k({
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
      k({
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
      L.add(t);
      break;
    case "CHANNEL_RECIPIENT_ADD":
    case "CHANNEL_RECIPIENT_REMOVE":
      let T = p.default.getBasicChannel(t.channel_id);
      k({
        type: e,
        channelId: t.channel_id,
        user: t.user,
        nick: t.nick,
        isMember: null != T
      });
      break;
    case "GUILD_CREATE":
      if (t.unavailable) k({
        type: "GUILD_UNAVAILABLE",
        guildId: t.id
      });
      else {
        let e = R.hydratePreviouslyUnavailableGuild(t);
        o.default.createGuild(e), k({
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
      k({
        type: "GUILD_UPDATE",
        guild: t
      }), t.unavailable && k({
        type: "GUILD_UNAVAILABLE",
        guildId: t.id
      });
      break;
    case "GUILD_DELETE":
      k({
        type: "GUILD_DELETE",
        guild: t
      }), t.geo_restricted ? k({
        type: "GUILD_GEO_RESTRICTED",
        guildId: t.id,
        icon: t.icon,
        name: t.name
      }) : t.unavailable && k({
        type: "GUILD_UNAVAILABLE",
        guildId: t.id
      });
      break;
    case "GUILD_MEMBERS_CHUNK":
      r.default.Emitter.batched(() => {
        k({
          type: "GUILD_MEMBERS_CHUNK",
          guildId: t.guild_id,
          members: t.members,
          notFound: t.not_found
        }), null != t.presences && t.presences.forEach(e => {
          let {
            user: n,
            status: i,
            client_status: s,
            activities: r,
            broadcast: a
          } = e;
          return x({
            guildId: t.guild_id,
            user: n,
            status: i,
            activities: r,
            clientStatus: s,
            broadcast: a
          })
        }), O.default.flush()
      });
      break;
    case "THREAD_MEMBER_LIST_UPDATE":
      r.default.Emitter.batched(() => {
        k({
          type: "THREAD_MEMBER_LIST_UPDATE",
          guildId: t.guild_id,
          threadId: t.thread_id,
          members: t.members
        }), null != t.presences && t.presences.forEach(e => {
          let {
            user: n,
            status: i,
            client_status: s,
            activities: r,
            broadcast: a
          } = e;
          return x({
            guildId: t.guild_id,
            user: n,
            status: i,
            activities: r,
            clientStatus: s,
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
      k({
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
      k({
        type: e,
        guildId: t.guild_id,
        role: t.role
      });
      break;
    case "GUILD_ROLE_DELETE":
      k({
        type: "GUILD_ROLE_DELETE",
        guildId: t.guild_id,
        roleId: t.role_id,
        version: t.version
      });
      break;
    case "GUILD_EMOJIS_UPDATE":
      k({
        type: "GUILD_EMOJIS_UPDATE",
        guildId: t.guild_id,
        emojis: t.emojis
      });
      break;
    case "GUILD_STICKERS_UPDATE":
      k({
        type: "GUILD_STICKERS_UPDATE",
        guildId: t.guild_id,
        stickers: t.stickers
      });
      break;
    case "GUILD_INTEGRATIONS_UPDATE":
      k({
        type: "GUILD_INTEGRATIONS_UPDATE",
        guildId: t.guild_id
      });
      break;
    case "INTEGRATION_CREATE":
      k({
        type: "INTEGRATION_CREATE",
        application: t.application,
        guildId: t.guild_id
      });
      break;
    case "INTEGRATION_DELETE":
      k({
        type: "INTEGRATION_DELETE",
        applicationId: t.application_id,
        guildId: t.guild_id
      });
      break;
    case "USER_UPDATE":
      k({
        type: "CURRENT_USER_UPDATE",
        user: t
      });
      break;
    case "USER_SETTINGS_PROTO_UPDATE":
      let M = (0, h.b64ToProtoWithType)(t.settings.type, t.settings.proto);
      if (null == M) break;
      if ("string" == typeof M) throw console.error("Invalid proto: |".concat(M, "| |").concat(t.settings.proto, "|")), console.error({
        parsed: M,
        wire: t.settings.proto,
        type: t.settings.type
      }), Error("UserSettingsProto must not be a string");
      k({
        type: "USER_SETTINGS_PROTO_UPDATE",
        settings: {
          proto: M,
          type: t.settings.type
        },
        partial: t.partial
      });
      break;
    case "USER_GUILD_SETTINGS_UPDATE":
      k({
        type: "USER_GUILD_SETTINGS_FULL_UPDATE",
        userGuildSettings: [t]
      });
      break;
    case "USER_CONNECTIONS_UPDATE":
      k({
        type: "USER_CONNECTIONS_UPDATE"
      });
      break;
    case "USER_REQUIRED_ACTION_UPDATE":
      k({
        type: "USER_REQUIRED_ACTION_UPDATE",
        requiredAction: t.required_action
      });
      break;
    case "USER_NOTE_UPDATE":
      k({
        type: "USER_NOTE_UPDATE",
        ...t
      });
      break;
    case "RELATIONSHIP_ADD":
      k({
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
      k({
        type: "RELATIONSHIP_REMOVE",
        relationship: t
      });
      break;
    case "RELATIONSHIP_UPDATE":
      k({
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
      k({
        type: "PRESENCES_REPLACE",
        presences: t
      });
      break;
    case "SESSIONS_REPLACE":
      k({
        type: "SESSIONS_REPLACE",
        sessions: G(t)
      });
      break;
    case "VOICE_STATE_UPDATE":
      null != t.member && w(t.guild_id, t.member.user, t.member), k({
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
          oldChannelId: C.default.getUserVoiceChannelId(t.guild_id, t.user_id)
        }]
      });
      break;
    case "LOBBY_VOICE_STATE_UPDATE":
      k({
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
      k({
        type: "VOICE_SERVER_UPDATE",
        guildId: t.guild_id,
        channelId: t.channel_id,
        endpoint: t.endpoint,
        token: t.token
      });
      break;
    case "LOBBY_VOICE_SERVER_UPDATE":
      k({
        type: "LOBBY_VOICE_SERVER_UPDATE",
        lobbyId: t.lobby_id,
        endpoint: t.endpoint,
        token: t.token
      });
      break;
    case "CALL_CREATE":
      k({
        type: "CALL_CREATE",
        channelId: t.channel_id,
        messageId: t.message_id,
        embeddedActivities: t.embedded_activities,
        region: t.region,
        ringing: t.ringing
      });
      let U = t.voice_states;
      null != U && k({
        type: "VOICE_STATE_UPDATES",
        voiceStates: U.map(e => {
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
      k({
        type: "CALL_UPDATE",
        channelId: t.channel_id,
        messageId: t.message_id,
        region: t.region,
        ringing: t.ringing
      });
      break;
    case "CALL_DELETE":
      k({
        type: "CALL_DELETE",
        channelId: t.channel_id,
        unavailable: t.unavailable
      });
      break;
    case "OAUTH2_TOKEN_REVOKE":
      k({
        type: "OAUTH2_TOKEN_REVOKE",
        accessToken: t.access_token
      });
      break;
    case "RECENT_MENTION_DELETE":
      k({
        type: "RECENT_MENTION_DELETE",
        id: t.message_id
      });
      break;
    case "FRIEND_SUGGESTION_CREATE":
      k({
        type: "FRIEND_SUGGESTION_CREATE",
        suggestion: t
      });
      break;
    case "FRIEND_SUGGESTION_DELETE":
      k({
        type: "FRIEND_SUGGESTION_DELETE",
        suggestedUserId: t.suggested_user_id
      });
      break;
    case "WEBHOOKS_UPDATE":
      k({
        type: "WEBHOOKS_UPDATE",
        guildId: t.guild_id,
        channelId: t.channel_id
      });
      break;
    case "MESSAGE_REACTION_ADD":
    case "MESSAGE_REACTION_REMOVE":
      k({
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
      k({
        type: "MESSAGE_REACTION_REMOVE_ALL",
        channelId: t.channel_id,
        messageId: t.message_id
      });
      break;
    case "MESSAGE_REACTION_REMOVE_EMOJI":
      k({
        type: "MESSAGE_REACTION_REMOVE_EMOJI",
        channelId: t.channel_id,
        messageId: t.message_id,
        emoji: t.emoji
      });
      break;
    case "MESSAGE_REACTION_ADD_MANY":
      k({
        type: "MESSAGE_REACTION_ADD_MANY",
        channelId: t.channel_id,
        messageId: t.message_id,
        reactions: t.reactions
      });
      break;
    case "PAYMENT_UPDATE":
      k({
        type: "PAYMENT_UPDATE",
        payment: t
      });
      break;
    case "ENTITLEMENT_CREATE":
    case "ENTITLEMENT_UPDATE":
    case "ENTITLEMENT_DELETE":
      k({
        type: e,
        entitlement: t
      });
      break;
    case "USER_PAYMENT_SOURCES_UPDATE":
      S.default.hasLayers() && (n("850068").fetchPaymentSources(), l.fetchSubscriptionPlansBySKUs(A.default.getFetchedSKUIDs()));
      break;
    case "USER_SUBSCRIPTIONS_UPDATE":
      u.fetchCurrentUser(), S.default.hasLayers() && n("850068").fetchSubscriptions();
      break;
    case "USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE":
      k({
        type: "GUILD_BOOST_SLOT_CREATE",
        guildBoostSlot: m.default.createFromServer(t, y.default.getSubscriptionById(t.subscription_id))
      });
      break;
    case "USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE":
      k({
        type: "GUILD_BOOST_SLOT_UPDATE",
        guildBoostSlot: m.default.createFromServer(t, y.default.getSubscriptionById(t.subscription_id))
      });
      break;
    case "BILLING_POPUP_BRIDGE_CALLBACK":
      k({
        type: "BILLING_POPUP_BRIDGE_CALLBACK",
        paymentSourceType: t.payment_source_type,
        state: t.state,
        path: t.path,
        query: t.query
      });
      break;
    case "USER_PAYMENT_BROWSER_CHECKOUT_DONE":
      k({
        type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
        loadId: t.load_id
      });
      break;
    case "USER_PAYMENT_CLIENT_ADD":
      (0, N.getPurchaseTokenHash)().then(e => {
        let n = t.purchase_token_hash;
        n === e && k({
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
          if (w(t.guild_id, n.user, n), null == n.presence) return;
          let {
            presence: i
          } = n;
          x({
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
            item: s
          } = t;
          switch (n) {
            case "SYNC":
              i.forEach(e);
              break;
            case "UPDATE":
            case "INSERT":
              e(s)
          }
        }), O.default.flush(), k({
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
      k({
        type: "LOBBY_CREATE",
        lobby: t
      }), t.voice_states.forEach(e => {
        k({
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
      k({
        type: "LOBBY_UPDATE",
        lobby: t
      });
      break;
    case "LOBBY_DELETE":
      k({
        type: "LOBBY_DELETE",
        lobbyId: t.id,
        reason: t.reason
      });
      break;
    case "LOBBY_MEMBER_CONNECT":
    case "LOBBY_MEMBER_UPDATE":
    case "LOBBY_MEMBER_DISCONNECT":
      k({
        type: e,
        lobbyId: t.lobby_id,
        member: t.member
      });
      break;
    case "LOBBY_MESSAGE":
      k({
        type: "LOBBY_MESSAGE",
        lobbyId: t.lobby_id,
        senderId: t.sender_id,
        data: t.data
      });
      break;
    case "GIFT_CODE_UPDATE":
      k({
        type: "GIFT_CODE_UPDATE",
        uses: t.uses,
        code: t.code
      });
      break;
    case "GIFT_CODE_CREATE":
      k({
        type: "GIFT_CODE_CREATE",
        giftCode: t
      });
      break;
    case "USER_ACHIEVEMENT_UPDATE":
      k({
        type: "USER_ACHIEVEMENT_UPDATE",
        userAchievement: t
      });
      break;
    case "LIBRARY_APPLICATION_UPDATE":
      k({
        type: "LIBRARY_APPLICATION_UPDATE",
        libraryApplication: t
      });
      break;
    case "STREAM_CREATE":
      k({
        type: "STREAM_CREATE",
        streamKey: t.stream_key,
        region: t.region,
        viewerIds: t.viewer_ids,
        rtcServerId: t.rtc_server_id,
        paused: t.paused
      });
      break;
    case "STREAM_SERVER_UPDATE":
      k({
        type: "STREAM_SERVER_UPDATE",
        streamKey: t.stream_key,
        endpoint: t.endpoint,
        token: t.token
      });
      break;
    case "STREAM_UPDATE":
      k({
        type: "STREAM_UPDATE",
        streamKey: t.stream_key,
        region: t.region,
        viewerIds: t.viewer_ids,
        paused: t.paused
      });
      break;
    case "STREAM_DELETE":
      k({
        type: "STREAM_DELETE",
        streamKey: t.stream_key,
        unavailable: t.unavailable,
        reason: t.reason
      });
      break;
    case "GENERIC_PUSH_NOTIFICATION_SENT":
      k({
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
      k({
        type: "NOTIFICATION_CENTER_ITEM_CREATE",
        item: t
      });
      break;
    case "NOTIFICATION_CENTER_ITEM_DELETE":
      k({
        type: "NOTIFICATION_CENTER_ITEM_DELETE",
        id: t.id
      });
      break;
    case "NOTIFICATION_CENTER_ITEMS_ACK":
      k({
        type: "NOTIFICATION_CENTER_ITEMS_ACK",
        ids: [t.id],
        optimistic: !1
      });
      break;
    case "NOTIFICATION_CENTER_ITEM_COMPLETED":
      k({
        type: "NOTIFICATION_CENTER_ITEM_COMPLETED",
        item_enum: t.item_enum
      });
      break;
    case "APPLICATION_COMMAND_PERMISSIONS_UPDATE":
      k({
        type: e,
        guildId: t.guild_id
      });
      break;
    case "GUILD_APPLICATION_COMMAND_INDEX_UPDATE":
      k({
        type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE",
        guildId: t.guild_id,
        version: t.version
      });
      break;
    case "GUILD_JOIN_REQUEST_CREATE":
      k({
        type: "GUILD_JOIN_REQUEST_CREATE",
        request: t.request,
        status: t.status,
        guildId: t.guild_id
      });
      break;
    case "GUILD_JOIN_REQUEST_UPDATE":
      k({
        type: "GUILD_JOIN_REQUEST_UPDATE",
        request: t.request,
        status: t.status,
        guildId: t.guild_id
      });
      break;
    case "GUILD_JOIN_REQUEST_DELETE":
      k({
        type: "GUILD_JOIN_REQUEST_DELETE",
        id: t.id,
        userId: t.user_id,
        guildId: t.guild_id
      });
      break;
    case "INTERACTION_CREATE":
      k({
        type: "INTERACTION_CREATE",
        interactionId: t.id,
        nonce: t.nonce
      });
      break;
    case "INTERACTION_SUCCESS":
      k({
        type: "INTERACTION_SUCCESS",
        interactionId: t.id,
        nonce: t.nonce
      });
      break;
    case "INTERACTION_FAILURE":
      k({
        type: "INTERACTION_FAILURE",
        nonce: t.nonce
      });
      break;
    case "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE":
      k({
        type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE",
        choices: t.choices,
        nonce: t.nonce
      });
      break;
    case "INTERACTION_MODAL_CREATE":
      k({
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
      k({
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
      k({
        type: "STAGE_INSTANCE_CREATE",
        instance: t
      });
      break;
    case "STAGE_INSTANCE_UPDATE":
      k({
        type: "STAGE_INSTANCE_UPDATE",
        instance: t
      });
      break;
    case "STAGE_INSTANCE_DELETE":
      k({
        type: "STAGE_INSTANCE_DELETE",
        instance: t
      });
      break;
    case "GUILD_SCHEDULED_EVENT_CREATE":
      k({
        type: "GUILD_SCHEDULED_EVENT_CREATE",
        guildScheduledEvent: t
      });
      break;
    case "GUILD_SCHEDULED_EVENT_UPDATE":
      k({
        type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guildScheduledEvent: t
      });
      break;
    case "GUILD_SCHEDULED_EVENT_DELETE":
      k({
        type: "GUILD_SCHEDULED_EVENT_DELETE",
        guildScheduledEvent: t
      });
      break;
    case "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE":
      k({
        type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE",
        eventException: t
      });
      break;
    case "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE":
      k({
        type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE",
        eventException: t
      });
      break;
    case "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE":
      k({
        type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE",
        eventException: t
      });
      break;
    case "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE":
      k({
        type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE",
        eventId: t.event_id
      });
      break;
    case "GUILD_SCHEDULED_EVENT_USER_ADD":
      k({
        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
        userId: t.user_id,
        guildId: t.guild_id,
        guildEventId: t.guild_scheduled_event_id,
        guildEventExceptionId: t.guild_scheduled_event_exception_id,
        response: t.response
      });
      break;
    case "GUILD_SCHEDULED_EVENT_USER_REMOVE":
      k({
        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
        userId: t.user_id,
        guildId: t.guild_id,
        guildEventId: t.guild_scheduled_event_id,
        guildEventExceptionId: t.guild_scheduled_event_exception_id,
        response: t.response
      });
      break;
    case "GUILD_DIRECTORY_ENTRY_CREATE":
      k({
        type: "GUILD_DIRECTORY_ENTRY_CREATE",
        channelId: t.directory_channel_id,
        entry: t
      });
      break;
    case "GUILD_DIRECTORY_ENTRY_UPDATE":
      k({
        type: "GUILD_DIRECTORY_ENTRY_UPDATE",
        channelId: t.directory_channel_id,
        entry: t
      });
      break;
    case "GUILD_DIRECTORY_ENTRY_DELETE":
      k({
        type: "GUILD_DIRECTORY_ENTRY_DELETE",
        channelId: t.directory_channel_id,
        guildId: t.entity_id
      });
      break;
    case "AUTO_MODERATION_MENTION_RAID_DETECTION":
      k({
        type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
        guildId: t.guild_id,
        decisionId: t.decision_id,
        suspiciousMentionActivityUntil: t.suspicious_mention_activity_until
      });
      break;
    case "VOICE_CHANNEL_EFFECT_SEND":
      k({
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
      k({
        type: "GUILD_SOUNDBOARD_SOUND_CREATE",
        sound: {
          guildId: t.guild_id,
          name: t.name,
          soundId: t.sound_id,
          user: new E.default(t.user),
          userId: t.user_id,
          volume: t.volume,
          emojiId: t.emoji_id,
          emojiName: t.emoji_name,
          available: t.available
        }
      });
      break;
    case "GUILD_SOUNDBOARD_SOUND_UPDATE":
      k({
        type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
        sound: {
          guildId: t.guild_id,
          name: t.name,
          soundId: t.sound_id,
          user: new E.default(t.user),
          userId: t.user_id,
          volume: t.volume,
          emojiId: t.emoji_id,
          emojiName: t.emoji_name,
          available: t.available
        }
      });
      break;
    case "GUILD_SOUNDBOARD_SOUND_DELETE":
      k({
        type: "GUILD_SOUNDBOARD_SOUND_DELETE",
        guildId: t.guild_id,
        soundId: t.sound_id
      });
      break;
    case "GUILD_SOUNDBOARD_SOUNDS_UPDATE":
      k({
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
      k({
        type: "EMBEDDED_ACTIVITY_INBOUND_UPDATE",
        guildId: t.guild_id,
        channelId: t.channel_id,
        embeddedActivity: t.embedded_activity,
        connections: t.connections,
        updateCode: t.update_code
      });
      break;
    case "EMBEDDED_ACTIVITY_UPDATE_V2":
      k({
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
      k({
        type: "AUTH_SESSION_CHANGE",
        authSessionIdHash: t.auth_session_id_hash
      });
      break;
    case "USER_CONNECTIONS_LINK_CALLBACK":
      k({
        type: "USER_CONNECTIONS_LINK_CALLBACK",
        provider: t.provider,
        callbackCode: t.callback_code,
        callbackState: t.callback_state
      });
      break;
    case "DELETED_ENTITY_IDS":
      k({
        type: "DELETED_ENTITY_IDS",
        ...t
      });
      break;
    case "CONSOLE_COMMAND_UPDATE":
      k({
        type: "CONSOLE_COMMAND_UPDATE",
        id: t.id,
        result: t.result,
        error: t.error
      });
      break;
    case "PASSIVE_UPDATE_V1":
      k({
        type: "PASSIVE_UPDATE_V1",
        guildId: t.guild_id,
        members: t.members,
        channels: null === (d = t.channels) || void 0 === d ? void 0 : d.map(e => ({
          id: e.id,
          lastMessageId: e.last_message_id,
          lastPinTimestamp: e.last_pin_timestamp
        })),
        voiceStates: null === (v = t.voice_states) || void 0 === v ? void 0 : v.map(e => {
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
      k({
        type: "PRIVATE_CHANNEL_INTEGRATION_CREATE",
        integration: t
      });
      break;
    case "PRIVATE_CHANNEL_INTEGRATION_UPDATE":
      k({
        type: "PRIVATE_CHANNEL_INTEGRATION_UPDATE",
        integration: t
      });
      break;
    case "PRIVATE_CHANNEL_INTEGRATION_DELETE":
      k({
        type: "PRIVATE_CHANNEL_INTEGRATION_DELETE",
        channelId: t.channel_id,
        applicationId: t.application_id
      });
      break;
    case "CREATOR_MONETIZATION_RESTRICTIONS_UPDATE":
      k({
        type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
        guildId: t.guild_id,
        restrictions: t.restrictions
      });
      break;
    case "BILLING_REFERRAL_TRIAL_OFFER_UPDATE":
      k({
        type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
        userTrialOfferId: t.user_trial_offer_id,
        recipientId: t.recipient_id
      });
      break;
    case "SPEED_TEST_CREATE":
      k({
        type: "SPEED_TEST_CREATE",
        streamKey: t.stream_key,
        region: t.region,
        viewerIds: t.viewer_ids,
        rtcServerId: t.rtc_server_id,
        paused: t.paused
      });
      break;
    case "SPEED_TEST_SERVER_UPDATE":
      k({
        type: "SPEED_TEST_SERVER_UPDATE",
        streamKey: t.stream_key,
        endpoint: t.endpoint,
        token: t.token
      });
      break;
    case "SPEED_TEST_UPDATE":
      k({
        type: "SPEED_TEST_UPDATE",
        streamKey: t.stream_key,
        region: t.region,
        viewerIds: t.viewer_ids,
        paused: t.paused
      });
      break;
    case "SPEED_TEST_DELETE":
      k({
        type: "SPEED_TEST_DELETE",
        streamKey: t.stream_key,
        unavailable: t.unavailable,
        reason: t.reason
      });
      break;
    case "LAST_MESSAGES":
      k({
        type: "MESSAGE_PREVIEWS_LOADED",
        guildId: t.guild_id,
        messages: t.messages
      });
      break;
    case "AUTHENTICATOR_UPDATE":
      k({
        type: "AUTHENTICATOR_UPDATE",
        credential: t
      });
      break;
    case "AUTHENTICATOR_CREATE":
      k({
        type: "AUTHENTICATOR_CREATE",
        credential: t
      });
      break;
    case "AUTHENTICATOR_DELETE":
      k({
        type: "AUTHENTICATOR_DELETE",
        credential: t
      });
      break;
    case "INVENTORY_PACK_UPDATE":
      k({
        type: "INVENTORY_PACK_UPDATE",
        pack: c.default.fromServer(t)
      });
      break;
    case "INVENTORY_PACK_DELETE":
      k({
        type: "INVENTORY_PACK_DELETE",
        pack: c.default.fromServer(t)
      });
      break;
    case "NOTIFICATION_SETTINGS_UPDATE":
      k({
        type: "NOTIFICATION_SETTINGS_UPDATE",
        settings: {
          flags: t.flags
        }
      });
      break;
    case "GAME_INVITE_CREATE":
      k({
        type: "GAME_INVITE_CREATE",
        gameInvite: t
      });
      break;
    case "GAME_INVITE_DELETE":
      k({
        type: "GAME_INVITE_DELETE",
        inviteId: t.invite_id
      });
      break;
    case "GAME_INVITE_DELETE_MANY":
      k({
        type: "GAME_INVITE_DELETE_MANY",
        inviteIds: t.invite_ids
      });
      break;
    case "PREMIUM_MARKETING_PREVIEW":
      k({
        type: "PREMIUM_MARKETING_PREVIEW",
        properties: t.properties
      });
      break;
    case "USER_APPLICATION_UPDATE":
      k({
        type: "USER_APPLICATION_UPDATE",
        applicationId: t.application_id
      });
      break;
    case "USER_APPLICATION_REMOVE":
      k({
        type: "USER_APPLICATION_REMOVE",
        applicationId: t.application_id
      })
  }
}

function k(e) {
  a.default.dispatch(e).catch(t => D.socket.resetSocketOnError(t, e.type))
}

function w(e, t, n) {
  let {
    roles: i,
    nick: r,
    avatar: a,
    flags: o,
    premium_since: l,
    pending: u,
    joined_at: d,
    communication_disabled_until: c,
    unusual_dm_activity_until: f
  } = n, _ = v.default.getMember(e, t.id);
  (!(null != _ && _.nick === r && _.avatar === a && s.isEqual(_.roles, i)) || _.premiumSince !== l || _.isPending !== u || _.joinedAt !== d || _.communicationDisabledUntil !== c || _.flags !== o || _.unusualDMActivityUntil !== f) && k({
    type: "GUILD_MEMBER_ADD",
    guildId: e,
    user: t,
    roles: i,
    nick: r,
    avatar: a,
    premiumSince: l,
    isPending: u,
    joinedAt: d,
    communicationDisabledUntil: c,
    unusualDMActivityUntil: f,
    flags: o
  })
}

function V(e) {
  let {
    member: t,
    mentions: n,
    author: i,
    guild_id: s
  } = e;
  null != t && w(s, i, t), null != n && n.forEach(e => {
    if (null != e.member) {
      let {
        member: t
      } = e;
      delete e.member, w(s, e, t)
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
  D.socket.isSessionEstablished() && T.default.getPendingLobbies().forEach(e => {
    D.socket.lobbyConnect(e.id, e.secret)
  })
}

function x(e) {
  let {
    guildId: t,
    user: n,
    status: i,
    activities: s,
    clientStatus: r,
    broadcast: a
  } = e;
  M.add({
    guildId: t,
    user: n,
    status: i,
    clientStatus: r,
    activities: s,
    broadcast: a
  })
}