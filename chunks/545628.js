"use strict";
r.r(t), r("781738");
var n = r("884691"),
  o = r.n(n),
  a = r("416037"),
  i = r.n(a),
  u = r("849122"),
  l = r("480583"),
  c = r("882982"),
  s = r("281859"),
  f = r("123090"),
  d = function(e) {
    var t = e.onChange,
      r = e.onSwatchHover,
      n = e.hex,
      a = e.colors,
      i = e.width,
      d = e.triangle,
      p = e.styles,
      h = e.className,
      b = (0, u.default)((0, c.default)({
        default: {
          card: {
            width: i,
            background: "#fff",
            border: "0 solid rgba(0,0,0,0.25)",
            boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
            borderRadius: "4px",
            position: "relative"
          },
          body: {
            padding: "15px 9px 9px 15px"
          },
          label: {
            fontSize: "18px",
            color: "#fff"
          },
          triangle: {
            width: "0px",
            height: "0px",
            borderStyle: "solid",
            borderWidth: "0 9px 10px 9px",
            borderColor: "transparent transparent #fff transparent",
            position: "absolute"
          },
          triangleShadow: {
            width: "0px",
            height: "0px",
            borderStyle: "solid",
            borderWidth: "0 9px 10px 9px",
            borderColor: "transparent transparent rgba(0,0,0,.1) transparent",
            position: "absolute"
          },
          hash: {
            background: "#F0F0F0",
            height: "30px",
            width: "30px",
            borderRadius: "4px 0 0 4px",
            float: "left",
            color: "#98A1A4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          input: {
            width: "100px",
            fontSize: "14px",
            color: "#666",
            border: "0px",
            outline: "none",
            height: "28px",
            boxShadow: "inset 0 0 0 1px #F0F0F0",
            boxSizing: "content-box",
            borderRadius: "0 4px 4px 0",
            float: "left",
            paddingLeft: "8px"
          },
          swatch: {
            width: "30px",
            height: "30px",
            float: "left",
            borderRadius: "4px",
            margin: "0 6px 6px 0"
          },
          clear: {
            clear: "both"
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
            top: "-10px",
            left: "12px"
          },
          triangleShadow: {
            top: "-11px",
            left: "12px"
          }
        },
        "top-right-triangle": {
          triangle: {
            top: "-10px",
            right: "12px"
          },
          triangleShadow: {
            top: "-11px",
            right: "12px"
          }
        }
      }, void 0 === p ? {} : p), {
        "hide-triangle": "hide" === d,
        "top-left-triangle": "top-left" === d,
        "top-right-triangle": "top-right" === d
      }),
      v = function(e, r) {
        s.isValidHex(e) && t({
          hex: e,
          source: "hex"
        }, r)
      };
    return o.createElement("div", {
      style: b.card,
      className: "twitter-picker " + (void 0 === h ? "" : h)
    }, o.createElement("div", {
      style: b.triangleShadow
    }), o.createElement("div", {
      style: b.triangle
    }), o.createElement("div", {
      style: b.body
    }, (0, l.default)(a, function(e, t) {
      return o.createElement(f.Swatch, {
        key: t,
        color: e,
        hex: e,
        style: b.swatch,
        onClick: v,
        onHover: r,
        focusStyle: {
          boxShadow: "0 0 4px " + e
        }
      })
    }), o.createElement("div", {
      style: b.hash
    }, "#"), o.createElement(f.EditableInput, {
      label: null,
      style: {
        input: b.input
      },
      value: n.replace("#", ""),
      onChange: v
    }), o.createElement("div", {
      style: b.clear
    })))
  };
d.propTypes = {
  width: i.oneOfType([i.string, i.number]),
  triangle: i.oneOf(["hide", "top-left", "top-right"]),
  colors: i.arrayOf(i.string),
  styles: i.object
}, d.defaultProps = {
  width: 276,
  colors: ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"],
  triangle: "top-left",
  styles: {}
}, (0, f.ColorWrap)(d)