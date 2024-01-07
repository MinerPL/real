            "use strict";
            n.r(t), n.d(t, {
                useStageBlockedUsersCount: function() {
                    return s
                },
                getStageBlockedUsersCount: function() {
                    return r
                },
                useStageBlockedUsers: function() {
                    return u
                }
            });
            var i = n("446674"),
                a = n("488464"),
                l = n("998716");

            function s(e) {
                return (0, i.useStateFromStores)([a.default], () => null != e ? a.default.getParticipantCount(e, l.StageChannelParticipantNamedIndex.BLOCKED) : 0, [e])
            }

            function r(e) {
                var t;
                return null !== (t = a.default.getParticipantCount(e, l.StageChannelParticipantNamedIndex.BLOCKED)) && void 0 !== t ? t : 0
            }

            function u(e) {
                return (0, i.useStateFromStores)([a.default], () => a.default.getMutableParticipants(e, l.StageChannelParticipantNamedIndex.BLOCKED), [e])
            }