            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("780166"),
                l = n("245463");

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = (0, l.default)(e),
                    {
                        isSharedCanvasEnabled: s
                    } = a.default.useExperiment({
                        guildId: e.guild_id,
                        location: "6b64ff_1"
                    }, {
                        autoTrackExposure: t
                    });
                return n || s
            }