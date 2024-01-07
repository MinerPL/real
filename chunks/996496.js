            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("77078"),
                r = n("887326");

            function o(e) {
                let {
                    hasMentions: t,
                    truncatedCount: n,
                    className: l
                } = e;
                return (0, a.jsx)(i.Text, {
                    className: s(r.unreadCount, l, {
                        [r.mention]: t
                    }),
                    variant: "text-xs/normal",
                    children: n
                })
            }