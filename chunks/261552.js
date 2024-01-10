            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("446674"),
                a = n("271938"),
                u = n("800762"),
                r = n("76393");

            function i() {
                let e = (0, l.useStateFromStores)([a.default], () => a.default.getId()),
                    t = (0, l.useStateFromStores)([r.default], () => r.default.getRemoteSessionId());
                return (0, l.useStateFromStores)([u.default], () => {
                    var n;
                    return null !== (n = u.default.getVoiceStateForSession(e, t)) && void 0 !== n ? n : void 0
                })
            }