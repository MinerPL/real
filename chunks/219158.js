            "use strict";
            var r = n("714919"),
                a = n("359882"),
                o = n("948937"),
                i = RangeError,
                l = String.fromCharCode,
                u = String.fromCodePoint,
                s = a([].join);
            r({
                target: "String",
                stat: !0,
                arity: 1,
                forced: !!u && 1 !== u.length
            }, {
                fromCodePoint: function(e) {
                    for (var t, n = [], r = arguments.length, a = 0; r > a;) {
                        if (t = +arguments[a++], o(t, 1114111) !== t) throw new i(t + " is not a valid code point");
                        n[a] = t < 65536 ? l(t) : l(((t -= 65536) >> 10) + 55296, t % 1024 + 56320)
                    }
                    return s(n, "")
                }
            })