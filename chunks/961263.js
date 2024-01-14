"use strict";
r.r(t), r.d(t, {
  default: function() {
    return l
  }
});
var n = r("382356"),
  o = Object.prototype,
  a = o.hasOwnProperty,
  i = o.toString,
  u = n.default ? n.default.toStringTag : void 0,
  l = function(e) {
    var t = a.call(e, u),
      r = e[u];
    try {
      e[u] = void 0;
      var n = !0
    } catch (e) {}
    var o = i.call(e);
    return n && (t ? e[u] = r : delete e[u]), o
  }