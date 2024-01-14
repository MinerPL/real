"use strict";
n.r(e), n.d(e, {
  createStringInterpolator: function() {
    return p
  }
}), n("781738"), n("70102");
var r, i = n("247472"),
  o = n("589002"),
  a = n("12876"),
  u = n("333526"),
  s = n("397968"),
  c = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  l = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  f = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  h = function(t, e, n, r, i) {
    return "rgba(" + Math.round(e) + ", " + Math.round(n) + ", " + Math.round(r) + ", " + i + ")"
  },
  p = function(t) {
    !r && (r = s.colorNames ? RegExp("(" + Object.keys(s.colorNames).join("|") + ")", "g") : /^\b$/);
    var e = t.output.map(function(t) {
        return (0, o.getFluidValue)(t).replace(l, u.colorToRgba).replace(r, u.colorToRgba)
      }),
      n = e.map(function(t) {
        return t.match(c).map(Number)
      }),
      p = n[0].map(function(t, e) {
        return n.map(function(t) {
          if (!(e in t)) throw Error('The arity of each "output" value must be equal');
          return t[e]
        })
      }).map(function(e) {
        return (0, a.createInterpolator)((0, i.__assign)((0, i.__assign)({}, t), {
          output: e
        }))
      });
    return function(t) {
      var n = 0;
      return e[0].replace(c, function() {
        return String(p[n++](t))
      }).replace(f, h)
    }
  }