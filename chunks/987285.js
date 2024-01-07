            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var a = n("913144"),
                s = n("629109"),
                i = n("990766"),
                l = n("316272"),
                r = n("374014"),
                o = n("373469"),
                u = n("271938"),
                d = n("42203"),
                c = n("42887"),
                E = n("808422");
            class f extends l.default {
                _initialize() {
                    a.default.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
                }
                _terminate() {
                    a.default.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
                }
                constructor(...e) {
                    super(...e), this.handleVoiceStateUpdates = e => {
                        let {
                            voiceStates: t
                        } = e, n = u.default.getId();
                        t.forEach(e => {
                            var t;
                            if (e.userId !== n) return;
                            let a = null === (t = d.default.getChannel(e.channelId)) || void 0 === t ? void 0 : t.isGuildStageVoice();
                            if (!a) return;
                            let s = (0, E.getAudienceRequestToSpeakState)(e) === E.RequestToSpeakStates.ON_STAGE;
                            !s && (this.handleStopStream(e), this.handleStopUserVideo())
                        })
                    }, this.handleStopStream = e => {
                        let t = o.default.getActiveStreamForUser(e.userId, e.guildId);
                        null != t && (0, i.stopStream)((0, r.encodeStreamKey)(t), !1)
                    }, this.handleStopUserVideo = () => {
                        c.default.isVideoEnabled() && s.default.setVideoEnabled(!1)
                    }
                }
            }
            var _ = new f