            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("129722"),
                s = n("477633"),
                a = r.memo(function(e) {
                    let {
                        fineTuning: t,
                        fineTuningResolution: n,
                        duration: r
                    } = e, {
                        file: a,
                        audio: o
                    } = (0, l.useAudioTrimmerStore)();
                    return (0, i.jsx)(s.default, {
                        file: a,
                        audio: o,
                        waveformSettings: {
                            fineTuning: t,
                            fineTuningResolution: n,
                            duration: r
                        }
                    })
                })