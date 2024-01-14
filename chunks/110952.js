"use strict";
n.r(t), n.d(t, {
  getSourceClientOffset: function() {
    return o
  },
  getDifferenceFromInitialOffset: function() {
    return a
  }
});

function r(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  }
}

function o(e) {
  var t, n, o = e.clientOffset,
    a = e.initialClientOffset,
    i = e.initialSourceClientOffset;
  if (!o || !a || !i) return null;
  return r((t = o, n = i, {
    x: t.x + n.x,
    y: t.y + n.y
  }), a)
}

function a(e) {
  var t = e.clientOffset,
    n = e.initialClientOffset;
  return t && n ? r(t, n) : null
}