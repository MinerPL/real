"use strict";
r.r(t);
var n = r("884691"),
  o = r.n(n),
  a = r("849122"),
  i = r("882982"),
  u = r("281859"),
  l = r("123090");
(0, l.ColorWrap)(function(e) {
  var t = e.onChange,
    r = e.hex,
    n = e.rgb,
    c = e.styles,
    s = void 0 === c ? {} : c,
    f = e.className,
    d = (0, a.default)((0, i.default)({
      default: {
        material: {
          width: "98px",
          height: "98px",
          padding: "16px",
          fontFamily: "Roboto"
        },
        HEXwrap: {
          position: "relative"
        },
        HEXinput: {
          width: "100%",
          marginTop: "12px",
          fontSize: "15px",
          color: "#333",
          padding: "0px",
          border: "0px",
          borderBottom: "2px solid " + r,
          outline: "none",
          height: "30px"
        },
        HEXlabel: {
          position: "absolute",
          top: "0px",
          left: "0px",
          fontSize: "11px",
          color: "#999999",
          textTransform: "capitalize"
        },
        Hex: {
          style: {}
        },
        RGBwrap: {
          position: "relative"
        },
        RGBinput: {
          width: "100%",
          marginTop: "12px",
          fontSize: "15px",
          color: "#333",
          padding: "0px",
          border: "0px",
          borderBottom: "1px solid #eee",
          outline: "none",
          height: "30px"
        },
        RGBlabel: {
          position: "absolute",
          top: "0px",
          left: "0px",
          fontSize: "11px",
          color: "#999999",
          textTransform: "capitalize"
        },
        split: {
          display: "flex",
          marginRight: "-10px",
          paddingTop: "11px"
        },
        third: {
          flex: "1",
          paddingRight: "10px"
        }
      }
    }, s)),
    p = function(e, r) {
      e.hex ? u.isValidHex(e.hex) && t({
        hex: e.hex,
        source: "hex"
      }, r) : (e.r || e.g || e.b) && t({
        r: e.r || n.r,
        g: e.g || n.g,
        b: e.b || n.b,
        source: "rgb"
      }, r)
    };
  return o.createElement(l.Raised, {
    styles: s
  }, o.createElement("div", {
    style: d.material,
    className: "material-picker " + (void 0 === f ? "" : f)
  }, o.createElement(l.EditableInput, {
    style: {
      wrap: d.HEXwrap,
      input: d.HEXinput,
      label: d.HEXlabel
    },
    label: "hex",
    value: r,
    onChange: p
  }), o.createElement("div", {
    style: d.split,
    className: "flexbox-fix"
  }, o.createElement("div", {
    style: d.third
  }, o.createElement(l.EditableInput, {
    style: {
      wrap: d.RGBwrap,
      input: d.RGBinput,
      label: d.RGBlabel
    },
    label: "r",
    value: n.r,
    onChange: p
  })), o.createElement("div", {
    style: d.third
  }, o.createElement(l.EditableInput, {
    style: {
      wrap: d.RGBwrap,
      input: d.RGBinput,
      label: d.RGBlabel
    },
    label: "g",
    value: n.g,
    onChange: p
  })), o.createElement("div", {
    style: d.third
  }, o.createElement(l.EditableInput, {
    style: {
      wrap: d.RGBwrap,
      input: d.RGBinput,
      label: d.RGBlabel
    },
    label: "b",
    value: n.b,
    onChange: p
  })))))
})