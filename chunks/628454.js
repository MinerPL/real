            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i, r = n("666038");
            i = class extends r.default {
                isVoiceMuted() {
                    return this.selfMute || this.mute || this.suppress || null != this.requestToSpeakTimestamp
                }
                isVoiceDeafened() {
                    return this.selfDeaf || this.deaf
                }
                constructor(e) {
                    super(), this.userId = e.userId || "", this.channelId = e.channelId || null, this.sessionId = e.sessionId || null, this.mute = e.mute || !1, this.deaf = e.deaf || !1, this.selfMute = e.selfMute || !1, this.selfDeaf = e.selfDeaf || !1, this.selfVideo = e.selfVideo || !1, this.selfStream = e.selfStream || !1, this.suppress = e.suppress || !1, this.requestToSpeakTimestamp = e.requestToSpeakTimestamp
                }
            }