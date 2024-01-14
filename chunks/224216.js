"use strict";

function l(e, t, n) {
  return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x)
}

function a(e, t, n, a) {
  return l(e, n, a) !== l(t, n, a) && l(e, t, n) !== l(e, t, a)
}

function s(e, t, n) {
  let l = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  return {
    x: t.x + (t.x - e.x) / l * n,
    y: t.y + (t.y - e.y) / l * n
  }
}

function i(e, t, n) {
  let l = {
      x: n.x,
      y: n.y
    },
    s = {
      x: n.x + n.width,
      y: n.y
    },
    i = {
      x: n.x,
      y: n.y + n.height
    },
    r = {
      x: n.x + n.width,
      y: n.y + n.height
    };
  return a(e, t, l, s) || a(e, t, s, r) || a(e, t, r, i) || a(e, t, i, l)
}
n.r(t), n.d(t, {
  extendLineSegment: function() {
    return s
  },
  doesLineSegmentIntersectRectangle: function() {
    return i
  }
})