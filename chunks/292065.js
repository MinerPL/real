s("854508");
var r = s("912065").Buffer;
e.encrypt = function(t, e, s) {
  for (var i = e.length, n = r.allocUnsafe(i), c = -1; ++c < i;) n[c] = function(t, e, s) {
    for (var i, n, c, o = -1, f = 0; ++o < 8;) i = t._cipher.encryptBlock(t._prev), n = e & 1 << 7 - o ? 128 : 0, f += (128 & (c = i[0] ^ n)) >> o % 8, t._prev = function(t, e) {
      var s = t.length,
        i = -1,
        n = r.allocUnsafe(t.length);
      for (t = r.concat([t, r.from([e])]); ++i < s;) n[i] = t[i] << 1 | t[i + 1] >> 7;
      return n
    }(t._prev, s ? n : c);
    return f
  }(t, e[c], s);
  return n
}