"use strict";
n.r(t), n.d(t, {
  createPublishDragSource: function() {
    return o
  }
});
var r = n("897345");

function o(e) {
  return function() {
    if (e.getMonitor().isDragging()) return {
      type: r.PUBLISH_DRAG_SOURCE
    }
  }
}