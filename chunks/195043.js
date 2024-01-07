            "use strict";
            var r = n("714919"),
                a = n("362776"),
                o = n("751779"),
                i = n("151790"),
                l = n("688274"),
                Map = i.Map,
                u = i.set;
            r({
                target: "Map",
                proto: !0,
                real: !0,
                forced: !0
            }, {
                mapKeys: function(e) {
                    var t = o(this),
                        n = a(e, arguments.length > 1 ? arguments[1] : void 0),
                        r = new Map;
                    return l(t, function(e, a) {
                        u(r, n(e, a, t), e)
                    }), r
                }
            })