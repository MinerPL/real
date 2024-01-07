            "use strict";
            var r = n("714919"),
                a = n("95536"),
                o = n("160474");
            r({
                target: "Promise",
                stat: !0,
                forced: !0
            }, {
                try: function(e) {
                    var t = a.f(this),
                        n = o(e);
                    return (n.error ? t.reject : t.resolve)(n.value), t.promise
                }
            })