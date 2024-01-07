            "use strict";
            a.r(t), a.d(t, {
                logVoiceMessagePlaybackStarted: function() {
                    return r
                },
                logVoiceMessagePlaybackEnded: function() {
                    return o
                },
                logVoiceMessagePlaybackFailed: function() {
                    return d
                }
            });
            var n, l, s = a("599110"),
                i = a("49111");

            function r(e, t, a, n) {
                s.default.track(i.AnalyticEvents.VOICE_MESSAGE_PLAYBACK_STARTED, {
                    message_id: e,
                    total_duration_secs: t,
                    start_duration_secs: Math.min(null != t ? t : a, a),
                    sender_user_id: n
                })
            }

            function o(e, t, a, n, l) {
                s.default.track(i.AnalyticEvents.VOICE_MESSAGE_PLAYBACK_ENDED, {
                    message_id: e,
                    total_duration_secs: t,
                    end_duration_secs: Math.min(null != t ? t : a, a),
                    sender_user_id: n,
                    duration_listening_secs: l
                })
            }

            function d(e, t) {
                s.default.track(i.AnalyticEvents.VOICE_MESSAGE_PLAYBACK_FAILED, {
                    message_id: e,
                    error_message: t
                })
            }(n = l || (l = {})).SENT = "sent", n.CANCELLED_DURATION = "cancelled_duration", n.CANCELLED_USER_REQUESTED = "cancelled_user_requested", n.CANCELLED_GESTURE_CONFLICT = "cancelled_gesture_conflict", n.CANCELLED_ON_BACKGROUND = "cancelled_on_background"