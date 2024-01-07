            "use strict";
            var r = n("714919"),
                a = n("485863").findIndex,
                o = n("865275"),
                i = "findIndex",
                l = !0;
            i in [] && [, ][i](function() {
                l = !1
            }), r({
                target: "Array",
                proto: !0,
                forced: l
            }, {
                findIndex: function(e) {
                    return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), o(i)