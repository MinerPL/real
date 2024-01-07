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
                u = n("77078"),
                o = n("782340"),
                a = n("239636");
            let s = Object.freeze({
                DEFAULT: a.default,
                FILLED: a.filled
            });

            function c(e) {
                let {
                    className: t,
                    onClick: n,
                    "aria-label": i,
                    look: c = s.DEFAULT
                } = e;
                return (0, r.jsx)(u.Clickable, {
                    "aria-label": null != i ? i : o.default.Messages.REMOVE,
                    className: l(a.button, c, t),
                    onClick: n
                })
            }
            c.Looks = s