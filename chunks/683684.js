"use strict";
r.r(t);
var n = r("884691"),
  o = r.n(n),
  a = r("416037"),
  i = r.n(a),
  u = r("849122"),
  l = r("882982"),
  c = r("123090"),
  s = r("987152"),
  f = r("670485"),
  d = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  p = function(e) {
    var t = e.width,
      r = e.rgb,
      n = e.hex,
      a = e.hsv,
      i = e.hsl,
      p = e.onChange,
      h = e.onSwatchHover,
      b = e.disableAlpha,
      v = e.presetColors,
      g = e.renderers,
      x = e.styles,
      y = void 0 === x ? {} : x,
      m = e.className,
      w = (0, u.default)((0, l.default)({
        default: d({
          picker: {
            width: t,
            padding: "10px 10px 0",
            boxSizing: "initial",
            background: "#fff",
            borderRadius: "4px",
            boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)"
          },
          saturation: {
            width: "100%",
            paddingBottom: "75%",
            position: "relative",
            overflow: "hidden"
          },
          Saturation: {
            radius: "3px",
            shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
          },
          controls: {
            display: "flex"
          },
          sliders: {
            padding: "4px 0",
            flex: "1"
          },
          color: {
            width: "24px",
            height: "24px",
            position: "relative",
            marginTop: "4px",
            marginLeft: "4px",
            borderRadius: "3px"
          },
          activeColor: {
            absolute: "0px 0px 0px 0px",
            borderRadius: "2px",
            background: "rgba(" + r.r + "," + r.g + "," + r.b + "," + r.a + ")",
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
          },
          hue: {
            position: "relative",
            height: "10px",
            overflow: "hidden"
          },
          Hue: {
            radius: "2px",
            shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
          },
          alpha: {
            position: "relative",
            height: "10px",
            marginTop: "4px",
            overflow: "hidden"
          },
          Alpha: {
            radius: "2px",
            shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
          }
        }, y),
        disableAlpha: {
          color: {
            height: "10px"
          },
          hue: {
            height: "10px"
          },
          alpha: {
            display: "none"
          }
        }
      }, y), {
        disableAlpha: b
      });
    return o.createElement("div", {
      style: w.picker,
      className: "sketch-picker " + (void 0 === m ? "" : m)
    }, o.createElement("div", {
      style: w.saturation
    }, o.createElement(c.Saturation, {
      style: w.Saturation,
      hsl: i,
      hsv: a,
      onChange: p
    })), o.createElement("div", {
      style: w.controls,
      className: "flexbox-fix"
    }, o.createElement("div", {
      style: w.sliders
    }, o.createElement("div", {
      style: w.hue
    }, o.createElement(c.Hue, {
      style: w.Hue,
      hsl: i,
      onChange: p
    })), o.createElement("div", {
      style: w.alpha
    }, o.createElement(c.Alpha, {
      style: w.Alpha,
      rgb: r,
      hsl: i,
      renderers: g,
      onChange: p
    }))), o.createElement("div", {
      style: w.color
    }, o.createElement(c.Checkboard, null), o.createElement("div", {
      style: w.activeColor
    }))), o.createElement(s.default, {
      rgb: r,
      hsl: i,
      hex: n,
      onChange: p,
      disableAlpha: b
    }), o.createElement(f.default, {
      colors: v,
      onClick: p,
      onSwatchHover: h
    }))
  };
p.propTypes = {
  disableAlpha: i.bool,
  width: i.oneOfType([i.string, i.number]),
  styles: i.object
}, p.defaultProps = {
  disableAlpha: !1,
  width: 200,
  styles: {},
  presetColors: ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF"]
}, (0, c.ColorWrap)(p)