            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("669491"),
                s = a("956089"),
                i = a("782340");

            function d(e) {
                let {
                    className: t,
                    color: a = n.default.unsafe_rawColors.BRAND_500.css,
                    ...d
                } = e;
                return (0, l.jsx)(s.TextBadge, {
                    ...d,
                    text: i.default.Messages.BETA,
                    color: a,
                    className: t
                })
            }