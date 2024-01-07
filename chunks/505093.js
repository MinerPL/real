            "use strict";
            s.r(t), s.d(t, {
                setUseSystemTheme: function() {
                    return n
                }
            });
            var a = s("913144");

            function n(e) {
                a.default.dispatch({
                    type: "UNSYNCED_USER_SETTINGS_UPDATE",
                    settings: {
                        useSystemTheme: e
                    }
                })
            }