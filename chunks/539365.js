            "use strict";
            n.r(t), n.d(t, {
                MenuGroup: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                a = n("389802"),
                o = n("946032");

            function l(e) {
                let {
                    contents: t,
                    label: n,
                    className: r,
                    color: l = "default"
                } = e;
                return 0 === t.length ? null : (0, i.jsxs)("div", {
                    "aria-label": n,
                    role: "group",
                    className: r,
                    children: [null != n ? (0, i.jsx)("div", {
                        className: s(o.groupLabel, a.MENU_ITEM_COLORS[l]),
                        children: n
                    }) : null, t]
                })
            }