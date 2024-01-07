            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("446674"),
                a = n("982527"),
                s = n("305961");

            function i() {
                return (0, l.useStateFromStoresArray)([a.default, s.default], () => {
                    let e = a.default.computeGuildIds(),
                        t = s.default.getGuilds();
                    return e.filter(e => null == t[e])
                })
            }