            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("316693"),
                r = n("233069"),
                s = n("991170"),
                a = n("843455");

            function o(e) {
                if (null == e) return !1;
                let {
                    type: t
                } = e;
                if (null == e.guild_id || !r.GUILD_NON_CATEGORY_CHANNEL_TYPES.has(t)) return !1;
                if (e.isGuildVocal() && !s.default.canEveryoneRole(a.Permissions.CONNECT, e)) return !0;
                let n = e.permissionOverwrites[e.guild_id];
                return null != n && i.default.has(n.deny, a.Permissions.VIEW_CHANNEL)
            }