            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var i = l("782340");

            function a(e) {
                return e > 0 ? i.default.Messages.EMBEDDED_ACTIVITIES_MAX_PARTICIPANTS.format({
                    count: e
                }) : i.default.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS
            }