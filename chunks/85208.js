            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("830251"),
                l = n("99795");

            function s(e, t) {
                var n, s;
                let i = null,
                    r = null,
                    o = null,
                    u = !1,
                    d = !1;
                switch (e.type) {
                    case l.ParticipantTypes.ACTIVITY:
                        break;
                    case l.ParticipantTypes.USER:
                        i = e.streamId, o = e.voiceState, u = e.speaking, d = e.ringing;
                        break;
                    case l.ParticipantTypes.STREAM:
                        i = e.streamId, r = e.stream
                }
                return {
                    streamId: i,
                    stream: r,
                    speaking: u,
                    ringing: d,
                    muted: null !== (n = null == o ? void 0 : o.isVoiceMuted()) && void 0 !== n && n,
                    deafen: null !== (s = null == o ? void 0 : o.isVoiceDeafened()) && void 0 !== s && s,
                    mirror: e.type === l.ParticipantTypes.USER && e.user.id === t,
                    hasVideo: (0, a.default)(e)
                }
            }