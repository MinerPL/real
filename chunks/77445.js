            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("446674"),
                l = n("271938"),
                u = n("18494"),
                o = n("808422");

            function a() {
                let e = (0, i.useStateFromStores)([u.default], () => u.default.getVoiceChannelId()),
                    t = (0, i.useStateFromStores)([l.default], () => l.default.getId()),
                    n = (0, o.default)(t, e);
                return n === o.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
            }