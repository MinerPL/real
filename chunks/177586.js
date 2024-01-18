"use strict";
a.r(t), a.d(t, {
  default: function() {
    return p
  }
}), a("222007");
var l = a("656280"),
  s = a.n(l),
  r = a("65597"),
  n = a("669491"),
  i = a("206230"),
  o = a("388491");
let c = s(n.default.unsafe_rawColors.WHITE_500.resolve({
    saturation: 1
  }).hex()),
  u = s(n.default.unsafe_rawColors.BLACK_500.resolve({
    saturation: 1
  }).hex()),
  d = (e, t) => {
    let a = e.toRgb(),
      l = t.toRgb(),
      [r, n, i] = (0, o.getValueInColorGradientByPercentage)([a.r, a.g, a.b], [l.r, l.g, l.b], 50);
    return s({
      r,
      g: n,
      b: i
    })
  },
  f = e => {
    if (0 !== e.length) return 1 === e.length ? {
      primary: e[0],
      secondary: e[0],
      border: e[0].setAlpha(.4)
    } : {
      primary: e[0],
      secondary: e[1],
      border: d(e[0], e[1]).setAlpha(.4)
    }
  },
  m = e => {
    if (0 !== e.length) return 1 === e.length ? {
      primary: e[0],
      secondary: e[0],
      text: e[0].isLight() ? u : c
    } : {
      primary: e[0],
      secondary: e[1],
      text: d(e[0], e[1]).isLight() ? u : c
    }
  },
  C = (e, t) => {
    let {
      h: a,
      s: l,
      l: r
    } = e.toHsl();
    return s({
      h: a,
      s: l * t,
      l: r
    })
  };
var p = e => {
  let t = (0, r.default)([i.default], () => i.default.saturation);
  if (null == e) return {};
  let a = {
    backgroundColors: f(e.backgroundColors),
    buttonColors: m(e.buttonColors),
    confettiColors: e.confettiColors
  };
  return 1 === t ? a : {
    backgroundColors: null != a.backgroundColors ? {
      primary: C(a.backgroundColors.primary, t),
      secondary: C(a.backgroundColors.secondary, t),
      border: C(a.backgroundColors.border, t)
    } : void 0,
    buttonColors: null != a.buttonColors ? {
      primary: C(a.buttonColors.primary, t),
      secondary: C(a.buttonColors.secondary, t),
      text: C(a.buttonColors.text, t)
    } : void 0,
    confettiColors: a.confettiColors.map(e => C(e, t))
  }
}