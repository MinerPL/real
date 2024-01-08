            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var a = n("884691"),
                l = n("862337");

            function s(e, t) {
                let [n, s] = a.useState(!1), i = a.useRef(new l.DelayedCall(t, () => s(!1))), r = a.useRef(new l.DelayedCall(e, () => s(!0))), o = a.useCallback(() => {
                    i.current.cancel(), r.current.cancel()
                }, []);
                a.useEffect(() => o, [o]);
                let u = a.useCallback(() => {
                        o(), i.current.delay()
                    }, [o]),
                    d = a.useCallback(() => {
                        o(), r.current.delay()
                    }, [o]);
                return {
                    isHovered: n,
                    setIsHovered: s,
                    onMouseEnter: d,
                    onMouseLeave: u,
                    cancelTimers: o
                }
            }