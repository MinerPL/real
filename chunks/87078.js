"use strict";
var n = i("64980"),
  r = i("116180"),
  a = Math.floor,
  s = n("".charAt),
  o = n("".replace),
  l = n("".slice),
  u = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
  c = /\$([$&'`]|\d{1,2})/g;
t.exports = function(t, e, i, n, h, f) {
  var d = i + t.length,
    m = n.length,
    v = c;
  return void 0 !== h && (h = r(h), v = u), o(f, v, function(r, o) {
    var u;
    switch (s(o, 0)) {
      case "$":
        return "$";
      case "&":
        return t;
      case "`":
        return l(e, 0, i);
      case "'":
        return l(e, d);
      case "<":
        u = h[l(o, 1, -1)];
        break;
      default:
        var c = +o;
        if (0 === c) return r;
        if (c > m) {
          var f = a(c / 10);
          if (0 === f) return r;
          if (f <= m) return void 0 === n[f - 1] ? s(o, 1) : n[f - 1] + s(o, 1);
          return r
        }
        u = n[c - 1]
    }
    return void 0 === u ? "" : u
  })
}