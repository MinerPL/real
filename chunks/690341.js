            "use strict";
            var e = n("960049"),
                o = n("188523"),
                i = n("891708"),
                u = n("969708"),
                f = n("590035"),
                c = o.aTypedArray,
                a = o.getTypedArrayConstructor;
            (0, o.exportTypedArrayMethod)("with", {
                with: function(t, r) {
                    var n = c(this),
                        o = u(t),
                        s = i(n) ? f(r) : +r;
                    return e(n, a(n), o, s)
                }
            }.with, ! function() {
                try {
                    new Int8Array(1).with(2, {
                        valueOf: function() {
                            throw 8
                        }
                    })
                } catch (t) {
                    return 8 === t
                }
            }())