e("424973");
var n = e("772205"),
  o = e("971433"),
  i = e("486036"),
  u = e("474710"),
  a = e("227290"),
  c = e("965779"),
  s = Object.prototype.hasOwnProperty;
t.exports = function(t, r) {
  var e = i(t),
    f = !e && o(t),
    p = !e && !f && u(t),
    v = !e && !f && !p && c(t),
    l = e || f || p || v,
    h = l ? n(t.length, String) : [],
    _ = h.length;
  for (var y in t)(r || s.call(t, y)) && !(l && ("length" == y || p && ("offset" == y || "parent" == y) || v && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || a(y, _))) && h.push(y);
  return h
}