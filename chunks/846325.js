            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return a
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return o
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return s
                },
                SoundboardWheelSize: function() {
                    return l
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
                    return _
                },
                NUM_FREQUENTLY_USED_SOUNDS: function() {
                    return E
                }
            }), n("222007");
            let a = 32,
                o = 5,
                s = "DEFAULT";
            (i = r || (r = {}))[i.SUCCESS = 0] = "SUCCESS", i[i.INTERRUPTED = 1] = "INTERRUPTED";
            let l = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                u = "ctrl+`",
                d = [],
                c = "0",
                _ = 6,
                E = 6