            s("854508");
            var r = s("912065").Buffer;
            e.encrypt = function(t, e, s) {
                for (var i = e.length, n = r.allocUnsafe(i), c = -1; ++c < i;) n[c] = function(t, e, s) {
                    var i = t._cipher.encryptBlock(t._prev)[0] ^ e;
                    return t._prev = r.concat([t._prev.slice(1), r.from([s ? e : i])]), i
                }(t, e[c], s);
                return n
            }