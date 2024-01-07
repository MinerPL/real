            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("872717"),
                s = n("794818"),
                l = n("49111"),
                i = e => a.default.get({
                    url: l.Endpoints.STICKER_GUILD_DATA(e),
                    oldFormErrors: !0
                }).then(e => (null == e ? void 0 : e.body) != null ? (0, s.makeDiscoverableGuild)(e.body) : null).catch(() => null)