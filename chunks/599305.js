            "use strict";
            var r = n("714919"),
                a = n("925371"),
                o = n("85610").indexOf,
                i = n("119500"),
                l = a([].indexOf),
                u = !!l && 1 / l([1], 1, -0) < 0;
            r({
                target: "Array",
                proto: !0,
                forced: u || !i("indexOf")
            }, {
                indexOf: function(e) {
                    var t = arguments.length > 1 ? arguments[1] : void 0;
                    return u ? l(this, e, t) || 0 : o(this, e, t)
                }
            })