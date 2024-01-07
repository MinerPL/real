            "use strict";
            var r = n("714919"),
                a = n("338867"),
                o = n("751779"),
                i = n("688274"),
                l = TypeError;
            r({
                target: "Map",
                proto: !0,
                real: !0,
                forced: !0
            }, {
                reduce: function(e) {
                    var t = o(this),
                        n = arguments.length < 2,
                        r = n ? void 0 : arguments[1];
                    if (a(e), i(t, function(a, o) {
                            n ? (n = !1, r = a) : r = e(r, a, o, t)
                        }), n) throw new l("Reduce of empty map with no initial value");
                    return r
                }
            })