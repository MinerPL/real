            var i = r("446825").Buffer,
                n = r("240163"),
                o = r("83737"),
                a = r("958604"),
                s = {
                    binary: !0,
                    hex: !0,
                    base64: !0
                };
            e.DiffieHellmanGroup = e.createDiffieHellmanGroup = e.getDiffieHellman = function(t) {
                return new a(new i(o[t].prime, "hex"), new i(o[t].gen, "hex"))
            }, e.createDiffieHellman = e.DiffieHellman = function t(e, r, o, f) {
                return i.isBuffer(r) || void 0 === s[r] ? t(e, "binary", r, o) : (r = r || "binary", f = f || "binary", o = o || new i([2]), !i.isBuffer(o) && (o = new i(o, f)), "number" == typeof e) ? new a(n(e, o), o, !0) : (!i.isBuffer(e) && (e = new i(e, r)), new a(e, o, !0))
            }