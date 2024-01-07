            "use strict";
            n.r(t), n.d(t, {
                SUBMIT: function() {
                    return a
                }
            });
            var i = n("206230"),
                o = n("659500"),
                l = n("49111");
            let a = {
                binds: ["return"],
                action() {
                    if (!i.default.keyboardModeEnabled && o.ComponentDispatch.hasSubscribers(l.ComponentActions.MODAL_SUBMIT)) return o.ComponentDispatch.dispatch(l.ComponentActions.MODAL_SUBMIT), !1
                }
            }