            "use strict";
            n.r(t), n.d(t, {
                TOGGLE_CHANNEL_PINS: function() {
                    return l
                }
            });
            var i = n("659500"),
                o = n("49111");
            let l = {
                binds: ["mod+p"],
                comboKeysBindGlobal: !0,
                action: () => (i.ComponentDispatch.dispatch(o.ComponentActions.TOGGLE_CHANNEL_PINS), !1)
            }