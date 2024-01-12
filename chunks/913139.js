            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var a = s("913144"),
                n = {
                    addKeybind(e) {
                        a.default.dispatch({
                            type: "KEYBINDS_ADD_KEYBIND",
                            keybind: e
                        })
                    },
                    setKeybind(e) {
                        a.default.dispatch({
                            type: "KEYBINDS_SET_KEYBIND",
                            keybind: e
                        })
                    },
                    deleteKeybind(e) {
                        a.default.dispatch({
                            type: "KEYBINDS_DELETE_KEYBIND",
                            id: e
                        })
                    },
                    enableAll(e) {
                        a.default.dispatch({
                            type: "KEYBINDS_ENABLE_ALL_KEYBINDS",
                            enable: e
                        })
                    }
                }