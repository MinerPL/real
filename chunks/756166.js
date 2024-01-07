            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("884691"),
                a = () => {
                    let e = l.useRef(!0);
                    l.useEffect(() => () => {
                        e.current = !1
                    }, []);
                    let t = l.useCallback(() => e.current, []);
                    return t
                }