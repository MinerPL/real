"use strict";
r.r(t), r.d(t, {
  default: function() {
    return a
  }
});
var n = r("441609"),
  o = r("944644"),
  a = function(e, t, r, a) {
    var i = !r;
    r || (r = {});
    for (var u = -1, l = t.length; ++u < l;) {
      var c = t[u],
        s = a ? a(r[c], e[c], c, r, e) : void 0;
      void 0 === s && (s = e[c]), i ? (0, o.default)(r, c, s) : (0, n.default)(r, c, s)
    }
    return r
  }