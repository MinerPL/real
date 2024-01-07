            "use strict";
            n.r(t), n.d(t, {
                getPartyMetadata: function() {
                    return i
                }
            });
            var a = n("575365"),
                s = n("309570");

            function i(e) {
                return {
                    af_voice_chat: e.voiceChannels.length > 0,
                    af_people_count: e.partiedMembers.length,
                    af_rich_presence: e.currentActivities.some(e => {
                        let {
                            activity: t
                        } = e;
                        return (0, s.default)(t)
                    }),
                    game_platform: e.currentActivities.length > 0 ? (0, a.default)(e.currentActivities[0].activity) : null
                }
            }