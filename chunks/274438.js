            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("446674"),
                s = n("913144");
            let r = !1,
                i = !1;
            class l extends a.default.DeviceSettingsStore {
                initialize(e) {
                    null != e && (r = e)
                }
                isMuted() {
                    return r
                }
                shouldPlay() {
                    return i
                }
                getUserAgnosticState() {
                    return r
                }
            }
            l.displayName = "StageMusicStore", l.persistKey = "StageMusicStore";
            var u = new l(s.default, {
                STAGE_MUSIC_MUTE: function(e) {
                    let {
                        muted: t
                    } = e;
                    r = t, i = !1
                },
                STAGE_MUSIC_PLAY: function(e) {
                    let {
                        play: t
                    } = e;
                    i = t
                },
                VOICE_CHANNEL_SELECT: function() {
                    i = !1
                }
            })