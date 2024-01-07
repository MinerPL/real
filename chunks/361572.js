            "use strict";
            n.r(t), n.d(t, {
                CHANNEL_OR_MESSAGES_URL_RE: function() {
                    return h
                },
                MEDIA_POST_URL_RE: function() {
                    return p
                },
                tryParseChannelPath: function() {
                    return T
                },
                tryParseEventDetailsPath: function() {
                    return C
                },
                canViewChannel: function() {
                    return m
                },
                isAccessibleChannelPath: function() {
                    return S
                }
            });
            var i = n("42203"),
                a = n("305961"),
                l = n("957255"),
                s = n("655518"),
                r = n("49111"),
                u = n("724210");
            let o = Array.from(u.StaticChannelRoutes).map(e => s.default.escape(e)).join("|"),
                d = new RegExp("^/channels/(\\d+|".concat(r.ME, ")(?:/)?(\\d+|").concat(o, ")?")),
                c = new RegExp("^/channels/(\\d+|".concat(r.ME, ")(?:/)(\\d+|").concat(o, ")(?:/)(\\d+)")),
                _ = RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
                E = RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
                f = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
                h = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(r.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
                p = RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

            function T(e) {
                if (null == e) return null;
                let t = e.match(c);
                if (null != t && t.length > 3) return {
                    guildId: t[1],
                    channelId: t[2],
                    messageId: t[3]
                };
                let n = e.match(_);
                if (null != n && n.length > 4) return {
                    guildId: n[1],
                    channelId: n[2],
                    threadId: n[3],
                    messageId: n[4]
                };
                let i = e.match(d);
                if (null != i && i.length > 1) {
                    var a;
                    return {
                        guildId: i[1],
                        channelId: null !== (a = i[2]) && void 0 !== a ? a : void 0
                    }
                }
                let l = e.match(E);
                return null != l && l.length > 1 ? {
                    guildId: l[1]
                } : null
            }

            function C(e) {
                if (null == e) return null;
                let t = e.match(f);
                return null != t && t.length > 1 ? {
                    guildId: t[1],
                    guildEventId: t[2],
                    recurrenceId: t[3]
                } : null
            }

            function m(e) {
                return !!e.isPrivate() || l.default.can(r.Permissions.VIEW_CHANNEL, e)
            }

            function S(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                if (null == a.default.getGuild(t) && t !== r.ME) return !1;
                if (null == n) return !0;
                let l = i.default.getChannel(n);
                return null != l && m(l)
            }