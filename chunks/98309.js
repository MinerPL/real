            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("316693"),
                a = n("305961"),
                l = n("49111");
            let s = [l.ChannelTypes.GUILD_TEXT, l.ChannelTypes.GUILD_VOICE, l.ChannelTypes.GUILD_ANNOUNCEMENT, l.ChannelTypes.GUILD_FORUM, l.ChannelTypes.PUBLIC_THREAD, l.ChannelTypes.PRIVATE_THREAD],
                r = i.default.combine(l.Permissions.VIEW_CHANNEL, l.Permissions.SEND_MESSAGES);

            function u(e) {
                if (null == e || !s.includes(e.type)) return [];
                let t = a.default.getGuild(e.guild_id);
                return null == t ? [] : Object.values(e.permissionOverwrites).filter(e => {
                    var n, a;
                    return 0 === e.type && (null === (a = t.roles[e.id]) || void 0 === a ? void 0 : null === (n = a.tags) || void 0 === n ? void 0 : n.guild_connections) === null && !i.default.hasAny(e.deny, r)
                }).map(e => t.roles[e.id]).filter(e => null != e)
            }