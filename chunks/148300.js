            s("70102");
            var r = s("961863"),
                i = s("891044"),
                n = s("725214"),
                c = s("869578"),
                o = s("786561");

            function f(t, e, s) {
                if (n[t = t.toLowerCase()]) return i.createCipheriv(t, e, s);
                if (c[t]) return new r({
                    key: e,
                    iv: s,
                    mode: t
                });
                throw TypeError("invalid suite type")
            }

            function u(t, e, s) {
                if (n[t = t.toLowerCase()]) return i.createDecipheriv(t, e, s);
                if (c[t]) return new r({
                    key: e,
                    iv: s,
                    mode: t,
                    decrypt: !0
                });
                throw TypeError("invalid suite type")
            }
            e.createCipher = e.Cipher = function(t, e) {
                if (n[t = t.toLowerCase()]) s = n[t].key, r = n[t].iv;
                else if (c[t]) s = 8 * c[t].key, r = c[t].iv;
                else throw TypeError("invalid suite type");
                var s, r, i = o(e, !1, s, r);
                return f(t, i.key, i.iv)
            }, e.createCipheriv = e.Cipheriv = f, e.createDecipher = e.Decipher = function(t, e) {
                if (n[t = t.toLowerCase()]) s = n[t].key, r = n[t].iv;
                else if (c[t]) s = 8 * c[t].key, r = c[t].iv;
                else throw TypeError("invalid suite type");
                var s, r, i = o(e, !1, s, r);
                return u(t, i.key, i.iv)
            }, e.createDecipheriv = e.Decipheriv = u, e.listCiphers = e.getCiphers = function() {
                return Object.keys(c).concat(i.getCiphers())
            }