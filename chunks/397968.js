"use strict";
n.r(e), n.d(e, {
  createStringInterpolator: function() {
    return r
  },
  frameLoop: function() {
    return u
  },
  to: function() {
    return i
  },
  now: function() {
    return s
  },
  colorNames: function() {
    return c
  },
  skipAnimation: function() {
    return l
  },
  requestAnimationFrame: function() {
    return f
  },
  batchedUpdates: function() {
    return h
  },
  willAdvance: function() {
    return p
  },
  assign: function() {
    return d
  }
});
var r, i, o = n("65546"),
  a = n("73392"),
  u = new o.FrameLoop,
  s = function() {
    return performance.now()
  },
  c = null,
  l = !1,
  f = "undefined" != typeof window ? window.requestAnimationFrame : function() {
    return -1
  },
  h = function(t) {
    return t()
  },
  p = a.noop,
  d = function(t) {
    var e;
    return i = (e = Object.assign({
      to: i,
      now: s,
      frameLoop: u,
      colorNames: c,
      skipAnimation: l,
      createStringInterpolator: r,
      requestAnimationFrame: f,
      batchedUpdates: h,
      willAdvance: p
    }, function(t) {
      var e = {};
      for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
      return e
    }(t))).to, s = e.now, u = e.frameLoop, c = e.colorNames, l = e.skipAnimation, r = e.createStringInterpolator, f = e.requestAnimationFrame, h = e.batchedUpdates, p = e.willAdvance, e
  }