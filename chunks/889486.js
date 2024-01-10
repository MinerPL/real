            "use strict";
            n.r(t), n.d(t, {
                handoffRemote: function() {
                    return o
                }
            });
            var l = n("627445"),
                a = n.n(l),
                u = n("629109"),
                r = n("987317"),
                i = n("42887"),
                d = n("700507"),
                s = n("780338");

            function o(e, t) {
                var n;
                let l = null !== (n = e.sessionId) && void 0 !== n ? n : "";
                (0, d.remoteDisconnect)(l), (0, d.disconnectRemote)();
                let o = null != t ? t : e.channelId;
                a(null != o, "attempted to transfer to unknown channel"), e.selfMute !== i.default.isSelfMute() && u.default.toggleSelfMute(), e.selfDeaf !== i.default.isSelfDeaf() && u.default.toggleSelfDeaf(), (0, s.default)(o, "discord_client", l), r.default.selectVoiceChannel(o, !1)
            }