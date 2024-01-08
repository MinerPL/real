            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("387111"),
                s = n("49111"),
                r = n("782340");

            function i(e, t, n, i) {
                if (e.state === s.ApplicationStreamStates.RECONNECTING) return {
                    mainText: r.default.Messages.STREAM_RECONNECTING_ERROR,
                    supportingText: r.default.Messages.STREAM_RECONNECTING_ERROR_SUBTEXT
                };
                if (e.state === s.ApplicationStreamStates.PAUSED) return n ? {
                    mainText: r.default.Messages.STREAM_CAPTURE_PAUSED,
                    supportingText: r.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS
                } : {
                    mainText: r.default.Messages.STREAM_CAPTURE_PAUSED,
                    supportingText: r.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS_VIEWER.format({
                        username: a.default.getName(e.guildId, e.channelId, t)
                    })
                };
                return i ? {
                    mainText: r.default.Messages.STREAM_PREVIEW_PAUSED,
                    supportingText: r.default.Messages.STREAM_PREVIEW_PAUSED_SUBTEXT
                } : null
            }