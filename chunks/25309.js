            "use strict";
            var e = n("714919"),
                o = n("581887"),
                i = n("756579"),
                u = n("254866"),
                s = n("789445"),
                c = n("522552")(function() {
                    return 4294967297 !== [].push.call({
                        length: 4294967296
                    }, 1)
                });
            e({
                target: "Array",
                proto: !0,
                arity: 1,
                forced: c || ! function() {
                    try {
                        Object.defineProperty([], "length", {
                            writable: !1
                        }).push()
                    } catch (t) {
                        return t instanceof TypeError
                    }
                }()
            }, {
                push: function(t) {
                    var r = o(this),
                        n = i(r),
                        e = arguments.length;
                    s(n + e);
                    for (var c = 0; c < e; c++) r[n] = arguments[c], n++;
                    return u(r, n), n
                }
            })