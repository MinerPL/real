s("70102");
var r = s("912065").Buffer,
  i = s("708893");
t.exports = function(t, e, s, n) {
  if (!r.isBuffer(t) && (t = r.from(t, "binary")), e && (!r.isBuffer(e) && (e = r.from(e, "binary")), 8 !== e.length)) throw RangeError("salt should be Buffer with 8 byte length");
  for (var c = s / 8, o = r.alloc(c), f = r.alloc(n || 0), u = r.alloc(0); c > 0 || n > 0;) {
    var a = new i;
    a.update(u), a.update(t), e && a.update(e), u = a.digest();
    var d = 0;
    if (c > 0) {
      var p = o.length - c;
      d = Math.min(c, u.length), u.copy(o, p, 0, d), c -= d
    }
    if (d < u.length && n > 0) {
      var b = f.length - n,
        h = Math.min(n, u.length - d);
      u.copy(f, b, d, d + h), n -= h
    }
  }
  return u.fill(0), {
    key: o,
    iv: f
  }
}