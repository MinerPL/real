            "use strict";
            n.r(e), n.d(e, {
                getVoiceAnalyticsMetadataAdditional: function() {
                    return u
                }
            });
            var l = n("568307");

            function u() {
                let t = l.default.getCurrentGameForAnalytics();
                return {
                    game_name: null != t ? t.name : null,
                    game_id: null != t ? t.id : null
                }
            }