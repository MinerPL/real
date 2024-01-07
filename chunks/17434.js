            "use strict";
            n.r(t), n.d(t, {
                setCertifiedDevices: function() {
                    return s
                }
            });
            var a = n("913144");

            function s(e, t) {
                a.default.dispatch({
                    type: "CERTIFIED_DEVICES_SET",
                    applicationId: e,
                    devices: t
                })
            }