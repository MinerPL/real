            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var a = n("884691"),
                l = n("862337");

            function s(e, t) {
                let [n, s] = a.useState(!1), i = a.useRef(new l.DelayedCall(t, () => s(!1))), r = a.useRef(new l.DelayedCall(e, () => s(!0))), u = a.useCallback(() => {
                    i.current.cancel(), r.current.cancel()
                }, []);
                a.useEffect(() => u, [u]);
                let o = a.useCallback(() => {
                        u(), i.current.delay()
                    }, [u]),
                    d = a.useCallback(() => {
                        u(), r.current.delay()
                    }, [u]);
                return {
                    isHovered: n,
                    setIsHovered: s,
                    onMouseEnter: d,
                    onMouseLeave: o,
                    cancelTimers: u
                }
            }