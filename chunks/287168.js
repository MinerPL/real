"use strict";
var e = n("484784"),
  i = n("64980"),
  o = n("998270"),
  u = n("79807"),
  a = URLSearchParams,
  f = a.prototype,
  c = i(f.getAll),
  s = i(f.has),
  l = new a("a=1");
(l.has("a", 2) || !l.has("a", void 0)) && e(f, "has", function(t) {
  var r = arguments.length,
    n = r < 2 ? void 0 : arguments[1];
  if (r && void 0 === n) return s(this, t);
  var e = c(this, t);
  u(r, 1);
  for (var i = o(n), a = 0; a < e.length;)
    if (e[a++] === i) return !0;
  return !1
}, {
  enumerable: !0,
  unsafe: !0
})