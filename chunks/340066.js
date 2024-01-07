            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("884691"),
                a = (e, t) => {
                    let l = (0, n.useRef)(e);
                    (0, n.useEffect)(() => {
                        l.current = e
                    }, [e]), (0, n.useEffect)(() => {
                        if (null === t) return;
                        let e = setTimeout(() => l.current(), t);
                        return () => clearTimeout(e)
                    }, [t, l])
                }