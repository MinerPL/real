"use strict";
n("424973"), n("70102");
var r = n("890741"),
  o = n("380756"),
  a = n("280973"),
  i = Object.prototype.hasOwnProperty,
  s = {
    brackets: function(e) {
      return e + "[]"
    },
    comma: "comma",
    indices: function(e, t) {
      return e + "[" + t + "]"
    },
    repeat: function(e) {
      return e
    }
  },
  c = Array.isArray,
  l = Array.prototype.push,
  u = function(e, t) {
    l.apply(e, c(t) ? t : [t])
  },
  d = Date.prototype.toISOString,
  p = a.default,
  f = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: o.encode,
    encodeValuesOnly: !1,
    format: p,
    formatter: a.formatters[p],
    indices: !1,
    serializeDate: function(e) {
      return d.call(e)
    },
    skipNulls: !1,
    strictNullHandling: !1
  },
  m = {},
  h = function e(t, n, a, i, s, l, d, p, h, g, v, y, b, x, S, w) {
    for (var D, C, P = t, k = w, E = 0, T = !1; void 0 !== (k = k.get(m)) && !T;) {
      var R = k.get(t);
      if (E += 1, void 0 !== R) {
        if (R === E) throw RangeError("Cyclic object value");
        T = !0
      }
      void 0 === k.get(m) && (E = 0)
    }
    if ("function" == typeof p ? P = p(n, P) : P instanceof Date ? P = v(P) : "comma" === a && c(P) && (P = o.maybeMap(P, function(e) {
        return e instanceof Date ? v(e) : e
      })), null === P) {
      if (s) return d && !x ? d(n, f.encoder, S, "key", y) : n;
      P = ""
    }
    if ("string" == typeof(D = P) || "number" == typeof D || "boolean" == typeof D || "symbol" == typeof D || "bigint" == typeof D || o.isBuffer(P)) return d ? [b(x ? n : d(n, f.encoder, S, "key", y)) + "=" + b(d(P, f.encoder, S, "value", y))] : [b(n) + "=" + b(String(P))];
    var M = [];
    if (void 0 === P) return M;
    if ("comma" === a && c(P)) x && d && (P = o.maybeMap(P, d)), C = [{
      value: P.length > 0 ? P.join(",") || null : void 0
    }];
    else if (c(p)) C = p;
    else {
      var O = Object.keys(P);
      C = h ? O.sort(h) : O
    }
    for (var I = i && c(P) && 1 === P.length ? n + "[]" : n, A = 0; A < C.length; ++A) {
      var N = C[A],
        L = "object" == typeof N && void 0 !== N.value ? N.value : P[N];
      if (!l || null !== L) {
        var j = c(P) ? "function" == typeof a ? a(I, N) : I : I + (g ? "." + N : "[" + N + "]");
        w.set(t, E);
        var F = r();
        F.set(m, w), u(M, e(L, j, a, i, s, l, "comma" === a && x && c(P) ? null : d, p, h, g, v, y, b, x, S, F))
      }
    }
    return M
  },
  g = function(e) {
    if (!e) return f;
    if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw TypeError("Encoder has to be a function.");
    var t = e.charset || f.charset;
    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var n = a.default;
    if (void 0 !== e.format) {
      if (!i.call(a.formatters, e.format)) throw TypeError("Unknown format option provided.");
      n = e.format
    }
    var r = a.formatters[n],
      o = f.filter;
    return ("function" == typeof e.filter || c(e.filter)) && (o = e.filter), {
      addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : f.addQueryPrefix,
      allowDots: void 0 === e.allowDots ? f.allowDots : !!e.allowDots,
      charset: t,
      charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : f.charsetSentinel,
      delimiter: void 0 === e.delimiter ? f.delimiter : e.delimiter,
      encode: "boolean" == typeof e.encode ? e.encode : f.encode,
      encoder: "function" == typeof e.encoder ? e.encoder : f.encoder,
      encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : f.encodeValuesOnly,
      filter: o,
      format: n,
      formatter: r,
      serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : f.serializeDate,
      skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : f.skipNulls,
      sort: "function" == typeof e.sort ? e.sort : null,
      strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : f.strictNullHandling
    }
  };
e.exports = function(e, t) {
  var n, o, a, i = e,
    l = g(t);
  "function" == typeof l.filter ? i = (o = l.filter)("", i) : c(l.filter) && (n = o = l.filter);
  var d = [];
  if ("object" != typeof i || null === i) return "";
  a = t && t.arrayFormat in s ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
  var p = s[a];
  if (t && "commaRoundTrip" in t && "boolean" != typeof t.commaRoundTrip) throw TypeError("`commaRoundTrip` must be a boolean, or absent");
  var f = "comma" === p && t && t.commaRoundTrip;
  !n && (n = Object.keys(i)), l.sort && n.sort(l.sort);
  for (var m = r(), v = 0; v < n.length; ++v) {
    var y = n[v];
    (!l.skipNulls || null !== i[y]) && u(d, h(i[y], y, p, f, l.strictNullHandling, l.skipNulls, l.encode ? l.encoder : null, l.filter, l.sort, l.allowDots, l.serializeDate, l.format, l.formatter, l.encodeValuesOnly, l.charset, m))
  }
  var b = d.join(l.delimiter),
    x = !0 === l.addQueryPrefix ? "?" : "";
  return l.charsetSentinel && ("iso-8859-1" === l.charset ? x += "utf8=%26%2310003%3B&" : x += "utf8=%E2%9C%93&"), b.length > 0 ? x + b : ""
}