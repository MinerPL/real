"use strict";
i.r(t), i.d(t, {
  thumbHashToRGBA: function() {
    return s
  }
}), i("424973"), i("311790"), i("477657"), i("811875"), i("90301"), i("652153"), i("28797"), i("817884"), i("597349"), i("667536"), i("690341");
var n = i("723251");

function s(e) {
  let {
    detail: t = 1,
    pop: i = 1
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
    PI: s,
    min: a,
    max: l,
    cos: r,
    round: u
  } = Math, o = e[0] | e[1] << 8 | e[2] << 16, c = e[3] | e[4] << 8, d = (63 & o) / 63, f = (o >> 6 & 63) / 31.5 - 1, p = (o >> 12 & 63) / 31.5 - 1, m = o >> 23, I = c >> 15, T = l(3, I ? m ? 5 : 7 : 7 & c), g = l(3, I ? 7 & c : m ? 5 : 7), h = m ? (15 & e[5]) / 15 : 1, S = (e[5] >> 4) / 15, E = m ? 6 : 5, N = 0, _ = (t, i, n) => {
    let s = [];
    for (let a = 0; a < i; a++)
      for (let l = a ? 0 : 1; l * i < t * (i - a); l++) s.push(((e[E + (N >> 1)] >> ((1 & N++) << 2) & 15) / 7.5 - 1) * n);
    return s
  }, y = _(T, g, (o >> 18 & 31) / 31 / 2), b = _(3, 3, (c >> 3 & 63) / 63 * i), A = _(3, 3, (c >> 9 & 63) / 63 * i), R = m ? _(5, 5, S) : [], x = (0, n.thumbHashToApproximateAspectRatio)(e), M = u(x > 1 ? 32 : 32 * x), P = u(x > 1 ? 32 / x : 32), O = new Uint8Array(M * P * 4), L = [], v = [];
  for (let e = 0, i = 0; e < P; e++)
    for (let n = 0; n < M; n++, i += 4) {
      let u = d,
        o = f,
        c = p,
        I = h;
      for (let e = 0, t = l(T, m ? 5 : 3); e < t; e++) L[e] = r(s / M * (n + .5) * e);
      for (let t = 0, i = l(g, m ? 5 : 3); t < i; t++) v[t] = r(s / P * (e + .5) * t);
      for (let e = 0, i = 0; e < g; e++)
        for (let n = e ? 0 : 1, s = 2 * v[e]; n * g < T * (g - e); n++, i++) !(n > t) && !(e > t) && (u += y[i] * L[n] * s);
      for (let e = 0, t = 0; e < 3; e++)
        for (let i = e ? 0 : 1, n = 2 * v[e]; i < 3 - e; i++, t++) {
          let e = L[i] * n;
          o += b[t] * e, c += A[t] * e
        }
      if (m)
        for (let e = 0, t = 0; e < 5; e++)
          for (let i = e ? 0 : 1, n = 2 * v[e]; i < 5 - e; i++, t++) I += R[t] * L[i] * n;
      let S = u - 2 / 3 * o,
        E = (3 * u - S + c) / 2,
        N = E - c;
      O[i] = l(0, 255 * a(1, E)), O[i + 1] = l(0, 255 * a(1, N)), O[i + 2] = l(0, 255 * a(1, S)), O[i + 3] = l(0, 255 * a(1, I))
    }
  return {
    w: M,
    h: P,
    rgba: O
  }
}