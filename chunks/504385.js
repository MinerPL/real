            "use strict";
            n.r(e), n.d(e, {
                snapVolumeToDefault: function() {
                    return a
                },
                coerceAudioContextForProto: function() {
                    return s
                }
            });
            var i = n("938850"),
                u = n("773364"),
                r = n("829536"),
                o = n("397336");

            function a(t, e) {
                let n = e === u.MediaEngineContextTypes.STREAM ? i.AudioSettingsDefaultVolumes.STREAM : i.AudioSettingsDefaultVolumes.USER;
                return 1 > Math.abs((0, r.amplitudeToPerceptual)(n) - (0, r.amplitudeToPerceptual)(t)) ? n : t
            }

            function s(t) {
                switch (t) {
                    case u.MediaEngineContextTypes.DEFAULT:
                        return o.ProtoAudioSettingsContextTypes.USER;
                    case u.MediaEngineContextTypes.STREAM:
                        return o.ProtoAudioSettingsContextTypes.STREAM;
                    default:
                        return
                }
            }