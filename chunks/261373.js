"use strict";
r.r(t), r.d(t, {
  default: function() {
    return c
  }
}), r("781738");
var n = r("151261"),
  i = n.hasCSSTOMSupport && CSS ? CSS.px : "px",
  o = n.hasCSSTOMSupport && CSS ? CSS.ms : "ms",
  s = n.hasCSSTOMSupport && CSS ? CSS.percent : "%";

function a(e) {
  var t = /(-[a-z])/g,
    r = function(e) {
      return e[1].toUpperCase()
    },
    n = {};
  for (var i in e) n[i] = e[i], n[i.replace(t, r)] = e[i];
  return n
}
var u = a({
  "animation-delay": o,
  "animation-duration": o,
  "background-position": i,
  "background-position-x": i,
  "background-position-y": i,
  "background-size": i,
  border: i,
  "border-bottom": i,
  "border-bottom-left-radius": i,
  "border-bottom-right-radius": i,
  "border-bottom-width": i,
  "border-left": i,
  "border-left-width": i,
  "border-radius": i,
  "border-right": i,
  "border-right-width": i,
  "border-top": i,
  "border-top-left-radius": i,
  "border-top-right-radius": i,
  "border-top-width": i,
  "border-width": i,
  "border-block": i,
  "border-block-end": i,
  "border-block-end-width": i,
  "border-block-start": i,
  "border-block-start-width": i,
  "border-block-width": i,
  "border-inline": i,
  "border-inline-end": i,
  "border-inline-end-width": i,
  "border-inline-start": i,
  "border-inline-start-width": i,
  "border-inline-width": i,
  "border-start-start-radius": i,
  "border-start-end-radius": i,
  "border-end-start-radius": i,
  "border-end-end-radius": i,
  margin: i,
  "margin-bottom": i,
  "margin-left": i,
  "margin-right": i,
  "margin-top": i,
  "margin-block": i,
  "margin-block-end": i,
  "margin-block-start": i,
  "margin-inline": i,
  "margin-inline-end": i,
  "margin-inline-start": i,
  padding: i,
  "padding-bottom": i,
  "padding-left": i,
  "padding-right": i,
  "padding-top": i,
  "padding-block": i,
  "padding-block-end": i,
  "padding-block-start": i,
  "padding-inline": i,
  "padding-inline-end": i,
  "padding-inline-start": i,
  "mask-position-x": i,
  "mask-position-y": i,
  "mask-size": i,
  height: i,
  width: i,
  "min-height": i,
  "max-height": i,
  "min-width": i,
  "max-width": i,
  bottom: i,
  left: i,
  top: i,
  right: i,
  inset: i,
  "inset-block": i,
  "inset-block-end": i,
  "inset-block-start": i,
  "inset-inline": i,
  "inset-inline-end": i,
  "inset-inline-start": i,
  "box-shadow": i,
  "text-shadow": i,
  "column-gap": i,
  "column-rule": i,
  "column-rule-width": i,
  "column-width": i,
  "font-size": i,
  "font-size-delta": i,
  "letter-spacing": i,
  "text-decoration-thickness": i,
  "text-indent": i,
  "text-stroke": i,
  "text-stroke-width": i,
  "word-spacing": i,
  motion: i,
  "motion-offset": i,
  outline: i,
  "outline-offset": i,
  "outline-width": i,
  perspective: i,
  "perspective-origin-x": s,
  "perspective-origin-y": s,
  "transform-origin": s,
  "transform-origin-x": s,
  "transform-origin-y": s,
  "transform-origin-z": s,
  "transition-delay": o,
  "transition-duration": o,
  "vertical-align": i,
  "flex-basis": i,
  "shape-margin": i,
  size: i,
  gap: i,
  grid: i,
  "grid-gap": i,
  "row-gap": i,
  "grid-row-gap": i,
  "grid-column-gap": i,
  "grid-template-rows": i,
  "grid-template-columns": i,
  "grid-auto-rows": i,
  "grid-auto-columns": i,
  "box-shadow-x": i,
  "box-shadow-y": i,
  "box-shadow-blur": i,
  "box-shadow-spread": i,
  "font-line-height": i,
  "text-shadow-x": i,
  "text-shadow-y": i,
  "text-shadow-blur": i
});

function l(e, t, r) {
  if (null == t) return t;
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++) t[n] = l(e, t[n], r);
  else if ("object" == typeof t) {
    if ("fallbacks" === e)
      for (var o in t) t[o] = l(o, t[o], r);
    else
      for (var s in t) t[s] = l(e + "-" + s, t[s], r)
  } else if ("number" == typeof t && !1 === isNaN(t)) {
    var a = r[e] || u[e];
    return a && !(0 === t && a === i) ? "function" == typeof a ? a(t).toString() : "" + t + a : t.toString()
  }
  return t
}
var c = function(e) {
  void 0 === e && (e = {});
  var t = a(e);
  return {
    onProcessStyle: function(e, r) {
      if ("style" !== r.type) return e;
      for (var n in e) e[n] = l(n, e[n], t);
      return e
    },
    onChangeValue: function(e, r) {
      return l(r, e, t)
    }
  }
}