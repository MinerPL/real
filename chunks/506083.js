            "use strict";
            var r = n("859514"),
                i = n("140925"),
                o = n("718530"),
                a = n("664144"),
                s = n("434978"),
                c = n("125359"),
                u = n("499460"),
                d = n("33270"),
                l = n("484784"),
                p = o && o.prototype;
            if (r({
                    target: "Promise",
                    proto: !0,
                    real: !0,
                    forced: !!o && a(function() {
                        p.finally.call({
                            then: function() {}
                        }, function() {})
                    })
                }, {
                    finally: function(e) {
                        var t = u(this, s("Promise")),
                            n = c(e);
                        return this.then(n ? function(n) {
                            return d(t, e()).then(function() {
                                return n
                            })
                        } : e, n ? function(n) {
                            return d(t, e()).then(function() {
                                throw n
                            })
                        } : e)
                    }
                }), !i && c(o)) {
                var _ = s("Promise").prototype.finally;
                p.finally !== _ && l(p, "finally", _, {
                    unsafe: !0
                })
            }