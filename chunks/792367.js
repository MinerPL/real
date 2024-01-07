            "use strict";
            n.r(t), n.d(t, {
                shouldShowVoiceChannelChangeConfirmation: function() {
                    return u
                }
            });
            var i = n("76393"),
                a = n("168973"),
                l = n("271938"),
                s = n("305961"),
                r = n("800762");

            function u(e) {
                let t = a.default.disableVoiceChannelChangeAlert;
                if (t) return !1;
                let n = i.default.getRemoteSessionId(),
                    u = r.default.getVoiceStateForSession(l.default.getId(), n);
                if (null != u || !r.default.isCurrentClientInVoiceChannel() || r.default.isInChannel(e.id)) return !1;
                let o = s.default.getGuild(e.getGuildId());
                return !((null == o ? void 0 : o.afkChannelId) != null && r.default.isInChannel(o.afkChannelId)) && !0
            }