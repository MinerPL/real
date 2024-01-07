            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2021-06_hdr_screen_capture",
                label: "HDR Screen Capture",
                defaultConfig: {
                    hdrCaptureMode: "never"
                },
                treatments: [{
                    id: 1,
                    label: "Always",
                    config: {
                        hdrCaptureMode: "always"
                    }
                }, {
                    id: 2,
                    label: "Permitted Devices Only",
                    config: {
                        hdrCaptureMode: "permittedDevicesOnly"
                    }
                }]
            })