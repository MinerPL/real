            "use strict";
            n.r(t), n.d(t, {
                RequestToSpeakStates: function() {
                    return i
                },
                getAudienceRequestToSpeakState: function() {
                    return a
                },
                default: function() {
                    return o
                }
            });
            var r, i, l = n("446674"),
                u = n("800762");

            function a(e) {
                if (null == e) return 0;
                if (e.suppress && null != e.requestToSpeakTimestamp) return 1;
                if (!e.suppress && null != e.requestToSpeakTimestamp) return 2;
                if (!e.suppress && null == e.requestToSpeakTimestamp) return 3;
                return 0
            }

            function o(e, t) {
                return (0, l.useStateFromStores)([u.default], () => {
                    if (null == e || null == t) return 0;
                    let n = u.default.getVoiceStateForChannel(t, e);
                    return a(n)
                }, [e, t])
            }(r = i || (i = {}))[r.NONE = 0] = "NONE", r[r.REQUESTED_TO_SPEAK = 1] = "REQUESTED_TO_SPEAK", r[r.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = 2] = "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK", r[r.ON_STAGE = 3] = "ON_STAGE"