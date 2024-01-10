            "use strict";
            n.r(t), n.d(t, {
                handoffRemote: function() {
                    return o
                }
            });
            var l = n("627445"),
                u = n.n(l),
                a = n("629109"),
                i = n("987317"),
                d = n("42887"),
                r = n("700507"),
                s = n("780338");

            function o(e, t) {
                var n;
                let l = null !== (n = e.sessionId) && void 0 !== n ? n : "";
                (0, r.remoteDisconnect)(l), (0, r.disconnectRemote)();
                let o = null != t ? t : e.channelId;
                u(null != o, "attempted to transfer to unknown channel"), e.selfMute !== d.default.isSelfMute() && a.default.toggleSelfMute(), e.selfDeaf !== d.default.isSelfDeaf() && a.default.toggleSelfDeaf(), (0, s.default)(o, "discord_client", l), i.default.selectVoiceChannel(o, !1)
            }