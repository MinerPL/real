            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("884691"),
                i = n("913144");

            function a(e) {
                let t = (0, s.useRef)(e);
                (0, s.useEffect)(() => {
                    t.current = e
                }, [e]), (0, s.useEffect)(() => {
                    if (__OVERLAY__) {
                        function e(e) {
                            e.locked && t.current()
                        }
                        return i.default.subscribe("OVERLAY_SET_INPUT_LOCKED", e), () => {
                            i.default.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e)
                        }
                    }
                }, [])
            }