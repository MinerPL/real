"use strict";
r.r(t);
var n = r("884691"),
  o = r.n(n),
  a = r("849122"),
  i = r("123090"),
  u = r("78914"),
  l = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  c = function(e) {
    var t = e.rgb,
      r = e.hsl,
      n = e.width,
      u = e.height,
      c = e.onChange,
      s = e.direction,
      f = e.style,
      d = e.renderers,
      p = e.pointer,
      h = e.className,
      b = (0, a.default)({
        default: {
          picker: {
            position: "relative",
            width: n,
            height: u
          },
          alpha: {
            radius: "2px",
            style: f
          }
        }
      });
    return o.createElement("div", {
      style: b.picker,
      className: "alpha-picker " + (void 0 === h ? "" : h)
    }, o.createElement(i.Alpha, l({}, b.alpha, {
      rgb: t,
      hsl: r,
      pointer: p,
      renderers: d,
      onChange: c,
      direction: s
    })))
  };
c.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: u.default
}, (0, i.ColorWrap)(c)