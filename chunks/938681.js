"use strict";
r.r(t), r.d(t, {
  calculateChange: function() {
    return n
  }
});
var n = function(e, t, r, n) {
  var o = n.clientWidth,
    a = n.clientHeight,
    i = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
    u = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
    l = i - (n.getBoundingClientRect().left + window.pageXOffset),
    c = u - (n.getBoundingClientRect().top + window.pageYOffset);
  if ("vertical" === t) {
    var s = void 0;
    if (s = c < 0 ? 359 : c > a ? 0 : 360 * (-(100 * c / a) + 100) / 100, r.h !== s) return {
      h: s,
      s: r.s,
      l: r.l,
      a: r.a,
      source: "hsl"
    }
  } else {
    var f = void 0;
    if (f = l < 0 ? 0 : l > o ? 359 : 360 * (100 * l / o) / 100, r.h !== f) return {
      h: f,
      s: r.s,
      l: r.l,
      a: r.a,
      source: "hsl"
    }
  }
  return null
}