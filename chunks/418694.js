"use strict";
n.r(e), n.d(e, {
  calculateDepthForNode: function() {
    return i
  }
});
var r = n("320810"),
  i = function(t) {
    if ((0, r.isHidden)(t)) return 1 / 0;
    for (var e = 0, n = t.parentNode; n;) e += 1, n = n.parentNode;
    return e
  }