            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("913144"),
                s = {
                    clearRemoteDisconnectVoiceChannelId() {
                        a.default.dispatch({
                            type: "CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID"
                        })
                    },
                    clearLastSessionVoiceChannelId() {
                        a.default.dispatch({
                            type: "CLEAR_LAST_SESSION_VOICE_CHANNEL_ID"
                        })
                    }
                }