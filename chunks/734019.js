            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("271938"),
                l = n("488464"),
                s = n("998716"),
                i = n("325861"),
                r = n("834052");

            function o(e) {
                if (!e.isGuildStageVoice()) return !1;
                let t = r.default.isLive(e.id);
                if (!t) return !1;
                let n = a.default.getId(),
                    o = i.default.isModerator(n, e.id);
                if (!o) return !1;
                let u = i.default.isSpeaker(n, e.id);
                if (!u) return !1;
                let d = l.default.getMutableParticipants(e.id),
                    c = d.find(t => t.user.id !== n && i.default.isModerator(t.user.id, e.id));
                if (null == c) return !0;
                let f = l.default.getMutableParticipants(e.id, s.StageChannelParticipantNamedIndex.SPEAKER),
                    h = f.find(t => t.user.id !== n && i.default.isModerator(t.user.id, e.id));
                return null == h
            }