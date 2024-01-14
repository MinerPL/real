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
  d = r("966446"),
  p = function(e) {
    var t = e.width,
      r = e.onChange,
      n = e.onSwatchHover,
      a = e.colors,
      i = e.hex,
      s = e.circleSize,
      f = e.styles,
      p = e.circleSpacing,
      h = e.className,
      b = (0, u.default)((0, c.default)({
        default: {
          card: {
            width: t,
            display: "flex",
            flexWrap: "wrap",
            marginRight: -p,
            marginBottom: -p
          }
        }
      }, void 0 === f ? {} : f)),
      v = function(e, t) {
        return r({
          hex: e,
          source: "hex"
        }, t)
      };
    return o.createElement("div", {
      style: b.card,
      className: "circle-picker " + (void 0 === h ? "" : h)
    }, (0, l.default)(a, function(e) {
      return o.createElement(d.default, {
        key: e,
        color: e,
        onClick: v,
        onSwatchHover: n,
        active: i === e.toLowerCase(),
        circleSize: s,
        circleSpacing: p
      })
    }))
  };
p.propTypes = {
  width: i.oneOfType([i.string, i.number]),
  circleSize: i.number,
  circleSpacing: i.number,
  styles: i.object
}, p.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [s.red["500"], s.pink["500"], s.purple["500"], s.deepPurple["500"], s.indigo["500"], s.blue["500"], s.lightBlue["500"], s.cyan["500"], s.teal["500"], s.green["500"], s.lightGreen["500"], s.lime["500"], s.yellow["500"], s.amber["500"], s.orange["500"], s.deepOrange["500"], s.brown["500"], s.blueGrey["500"]],
  styles: {}
}, (0, f.ColorWrap)(p)