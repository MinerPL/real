"use strict";
n("752321");
var r, a = n("714919"),
  o = n("597018"),
  i = n("243889"),
  l = n("289275"),
  u = n("362776"),
  s = n("359882"),
  c = n("54704"),
  d = n("233116"),
  f = n("270700"),
  p = n("605357"),
  h = n("235344"),
  m = n("542931"),
  y = n("739952"),
  v = n("680486").codeAt,
  g = n("191881"),
  b = n("723786"),
  _ = n("733931"),
  k = n("289011"),
  C = n("173311"),
  w = n("200258"),
  S = w.set,
  N = w.getterFor("URL"),
  URLSearchParams = C.URLSearchParams,
  x = C.getState,
  P = l.URL,
  TypeError = l.TypeError,
  A = l.parseInt,
  R = Math.floor,
  F = Math.pow,
  O = s("".charAt),
  E = s(/./.exec),
  I = s([].join),
  M = s(1..toString),
  T = s([].pop),
  B = s([].push),
  D = s("".replace),
  L = s([].shift),
  V = s("".split),
  j = s("".slice),
  U = s("".toLowerCase),
  q = s([].unshift),
  K = "Invalid scheme",
  H = "Invalid host",
  z = "Invalid port",
  W = /[a-z]/i,
  G = /[\d+-.a-z]/i,
  $ = /\d/,
  Y = /^0x/i,
  Q = /^[0-7]+$/,
  Z = /^\d+$/,
  J = /^[\da-f]+$/i,
  X = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
  ee = /[\0\t\n\r #/:<>?@[\\\]^|]/,
  et = /^[\u0000-\u0020]+/,
  en = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
  er = /[\t\n\r]/g,
  ea = function(e) {
    var t, n, r, a, o, i, l, u = V(e, ".");
    if (u.length && "" === u[u.length - 1] && u.length--, (t = u.length) > 4) return e;
    for (r = 0, n = []; r < t; r++) {
      if ("" === (a = u[r])) return e;
      if (o = 10, a.length > 1 && "0" === O(a, 0) && (o = E(Y, a) ? 16 : 8, a = j(a, 8 === o ? 1 : 2)), "" === a) i = 0;
      else {
        if (!E(10 === o ? Z : 8 === o ? Q : J, a)) return e;
        i = A(a, o)
      }
      B(n, i)
    }
    for (r = 0; r < t; r++)
      if (i = n[r], r === t - 1) {
        if (i >= F(256, 5 - t)) return null
      } else if (i > 255) return null;
    for (r = 0, l = T(n); r < n.length; r++) l += n[r] * F(256, 3 - r);
    return l
  },
  eo = function(e) {
    var t, n, r, a, o, i, l, u = [0, 0, 0, 0, 0, 0, 0, 0],
      s = 0,
      c = null,
      d = 0,
      f = function() {
        return O(e, d)
      };
    if (":" === f()) {
      if (":" !== O(e, 1)) return;
      d += 2, c = ++s
    }
    for (; f();) {
      if (8 === s) return;
      if (":" === f()) {
        if (null !== c) return;
        d++, c = ++s;
        continue
      }
      for (t = n = 0; n < 4 && E(J, f());) t = 16 * t + A(f(), 16), d++, n++;
      if ("." === f()) {
        if (0 === n) return;
        if (d -= n, s > 6) return;
        for (r = 0; f();) {
          if (a = null, r > 0) {
            if ("." !== f() || !(r < 4)) return;
            d++
          }
          if (!E($, f())) return;
          for (; E($, f());) {
            if (o = A(f(), 10), null === a) a = o;
            else {
              if (0 === a) return;
              a = 10 * a + o
            }
            if (a > 255) return;
            d++
          }
          u[s] = 256 * u[s] + a, (2 == ++r || 4 === r) && s++
        }
        if (4 !== r) return;
        break
      }
      if (":" === f()) {
        if (d++, !f()) return
      } else if (f()) return;
      u[s++] = t
    }
    if (null !== c)
      for (i = s - c, s = 7; 0 !== s && i > 0;) l = u[s], u[s--] = u[c + i - 1], u[c + --i] = l;
    else if (8 !== s) return;
    return u
  },
  ei = function(e) {
    for (var t = null, n = 1, r = null, a = 0, o = 0; o < 8; o++) 0 !== e[o] ? (a > n && (t = r, n = a), r = null, a = 0) : (null === r && (r = o), ++a);
    return a > n && (t = r, n = a), t
  },
  el = function(e) {
    var t, n, r, a;
    if ("number" == typeof e) {
      for (n = 0, t = []; n < 4; n++) q(t, e % 256), e = R(e / 256);
      return I(t, ".")
    }
    if ("object" == typeof e) {
      for (n = 0, t = "", r = ei(e); n < 8; n++)(!a || 0 !== e[n]) && (a && (a = !1), r === n ? (t += n ? ":" : "::", a = !0) : (t += M(e[n], 16), n < 7 && (t += ":")));
      return "[" + t + "]"
    }
    return e
  },
  eu = {},
  es = h({}, eu, {
    " ": 1,
    '"': 1,
    "<": 1,
    ">": 1,
    "`": 1
  }),
  ec = h({}, es, {
    "#": 1,
    "?": 1,
    "{": 1,
    "}": 1
  }),
  ed = h({}, ec, {
    "/": 1,
    ":": 1,
    ";": 1,
    "=": 1,
    "@": 1,
    "[": 1,
    "\\": 1,
    "]": 1,
    "^": 1,
    "|": 1
  }),
  ef = function(e, t) {
    var n = v(e, 0);
    return n > 32 && n < 127 && !p(t, e) ? e : encodeURIComponent(e)
  },
  ep = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  },
  eh = function(e, t) {
    var n;
    return 2 === e.length && E(W, O(e, 0)) && (":" === (n = O(e, 1)) || !t && "|" === n)
  },
  em = function(e) {
    var t;
    return e.length > 1 && eh(j(e, 0, 2)) && (2 === e.length || "/" === (t = O(e, 2)) || "\\" === t || "?" === t || "#" === t)
  },
  ey = {},
  ev = {},
  eg = {},
  eb = {},
  e_ = {},
  ek = {},
  eC = {},
  ew = {},
  eS = {},
  eN = {},
  ex = {},
  eP = {},
  eA = {},
  eR = {},
  eF = {},
  eO = {},
  eE = {},
  eI = {},
  eM = {},
  eT = {},
  eB = {},
  eD = function(e, t, n) {
    var r, a, o, i = b(e);
    if (t) {
      if (a = this.parse(i)) throw new TypeError(a);
      this.searchParams = null
    } else {
      if (void 0 !== n && (r = new eD(n, !0)), a = this.parse(i, null, r)) throw new TypeError(a);
      (o = x(new URLSearchParams)).bindURL(this), this.searchParams = o
    }
  };
