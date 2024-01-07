            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("913144"),
                s = {
                    move(e, t) {
                        a.default.dispatch({
                            type: "INCOMING_CALL_MOVE",
                            x: e,
                            y: t
                        })
                    }
                }