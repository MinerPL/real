            "use strict";
            var e = n("714919"),
                o = n("522552"),
                i = n("234779"),
                u = n("490653"),
                s = n("581887"),
                c = n("756579"),
                f = n("789445"),
                a = n("884643"),
                p = n("849478"),
                v = n("487695"),
                l = n("355817"),
                y = n("370080"),
                h = l("isConcatSpreadable"),
                x = y >= 51 || !o(function() {
                    var t = [];
                    return t[h] = !1, t.concat()[0] !== t
                }),
                d = function(t) {
                    if (!u(t)) return !1;
                    var r = t[h];
                    return void 0 !== r ? !!r : i(t)
                };
            e({
                target: "Array",
                proto: !0,
                arity: 1,
                forced: !x || !v("concat")
            }, {
                concat: function(t) {
                    var r, n, e, o, i, u = s(this),
                        v = p(u, 0),
                        l = 0;
                    for (r = -1, e = arguments.length; r < e; r++)
                        if (i = -1 === r ? u : arguments[r], d(i))
                            for (f(l + (o = c(i))), n = 0; n < o; n++, l++) n in i && a(v, l, i[n]);
                        else f(l + 1), a(v, l++, i);
                    return v.length = l, v
                }
            })