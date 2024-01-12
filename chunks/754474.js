            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return a.BotTagTypes
                },
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                s = n("79798"),
                a = n("988268"),
                u = n("888770"),
                o = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: i,
                        nameColor: a,
                        className: o,
                        botType: c,
                        usernameClass: d,
                        discriminatorClass: f,
                        botClass: I,
                        botVerified: _ = !1,
                        style: E,
                        useRemSizes: S = !1,
                        usernameIcon: T
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: l(o, u.nameTag),
                        style: E,
                        children: [(0, r.jsxs)("span", {
                            className: l(u.username, d),
                            style: null != a ? {
                                color: a
                            } : void 0,
                            children: [T, t]
                        }), null != n ? (0, r.jsxs)("span", {
                            className: null != f ? f : void 0,
                            children: ["#", n]
                        }) : null, null != c ? (0, r.jsx)(s.default, {
                            type: c,
                            invertColor: i,
                            className: l(I, u.bot),
                            verified: _,
                            useRemSizes: S
                        }) : null]
                    })
                }