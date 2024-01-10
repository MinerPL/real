            r("854508");
            var i = r("912065").Buffer;
            e.encrypt = function(t, e, r) {
                for (var n = e.length, o = i.allocUnsafe(n), a = -1; ++a < n;) o[a] = function(t, e, r) {
                    for (var n, o, a, s = -1, f = 0; ++s < 8;) n = t._cipher.encryptBlock(t._prev), o = e & 1 << 7 - s ? 128 : 0, f += (128 & (a = n[0] ^ o)) >> s % 8, t._prev = function(t, e) {
                        var r = t.length,
                            n = -1,
                            o = i.allocUnsafe(t.length);
                        for (t = i.concat([t, i.from([e])]); ++n < r;) o[n] = t[n] << 1 | t[n + 1] >> 7;
                        return o
                    }(t._prev, r ? o : a);
                    return f
                }(t, e[a], r);
                return o
            }