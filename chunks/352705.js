            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "guild",
                id: "2024-01_windows_key_frame_interval",
                label: "Windows key frame interval",
                defaultConfig: {
                    keyFrameIntervalMs: 0
                },
                treatments: [{
                    id: 1,
                    label: "KFI 60000 ms",
                    config: {
                        keyFrameIntervalMs: 6e4
                    }
                }, {
                    id: 2,
                    label: "KFI 70000 ms",
                    config: {
                        keyFrameIntervalMs: 7e4
                    }
                }, {
                    id: 3,
                    label: "KFI 80000 ms",
                    config: {
                        keyFrameIntervalMs: 8e4
                    }
                }, {
                    id: 4,
                    label: "KFI 90000 ms",
                    config: {
                        keyFrameIntervalMs: 9e4
                    }
                }]
            })