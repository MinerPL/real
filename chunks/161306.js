            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("99795"),
                s = n("353927");
            let r = Object.freeze({
                [a.ParticipantTypes.STREAM]: s.MediaEngineContextTypes.STREAM,
                [a.ParticipantTypes.HIDDEN_STREAM]: s.MediaEngineContextTypes.STREAM,
                [a.ParticipantTypes.USER]: s.MediaEngineContextTypes.DEFAULT,
                [a.ParticipantTypes.ACTIVITY]: s.MediaEngineContextTypes.DEFAULT
            });

            function i(e) {
                return r[e]
            }