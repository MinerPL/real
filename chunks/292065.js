            r("854508");
            var i = r("912065").Buffer;
            e.encrypt = function(t, e, r) {
                for (var n = e.length, a = i.allocUnsafe(n), o = -1; ++o < n;) a[o] = function(t, e, r) {
                    for (var n, a, o, s = -1, f = 0; ++s < 8;) n = t._cipher.encryptBlock(t._prev), a = e & 1 << 7 - s ? 128 : 0, f += (128 & (o = n[0] ^ a)) >> s % 8, t._prev = function(t, e) {
                        var r = t.length,
                            n = -1,
                            a = i.allocUnsafe(t.length);
                        for (t = i.concat([t, i.from([e])]); ++n < r;) a[n] = t[n] << 1 | t[n + 1] >> 7;
                        return a
                    }(t._prev, r ? a : o);
                    return f
                }(t, e[o], r);
                return a
            }