            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return s.BotTagTypes
                },
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                r = n.n(a),
                i = n("79798"),
                s = n("988268"),
                u = n("888770"),
                o = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: a,
                        nameColor: s,
                        className: o,
                        botType: d,
                        usernameClass: c,
                        discriminatorClass: f,
                        botClass: h,
                        botVerified: p = !1,
                        style: C,
                        useRemSizes: m = !1,
                        usernameIcon: v
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: r(o, u.nameTag),
                        style: C,
                        children: [(0, l.jsxs)("span", {
                            className: r(u.username, c),
                            style: null != s ? {
                                color: s
                            } : void 0,
                            children: [v, t]
                        }), null != n ? (0, l.jsxs)("span", {
                            className: null != f ? f : void 0,
                            children: ["#", n]
                        }) : null, null != d ? (0, l.jsx)(i.default, {
                            type: d,
                            invertColor: a,
                            className: r(h, u.bot),
                            verified: p,
                            useRemSizes: m
                        }) : null]
                    })
                }