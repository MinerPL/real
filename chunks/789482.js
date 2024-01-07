            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("155207"),
                i = n("831481");

            function r(e) {
                let {
                    userCount: t
                } = e;
                return (0, l.jsxs)("div", {
                    className: i.container,
                    children: [(0, l.jsx)(s.default, {
                        width: 12,
                        height: 12,
                        className: i.peopleIcon
                    }), (0, l.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        className: i.userCountText,
                        children: t
                    })]
                })
            }