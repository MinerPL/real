n("70102");
var e = n("664007");

function o(t, r) {
  if ("function" != typeof t || null != r && "function" != typeof r) throw TypeError("Expected a function");
  var n = function() {
    var e = arguments,
      o = r ? r.apply(this, e) : e[0],
      i = n.cache;
    if (i.has(o)) return i.get(o);
    var u = t.apply(this, e);
    return n.cache = i.set(o, u) || i, u
  };
  return n.cache = new(o.Cache || e), n
}
o.Cache = e, t.exports = o