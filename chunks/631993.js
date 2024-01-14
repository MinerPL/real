"use strict";
n.r(t), n.d(t, {
  useDrop: function() {
    return l
  }
});
var r = n("587134"),
  o = n("768140"),
  a = n("587663"),
  i = n("669044"),
  s = n("189632"),
  c = n("961560");

function l(e, t) {
  var n = (0, o.useOptionalFactory)(e, t),
    l = (0, a.useDropTargetMonitor)(),
    u = (0, i.useDropTargetConnector)(n.options);
  return (0, r.useRegisteredDropTarget)(n, l, u), [(0, s.useCollectedProps)(n.collect, l, u), (0, c.useConnectDropTarget)(u)]
}