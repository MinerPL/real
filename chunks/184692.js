            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983"),
                l = n("884691"),
                s = n("129722"),
                r = n("477633"),
                a = l.memo(function(e) {
                    let {
                        fineTuning: t,
                        fineTuningResolution: n,
                        duration: l
                    } = e, {
                        file: a,
                        audio: o
                    } = (0, s.useAudioTrimmerStore)();
                    return (0, i.jsx)(r.default, {
                        file: a,
                        audio: o,
                        waveformSettings: {
                            fineTuning: t,
                            fineTuningResolution: n,
                            duration: l
                        }
                    })
                })