            "use strict";
            n.r(t), n.d(t, {
                useMenuTriggerState: function() {
                    return a
                }
            }), n("222007");
            var r = n("811719"),
                o = n("884691");

            function a(e) {
                let t = (0, r.useOverlayTriggerState)(e),
                    [n, a] = (0, o.useState)(null);
                return {
                    focusStrategy: n,
                    ...t,
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        a(e), t.open()
                    },
                    toggle() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        a(e), t.toggle()
                    }
                }
            }