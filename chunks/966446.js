"use strict";
r.r(t), r.d(t, {
  default: function() {
    return l
  }
});
var n = r("884691"),
  o = r.n(n),
  a = r("849122"),
  i = r("123090"),
  u = function(e) {
    var t = e.color,
      r = e.onClick,
      n = e.onSwatchHover,
      u = e.hover,
      l = e.active,
      c = e.circleSize,
      s = e.circleSpacing,
      f = (0, a.default)({
        default: {
          swatch: {
            width: c,
            height: c,
            marginRight: s,
            marginBottom: s,
            transform: "scale(1)",
            transition: "100ms transform ease"
          },
          Swatch: {
            borderRadius: "50%",
            background: "transparent",
            boxShadow: "inset 0 0 0 " + (c / 2 + 1) + "px " + t,
            transition: "100ms box-shadow ease"
          }
        },
        hover: {
          swatch: {
            transform: "scale(1.2)"
          }
        },
        active: {
          Swatch: {
            boxShadow: "inset 0 0 0 3px " + t
          }
        }
      }, {
        hover: u,
        active: l
      });
    return o.createElement("div", {
      style: f.swatch
    }, o.createElement(i.Swatch, {
      style: f.Swatch,
      color: t,
      onClick: r,
      onHover: n,
      focusStyle: {
        boxShadow: f.Swatch.boxShadow + ", 0 0 5px " + t
      }
    }))
  };
u.defaultProps = {
  circleSize: 28,
  circleSpacing: 14
};
var l = (0, a.handleHover)(u)