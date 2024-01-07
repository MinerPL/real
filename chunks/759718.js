            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007"), n("424973");
            var a = n("446674"),
                l = n("334572"),
                s = n("488464"),
                i = n("998716");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                    [n] = (0, a.useStateFromStores)([s.default], () => {
                        let n = s.default.getMutableParticipants(e).filter(e => e.type === i.StageChannelParticipantTypes.VOICE),
                            a = [];
                        for (let e of n) {
                            if (a.length >= t) break;
                            null == a.find(t => t.id === e.user.id) && a.push(e.user)
                        }
                        return [{
                            participants: n,
                            usersInSummary: a
                        }, s.default.getParticipantsVersion(e)]
                    }, [e, t], l.isVersionEqual);
                return n
            }