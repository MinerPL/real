            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("775560"),
                r = n("888400"),
                l = n("149638");

            function a(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = (0, r.diffAsUnits)(Date.now(), e),
                    o = (0, i.useForceUpdate)();
                return (0, l.default)(() => {
                    let e = 0 === s.days && 0 === s.hours && 0 === s.minutes && 0 === s.seconds;
                    !e && !a && (o(), null == n || n())
                }, a ? null : t), s
            }