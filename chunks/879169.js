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
      n = e.hsv,
      l = e.hex,
      c = (0, a.default)({
        default: {
          fields: {
            paddingTop: "5px",
            paddingBottom: "9px",
            width: "80px",
            position: "relative"
          },
          divider: {
            height: "5px"
          },
          RGBwrap: {
            position: "relative"
          },
          RGBinput: {
            marginLeft: "40%",
            width: "40%",
            height: "18px",
            border: "1px solid #888888",
            boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
            marginBottom: "5px",
            fontSize: "13px",
            paddingLeft: "3px",
            marginRight: "10px"
          },
          RGBlabel: {
            left: "0px",
            top: "0px",
            width: "34px",
            textTransform: "uppercase",
            fontSize: "13px",
            height: "18px",
            lineHeight: "22px",
            position: "absolute"
          },
          HEXwrap: {
            position: "relative"
          },
          HEXinput: {
            marginLeft: "20%",
            width: "80%",
            height: "18px",
            border: "1px solid #888888",
            boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
            marginBottom: "6px",
            fontSize: "13px",
            paddingLeft: "3px"
          },
          HEXlabel: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "14px",
            textTransform: "uppercase",
            fontSize: "13px",
            height: "18px",
            lineHeight: "22px"
          },
          fieldSymbols: {
            position: "absolute",
            top: "5px",
            right: "-7px",
            fontSize: "13px"
          },
          symbol: {
            height: "20px",
            lineHeight: "22px",
            paddingBottom: "7px"
          }
        }
      }),
      s = function(e, o) {
        e["#"] ? i.isValidHex(e["#"]) && t({
          hex: e["#"],
          source: "hex"
        }, o) : e.r || e.g || e.b ? t({
          r: e.r || r.r,
          g: e.g || r.g,
          b: e.b || r.b,
          source: "rgb"
        }, o) : (e.h || e.s || e.v) && t({
          h: e.h || n.h,
          s: e.s || n.s,
          v: e.v || n.v,
          source: "hsv"
        }, o)
      };
    return o.createElement("div", {
      style: c.fields
    }, o.createElement(u.EditableInput, {
      style: {
        wrap: c.RGBwrap,
        input: c.RGBinput,
        label: c.RGBlabel
      },
      label: "h",
      value: Math.round(n.h),
      onChange: s
    }), o.createElement(u.EditableInput, {
      style: {
        wrap: c.RGBwrap,
        input: c.RGBinput,
        label: c.RGBlabel
      },
      label: "s",
      value: Math.round(100 * n.s),
      onChange: s
    }), o.createElement(u.EditableInput, {
      style: {
        wrap: c.RGBwrap,
        input: c.RGBinput,
        label: c.RGBlabel
      },
      label: "v",
      value: Math.round(100 * n.v),
      onChange: s
    }), o.createElement("div", {
      style: c.divider
    }), o.createElement(u.EditableInput, {
      style: {
        wrap: c.RGBwrap,
        input: c.RGBinput,
        label: c.RGBlabel
      },
      label: "r",
      value: r.r,
      onChange: s
    }), o.createElement(u.EditableInput, {
      style: {
        wrap: c.RGBwrap,
        input: c.RGBinput,
        label: c.RGBlabel
      },
      label: "g",
      value: r.g,
      onChange: s
    }), o.createElement(u.EditableInput, {
      style: {
        wrap: c.RGBwrap,
        input: c.RGBinput,
        label: c.RGBlabel
      },
      label: "b",
      value: r.b,
      onChange: s
    }), o.createElement("div", {
      style: c.divider
    }), o.createElement(u.EditableInput, {
      style: {
        wrap: c.HEXwrap,
        input: c.HEXinput,
        label: c.HEXlabel
      },
      label: "#",
      value: l.replace("#", ""),
      onChange: s
    }), o.createElement("div", {
      style: c.fieldSymbols
    }, o.createElement("div", {
      style: c.symbol
    }, "\xb0"), o.createElement("div", {
      style: c.symbol
    }, "%"), o.createElement("div", {
      style: c.symbol
    }, "%")))
  }