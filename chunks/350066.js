            r("854508");
            var i = r("912065").Buffer,
                n = r("687185");

            function a(t, e, r) {
                var a = e.length,
                    o = n(e, t._cache);
                return t._cache = t._cache.slice(a), t._prev = i.concat([t._prev, r ? e : o]), o
            }
            e.encrypt = function(t, e, r) {
                for (var n, o = i.allocUnsafe(0); e.length;)
                    if (0 === t._cache.length && (t._cache = t._cipher.encryptBlock(t._prev), t._prev = i.allocUnsafe(0)), t._cache.length <= e.length) n = t._cache.length, o = i.concat([o, a(t, e.slice(0, n), r)]), e = e.slice(n);
                    else {
                        o = i.concat([o, a(t, e, r)]);
                        break
                    } return o
            }