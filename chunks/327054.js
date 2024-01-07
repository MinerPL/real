            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var u = n("300322"),
                a = n("913491"),
                s = n("49111");

            function r(e, t, n) {
                let r = t.isSystemDM(),
                    i = !r && !(0, a.default)(e);
                return i && (n || t.isPrivate()) && (0, u.getIsActiveChannelOrUnarchivableThread)(t) && t.type !== s.ChannelTypes.GUILD_VOICE && t.type !== s.ChannelTypes.GUILD_STAGE_VOICE
            }