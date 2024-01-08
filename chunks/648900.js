            "use strict";
            n.r(t), n.d(t, {
                TOGGLE_MUTE: function() {
                    return o
                },
                TOGGLE_DEAFEN: function() {
                    return l
                }
            });
            var i = n("629109");
            let o = {
                    binds: ["mod+shift+m"],
                    comboKeysBindGlobal: !0,
                    action: () => (i.default.toggleSelfMute({
                        usedKeybind: !0
                    }), !1)
                },
                l = {
                    binds: ["mod+shift+d"],
                    comboKeysBindGlobal: !0,
                    action: () => (i.default.toggleSelfDeaf(), !1)
                }