"use strict";
n.r(e), n.d(e, {
  rgb: function() {
    return a
  },
  rgba: function() {
    return u
  },
  hsl: function() {
    return s
  },
  hsla: function() {
    return c
  },
  hex3: function() {
    return l
  },
  hex4: function() {
    return f
  },
  hex6: function() {
    return h
  },
  hex8: function() {
    return p
  }
});
var r = "[-+]?\\d*\\.?\\d+",
  i = r + "%";

function o() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)"
}
var a = RegExp("rgb" + o(r, r, r)),
  u = RegExp("rgba" + o(r, r, r, r)),
  s = RegExp("hsl" + o(r, i, i)),
  c = RegExp("hsla" + o(r, i, i, r)),
  l = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  f = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  h = /^#([0-9a-fA-F]{6})$/,
  p = /^#([0-9a-fA-F]{8})$/