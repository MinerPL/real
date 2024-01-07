            "use strict";
            n.r(t), n.d(t, {
                useStageHasMedia: function() {
                    return u
                },
                getStageHasMedia: function() {
                    return o
                },
                isStageVideoEnabled: function() {
                    return d
                }
            });
            var i = n("446674"),
                a = n("305961"),
                l = n("800762"),
                s = n("488464"),
                r = n("998716");

            function u(e) {
                let t = function(e) {
                        return (0, i.useStateFromStores)([s.default], () => {
                            let t = s.default.getMutableParticipants(e, r.StageChannelParticipantNamedIndex.SPEAKER);
                            return null != t.find(e => e.type === r.StageChannelParticipantTypes.STREAM)
                        }, [e])
                    }(e),
                    n = (0, i.useStateFromStores)([l.default], () => l.default.hasVideo(e), [e]);
                return n || t
            }

            function o(e) {
                return function(e) {
                    let t = s.default.getMutableParticipants(e, r.StageChannelParticipantNamedIndex.SPEAKER);
                    return null != t.find(e => e.type === r.StageChannelParticipantTypes.STREAM)
                }(e) || l.default.hasVideo(e)
            }

            function d(e) {
                var t;
                let n = a.default.getGuild(e);
                return null != n && (null !== (t = null == n ? void 0 : n.maxStageVideoChannelUsers) && void 0 !== t ? t : 0) > 0
            }