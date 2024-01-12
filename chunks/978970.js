            "use strict";
            n.r(t), n.d(t, {
                OrderedPermissions: function() {
                    return a
                },
                containsDisallowedPermission: function() {
                    return o
                },
                getPermissionName: function() {
                    return u
                }
            }), n("70102");
            var s = n("316693"),
                i = n("49111"),
                r = n("782340");
            let a = [i.Permissions.ADMINISTRATOR, i.Permissions.MANAGE_GUILD, i.Permissions.MANAGE_ROLES, i.Permissions.MANAGE_CHANNELS, i.Permissions.KICK_MEMBERS, i.Permissions.BAN_MEMBERS, i.Permissions.CREATE_INSTANT_INVITE, i.Permissions.MANAGE_NICKNAMES, i.Permissions.CHANGE_NICKNAME, i.Permissions.MANAGE_GUILD_EXPRESSIONS, i.Permissions.CREATE_GUILD_EXPRESSIONS, i.Permissions.MANAGE_WEBHOOKS, i.Permissions.VIEW_AUDIT_LOG, i.Permissions.VIEW_CHANNEL, i.Permissions.MANAGE_EVENTS, i.Permissions.CREATE_EVENTS, i.Permissions.MODERATE_MEMBERS, i.Permissions.VIEW_GUILD_ANALYTICS, i.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS, i.Permissions.SEND_MESSAGES, i.Permissions.SEND_MESSAGES_IN_THREADS, i.Permissions.CREATE_PUBLIC_THREADS, i.Permissions.CREATE_PRIVATE_THREADS, i.Permissions.SEND_TTS_MESSAGES, i.Permissions.MANAGE_MESSAGES, i.Permissions.MANAGE_THREADS, i.Permissions.EMBED_LINKS, i.Permissions.ATTACH_FILES, i.Permissions.READ_MESSAGE_HISTORY, i.Permissions.MENTION_EVERYONE, i.Permissions.ADD_REACTIONS, i.Permissions.USE_EXTERNAL_EMOJIS, i.Permissions.USE_EXTERNAL_STICKERS, i.Permissions.USE_APPLICATION_COMMANDS, i.Permissions.SEND_VOICE_MESSAGES, i.Permissions.USE_CLYDE_AI, i.Permissions.CONNECT, i.Permissions.SPEAK, i.Permissions.MUTE_MEMBERS, i.Permissions.DEAFEN_MEMBERS, i.Permissions.MOVE_MEMBERS, i.Permissions.USE_VAD, i.Permissions.PRIORITY_SPEAKER, i.Permissions.REQUEST_TO_SPEAK, i.Permissions.STREAM, i.Permissions.USE_EMBEDDED_ACTIVITIES, i.Permissions.USE_SOUNDBOARD, i.Permissions.USE_EXTERNAL_SOUNDS, i.Permissions.SET_VOICE_CHANNEL_STATUS];

            function o(e) {
                return Object.values(i.Permissions).some(t => s.default.has(e, t) && !a.includes(t))
            }
            let d = {
                [i.Permissions.ADMINISTRATOR.toString()]: () => r.default.Messages.ADMINISTRATOR,
                [i.Permissions.MANAGE_GUILD.toString()]: () => r.default.Messages.MANAGE_SERVER,
                [i.Permissions.MANAGE_ROLES.toString()]: () => r.default.Messages.MANAGE_ROLES,
                [i.Permissions.MANAGE_CHANNELS.toString()]: () => r.default.Messages.MANAGE_CHANNELS,
                [i.Permissions.KICK_MEMBERS.toString()]: () => r.default.Messages.KICK_MEMBERS,
                [i.Permissions.BAN_MEMBERS.toString()]: () => r.default.Messages.BAN_MEMBERS,
                [i.Permissions.CREATE_INSTANT_INVITE.toString()]: () => r.default.Messages.CREATE_INSTANT_INVITE,
                [i.Permissions.MANAGE_NICKNAMES.toString()]: () => r.default.Messages.MANAGE_NICKNAMES,
                [i.Permissions.CHANGE_NICKNAME.toString()]: () => r.default.Messages.CHANGE_NICKNAME,
                [i.Permissions.MANAGE_GUILD_EXPRESSIONS.toString()]: () => r.default.Messages.MANAGE_EXPRESSIONS,
                [i.Permissions.CREATE_GUILD_EXPRESSIONS.toString()]: () => r.default.Messages.CREATE_EXPRESSIONS,
                [i.Permissions.MANAGE_WEBHOOKS.toString()]: () => r.default.Messages.MANAGE_WEBHOOKS,
                [i.Permissions.VIEW_AUDIT_LOG.toString()]: () => r.default.Messages.VIEW_AUDIT_LOG,
                [i.Permissions.VIEW_CHANNEL.toString()]: () => r.default.Messages.READ_MESSAGES,
                [i.Permissions.SEND_MESSAGES.toString()]: () => r.default.Messages.SEND_MESSAGES,
                [i.Permissions.SEND_TTS_MESSAGES.toString()]: () => r.default.Messages.SEND_TTS_MESSAGES,
                [i.Permissions.MANAGE_MESSAGES.toString()]: () => r.default.Messages.MANAGE_MESSAGES,
                [i.Permissions.EMBED_LINKS.toString()]: () => r.default.Messages.EMBED_LINKS,
                [i.Permissions.ATTACH_FILES.toString()]: () => r.default.Messages.ATTACH_FILES,
                [i.Permissions.READ_MESSAGE_HISTORY.toString()]: () => r.default.Messages.READ_MESSAGE_HISTORY,
                [i.Permissions.MENTION_EVERYONE.toString()]: () => r.default.Messages.MENTION_EVERYONE,
                [i.Permissions.ADD_REACTIONS.toString()]: () => r.default.Messages.ADD_REACTIONS,
                [i.Permissions.USE_EXTERNAL_EMOJIS.toString()]: () => r.default.Messages.USE_EXTERNAL_EMOJIS,
                [i.Permissions.USE_EXTERNAL_STICKERS.toString()]: () => r.default.Messages.USE_EXTERNAL_STICKERS,
                [i.Permissions.USE_APPLICATION_COMMANDS.toString()]: () => r.default.Messages.USE_APPLICATION_COMMANDS,
                [i.Permissions.SEND_VOICE_MESSAGES.toString()]: () => r.default.Messages.SEND_VOICE_MESSAGE,
                [i.Permissions.CONNECT.toString()]: () => r.default.Messages.CONNECT,
                [i.Permissions.SPEAK.toString()]: () => r.default.Messages.SPEAK,
                [i.Permissions.MUTE_MEMBERS.toString()]: () => r.default.Messages.MUTE_MEMBERS,
                [i.Permissions.DEAFEN_MEMBERS.toString()]: () => r.default.Messages.DEAFEN_MEMBERS,
                [i.Permissions.MOVE_MEMBERS.toString()]: () => r.default.Messages.MOVE_MEMBERS,
                [i.Permissions.USE_VAD.toString()]: () => r.default.Messages.USE_VAD,
                [i.Permissions.PRIORITY_SPEAKER.toString()]: () => r.default.Messages.PRIORITY_SPEAKER,
                [i.Permissions.CREATE_PUBLIC_THREADS.toString()]: () => r.default.Messages.CREATE_PUBLIC_THREADS,
                [i.Permissions.CREATE_PRIVATE_THREADS.toString()]: () => r.default.Messages.CREATE_PRIVATE_THREADS,
                [i.Permissions.SEND_MESSAGES_IN_THREADS.toString()]: () => r.default.Messages.SEND_MESSAGES_IN_THREADS,
                [i.Permissions.MANAGE_THREADS.toString()]: () => r.default.Messages.MANAGE_THREADS,
                [i.Permissions.MANAGE_EVENTS.toString()]: () => r.default.Messages.MANAGE_EVENTS,
                [i.Permissions.CREATE_EVENTS.toString()]: () => r.default.Messages.CREATE_EVENTS,
                [i.Permissions.MODERATE_MEMBERS.toString()]: () => r.default.Messages.MODERATE_MEMBERS_PERMISSION_INTERNAL,
                [i.Permissions.REQUEST_TO_SPEAK.toString()]: () => r.default.Messages.REQUEST_TO_SPEAK,
                [i.Permissions.VIEW_GUILD_ANALYTICS.toString()]: () => r.default.Messages.VIEW_GUILD_ANALYTICS,
                [i.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: () => r.default.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS,
                [i.Permissions.STREAM.toString()]: () => r.default.Messages.VIDEO,
                [i.Permissions.USE_EMBEDDED_ACTIVITIES.toString()]: () => r.default.Messages.USE_EMBEDDED_ACTIVITIES,
                [i.Permissions.USE_SOUNDBOARD.toString()]: () => r.default.Messages.USE_SOUNDBOARD,
                [i.Permissions.USE_EXTERNAL_SOUNDS.toString()]: () => r.default.Messages.USE_EXTERNAL_SOUNDS,
                [i.Permissions.USE_CLYDE_AI.toString()]: () => r.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
                [i.Permissions.SET_VOICE_CHANNEL_STATUS.toString()]: () => r.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
            };

            function u(e) {
                let t = e.toString(),
                    n = d[t];
                if (null == n) throw Error("Unknown permission. Did you provide a _single_ bit flag? Perm: ".concat(e));
                return n()
            }