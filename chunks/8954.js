            var i = r("446825").Buffer;
            r("854508");
            var n = r("687185");
            e.encrypt = function(t, e) {
                for (; t._cache.length < e.length;) {
                    var r;
                    t._cache = i.concat([t._cache, ((r = t)._prev = r._cipher.encryptBlock(r._prev), r._prev)])
                }
                var a = t._cache.slice(0, e.length);
                return t._cache = t._cache.slice(e.length), n(e, a)
            }