s("854508");
var r = s("687185"),
  i = s("912065").Buffer,
  n = s("135042");
e.encrypt = function(t, e) {
  var s = Math.ceil(e.length / 16),
    c = t._cache.length;
  t._cache = i.concat([t._cache, i.allocUnsafe(16 * s)]);
  for (var o = 0; o < s; o++) {
    var f = function(t) {
        var e = t._cipher.encryptBlockRaw(t._prev);
        return n(t._prev), e
      }(t),
      u = c + 16 * o;
    t._cache.writeUInt32BE(f[0], u + 0), t._cache.writeUInt32BE(f[1], u + 4), t._cache.writeUInt32BE(f[2], u + 8), t._cache.writeUInt32BE(f[3], u + 12)
  }
  var a = t._cache.slice(0, e.length);
  return t._cache = t._cache.slice(e.length), r(e, a)
}