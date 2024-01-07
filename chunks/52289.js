            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var a = n("913144"),
                s = {
                    setEnabled(e) {
                        this.update({
                            enabled: e
                        })
                    },
                    update(e) {
                        for (let t of Object.keys(e)) a.default.dispatch({
                            type: "STREAMER_MODE_UPDATE",
                            key: t,
                            value: e[t]
                        })
                    }
                }