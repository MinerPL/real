"use strict";
n.r(t), n.d(t, {
  useDragSource: function() {
    return a
  }
});
var r = n("884691"),
  o = n("184087");

function a(e, t, n) {
  var a = (0, r.useMemo)(function() {
    return new o.DragSourceImpl(e, t, n)
  }, [t, n]);
  return (0, r.useEffect)(function() {
    a.spec = e
  }, [e]), a
}