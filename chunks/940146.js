            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-10_video_hook_stale_frame_timeout",
                label: "Video Hook Stale Frame Timeout",
                defaultConfig: {
                    videoHookStaleFrameTimeoutMs: 500
                },
                treatments: [{
                    id: 1,
                    label: "1 second",
                    config: {
                        videoHookStaleFrameTimeoutMs: 1e3
                    }
                }, {
                    id: 2,
                    label: "5 seconds",
                    config: {
                        videoHookStaleFrameTimeoutMs: 5e3
                    }
                }, {
                    id: 3,
                    label: "10 seconds",
                    config: {
                        videoHookStaleFrameTimeoutMs: 1e4
                    }
                }, {
                    id: 4,
                    label: "30 seconds",
                    config: {
                        videoHookStaleFrameTimeoutMs: 3e4
                    }
                }, {
                    id: 5,
                    label: "60 seconds",
                    config: {
                        videoHookStaleFrameTimeoutMs: 6e4
                    }
                }, {
                    id: 5,
                    label: "120 seconds",
                    config: {
                        videoHookStaleFrameTimeoutMs: 12e4
                    }
                }]
            });
            var s = {
                getConfig: (e, t, n) => e ? r.getCurrentConfig({
                    location: t
                }, {
                    autoTrackExposure: n
                }) : r.definition.defaultConfig
            }