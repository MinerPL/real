            "use strict";
            var e = n("714919"),
                o = n("359882"),
                i = n("338867"),
                u = n("591014"),
                s = n("130170"),
                c = n("151790"),
                f = n("418689"),
                Map = c.Map,
                a = c.has,
                p = c.get,
                v = c.set,
                l = o([].push);
            e({
                target: "Map",
                stat: !0,
                forced: f
            }, {
                groupBy: function(t, r) {
                    u(t), i(r);
                    var n = new Map,
                        e = 0;
                    return s(t, function(t) {
                        var o = r(t, e++);
                        a(n, o) ? l(p(n, o), t) : v(n, o, [t])
                    }), n
                }
            })