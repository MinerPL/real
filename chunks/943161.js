            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
                r = n("83910"),
                s = n("93393"),
                u = n("317041"),
                o = n("749296");
            let d = e => {
                switch (e.id) {
                    case u.BuiltInSectionId.BUILT_IN:
                        return r.default;
                    case u.BuiltInSectionId.FRECENCY:
                        return s.default;
                    default:
                        return
                }
            };

            function c(e) {
                let {
                    section: t,
                    className: n,
                    width: a,
                    height: r,
                    padding: s,
                    isSelected: u,
                    selectable: c = !1,
                    ...E
                } = e, f = d(t);
                return (0, i.jsx)("div", {
                    className: l(o.wrapper, n, {
                        [o.selectable]: c,
                        [o.selected]: c && u
                    }),
                    style: {
                        width: a,
                        height: r,
                        padding: null != s ? s : 0
                    },
                    children: null != f ? (0, i.jsx)(f, {
                        className: o.icon,
                        width: a,
                        height: r,
                        ...E
                    }) : null
                })
            }