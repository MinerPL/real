            "use strict";
            var r = n("714919"),
                a = n("289275"),
                o = n("13232")(a.setInterval, !0);
            r({
                global: !0,
                bind: !0,
                forced: a.setInterval !== o
            }, {
                setInterval: o
            })