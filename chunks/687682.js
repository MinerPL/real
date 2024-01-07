            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("884691");
            let i = 1e3 / 24;
            var u = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
                    n = r.useRef(0),
                    u = r.useRef(),
                    l = r.useRef(!0),
                    o = r.useCallback(() => {
                        l.current = !1, cancelAnimationFrame(n.current)
                    }, []),
                    a = r.useCallback(r => {
                        null == u.current && (u.current = r);
                        let i = r - u.current;
                        i >= t && (u.current = r, e(i)), l.current && (n.current = requestAnimationFrame(a))
                    }, [e, t]),
                    f = r.useCallback(() => {
                        l.current = !0, u.current = void 0, n.current = requestAnimationFrame(a)
                    }, [a]);
                return r.useEffect(() => (n.current = requestAnimationFrame(a), () => cancelAnimationFrame(n.current)), []), {
                    stop: o,
                    reset: f,
                    ticking: l
                }
            }