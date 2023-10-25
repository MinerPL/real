(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["93851"], {
        478100: function(E, S, s) {
            "use strict";
            s.r(S), s.d(S, {
                getGuildPermissionSpec: function() {
                    return e
                },
                generateGuildPermissionSpec: function() {
                    return n
                },
                generateChannelGeneralSection: function() {
                    return A
                },
                generateChannelMembershipSection: function() {
                    return N
                },
                generateChannelTextSection: function() {
                    return r
                },
                generateChannelVoiceSection: function() {
                    return R
                },
                generateChannelVoiceChatSection: function() {
                    return o
                },
                generateChannelStageVoiceSection: function() {
                    return P
                },
                generateChannelStageSection: function() {
                    return t
                },
                generateChannelEventsSection: function() {
                    return O
                },
                renderDescription: function() {
                    return T
                }
            });
            var i = s("809924");

            function _(E) {
                let S = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return !S && (E.permissions = E.permissions.filter(E => {
                    let {
                        isExperimental: S
                    } = E;
                    return !S
                })), E
            }

            function I(E, S) {
                return E.map(E => S[E.toString()])
            }

            function e(E, S) {
                return {
                    [i.Permissions.VIEW_CHANNEL.toString()]: {
                        title: E.ROLE_PERMISSIONS_VIEW_CHANNEL,
                        description: E.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION,
                        flag: i.Permissions.VIEW_CHANNEL
                    },
                    [i.Permissions.MANAGE_CHANNELS.toString()]: {
                        title: E.MANAGE_CHANNELS,
                        description: E.ROLE_PERMISSIONS_MANAGE_CHANNELS_DESCRIPTION,
                        flag: i.Permissions.MANAGE_CHANNELS
                    },
                    [i.Permissions.MANAGE_ROLES.toString()]: {
                        title: E.MANAGE_ROLES,
                        description: E.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION,
                        flag: i.Permissions.MANAGE_ROLES
                    },
                    [i.Permissions.MANAGE_GUILD_EXPRESSIONS.toString()]: {
                        title: E.MANAGE_EXPRESSIONS,
                        description: E.ROLE_PERMISSIONS_MANAGE_EXPRESSIONS_DESCRIPTION,
                        flag: i.Permissions.MANAGE_GUILD_EXPRESSIONS
                    },
                    [i.Permissions.CREATE_GUILD_EXPRESSIONS.toString()]: {
                        title: E.CREATE_EXPRESSIONS,
                        description: E.ROLE_PERMISSIONS_CREATE_EXPRESSIONS_DESCRIPTION,
                        flag: i.Permissions.CREATE_GUILD_EXPRESSIONS
                    },
                    [i.Permissions.VIEW_AUDIT_LOG.toString()]: {
                        title: E.VIEW_AUDIT_LOG,
                        description: E.ROLE_PERMISSIONS_VIEW_AUDIT_LOG_DESCRIPTION,
                        flag: i.Permissions.VIEW_AUDIT_LOG
                    },
                    [i.Permissions.VIEW_GUILD_ANALYTICS.toString()]: {
                        title: E.VIEW_GUILD_ANALYTICS,
                        description: E.ROLE_PERMISSIONS_VIEW_GUILD_ANALYTICS_DESCRIPTION,
                        flag: i.Permissions.VIEW_GUILD_ANALYTICS
                    },
                    [i.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
                        title: E.VIEW_CREATOR_MONETIZATION_ANALYTICS,
                        description: E.ROLE_PERMISSIONS_VIEW_CREATOR_MONETIZATION_ANALYTICS_DESCRIPTION,
                        flag: i.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS
                    },
                    [i.Permissions.MANAGE_WEBHOOKS.toString()]: {
                        title: E.MANAGE_WEBHOOKS,
                        description: E.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION,
                        flag: i.Permissions.MANAGE_WEBHOOKS
                    },
                    [i.Permissions.MANAGE_GUILD.toString()]: {
                        title: E.MANAGE_SERVER,
                        description: E.ROLE_PERMISSIONS_MANAGE_SERVER_DESCRIPTION,
                        flag: i.Permissions.MANAGE_GUILD
                    },
                    [i.Permissions.CREATE_INSTANT_INVITE.toString()]: {
                        title: E.CREATE_INSTANT_INVITE,
                        description: E.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION,
                        flag: i.Permissions.CREATE_INSTANT_INVITE
                    },
                    [i.Permissions.CHANGE_NICKNAME.toString()]: {
                        title: E.CHANGE_NICKNAME,
                        description: E.ROLE_PERMISSIONS_CHANGE_NICKNAME_DESCRIPTION,
                        flag: i.Permissions.CHANGE_NICKNAME
                    },
                    [i.Permissions.MANAGE_NICKNAMES.toString()]: {
                        title: E.MANAGE_NICKNAMES,
                        description: E.ROLE_PERMISSIONS_MANAGE_NICKNAMES_DESCRIPTION,
                        flag: i.Permissions.MANAGE_NICKNAMES
                    },
                    [i.Permissions.KICK_MEMBERS.toString()]: {
                        title: S.showMembershipManualApprovalPermissions ? E.KICK_MEMBERS_AND_REVIEW_APPLICATIONS : E.KICK_MEMBERS,
                        description: S.showMembershipManualApprovalPermissions ? E.ROLE_PERMISSIONS_KICK_MEMBERS_AND_REVIEW_APPLICATION_DESCRIPTION : E.ROLE_PERMISSIONS_KICK_MEMBERS_DESCRIPTION,
                        flag: i.Permissions.KICK_MEMBERS
                    },
                    [i.Permissions.BAN_MEMBERS.toString()]: {
                        title: E.BAN_MEMBERS,
                        description: E.ROLE_PERMISSIONS_BAN_MEMBERS_DESCRIPTION,
                        flag: i.Permissions.BAN_MEMBERS
                    },
                    [i.Permissions.MODERATE_MEMBERS.toString()]: {
                        title: E.MODERATE_MEMBER,
                        description: E.ROLE_PERMISSIONS_MODERATE_MEMBER_DESCRIPTION,
                        flag: i.Permissions.MODERATE_MEMBERS
                    },
                    [i.Permissions.SEND_MESSAGES.toString()]: {
                        title: S.showForumPermissions ? E.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : E.SEND_MESSAGES,
                        description: S.showForumPermissions ? E.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION : E.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION,
                        flag: i.Permissions.SEND_MESSAGES
                    },
                    [i.Permissions.EMBED_LINKS.toString()]: {
                        title: E.EMBED_LINKS,
                        description: E.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION,
                        flag: i.Permissions.EMBED_LINKS
                    },
                    [i.Permissions.ATTACH_FILES.toString()]: {
                        title: E.ATTACH_FILES,
                        description: E.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION,
                        flag: i.Permissions.ATTACH_FILES
                    },
                    [i.Permissions.ADD_REACTIONS.toString()]: {
                        title: E.ADD_REACTIONS,
                        description: E.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION,
                        flag: i.Permissions.ADD_REACTIONS
                    },
                    [i.Permissions.USE_EXTERNAL_EMOJIS.toString()]: {
                        title: E.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
                        description: E.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION,
                        flag: i.Permissions.USE_EXTERNAL_EMOJIS
                    },
                    [i.Permissions.USE_EXTERNAL_STICKERS.toString()]: {
                        title: E.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
                        description: E.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION,
                        flag: i.Permissions.USE_EXTERNAL_STICKERS
                    },
                    [i.Permissions.MENTION_EVERYONE.toString()]: {
                        title: E.MENTION_EVERYONE,
                        description: E.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION,
                        flag: i.Permissions.MENTION_EVERYONE
                    },
                    [i.Permissions.MANAGE_MESSAGES.toString()]: {
                        title: E.MANAGE_MESSAGES,
                        description: E.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION,
                        flag: i.Permissions.MANAGE_MESSAGES
                    },
                    [i.Permissions.READ_MESSAGE_HISTORY.toString()]: {
                        title: E.READ_MESSAGE_HISTORY,
                        description: E.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION,
                        flag: i.Permissions.READ_MESSAGE_HISTORY
                    },
                    [i.Permissions.SEND_TTS_MESSAGES.toString()]: {
                        title: E.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
                        description: E.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION,
                        flag: i.Permissions.SEND_TTS_MESSAGES
                    },
                    [i.Permissions.USE_APPLICATION_COMMANDS.toString()]: {
                        title: E.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
                        description: E.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_GUILD_DESCRIPTION,
                        flag: i.Permissions.USE_APPLICATION_COMMANDS
                    },
                    [i.Permissions.SEND_VOICE_MESSAGES.toString()]: {
                        title: E.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
                        description: E.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE_GUILD_DESCRIPTION,
                        flag: i.Permissions.SEND_VOICE_MESSAGES
                    },
                    [i.Permissions.USE_CLYDE_AI.toString()]: {
                        title: E.ROLE_PERMISSIONS_USE_CLYDE_AI,
                        description: E.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
                        flag: i.Permissions.USE_CLYDE_AI
                    },
                    [i.Permissions.CONNECT.toString()]: {
                        title: E.CONNECT,
                        description: E.ROLE_PERMISSIONS_CONNECT_DESCRIPTION,
                        flag: i.Permissions.CONNECT
                    },
                    [i.Permissions.SPEAK.toString()]: {
                        title: E.SPEAK,
                        description: E.ROLE_PERMISSIONS_SPEAK_DESCRIPTION,
                        flag: i.Permissions.SPEAK
                    },
                    [i.Permissions.STREAM.toString()]: {
                        title: E.VIDEO,
                        description: E.ROLE_PERMISSIONS_STREAM_DESCRIPTION,
                        flag: i.Permissions.STREAM
                    },
                    [i.Permissions.USE_EMBEDDED_ACTIVITIES.toString()]: {
                        title: E.USE_EMBEDDED_ACTIVITIES,
                        description: E.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION,
                        flag: i.Permissions.USE_EMBEDDED_ACTIVITIES
                    },
                    [i.Permissions.USE_SOUNDBOARD.toString()]: {
                        title: E.USE_SOUNDBOARD,
                        description: (null == S ? void 0 : S.SOUNDBOARD_DESCRIPTION) || E.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION,
                        flag: i.Permissions.USE_SOUNDBOARD
                    },
                    [i.Permissions.USE_EXTERNAL_SOUNDS.toString()]: {
                        title: E.USE_EXTERNAL_SOUNDS,
                        description: E.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
                        flag: i.Permissions.USE_EXTERNAL_SOUNDS
                    },
                    [i.Permissions.USE_VAD.toString()]: {
                        title: E.USE_VAD,
                        description: E.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION,
                        flag: i.Permissions.USE_VAD
                    },
                    [i.Permissions.PRIORITY_SPEAKER.toString()]: {
                        title: E.PRIORITY_SPEAKER,
                        description: (null == S ? void 0 : S.PRIORITY_SPEAKER_DESCRIPTION) || E.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION,
                        flag: i.Permissions.PRIORITY_SPEAKER
                    },
                    [i.Permissions.MUTE_MEMBERS.toString()]: {
                        title: E.MUTE_MEMBERS,
                        description: E.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION,
                        flag: i.Permissions.MUTE_MEMBERS
                    },
                    [i.Permissions.DEAFEN_MEMBERS.toString()]: {
                        title: E.DEAFEN_MEMBERS,
                        description: E.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION,
                        flag: i.Permissions.DEAFEN_MEMBERS
                    },
                    [i.Permissions.MOVE_MEMBERS.toString()]: {
                        title: E.MOVE_MEMBERS,
                        description: E.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION,
                        flag: i.Permissions.MOVE_MEMBERS
                    },
                    [i.Permissions.REQUEST_TO_SPEAK.toString()]: {
                        title: E.REQUEST_TO_SPEAK,
                        description: E.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION,
                        flag: i.Permissions.REQUEST_TO_SPEAK,
                        isExperimental: !0
                    },
                    [i.Permissions.ADMINISTRATOR.toString()]: {
                        title: E.ADMINISTRATOR,
                        description: "string" == typeof E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION ? E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION : E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION.format(),
                        flag: i.Permissions.ADMINISTRATOR
                    },
                    [i.Permissions.MANAGE_EVENTS.toString()]: {
                        title: E.MANAGE_EVENTS,
                        description: E.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION,
                        flag: i.Permissions.MANAGE_EVENTS
                    },
                    [i.Permissions.CREATE_EVENTS.toString()]: {
                        title: E.CREATE_EVENTS,
                        description: E.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION,
                        flag: i.Permissions.CREATE_EVENTS
                    },
                    [i.Permissions.MANAGE_THREADS.toString()]: {
                        title: S.showForumPermissions ? E.MANAGE_THREADS_AND_FORUM_POSTS : E.MANAGE_THREADS,
                        description: S.showForumPermissions ? E.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION : E.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION,
                        flag: i.Permissions.MANAGE_THREADS
                    },
                    [i.Permissions.CREATE_PUBLIC_THREADS.toString()]: {
                        title: E.CREATE_PUBLIC_THREADS,
                        description: E.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION,
                        flag: i.Permissions.CREATE_PUBLIC_THREADS
                    },
                    [i.Permissions.CREATE_PRIVATE_THREADS.toString()]: {
                        title: E.CREATE_PRIVATE_THREADS,
                        description: E.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION,
                        flag: i.Permissions.CREATE_PRIVATE_THREADS
                    },
                    [i.Permissions.SEND_MESSAGES_IN_THREADS.toString()]: {
                        title: S.showForumPermissions ? E.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : E.SEND_MESSAGES_IN_THREADS,
                        description: S.showForumPermissions ? E.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION : E.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION,
                        flag: i.Permissions.SEND_MESSAGES_IN_THREADS
                    },
                    [i.Permissions.USE_CLYDE_AI.toString()]: {
                        title: E.ROLE_PERMISSIONS_USE_CLYDE_AI,
                        description: E.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
                        flag: i.Permissions.USE_CLYDE_AI
                    },
                    [i.Permissions.SET_VOICE_CHANNEL_STATUS.toString()]: {
                        title: E.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
                        description: E.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
                        flag: i.Permissions.SET_VOICE_CHANNEL_STATUS
                    }
                }
            }

            function n(E, S) {
                var s;
                let n = e(E, S),
                    A = [function(E, S, s) {
                        let e = [i.Permissions.VIEW_CHANNEL, i.Permissions.MANAGE_CHANNELS, i.Permissions.MANAGE_ROLES, i.Permissions.CREATE_GUILD_EXPRESSIONS, i.Permissions.MANAGE_GUILD_EXPRESSIONS, i.Permissions.VIEW_AUDIT_LOG, i.Permissions.VIEW_GUILD_ANALYTICS];
                        return s.showCreatorMonetizationAnalyticsPermission && e.push(i.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS), e.push(i.Permissions.MANAGE_WEBHOOKS), e.push(i.Permissions.MANAGE_GUILD), _({
                            title: S.ROLE_PERMISSIONS_SECTION_GENERAL_GUILD,
                            permissions: I(e, E)
                        })
                    }(n, E, S), function(E, S) {
                        let s = [i.Permissions.CREATE_INSTANT_INVITE, i.Permissions.CHANGE_NICKNAME, i.Permissions.MANAGE_NICKNAMES, i.Permissions.KICK_MEMBERS, i.Permissions.BAN_MEMBERS, i.Permissions.MODERATE_MEMBERS];
                        return _({
                            title: S.ROLE_PERMISSIONS_SECTION_MEMBERSHIP,
                            permissions: I(s, E)
                        })
                    }(n, E), function(E, S, s) {
                        let e = [i.Permissions.SEND_MESSAGES, i.Permissions.SEND_MESSAGES_IN_THREADS, i.Permissions.CREATE_PUBLIC_THREADS, i.Permissions.CREATE_PRIVATE_THREADS, i.Permissions.EMBED_LINKS, i.Permissions.ATTACH_FILES, i.Permissions.ADD_REACTIONS, i.Permissions.USE_EXTERNAL_EMOJIS, i.Permissions.USE_EXTERNAL_STICKERS, i.Permissions.MENTION_EVERYONE, i.Permissions.MANAGE_MESSAGES, i.Permissions.MANAGE_THREADS, i.Permissions.READ_MESSAGE_HISTORY, i.Permissions.SEND_TTS_MESSAGES, i.Permissions.USE_APPLICATION_COMMANDS, i.Permissions.SEND_VOICE_MESSAGES, i.Permissions.USE_CLYDE_AI];
                        !s.showClydeAIPermissions && (e = e.filter(E => E !== i.Permissions.USE_CLYDE_AI));
                        let n = {
                            title: S.ROLE_PERMISSIONS_SECTION_TEXT,
                            permissions: I(e, E)
                        };
                        return _(n)
                    }(n, E, S), function(E, S, s) {
                        let e = [i.Permissions.CONNECT, i.Permissions.SPEAK, i.Permissions.STREAM, i.Permissions.USE_EMBEDDED_ACTIVITIES, i.Permissions.USE_SOUNDBOARD, i.Permissions.USE_EXTERNAL_SOUNDS, i.Permissions.USE_VAD, i.Permissions.PRIORITY_SPEAKER, i.Permissions.MUTE_MEMBERS, i.Permissions.DEAFEN_MEMBERS, i.Permissions.MOVE_MEMBERS];
                        s.showVoiceChannelStatusPermission && e.push(i.Permissions.SET_VOICE_CHANNEL_STATUS);
                        let n = {
                            title: S.ROLE_PERMISSIONS_SECTION_VOICE,
                            permissions: I(e, E)
                        };
                        return _(n)
                    }(n, E, S)];
                return S.showStageChannelPermissions && A.push(function(E, S, s) {
                    let e = {
                        title: S.ROLE_PERMISSIONS_SECTION_STAGE,
                        permissions: I([i.Permissions.REQUEST_TO_SPEAK], E)
                    };
                    return _(e, s.showExperimental)
                }(n, E, S)), A.push(function(E, S, s) {
                    let e = {
                        title: S.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS,
                        permissions: I([i.Permissions.CREATE_EVENTS, i.Permissions.MANAGE_EVENTS], E)
                    };
                    return _(e, s.showExperimental)
                }(n, E, S)), A.push((s = n, _({
                    title: E.ROLE_PERMISSIONS_SECTION_ADVANCED,
                    permissions: I([i.Permissions.ADMINISTRATOR], s)
                }))), A
            }

            function A(E, S) {
                let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    showManageWebhooks: !0
                };
                return {
                    title: S,
                    permissions: I((null == s ? void 0 : s.showManageWebhooks) ? [i.Permissions.VIEW_CHANNEL, i.Permissions.MANAGE_CHANNELS, i.Permissions.MANAGE_ROLES, i.Permissions.MANAGE_WEBHOOKS] : [i.Permissions.VIEW_CHANNEL, i.Permissions.MANAGE_CHANNELS, i.Permissions.MANAGE_ROLES], E)
                }
            }

            function N(E, S) {
                return {
                    title: S,
                    permissions: I([i.Permissions.CREATE_INSTANT_INVITE], E)
                }
            }

            function r(E, S, s) {
                let _ = [i.Permissions.SEND_MESSAGES, i.Permissions.SEND_MESSAGES_IN_THREADS, i.Permissions.CREATE_PUBLIC_THREADS, i.Permissions.CREATE_PRIVATE_THREADS, i.Permissions.EMBED_LINKS, i.Permissions.ATTACH_FILES, i.Permissions.ADD_REACTIONS, i.Permissions.USE_EXTERNAL_EMOJIS, i.Permissions.USE_EXTERNAL_STICKERS, i.Permissions.MENTION_EVERYONE, i.Permissions.MANAGE_MESSAGES, i.Permissions.MANAGE_THREADS, i.Permissions.READ_MESSAGE_HISTORY, i.Permissions.SEND_TTS_MESSAGES, i.Permissions.USE_APPLICATION_COMMANDS, i.Permissions.SEND_VOICE_MESSAGES, i.Permissions.USE_CLYDE_AI, i.Permissions.USE_EMBEDDED_ACTIVITIES];
                return (!s.showPrivateThreads || !s.showCreateThreads) && (_ = _.filter(E => E !== i.Permissions.CREATE_PRIVATE_THREADS)), !s.showCreateThreads && (_ = _.filter(E => E !== i.Permissions.CREATE_PUBLIC_THREADS)), !s.showClydeAIPermissions && (_ = _.filter(E => E !== i.Permissions.USE_CLYDE_AI)), {
                    title: S,
                    description: s.sectionDescription,
                    permissions: I(_, E)
                }
            }

            function R(E, S, s) {
                let _ = [i.Permissions.CONNECT, i.Permissions.SPEAK, i.Permissions.STREAM, i.Permissions.USE_EMBEDDED_ACTIVITIES, i.Permissions.USE_SOUNDBOARD, i.Permissions.USE_EXTERNAL_SOUNDS, i.Permissions.USE_VAD, i.Permissions.PRIORITY_SPEAKER, i.Permissions.MUTE_MEMBERS, i.Permissions.DEAFEN_MEMBERS, i.Permissions.MOVE_MEMBERS];
                return s.showVoiceChannelStatusPermission && _.push(i.Permissions.SET_VOICE_CHANNEL_STATUS), {
                    title: S,
                    permissions: I(_, E)
                }
            }

            function o(E, S, s) {
                let _ = [i.Permissions.SEND_MESSAGES, i.Permissions.EMBED_LINKS, i.Permissions.ATTACH_FILES, i.Permissions.ADD_REACTIONS, i.Permissions.USE_EXTERNAL_EMOJIS, i.Permissions.USE_EXTERNAL_STICKERS, i.Permissions.MENTION_EVERYONE, i.Permissions.MANAGE_MESSAGES, i.Permissions.READ_MESSAGE_HISTORY, i.Permissions.SEND_TTS_MESSAGES, i.Permissions.USE_APPLICATION_COMMANDS];
                return {
                    title: S,
                    description: s.sectionDescription,
                    permissions: I(_, E)
                }
            }

            function P(E, S, s) {
                return {
                    title: S,
                    permissions: I(s ? [i.Permissions.CONNECT, i.Permissions.STREAM, i.Permissions.MUTE_MEMBERS, i.Permissions.MOVE_MEMBERS] : [i.Permissions.CONNECT, i.Permissions.MUTE_MEMBERS, i.Permissions.MOVE_MEMBERS], E)
                }
            }

            function t(E, S) {
                return {
                    title: S,
                    permissions: I([i.Permissions.REQUEST_TO_SPEAK, i.Permissions.MENTION_EVERYONE], E)
                }
            }

            function O(E, S) {
                let s = [i.Permissions.CREATE_EVENTS, i.Permissions.MANAGE_EVENTS],
                    _ = {
                        title: S,
                        permissions: I(s, E)
                    };
                return _
            }

            function T(E) {
                return null == E ? E : "string" == typeof E ? E.trim() : "function" == typeof E.format ? E.format() : E
            }
        }
    }
]);