            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("884691"),
                l = n("748820"),
                s = n("760679");
            let i = () => {};

            function r(e, t, n) {
                let r = a.useRef((0, l.v4)()),
                    u = a.useRef(Date.now()),
                    o = a.useCallback((a, l) => {
                        let i = {
                            x: a,
                            y: l,
                            deltaTime: Date.now() - u.current
                        };
                        (0, s.drawLinePoint)(t, r.current, e, n, i), (0, s.updateLinePoints)(r.current, e, n, [i])
                    }, [t, n, e]),
                    d = a.useCallback((e, t, n) => {
                        r.current = (0, l.v4)(), u.current = Date.now(), o(t, n)
                    }, [o]),
                    c = a.useCallback((e, t, n) => o(t, n), [o]),
                    f = a.useCallback((e, t, n) => d(e, t, n), [d]);
                return a.useMemo(() => ({
                    handleMouseDown: d,
                    handleMouseMove: c,
                    handleMouseUp: i,
                    handleMouseEnter: f
                }), [d, f, c])
            }