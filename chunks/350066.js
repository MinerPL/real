s("854508");
var r = s("912065").Buffer,
  i = s("687185");

function n(t, e, s) {
  var n = e.length,
    c = i(e, t._cache);
  return t._cache = t._cache.slice(n), t._prev = r.concat([t._prev, s ? e : c]), c
}
e.encrypt = function(t, e, s) {
  for (var i, c = r.allocUnsafe(0); e.length;)
    if (0 === t._cache.length && (t._cache = t._cipher.encryptBlock(t._prev), t._prev = r.allocUnsafe(0)), t._cache.length <= e.length) i = t._cache.length, c = r.concat([c, n(t, e.slice(0, i), s)]), e = e.slice(i);
    else {
      c = r.concat([c, n(t, e, s)]);
      break
    } return c
}