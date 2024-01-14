"use strict";
n.r(e), n.d(e, {
  calculateBoxSize: function() {
    return v
  },
  calculateBoxSizes: function() {
    return d
  },
  cache: function() {
    return u
  }
}), n("222007");
var r = n("357663"),
  i = n("50323"),
  o = n("320810"),
  a = n("741921"),
  u = new Map,
  s = /auto|scroll/,
  c = /^tb|vertical/,
  l = /msie|trident/i.test(a.global.navigator && a.global.navigator.userAgent),
  f = function(t) {
    return parseFloat(t || "0")
  },
  h = function(t, e, n) {
    return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = !1), Object.freeze({
      inlineSize: (n ? e : t) || 0,
      blockSize: (n ? t : e) || 0
    })
  },
  p = Object.freeze({
    devicePixelContentBoxSize: h(),
    borderBoxSize: h(),
    contentBoxSize: h(),
    contentRect: new i.DOMRectReadOnly(0, 0, 0, 0)
  }),
  d = function(t) {
    if (u.has(t)) return u.get(t);
    if ((0, o.isHidden)(t)) return u.set(t, p), p;
    var e = getComputedStyle(t),
      n = (0, o.isSVG)(t) && t.ownerSVGElement && t.getBBox(),
      r = !l && "border-box" === e.boxSizing,
      a = c.test(e.writingMode || ""),
      d = !n && s.test(e.overflowY || ""),
      v = !n && s.test(e.overflowX || ""),
      y = n ? 0 : f(e.paddingTop),
      m = n ? 0 : f(e.paddingRight),
      g = n ? 0 : f(e.paddingBottom),
      b = n ? 0 : f(e.paddingLeft),
      _ = n ? 0 : f(e.borderTopWidth),
      x = n ? 0 : f(e.borderRightWidth),
      w = n ? 0 : f(e.borderBottomWidth),
      O = n ? 0 : f(e.borderLeftWidth),
      k = b + m,
      S = y + g,
      E = O + x,
      P = _ + w,
      C = v ? t.offsetHeight - P - t.clientHeight : 0,
      A = d ? t.offsetWidth - E - t.clientWidth : 0,
      j = n ? n.width : f(e.width) - (r ? k + E : 0) - A,
      R = n ? n.height : f(e.height) - (r ? S + P : 0) - C,
      T = j + k + A + E,
      M = R + S + C + P,
      L = Object.freeze({
        devicePixelContentBoxSize: h(Math.round(j * devicePixelRatio), Math.round(R * devicePixelRatio), a),
        borderBoxSize: h(T, M, a),
        contentBoxSize: h(j, R, a),
        contentRect: new i.DOMRectReadOnly(b, y, j, R)
      });
    return u.set(t, L), L
  },
  v = function(t, e) {
    var n = d(t),
      i = n.borderBoxSize,
      o = n.contentBoxSize,
      a = n.devicePixelContentBoxSize;
    switch (e) {
      case r.ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
        return a;
      case r.ResizeObserverBoxOptions.BORDER_BOX:
        return i;
      default:
        return o
    }
  }