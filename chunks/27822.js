            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var i = n("95410"),
                a = n("913144"),
                l = n("316272"),
                s = n("271938"),
                r = n("18494"),
                u = n("569182"),
                o = n("325861"),
                d = n("837979");
            class c extends l.default {
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
                        } = e;
                        t.forEach(e => {
                            if (null == e.channelId || e.userId !== s.default.getId()) return;
                            if (this.terminate(), i.default.get(d.STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY, !1)) return;
                            let t = r.default.getVoiceChannelId();
                            if (null != t) e.channelId === t && o.default.isAudienceMember(e.userId, t) && (i.default.set(d.STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY, !0), u.openStageChannelAudienceNoticeModal(t))
                        })
                    }
                }
            }
            var _ = new c