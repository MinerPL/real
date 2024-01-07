            "use strict";
            e.r(E), e.d(E, {
                OrderedPermissions: function() {
                    return r
                },
                containsDisallowedPermission: function() {
                    return t
                },
                getPermissionName: function() {
                    return _
                }
            }), e("70102");
            var i = e("316693"),
                S = e("49111"),
                n = e("782340");
            let r = [S.Permissions.ADMINISTRATOR, S.Permissions.MANAGE_GUILD, S.Permissions.MANAGE_ROLES, S.Permissions.MANAGE_CHANNELS, S.Permissions.KICK_MEMBERS, S.Permissions.BAN_MEMBERS, S.Permissions.CREATE_INSTANT_INVITE, S.Permissions.MANAGE_NICKNAMES, S.Permissions.CHANGE_NICKNAME, S.Permissions.MANAGE_GUILD_EXPRESSIONS, S.Permissions.CREATE_GUILD_EXPRESSIONS, S.Permissions.MANAGE_WEBHOOKS, S.Permissions.VIEW_AUDIT_LOG, S.Permissions.VIEW_CHANNEL, S.Permissions.MANAGE_EVENTS, S.Permissions.CREATE_EVENTS, S.Permissions.MODERATE_MEMBERS, S.Permissions.VIEW_GUILD_ANALYTICS, S.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS, S.Permissions.SEND_MESSAGES, S.Permissions.SEND_MESSAGES_IN_THREADS, S.Permissions.CREATE_PUBLIC_THREADS, S.Permissions.CREATE_PRIVATE_THREADS, S.Permissions.SEND_TTS_MESSAGES, S.Permissions.MANAGE_MESSAGES, S.Permissions.MANAGE_THREADS, S.Permissions.EMBED_LINKS, S.Permissions.ATTACH_FILES, S.Permissions.READ_MESSAGE_HISTORY, S.Permissions.MENTION_EVERYONE, S.Permissions.ADD_REACTIONS, S.Permissions.USE_EXTERNAL_EMOJIS, S.Permissions.USE_EXTERNAL_STICKERS, S.Permissions.USE_APPLICATION_COMMANDS, S.Permissions.SEND_VOICE_MESSAGES, S.Permissions.USE_CLYDE_AI, S.Permissions.CONNECT, S.Permissions.SPEAK, S.Permissions.MUTE_MEMBERS, S.Permissions.DEAFEN_MEMBERS, S.Permissions.MOVE_MEMBERS, S.Permissions.USE_VAD, S.Permissions.PRIORITY_SPEAKER, S.Permissions.REQUEST_TO_SPEAK, S.Permissions.STREAM, S.Permissions.USE_EMBEDDED_ACTIVITIES, S.Permissions.USE_SOUNDBOARD, S.Permissions.USE_EXTERNAL_SOUNDS, S.Permissions.SET_VOICE_CHANNEL_STATUS];

            function t(s) {
                return Object.values(S.Permissions).some(E => i.default.has(s, E) && !r.includes(E))
            }
            let A = {
                [S.Permissions.ADMINISTRATOR.toString()]: () => n.default.Messages.ADMINISTRATOR,
                [S.Permissions.MANAGE_GUILD.toString()]: () => n.default.Messages.MANAGE_SERVER,
                [S.Permissions.MANAGE_ROLES.toString()]: () => n.default.Messages.MANAGE_ROLES,
                [S.Permissions.MANAGE_CHANNELS.toString()]: () => n.default.Messages.MANAGE_CHANNELS,
                [S.Permissions.KICK_MEMBERS.toString()]: () => n.default.Messages.KICK_MEMBERS,
                [S.Permissions.BAN_MEMBERS.toString()]: () => n.default.Messages.BAN_MEMBERS,
                [S.Permissions.CREATE_INSTANT_INVITE.toString()]: () => n.default.Messages.CREATE_INSTANT_INVITE,
                [S.Permissions.MANAGE_NICKNAMES.toString()]: () => n.default.Messages.MANAGE_NICKNAMES,
                [S.Permissions.CHANGE_NICKNAME.toString()]: () => n.default.Messages.CHANGE_NICKNAME,
                [S.Permissions.MANAGE_GUILD_EXPRESSIONS.toString()]: () => n.default.Messages.MANAGE_EXPRESSIONS,
                [S.Permissions.CREATE_GUILD_EXPRESSIONS.toString()]: () => n.default.Messages.CREATE_EXPRESSIONS,
                [S.Permissions.MANAGE_WEBHOOKS.toString()]: () => n.default.Messages.MANAGE_WEBHOOKS,
                [S.Permissions.VIEW_AUDIT_LOG.toString()]: () => n.default.Messages.VIEW_AUDIT_LOG,
                [S.Permissions.VIEW_CHANNEL.toString()]: () => n.default.Messages.READ_MESSAGES,
                [S.Permissions.SEND_MESSAGES.toString()]: () => n.default.Messages.SEND_MESSAGES,
                [S.Permissions.SEND_TTS_MESSAGES.toString()]: () => n.default.Messages.SEND_TTS_MESSAGES,
                [S.Permissions.MANAGE_MESSAGES.toString()]: () => n.default.Messages.MANAGE_MESSAGES,
                [S.Permissions.EMBED_LINKS.toString()]: () => n.default.Messages.EMBED_LINKS,
                [S.Permissions.ATTACH_FILES.toString()]: () => n.default.Messages.ATTACH_FILES,
                [S.Permissions.READ_MESSAGE_HISTORY.toString()]: () => n.default.Messages.READ_MESSAGE_HISTORY,
                [S.Permissions.MENTION_EVERYONE.toString()]: () => n.default.Messages.MENTION_EVERYONE,
                [S.Permissions.ADD_REACTIONS.toString()]: () => n.default.Messages.ADD_REACTIONS,
                [S.Permissions.USE_EXTERNAL_EMOJIS.toString()]: () => n.default.Messages.USE_EXTERNAL_EMOJIS,
                [S.Permissions.USE_EXTERNAL_STICKERS.toString()]: () => n.default.Messages.USE_EXTERNAL_STICKERS,
                [S.Permissions.USE_APPLICATION_COMMANDS.toString()]: () => n.default.Messages.USE_APPLICATION_COMMANDS,
                [S.Permissions.SEND_VOICE_MESSAGES.toString()]: () => n.default.Messages.SEND_VOICE_MESSAGE,
                [S.Permissions.CONNECT.toString()]: () => n.default.Messages.CONNECT,
                [S.Permissions.SPEAK.toString()]: () => n.default.Messages.SPEAK,
                [S.Permissions.MUTE_MEMBERS.toString()]: () => n.default.Messages.MUTE_MEMBERS,
                [S.Permissions.DEAFEN_MEMBERS.toString()]: () => n.default.Messages.DEAFEN_MEMBERS,
                [S.Permissions.MOVE_MEMBERS.toString()]: () => n.default.Messages.MOVE_MEMBERS,
                [S.Permissions.USE_VAD.toString()]: () => n.default.Messages.USE_VAD,
                [S.Permissions.PRIORITY_SPEAKER.toString()]: () => n.default.Messages.PRIORITY_SPEAKER,
                [S.Permissions.CREATE_PUBLIC_THREADS.toString()]: () => n.default.Messages.CREATE_PUBLIC_THREADS,
                [S.Permissions.CREATE_PRIVATE_THREADS.toString()]: () => n.default.Messages.CREATE_PRIVATE_THREADS,
                [S.Permissions.SEND_MESSAGES_IN_THREADS.toString()]: () => n.default.Messages.SEND_MESSAGES_IN_THREADS,
                [S.Permissions.MANAGE_THREADS.toString()]: () => n.default.Messages.MANAGE_THREADS,
                [S.Permissions.MANAGE_EVENTS.toString()]: () => n.default.Messages.MANAGE_EVENTS,
                [S.Permissions.CREATE_EVENTS.toString()]: () => n.default.Messages.CREATE_EVENTS,
                [S.Permissions.MODERATE_MEMBERS.toString()]: () => n.default.Messages.MODERATE_MEMBERS_PERMISSION_INTERNAL,
                [S.Permissions.REQUEST_TO_SPEAK.toString()]: () => n.default.Messages.REQUEST_TO_SPEAK,
                [S.Permissions.VIEW_GUILD_ANALYTICS.toString()]: () => n.default.Messages.VIEW_GUILD_ANALYTICS,
                [S.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: () => n.default.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS,
                [S.Permissions.STREAM.toString()]: () => n.default.Messages.VIDEO,
                [S.Permissions.USE_EMBEDDED_ACTIVITIES.toString()]: () => n.default.Messages.USE_EMBEDDED_ACTIVITIES,
                [S.Permissions.USE_SOUNDBOARD.toString()]: () => n.default.Messages.USE_SOUNDBOARD,
                [S.Permissions.USE_EXTERNAL_SOUNDS.toString()]: () => n.default.Messages.USE_EXTERNAL_SOUNDS,
                [S.Permissions.USE_CLYDE_AI.toString()]: () => n.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
                [S.Permissions.SET_VOICE_CHANNEL_STATUS.toString()]: () => n.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
            };

            function _(s) {
                let E = s.toString(),
                    e = A[E];
                if (null == e) throw Error("Unknown permission. Did you provide a _single_ bit flag? Perm: ".concat(s));
                return e()
            }