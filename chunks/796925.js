r("70102");
var n = r("933625");

function o(e, t) {
  if ("function" != typeof e || null != t && "function" != typeof t) throw TypeError("Expected a function");
  var r = function() {
    var n = arguments,
      o = t ? t.apply(this, n) : n[0],
      a = r.cache;
    if (a.has(o)) return a.get(o);
    var i = e.apply(this, n);
    return r.cache = a.set(o, i) || a, i
  };
  return r.cache = new(o.Cache || n), r
}
o.Cache = n, e.exports = o