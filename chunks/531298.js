            "use strict";
            var r = n("714919"),
                a = n("485863").some;
            r({
                target: "Array",
                proto: !0,
                forced: !n("119500")("some")
            }, {
                some: function(e) {
                    return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            })