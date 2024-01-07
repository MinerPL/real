            "use strict";
            var r = n("714919"),
                a = n("597018"),
                o = n("919863"),
                i = n("979095"),
                l = n("453084"),
                u = n("884643");
            r({
                target: "Object",
                stat: !0,
                sham: !a
            }, {
                getOwnPropertyDescriptors: function(e) {
                    for (var t, n, r = i(e), a = l.f, s = o(r), c = {}, d = 0; s.length > d;) void 0 !== (n = a(r, t = s[d++])) && u(c, t, n);
                    return c
                }
            })