            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("913144"),
                s = n("862853"),
                i = {
                    init() {
                        a.default.subscribe("CONNECTION_OPEN", () => {
                            (0, s.reset)()
                        }), a.default.subscribe("LOGOUT", () => {
                            (0, s.reset)()
                        })
                    }
                }