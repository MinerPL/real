            "use strict";
            var n = r("859514"),
                i = r("140925"),
                u = r("718530"),
                o = r("664144"),
                s = r("434978"),
                a = r("125359"),
                c = r("499460"),
                l = r("33270"),
                f = r("484784"),
                d = u && u.prototype;
            if (n({
                    target: "Promise",
                    proto: !0,
                    real: !0,
                    forced: !!u && o(function() {
                        d.finally.call({
                            then: function() {}
                        }, function() {})
                    })
                }, {
                    finally: function(t) {
                        var e = c(this, s("Promise")),
                            r = a(t);
                        return this.then(r ? function(r) {
                            return l(e, t()).then(function() {
                                return r
                            })
                        } : t, r ? function(r) {
                            return l(e, t()).then(function() {
                                throw r
                            })
                        } : t)
                    }
                }), !i && a(u)) {
                var h = s("Promise").prototype.finally;
                d.finally !== h && f(d, "finally", h, {
                    unsafe: !0
                })
            }