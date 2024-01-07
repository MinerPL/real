            "use strict";
            n.r(t), n.d(t, {
                CALL_ACCEPT: function() {
                    return l
                },
                CALL_START: function() {
                    return a
                }
            });
            var i = n("659500"),
                o = n("49111");
            let l = {
                    binds: ["mod+return"],
                    comboKeysBindGlobal: !0,
                    action() {
                        if (i.ComponentDispatch.hasSubscribers(o.ComponentActions.CALL_ACCEPT)) return i.ComponentDispatch.dispatch(o.ComponentActions.CALL_ACCEPT), !1
                    }
                },
                a = {
                    binds: ["ctrl+'", "ctrl+shift+'"],
                    comboKeysBindGlobal: !0,
                    action(e) {
                        if (i.ComponentDispatch.hasSubscribers(o.ComponentActions.CALL_START)) return i.ComponentDispatch.dispatch(o.ComponentActions.CALL_START, e), !1
                    }
                }