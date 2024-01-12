            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return r.BotTagTypes
                },
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("79798"),
                r = n("988268"),
                u = n("888770"),
                o = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: a,
                        nameColor: r,
                        className: o,
                        botType: d,
                        usernameClass: c,
                        discriminatorClass: E,
                        botClass: f,
                        botVerified: _ = !1,
                        style: I,
                        useRemSizes: h = !1,
                        usernameIcon: T
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: s(o, u.nameTag),
                        style: I,
                        children: [(0, l.jsxs)("span", {
                            className: s(u.username, c),
                            style: null != r ? {
                                color: r
                            } : void 0,
                            children: [T, t]
                        }), null != n ? (0, l.jsxs)("span", {
                            className: null != E ? E : void 0,
                            children: ["#", n]
                        }) : null, null != d ? (0, l.jsx)(i.default, {
                            type: d,
                            invertColor: a,
                            className: s(f, u.bot),
                            verified: _,
                            useRemSizes: h
                        }) : null]
                    })
                }