            "use strict";
            var e = r("859514"),
                u = r("116180"),
                i = r("308274"),
                a = r("109024"),
                o = r("53489"),
                c = r("359529"),
                f = 1 !== [].unshift(0);
            e({
                target: "Array",
                proto: !0,
                arity: 1,
                forced: f || ! function() {
                    try {
                        Object.defineProperty([], "length", {
                            writable: !1
                        }).unshift()
                    } catch (t) {
                        return t instanceof TypeError
                    }
                }()
            }, {
                unshift: function(t) {
                    var n = u(this),
                        r = i(n),
                        e = arguments.length;
                    if (e) {
                        c(r + e);
                        for (var f = r; f--;) {
                            var s = f + e;
                            f in n ? n[s] = n[f] : o(n, s)
                        }
                        for (var l = 0; l < e; l++) n[l] = arguments[l]
                    }
                    return a(n, r + e)
                }
            })