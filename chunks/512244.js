            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var i = n("42887"),
                u = n("353927");

            function r() {
                var t;
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.default;
                return (t = e).supports(u.Features.MEDIAPIPE) && Object.values(t.getVideoDevices()).length > 0
            }