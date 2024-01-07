            "use strict";
            s.r(t), s.d(t, {
                MessageBlockColors: function() {
                    return i
                },
                default: function() {
                    return u
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("414456"),
                r = s.n(n),
                o = s("77078"),
                a = s("53895");
            let i = {
                RED: a.redMessageBlock,
                YELLOW: a.yellowMessageBlock,
                BROWN: a.brownMessageBlock
            };

            function u(e) {
                let {
                    color: t,
                    icon: s,
                    children: n,
                    className: i
                } = e;
                return (0, l.jsx)(o.FormErrorBlock, {
                    icon: e => (0, l.jsx)(s, {
                        height: 20,
                        width: 20,
                        ...e
                    }),
                    iconClassName: a.messageBlockIcon,
                    className: r(t, i),
                    children: n
                })
            }