            r("854508");
            var i = r("912065").Buffer;
            e.encrypt = function(t, e, r) {
                for (var n = e.length, a = i.allocUnsafe(n), o = -1; ++o < n;) a[o] = function(t, e, r) {
                    var n = t._cipher.encryptBlock(t._prev)[0] ^ e;
                    return t._prev = i.concat([t._prev.slice(1), i.from([r ? e : n])]), n
                }(t, e[o], r);
                return a
            }