            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                a = n("83910"),
                s = n("93393"),
                o = n("317041"),
                u = n("749296");
            let d = e => {
                switch (e.id) {
                    case o.BuiltInSectionId.BUILT_IN:
                        return a.default;
                    case o.BuiltInSectionId.FRECENCY:
                        return s.default;
                    default:
                        return
                }
            };

            function c(e) {
                let {
                    section: t,
                    className: n,
                    width: l,
                    height: a,
                    padding: s,
                    isSelected: o,
                    selectable: c = !1,
                    ...f
                } = e, h = d(t);
                return (0, i.jsx)("div", {
                    className: r(u.wrapper, n, {
                        [u.selectable]: c,
                        [u.selected]: c && o
                    }),
                    style: {
                        width: l,
                        height: a,
                        padding: null != s ? s : 0
                    },
                    children: null != h ? (0, i.jsx)(h, {
                        className: u.icon,
                        width: l,
                        height: a,
                        ...f
                    }) : null
                })
            }