            "use strict";
            n.r(t), n.d(t, {
                OrderedPermissions: function() {
                    return s
                },
                containsDisallowedPermission: function() {
                    return r
                },
                getPermissionName: function() {
                    return o
                }
            }), n("70102");
            var i = n("316693"),
                a = n("49111"),
                l = n("782340");
            let s = [a.Permissions.ADMINISTRATOR, a.Permissions.MANAGE_GUILD, a.Permissions.MANAGE_ROLES, a.Permissions.MANAGE_CHANNELS, a.Permissions.KICK_MEMBERS, a.Permissions.BAN_MEMBERS, a.Permissions.CREATE_INSTANT_INVITE, a.Permissions.MANAGE_NICKNAMES, a.Permissions.CHANGE_NICKNAME, a.Permissions.MANAGE_GUILD_EXPRESSIONS, a.Permissions.CREATE_GUILD_EXPRESSIONS, a.Permissions.MANAGE_WEBHOOKS, a.Permissions.VIEW_AUDIT_LOG, a.Permissions.VIEW_CHANNEL, a.Permissions.MANAGE_EVENTS, a.Permissions.CREATE_EVENTS, a.Permissions.MODERATE_MEMBERS, a.Permissions.VIEW_GUILD_ANALYTICS, a.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS, a.Permissions.SEND_MESSAGES, a.Permissions.SEND_MESSAGES_IN_THREADS, a.Permissions.CREATE_PUBLIC_THREADS, a.Permissions.CREATE_PRIVATE_THREADS, a.Permissions.SEND_TTS_MESSAGES, a.Permissions.MANAGE_MESSAGES, a.Permissions.MANAGE_THREADS, a.Permissions.EMBED_LINKS, a.Permissions.ATTACH_FILES, a.Permissions.READ_MESSAGE_HISTORY, a.Permissions.MENTION_EVERYONE, a.Permissions.ADD_REACTIONS, a.Permissions.USE_EXTERNAL_EMOJIS, a.Permissions.USE_EXTERNAL_STICKERS, a.Permissions.USE_APPLICATION_COMMANDS, a.Permissions.SEND_VOICE_MESSAGES, a.Permissions.USE_CLYDE_AI, a.Permissions.CONNECT, a.Permissions.SPEAK, a.Permissions.MUTE_MEMBERS, a.Permissions.DEAFEN_MEMBERS, a.Permissions.MOVE_MEMBERS, a.Permissions.USE_VAD, a.Permissions.PRIORITY_SPEAKER, a.Permissions.REQUEST_TO_SPEAK, a.Permissions.STREAM, a.Permissions.USE_EMBEDDED_ACTIVITIES, a.Permissions.USE_SOUNDBOARD, a.Permissions.USE_EXTERNAL_SOUNDS, a.Permissions.SET_VOICE_CHANNEL_STATUS];

            function r(e) {
                return Object.values(a.Permissions).some(t => i.default.has(e, t) && !s.includes(t))
            }
            let u = {
                [a.Permissions.ADMINISTRATOR.toString()]: () => l.default.Messages.ADMINISTRATOR,
                [a.Permissions.MANAGE_GUILD.toString()]: () => l.default.Messages.MANAGE_SERVER,
                [a.Permissions.MANAGE_ROLES.toString()]: () => l.default.Messages.MANAGE_ROLES,
                [a.Permissions.MANAGE_CHANNELS.toString()]: () => l.default.Messages.MANAGE_CHANNELS,
                [a.Permissions.KICK_MEMBERS.toString()]: () => l.default.Messages.KICK_MEMBERS,
                [a.Permissions.BAN_MEMBERS.toString()]: () => l.default.Messages.BAN_MEMBERS,
                [a.Permissions.CREATE_INSTANT_INVITE.toString()]: () => l.default.Messages.CREATE_INSTANT_INVITE,
                [a.Permissions.MANAGE_NICKNAMES.toString()]: () => l.default.Messages.MANAGE_NICKNAMES,
                [a.Permissions.CHANGE_NICKNAME.toString()]: () => l.default.Messages.CHANGE_NICKNAME,
                [a.Permissions.MANAGE_GUILD_EXPRESSIONS.toString()]: () => l.default.Messages.MANAGE_EXPRESSIONS,
                [a.Permissions.CREATE_GUILD_EXPRESSIONS.toString()]: () => l.default.Messages.CREATE_EXPRESSIONS,
                [a.Permissions.MANAGE_WEBHOOKS.toString()]: () => l.default.Messages.MANAGE_WEBHOOKS,
                [a.Permissions.VIEW_AUDIT_LOG.toString()]: () => l.default.Messages.VIEW_AUDIT_LOG,
                [a.Permissions.VIEW_CHANNEL.toString()]: () => l.default.Messages.READ_MESSAGES,
                [a.Permissions.SEND_MESSAGES.toString()]: () => l.default.Messages.SEND_MESSAGES,
                [a.Permissions.SEND_TTS_MESSAGES.toString()]: () => l.default.Messages.SEND_TTS_MESSAGES,
                [a.Permissions.MANAGE_MESSAGES.toString()]: () => l.default.Messages.MANAGE_MESSAGES,
                [a.Permissions.EMBED_LINKS.toString()]: () => l.default.Messages.EMBED_LINKS,
                [a.Permissions.ATTACH_FILES.toString()]: () => l.default.Messages.ATTACH_FILES,
                [a.Permissions.READ_MESSAGE_HISTORY.toString()]: () => l.default.Messages.READ_MESSAGE_HISTORY,
                [a.Permissions.MENTION_EVERYONE.toString()]: () => l.default.Messages.MENTION_EVERYONE,
                [a.Permissions.ADD_REACTIONS.toString()]: () => l.default.Messages.ADD_REACTIONS,
                [a.Permissions.USE_EXTERNAL_EMOJIS.toString()]: () => l.default.Messages.USE_EXTERNAL_EMOJIS,
                [a.Permissions.USE_EXTERNAL_STICKERS.toString()]: () => l.default.Messages.USE_EXTERNAL_STICKERS,
                [a.Permissions.USE_APPLICATION_COMMANDS.toString()]: () => l.default.Messages.USE_APPLICATION_COMMANDS,
                [a.Permissions.SEND_VOICE_MESSAGES.toString()]: () => l.default.Messages.SEND_VOICE_MESSAGE,
                [a.Permissions.CONNECT.toString()]: () => l.default.Messages.CONNECT,
                [a.Permissions.SPEAK.toString()]: () => l.default.Messages.SPEAK,
                [a.Permissions.MUTE_MEMBERS.toString()]: () => l.default.Messages.MUTE_MEMBERS,
                [a.Permissions.DEAFEN_MEMBERS.toString()]: () => l.default.Messages.DEAFEN_MEMBERS,
                [a.Permissions.MOVE_MEMBERS.toString()]: () => l.default.Messages.MOVE_MEMBERS,
                [a.Permissions.USE_VAD.toString()]: () => l.default.Messages.USE_VAD,
                [a.Permissions.PRIORITY_SPEAKER.toString()]: () => l.default.Messages.PRIORITY_SPEAKER,
                [a.Permissions.CREATE_PUBLIC_THREADS.toString()]: () => l.default.Messages.CREATE_PUBLIC_THREADS,
                [a.Permissions.CREATE_PRIVATE_THREADS.toString()]: () => l.default.Messages.CREATE_PRIVATE_THREADS,
                [a.Permissions.SEND_MESSAGES_IN_THREADS.toString()]: () => l.default.Messages.SEND_MESSAGES_IN_THREADS,
                [a.Permissions.MANAGE_THREADS.toString()]: () => l.default.Messages.MANAGE_THREADS,
                [a.Permissions.MANAGE_EVENTS.toString()]: () => l.default.Messages.MANAGE_EVENTS,
                [a.Permissions.CREATE_EVENTS.toString()]: () => l.default.Messages.CREATE_EVENTS,
                [a.Permissions.MODERATE_MEMBERS.toString()]: () => l.default.Messages.MODERATE_MEMBERS_PERMISSION_INTERNAL,
                [a.Permissions.REQUEST_TO_SPEAK.toString()]: () => l.default.Messages.REQUEST_TO_SPEAK,
                [a.Permissions.VIEW_GUILD_ANALYTICS.toString()]: () => l.default.Messages.VIEW_GUILD_ANALYTICS,
                [a.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: () => l.default.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS,
                [a.Permissions.STREAM.toString()]: () => l.default.Messages.VIDEO,
                [a.Permissions.USE_EMBEDDED_ACTIVITIES.toString()]: () => l.default.Messages.USE_EMBEDDED_ACTIVITIES,
                [a.Permissions.USE_SOUNDBOARD.toString()]: () => l.default.Messages.USE_SOUNDBOARD,
                [a.Permissions.USE_EXTERNAL_SOUNDS.toString()]: () => l.default.Messages.USE_EXTERNAL_SOUNDS,
                [a.Permissions.USE_CLYDE_AI.toString()]: () => l.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
                [a.Permissions.SET_VOICE_CHANNEL_STATUS.toString()]: () => l.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
            };

            function o(e) {
                let t = e.toString(),
                    n = u[t];
                if (null == n) throw Error("Unknown permission. Did you provide a _single_ bit flag? Perm: ".concat(e));
                return n()
            }