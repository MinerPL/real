            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007"), n("808653"), n("424973");
            var r = n("884691"),
                i = (e, t) => {
                    let [n, i] = r.useState(-1), u = r.useRef(-1);
                    return r.useEffect(() => {
                        let t = e.reduce((e, t) => (!e.includes(t.src) && e.push(t.src), e), []);
                        i(t.length), u.current = t.length
                    }, [e, u, i]), r.useEffect(() => {
                        0 === n && t()
                    }, [n, t]), {
                        pending: n,
                        pendingRef: u,
                        setPending: i
                    }
                }