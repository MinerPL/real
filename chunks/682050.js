"use strict";
n.r(t), n.d(t, {
  getNodeClientOffset: function() {
    return a
  },
  getEventClientOffset: function() {
    return i
  },
  getDragPreviewOffset: function() {
    return s
  }
});
var r = n("219999"),
  o = n("908834");

function a(e) {
  var t = 1 === e.nodeType ? e : e.parentElement;
  if (!t) return null;
  var n = t.getBoundingClientRect(),
    r = n.top;
  return {
    x: n.left,
    y: r
  }
}

function i(e) {
  return {
    x: e.clientX,
    y: e.clientY
  }
}

function s(e, t, n, i, s) {
  var c, l, u, d, p, f, m, h, g, v = "IMG" === (c = t).nodeName && ((0, r.isFirefox)() || !(null !== (l = document.documentElement) && void 0 !== l && l.contains(c))),
    y = a(v ? e : t),
    b = {
      x: n.x - y.x,
      y: n.y - y.y
    },
    x = e.offsetWidth,
    S = e.offsetHeight,
    w = i.anchorX,
    D = i.anchorY;
  var C = (u = v, d = t, p = x, f = S, m = u ? d.width : p, h = u ? d.height : f, (0, r.isSafari)() && u && (h /= window.devicePixelRatio, m /= window.devicePixelRatio), {
      dragPreviewWidth: m,
      dragPreviewHeight: h
    }),
    P = C.dragPreviewWidth,
    k = C.dragPreviewHeight,
    E = s.offsetX,
    T = s.offsetY;
  return {
    x: 0 === E || E ? E : new o.MonotonicInterpolant([0, .5, 1], [b.x, b.x / x * P, b.x + P - x]).interpolate(w),
    y: 0 === T || T ? T : (g = new o.MonotonicInterpolant([0, .5, 1], [b.y, b.y / S * k, b.y + k - S]).interpolate(D), (0, r.isSafari)() && v && (g += (window.devicePixelRatio - 1) * k), g)
  }
}