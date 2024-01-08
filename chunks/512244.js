            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("42887"),
                a = n("353927");

            function l() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.default;
                return (e = t).supports(a.Features.MEDIAPIPE) && Object.values(e.getVideoDevices()).length > 0
            }