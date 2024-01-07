            "use strict";
            var r = n("714919"),
                a = n("761300"),
                o = n("95536");
            r({
                target: "Promise",
                stat: !0,
                forced: n("51494").CONSTRUCTOR
            }, {
                reject: function(e) {
                    var t = o.f(this);
                    return a(t.reject, void 0, e), t.promise
                }
            })