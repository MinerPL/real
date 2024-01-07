            "use strict";
            var r = n("714919"),
                a = n("761300"),
                o = n("338867"),
                i = n("95536"),
                l = n("160474"),
                u = n("130170");
            r({
                target: "Promise",
                stat: !0,
                forced: n("76950")
            }, {
                race: function(e) {
                    var t = this,
                        n = i.f(t),
                        r = n.reject,
                        s = l(function() {
                            var i = o(t.resolve);
                            u(e, function(e) {
                                a(i, t, e).then(n.resolve, r)
                            })
                        });
                    return s.error && r(s.value), n.promise
                }
            })