            "use strict";
            n.r(t), n.d(t, {
                getVoiceAnalyticsMetadataAdditional: function() {
                    return i
                }
            });
            var s = n("568307");

            function i() {
                let e = s.default.getCurrentGameForAnalytics();
                return {
                    game_name: null != e ? e.name : null,
                    game_id: null != e ? e.id : null
                }
            }