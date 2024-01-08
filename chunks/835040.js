            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("65597"),
                s = n("77078"),
                i = n("880731"),
                r = n("300586");

            function u(e) {
                let {
                    isShaking: t,
                    shakeLocation: n,
                    children: u,
                    className: o
                } = e, d = (0, r.default)(n), c = (0, l.default)([i.default], () => i.default.isEnabled({
                    shakeLocation: n
                }));
                return c ? (0, a.jsx)(s.Shaker, {
                    isShaking: t,
                    intensity: d,
                    className: o,
                    children: u
                }) : (0, a.jsx)(a.Fragment, {
                    children: u
                })
            }