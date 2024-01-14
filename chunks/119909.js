"use strict";
r.r(t), r.d(t, {
  default: function() {
    return l
  }
}), r("781738");
var n = r("884691"),
  o = r.n(n),
  a = r("849122"),
  i = r("281859"),
  u = r("123090"),
  l = function(e) {
    var t = e.onChange,
      r = e.rgb,
      n = e.hsl,
      l = e.hex,
      c = e.hsv,
      s = function(e, r) {
        if (e.hex) i.isValidHex(e.hex) && t({
          hex: e.hex,
          source: "hex"
        }, r);
        else if (e.rgb) {
          var n = e.rgb.split(",");
          i.isvalidColorString(e.rgb, "rgb") && t({
            r: n[0],
            g: n[1],
            b: n[2],
            a: 1,
            source: "rgb"
          }, r)
        } else if (e.hsv) {
          var o = e.hsv.split(",");
          i.isvalidColorString(e.hsv, "hsv") && (o[2] = o[2].replace("%", ""), o[1] = o[1].replace("%", ""), o[0] = o[0].replace("\xb0", ""), 1 == o[1] ? o[1] = .01 : 1 == o[2] && (o[2] = .01), t({
            h: Number(o[0]),
            s: Number(o[1]),
            v: Number(o[2]),
            source: "hsv"
          }, r))
        } else if (e.hsl) {
          var a = e.hsl.split(",");
          i.isvalidColorString(e.hsl, "hsl") && (a[2] = a[2].replace("%", ""), a[1] = a[1].replace("%", ""), a[0] = a[0].replace("\xb0", ""), 1 == h[1] ? h[1] = .01 : 1 == h[2] && (h[2] = .01), t({
            h: Number(a[0]),
            s: Number(a[1]),
            v: Number(a[2]),
            source: "hsl"
          }, r))
        }
      },
      f = (0, a.default)({
        default: {
          wrap: {
            display: "flex",
            height: "100px",
            marginTop: "4px"
          },
          fields: {
            width: "100%"
          },
          column: {
            paddingTop: "10px",
            display: "flex",
            justifyContent: "space-between"
          },
          double: {
            padding: "0px 4.4px",
            boxSizing: "border-box"
          },
          input: {
            width: "100%",
            height: "38px",
            boxSizing: "border-box",
            padding: "4px 10% 3px",
            textAlign: "center",
            border: "1px solid #dadce0",
            fontSize: "11px",
            textTransform: "lowercase",
            borderRadius: "5px",
            outline: "none",
            fontFamily: "Roboto,Arial,sans-serif"
          },
          input2: {
            height: "38px",
            width: "100%",
            border: "1px solid #dadce0",
            boxSizing: "border-box",
            fontSize: "11px",
            textTransform: "lowercase",
            borderRadius: "5px",
            outline: "none",
            paddingLeft: "10px",
            fontFamily: "Roboto,Arial,sans-serif"
          },
          label: {
            textAlign: "center",
            fontSize: "12px",
            background: "#fff",
            position: "absolute",
            textTransform: "uppercase",
            color: "#3c4043",
            width: "35px",
            top: "-6px",
            left: "0",
            right: "0",
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily: "Roboto,Arial,sans-serif"
          },
          label2: {
            left: "10px",
            textAlign: "center",
            fontSize: "12px",
            background: "#fff",
            position: "absolute",
            textTransform: "uppercase",
            color: "#3c4043",
            width: "32px",
            top: "-6px",
            fontFamily: "Roboto,Arial,sans-serif"
          },
          single: {
            flexGrow: "1",
            margin: "0px 4.4px"
          }
        }
      }),
      d = r.r + ", " + r.g + ", " + r.b,
      p = Math.round(n.h) + "\xb0, " + Math.round(100 * n.s) + "%, " + Math.round(100 * n.l) + "%",
      h = Math.round(c.h) + "\xb0, " + Math.round(100 * c.s) + "%, " + Math.round(100 * c.v) + "%";
    return o.createElement("div", {
      style: f.wrap,
      className: "flexbox-fix"
    }, o.createElement("div", {
      style: f.fields
    }, o.createElement("div", {
      style: f.double
    }, o.createElement(u.EditableInput, {
      style: {
        input: f.input,
        label: f.label
      },
      label: "hex",
      value: l,
      onChange: s
    })), o.createElement("div", {
      style: f.column
    }, o.createElement("div", {
      style: f.single
    }, o.createElement(u.EditableInput, {
      style: {
        input: f.input2,
        label: f.label2
      },
      label: "rgb",
      value: d,
      onChange: s
    })), o.createElement("div", {
      style: f.single
    }, o.createElement(u.EditableInput, {
      style: {
        input: f.input2,
        label: f.label2
      },
      label: "hsv",
      value: h,
      onChange: s
    })), o.createElement("div", {
      style: f.single
    }, o.createElement(u.EditableInput, {
      style: {
        input: f.input2,
        label: f.label2
      },
      label: "hsl",
      value: p,
      onChange: s
    })))))
  }