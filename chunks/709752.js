            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007");
            var a = n("884691"),
                l = n("446674"),
                s = n("271938"),
                i = n("244480"),
                r = n("808422");

            function u(e) {
                let t = (0, l.useStateFromStores)([s.default], () => s.default.getId()),
                    n = (0, r.default)(t, e.id),
                    u = n === r.RequestToSpeakStates.REQUESTED_TO_SPEAK || n === r.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
                    [o, d] = a.useState(u);
                return a.useEffect(() => {
                    d(u)
                }, [u]), [o, function() {
                    n === r.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, i.audienceAckRequestToSpeak)(e, !0) : (0, i.toggleRequestToSpeak)(e, !o), d(!o)
                }]
            }