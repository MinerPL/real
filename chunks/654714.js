"use strict";
var e = n("484784"),
  i = n("64980"),
  o = n("998270"),
  u = n("79807"),
  a = URLSearchParams,
  f = a.prototype,
  c = i(f.append),
  s = i(f.delete),
  l = i(f.forEach),
  h = i([].push),
  p = new a("a=1&a=2&b=3");
p.delete("a", 1), p.delete("b", void 0), p + "" != "a=2" && e(f, "delete", function(t) {
  var r, n = arguments.length,
    e = n < 2 ? void 0 : arguments[1];
  if (n && void 0 === e) return s(this, t);
  var i = [];
  l(this, function(t, r) {
    h(i, {
      key: r,
      value: t
    })
  }), u(n, 1);
  for (var a = o(t), f = o(e), p = 0, v = 0, g = !1, d = i.length; p < d;) r = i[p++], g || r.key === a ? (g = !0, s(this, r.key)) : v++;
  for (; v < d;) !((r = i[v++]).key === a && r.value === f) && c(this, r.key, r.value)
}, {
  enumerable: !0,
  unsafe: !0
})