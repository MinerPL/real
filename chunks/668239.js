"use strict";
n.r(e), n.d(e, {
  hasActiveObservations: function() {
    return i
  }
});
var r = n("234643"),
  i = function() {
    return r.resizeObservers.some(function(t) {
      return t.activeTargets.length > 0
    })
  }