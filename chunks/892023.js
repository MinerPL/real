"use strict";
r.r(t), r.d(t, {
  default: function() {
    return c
  }
});
var n = r("884691"),
  o = r.n(n),
  a = r("849122"),
  i = r("937458"),
  u = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  l = function(e) {
    var t = e.white,
      r = e.grey,
      l = e.size,
      c = e.renderers,
      s = e.borderRadius,
      f = e.boxShadow,
      d = e.children,
      p = (0, a.default)({
        default: {
          grid: {
            borderRadius: s,
            boxShadow: f,
            absolute: "0px 0px 0px 0px",
            background: "url(" + i.get(t, r, l, c.canvas) + ") center left"
          }
        }
      });
    return (0, n.isValidElement)(d) ? o.cloneElement(d, u({}, d.props, {
      style: u({}, d.props.style, p.grid)
    })) : o.createElement("div", {
      style: p.grid
    })
  };
l.defaultProps = {
  size: 8,
  white: "transparent",
  grey: "rgba(0,0,0,.08)",
  renderers: {}
};
var c = l