"use strict";
n.r(e), n.d(e, {
  hasFluidValue: function() {
    return i
  },
  getFluidValue: function() {
    return o
  },
  getFluidConfig: function() {
    return a
  },
  setFluidConfig: function() {
    return u
  },
  addFluidObserver: function() {
    return s
  },
  FluidValue: function() {
    return c
  }
});
var r = Symbol.for("FluidValue:config"),
  i = function(t) {
    return !!a(t)
  };

function o(t) {
  var e = a(t);
  return e ? e.get() : t
}

function a(t) {
  if (t) return t[r]
}

function u(t, e) {
  Object.defineProperty(t, r, {
    value: e,
    configurable: !0
  })
}

function s(t, e) {
  var n = a(t);
  if (n) return n.addChild(e),
    function() {
      return n.removeChild(e)
    }
}
var c = function() {
  u(this, this)
}