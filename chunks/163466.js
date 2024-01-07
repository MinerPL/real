            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                i = n.n(s),
                l = n("77078"),
                r = n("530262");

            function o(e) {
                let {
                    padded: t = !0,
                    inset: n = !1,
                    active: s = !1,
                    className: o,
                    children: u,
                    onClick: d,
                    ...c
                } = e;
                return null != d ? (0, a.jsx)(l.Clickable, {
                    onClick: d,
                    tabIndex: null != d ? 0 : -1,
                    className: i(o, {
                        [r.outer]: !n,
                        [r.inset]: n,
                        [r.padded]: t,
                        [r.active]: s,
                        [r.interactive]: null != d
                    }),
                    ...c,
                    children: u
                }) : (0, a.jsx)("div", {
                    className: i(o, {
                        [r.outer]: !n,
                        [r.inset]: n,
                        [r.padded]: t,
                        [r.active]: s
                    }),
                    ...c,
                    children: u
                })
            }