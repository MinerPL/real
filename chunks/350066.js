            r("854508");
            var i = r("912065").Buffer,
                n = r("687185");

            function o(t, e, r) {
                var o = e.length,
                    a = n(e, t._cache);
                return t._cache = t._cache.slice(o), t._prev = i.concat([t._prev, r ? e : a]), a
            }
            e.encrypt = function(t, e, r) {
                for (var n, a = i.allocUnsafe(0); e.length;)
                    if (0 === t._cache.length && (t._cache = t._cipher.encryptBlock(t._prev), t._prev = i.allocUnsafe(0)), t._cache.length <= e.length) n = t._cache.length, a = i.concat([a, o(t, e.slice(0, n), r)]), e = e.slice(n);
                    else {
                        a = i.concat([a, o(t, e, r)]);
                        break
                    } return a
            }