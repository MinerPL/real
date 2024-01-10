            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            }), r("222007"), r("808653"), r("424973");
            var n = r("884691"),
                i = (e, t) => {
                    let [r, i] = n.useState(-1), u = n.useRef(-1);
                    return n.useEffect(() => {
                        let t = e.reduce((e, t) => (!e.includes(t.src) && e.push(t.src), e), []);
                        i(t.length), u.current = t.length
                    }, [e, u, i]), n.useEffect(() => {
                        0 === r && t()
                    }, [r, t]), {
                        pending: r,
                        pendingRef: u,
                        setPending: i
                    }
                }