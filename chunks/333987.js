            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("884691");

            function a(e) {
                let t = l.useRef(null),
                    n = l.useCallback(n => {
                        null != e && ("function" == typeof e ? e(n) : e.current = n, t.current = n)
                    }, [e]);
                return [t, n]
            }