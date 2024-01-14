"use strict";
n("424973"), n("808653"), n("781738");
var r = n("280973"),
  o = Object.prototype.hasOwnProperty,
  a = Array.isArray,
  i = function() {
    for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
    return e
  }(),
  s = function(e) {
    for (; e.length > 1;) {
      var t = e.pop(),
        n = t.obj[t.prop];
      if (a(n)) {
        for (var r = [], o = 0; o < n.length; ++o) void 0 !== n[o] && r.push(n[o]);
        t.obj[t.prop] = r
      }
    }
  },
  c = function(e, t) {
    for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r) void 0 !== e[r] && (n[r] = e[r]);
    return n
  };
e.exports = {
  arrayToObject: c,
  assign: function(e, t) {
    return Object.keys(t).reduce(function(e, n) {
      return e[n] = t[n], e
    }, e)
  },
  combine: function(e, t) {
    return [].concat(e, t)
  },
  compact: function(e) {
    for (var t = [{
        obj: {
          o: e
        },
        prop: "o"
      }], n = [], r = 0; r < t.length; ++r) {
      for (var o = t[r], a = o.obj[o.prop], i = Object.keys(a), c = 0; c < i.length; ++c) {
        var l = i[c],
          u = a[l];
        "object" == typeof u && null !== u && -1 === n.indexOf(u) && (t.push({
          obj: a,
          prop: l
        }), n.push(u))
      }
    }
    return s(t), e
  },
  decode: function(e, t, n) {
    var r = e.replace(/\+/g, " ");
    if ("iso-8859-1" === n) return r.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(r)
    } catch (e) {
      return r
    }
  },
  encode: function(e, t, n, o, a) {
    if (0 === e.length) return e;
    var s = e;
    if ("symbol" == typeof e ? s = Symbol.prototype.toString.call(e) : "string" != typeof e && (s = String(e)), "iso-8859-1" === n) return escape(s).replace(/%u[0-9a-f]{4}/gi, function(e) {
      return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
    });
    for (var c = "", l = 0; l < s.length; ++l) {
      var u = s.charCodeAt(l);
      if (45 === u || 46 === u || 95 === u || 126 === u || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || a === r.RFC1738 && (40 === u || 41 === u)) {
        c += s.charAt(l);
        continue
      }
      if (u < 128) {
        c += i[u];
        continue
      }
      if (u < 2048) {
        c += i[192 | u >> 6] + i[128 | 63 & u];
        continue
      }
      if (u < 55296 || u >= 57344) {
        c += i[224 | u >> 12] + i[128 | u >> 6 & 63] + i[128 | 63 & u];
        continue
      }
      l += 1, c += i[240 | (u = 65536 + ((1023 & u) << 10 | 1023 & s.charCodeAt(l))) >> 18] + i[128 | u >> 12 & 63] + i[128 | u >> 6 & 63] + i[128 | 63 & u]
    }
    return c
  },
  isBuffer: function(e) {
    return !!e && "object" == typeof e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
  },
  isRegExp: function(e) {
    return "[object RegExp]" === Object.prototype.toString.call(e)
  },
  maybeMap: function(e, t) {
    if (a(e)) {
      for (var n = [], r = 0; r < e.length; r += 1) n.push(t(e[r]));
      return n
    }
    return t(e)
  },
  merge: function e(t, n, r) {
    if (!n) return t;
    if ("object" != typeof n) {
      if (a(t)) t.push(n);
      else {
        if (!t || "object" != typeof t) return [t, n];
        (r && (r.plainObjects || r.allowPrototypes) || !o.call(Object.prototype, n)) && (t[n] = !0)
      }
      return t
    }
    if (!t || "object" != typeof t) return [t].concat(n);
    var i = t;
    return (a(t) && !a(n) && (i = c(t, r)), a(t) && a(n)) ? (n.forEach(function(n, a) {
      if (o.call(t, a)) {
        var i = t[a];
        i && "object" == typeof i && n && "object" == typeof n ? t[a] = e(i, n, r) : t.push(n)
      } else t[a] = n
    }), t) : Object.keys(n).reduce(function(t, a) {
      var i = n[a];
      return o.call(t, a) ? t[a] = e(t[a], i, r) : t[a] = i, t
    }, i)
  }
}