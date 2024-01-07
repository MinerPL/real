            "use strict";
            var r = n("714919"),
                a = n("761300"),
                o = n("130170"),
                i = n("268540"),
                l = n("338867"),
                Map = n("151790").Map;
            r({
                target: "Map",
                stat: !0,
                forced: !0
            }, {
                keyBy: function(e, t) {
                    var n = new(i(this) ? this : Map);
                    l(t);
                    var r = l(n.set);
                    return o(e, function(e) {
                        a(r, n, t(e), e)
                    }), n
                }
            })