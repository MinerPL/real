"use strict";
r.r(t), r.d(t, {
  calculateChange: function() {
    return n
  }
});
var n = function(e, t, r) {
  var n = r.getBoundingClientRect(),
    o = n.width,
    a = n.height,
    i = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
    u = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
    l = i - (r.getBoundingClientRect().left + window.pageXOffset),
    c = u - (r.getBoundingClientRect().top + window.pageYOffset);
  l < 0 ? l = 0 : l > o && (l = o), c < 0 ? c = 0 : c > a && (c = a);
  var s = l / o,
    f = 1 - c / a;
  return {
    h: t.h,
    s: s,
    v: f,
    a: t.a,
    source: "hsv"
  }
}