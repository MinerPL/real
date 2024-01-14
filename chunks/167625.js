"use strict";
n("781738"), n("424973"), n("70102");
var r = n("380756"),
  o = Object.prototype.hasOwnProperty,
  a = Array.isArray,
  i = {
    allowDots: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decoder: r.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1
  },
  s = function(e, t) {
    return e && "string" == typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
  },
  c = function(e, t) {
    var n = {
        __proto__: null
      },
      c = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
      l = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
      u = c.split(t.delimiter, l),
      d = -1,
      p = t.charset;
    if (t.charsetSentinel)
      for (f = 0; f < u.length; ++f) 0 === u[f].indexOf("utf8=") && ("utf8=%E2%9C%93" === u[f] ? p = "utf-8" : "utf8=%26%2310003%3B" === u[f] && (p = "iso-8859-1"), d = f, f = u.length);
    for (f = 0; f < u.length; ++f)
      if (f !== d) {
        var f, m, h, g = u[f],
          v = g.indexOf("]="),
          y = -1 === v ? g.indexOf("=") : v + 1;
        if (-1 === y ? (m = t.decoder(g, i.decoder, p, "key"), h = t.strictNullHandling ? null : "") : (m = t.decoder(g.slice(0, y), i.decoder, p, "key"), h = r.maybeMap(s(g.slice(y + 1), t), function(e) {
            return t.decoder(e, i.decoder, p, "value")
          })), h && t.interpretNumericEntities && "iso-8859-1" === p) h = h.replace(/&#(\d+);/g, function(e, t) {
          return String.fromCharCode(parseInt(t, 10))
        });
        g.indexOf("[]=") > -1 && (h = a(h) ? [h] : h), o.call(n, m) ? n[m] = r.combine(n[m], h) : n[m] = h
      } return n
  },
  l = function(e, t, n, r) {
    for (var o = r ? t : s(t, n), a = e.length - 1; a >= 0; --a) {
      var i, c = e[a];
      if ("[]" === c && n.parseArrays) i = [].concat(o);
      else {
        i = n.plainObjects ? Object.create(null) : {};
        var l = "[" === c.charAt(0) && "]" === c.charAt(c.length - 1) ? c.slice(1, -1) : c,
          u = parseInt(l, 10);
        n.parseArrays || "" !== l ? !isNaN(u) && c !== l && String(u) === l && u >= 0 && n.parseArrays && u <= n.arrayLimit ? (i = [])[u] = o : "__proto__" !== l && (i[l] = o) : i = {
          0: o
        }
      }
      o = i
    }
    return o
  },
  u = function(e, t, n, r) {
    if (e) {
      var a = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
        i = /(\[[^[\]]*])/g,
        s = n.depth > 0 && /(\[[^[\]]*])/.exec(a),
        c = s ? a.slice(0, s.index) : a,
        u = [];
      if (c) {
        if (!n.plainObjects && o.call(Object.prototype, c) && !n.allowPrototypes) return;
        u.push(c)
      }
      for (var d = 0; n.depth > 0 && null !== (s = i.exec(a)) && d < n.depth;) {
        if (d += 1, !n.plainObjects && o.call(Object.prototype, s[1].slice(1, -1)) && !n.allowPrototypes) return;
        u.push(s[1])
      }
      return s && u.push("[" + a.slice(s.index) + "]"), l(u, t, n, r)
    }
  },
  d = function(e) {
    if (!e) return i;
    if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder) throw TypeError("Decoder has to be a function.");
    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var t = void 0 === e.charset ? i.charset : e.charset;
    return {
      allowDots: void 0 === e.allowDots ? i.allowDots : !!e.allowDots,
      allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : i.allowPrototypes,
      allowSparse: "boolean" == typeof e.allowSparse ? e.allowSparse : i.allowSparse,
      arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : i.arrayLimit,
      charset: t,
      charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : i.charsetSentinel,
      comma: "boolean" == typeof e.comma ? e.comma : i.comma,
      decoder: "function" == typeof e.decoder ? e.decoder : i.decoder,
      delimiter: "string" == typeof e.delimiter || r.isRegExp(e.delimiter) ? e.delimiter : i.delimiter,
      depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : i.depth,
      ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
      interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : i.interpretNumericEntities,
      parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : i.parameterLimit,
      parseArrays: !1 !== e.parseArrays,
      plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : i.plainObjects,
      strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : i.strictNullHandling
    }
  };
e.exports = function(e, t) {
  var n = d(t);
  if ("" === e || null == e) return n.plainObjects ? Object.create(null) : {};
  for (var o = "string" == typeof e ? c(e, n) : e, a = n.plainObjects ? Object.create(null) : {}, i = Object.keys(o), s = 0; s < i.length; ++s) {
    var l = i[s],
      p = u(l, o[l], n, "string" == typeof e);
    a = r.merge(a, p, n)
  }
  return !0 === n.allowSparse ? a : r.compact(a)
}