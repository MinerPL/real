"use strict";
n.r(t), n.d(t, {
  useConnectDragSource: function() {
    return o
  },
  useConnectDragPreview: function() {
    return a
  }
});
var r = n("884691");

function o(e) {
  return (0, r.useMemo)(function() {
    return e.hooks.dragSource()
  }, [e])
}

function a(e) {
  return (0, r.useMemo)(function() {
    return e.hooks.dragPreview()
  }, [e])
}