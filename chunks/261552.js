            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("446674"),
                u = n("271938"),
                a = n("800762"),
                i = n("76393");

            function d() {
                let e = (0, l.useStateFromStores)([u.default], () => u.default.getId()),
                    t = (0, l.useStateFromStores)([i.default], () => i.default.getRemoteSessionId());
                return (0, l.useStateFromStores)([a.default], () => {
                    var n;
                    return null !== (n = a.default.getVoiceStateForSession(e, t)) && void 0 !== n ? n : void 0
                })
            }