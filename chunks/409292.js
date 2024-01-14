"use strict";
n.r(t), n.d(t, {
  createDragDropManager: function() {
    return c
  }
});
var r = n("877385"),
  o = n("652483"),
  a = n("357155"),
  i = n("504729"),
  s = n("156799");

function c(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    l = function(e) {
      var t = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__;
      return (0, o.createStore)(a.reduce, e && t && t({
        name: "dnd-core",
        instanceId: "dnd-core"
      }))
    }(c),
    u = new i.DragDropMonitorImpl(l, new s.HandlerRegistryImpl(l)),
    d = new r.DragDropManagerImpl(l, u),
    p = e(d, t, n);
  return d.receiveBackend(p), d
}