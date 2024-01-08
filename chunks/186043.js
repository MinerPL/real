            r("854508");
            var i = r("687185"),
                n = r("912065").Buffer,
                a = r("135042");
            e.encrypt = function(t, e) {
                var r = Math.ceil(e.length / 16),
                    o = t._cache.length;
                t._cache = n.concat([t._cache, n.allocUnsafe(16 * r)]);
                for (var s = 0; s < r; s++) {
                    var f = function(t) {
                            var e = t._cipher.encryptBlockRaw(t._prev);
                            return a(t._prev), e
                        }(t),
                        h = o + 16 * s;
                    t._cache.writeUInt32BE(f[0], h + 0), t._cache.writeUInt32BE(f[1], h + 4), t._cache.writeUInt32BE(f[2], h + 8), t._cache.writeUInt32BE(f[3], h + 12)
                }
                var c = t._cache.slice(0, e.length);
                return t._cache = t._cache.slice(e.length), i(e, c)
            }