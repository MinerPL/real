            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                a = n("77078"),
                o = n("782340"),
                u = n("239636");
            let s = Object.freeze({
                DEFAULT: u.default,
                FILLED: u.filled
            });

            function c(e) {
                let {
                    className: t,
                    onClick: n,
                    "aria-label": i,
                    look: c = s.DEFAULT
                } = e;
                return (0, r.jsx)(a.Clickable, {
                    "aria-label": null != i ? i : o.default.Messages.REMOVE,
                    className: l(u.button, c, t),
                    onClick: n
                })
            }
            c.Looks = s