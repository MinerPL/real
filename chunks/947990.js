            "use strict";
            n.r(t), n.d(t, {
                calculatePointerPosition: function() {
                    return a
                }
            });
            let r = (e, t) => ({
                    x: e.x - t.x,
                    y: e.y - t.y
                }),
                o = e => {
                    let t = e.getInitialClientOffset(),
                        n = e.getInitialSourceClientOffset();
                    return null === t || null === n ? {
                        x: 0,
                        y: 0
                    } : r(t, n)
                },
                a = (e, t) => {
                    let n = e.getClientOffset();
                    if (null === n) return null;
                    if (!t.current || !t.current.getBoundingClientRect) return r(n, o(e));
                    let a = t.current.getBoundingClientRect(),
                        i = {
                            x: a.width / 2,
                            y: a.height / 2
                        };
                    return r(n, i)
                }