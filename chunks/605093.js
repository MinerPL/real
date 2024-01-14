"use strict";
r.r(t);
var n = r("884691"),
  o = r.n(n),
  a = r("416037"),
  i = r.n(a),
  u = r("849122"),
  l = r("480583"),
  c = r("882982"),
  s = r("123090"),
  f = r("723123"),
  d = function(e) {
    var t = e.width,
      r = e.colors,
      n = e.onChange,
      a = e.onSwatchHover,
      i = e.triangle,
      s = e.styles,
      d = e.className,
      p = (0, u.default)((0, c.default)({
        default: {
          card: {
            width: t,
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.2)",
            boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
            borderRadius: "4px",
            position: "relative",
            padding: "5px",
            display: "flex",
            flexWrap: "wrap"
          },
          triangle: {
            position: "absolute",
            border: "7px solid transparent",
            borderBottomColor: "#fff"
          },
          triangleShadow: {
            position: "absolute",
            border: "8px solid transparent",
            borderBottomColor: "rgba(0,0,0,0.15)"
          }
        },
        "hide-triangle": {
          triangle: {
            display: "none"
          },
          triangleShadow: {
            display: "none"
          }
        },
        "top-left-triangle": {
          triangle: {
            top: "-14px",
            left: "10px"
          },
          triangleShadow: {
            top: "-16px",
            left: "9px"
          }
        },
        "top-right-triangle": {
          triangle: {
            top: "-14px",
            right: "10px"
          },
          triangleShadow: {
            top: "-16px",
            right: "9px"
          }
        },
        "bottom-left-triangle": {
          triangle: {
            top: "35px",
            left: "10px",
            transform: "rotate(180deg)"
          },
          triangleShadow: {
            top: "37px",
            left: "9px",
            transform: "rotate(180deg)"
          }
        },
        "bottom-right-triangle": {
          triangle: {
            top: "35px",
            right: "10px",
            transform: "rotate(180deg)"
          },
          triangleShadow: {
            top: "37px",
            right: "9px",
            transform: "rotate(180deg)"
          }
        }
      }, void 0 === s ? {} : s), {
        "hide-triangle": "hide" === i,
        "top-left-triangle": "top-left" === i,
        "top-right-triangle": "top-right" === i,
        "bottom-left-triangle": "bottom-left" === i,
        "bottom-right-triangle": "bottom-right" === i
      }),
      h = function(e, t) {
        return n({
          hex: e,
          source: "hex"
        }, t)
      };
    return o.createElement("div", {
      style: p.card,
      className: "github-picker " + (void 0 === d ? "" : d)
    }, o.createElement("div", {
      style: p.triangleShadow
    }), o.createElement("div", {
      style: p.triangle
    }), (0, l.default)(r, function(e) {
      return o.createElement(f.default, {
        color: e,
        key: e,
        onClick: h,
        onSwatchHover: a
      })
    }))
  };
d.propTypes = {
  width: i.oneOfType([i.string, i.number]),
  colors: i.arrayOf(i.string),
  triangle: i.oneOf(["hide", "top-left", "top-right", "bottom-left", "bottom-right"]),
  styles: i.object
}, d.defaultProps = {
  width: 200,
  colors: ["#B80000", "#DB3E00", "#FCCB00", "#008B02", "#006B76", "#1273DE", "#004DCF", "#5300EB", "#EB9694", "#FAD0C3", "#FEF3BD", "#C1E1C5", "#BEDADC", "#C4DEF6", "#BED3F3", "#D4C4FB"],
  triangle: "top-left",
  styles: {}
}, (0, s.ColorWrap)(d)