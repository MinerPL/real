            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("446674"),
                a = n("271938"),
                l = n("800762"),
                s = n("76393");

            function u() {
                let e = (0, i.useStateFromStores)([a.default], () => a.default.getId()),
                    t = (0, i.useStateFromStores)([s.default], () => s.default.getRemoteSessionId());
                return (0, i.useStateFromStores)([l.default], () => {
                    var n;
                    return null !== (n = l.default.getVoiceStateForSession(e, t)) && void 0 !== n ? n : void 0
                })
            }