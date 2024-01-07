            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("446674"),
                i = n("913144");
            let l = {
                    speechRate: 1,
                    currentMessage: null
                },
                s = l;
            class u extends a.default.DeviceSettingsStore {
                initialize(e) {
                    s = {
                        ...l,
                        ...null != e ? e : null
                    }
                }
                isSpeakingMessage(e, t) {
                    let {
                        currentMessage: n
                    } = s;
                    return null !== n && n.channelId === e && n.messageId === t
                }
                get currentMessage() {
                    return s.currentMessage
                }
                get speechRate() {
                    return s.speechRate
                }
                getUserAgnosticState() {
                    return s
                }
            }
            u.displayName = "TTSStore", u.persistKey = "TTSStore", u.migrations = [];
            var r = new u(i.default, __OVERLAY__ ? {} : {
                SPEAKING_MESSAGE: function(e) {
                    let {
                        messageId: t,
                        channelId: n
                    } = e;
                    s = {
                        ...s,
                        currentMessage: {
                            messageId: t,
                            channelId: n
                        }
                    }
                },
                STOP_SPEAKING: function() {
                    s = {
                        ...s,
                        currentMessage: null
                    }
                },
                SET_TTS_SPEECH_RATE: function(e) {
                    s = {
                        ...s,
                        speechRate: e.speechRate
                    }
                }
            })