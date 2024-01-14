"use strict";
n.r(t), n.d(t, {
  createHover: function() {
    return i
  }
});
var r = n("900255"),
  o = n("266087"),
  a = n("897345");

function i(e) {
  return function(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      i = n.clientOffset;
    (function(e) {
      (0, r.invariant)(Array.isArray(e), "Expected targetIds to be an array.")
    })(t);
    var s = t.slice(0),
      c = e.getMonitor(),
      l = e.getRegistry();
    return function(e, t, n) {
        (0, r.invariant)(t.isDragging(), "Cannot call hover while not dragging."), (0, r.invariant)(!t.didDrop(), "Cannot call hover after drop.");
        for (var o = 0; o < e.length; o++) {
          var a = e[o];
          (0, r.invariant)(e.lastIndexOf(a) === o, "Expected targetIds to be unique in the passed array.");
          var i = n.getTarget(a);
          (0, r.invariant)(i, "Expected targetIds to be registered.")
        }
      }(s, c, l),
      function(e, t, n) {
        for (var r = e.length - 1; r >= 0; r--) {
          var a = e[r],
            i = t.getTargetType(a);
          !(0, o.matchesType)(i, n) && e.splice(r, 1)
        }
      }(s, l, c.getItemType()),
      function(e, t, n) {
        e.forEach(function(e) {
          n.getTarget(e).hover(t, e)
        })
      }(s, c, l), {
        type: a.HOVER,
        payload: {
          targetIds: s,
          clientOffset: i || null
        }
      }
  }
}