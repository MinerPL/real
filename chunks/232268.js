            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("65597"),
                l = n("880731");

            function o(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, o = (0, r.default)([l.default], () => l.default.isEnabled({
                    confettiLocation: n
                }));
                return o ? (0, i.jsx)(i.Fragment, {
                    children: t
                }) : null
            }