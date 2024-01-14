"use strict";
n.r(t), n.d(t, {
  createEndDrag: function() {
    return a
  }
});
var r = n("900255"),
  o = n("897345");

function a(e) {
  return function() {
    var t = e.getMonitor(),
      n = e.getRegistry();
    (function(e) {
      (0, r.invariant)(e.isDragging(), "Cannot call endDrag while not dragging.")
    })(t);
    var a = t.getSourceId();
    return null != a && (n.getSource(a, !0).endDrag(t, a), n.unpinSource()), {
      type: o.END_DRAG
    }
  }
}