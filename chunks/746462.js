"use strict";
r.r(t), r.d(t, {
  calculateChange: function() {
    return n
  }
});
var n = function(e, t, r, n, o) {
  var a = o.clientWidth,
    i = o.clientHeight,
    u = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
    l = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
    c = u - (o.getBoundingClientRect().left + window.pageXOffset),
    s = l - (o.getBoundingClientRect().top + window.pageYOffset);
  if ("vertical" === r) {
    var f = void 0;
    if (f = s < 0 ? 0 : s > i ? 1 : Math.round(100 * s / i) / 100, t.a !== f) return {
      h: t.h,
      s: t.s,
      l: t.l,
      a: f,
      source: "rgb"
    }
  } else {
    var d = void 0;
    if (n !== (d = c < 0 ? 0 : c > a ? 1 : Math.round(100 * c / a) / 100)) return {
      h: t.h,
      s: t.s,
      l: t.l,
      a: d,
      source: "rgb"
    }
  }
  return null
}