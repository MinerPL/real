            "use strict";
            var r = n("714919"),
                a = n("938324").left,
                o = n("119500"),
                i = n("370080"),
                l = n("111878");
            r({
                target: "Array",
                proto: !0,
                forced: !l && i > 79 && i < 83 || !o("reduce")
            }, {
                reduce: function(e) {
                    var t = arguments.length;
                    return a(this, e, t, t > 1 ? arguments[1] : void 0)
                }
            })