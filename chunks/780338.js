            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("42203"),
                a = n("945956"),
                l = n("235660"),
                s = n("599110"),
                r = n("49111");

            function u(e, t, n) {
                var u, o;
                s.default.track(r.AnalyticEvents.VOICE_CALL_TRANSFER, {
                    source_platform: null != n ? null === (u = l.default.getSessionById(n)) || void 0 === u ? void 0 : u.clientInfo.os : "discord_client",
                    guild_id: null === (o = i.default.getChannel(e)) || void 0 === o ? void 0 : o.guild_id,
                    channel_id: e,
                    rtc_connection_id: a.default.getRTCConnectionId(),
                    target_platform: t
                })
            }