eD.prototype = {
  type: "URL",
  parse: function(e, t, n) {
    var a = t || ey,
      o = 0,
      i = "",
      l = !1,
      u = !1,
      s = !1;
    for (e = b(e), !t && (this.scheme = "", this.username = "", this.password = "", this.host = null, this.port = null, this.path = [], this.query = null, this.fragment = null, this.cannotBeABaseURL = !1, e = D(e, et, ""), e = D(e, en, "$1")), c = m(e = D(e, er, "")); o <= c.length;) {
      switch (d = c[o], a) {
        case ey:
          if (d && E(W, d)) i += U(d), a = ev;
          else {
            if (t) return K;
            a = eg;
            continue
          }
          break;
        case ev:
          if (d && (E(G, d) || "+" === d || "-" === d || "." === d)) i += U(d);
          else if (":" === d) {
            if (t && (this.isSpecial() !== p(ep, i) || "file" === i && (this.includesCredentials() || null !== this.port) || "file" === this.scheme && !this.host)) return;
            if (this.scheme = i, t) {
              this.isSpecial() && ep[this.scheme] === this.port && (this.port = null);
              return
            }
            i = "", "file" === this.scheme ? a = eR : this.isSpecial() && n && n.scheme === this.scheme ? a = eb : this.isSpecial() ? a = ew : "/" === c[o + 1] ? (a = e_, o++) : (this.cannotBeABaseURL = !0, B(this.path, ""), a = eM)
          } else {
            if (t) return K;
            i = "", a = eg, o = 0;
            continue
          }
          break;
        case eg:
          if (!n || n.cannotBeABaseURL && "#" !== d) return K;
          if (n.cannotBeABaseURL && "#" === d) {
            this.scheme = n.scheme, this.path = y(n.path), this.query = n.query, this.fragment = "", this.cannotBeABaseURL = !0, a = eB;
            break
          }
          a = "file" === n.scheme ? eR : ek;
          continue;
        case eb:
          if ("/" === d && "/" === c[o + 1]) a = eS, o++;
          else {
            a = ek;
            continue
          }
          break;
        case e_:
          if ("/" === d) {
            a = eN;
            break
          }
          a = eI;
          continue;
        case ek:
          if (this.scheme = n.scheme, d === r) this.username = n.username, this.password = n.password, this.host = n.host, this.port = n.port, this.path = y(n.path), this.query = n.query;
          else if ("/" === d || "\\" === d && this.isSpecial()) a = eC;
          else if ("?" === d) this.username = n.username, this.password = n.password, this.host = n.host, this.port = n.port, this.path = y(n.path), this.query = "", a = eT;
          else if ("#" === d) this.username = n.username, this.password = n.password, this.host = n.host, this.port = n.port, this.path = y(n.path), this.query = n.query, this.fragment = "", a = eB;
          else {
            this.username = n.username, this.password = n.password, this.host = n.host, this.port = n.port, this.path = y(n.path), this.path.length--, a = eI;
            continue
          }
          break;
        case eC:
          if (this.isSpecial() && ("/" === d || "\\" === d)) a = eS;
          else if ("/" === d) a = eN;
          else {
            this.username = n.username, this.password = n.password, this.host = n.host, this.port = n.port, a = eI;
            continue
          }
          break;
        case ew:
          if (a = eS, "/" !== d || "/" !== O(i, o + 1)) continue;
          o++;
          break;
        case eS:
          if ("/" !== d && "\\" !== d) {
            a = eN;
            continue
          }
          break;
        case eN:
          if ("@" === d) {
            l && (i = "%40" + i), l = !0, f = m(i);
            for (var c, d, f, h, v, g, _ = 0; _ < f.length; _++) {
              var k = f[_];
              if (":" === k && !s) {
                s = !0;
                continue
              }
              var C = ef(k, ed);
              s ? this.password += C : this.username += C
            }
            i = ""
          } else if (d === r || "/" === d || "?" === d || "#" === d || "\\" === d && this.isSpecial()) {
            if (l && "" === i) return "Invalid authority";
            o -= m(i).length + 1, i = "", a = ex
          } else i += d;
          break;
        case ex:
        case eP:
          if (t && "file" === this.scheme) {
            a = eO;
            continue
          }
          if (":" !== d || u) {
            if (d === r || "/" === d || "?" === d || "#" === d || "\\" === d && this.isSpecial()) {
              if (this.isSpecial() && "" === i) return H;
              if (t && "" === i && (this.includesCredentials() || null !== this.port)) return;
              if (h = this.parseHost(i)) return h;
              if (i = "", a = eE, t) return;
              continue
            } else "[" === d ? u = !0 : "]" === d && (u = !1), i += d
          } else {
            if ("" === i) return H;
            if (h = this.parseHost(i)) return h;
            if (i = "", a = eA, t === eP) return
          }
          break;
        case eA:
          if (E($, d)) i += d;
          else {
            if (!(d === r || "/" === d || "?" === d || "#" === d || "\\" === d && this.isSpecial()) && !t) return z;
            if ("" !== i) {
              var w = A(i, 10);
              if (w > 65535) return z;
              this.port = this.isSpecial() && w === ep[this.scheme] ? null : w, i = ""
            }
            if (t) return;
            a = eE;
            continue
          }
          break;
        case eR:
          if (this.scheme = "file", "/" === d || "\\" === d) a = eF;
          else if (n && "file" === n.scheme) switch (d) {
            case r:
              this.host = n.host, this.path = y(n.path), this.query = n.query;
              break;
            case "?":
              this.host = n.host, this.path = y(n.path), this.query = "", a = eT;
              break;
            case "#":
              this.host = n.host, this.path = y(n.path), this.query = n.query, this.fragment = "", a = eB;
              break;
            default:
              !em(I(y(c, o), "")) && (this.host = n.host, this.path = y(n.path), this.shortenPath()), a = eI;
              continue
          } else {
            a = eI;
            continue
          }
          break;
        case eF:
          if ("/" === d || "\\" === d) {
            a = eO;
            break
          }
          n && "file" === n.scheme && !em(I(y(c, o), "")) && (eh(n.path[0], !0) ? B(this.path, n.path[0]) : this.host = n.host), a = eI;
          continue;
        case eO:
          if (d === r || "/" === d || "\\" === d || "?" === d || "#" === d) {
            if (!t && eh(i)) a = eI;
            else if ("" === i) {
              if (this.host = "", t) return;
              a = eE
            } else {
              if (h = this.parseHost(i)) return h;
              if ("localhost" === this.host && (this.host = ""), t) return;
              i = "", a = eE
            }
            continue
          }
          i += d;
          break;
        case eE:
          if (this.isSpecial()) {
            if (a = eI, "/" !== d && "\\" !== d) continue
          } else if (t || "?" !== d) {
            if (t || "#" !== d) {
              if (d !== r && (a = eI, "/" !== d)) continue
            } else this.fragment = "", a = eB
          } else this.query = "", a = eT;
          break;
        case eI:
          if (d === r || "/" === d || "\\" === d && this.isSpecial() || !t && ("?" === d || "#" === d)) {
            ;
            if (".." === (v = U(v = i)) || "%2e." === v || ".%2e" === v || "%2e%2e" === v) this.shortenPath(), "/" !== d && !("\\" === d && this.isSpecial()) && B(this.path, "");
            else {
              ;
              if ("." === (g = i) || "%2e" === U(g)) "/" !== d && !("\\" === d && this.isSpecial()) && B(this.path, "");
              else "file" === this.scheme && !this.path.length && eh(i) && (this.host && (this.host = ""), i = O(i, 0) + ":"), B(this.path, i)
            }
            if (i = "", "file" === this.scheme && (d === r || "?" === d || "#" === d))
              for (; this.path.length > 1 && "" === this.path[0];) L(this.path);
            "?" === d ? (this.query = "", a = eT) : "#" === d && (this.fragment = "", a = eB)
          } else i += ef(d, ec);
          break;
        case eM:
          "?" === d ? (this.query = "", a = eT) : "#" === d ? (this.fragment = "", a = eB) : d !== r && (this.path[0] += ef(d, eu));
          break;
        case eT:
          t || "#" !== d ? d !== r && ("'" === d && this.isSpecial() ? this.query += "%27" : "#" === d ? this.query += "%23" : this.query += ef(d, eu)) : (this.fragment = "", a = eB);
          break;
        case eB:
          d !== r && (this.fragment += ef(d, es))
      }
      o++
    }
  },
  parseHost: function(e) {
    var t, n, r;
    if ("[" === O(e, 0)) {
      if ("]" !== O(e, e.length - 1) || !(t = eo(j(e, 1, -1)))) return H;
      this.host = t
    } else if (this.isSpecial()) {
      if (E(X, e = g(e)) || null === (t = ea(e))) return H;
      this.host = t
    } else {
      if (E(ee, e)) return H;
      for (r = 0, t = "", n = m(e); r < n.length; r++) t += ef(n[r], eu);
      this.host = t
    }
  },
  cannotHaveUsernamePasswordPort: function() {
    return !this.host || this.cannotBeABaseURL || "file" === this.scheme
  },
  includesCredentials: function() {
    return "" !== this.username || "" !== this.password
  },
  isSpecial: function() {
    return p(ep, this.scheme)
  },
  shortenPath: function() {
    var e = this.path,
      t = e.length;
    t && ("file" !== this.scheme || 1 !== t || !eh(e[0], !0)) && e.length--
  },
  serialize: function() {
    var e = this.scheme,
      t = this.username,
      n = this.password,
      r = this.host,
      a = this.port,
      o = this.path,
      i = this.query,
      l = this.fragment,
      u = e + ":";
    return null !== r ? (u += "//", this.includesCredentials() && (u += t + (n ? ":" + n : "") + "@"), u += el(r), null !== a && (u += ":" + a)) : "file" === e && (u += "//"), u += this.cannotBeABaseURL ? o[0] : o.length ? "/" + I(o, "/") : "", null !== i && (u += "?" + i), null !== l && (u += "#" + l), u
  },
  setHref: function(e) {
    var t = this.parse(e);
    if (t) throw new TypeError(t);
    this.searchParams.update()
  },
  getOrigin: function() {
    var e = this.scheme,
      t = this.port;
    if ("blob" === e) try {
      return new eL(e.path[0]).origin
    } catch (e) {
      return "null"
    }
    return "file" !== e && this.isSpecial() ? e + "://" + el(this.host) + (null !== t ? ":" + t : "") : "null"
  },
  getProtocol: function() {
    return this.scheme + ":"
  },
  setProtocol: function(e) {
    this.parse(b(e) + ":", ey)
  },
  getUsername: function() {
    return this.username
  },
  setUsername: function(e) {
    var t = m(b(e));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.username = "";
      for (var n = 0; n < t.length; n++) this.username += ef(t[n], ed)
    }
  },
  getPassword: function() {
    return this.password
  },
  setPassword: function(e) {
    var t = m(b(e));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.password = "";
      for (var n = 0; n < t.length; n++) this.password += ef(t[n], ed)
    }
  },
  getHost: function() {
    var e = this.host,
      t = this.port;
    return null === e ? "" : null === t ? el(e) : el(e) + ":" + t
  },
  setHost: function(e) {
    !this.cannotBeABaseURL && this.parse(e, ex)
  },
  getHostname: function() {
    var e = this.host;
    return null === e ? "" : el(e)
  },
  setHostname: function(e) {
    !this.cannotBeABaseURL && this.parse(e, eP)
  },
  getPort: function() {
    var e = this.port;
    return null === e ? "" : b(e)
  },
  setPort: function(e) {
    !this.cannotHaveUsernamePasswordPort() && ("" === (e = b(e)) ? this.port = null : this.parse(e, eA))
  },
  getPathname: function() {
    var e = this.path;
    return this.cannotBeABaseURL ? e[0] : e.length ? "/" + I(e, "/") : ""
  },
  setPathname: function(e) {
    !this.cannotBeABaseURL && (this.path = [], this.parse(e, eE))
  },
  getSearch: function() {
    var e = this.query;
    return e ? "?" + e : ""
  },
  setSearch: function(e) {
    "" === (e = b(e)) ? this.query = null: ("?" === O(e, 0) && (e = j(e, 1)), this.query = "", this.parse(e, eT)), this.searchParams.update()
  },
  getSearchParams: function() {
    return this.searchParams.facade
  },
  getHash: function() {
    var e = this.fragment;
    return e ? "#" + e : ""
  },
  setHash: function(e) {
    if ("" === (e = b(e))) {
      this.fragment = null;
      return
    }
    "#" === O(e, 0) && (e = j(e, 1)), this.fragment = "", this.parse(e, eB)
  },
  update: function() {
    this.query = this.searchParams.serialize() || null
  }
};
var eL = function(e) {
    var t = f(this, eV),
      n = k(arguments.length, 1) > 1 ? arguments[1] : void 0,
      r = S(t, new eD(e, !1, n));
    !o && (t.href = r.serialize(), t.origin = r.getOrigin(), t.protocol = r.getProtocol(), t.username = r.getUsername(), t.password = r.getPassword(), t.host = r.getHost(), t.hostname = r.getHostname(), t.port = r.getPort(), t.pathname = r.getPathname(), t.search = r.getSearch(), t.searchParams = r.getSearchParams(), t.hash = r.getHash())
  },
  eV = eL.prototype,
  ej = function(e, t) {
    return {
      get: function() {
        return N(this)[e]()
      },
      set: t && function(e) {
        return N(this)[t](e)
      },
      configurable: !0,
      enumerable: !0
    }
  };
if (o && (d(eV, "href", ej("serialize", "setHref")), d(eV, "origin", ej("getOrigin")), d(eV, "protocol", ej("getProtocol", "setProtocol")), d(eV, "username", ej("getUsername", "setUsername")), d(eV, "password", ej("getPassword", "setPassword")), d(eV, "host", ej("getHost", "setHost")), d(eV, "hostname", ej("getHostname", "setHostname")), d(eV, "port", ej("getPort", "setPort")), d(eV, "pathname", ej("getPathname", "setPathname")), d(eV, "search", ej("getSearch", "setSearch")), d(eV, "searchParams", ej("getSearchParams")), d(eV, "hash", ej("getHash", "setHash"))), c(eV, "toJSON", function() {
    return N(this).serialize()
  }, {
    enumerable: !0
  }), c(eV, "toString", function() {
    return N(this).serialize()
  }, {
    enumerable: !0
  }), P) {
  var eU = P.createObjectURL,
    eq = P.revokeObjectURL;
  eU && c(eL, "createObjectURL", u(eU, P)), eq && c(eL, "revokeObjectURL", u(eq, P))
}
_(eL, "URL"), a({
  global: !0,
  constructor: !0,
  forced: !i,
  sham: !o
}, {
  URL: eL
})