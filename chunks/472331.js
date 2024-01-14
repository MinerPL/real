e = n.nmd(e), n("70102"), n("424973"), n("274635"), n("843762"), n("781738"), n("854508"), ! function(t) {
  "use strict";
  var n, r = {
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    },
    o = !0,
    a = "[DecimalError] ",
    i = a + "Invalid argument: ",
    s = a + "Exponent out of range: ",
    c = Math.floor,
    l = Math.pow,
    u = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    d = c(1286742750677284.5),
    p = {};

  function f(e, t) {
    var n, r, a, i, s, c, l, u, d = e.constructor,
      p = d.precision;
    if (!e.s || !t.s) return !t.s && (t = new d(e)), o ? D(t, p) : t;
    if (l = e.d, u = t.d, s = e.e, a = t.e, l = l.slice(), i = s - a) {
      for (i < 0 ? (r = l, i = -i, c = u.length) : (r = u, a = s, c = l.length), i > (c = (s = Math.ceil(p / 7)) > c ? s + 1 : c + 1) && (i = c, r.length = 1), r.reverse(); i--;) r.push(0);
      r.reverse()
    }
    for (c = l.length, c - (i = u.length) < 0 && (i = c, r = u, u = l, l = r), n = 0; i;) n = (l[--i] = l[i] + u[i] + n) / 1e7 | 0, l[i] %= 1e7;
    for (n && (l.unshift(n), ++a), c = l.length; 0 == l[--c];) l.pop();
    return t.d = l, t.e = a, o ? D(t, p) : t
  }

  function m(e, t, n) {
    if (e !== ~~e || e < t || e > n) throw Error(i + e)
  }

  function h(e) {
    var t, n, r, o = e.length - 1,
      a = "",
      i = e[0];
    if (o > 0) {
      for (a += i, t = 1; t < o; t++)(n = 7 - (r = e[t] + "").length) && (a += x(n)), a += r;
      (n = 7 - (r = (i = e[t]) + "").length) && (a += x(n))
    } else if (0 === i) return "0";
    for (; i % 10 == 0;) i /= 10;
    return a + i
  }
  p.absoluteValue = p.abs = function() {
    var e = new this.constructor(this);
    return e.s && (e.s = 1), e
  }, p.comparedTo = p.cmp = function(e) {
    var t, n, r, o;
    if (e = new this.constructor(e), this.s !== e.s) return this.s || -e.s;
    if (this.e !== e.e) return this.e > e.e ^ this.s < 0 ? 1 : -1;
    for (t = 0, r = this.d.length, n = r < (o = e.d.length) ? r : o; t < n; ++t)
      if (this.d[t] !== e.d[t]) return this.d[t] > e.d[t] ^ this.s < 0 ? 1 : -1;
    return r === o ? 0 : r > o ^ this.s < 0 ? 1 : -1
  }, p.decimalPlaces = p.dp = function() {
    var e = this.d.length - 1,
      t = (e - this.e) * 7;
    if (e = this.d[e])
      for (; e % 10 == 0; e /= 10) t--;
    return t < 0 ? 0 : t
  }, p.dividedBy = p.div = function(e) {
    return g(this, new this.constructor(e))
  }, p.dividedToIntegerBy = p.idiv = function(e) {
    var t = this.constructor;
    return D(g(this, new t(e), 0, 1), t.precision)
  }, p.equals = p.eq = function(e) {
    return !this.cmp(e)
  }, p.exponent = function() {
    return y(this)
  }, p.greaterThan = p.gt = function(e) {
    return this.cmp(e) > 0
  }, p.greaterThanOrEqualTo = p.gte = function(e) {
    return this.cmp(e) >= 0
  }, p.isInteger = p.isint = function() {
    return this.e > this.d.length - 2
  }, p.isNegative = p.isneg = function() {
    return this.s < 0
  }, p.isPositive = p.ispos = function() {
    return this.s > 0
  }, p.isZero = function() {
    return 0 === this.s
  }, p.lessThan = p.lt = function(e) {
    return 0 > this.cmp(e)
  }, p.lessThanOrEqualTo = p.lte = function(e) {
    return 1 > this.cmp(e)
  }, p.logarithm = p.log = function(e) {
    var t, r = this.constructor,
      i = r.precision,
      s = i + 5;
    if (void 0 === e) e = new r(10);
    else if ((e = new r(e)).s < 1 || e.eq(n)) throw Error(a + "NaN");
    if (this.s < 1) throw Error(a + (this.s ? "NaN" : "-Infinity"));
    return this.eq(n) ? new r(0) : (o = !1, t = g(S(this, s), S(e, s), s), o = !0, D(t, i))
  }, p.minus = p.sub = function(e) {
    return e = new this.constructor(e), this.s == e.s ? C(this, e) : f(this, (e.s = -e.s, e))
  }, p.modulo = p.mod = function(e) {
    var t, n = this.constructor,
      r = n.precision;
    if (!(e = new n(e)).s) throw Error(a + "NaN");
    return this.s ? (o = !1, t = g(this, e, 0, 1).times(e), o = !0, this.minus(t)) : D(new n(this), r)
  }, p.naturalExponential = p.exp = function() {
    return v(this)
  }, p.naturalLogarithm = p.ln = function() {
    return S(this)
  }, p.negated = p.neg = function() {
    var e = new this.constructor(this);
    return e.s = -e.s || 0, e
  }, p.plus = p.add = function(e) {
    return e = new this.constructor(e), this.s == e.s ? f(this, e) : C(this, (e.s = -e.s, e))
  }, p.precision = p.sd = function(e) {
    var t, n, r;
    if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(i + e);
    if (t = y(this) + 1, n = 7 * (r = this.d.length - 1) + 1, r = this.d[r]) {
      for (; r % 10 == 0; r /= 10) n--;
      for (r = this.d[0]; r >= 10; r /= 10) n++
    }
    return e && t > n ? t : n
  }, p.squareRoot = p.sqrt = function() {
    var e, t, n, r, i, s, l, u = this.constructor;
    if (this.s < 1) {
      if (!this.s) return new u(0);
      throw Error(a + "NaN")
    }
    for (e = y(this), o = !1, 0 == (i = Math.sqrt(+this)) || i == 1 / 0 ? (((t = h(this.d)).length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = c((e + 1) / 2) - (e < 0 || e % 2), r = new u(t = i == 1 / 0 ? "1e" + e : (t = i.toExponential()).slice(0, t.indexOf("e") + 1) + e)) : r = new u(i.toString()), i = l = (n = u.precision) + 3;;)
      if (r = (s = r).plus(g(this, s, l + 2)).times(.5), h(s.d).slice(0, l) === (t = h(r.d)).slice(0, l)) {
        if (t = t.slice(l - 3, l + 1), i == l && "4999" == t) {
          if (D(s, n + 1, 0), s.times(s).eq(this)) {
            r = s;
            break
          }
        } else if ("9999" != t) break;
        l += 4
      } return o = !0, D(r, n)
  }, p.times = p.mul = function(e) {
    var t, n, r, a, i, s, c, l, u, d = this.constructor,
      p = this.d,
      f = (e = new d(e)).d;
    if (!this.s || !e.s) return new d(0);
    for (e.s *= this.s, n = this.e + e.e, l = p.length, l < (u = f.length) && (i = p, p = f, f = i, s = l, l = u, u = s), i = [], r = s = l + u; r--;) i.push(0);
    for (r = u; --r >= 0;) {
      for (t = 0, a = l + r; a > r;) c = i[a] + f[r] * p[a - r - 1] + t, i[a--] = c % 1e7 | 0, t = c / 1e7 | 0;
      i[a] = (i[a] + t) % 1e7 | 0
    }
    for (; !i[--s];) i.pop();
    return t ? ++n : i.shift(), e.d = i, e.e = n, o ? D(e, d.precision) : e
  }, p.toDecimalPlaces = p.todp = function(e, t) {
    var n = this,
      r = n.constructor;
    return (n = new r(n), void 0 === e) ? n : (m(e, 0, 1e9), void 0 === t ? t = r.rounding : m(t, 0, 8), D(n, e + y(n) + 1, t))
  }, p.toExponential = function(e, t) {
    var n, r = this,
      o = r.constructor;
    return void 0 === e ? n = P(r, !0) : (m(e, 0, 1e9), void 0 === t ? t = o.rounding : m(t, 0, 8), n = P(r = D(new o(r), e + 1, t), !0, e + 1)), n
  }, p.toFixed = function(e, t) {
    var n, r, o = this.constructor;
    return void 0 === e ? P(this) : (m(e, 0, 1e9), void 0 === t ? t = o.rounding : m(t, 0, 8), n = P((r = D(new o(this), e + y(this) + 1, t)).abs(), !1, e + y(r) + 1), this.isneg() && !this.isZero() ? "-" + n : n)
  }, p.toInteger = p.toint = function() {
    var e = this.constructor;
    return D(new e(this), y(this) + 1, e.rounding)
  }, p.toNumber = function() {
    return +this
  }, p.toPower = p.pow = function(e) {
    var t, r, i, s, l, u, d = this,
      p = d.constructor,
      f = +(e = new p(e));
    if (!e.s) return new p(n);
    if (!(d = new p(d)).s) {
      if (e.s < 1) throw Error(a + "Infinity");
      return d
    }
    if (d.eq(n)) return d;
    if (i = p.precision, e.eq(n)) return D(d, i);
    if (t = e.e, u = t >= (r = e.d.length - 1), l = d.s, u) {
      if ((r = f < 0 ? -f : f) <= 9007199254740991) {
        for (s = new p(n), t = Math.ceil(i / 7 + 4), o = !1; r % 2 && k((s = s.times(d)).d, t), 0 !== (r = c(r / 2));) {
          ;
          k((d = d.times(d)).d, t)
        }
        return o = !0, e.s < 0 ? new p(n).div(s) : D(s, i)
      }
    } else if (l < 0) throw Error(a + "NaN");
    return l = l < 0 && 1 & e.d[Math.max(t, r)] ? -1 : 1, d.s = 1, o = !1, s = e.times(S(d, i + 12)), o = !0, (s = v(s)).s = l, s
  }, p.toPrecision = function(e, t) {
    var n, r, o = this,
      a = o.constructor;
    return void 0 === e ? (n = y(o), r = P(o, n <= a.toExpNeg || n >= a.toExpPos)) : (m(e, 1, 1e9), void 0 === t ? t = a.rounding : m(t, 0, 8), n = y(o = D(new a(o), e, t)), r = P(o, e <= n || n <= a.toExpNeg, e)), r
  }, p.toSignificantDigits = p.tosd = function(e, t) {
    var n = this.constructor;
    return void 0 === e ? (e = n.precision, t = n.rounding) : (m(e, 1, 1e9), void 0 === t ? t = n.rounding : m(t, 0, 8)), D(new n(this), e, t)
  }, p.toString = p.valueOf = p.val = p.toJSON = function() {
    var e = y(this),
      t = this.constructor;
    return P(this, e <= t.toExpNeg || e >= t.toExpPos)
  };
  var g = function() {
    function e(e, t) {
      var n, r = 0,
        o = e.length;
      for (e = e.slice(); o--;) n = e[o] * t + r, e[o] = n % 1e7 | 0, r = n / 1e7 | 0;
      return r && e.unshift(r), e
    }

    function t(e, t, n, r) {
      var o, a;
      if (n != r) a = n > r ? 1 : -1;
      else
        for (o = a = 0; o < n; o++)
          if (e[o] != t[o]) {
            a = e[o] > t[o] ? 1 : -1;
            break
          } return a
    }

    function n(e, t, n) {
      for (var r = 0; n--;) e[n] -= r, r = e[n] < t[n] ? 1 : 0, e[n] = 1e7 * r + e[n] - t[n];
      for (; !e[0] && e.length > 1;) e.shift()
    }
    return function(r, o, i, s) {
      var c, l, u, d, p, f, m, h, g, v, b, x, S, w, C, P, k, E, T = r.constructor,
        R = r.s == o.s ? 1 : -1,
        M = r.d,
        O = o.d;
      if (!r.s) return new T(r);
      if (!o.s) throw Error(a + "Division by zero");
      for (u = 0, l = r.e - o.e, k = O.length, C = M.length, h = (m = new T(R)).d = []; O[u] == (M[u] || 0);) ++u;
      if (O[u] > (M[u] || 0) && --l, (x = null == i ? i = T.precision : s ? i + (y(r) - y(o)) + 1 : i) < 0) return new T(0);
      if (x = x / 7 + 2 | 0, u = 0, 1 == k)
        for (d = 0, O = O[0], x++;
          (u < C || d) && x--; u++) S = 1e7 * d + (M[u] || 0), h[u] = S / O | 0, d = S % O | 0;
      else {
        for ((d = 1e7 / (O[0] + 1) | 0) > 1 && (O = e(O, d), M = e(M, d), k = O.length, C = M.length), w = k, v = (g = M.slice(0, k)).length; v < k;) g[v++] = 0;
        (E = O.slice()).unshift(0), P = O[0], O[1] >= 1e7 / 2 && ++P;
        do d = 0, (c = t(O, g, k, v)) < 0 ? (b = g[0], k != v && (b = 1e7 * b + (g[1] || 0)), (d = b / P | 0) > 1 ? (d >= 1e7 && (d = 1e7 - 1), f = (p = e(O, d)).length, v = g.length, 1 == (c = t(p, g, f, v)) && (d--, n(p, k < f ? E : O, f))) : (0 == d && (c = d = 1), p = O.slice()), (f = p.length) < v && p.unshift(0), n(g, p, v), -1 == c && (v = g.length, (c = t(O, g, k, v)) < 1 && (d++, n(g, k < v ? E : O, v))), v = g.length) : 0 === c && (d++, g = [0]), h[u++] = d, c && g[0] ? g[v++] = M[w] || 0 : (g = [M[w]], v = 1); while ((w++ < C || void 0 !== g[0]) && x--)
      }
      return !h[0] && h.shift(), m.e = l, D(m, s ? i + y(m) + 1 : i)
    }
  }();

  function v(e, t) {
    var r, a, i, c, u, d = 0,
      p = 0,
      f = e.constructor,
      m = f.precision;
    if (y(e) > 16) throw Error(s + y(e));
    if (!e.s) return new f(n);
    for (null == t ? (o = !1, u = m) : u = t, c = new f(.03125); e.abs().gte(.1);) e = e.times(c), p += 5;
    for (u += Math.log(l(2, p)) / Math.LN10 * 2 + 5 | 0, r = a = i = new f(n), f.precision = u;;) {
      if (a = D(a.times(e), u), r = r.times(++d), h((c = i.plus(g(a, r, u))).d).slice(0, u) === h(i.d).slice(0, u)) {
        for (; p--;) i = D(i.times(i), u);
        return f.precision = m, null == t ? (o = !0, D(i, m)) : i
      }
      i = c
    }
  }

  function y(e) {
    for (var t = 7 * e.e, n = e.d[0]; n >= 10; n /= 10) t++;
    return t
  }

  function b(e, t, n) {
    if (t > e.LN10.sd()) throw o = !0, n && (e.precision = n), Error(a + "LN10 precision limit exceeded");
    return D(new e(e.LN10), t)
  }

  function x(e) {
    for (var t = ""; e--;) t += "0";
    return t
  }

  function S(e, t) {
    var r, i, s, c, l, u, d, p, f, m = 1,
      v = e,
      x = v.d,
      w = v.constructor,
      C = w.precision;
    if (v.s < 1) throw Error(a + (v.s ? "NaN" : "-Infinity"));
    if (v.eq(n)) return new w(0);
    if (null == t ? (o = !1, p = C) : p = t, v.eq(10)) return null == t && (o = !0), b(w, p);
    if (p += 10, w.precision = p, i = (r = h(x)).charAt(0), !(15e14 > Math.abs(c = y(v)))) return d = b(w, p + 2, C).times(c + ""), v = S(new w(i + "." + r.slice(1)), p - 10).plus(d), w.precision = C, null == t ? (o = !0, D(v, C)) : v;
    for (; i < 7 && 1 != i || 1 == i && r.charAt(1) > 3;) i = (r = h((v = v.times(e)).d)).charAt(0), m++;
    c = y(v), i > 1 ? (v = new w("0." + r), c++) : v = new w(i + "." + r.slice(1));
    for (u = l = v = g(v.minus(n), v.plus(n), p), f = D(v.times(v), p), s = 3;;) {
      if (l = D(l.times(f), p), h((d = u.plus(g(l, new w(s), p))).d).slice(0, p) === h(u.d).slice(0, p)) return u = u.times(2), 0 !== c && (u = u.plus(b(w, p + 2, C).times(c + ""))), u = g(u, new w(m), p), w.precision = C, null == t ? (o = !0, D(u, C)) : u;
      u = d, s += 2
    }
  }

  function w(e, t) {
    var n, r, a;
    for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; 48 === t.charCodeAt(r);) ++r;
    for (a = t.length; 48 === t.charCodeAt(a - 1);) --a;
    if (t = t.slice(r, a)) {
      if (a -= r, n = n - r - 1, e.e = c(n / 7), e.d = [], r = (n + 1) % 7, n < 0 && (r += 7), r < a) {
        for (r && e.d.push(+t.slice(0, r)), a -= 7; r < a;) e.d.push(+t.slice(r, r += 7));
        r = 7 - (t = t.slice(r)).length
      } else r -= a;
      for (; r--;) t += "0";
      if (e.d.push(+t), o && (e.e > d || e.e < -d)) throw Error(s + n)
    } else e.s = 0, e.e = 0, e.d = [0];
    return e
  }

  function D(e, t, n) {
    var r, a, i, u, p, f, m, h, g = e.d;
    for (u = 1, i = g[0]; i >= 10; i /= 10) u++;
    if ((r = t - u) < 0) r += 7, a = t, m = g[h = 0];
    else {
      if ((h = Math.ceil((r + 1) / 7)) >= (i = g.length)) return e;
      for (u = 1, m = i = g[h]; i >= 10; i /= 10) u++;
      r %= 7, a = r - 7 + u
    }
    if (void 0 !== n && (p = m / (i = l(10, u - a - 1)) % 10 | 0, f = t < 0 || void 0 !== g[h + 1] || m % i, f = n < 4 ? (p || f) && (0 == n || n == (e.s < 0 ? 3 : 2)) : p > 5 || 5 == p && (4 == n || f || 6 == n && (r > 0 ? a > 0 ? m / l(10, u - a) : 0 : g[h - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7))), t < 1 || !g[0]) return f ? (i = y(e), g.length = 1, t = t - i - 1, g[0] = l(10, (7 - t % 7) % 7), e.e = c(-t / 7) || 0) : (g.length = 1, g[0] = e.e = e.s = 0), e;
    if (0 == r ? (g.length = h, i = 1, h--) : (g.length = h + 1, i = l(10, 7 - r), g[h] = a > 0 ? (m / l(10, u - a) % l(10, a) | 0) * i : 0), f)
      for (;;)
        if (0 == h) {
          1e7 == (g[0] += i) && (g[0] = 1, ++e.e);
          break
        } else {
          if (g[h] += i, 1e7 != g[h]) break;
          g[h--] = 0, i = 1
        } for (r = g.length; 0 === g[--r];) g.pop();
    if (o && (e.e > d || e.e < -d)) throw Error(s + y(e));
    return e
  }

  function C(e, t) {
    var n, r, a, i, s, c, l, u, d, p, f = e.constructor,
      m = f.precision;
    if (!e.s || !t.s) return t.s ? t.s = -t.s : t = new f(e), o ? D(t, m) : t;
    if (l = e.d, p = t.d, r = t.e, u = e.e, l = l.slice(), s = u - r) {
      for ((d = s < 0) ? (n = l, s = -s, c = p.length) : (n = p, r = u, c = l.length), s > (a = Math.max(Math.ceil(m / 7), c) + 2) && (s = a, n.length = 1), n.reverse(), a = s; a--;) n.push(0);
      n.reverse()
    } else {
      for (a = l.length, (d = a < (c = p.length)) && (c = a), a = 0; a < c; a++)
        if (l[a] != p[a]) {
          d = l[a] < p[a];
          break
        } s = 0
    }
    for (d && (n = l, l = p, p = n, t.s = -t.s), c = l.length, a = p.length - c; a > 0; --a) l[c++] = 0;
    for (a = p.length; a > s;) {
      if (l[--a] < p[a]) {
        for (i = a; i && 0 === l[--i];) l[i] = 1e7 - 1;
        --l[i], l[a] += 1e7
      }
      l[a] -= p[a]
    }
    for (; 0 === l[--c];) l.pop();
    for (; 0 === l[0]; l.shift()) --r;
    return l[0] ? (t.d = l, t.e = r, o ? D(t, m) : t) : new f(0)
  }

  function P(e, t, n) {
    var r, o = y(e),
      a = h(e.d),
      i = a.length;
    return t ? (n && (r = n - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + x(r) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (o < 0 ? "e" : "e+") + o) : o < 0 ? (a = "0." + x(-o - 1) + a, n && (r = n - i) > 0 && (a += x(r))) : o >= i ? (a += x(o + 1 - i), n && (r = n - o - 1) > 0 && (a = a + "." + x(r))) : ((r = o + 1) < i && (a = a.slice(0, r) + "." + a.slice(r)), n && (r = n - i) > 0 && (o + 1 === i && (a += "."), a += x(r))), e.s < 0 ? "-" + a : a
  }

  function k(e, t) {
    if (e.length > t) return e.length = t, !0
  }

  function E(e) {
    if (!e || "object" != typeof e) throw Error(a + "Object expected");
    var t, n, r, o = ["precision", 1, 1e9, "rounding", 0, 8, "toExpNeg", -Infinity, 0, "toExpPos", 0, 1 / 0];
    for (t = 0; t < o.length; t += 3)
      if (void 0 !== (r = e[n = o[t]])) {
        if (c(r) === r && r >= o[t + 1] && r <= o[t + 2]) this[n] = r;
        else throw Error(i + n + ": " + r)
      } if (void 0 !== (r = e[n = "LN10"])) {
      if (r == Math.LN10) this[n] = new this(r);
      else throw Error(i + n + ": " + r)
    }
    return this
  }(r = function e(t) {
    var n, r, o;

    function a(e) {
      if (!(this instanceof a)) return new a(e);
      if (this.constructor = a, e instanceof a) {
        this.s = e.s, this.e = e.e, this.d = (e = e.d) ? e.slice() : e;
        return
      }
      if ("number" == typeof e) {
        if (0 * e != 0) throw Error(i + e);
        if (e > 0) this.s = 1;
        else if (e < 0) e = -e, this.s = -1;
        else {
          this.s = 0, this.e = 0, this.d = [0];
          return
        }
        if (e === ~~e && e < 1e7) {
          this.e = 0, this.d = [e];
          return
        }
        return w(this, e.toString())
      }
      if ("string" != typeof e) throw Error(i + e);
      if (45 === e.charCodeAt(0) ? (e = e.slice(1), this.s = -1) : this.s = 1, u.test(e)) w(this, e);
      else throw Error(i + e)
    }
    if (a.prototype = p, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.clone = e, a.config = a.set = E, void 0 === t && (t = {}), t)
      for (n = 0, o = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"]; n < o.length;) !t.hasOwnProperty(r = o[n++]) && (t[r] = this[r]);
    return a.config(t), a
  }(r)).default = r.Decimal = r, n = new r(1), "function" == typeof define && define.amd ? define(function() {
    return r
  }) : void 0 !== e && e.exports ? e.exports = r : (!t && (t = "undefined" != typeof self && self && self.self == self ? self : Function("return this")()), t.Decimal = r)
}(this)