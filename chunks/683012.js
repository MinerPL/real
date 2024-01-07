            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var l = n("884691"),
                a = n("866227"),
                s = n.n(a),
                i = n("775560"),
                r = n("646630"),
                o = n("49111");
            let u = [
                    [2 * o.Durations.MINUTE, o.Durations.SECOND],
                    [5 * o.Durations.MINUTE, o.Durations.MINUTE],
                    [45 * o.Durations.MINUTE, 2 * o.Durations.MINUTE],
                    [21 * o.Durations.HOUR, 5 * o.Durations.MINUTE]
                ],
                d = 2 * o.Durations.HOUR;

            function c(e) {
                let t = (0, i.useForceUpdate)();
                return (l.useEffect(() => {
                    if ("R" !== e.format) return;
                    let n = 1e3 * d,
                        l = Math.abs(e.parsed.diff(s()));
                    for (let [e, t] of u)
                        if (l < 1e3 * e) {
                            n = 1e3 * t;
                            break
                        } let a = setInterval(() => {
                        t()
                    }, n);
                    return () => clearInterval(a)
                }, [t, e.format, e.parsed]), "R" === e.format) ? r.TIMESTAMP_FORMATS.R(e.parsed) : e.formatted
            }