            "use strict";
            n.r(t), n.d(t, {
                updateStageMusicMuted: function() {
                    return l
                },
                updateStageMusicShouldPlay: function() {
                    return s
                }
            });
            var a = n("913144");

            function l(e) {
                a.default.dispatch({
                    type: "STAGE_MUSIC_MUTE",
                    muted: e
                })
            }

            function s(e) {
                a.default.dispatch({
                    type: "STAGE_MUSIC_PLAY",
                    play: e
                })
            }