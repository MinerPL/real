            r("854508");
            var i = r("912065").Buffer;
            e.encrypt = function(t, e, r) {
                for (var n = e.length, o = i.allocUnsafe(n), a = -1; ++a < n;) o[a] = function(t, e, r) {
                    var n = t._cipher.encryptBlock(t._prev)[0] ^ e;
                    return t._prev = i.concat([t._prev.slice(1), i.from([r ? e : n])]), n
                }(t, e[a], r);
                return o
            }