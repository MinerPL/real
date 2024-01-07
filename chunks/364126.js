            "use strict";
            var r = n("714919"),
                a = n("359882"),
                o = Date,
                i = a(o.prototype.getTime);
            r({
                target: "Date",
                stat: !0
            }, {
                now: function() {
                    return i(new o)
                }
            })