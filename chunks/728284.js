"use strict";
r.r(t);
var n = r("884691"),
  o = r.n(n),
  a = r("416037"),
  i = r.n(a),
  u = r("849122"),
  l = r("882982"),
  c = r("123090"),
  s = r("81294"),
  f = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  d = function(e) {
    var t = e.width,
      r = e.height,
      n = e.onChange,
      a = e.hsl,
      i = e.direction,
      s = e.pointer,
      d = e.styles,
      p = e.className,
      h = (0, u.default)((0, l.default)({
        default: {
          picker: {
            position: "relative",
            width: t,
            height: r
          },
          hue: {
            radius: "2px"
          }
        }
      }, void 0 === d ? {} : d));
    return o.createElement("div", {
      style: h.picker,
      className: "hue-picker " + (void 0 === p ? "" : p)
    }, o.createElement(c.Hue, f({}, h.hue, {
      hsl: a,
      pointer: s,
      onChange: function(e) {
        return n({
          a: 1,
          h: e.h,
          l: .5,
          s: 1
        })
      },
      direction: i
    })))
  };
d.propTypes = {
  styles: i.object
}, d.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: s.default,
  styles: {}
}, (0, c.ColorWrap)(d)