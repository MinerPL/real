            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var u = l("446674"),
                a = l("271938"),
                n = l("18494"),
                r = l("808422");

            function d() {
                let e = (0, u.useStateFromStores)([n.default], () => n.default.getVoiceChannelId()),
                    t = (0, u.useStateFromStores)([a.default], () => a.default.getId()),
                    l = (0, r.default)(t, e);
                return l === r.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
            }