            "use strict";
            n.r(t), n.d(t, {
                XBOX_URL_BASE: function() {
                    return u
                },
                XBOX_APP_WEB_LINK: function() {
                    return o
                },
                XBOX_LINK_DEST_ORIGIN: function() {
                    return d
                },
                XBOX_CLIENT_SCOPES: function() {
                    return c
                },
                PLAYSTATION_LINK_DEST_ORIGIN: function() {
                    return _
                },
                PLAYSTATION_CLIENT_SCOPES: function() {
                    return E
                },
                XBOX_HANDOFF_SEARCH_PARAMS: function() {
                    return f
                },
                GameConsoleTypes: function() {
                    return i
                },
                GAME_CONSOLE_SESSIONS: function() {
                    return h
                },
                GameConsoleCommandResultErrorCodes: function() {
                    return a
                },
                USER_ACTION_REQUIRED_ERROR_CODES: function() {
                    return p
                },
                GAME_CONSOLE_ALERT_MODAL_LOCATION: function() {
                    return T
                }
            }), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var i, a, l, s, r = n("49111");
            let u = "xbox://communitylinking/donut/audio",
                o = "https://www.xbox.com/en-US/apps/xbox-app-for-mobile",
                d = "https://login.live.com",
                c = [r.OAuth2Scopes.VOICE, r.OAuth2Scopes.DM_CHANNELS_READ, r.OAuth2Scopes.GUILDS, r.OAuth2Scopes.GUILDS_MEMBERS_READ, r.OAuth2Scopes.IDENTIFY, r.OAuth2Scopes.CONNECTIONS],
                _ = "https://my.account.sony.com",
                E = c,
                f = e => {
                    let {
                        guildId: t,
                        channelName: n,
                        guildName: i,
                        channelId: a,
                        muted: l,
                        deafened: s,
                        nonce: r
                    } = e, u = {
                        channelid: a,
                        guildid: t,
                        channelname: n,
                        guildname: i,
                        muted: String(l),
                        deafened: String(s)
                    };
                    return null != r && (u.nonce = r), new URLSearchParams(u)
                };
            (l = i || (i = {})).PLAYSTATION = "playstation", l.XBOX = "xbox";
            let h = new Set(["xbox", "playstation"]);
            r.ActivityGamePlatforms.XBOX, r.ActivityGamePlatforms.PS5, (s = a || (a = {}))[s.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 27e4] = "CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED", s[s.CONSOLE_DEVICE_UNAVAILABLE = 270001] = "CONSOLE_DEVICE_UNAVAILABLE", s[s.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002] = "CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS", s[s.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003] = "CONSOLE_DEVICE_COMMUNICATION_RESTRICTED", s[s.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004] = "CONSOLE_DEVICE_INVALID_POWER_MODE", s[s.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005] = "CONSOLE_DEVICE_ACCOUNT_LINK_ERROR", s[s.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006] = "CONSOLE_DEVICE_MAX_MEMBERS_REACHED", s[s.CONSOLE_DEVICE_BAD_COMMAND = 270007] = "CONSOLE_DEVICE_BAD_COMMAND";
            let p = new Set([27e4]),
                T = "console error alert"