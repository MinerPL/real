"use strict";
var r = n("714919"),
  a = n("751779"),
  o = n("151790"),
  i = o.get,
  l = o.has,
  u = o.set;
r({
  target: "Map",
  proto: !0,
  real: !0,
  forced: !0
}, {
  emplace: function(e, t) {
    var n, r, o = a(this);
    return l(o, e) ? (n = i(o, e), "update" in t && (n = t.update(n, e, o), u(o, e, n)), n) : (r = t.insert(e, o), u(o, e, r), r)
  }
})