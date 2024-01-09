            "use strict";
            n.r(t), n.d(t, {
                handoffRemote: function() {
                    return o
                }
            });
            var i = n("627445"),
                a = n.n(i),
                l = n("629109"),
                s = n("987317"),
                u = n("42887"),
                d = n("700507"),
                r = n("780338");

            function o(e, t) {
                var n;
                let i = null !== (n = e.sessionId) && void 0 !== n ? n : "";
                (0, d.remoteDisconnect)(i), (0, d.disconnectRemote)();
                let o = null != t ? t : e.channelId;
                a(null != o, "attempted to transfer to unknown channel"), e.selfMute !== u.default.isSelfMute() && l.default.toggleSelfMute(), e.selfDeaf !== u.default.isSelfDeaf() && l.default.toggleSelfDeaf(), (0, r.default)(o, "discord_client", i), s.default.selectVoiceChannel(o, !1)
            }