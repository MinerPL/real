            "use strict";
            var l, i;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return r
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return s
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return a
                },
                SoundboardWheelSize: function() {
                    return o
                },
                DEFAULT_KEYBIND: function() {
                    return u
                },
                EMPTY_SOUND_LIST: function() {
                    return d
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return c
                },
                NUM_RECENTLY_HEARD_SOUNDS: function() {
                    return E
                },
                NUM_FREQUENTLY_USED_SOUNDS: function() {
                    return _
                }
            }), n("222007");
            let r = 32,
                s = 5,
                a = "DEFAULT";
            (i = l || (l = {}))[i.SUCCESS = 0] = "SUCCESS", i[i.INTERRUPTED = 1] = "INTERRUPTED";
            let o = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                u = "ctrl+`",
                d = [],
                c = "0",
                E = 6,
                _ = 6