            var i = r("446825").Buffer,
                n = r("240163"),
                a = r("83737"),
                o = r("958604"),
                s = {
                    binary: !0,
                    hex: !0,
                    base64: !0
                };
            e.DiffieHellmanGroup = e.createDiffieHellmanGroup = e.getDiffieHellman = function(t) {
                return new o(new i(a[t].prime, "hex"), new i(a[t].gen, "hex"))
            }, e.createDiffieHellman = e.DiffieHellman = function t(e, r, a, f) {
                return i.isBuffer(r) || void 0 === s[r] ? t(e, "binary", r, a) : (r = r || "binary", f = f || "binary", a = a || new i([2]), !i.isBuffer(a) && (a = new i(a, f)), "number" == typeof e) ? new o(n(e, a), a, !0) : (!i.isBuffer(e) && (e = new i(e, r)), new o(e, a, !0))
            }