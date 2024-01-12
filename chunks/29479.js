            "use strict";
            n.r(t), n.d(t, {
                FAKE_SCOPES: function() {
                    return r
                },
                OrderedAccountScopes: function() {
                    return a
                },
                ValidScopes: function() {
                    return o
                },
                RemovedScopes: function() {
                    return d
                },
                getScopeName: function() {
                    return u
                },
                getSecurityMessage: function() {
                    return l
                }
            });
            var s = n("49111"),
                i = n("782340");
            let r = [() => i.default.Messages.OAUTH2_FAKE_SCOPE_1, () => i.default.Messages.OAUTH2_FAKE_SCOPE_2, () => i.default.Messages.OAUTH2_FAKE_SCOPE_3, () => i.default.Messages.OAUTH2_FAKE_SCOPE_4, () => i.default.Messages.OAUTH2_FAKE_SCOPE_5, () => i.default.Messages.OAUTH2_FAKE_SCOPE_6, () => i.default.Messages.OAUTH2_FAKE_SCOPE_7, () => i.default.Messages.OAUTH2_FAKE_SCOPE_8],
                a = [s.OAuth2Scopes.BOT, s.OAuth2Scopes.IDENTIFY, s.OAuth2Scopes.EMAIL, s.OAuth2Scopes.CONNECTIONS, s.OAuth2Scopes.MESSAGES_READ, s.OAuth2Scopes.GUILDS, s.OAuth2Scopes.GUILDS_JOIN, s.OAuth2Scopes.GUILDS_MEMBERS_READ, s.OAuth2Scopes.GDM_JOIN, s.OAuth2Scopes.RPC, s.OAuth2Scopes.RPC_NOTIFICATIONS_READ, s.OAuth2Scopes.RPC_VOICE_READ, s.OAuth2Scopes.RPC_VOICE_WRITE, s.OAuth2Scopes.RPC_VIDEO_READ, s.OAuth2Scopes.RPC_VIDEO_WRITE, s.OAuth2Scopes.RPC_SCREENSHARE_READ, s.OAuth2Scopes.RPC_SCREENSHARE_WRITE, s.OAuth2Scopes.RPC_ACTIVITIES_WRITE, s.OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD, s.OAuth2Scopes.APPLICATIONS_BUILDS_READ, s.OAuth2Scopes.APPLICATIONS_COMMANDS, s.OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE, s.OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE, s.OAuth2Scopes.APPLICATIONS_STORE_UPDATE, s.OAuth2Scopes.APPLICATIONS_ENTITLEMENTS, s.OAuth2Scopes.ACTIVITIES_READ, s.OAuth2Scopes.ACTIVITIES_WRITE, s.OAuth2Scopes.RELATIONSHIPS_READ, s.OAuth2Scopes.VOICE, s.OAuth2Scopes.DM_CHANNELS_READ, s.OAuth2Scopes.ROLE_CONNECTIONS_WRITE],
                o = a.concat([s.OAuth2Scopes.WEBHOOK_INCOMING, s.OAuth2Scopes.BOT]),
                d = ["rpc.api"];

            function u(e, t) {
                switch (e) {
                    case s.OAuth2Scopes.IDENTIFY:
                        return i.default.Messages.SCOPE_IDENTIFY;
                    case s.OAuth2Scopes.EMAIL:
                        return i.default.Messages.SCOPE_EMAIL;
                    case s.OAuth2Scopes.BOT:
                        return i.default.Messages.SCOPE_BOT;
                    case s.OAuth2Scopes.CONNECTIONS:
                        return i.default.Messages.SCOPE_CONNECTIONS;
                    case s.OAuth2Scopes.MESSAGES_READ:
                        return i.default.Messages.SCOPE_MESSAGES_READ;
                    case s.OAuth2Scopes.GUILDS:
                        return i.default.Messages.SCOPE_GUILDS;
                    case s.OAuth2Scopes.GUILDS_JOIN:
                        return i.default.Messages.SCOPE_GUILDS_JOIN;
                    case s.OAuth2Scopes.GUILDS_MEMBERS_READ:
                        if (t.includes(s.OAuth2Scopes.VOICE)) return i.default.Messages.SCOPE_GUILDS_MEMBERS_READ_VOICE;
                        return i.default.Messages.SCOPE_GUILDS_MEMBERS_READ;
                    case s.OAuth2Scopes.GDM_JOIN:
                        return i.default.Messages.SCOPE_GDM_JOIN;
                    case s.OAuth2Scopes.RPC:
                        return i.default.Messages.SCOPE_RPC;
                    case s.OAuth2Scopes.RPC_NOTIFICATIONS_READ:
                        return i.default.Messages.SCOPE_RPC_NOTIFICATIONS_READ;
                    case s.OAuth2Scopes.RPC_VOICE_WRITE:
                        return i.default.Messages.SCOPE_RPC_VOICE_WRITE;
                    case s.OAuth2Scopes.RPC_VIDEO_READ:
                        return i.default.Messages.SCOPE_RPC_VIDEO_READ;
                    case s.OAuth2Scopes.RPC_VIDEO_WRITE:
                        return i.default.Messages.SCOPE_RPC_VIDEO_WRITE;
                    case s.OAuth2Scopes.RPC_SCREENSHARE_READ:
                        return i.default.Messages.SCOPE_RPC_SCREENSHARE_READ;
                    case s.OAuth2Scopes.RPC_SCREENSHARE_WRITE:
                        return i.default.Messages.SCOPE_RPC_SCREENSHARE_WRITE;
                    case s.OAuth2Scopes.RPC_VOICE_READ:
                        return i.default.Messages.SCOPE_RPC_VOICE_READ;
                    case s.OAuth2Scopes.RPC_ACTIVITIES_WRITE:
                        return i.default.Messages.SCOPE_RPC_ACTIVITIES_WRITE;
                    case s.OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD:
                        return i.default.Messages.SCOPE_APPLICATIONS_BUILDS_UPLOAD;
                    case s.OAuth2Scopes.APPLICATIONS_BUILDS_READ:
                        return i.default.Messages.SCOPE_APPLICATIONS_BUILDS_READ;
                    case s.OAuth2Scopes.APPLICATIONS_COMMANDS:
                        return i.default.Messages.SCOPE_APPLICATIONS_COMMANDS;
                    case s.OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE:
                        return i.default.Messages.SCOPE_APPLICATIONS_COMMANDS_UPDATE;
                    case s.OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE:
                        return i.default.Messages.SCOPE_APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE;
                    case s.OAuth2Scopes.APPLICATIONS_STORE_UPDATE:
                        return i.default.Messages.SCOPE_APPLICATIONS_STORE_UPDATE;
                    case s.OAuth2Scopes.APPLICATIONS_ENTITLEMENTS:
                        return i.default.Messages.SCOPE_APPLICATIONS_ENTITLEMENTS;
                    case s.OAuth2Scopes.ACTIVITIES_READ:
                        return i.default.Messages.SCOPE_ACTIVITIES_READ;
                    case s.OAuth2Scopes.ACTIVITIES_WRITE:
                        return i.default.Messages.SCOPE_ACTIVITIES_WRITE;
                    case s.OAuth2Scopes.RELATIONSHIPS_READ:
                        return i.default.Messages.SCOPE_RELATIONSHIPS_READ;
                    case s.OAuth2Scopes.VOICE:
                        return i.default.Messages.SCOPE_VOICE;
                    case s.OAuth2Scopes.DM_CHANNELS_READ:
                        return i.default.Messages.SCOPE_DM_CHANNELS_READ;
                    case s.OAuth2Scopes.ROLE_CONNECTIONS_WRITE:
                        return i.default.Messages.SCOPE_ROLE_CONNECTIONS_WRITE;
                    default:
                        return e
                }
            }

            function l(e) {
                return e.includes(s.OAuth2Scopes.MESSAGES_READ) ? i.default.Messages.OAUTH2_CAN_READ_NOTICE.format() : i.default.Messages.OAUTH2_CANNOT_READ_SEND_NOTICE.format()
            }