            "use strict";
            n.r(t), n.d(t, {
                IdleHandlerContext: function() {
                    return i
                },
                IdleStateContext: function() {
                    return r
                },
                default: function() {
                    return o
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("862337");
            let i = a.createContext({
                    onPreventIdle: () => null,
                    onAllowIdle: () => null,
                    onForceIdle: () => null,
                    onActive: () => null
                }),
                r = a.createContext(!1);

            function o(e) {
                let {
                    children: t,
                    timeout: n
                } = e, [o, u] = a.useState(!1), d = a.useRef(new Set), c = a.useRef(null);
                a.useEffect(() => (c.current = new s.DelayedCall(n, () => u(!0)), c.current.delay(), () => {
                    var e;
                    null === (e = c.current) || void 0 === e || e.cancel(), c.current = null
                }), [n]);
                let m = a.useCallback(e => {
                        var t;
                        u(!1), d.current.add(e), null === (t = c.current) || void 0 === t || t.cancel()
                    }, [d, c, u]),
                    f = a.useCallback(e => {
                        if (d.current.delete(e), 0 === d.current.size) {
                            var t;
                            null === (t = c.current) || void 0 === t || t.delay()
                        }
                    }, [d, c]),
                    h = a.useCallback(() => {
                        if (u(!1), 0 === d.current.size) {
                            var e;
                            null === (e = c.current) || void 0 === e || e.delay()
                        }
                    }, [d, c, u]),
                    p = a.useCallback(() => {
                        var e;
                        !(d.current.size > 0) && (null === (e = c.current) || void 0 === e || e.cancel(), u(!0))
                    }, [c, u]),
                    g = a.useMemo(() => ({
                        onAllowIdle: f,
                        onPreventIdle: m,
                        onActive: h,
                        onForceIdle: p
                    }), [f, m, h, p]);
                return (0, l.jsx)(r.Provider, {
                    value: o,
                    children: (0, l.jsx)(i.Provider, {
                        value: g,
                        children: t({
                            idle: o,
                            ...g
                        })
                    })
                })
            }