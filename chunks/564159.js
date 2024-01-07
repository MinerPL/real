            "use strict";
            var r = n("714919"),
                a = n("289275"),
                o = n("13232")(a.setTimeout, !0);
            r({
                global: !0,
                bind: !0,
                forced: a.setTimeout !== o
            }, {
                setTimeout: o
            })