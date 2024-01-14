"use strict";
r.r(t);
var n = r("884691"),
  o = r.n(n),
  a = r("416037"),
  i = r.n(a),
  u = r("849122"),
  l = r("480583"),
  c = r("882982"),
  s = r("145330"),
  f = r("123090"),
  d = r("226828"),
  p = function(e) {
    var t = e.width,
      r = e.height,
      n = e.onChange,
      a = e.onSwatchHover,
      i = e.colors,
      s = e.hex,
      p = e.styles,
      h = e.className,
      b = (0, u.default)((0, c.default)({
        default: {
          picker: {
            width: t,
            height: r
          },
          overflow: {
            height: r,
            overflowY: "scroll"
          },
          body: {
            padding: "16px 0 6px 16px"
          },
          clear: {
            clear: "both"
          }
        }
      }, void 0 === p ? {} : p)),
      v = function(e, t) {
        return n({
          hex: e,
          source: "hex"
        }, t)
      };
    return o.createElement("div", {
      style: b.picker,
      className: "swatches-picker " + (void 0 === h ? "" : h)
    }, o.createElement(f.Raised, null, o.createElement("div", {
      style: b.overflow
    }, o.createElement("div", {
      style: b.body
    }, (0, l.default)(i, function(e) {
      return o.createElement(d.default, {
        key: e.toString(),
        group: e,
        active: s,
        onClick: v,
        onSwatchHover: a
      })
    }), o.createElement("div", {
      style: b.clear
    })))))
  };
p.propTypes = {
  width: i.oneOfType([i.string, i.number]),
  height: i.oneOfType([i.string, i.number]),
  colors: i.arrayOf(i.arrayOf(i.string)),
  styles: i.object
}, p.defaultProps = {
  width: 320,
  height: 240,
  colors: [
    [s.red["900"], s.red["700"], s.red["500"], s.red["300"], s.red["100"]],
    [s.pink["900"], s.pink["700"], s.pink["500"], s.pink["300"], s.pink["100"]],
    [s.purple["900"], s.purple["700"], s.purple["500"], s.purple["300"], s.purple["100"]],
    [s.deepPurple["900"], s.deepPurple["700"], s.deepPurple["500"], s.deepPurple["300"], s.deepPurple["100"]],
    [s.indigo["900"], s.indigo["700"], s.indigo["500"], s.indigo["300"], s.indigo["100"]],
    [s.blue["900"], s.blue["700"], s.blue["500"], s.blue["300"], s.blue["100"]],
    [s.lightBlue["900"], s.lightBlue["700"], s.lightBlue["500"], s.lightBlue["300"], s.lightBlue["100"]],
    [s.cyan["900"], s.cyan["700"], s.cyan["500"], s.cyan["300"], s.cyan["100"]],
    [s.teal["900"], s.teal["700"], s.teal["500"], s.teal["300"], s.teal["100"]],
    ["#194D33", s.green["700"], s.green["500"], s.green["300"], s.green["100"]],
    [s.lightGreen["900"], s.lightGreen["700"], s.lightGreen["500"], s.lightGreen["300"], s.lightGreen["100"]],
    [s.lime["900"], s.lime["700"], s.lime["500"], s.lime["300"], s.lime["100"]],
    [s.yellow["900"], s.yellow["700"], s.yellow["500"], s.yellow["300"], s.yellow["100"]],
    [s.amber["900"], s.amber["700"], s.amber["500"], s.amber["300"], s.amber["100"]],
    [s.orange["900"], s.orange["700"], s.orange["500"], s.orange["300"], s.orange["100"]],
    [s.deepOrange["900"], s.deepOrange["700"], s.deepOrange["500"], s.deepOrange["300"], s.deepOrange["100"]],
    [s.brown["900"], s.brown["700"], s.brown["500"], s.brown["300"], s.brown["100"]],
    [s.blueGrey["900"], s.blueGrey["700"], s.blueGrey["500"], s.blueGrey["300"], s.blueGrey["100"]],
    ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"]
  ],
  styles: {}
}, (0, f.ColorWrap)(p)