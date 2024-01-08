            "use strict";
            n.r(t), n.d(t, {
                snapVolumeToDefault: function() {
                    return r
                },
                coerceAudioContextForProto: function() {
                    return u
                }
            });
            var i = n("938850"),
                a = n("773364"),
                l = n("829536"),
                s = n("397336");

            function r(e, t) {
                let n = t === a.MediaEngineContextTypes.STREAM ? i.AudioSettingsDefaultVolumes.STREAM : i.AudioSettingsDefaultVolumes.USER;
                return 1 > Math.abs((0, l.amplitudeToPerceptual)(n) - (0, l.amplitudeToPerceptual)(e)) ? n : e
            }

            function u(e) {
                switch (e) {
                    case a.MediaEngineContextTypes.DEFAULT:
                        return s.ProtoAudioSettingsContextTypes.USER;
                    case a.MediaEngineContextTypes.STREAM:
                        return s.ProtoAudioSettingsContextTypes.STREAM;
                    default:
                        return
                }
            }