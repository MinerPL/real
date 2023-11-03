(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["44941"], {
        178225: function(E, s, S) {
            "use strict";
            S.r(s), S.d(s, {
                isGuildEligibleForStageChannels: function() {
                    return n
                },
                useGuildEligibleForStageChannels: function() {
                    return I
                }
            });
            var e = S("446674"),
                i = S("305961"),
                _ = S("49111");

            function n(E) {
                var s;
                let [S] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default];
                return !!(null === (s = S.getGuild(E)) || void 0 === s ? void 0 : s.hasFeature(_.GuildFeatures.COMMUNITY))
            }

            function I(E) {
                return (0, e.useStateFromStores)([i.default], () => n(E, [i.default]), [E])
            }
        },
        465305: function(E, s, S) {
            "use strict";
            S.r(s), S.d(s, {
                default: function() {
                    return g
                }
            });
            var e = S("200900"),
                i = S("79112"),
                _ = S("746164"),
                n = S("980215"),
                I = S("250666"),
                t = S("680986"),
                r = S("867965"),
                o = S("348934"),
                N = S("520141"),
                R = S("592407"),
                A = S("819450"),
                O = S("178225"),
                P = S("300322"),
                T = S("233069"),
                M = S("305961"),
                C = S("701909"),
                a = S("49111"),
                l = S("606762"),
                m = S("782340");

            function D(E) {
                let s = (0, O.isGuildEligibleForStageChannels)(E),
                    S = (0, t.getEnableForumPermissions)(E),
                    e = (0, N.isMemberVerificationManualApproval)(E),
                    r = M.default.getGuild(E),
                    o = null != r && (0, I.isCreatorMonetizationEnabledGuild)(r),
                    R = (0, n.getClydeExperimentEnabled)(r),
                    A = _.default.getCurrentConfig({
                        guildId: E,
                        location: "permission_spec_utils"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return {
                    PRIORITY_SPEAKER_DESCRIPTION: m.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_APP.format({
                        keybind: m.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
                        onClick: () => {
                            i.default.open(a.UserSettingsSections.KEYBINDS)
                        }
                    }),
                    SOUNDBOARD_DESCRIPTION: m.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_LEARN_MORE.format({
                        helpCenterArticle: C.default.getArticleURL(a.HelpdeskArticles.SOUNDBOARD)
                    }),
                    showStageChannelPermissions: s,
                    showExperimental: !0,
                    showForumPermissions: S,
                    showMembershipManualApprovalPermissions: e,
                    showCreatorMonetizationAnalyticsPermission: o,
                    showClydeAIPermissions: R,
                    showVoiceChannelStatusPermission: A
                }
            }

            function L(E, s) {
                return E ? [s()] : []
            }
            var g = {
                generateChannelPermissionSpec: function(E, s, S, i) {
                    var _, I, N, O, C, L;
                    let g = (0, t.getEnableForumPermissions)(E),
                        u = (0, l.getChannelPermissionSpecMap)(s, S, g, i),
                        c = D(E),
                        G = P.VoiceInThreadsExperiment.getCurrentConfig({
                            guildId: E,
                            location: "3ad37d_1"
                        }).enabled && T.VOICE_THREAD_PARENT_CHANNEL_TYPES.has(s.type),
                        d = (0, A.isStageVideoEnabled)(E),
                        f = (0, o.canCurrentUserManageMessageFilters)(E),
                        U = s.isMediaChannel(),
                        p = M.default.getGuild(E),
                        h = (0, n.getClydeExperimentEnabled)(p);
                    switch (s.type) {
                        case a.ChannelTypes.GUILD_CATEGORY:
                            ;
                            return [e.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CATEGORY), e.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
                                showPrivateThreads: !0,
                                showCreateThreads: !0,
                                showClydeAIPermissions: h
                            }), e.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, {
                                showVoiceChannelStatusPermission: c.showVoiceChannelStatusPermission
                            }), ...(_ = c.showStageChannelPermissions, I = () => e.generateChannelStageSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), _ ? [I()] : []), e.generateChannelEventsSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
                        case a.ChannelTypes.GUILD_VOICE:
                            return [e.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
                                showManageWebhooks: !0
                            }), e.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, {
                                showVoiceChannelStatusPermission: c.showVoiceChannelStatusPermission
                            }), e.generateChannelVoiceChatSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
                                sectionDescription: f ? m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
                                    setUpAutomod: () => {
                                        R.default.open(E, a.GuildSettingsSections.GUILD_AUTOMOD)
                                    }
                                }) : void 0
                            }), e.generateChannelEventsSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
                        case a.ChannelTypes.GUILD_STAGE_VOICE:
                            return [e.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
                                showManageWebhooks: !1
                            }), e.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelStageVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, d), e.generateChannelStageSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), e.generateChannelEventsSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS), e.generateChannelVoiceChatSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
                                sectionDescription: f ? m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
                                    setUpAutomod: () => {
                                        R.default.open(E, a.GuildSettingsSections.GUILD_AUTOMOD)
                                    }
                                }) : void 0
                            })];
                        case a.ChannelTypes.GUILD_FORUM:
                        case a.ChannelTypes.GUILD_MEDIA:
                            ;
                            let V = U ? m.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL : m.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS,
                                H = U ? m.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL_DESCRIPTION : m.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS_DESCRIPTION;
                            return [e.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), e.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, V, {
                                showPrivateThreads: !1,
                                showCreateThreads: !1,
                                sectionDescription: f ? H.format({
                                    setUpAutomod: () => {
                                        !U && (0, r.trackForumEnableAutomodClicked)(), R.default.open(E, a.GuildSettingsSections.GUILD_AUTOMOD)
                                    }
                                }) : void 0,
                                showClydeAIPermissions: h
                            }), ...(N = G, O = () => e.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, {
                                showVoiceChannelStatusPermission: !1
                            }), N ? [O()] : [])];
                        default:
                            ;
                            return [e.generateChannelGeneralSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), e.generateChannelMembershipSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
                                showPrivateThreads: s.type !== a.ChannelTypes.GUILD_ANNOUNCEMENT,
                                showCreateThreads: !0,
                                showClydeAIPermissions: h
                            }), ...(C = G, L = () => e.generateChannelVoiceSection(u, m.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, {
                                showVoiceChannelStatusPermission: !1
                            }), C ? [L()] : [])]
                    }
                },
                generateGuildPermissionSpec: function(E) {
                    var s, S;
                    let i = new Set,
                        _ = E.hasFeature(a.GuildFeatures.COMMUNITY);
                    return !_ && i.add(a.Permissions.VIEW_GUILD_ANALYTICS.toString()), s = e.generateGuildPermissionSpec(m.default.Messages, D(E.id)), 0 === (S = i).size ? s : s.map(E => ({
                        ...E,
                        permissions: E.permissions.filter(E => !S.has(E.flag.toString()))
                    }))
                },
                getGuildPermissionSpecMap: function(E) {
                    return e.getGuildPermissionSpec(m.default.Messages, D(E.id))
                }
            }
        },
        200900: function(E, s, S) {
            "use strict";
            S.r(s), S.d(s, {
                getGuildPermissionSpec: function() {
                    return n
                },
                generateGuildPermissionSpec: function() {
                    return I
                },
                generateChannelGeneralSection: function() {
                    return t
                },
                generateChannelMembershipSection: function() {
                    return r
                },
                generateChannelTextSection: function() {
                    return o
                },
                generateChannelVoiceSection: function() {
                    return N
                },
                generateChannelVoiceChatSection: function() {
                    return R
                },
                generateChannelStageVoiceSection: function() {
                    return A
                },
                generateChannelStageSection: function() {
                    return O
                },
                generateChannelEventsSection: function() {
                    return P
                },
                renderDescription: function() {
                    return T
                }
            });
            var e = S("843455");

            function i(E) {
                let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return !s && (E.permissions = E.permissions.filter(E => {
                    let {
                        isExperimental: s
                    } = E;
                    return !s
                })), E
            }

            function _(E, s) {
                return E.map(E => s[E.toString()])
            }

            function n(E, s) {
                return {
                    [e.Permissions.VIEW_CHANNEL.toString()]: {
                        title: E.ROLE_PERMISSIONS_VIEW_CHANNEL,
                        description: E.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION,
                        flag: e.Permissions.VIEW_CHANNEL
                    },
                    [e.Permissions.MANAGE_CHANNELS.toString()]: {
                        title: E.MANAGE_CHANNELS,
                        description: E.ROLE_PERMISSIONS_MANAGE_CHANNELS_DESCRIPTION,
                        flag: e.Permissions.MANAGE_CHANNELS
                    },
                    [e.Permissions.MANAGE_ROLES.toString()]: {
                        title: E.MANAGE_ROLES,
                        description: E.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION,
                        flag: e.Permissions.MANAGE_ROLES
                    },
                    [e.Permissions.MANAGE_GUILD_EXPRESSIONS.toString()]: {
                        title: E.MANAGE_EXPRESSIONS,
                        description: E.ROLE_PERMISSIONS_MANAGE_EXPRESSIONS_DESCRIPTION,
                        flag: e.Permissions.MANAGE_GUILD_EXPRESSIONS
                    },
                    [e.Permissions.CREATE_GUILD_EXPRESSIONS.toString()]: {
                        title: E.CREATE_EXPRESSIONS,
                        description: E.ROLE_PERMISSIONS_CREATE_EXPRESSIONS_DESCRIPTION,
                        flag: e.Permissions.CREATE_GUILD_EXPRESSIONS
                    },
                    [e.Permissions.VIEW_AUDIT_LOG.toString()]: {
                        title: E.VIEW_AUDIT_LOG,
                        description: E.ROLE_PERMISSIONS_VIEW_AUDIT_LOG_DESCRIPTION,
                        flag: e.Permissions.VIEW_AUDIT_LOG
                    },
                    [e.Permissions.VIEW_GUILD_ANALYTICS.toString()]: {
                        title: E.VIEW_GUILD_ANALYTICS,
                        description: E.ROLE_PERMISSIONS_VIEW_GUILD_ANALYTICS_DESCRIPTION,
                        flag: e.Permissions.VIEW_GUILD_ANALYTICS
                    },
                    [e.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
                        title: E.VIEW_CREATOR_MONETIZATION_ANALYTICS,
                        description: E.ROLE_PERMISSIONS_VIEW_CREATOR_MONETIZATION_ANALYTICS_DESCRIPTION,
                        flag: e.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS
                    },
                    [e.Permissions.MANAGE_WEBHOOKS.toString()]: {
                        title: E.MANAGE_WEBHOOKS,
                        description: E.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION,
                        flag: e.Permissions.MANAGE_WEBHOOKS
                    },
                    [e.Permissions.MANAGE_GUILD.toString()]: {
                        title: E.MANAGE_SERVER,
                        description: E.ROLE_PERMISSIONS_MANAGE_SERVER_DESCRIPTION,
                        flag: e.Permissions.MANAGE_GUILD
                    },
                    [e.Permissions.CREATE_INSTANT_INVITE.toString()]: {
                        title: E.CREATE_INSTANT_INVITE,
                        description: E.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION,
                        flag: e.Permissions.CREATE_INSTANT_INVITE
                    },
                    [e.Permissions.CHANGE_NICKNAME.toString()]: {
                        title: E.CHANGE_NICKNAME,
                        description: E.ROLE_PERMISSIONS_CHANGE_NICKNAME_DESCRIPTION,
                        flag: e.Permissions.CHANGE_NICKNAME
                    },
                    [e.Permissions.MANAGE_NICKNAMES.toString()]: {
                        title: E.MANAGE_NICKNAMES,
                        description: E.ROLE_PERMISSIONS_MANAGE_NICKNAMES_DESCRIPTION,
                        flag: e.Permissions.MANAGE_NICKNAMES
                    },
                    [e.Permissions.KICK_MEMBERS.toString()]: {
                        title: s.showMembershipManualApprovalPermissions ? E.KICK_MEMBERS_AND_REVIEW_APPLICATIONS : E.KICK_MEMBERS,
                        description: s.showMembershipManualApprovalPermissions ? E.ROLE_PERMISSIONS_KICK_MEMBERS_AND_REVIEW_APPLICATION_DESCRIPTION : E.ROLE_PERMISSIONS_KICK_MEMBERS_DESCRIPTION,
                        flag: e.Permissions.KICK_MEMBERS
                    },
                    [e.Permissions.BAN_MEMBERS.toString()]: {
                        title: E.BAN_MEMBERS,
                        description: E.ROLE_PERMISSIONS_BAN_MEMBERS_DESCRIPTION,
                        flag: e.Permissions.BAN_MEMBERS
                    },
                    [e.Permissions.MODERATE_MEMBERS.toString()]: {
                        title: E.MODERATE_MEMBER,
                        description: E.ROLE_PERMISSIONS_MODERATE_MEMBER_DESCRIPTION,
                        flag: e.Permissions.MODERATE_MEMBERS
                    },
                    [e.Permissions.SEND_MESSAGES.toString()]: {
                        title: s.showForumPermissions ? E.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : E.SEND_MESSAGES,
                        description: s.showForumPermissions ? E.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION : E.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION,
                        flag: e.Permissions.SEND_MESSAGES
                    },
                    [e.Permissions.EMBED_LINKS.toString()]: {
                        title: E.EMBED_LINKS,
                        description: E.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION,
                        flag: e.Permissions.EMBED_LINKS
                    },
                    [e.Permissions.ATTACH_FILES.toString()]: {
                        title: E.ATTACH_FILES,
                        description: E.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION,
                        flag: e.Permissions.ATTACH_FILES
                    },
                    [e.Permissions.ADD_REACTIONS.toString()]: {
                        title: E.ADD_REACTIONS,
                        description: E.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION,
                        flag: e.Permissions.ADD_REACTIONS
                    },
                    [e.Permissions.USE_EXTERNAL_EMOJIS.toString()]: {
                        title: E.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
                        description: E.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION,
                        flag: e.Permissions.USE_EXTERNAL_EMOJIS
                    },
                    [e.Permissions.USE_EXTERNAL_STICKERS.toString()]: {
                        title: E.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
                        description: E.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION,
                        flag: e.Permissions.USE_EXTERNAL_STICKERS
                    },
                    [e.Permissions.MENTION_EVERYONE.toString()]: {
                        title: E.MENTION_EVERYONE,
                        description: E.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION,
                        flag: e.Permissions.MENTION_EVERYONE
                    },
                    [e.Permissions.MANAGE_MESSAGES.toString()]: {
                        title: E.MANAGE_MESSAGES,
                        description: E.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION,
                        flag: e.Permissions.MANAGE_MESSAGES
                    },
                    [e.Permissions.READ_MESSAGE_HISTORY.toString()]: {
                        title: E.READ_MESSAGE_HISTORY,
                        description: E.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION,
                        flag: e.Permissions.READ_MESSAGE_HISTORY
                    },
                    [e.Permissions.SEND_TTS_MESSAGES.toString()]: {
                        title: E.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
                        description: E.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION,
                        flag: e.Permissions.SEND_TTS_MESSAGES
                    },
                    [e.Permissions.USE_APPLICATION_COMMANDS.toString()]: {
                        title: E.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
                        description: E.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_GUILD_DESCRIPTION,
                        flag: e.Permissions.USE_APPLICATION_COMMANDS
                    },
                    [e.Permissions.SEND_VOICE_MESSAGES.toString()]: {
                        title: E.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
                        description: E.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE_GUILD_DESCRIPTION,
                        flag: e.Permissions.SEND_VOICE_MESSAGES
                    },
                    [e.Permissions.USE_CLYDE_AI.toString()]: {
                        title: E.ROLE_PERMISSIONS_USE_CLYDE_AI,
                        description: E.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
                        flag: e.Permissions.USE_CLYDE_AI
                    },
                    [e.Permissions.CONNECT.toString()]: {
                        title: E.CONNECT,
                        description: E.ROLE_PERMISSIONS_CONNECT_DESCRIPTION,
                        flag: e.Permissions.CONNECT
                    },
                    [e.Permissions.SPEAK.toString()]: {
                        title: E.SPEAK,
                        description: E.ROLE_PERMISSIONS_SPEAK_DESCRIPTION,
                        flag: e.Permissions.SPEAK
                    },
                    [e.Permissions.STREAM.toString()]: {
                        title: E.VIDEO,
                        description: E.ROLE_PERMISSIONS_STREAM_DESCRIPTION,
                        flag: e.Permissions.STREAM
                    },
                    [e.Permissions.USE_EMBEDDED_ACTIVITIES.toString()]: {
                        title: E.USE_EMBEDDED_ACTIVITIES,
                        description: E.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION,
                        flag: e.Permissions.USE_EMBEDDED_ACTIVITIES
                    },
                    [e.Permissions.USE_SOUNDBOARD.toString()]: {
                        title: E.USE_SOUNDBOARD,
                        description: (null == s ? void 0 : s.SOUNDBOARD_DESCRIPTION) || E.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION,
                        flag: e.Permissions.USE_SOUNDBOARD
                    },
                    [e.Permissions.USE_EXTERNAL_SOUNDS.toString()]: {
                        title: E.USE_EXTERNAL_SOUNDS,
                        description: E.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
                        flag: e.Permissions.USE_EXTERNAL_SOUNDS
                    },
                    [e.Permissions.USE_VAD.toString()]: {
                        title: E.USE_VAD,
                        description: E.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION,
                        flag: e.Permissions.USE_VAD
                    },
                    [e.Permissions.PRIORITY_SPEAKER.toString()]: {
                        title: E.PRIORITY_SPEAKER,
                        description: (null == s ? void 0 : s.PRIORITY_SPEAKER_DESCRIPTION) || E.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION,
                        flag: e.Permissions.PRIORITY_SPEAKER
                    },
                    [e.Permissions.MUTE_MEMBERS.toString()]: {
                        title: E.MUTE_MEMBERS,
                        description: E.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION,
                        flag: e.Permissions.MUTE_MEMBERS
                    },
                    [e.Permissions.DEAFEN_MEMBERS.toString()]: {
                        title: E.DEAFEN_MEMBERS,
                        description: E.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION,
                        flag: e.Permissions.DEAFEN_MEMBERS
                    },
                    [e.Permissions.MOVE_MEMBERS.toString()]: {
                        title: E.MOVE_MEMBERS,
                        description: E.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION,
                        flag: e.Permissions.MOVE_MEMBERS
                    },
                    [e.Permissions.REQUEST_TO_SPEAK.toString()]: {
                        title: E.REQUEST_TO_SPEAK,
                        description: E.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION,
                        flag: e.Permissions.REQUEST_TO_SPEAK,
                        isExperimental: !0
                    },
                    [e.Permissions.ADMINISTRATOR.toString()]: {
                        title: E.ADMINISTRATOR,
                        description: "string" == typeof E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION ? E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION : E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION.format(),
                        flag: e.Permissions.ADMINISTRATOR
                    },
                    [e.Permissions.MANAGE_EVENTS.toString()]: {
                        title: E.MANAGE_EVENTS,
                        description: E.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION,
                        flag: e.Permissions.MANAGE_EVENTS
                    },
                    [e.Permissions.CREATE_EVENTS.toString()]: {
                        title: E.CREATE_EVENTS,
                        description: E.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION,
                        flag: e.Permissions.CREATE_EVENTS
                    },
                    [e.Permissions.MANAGE_THREADS.toString()]: {
                        title: s.showForumPermissions ? E.MANAGE_THREADS_AND_FORUM_POSTS : E.MANAGE_THREADS,
                        description: s.showForumPermissions ? E.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION : E.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION,
                        flag: e.Permissions.MANAGE_THREADS
                    },
                    [e.Permissions.CREATE_PUBLIC_THREADS.toString()]: {
                        title: E.CREATE_PUBLIC_THREADS,
                        description: E.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION,
                        flag: e.Permissions.CREATE_PUBLIC_THREADS
                    },
                    [e.Permissions.CREATE_PRIVATE_THREADS.toString()]: {
                        title: E.CREATE_PRIVATE_THREADS,
                        description: E.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION,
                        flag: e.Permissions.CREATE_PRIVATE_THREADS
                    },
                    [e.Permissions.SEND_MESSAGES_IN_THREADS.toString()]: {
                        title: s.showForumPermissions ? E.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : E.SEND_MESSAGES_IN_THREADS,
                        description: s.showForumPermissions ? E.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION : E.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION,
                        flag: e.Permissions.SEND_MESSAGES_IN_THREADS
                    },
                    [e.Permissions.USE_CLYDE_AI.toString()]: {
                        title: E.ROLE_PERMISSIONS_USE_CLYDE_AI,
                        description: E.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
                        flag: e.Permissions.USE_CLYDE_AI
                    },
                    [e.Permissions.SET_VOICE_CHANNEL_STATUS.toString()]: {
                        title: E.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
                        description: E.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
                        flag: e.Permissions.SET_VOICE_CHANNEL_STATUS
                    }
                }
            }

            function I(E, s) {
                var S;
                let I = n(E, s),
                    t = [function(E, s, S) {
                        let n = [e.Permissions.VIEW_CHANNEL, e.Permissions.MANAGE_CHANNELS, e.Permissions.MANAGE_ROLES, e.Permissions.CREATE_GUILD_EXPRESSIONS, e.Permissions.MANAGE_GUILD_EXPRESSIONS, e.Permissions.VIEW_AUDIT_LOG, e.Permissions.VIEW_GUILD_ANALYTICS];
                        return S.showCreatorMonetizationAnalyticsPermission && n.push(e.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS), n.push(e.Permissions.MANAGE_WEBHOOKS), n.push(e.Permissions.MANAGE_GUILD), i({
                            title: s.ROLE_PERMISSIONS_SECTION_GENERAL_GUILD,
                            permissions: _(n, E)
                        })
                    }(I, E, s), function(E, s) {
                        let S = [e.Permissions.CREATE_INSTANT_INVITE, e.Permissions.CHANGE_NICKNAME, e.Permissions.MANAGE_NICKNAMES, e.Permissions.KICK_MEMBERS, e.Permissions.BAN_MEMBERS, e.Permissions.MODERATE_MEMBERS];
                        return i({
                            title: s.ROLE_PERMISSIONS_SECTION_MEMBERSHIP,
                            permissions: _(S, E)
                        })
                    }(I, E), function(E, s, S) {
                        let n = [e.Permissions.SEND_MESSAGES, e.Permissions.SEND_MESSAGES_IN_THREADS, e.Permissions.CREATE_PUBLIC_THREADS, e.Permissions.CREATE_PRIVATE_THREADS, e.Permissions.EMBED_LINKS, e.Permissions.ATTACH_FILES, e.Permissions.ADD_REACTIONS, e.Permissions.USE_EXTERNAL_EMOJIS, e.Permissions.USE_EXTERNAL_STICKERS, e.Permissions.MENTION_EVERYONE, e.Permissions.MANAGE_MESSAGES, e.Permissions.MANAGE_THREADS, e.Permissions.READ_MESSAGE_HISTORY, e.Permissions.SEND_TTS_MESSAGES, e.Permissions.USE_APPLICATION_COMMANDS, e.Permissions.SEND_VOICE_MESSAGES, e.Permissions.USE_CLYDE_AI];
                        !S.showClydeAIPermissions && (n = n.filter(E => E !== e.Permissions.USE_CLYDE_AI));
                        let I = {
                            title: s.ROLE_PERMISSIONS_SECTION_TEXT,
                            permissions: _(n, E)
                        };
                        return i(I)
                    }(I, E, s), function(E, s, S) {
                        let n = [e.Permissions.CONNECT, e.Permissions.SPEAK, e.Permissions.STREAM, e.Permissions.USE_EMBEDDED_ACTIVITIES, e.Permissions.USE_SOUNDBOARD, e.Permissions.USE_EXTERNAL_SOUNDS, e.Permissions.USE_VAD, e.Permissions.PRIORITY_SPEAKER, e.Permissions.MUTE_MEMBERS, e.Permissions.DEAFEN_MEMBERS, e.Permissions.MOVE_MEMBERS];
                        S.showVoiceChannelStatusPermission && n.push(e.Permissions.SET_VOICE_CHANNEL_STATUS);
                        let I = {
                            title: s.ROLE_PERMISSIONS_SECTION_VOICE,
                            permissions: _(n, E)
                        };
                        return i(I)
                    }(I, E, s)];
                return s.showStageChannelPermissions && t.push(function(E, s, S) {
                    let n = {
                        title: s.ROLE_PERMISSIONS_SECTION_STAGE,
                        permissions: _([e.Permissions.REQUEST_TO_SPEAK], E)
                    };
                    return i(n, S.showExperimental)
                }(I, E, s)), t.push(function(E, s, S) {
                    let n = {
                        title: s.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS,
                        permissions: _([e.Permissions.CREATE_EVENTS, e.Permissions.MANAGE_EVENTS], E)
                    };
                    return i(n, S.showExperimental)
                }(I, E, s)), t.push((S = I, i({
                    title: E.ROLE_PERMISSIONS_SECTION_ADVANCED,
                    permissions: _([e.Permissions.ADMINISTRATOR], S)
                }))), t
            }

            function t(E, s) {
                let S = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    showManageWebhooks: !0
                };
                return {
                    title: s,
                    permissions: _((null == S ? void 0 : S.showManageWebhooks) ? [e.Permissions.VIEW_CHANNEL, e.Permissions.MANAGE_CHANNELS, e.Permissions.MANAGE_ROLES, e.Permissions.MANAGE_WEBHOOKS] : [e.Permissions.VIEW_CHANNEL, e.Permissions.MANAGE_CHANNELS, e.Permissions.MANAGE_ROLES], E)
                }
            }

            function r(E, s) {
                return {
                    title: s,
                    permissions: _([e.Permissions.CREATE_INSTANT_INVITE], E)
                }
            }

            function o(E, s, S) {
                let i = [e.Permissions.SEND_MESSAGES, e.Permissions.SEND_MESSAGES_IN_THREADS, e.Permissions.CREATE_PUBLIC_THREADS, e.Permissions.CREATE_PRIVATE_THREADS, e.Permissions.EMBED_LINKS, e.Permissions.ATTACH_FILES, e.Permissions.ADD_REACTIONS, e.Permissions.USE_EXTERNAL_EMOJIS, e.Permissions.USE_EXTERNAL_STICKERS, e.Permissions.MENTION_EVERYONE, e.Permissions.MANAGE_MESSAGES, e.Permissions.MANAGE_THREADS, e.Permissions.READ_MESSAGE_HISTORY, e.Permissions.SEND_TTS_MESSAGES, e.Permissions.USE_APPLICATION_COMMANDS, e.Permissions.SEND_VOICE_MESSAGES, e.Permissions.USE_CLYDE_AI, e.Permissions.USE_EMBEDDED_ACTIVITIES];
                return (!S.showPrivateThreads || !S.showCreateThreads) && (i = i.filter(E => E !== e.Permissions.CREATE_PRIVATE_THREADS)), !S.showCreateThreads && (i = i.filter(E => E !== e.Permissions.CREATE_PUBLIC_THREADS)), !S.showClydeAIPermissions && (i = i.filter(E => E !== e.Permissions.USE_CLYDE_AI)), {
                    title: s,
                    description: S.sectionDescription,
                    permissions: _(i, E)
                }
            }

            function N(E, s, S) {
                let i = [e.Permissions.CONNECT, e.Permissions.SPEAK, e.Permissions.STREAM, e.Permissions.USE_EMBEDDED_ACTIVITIES, e.Permissions.USE_SOUNDBOARD, e.Permissions.USE_EXTERNAL_SOUNDS, e.Permissions.USE_VAD, e.Permissions.PRIORITY_SPEAKER, e.Permissions.MUTE_MEMBERS, e.Permissions.DEAFEN_MEMBERS, e.Permissions.MOVE_MEMBERS];
                return S.showVoiceChannelStatusPermission && i.push(e.Permissions.SET_VOICE_CHANNEL_STATUS), {
                    title: s,
                    permissions: _(i, E)
                }
            }

            function R(E, s, S) {
                let i = [e.Permissions.SEND_MESSAGES, e.Permissions.EMBED_LINKS, e.Permissions.ATTACH_FILES, e.Permissions.ADD_REACTIONS, e.Permissions.USE_EXTERNAL_EMOJIS, e.Permissions.USE_EXTERNAL_STICKERS, e.Permissions.MENTION_EVERYONE, e.Permissions.MANAGE_MESSAGES, e.Permissions.READ_MESSAGE_HISTORY, e.Permissions.SEND_TTS_MESSAGES, e.Permissions.USE_APPLICATION_COMMANDS];
                return {
                    title: s,
                    description: S.sectionDescription,
                    permissions: _(i, E)
                }
            }

            function A(E, s, S) {
                return {
                    title: s,
                    permissions: _(S ? [e.Permissions.CONNECT, e.Permissions.STREAM, e.Permissions.MUTE_MEMBERS, e.Permissions.MOVE_MEMBERS] : [e.Permissions.CONNECT, e.Permissions.MUTE_MEMBERS, e.Permissions.MOVE_MEMBERS], E)
                }
            }

            function O(E, s) {
                return {
                    title: s,
                    permissions: _([e.Permissions.REQUEST_TO_SPEAK, e.Permissions.MENTION_EVERYONE], E)
                }
            }

            function P(E, s) {
                let S = [e.Permissions.CREATE_EVENTS, e.Permissions.MANAGE_EVENTS],
                    i = {
                        title: s,
                        permissions: _(S, E)
                    };
                return i
            }

            function T(E) {
                return null == E ? E : "string" == typeof E ? E.trim() : "function" == typeof E.format ? E.format() : E
            }
        }
    }
]);