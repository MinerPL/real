            r("70102");
            var i = r("961863"),
                n = r("891044"),
                o = r("725214"),
                a = r("869578"),
                s = r("786561");

            function f(t, e, r) {
                if (o[t = t.toLowerCase()]) return n.createCipheriv(t, e, r);
                if (a[t]) return new i({
                    key: e,
                    iv: r,
                    mode: t
                });
                throw TypeError("invalid suite type")
            }

            function h(t, e, r) {
                if (o[t = t.toLowerCase()]) return n.createDecipheriv(t, e, r);
                if (a[t]) return new i({
                    key: e,
                    iv: r,
                    mode: t,
                    decrypt: !0
                });
                throw TypeError("invalid suite type")
            }
            e.createCipher = e.Cipher = function(t, e) {
                if (o[t = t.toLowerCase()]) r = o[t].key, i = o[t].iv;
                else if (a[t]) r = 8 * a[t].key, i = a[t].iv;
                else throw TypeError("invalid suite type");
                var r, i, n = s(e, !1, r, i);
                return f(t, n.key, n.iv)
            }, e.createCipheriv = e.Cipheriv = f, e.createDecipher = e.Decipher = function(t, e) {
                if (o[t = t.toLowerCase()]) r = o[t].key, i = o[t].iv;
                else if (a[t]) r = 8 * a[t].key, i = a[t].iv;
                else throw TypeError("invalid suite type");
                var r, i, n = s(e, !1, r, i);
                return h(t, n.key, n.iv)
            }, e.createDecipheriv = e.Decipheriv = h, e.listCiphers = e.getCiphers = function() {
                return Object.keys(a).concat(n.getCiphers())
            }