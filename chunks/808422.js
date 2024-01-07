            "use strict";
            n.r(t), n.d(t, {
                RequestToSpeakStates: function() {
                    return a
                },
                getAudienceRequestToSpeakState: function() {
                    return r
                },
                default: function() {
                    return u
                }
            });
            var i, a, l = n("446674"),
                s = n("800762");

            function r(e) {
                if (null == e) return 0;
                if (e.suppress && null != e.requestToSpeakTimestamp) return 1;
                if (!e.suppress && null != e.requestToSpeakTimestamp) return 2;
                if (!e.suppress && null == e.requestToSpeakTimestamp) return 3;
                return 0
            }

            function u(e, t) {
                return (0, l.useStateFromStores)([s.default], () => {
                    if (null == e || null == t) return 0;
                    let n = s.default.getVoiceStateForChannel(t, e);
                    return r(n)
                }, [e, t])
            }(i = a || (a = {}))[i.NONE = 0] = "NONE", i[i.REQUESTED_TO_SPEAK = 1] = "REQUESTED_TO_SPEAK", i[i.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = 2] = "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK", i[i.ON_STAGE = 3] = "ON_STAGE"