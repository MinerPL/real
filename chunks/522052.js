            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("171210"),
                s = n("956089"),
                i = n("168986");

            function r(e) {
                let {
                    mentionsCount: t
                } = e;
                return (0, l.jsx)("div", {
                    className: i.mentionsBadge,
                    "aria-hidden": !0,
                    children: (0, l.jsx)(s.NumberBadge, {
                        count: t,
                        color: a.default.STATUS_DANGER
                    })
                })
            }