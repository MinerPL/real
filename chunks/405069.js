            "use strict";
            s.r(t), s.d(t, {
                setSoundpack: function() {
                    return r
                }
            });
            var a = s("913144"),
                n = s("599110"),
                l = s("870696"),
                i = s("49111");

            function r(e) {
                n.default.track(i.AnalyticEvents.SOUNDPACK_UPDATED, {
                    soundpack: e,
                    previous_soundpack: l.default.getSoundpack()
                }), a.default.dispatch({
                    type: "SET_SOUNDPACK",
                    soundpack: e
                })
            }