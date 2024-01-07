            "use strict";
            r("70102"), r("975169")();
            var i = r("105562"),
                n = r("865435"),
                o = r("828194"),
                a = r("738838"),
                s = r("37549"),
                f = r("648644"),
                h = f(s("%Promise.all%")),
                c = f(s("%Promise.reject%"));
            t.exports = function(t) {
                var e = this;
                if ("Object" !== n(e)) throw TypeError("`this` value must be an object");
                return h(e, a(o(t), function(t) {
                    var r = i(e, t);
                    try {
                        return r.then(function(t) {
                            return {
                                status: "fulfilled",
                                value: t
                            }
                        }, function(t) {
                            return {
                                status: "rejected",
                                reason: t
                            }
                        })
                    } catch (t) {
                        return c(e, t)
                    }
                }))
            }