            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("232268"),
                i = n("759432"),
                r = n("798592"),
                u = n("39141");

            function o(e) {
                let {
                    callTileRef: t,
                    isFiring: n
                } = e, a = (0, r.default)(), s = (0, i.default)(t);
                return l.useEffect(() => {
                    n && null != s && null != t && a.fire(s.x + t.clientWidth / 2, s.y + t.clientHeight / 2, {
                        countMultiplier: 4
                    })
                }, [t, a, n, s]), null
            }

            function d(e) {
                return (0, a.jsx)(s.default, {
                    confettiLocation: u.ConfettiLocation.CALL_TILE,
                    children: (0, a.jsx)(o, {
                        ...e
                    })
                })
            }